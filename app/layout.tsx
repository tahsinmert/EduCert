import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduCert - Sertifika Oluştur ve Doğrula",
  description:
    "Online kurslarınız için kolayca sertifika oluşturun ve doğrulayın. Modern, güvenilir sertifika yönetim platformu.",
  icons: {
    icon: [
      { url: "/logo.png" },
    ],
    apple: [
      { url: "/logo.png" },
    ],
  },
  openGraph: {
    title: "EduCert - Sertifika Oluştur ve Doğrula",
    description:
      "Online kurslarınız için kolayca sertifika oluşturun ve doğrulayın.",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

