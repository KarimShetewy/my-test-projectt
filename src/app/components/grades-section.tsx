import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GradesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              المراحل الدراسية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اختر المرحلة الدراسية المناسبة لك واحصل على شروحات مفصلة وتمارين تفاعلية
            </p>
          </div>

          {/* Grades Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Year */}
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200 hover-lift animate-fade-in">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">١</span>
                </div>
                <CardTitle className="text-2xl text-gray-900">الصف الأول الثانوي</CardTitle>
                <CardDescription className="text-gray-600">
                  بداية رحلتك في المرحلة الثانوية
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">المواد المتاحة:</span>
                    <span className="font-medium">١٢ مادة</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">عدد الفيديوهات:</span>
                    <span className="font-medium">١٥٠+ فيديو</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">التمارين:</span>
                    <span className="font-medium">٢٠٠+ تمرين</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/grade-1" className="w-full">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      ابدأ التعلم
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Second Year */}
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200 transform md:-translate-y-4 hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">٢</span>
                </div>
                <CardTitle className="text-2xl text-gray-900">الصف الثاني الثانوي</CardTitle>
                <CardDescription className="text-gray-600">
                  تطوير مهاراتك الأكاديمية
                </CardDescription>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  الأكثر شعبية
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">المواد المتاحة:</span>
                    <span className="font-medium">١٤ مادة</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">عدد الفيديوهات:</span>
                    <span className="font-medium">٢٠٠+ فيديو</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">التمارين:</span>
                    <span className="font-medium">٣٠٠+ تمرين</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/grade-2" className="w-full">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      ابدأ التعلم
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Third Year */}
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200 hover-lift animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">٣</span>
                </div>
                <CardTitle className="text-2xl text-gray-900">الصف الثالث الثانوي</CardTitle>
                <CardDescription className="text-gray-600">
                  استعد للثانوية العامة
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">المواد المتاحة:</span>
                    <span className="font-medium">١٦ مادة</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">عدد الفيديوهات:</span>
                    <span className="font-medium">٢٥٠+ فيديو</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">التمارين:</span>
                    <span className="font-medium">٤٠٠+ تمرين</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/grade-3" className="w-full">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      ابدأ التعلم
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
