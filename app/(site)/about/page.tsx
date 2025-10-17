import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda - EduCert",
  description:
    "EduCert, online eğitim platformları için profesyonel dijital sertifika çözümü sunar.",
  openGraph: {
    title: "Hakkımızda - EduCert",
    description:
      "Profesyonel dijital sertifika platformu. Anında oluştur, güvenle doğrula.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      
      <section className="border-b border-border py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <div className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-8">
              Hakkımızda
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[0.95] mb-10">
              Dijital Sertifika Çözümü
            </h1>
            <p className="text-2xl md:text-3xl text-muted leading-relaxed font-sans font-light max-w-3xl">
              Online eğitim platformları için profesyonel, güvenli ve anında
              oluşturulabilen dijital sertifikalar.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            <div>
              <h2 className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-6">
                Misyon
              </h2>
              <p className="text-xl text-foreground leading-relaxed font-sans">
                Eğitim başarılarının doğrulanabilir ve paylaşılabilir olmasını
                sağlamak, katılımcıların kariyerlerinde güvenilir belgelerle
                ilerlemelerini desteklemek.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-6">
                Vizyon
              </h2>
              <p className="text-xl text-foreground leading-relaxed font-sans">
                Türkiye'nin en güvenilir dijital sertifika platformu olmak,
                tüm eğitim kuruluşları için standart çözüm haline gelmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              Platform Hikayesi
            </h2>
          </div>
          <div className="space-y-8 text-lg text-muted leading-relaxed font-sans">
            <p>
              EduCert, online eğitim sektöründeki sertifika doğrulama
              ihtiyacından doğdu. Geleneksel kağıt sertifikaların
              doğrulanmasının zorluğu ve dijital sertifikaların güvenilirlik
              sorunları, modern bir çözüm gerektiriyordu.
            </p>
            <p>
              Platform, her sertifikaya benzersiz doğrulama kodu ve QR kod
              atayarak, işverenlerin ve eğitim kurumlarının sertifika
              geçerliliğini anında kontrol edebilmesini sağlar. Bu sayede hem
              katılımcılar hem de kurumlar için güvenilir bir ekosistem
              oluşturulur.
            </p>
            <p>
              Modern web teknolojileri ile geliştirilmiş olan sistem, yüksek
              performans, kullanıcı dostu arayüz ve profesyonel tasarım
              standartlarını bir araya getirir.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Platform Özellikleri
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Anında Oluşturma
              </h3>
              <p className="text-muted leading-relaxed font-sans">
                Sertifikalar, form doldurulduktan hemen sonra oluşturulur ve
                görüntülenir. PDF indirme seçeneği ile kullanıcılar belgelerini
                anında alabilir.
              </p>
            </div>

            
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Güvenli Doğrulama
              </h3>
              <p className="text-muted leading-relaxed font-sans">
                Her sertifika benzersiz doğrulama kodu ve QR kod ile korunur.
                Doğrulama sayfası üzerinden sertifika geçerliliği kontrol
                edilebilir.
              </p>
            </div>

            
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Profesyonel Tasarım
              </h3>
              <p className="text-muted leading-relaxed font-sans">
                Sertifika şablonları profesyonel standartlara uygun olarak
                tasarlanmıştır. Özelleştirilebilir renk ve içerik seçenekleri
                mevcuttur.
              </p>
            </div>

            
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Kolay Paylaşım
              </h3>
              <p className="text-muted leading-relaxed font-sans">
                Sertifikalar LinkedIn, CV ve portfolyolarda kolayca
                paylaşılabilir. Benzersiz URL ile erişim sağlanır.
              </p>
            </div>

            
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Yüksek Performans
              </h3>
              <p className="text-muted leading-relaxed font-sans">
                Next.js 15 ile geliştirilmiş platform, hızlı sayfa yüklemeleri
                ve kesintisiz kullanıcı deneyimi sunar.
              </p>
            </div>

            
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Responsive Tasarım
              </h3>
              <p className="text-muted leading-relaxed font-sans">
                Tüm cihazlarda (mobil, tablet, masaüstü) kusursuz çalışan
                responsive tasarım ile her yerden erişim imkanı.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-3">
                Anında
              </div>
              <p className="text-sm text-muted font-sans uppercase tracking-wider">
                Sertifika Oluşturma
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-3">
                %100
              </div>
              <p className="text-sm text-muted font-sans uppercase tracking-wider">
                Güvenli Doğrulama
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-3">
                PDF
              </div>
              <p className="text-sm text-muted font-sans uppercase tracking-wider">
                İndirme Seçeneği
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-3">
                QR
              </div>
              <p className="text-sm text-muted font-sans uppercase tracking-wider">
                Kod Entegrasyonu
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

