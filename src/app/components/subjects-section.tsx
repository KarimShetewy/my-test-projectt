import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SubjectsSection() {
  const subjects = [
    {
      name: "الرياضيات",
      icon: "📐",
      description: "الجبر والهندسة والتفاضل والتكامل",
      lessonsCount: 85,
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "الفيزياء",
      icon: "⚡",
      description: "الميكانيكا والكهرباء والضوء",
      lessonsCount: 72,
      color: "from-purple-400 to-purple-500"
    },
    {
      name: "الكيمياء",
      icon: "🧪",
      description: "الكيمياء العضوية وغير العضوية",
      lessonsCount: 68,
      color: "from-green-400 to-green-500"
    },
    {
      name: "الأحياء",
      icon: "🔬",
      description: "علم النبات والحيوان والوراثة",
      lessonsCount: 64,
      color: "from-teal-400 to-teal-500"
    },
    {
      name: "اللغة العربية",
      icon: "📚",
      description: "النحو والصرف والأدب والبلاغة",
      lessonsCount: 78,
      color: "from-orange-400 to-orange-500"
    },
    {
      name: "اللغة الإنجليزية",
      icon: "🌍",
      description: "القواعد والمحادثة والأدب",
      lessonsCount: 82,
      color: "from-red-400 to-red-500"
    },
    {
      name: "التاريخ",
      icon: "🏛️",
      description: "التاريخ المصري والعربي والعالمي",
      lessonsCount: 56,
      color: "from-yellow-400 to-yellow-500"
    },
    {
      name: "الجغرافيا",
      icon: "🌍",
      description: "الجغرافيا الطبيعية والبشرية",
      lessonsCount: 48,
      color: "from-indigo-400 to-indigo-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              المواد الدراسية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تصفح جميع المواد الدراسية واختر ما تحتاج لدراسته مع شروحات مفصلة وتمارين تطبيقية
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {subjects.map((subject, index) => (
              <Card
                key={subject.name}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${subject.color} rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl`}>
                    {subject.icon}
                  </div>
                  <CardTitle className="text-lg text-center text-gray-900">
                    {subject.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {subject.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    {subject.lessonsCount} درس متاح
                  </div>
                  <Link href={`/subject/${subject.name.replace(/\s+/g, '-').toLowerCase()}`}>
                    <Button variant="outline" size="sm" className="w-full text-orange-600 border-orange-200 hover:bg-orange-50">
                      ابدأ الدراسة
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                جاهز لبدء رحلتك التعليمية؟
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                انضم لآلاف الطلاب الذين حققوا نتائج مميزة من خلال منصة بسطتهالك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8">
                    إنشاء حساب مجاني
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8">
                    مشاهدة عرض توضيحي
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
