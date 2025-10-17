/**
 * Üçüncü Binyıl Akademi Kursları - Seed Script
 * 
 * Kullanım:
 * npx tsx scripts/seed-ucuncu-binyil-courses.ts
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2023-10-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function seedUcuncuBinyilCourses() {
  console.log("🎓 Üçüncü Binyıl Akademi Kursları yükleniyor...\n");

  try {
    // Önce sertifika şablonu oluştur
    console.log("📜 Sertifika şablonu oluşturuluyor...");
    const template = await client.create({
      _type: "certificateTemplate",
      title: "Üçüncü Binyıl Sertifikası",
      slug: {
        _type: "slug",
        current: "ucuncu-binyil-sertifikasi",
      },
      primaryColor: "#1E3A5F",
      issuedBy: "Üçüncü Binyıl Eğitim Kurumları",
      footerText: "Bu sertifika, katılımcının başarıyla tamamladığı eğitim programını belgeler.",
    });
    console.log("✅ Şablon oluşturuldu:", template.title);

    // Kurs 1: Web Tasarım
    console.log("\n📚 Kurslar oluşturuluyor...");
    const course1 = await client.create({
      _type: "course",
      title: "Web Tasarım ve Geliştirme",
      slug: {
        _type: "slug",
        current: "web-tasarim-ve-gelistirme",
      },
      educationType: "Web Tasarım ve Geliştirme Eğitimi",
      shortDescription:
        "HTML, CSS, JavaScript ve modern web teknolojileri ile profesyonel web siteleri tasarlayın ve geliştirin.",
      duration: "12 hafta",
      level: "beginner",
      tags: ["Web Tasarım", "HTML", "CSS", "JavaScript", "Responsive Design"],
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Bu kapsamlı web tasarım ve geliştirme eğitiminde, modern web sitelerinin nasıl tasarlanıp geliştirildiğini öğreneceksiniz. HTML5, CSS3 ve JavaScript ile responsive ve kullanıcı dostu web siteleri oluşturmayı öğrenin.",
            },
          ],
        },
      ],
    });
    console.log("✅", course1.title);

    // Kurs 2: Grafik Tasarım
    const course2 = await client.create({
      _type: "course",
      title: "Adobe Photoshop ve İllustrator",
      slug: {
        _type: "slug",
        current: "adobe-photoshop-illustrator",
      },
      educationType: "Grafik Tasarım Eğitimi",
      shortDescription:
        "Adobe Photoshop ve Illustrator ile profesyonel grafik tasarım teknikleri ve dijital içerik üretimi.",
      duration: "10 hafta",
      level: "intermediate",
      tags: ["Grafik Tasarım", "Photoshop", "Illustrator", "Adobe", "Tasarım"],
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Adobe Photoshop ve Illustrator programlarını kullanarak profesyonel grafik tasarım projelerinizi hayata geçirin. Logo tasarımı, görsel içerik üretimi ve dijital illüstrasyon tekniklerini öğrenin.",
            },
          ],
        },
      ],
    });
    console.log("✅", course2.title);

    // Kurs 3: Video Kurgu
    const course3 = await client.create({
      _type: "course",
      title: "Profesyonel Video Kurgu ve Montaj",
      slug: {
        _type: "slug",
        current: "video-kurgu-montaj",
      },
      educationType: "Video Kurgu ve Montaj Eğitimi",
      shortDescription:
        "Adobe Premiere Pro ve After Effects ile profesyonel video kurgu, montaj ve görsel efekt teknikleri.",
      duration: "8 hafta",
      level: "intermediate",
      tags: ["Video Kurgu", "Premiere Pro", "After Effects", "Montaj", "Video Production"],
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Adobe Premiere Pro ve After Effects kullanarak profesyonel video projeleri oluşturun. Kurgu teknikleri, renk düzeltme, ses düzenleme ve görsel efektler konularında uzmanlaşın.",
            },
          ],
        },
      ],
    });
    console.log("✅", course3.title);

    // Kurs 4: Dijital Pazarlama
    const course4 = await client.create({
      _type: "course",
      title: "Dijital Pazarlama ve Sosyal Medya",
      slug: {
        _type: "slug",
        current: "dijital-pazarlama-sosyal-medya",
      },
      educationType: "Dijital Pazarlama Eğitimi",
      shortDescription:
        "SEO, SEM, sosyal medya pazarlama ve dijital reklam stratejileri ile online varlığınızı güçlendirin.",
      duration: "6 hafta",
      level: "beginner",
      tags: ["Dijital Pazarlama", "SEO", "SEM", "Sosyal Medya", "Google Ads", "Instagram"],
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Dijital pazarlama dünyasında başarılı olmak için gereken tüm temel bilgileri öğrenin. SEO, Google Ads, sosyal medya stratejileri ve içerik pazarlama konularında uzmanlaşın.",
            },
          ],
        },
      ],
    });
    console.log("✅", course4.title);

    // Kurs 5: Muhasebe
    const course5 = await client.create({
      _type: "course",
      title: "Temel Muhasebe ve Ticari Yazışma",
      slug: {
        _type: "slug",
        current: "temel-muhasebe-ticari-yazisma",
      },
      educationType: "Muhasebe ve Ticari Yazışma Eğitimi",
      shortDescription:
        "Muhasebe temel kavramları, mali tablolar ve ticari yazışma kuralları ile iş hayatına hazırlık.",
      duration: "8 hafta",
      level: "beginner",
      tags: ["Muhasebe", "Ticaret", "Mali Tablolar", "Ticari Yazışma", "İş"],
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Muhasebe temel kavramlarını, mali tabloların hazırlanmasını ve ticari yazışma kurallarını öğrenin. İş dünyasında kariyeriniz için gerekli temel becerileri kazanın.",
            },
          ],
        },
      ],
    });
    console.log("✅", course5.title);

    // Kurs 6: İngilizce
    const course6 = await client.create({
      _type: "course",
      title: "İş İngilizcesi ve İletişim Becerileri",
      slug: {
        _type: "slug",
        current: "is-ingilizcesi-iletisim",
      },
      educationType: "İş İngilizcesi Eğitimi",
      shortDescription:
        "İş hayatında kullanabileceğiniz İngilizce iletişim becerileri, sunum teknikleri ve profesyonel yazışma.",
      duration: "10 hafta",
      level: "intermediate",
      tags: ["İngilizce", "İş İngilizcesi", "İletişim", "Sunum", "Business English"],
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "İş hayatında etkili İngilizce iletişim kurmayı, profesyonel sunumlar yapmayı ve resmi yazışmaları öğrenin. Toplantılarda, müzakerelerde ve e-posta yazışmalarında kullanabileceğiniz pratik İngilizce becerileri kazanın.",
            },
          ],
        },
      ],
    });
    console.log("✅", course6.title);

    // Kurs 7: Ofis Programları
    const course7 = await client.create({
      _type: "course",
      title: "Microsoft Office Uzmanlaşma",
      slug: {
        _type: "slug",
        current: "microsoft-office-uzmanlaşma",
      },
      educationType: "Ofis Programları Eğitimi",
      shortDescription:
        "Word, Excel, PowerPoint ve Outlook programlarında ileri düzey beceriler kazanın.",
      duration: "6 hafta",
      level: "intermediate",
      tags: ["Microsoft Office", "Excel", "Word", "PowerPoint", "Outlook", "Ofis"],
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Microsoft Office programlarını profesyonel düzeyde kullanmayı öğrenin. Excel'de ileri formüller ve pivot tablolar, Word'de profesyonel döküman hazırlama, PowerPoint'te etkili sunumlar oluşturma ve Outlook ile verimli e-posta yönetimi.",
            },
          ],
        },
      ],
    });
    console.log("✅", course7.title);

    // Kurs 8: Python Programlama
    const course8 = await client.create({
      _type: "course",
      title: "Python Programlama ve Veri Analizi",
      slug: {
        _type: "slug",
        current: "python-programlama-veri-analizi",
      },
      educationType: "Python Programlama Eğitimi",
      shortDescription:
        "Python programlama dili ile yazılım geliştirme ve veri analizi temellerini öğrenin.",
      duration: "12 hafta",
      level: "beginner",
      tags: ["Python", "Programlama", "Veri Analizi", "Yazılım", "Kodlama"],
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Python programlama dilinin temellerinden başlayarak veri analizi, otomasyon ve web scraping konularına kadar ilerleyin. Pandas, NumPy ve Matplotlib kütüphaneleri ile veri bilimi dünyasına giriş yapın.",
            },
          ],
        },
      ],
    });
    console.log("✅", course8.title);

    console.log("\n🎉 Tüm Üçüncü Binyıl Akademi kursları başarıyla yüklendi!");
    console.log("\n📍 Yapabilecekleriniz:");
    console.log("   1. http://localhost:3000/studio - Kursları görün ve düzenleyin");
    console.log("   2. http://localhost:3000/courses - Kurs listesini görün");
    console.log("   3. Herhangi bir kursa gidip sertifika oluşturun!");
    console.log("\n💡 İpucu: Sertifika şablonu otomatik oluşturuldu: 'Üçüncü Binyıl Sertifikası'");
  } catch (error) {
    console.error("\n❌ Hata:", error);
    console.error(
      "\nLütfen .env.local dosyanızın doğru ayarlandığından emin olun."
    );
    console.error("SANITY_PROJECT_ID ve SANITY_API_TOKEN gereklidir.");
  }
}

seedUcuncuBinyilCourses();

