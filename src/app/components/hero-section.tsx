import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-bl from-orange-50 via-white to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            <span className="text-gradient">بسطتهالك</span> للمرحلة الثانوية
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            منصة تعليمية شاملة تقدم شروحات ومراجعات في جميع المواد الدراسية
            <br />
            للمرحلة الثانوية بطريقة بسيطة ومفهومة
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-gray-700">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="font-medium">هـتشارك</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="font-medium">هـتنافس</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="font-medium">هـنجهزك</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="font-medium">هـتدرب</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/register">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3 pulse-orange hover-lift animate-bounce-in" style={{ animationDelay: '0.6s' }}>
                ابدأ رحلتك التعليمية
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 text-lg px-8 py-3">
                استكشف الدورات
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">287K+</div>
              <div className="text-gray-600">طالب مسجل</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">450+</div>
              <div className="text-gray-600">فيديو تعليمي</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">معدل الرضا</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
