"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Course {
  id: string
  name: string
  subject: string
  progress: number
  totalLessons: number
  completedLessons: number
  lastAccessed: string
  difficulty: "مبتدئ" | "متوسط" | "متقدم"
  instructor: string
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  earned: boolean
  earnedDate?: string
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "courses" | "progress" | "achievements">("overview")

  // Mock user data
  const user = {
    name: "أحمد محمد علي",
    grade: "الصف الثاني الثانوي",
    joinDate: "سبتمبر 2024",
    avatar: "أح"
  }

  const enrolledCourses: Course[] = [
    {
      id: "1",
      name: "الجبر والهندسة التحليلية",
      subject: "الرياضيات",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      lastAccessed: "منذ يومين",
      difficulty: "متوسط",
      instructor: "د. محمد أحمد"
    },
    {
      id: "2",
      name: "الميكانيكا والحركة",
      subject: "الفيزياء",
      progress: 60,
      totalLessons: 20,
      completedLessons: 12,
      lastAccessed: "منذ أسبوع",
      difficulty: "متقدم",
      instructor: "د. سارة علي"
    },
    {
      id: "3",
      name: "الكيمياء العضوية",
      subject: "الكيمياء",
      progress: 40,
      totalLessons: 18,
      completedLessons: 7,
      lastAccessed: "منذ 3 أيام",
      difficulty: "متوسط",
      instructor: "د. خالد حسن"
    }
  ]

  const achievements: Achievement[] = [
    {
      id: "1",
      title: "أول خطوة",
      description: "إكمال أول درس",
      icon: "🎯",
      earned: true,
      earnedDate: "15 أكتوبر 2024"
    },
    {
      id: "2",
      title: "طالب مجتهد",
      description: "إكمال 10 دروس",
      icon: "📚",
      earned: true,
      earnedDate: "22 أكتوبر 2024"
    },
    {
      id: "3",
      title: "متفوق في الرياضيات",
      description: "الحصول على 90% في امتحان الرياضيات",
      icon: "🏆",
      earned: true,
      earnedDate: "28 أكتوبر 2024"
    },
    {
      id: "4",
      title: "طالب مثالي",
      description: "إكمال 50 درس",
      icon: "⭐",
      earned: false
    }
  ]

  const weeklyStats = {
    hoursStudied: 12,
    lessonsCompleted: 8,
    quizzesCompleted: 5,
    averageScore: 85
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                ب
              </div>
              <span className="text-xl font-bold text-gradient">بسطتهالك</span>
            </Link>

            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="text-right">
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.grade}</p>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                {user.avatar}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`w-full text-right py-2 px-3 rounded-lg transition-colors ${
                      activeTab === "overview" ? "bg-orange-100 text-orange-700" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    نظرة عامة
                  </button>
                  <button
                    onClick={() => setActiveTab("courses")}
                    className={`w-full text-right py-2 px-3 rounded-lg transition-colors ${
                      activeTab === "courses" ? "bg-orange-100 text-orange-700" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    دوراتي
                  </button>
                  <button
                    onClick={() => setActiveTab("progress")}
                    className={`w-full text-right py-2 px-3 rounded-lg transition-colors ${
                      activeTab === "progress" ? "bg-orange-100 text-orange-700" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    التقدم
                  </button>
                  <button
                    onClick={() => setActiveTab("achievements")}
                    className={`w-full text-right py-2 px-3 rounded-lg transition-colors ${
                      activeTab === "achievements" ? "bg-orange-100 text-orange-700" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    الإنجازات
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">أهلاً بك، {user.name}</h1>
                  <p className="text-gray-600">إليك ملخص أنشطتك الأسبوعية</p>
                </div>

                {/* Weekly Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{weeklyStats.hoursStudied}</div>
                      <div className="text-sm text-gray-600">ساعات الدراسة</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-blue-500 mb-2">{weeklyStats.lessonsCompleted}</div>
                      <div className="text-sm text-gray-600">دروس مكتملة</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-green-500 mb-2">{weeklyStats.quizzesCompleted}</div>
                      <div className="text-sm text-gray-600">اختبارات مكتملة</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-purple-500 mb-2">{weeklyStats.averageScore}%</div>
                      <div className="text-sm text-gray-600">متوسط الدرجات</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>النشاط الأخير</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {enrolledCourses.slice(0, 3).map((course) => (
                        <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">{course.name}</h4>
                            <p className="text-sm text-gray-500">{course.subject} • {course.lastAccessed}</p>
                          </div>
                          <div className="text-left">
                            <div className="text-sm font-medium text-gray-900">{course.progress}%</div>
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "courses" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-gray-900">دوراتي</h1>
                  <Link href="/">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      تصفح المزيد من الدورات
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{course.name}</CardTitle>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            course.difficulty === "مبتدئ" ? "bg-green-100 text-green-700" :
                            course.difficulty === "متوسط" ? "bg-yellow-100 text-yellow-700" :
                            "bg-red-100 text-red-700"
                          }`}>
                            {course.difficulty}
                          </span>
                        </div>
                        <CardDescription>
                          {course.subject} • {course.instructor}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>التقدم</span>
                              <span>{course.completedLessons}/{course.totalLessons} دروس</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <div className="text-left mt-1">
                              <span className="text-sm font-medium text-orange-600">{course.progress}%</span>
                            </div>
                          </div>

                          <div className="flex space-x-3 space-x-reverse">
                            <Link href={`/course/${course.id}`} className="flex-1">
                              <Button variant="outline" className="w-full">
                                متابعة الدراسة
                              </Button>
                            </Link>
                            <Link href={`/course/${course.id}/quiz`}>
                              <Button className="bg-orange-500 hover:bg-orange-600">
                                اختبار
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "progress" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">تقدمي الدراسي</h1>

                {/* Monthly Progress Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>إحصائيات شهر نوفمبر</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-500 mb-2">37</div>
                        <div className="text-gray-600">دروس مكتملة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-500 mb-2">15</div>
                        <div className="text-gray-600">اختبارات مكتملة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-500 mb-2">42</div>
                        <div className="text-gray-600">ساعات دراسة</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Subject Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle>التقدم حسب المادة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "الرياضيات", progress: 75, color: "bg-blue-500" },
                        { name: "الفيزياء", progress: 60, color: "bg-purple-500" },
                        { name: "الكيمياء", progress: 40, color: "bg-green-500" },
                        { name: "اللغة العربية", progress: 80, color: "bg-orange-500" },
                        { name: "اللغة الإنجليزية", progress: 65, color: "bg-red-500" }
                      ].map((subject, index) => (
                        <div key={index} className="flex items-center space-x-4 space-x-reverse">
                          <div className="w-24 text-right text-sm font-medium text-gray-700">
                            {subject.name}
                          </div>
                          <div className="flex-1">
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className={`h-3 rounded-full transition-all duration-500 ${subject.color}`}
                                style={{ width: `${subject.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="w-12 text-left text-sm font-medium text-gray-900">
                            {subject.progress}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "achievements" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">إنجازاتي</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement) => (
                    <Card key={achievement.id} className={`transition-all duration-300 ${
                      achievement.earned ? "border-orange-200 bg-orange-50" : "border-gray-200 opacity-60"
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 space-x-reverse">
                          <div className={`text-3xl ${achievement.earned ? "" : "grayscale"}`}>
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1">{achievement.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                            {achievement.earned && achievement.earnedDate && (
                              <p className="text-xs text-orange-600 font-medium">
                                تم الحصول عليه في {achievement.earnedDate}
                              </p>
                            )}
                            {!achievement.earned && (
                              <p className="text-xs text-gray-500">لم يتم الحصول عليه بعد</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}