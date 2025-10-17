import Link from "next/link";
import { CourseCard } from "@/components/CourseCard";
import { VerificationForm } from "@/components/VerificationForm";
import { client } from "@/lib/sanity.client";
import { recentCoursesQuery } from "@/lib/sanity.queries";

interface Course {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  cover?: string;
  duration?: string;
  level?: string;
  tags?: string[];
}

export const revalidate = 60;

export default async function HomePage() {
  const recentCourses: Course[] = await client.fetch(recentCoursesQuery);

  return (
    <div className="bg-white">
      
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            
            <div className="md:col-span-7">
              <div className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-8">
                Dijital Sertifika Platformu
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[0.95] tracking-tight mb-8">
                Sertifikanızı Oluşturun, Doğrulayın, Paylaşın
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed font-sans max-w-xl mb-10">
                Profesyonel eğitim sertifikaları, anında oluşturulur. Her biri benzersiz doğrulama kodu ve QR kod ile güvence altındadır.
              </p>
              <Link 
                href="/courses"
                className="inline-flex items-center px-8 py-4 border-2 border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors font-sans text-sm tracking-wide"
              >
                <span>Kurslara Göz Atın</span>
                <span className="ml-3">→</span>
              </Link>
            </div>

            
            <div className="md:col-span-5 space-y-10">
              <div className="border-l-2 border-foreground pl-6">
                <div className="text-4xl font-serif font-bold text-foreground mb-2">
                  Anında
                </div>
                <p className="text-sm text-muted font-sans">
                  Sertifika oluşturma ve PDF indirme
                </p>
              </div>
              <div className="border-l-2 border-border pl-6">
                <div className="text-4xl font-serif font-bold text-foreground mb-2">
                  Güvenli
                </div>
                <p className="text-sm text-muted font-sans">
                  Benzersiz doğrulama kodları ve QR kod
                </p>
              </div>
              <div className="border-l-2 border-border pl-6">
                <div className="text-4xl font-serif font-bold text-foreground mb-2">
                  Profesyonel
                </div>
                <p className="text-sm text-muted font-sans">
                  LinkedIn, CV ve portfolyo için uygun
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <div className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-4">
                01 — Seçin
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Kursu Tamamlayın
              </h3>
              <p className="text-muted font-sans text-sm leading-relaxed">
                Eğitiminizi başarıyla tamamladıktan sonra sertifika oluşturma sayfasına gidin.
              </p>
            </div>
            <div>
              <div className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-4">
                02 — Oluşturun
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Sertifikanızı Alın
              </h3>
              <p className="text-muted font-sans text-sm leading-relaxed">
                İsminizi girin, şablonu seçin. Sertifikanız anında oluşturulur ve görüntülenir.
              </p>
            </div>
            <div>
              <div className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-4">
                03 — Paylaşın
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Dünyaya Gösterin
              </h3>
              <p className="text-muted font-sans text-sm leading-relaxed">
                PDF olarak indirin, LinkedIn'de paylaşın veya doğrulama linki gönderin.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 border-b border-border bg-primary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="relative aspect-[4/3] bg-white border border-border p-8">
              <div className="flex flex-col justify-center h-full">
                <div className="text-6xl font-serif font-bold text-foreground mb-4">
                  Sertifika
                </div>
                <div className="text-sm font-sans uppercase tracking-[0.2em] text-muted">
                  Profesyonel Tasarım
                </div>
                <div className="mt-8 border-t border-border pt-4">
                  <div className="text-xs font-sans text-muted">
                    QR Kod • Doğrulama Kodu • PDF İndirme
                  </div>
                </div>
              </div>
            </div>
            
            
            <div>
              <div className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-6">
                Özellikler
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
                Her Detay Düşünüldü
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-foreground flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-sans">✓</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-1">
                      Anında Oluşturma
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      Form doldurur doldurmaz sertifikanız hazır. Beklemeye gerek yok.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-foreground flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-sans">✓</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-1">
                      Güvenli Doğrulama
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      Her sertifika benzersiz kod ve QR ile korunur. Sahtecilik mümkün değil.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 border border-foreground flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-sans">✓</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-1">
                      Kolay Paylaşım
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      LinkedIn, e-posta, CV'niz için mükemmel. URL ile herkese gösterin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {recentCourses.length > 0 && (
        <section className="py-24 px-6 border-b border-border">
          <div className="max-w-6xl mx-auto">
            
            <div className="mb-20">
              <div className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-6">
                Eğitimler
              </div>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight max-w-2xl">
                  Sertifika Alabileceğiniz Kurslar
                </h2>
                <Link 
                  href="/courses"
                  className="inline-flex items-center text-foreground hover:text-muted transition-colors font-sans text-sm tracking-wide"
                >
                  <span className="border-b border-foreground">Tüm Kurslar</span>
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
              {recentCourses.map((course, index) => (
                <CourseCard key={course._id} {...course} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-3">
                100%
              </div>
              <p className="text-sm text-muted font-sans uppercase tracking-wider">
                Dijital
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-3">
                Anında
              </div>
              <p className="text-sm text-muted font-sans uppercase tracking-wider">
                Oluşturma
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-3">
                QR
              </div>
              <p className="text-sm text-muted font-sans uppercase tracking-wider">
                Kod Desteği
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-3">
                PDF
              </div>
              <p className="text-sm text-muted font-sans uppercase tracking-wider">
                İndirme
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 border-b border-border bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-sans uppercase tracking-[0.2em] mb-8 text-white/70">
            Doğrulama
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
            Bir Sertifika Doğrulamak İster misiniz?
          </h2>
          <p className="text-lg md:text-xl mb-10 leading-relaxed font-sans text-white/90 max-w-2xl mx-auto">
            Elinizde bir sertifika doğrulama kodu varsa, hemen doğrulayabilir ve sertifika detaylarını görüntüleyebilirsiniz.
          </p>
          <VerificationForm />
        </div>
      </section>

      
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 leading-tight">
            Başlamaya Hazır mısınız?
          </h2>
          <p className="text-lg md:text-xl text-muted mb-12 leading-relaxed font-sans max-w-2xl mx-auto">
            Bugün bir kursu tamamlayın, yarın profesyonel sertifikanızı alın.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-10 py-5 bg-foreground text-white hover:bg-accent transition-colors font-sans text-base tracking-wide shadow-lg hover:shadow-xl"
          >
            <span>Kursları Keşfedin</span>
            <span className="ml-3">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

