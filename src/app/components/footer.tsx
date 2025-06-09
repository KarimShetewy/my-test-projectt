import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                ب
              </div>
              <span className="text-2xl font-bold text-white">بسطتهالك</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              منصة تعليمية شاملة للمرحلة الثانوية تقدم أفضل المحتوى التعليمي والتدريبي لطلاب الثانوية العامة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-orange-400 transition-colors">
                  الدورات
                </Link>
              </li>
              <li>
                <Link href="/grades" className="text-gray-400 hover:text-orange-400 transition-colors">
                  المراحل الدراسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Years */}
          <div>
            <h3 className="text-lg font-semibold mb-4">المراحل الدراسية</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/grade-1" className="text-gray-400 hover:text-orange-400 transition-colors">
                  الصف الأول الثانوي
                </Link>
              </li>
              <li>
                <Link href="/grade-2" className="text-gray-400 hover:text-orange-400 transition-colors">
                  الصف الثاني الثانوي
                </Link>
              </li>
              <li>
                <Link href="/grade-3" className="text-gray-400 hover:text-orange-400 transition-colors">
                  الصف الثالث الثانوي
                </Link>
              </li>
              <li>
                <Link href="/exams" className="text-gray-400 hover:text-orange-400 transition-colors">
                  الامتحانات
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-orange-400 transition-colors">
                  المراجعات
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📧</span>
                </div>
                <span className="text-gray-400">contact@bassthalk.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📱</span>
                </div>
                <span className="text-gray-400">+20 123 456 7890</span>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-sm text-gray-400 mb-3">تابعنا على:</p>
                <div className="flex space-x-4 space-x-reverse">
                  <a href="https://www.facebook.com/bassthalkedu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                    <span className="text-white">FB</span>
                  </a>
                  <a href="https://www.youtube.com/channel/UCdur25RCItdfoXA89ORWSkw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                    <span className="text-white">YT</span>
                  </a>
                  <a href="https://www.instagram.com/mohamedsalah.bassthalk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                    <span className="text-white">IG</span>
                  </a>
                  <a href="https://twitter.com/bassthalk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                    <span className="text-white">TW</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 بسطتهالك. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Developer & Designer: Omar Saleh (@Om4rS4leh)
          </p>
        </div>
      </div>
    </footer>
  )
}
