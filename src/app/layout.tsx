import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "بسطتهالك - منصة تعليمية للمرحلة الثانوية",
  description: "منصة تعليمية شاملة للمرحلة الثانوية تقدم شروحات ومراجعات في جميع المواد الدراسية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

