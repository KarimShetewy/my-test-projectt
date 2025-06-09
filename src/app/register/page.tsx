"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  password?: string
  confirmPassword?: string
  grade?: string
  terms?: string
  general?: string
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    grade: "",
    terms: false
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return "الاسم الكامل مطلوب"
    if (name.trim().length < 3) return "الاسم يجب أن يكون 3 أحرف على الأقل"
    return undefined
  }

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return "رقم الهاتف مطلوب"
    if (!/^01[0-2,5][0-9]{8}$/.test(phone)) return "رقم الهاتف غير صحيح"
    return undefined
  }

  const validateEmail = (email: string): string | undefined => {
    if (!email) return "البريد الإلكتروني مطلوب"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "البريد الإلكتروني غير صحيح"
    return undefined
  }

  const validatePassword = (password: string): string | undefined => {
    if (!password) return "كلمة المرور مطلوبة"
    if (password.length < 8) return "كلمة المرور يجب أن تكون 8 أحرف على الأقل"
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return "كلمة المرور يجب أن تحتوي على حرف كبير وصغير ورقم"
    return undefined
  }

  const validateConfirmPassword = (password: string, confirmPassword: string): string | undefined => {
    if (!confirmPassword) return "تأكيد كلمة المرور مطلوب"
    if (password !== confirmPassword) return "كلمات المرور غير متطابقة"
    return undefined
  }

  const validateGrade = (grade: string): string | undefined => {
    if (!grade) return "الصف الدراسي مطلوب"
    return undefined
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })

    // Clear errors when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    // Validate all fields
    const newErrors: FormErrors = {}

    const nameError = validateName(formData.name)
    if (nameError) newErrors.name = nameError

    const phoneError = validatePhone(formData.phone)
    if (phoneError) newErrors.phone = phoneError

    const emailError = validateEmail(formData.email)
    if (emailError) newErrors.email = emailError

    const passwordError = validatePassword(formData.password)
    if (passwordError) newErrors.password = passwordError

    const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword)
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError

    const gradeError = validateGrade(formData.grade)
    if (gradeError) newErrors.grade = gradeError

    if (!formData.terms) {
      newErrors.terms = "يجب الموافقة على الشروط والأحكام"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    // Simulate registration API call
    setTimeout(() => {
      // Simulate random success/error for demo
      if (Math.random() > 0.2) {
        // Success - redirect to dashboard
        window.location.href = "/dashboard"
      } else {
        setErrors({ general: "حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى." })
        setIsLoading(false)
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-bl from-orange-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 space-x-reverse">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              ب
            </div>
            <span className="text-3xl font-bold text-gradient">بسطتهالك</span>
          </Link>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl text-gray-900">إنشاء حساب جديد</CardTitle>
            <CardDescription className="text-gray-600">
              انضم لأكثر من 287 ألف طالب وابدأ رحلتك التعليمية معنا
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* General Error */}
            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-700 text-sm text-center">{errors.general}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-right block">
                  الاسم الكامل
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="ادخل اسمك الكامل"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`text-right ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm text-right">{errors.name}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-right block">
                  رقم الهاتف
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="01234567890"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`text-right ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm text-right">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-right block">
                  البريد الإلكتروني
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`text-right ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                  dir="ltr"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm text-right">{errors.email}</p>
                )}
              </div>

              {/* Grade Selection */}
              <div className="space-y-2">
                <Label htmlFor="grade" className="text-right block">
                  الصف الدراسي
                </Label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-right ${
                    errors.grade ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">اختر الصف الدراسي</option>
                  <option value="grade-1">الصف الأول الثانوي</option>
                  <option value="grade-2">الصف الثاني الثانوي</option>
                  <option value="grade-3">الصف الثالث الثانوي</option>
                </select>
                {errors.grade && (
                  <p className="text-red-500 text-sm text-right">{errors.grade}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-right block">
                  كلمة المرور
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="ادخل كلمة مرور قوية"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`text-right ${errors.password ? 'border-red-500 focus:border-red-500' : ''}`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm text-right">{errors.password}</p>
                )}
                <p className="text-xs text-gray-500 text-right">
                  كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير وصغير ورقم
                </p>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-right block">
                  تأكيد كلمة المرور
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="أعد ادخال كلمة المرور"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`text-right ${errors.confirmPassword ? 'border-red-500 focus:border-red-500' : ''}`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm text-right">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-2">
                <div className="flex items-start space-x-2 space-x-reverse">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    أوافق على{" "}
                    <Link href="/terms" className="text-orange-500 hover:text-orange-600">
                      شروط الاستخدام
                    </Link>
                    {" "}و{" "}
                    <Link href="/privacy" className="text-orange-500 hover:text-orange-600">
                      سياسة الخصوصية
                    </Link>
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-red-500 text-sm text-right">{errors.terms}</p>
                )}
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-3"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>جاري إنشاء الحساب...</span>
                  </div>
                ) : "إنشاء الحساب"}
              </Button>
            </form>

            {/* Login Link */}
            <div className="text-center pt-4 border-t">
              <p className="text-gray-600 text-sm">
                لديك حساب بالفعل؟{" "}
                <Link href="/login" className="text-orange-500 hover:text-orange-600 font-medium">
                  تسجيل الدخول
                </Link>
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-2">
              <h4 className="font-medium text-orange-800 text-sm">مميزات الاشتراك:</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• وصول لجميع الدروس والشروحات</li>
                <li>• تمارين تفاعلية وامتحانات</li>
                <li>• متابعة تقدمك الدراسي</li>
                <li>• دعم فني على مدار 24 ساعة</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-500 hover:text-orange-500 text-sm">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}
