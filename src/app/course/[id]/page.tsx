"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Lesson {
  id: string
  title: string
  duration: string
  completed: boolean
  locked: boolean
  type: "video" | "quiz" | "exercise"
  description: string
}

interface CourseData {
  id: string
  title: string
  subject: string
  instructor: string
  description: string
  totalLessons: number
  completedLessons: number
  progress: number
  difficulty: "مبتدئ" | "متوسط" | "متقدم"
  rating: number
  enrolledStudents: number
}

export default function CoursePage() {
  const params = useParams()
  const courseId = params.id as string
  const [activeLesson, setActiveLesson] = useState<string | null>(null)

  // Mock course data
  const courseData: CourseData = {
    id: courseId,
    title: "الجبر والهندسة التحليلية",
    subject: "الرياضيات",
    instructor: "د. محمد أحمد",
    description: "دورة شاملة في الجبر والهندسة التحليلية للصف الثاني الثانوي، تشمل المعادلات والمتباينات والدوال والهندسة التحليلية",
    totalLessons: 24,
    completedLessons: 18,
    progress: 75,
    difficulty: "متوسط",
    rating: 4.8,
    enrolledStudents: 1250
  }

  const lessons: Lesson[] = [
    {
      id: "1",
      title: "مقدمة في الجبر",
      duration: "15 دقيقة",
      completed: true,
      locked: false,
      type: "video",
      description: "تعريف الجبر والمفاهيم الأساسية"
    },
    {
      id: "2",
      title: "العمليات الجبرية الأساسية",
      duration: "20 دقيقة",
      completed: true,
      locked: false,
      type: "video",
      description: "الجمع والطرح والضرب والقسمة في الجبر"
    },
    {
      id: "3",
      title: "تمارين العمليات الجبرية",
      duration: "10 دقائق",
      completed: true,
      locked: false,
      type: "exercise",
      description: "تمارين تطبيقية على العمليات الجبرية"
    },
    {
      id: "4",
      title: "المعادلات الخطية",
      duration: "25 دقيقة",
      completed: true,
      locked: false,
      type: "video",
      description: "حل المعادلات الخطية في متغير واحد"
    },
    {
      id: "5",
      title: "اختبار المعادلات الخطية",
      duration: "15 دقيقة",
      completed: false,
      locked: false,
      type: "quiz",
      description: "اختبار تقييمي على المعادلات الخطية"
    },
    {
      id: "6",
      title: "المعادلات التربيعية",
      duration: "30 دقيقة",
      completed: false,
      locked: false,
      type: "video",
      description: "حل المعادلات التربيعية بالطرق المختلفة"
    },
    {
      id: "7",
      title: "الدوال الخطية",
      duration: "22 دقيقة",
      completed: false,
      locked: true,
      type: "video",
      description: "تعريف الدوال الخطية ورسمها"
    },
    {
      id: "8",
      title: "الهندسة التحليلية",
      duration: "35 دقيقة",
      completed: false,
      locked: true,
      type: "video",
      description: "مقدمة في الهندسة التحليلية والمستوى الإحداثي"
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return "🎥"
      case "quiz": return "📝"
      case "exercise": return "💪"
      default: return "📚"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video": return "bg-blue-100 text-blue-700"
      case "quiz": return "bg-red-100 text-red-700"
      case "exercise": return "bg-green-100 text-green-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-orange-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>العودة للوحة التحكم</span>
            </Link>

            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                ب
              </div>
              <span className="text-xl font-bold text-gradient">بسطتهالك</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{courseData.title}</CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    courseData.difficulty === "مبتدئ" ? "bg-green-100 text-green-700" :
                    courseData.difficulty === "متوسط" ? "bg-yellow-100 text-yellow-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {courseData.difficulty}
                  </span>
                </div>
                <CardDescription>
                  {courseData.subject} • {courseData.instructor}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {courseData.description}
                </p>

                {/* Progress */}
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>التقدم</span>
                    <span>{courseData.completedLessons}/{courseData.totalLessons} دروس</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-orange-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${courseData.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-left mt-1">
                    <span className="text-sm font-medium text-orange-600">{courseData.progress}%</span>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-500">⭐</div>
                    <div className="text-sm text-gray-600">{courseData.rating}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-500">👥</div>
                    <div className="text-sm text-gray-600">{courseData.enrolledStudents}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    متابعة من حيث توقفت
                  </Button>
                  <Button variant="outline" className="w-full">
                    تحميل المواد
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lessons List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">محتوى الدورة</h1>
                <p className="text-gray-600">اختر درس لبدء التعلم</p>
              </div>

              <div className="space-y-4">
                {lessons.map((lesson, index) => (
                  <Card
                    key={lesson.id}
                    className={`transition-all duration-300 cursor-pointer hover:shadow-lg ${
                      lesson.locked ? "opacity-50 cursor-not-allowed" : ""
                    } ${
                      activeLesson === lesson.id ? "ring-2 ring-orange-500 border-orange-200" : ""
                    }`}
                    onClick={() => !lesson.locked && setActiveLesson(lesson.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 space-x-reverse">
                        {/* Lesson Number */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                          lesson.completed ? "bg-green-500 text-white" :
                          lesson.locked ? "bg-gray-300 text-gray-500" :
                          "bg-orange-500 text-white"
                        }`}>
                          {lesson.completed ? "✓" : index + 1}
                        </div>

                        {/* Lesson Content */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 space-x-reverse mb-2">
                            <h3 className="font-bold text-gray-900">{lesson.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(lesson.type)}`}>
                              {getTypeIcon(lesson.type)} {lesson.type === "video" ? "فيديو" : lesson.type === "quiz" ? "اختبار" : "تمرين"}
                            </span>
                            {lesson.locked && (
                              <span className="text-gray-400">🔒</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
                          <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                            <span>⏱️ {lesson.duration}</span>
                            {lesson.completed && <span className="text-green-600">مكتمل</span>}
                          </div>
                        </div>

                        {/* Action Button */}
                        <div>
                          {lesson.locked ? (
                            <Button variant="ghost" size="sm" disabled>
                              مقفل
                            </Button>
                          ) : lesson.completed ? (
                            <Button variant="outline" size="sm">
                              مراجعة
                            </Button>
                          ) : (
                            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                              {lesson.type === "video" ? "مشاهدة" : lesson.type === "quiz" ? "بدء الاختبار" : "حل التمارين"}
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Video Player Mockup */}
                      {activeLesson === lesson.id && lesson.type === "video" && (
                        <div className="mt-6 pt-6 border-t">
                          <div className="bg-black rounded-lg aspect-video flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="text-6xl mb-4">▶️</div>
                              <h4 className="text-xl font-bold mb-2">{lesson.title}</h4>
                              <p className="text-gray-300">انقر للتشغيل • {lesson.duration}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex space-x-4 space-x-reverse">
                              <Button variant="outline" size="sm">
                                📝 ملاحظات
                              </Button>
                              <Button variant="outline" size="sm">
                                📊 الاختبار
                              </Button>
                              <Button variant="outline" size="sm">
                                💾 تحميل
                              </Button>
                            </div>
                            <div className="flex space-x-2 space-x-reverse">
                              <Button variant="outline" size="sm">
                                السابق
                              </Button>
                              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                                التالي
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Quiz Mockup */}
                      {activeLesson === lesson.id && lesson.type === "quiz" && (
                        <div className="mt-6 pt-6 border-t">
                          <div className="bg-blue-50 rounded-lg p-6">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">اختبار: {lesson.title}</h4>
                            <div className="space-y-4">
                              <div className="bg-white p-4 rounded-lg">
                                <p className="font-medium mb-3">السؤال 1: ما هو حل المعادلة 2x + 5 = 15؟</p>
                                <div className="space-y-2">
                                  <label className="flex items-center space-x-2 space-x-reverse">
                                    <input type="radio" name="q1" value="a" />
                                    <span>x = 5</span>
                                  </label>
                                  <label className="flex items-center space-x-2 space-x-reverse">
                                    <input type="radio" name="q1" value="b" />
                                    <span>x = 10</span>
                                  </label>
                                  <label className="flex items-center space-x-2 space-x-reverse">
                                    <input type="radio" name="q1" value="c" />
                                    <span>x = 7.5</span>
                                  </label>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <Button variant="outline">
                                  حفظ وإغلاق
                                </Button>
                                <Button className="bg-orange-500 hover:bg-orange-600">
                                  التالي
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
