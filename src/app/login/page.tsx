"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface FormErrors {
  phone?: string
  password?: string
  code?: string
  general?: string
}

export default function LoginPage() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    code: ""
  })
  const [loginMethod, setLoginMethod] = useState<"password" | "code">("password")
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isCodeSent, setIsCodeSent] = useState(false)

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return "رقم الهاتف مطلوب"
    if (!/^01[0-2,5][0-9]{8}$/.test(phone)) return "رقم الهاتف غير صحيح"
    return undefined
  }

  const validatePassword = (password: string): string | undefined => {
    if (!password) return "كلمة المرور مطلوبة"
    if (password.length < 6) return "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
    return undefined
  }

  const validateCode = (code: string): string | undefined => {
    if (!code) return "رمز التحقق مطلوب"
    if (!/^\d{6}$/.test(code)) return "رمز التحقق يجب أن يكون 6 أرقام"
    return undefined
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear errors when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      })
    }
  }

  const handleSendCode = async () => {
    const phoneError = validatePhone(formData.phone)
    if (phoneError) {
      setErrors({ phone: phoneError })
      return
    }

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsCodeSent(true)
      setIsLoading(false)
    }, 1500)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    // Validate based on login method
    const newErrors: FormErrors = {}

    const phoneError = validatePhone(formData.phone)
    if (phoneError) newErrors.phone = phoneError

    if (loginMethod === "password") {
      const passwordError = validatePassword(formData.password)
      if (passwordError) newErrors.password = passwordError
    } else {
      const codeError = validateCode(formData.code)
      if (codeError) newErrors.code = codeError
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    // Simulate login API call
    setTimeout(() => {
      // Simulate random success/error for demo
      if (Math.random() > 0.3) {
        // Success - redirect to dashboard
        window.location.href = "/dashboard"
      } else {
        setErrors({ general: "بيانات الدخول غير صحيحة. يرجى المحاولة مرة أخرى." })
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
            <CardTitle className="text-2xl text-gray-900">تسجيل الدخول</CardTitle>
            <CardDescription className="text-gray-600">
              ادخل علي حسابك بإدخال رقم الهاتف و كلمة المرور المسجل بهم من قبل
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Login Method Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setLoginMethod("password")}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                  loginMethod === "password"
                    ? "bg-white text-orange-600 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                كلمة المرور
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod("code")}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                  loginMethod === "code"
                    ? "bg-white text-orange-600 shadow-sm"
                    : "text-gray-500"
                }`}
              >
                رمز التحقق
              </button>
            </div>

            {/* General Error */}
            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-red-700 text-sm text-center">{errors.general}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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

              {/* Password or Code */}
              {loginMethod === "password" ? (
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-right block">
                    كلمة السر
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="ادخل كلمة المرور"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`text-right ${errors.password ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm text-right">{errors.password}</p>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="code" className="text-right block">
                    رمز التحقق
                  </Label>
                  <Input
                    id="code"
                    name="code"
                    type="text"
                    placeholder="ادخل رمز التحقق"
                    value={formData.code}
                    onChange={handleInputChange}
                    className={`text-right ${errors.code ? 'border-red-500 focus:border-red-500' : ''}`}
                    maxLength={6}
                  />
                  {errors.code && (
                    <p className="text-red-500 text-sm text-right">{errors.code}</p>
                  )}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="w-full mt-2"
                    onClick={handleSendCode}
                    disabled={isLoading || !formData.phone}
                  >
                    {isLoading && !isCodeSent ? (
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                        <span>جاري الإرسال...</span>
                      </div>
                    ) : isCodeSent ? "تم إرسال الرمز" : "إرسال رمز التحقق"}
                  </Button>
                  {isCodeSent && (
                    <p className="text-green-600 text-sm text-center">تم إرسال رمز التحقق لرقم هاتفك</p>
                  )}
                </div>
              )}

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-3"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>جاري تسجيل الدخول...</span>
                  </div>
                ) : "تسجيل الدخول"}
              </Button>

              {/* Forgot Password */}
              {loginMethod === "password" && (
                <div className="text-center">
                  <Link href="/forgot-password" className="text-orange-500 hover:text-orange-600 text-sm">
                    نسيت كلمة المرور؟
                  </Link>
                </div>
              )}
            </form>

            {/* Register Link */}
            <div className="text-center pt-4 border-t">
              <p className="text-gray-600 text-sm">
                ليس لديك حساب؟{" "}
                <Link href="/register" className="text-orange-500 hover:text-orange-600 font-medium">
                  إنشاء حساب جديد
                </Link>
              </p>
            </div>

            {/* Notifications */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🔔</span>
                </div>
                <span className="text-orange-800 text-sm">Enable notifications</span>
              </div>
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
