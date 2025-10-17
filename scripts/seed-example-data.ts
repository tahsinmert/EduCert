/**
 * Örnek veri ekleme scripti
 * 
 * Kullanım:
 * 1. .env.local dosyanızı doldurun
 * 2. npm install
 * 3. npx tsx scripts/seed-example-data.ts
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2023-10-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function seedData() {
  console.log("🌱 Örnek veri ekleniyor...\n");

  try {
    // Sertifika şablonu oluştur
    console.log("📜 Sertifika şablonu oluşturuluyor...");
    const template = await client.create({
      _type: "certificateTemplate",
      title: "Standart Sertifika",
      slug: {
        _type: "slug",
        current: "standart-sertifika",
      },
      primaryColor: "#818CF8",
      issuedBy: "EduCert Platform",
      footerText: "Bu sertifika EduCert platformu tarafından verilmiştir.",
    });
    console.log("✅ Şablon oluşturuldu:", template.title);

    // Kurs 1
    console.log("\n📚 Kurslar oluşturuluyor...");
    const course1 = await client.create({
      _type: "course",
      title: "Web Geliştirme Temelleri",
      slug: {
        _type: "slug",
        current: "web-gelistirme-temelleri",
      },
      shortDescription:
        "HTML, CSS ve JavaScript ile web geliştirmenin temellerini öğrenin.",
      duration: "6 hafta",
      level: "beginner",
      tags: ["HTML", "CSS", "JavaScript", "Frontend"],
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Bu kurs, web geliştirmenin temellerini kapsamlı bir şekilde öğretir. HTML ile yapı oluşturmayı, CSS ile stil vermeyi ve JavaScript ile interaktif özellikler eklemeyi öğreneceksiniz.",
            },
          ],
        },
      ],
    });
    console.log("✅ Kurs oluşturuldu:", course1.title);

    // Kurs 2
    const course2 = await client.create({
      _type: "course",
      title: "React ile Modern Frontend",
      slug: {
        _type: "slug",
        current: "react-ile-modern-frontend",
      },
      shortDescription:
        "React kütüphanesi ile modern, performanslı web uygulamaları geliştirin.",
      duration: "8 hafta",
      level: "intermediate",
      tags: ["React", "JavaScript", "Frontend", "Hooks", "Components"],
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "React, modern web uygulamaları geliştirmek için en popüler JavaScript kütüphanesidir. Bu kursta React'in temellerinden ileri seviye konularına kadar her şeyi öğreneceksiniz.",
            },
          ],
        },
      ],
    });
    console.log("✅ Kurs oluşturuldu:", course2.title);

    // Kurs 3
    const course3 = await client.create({
      _type: "course",
      title: "TypeScript Mastery",
      slug: {
        _type: "slug",
        current: "typescript-mastery",
      },
      shortDescription:
        "TypeScript ile tip-güvenli, ölçeklenebilir JavaScript uygulamaları yazın.",
      duration: "4 hafta",
      level: "advanced",
      tags: ["TypeScript", "JavaScript", "Types", "Advanced"],
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "TypeScript, JavaScript'e güçlü tip sistemi ekler. Bu kurs ile büyük ölçekli projelerde daha güvenli ve sürdürülebilir kod yazabileceksiniz.",
            },
          ],
        },
      ],
    });
    console.log("✅ Kurs oluşturuldu:", course3.title);

    console.log("\n🎉 Tüm örnek veriler başarıyla eklendi!");
    console.log("\n📍 Şimdi yapabilecekleriniz:");
    console.log("   1. http://localhost:3000/studio adresinden içerikleri görün");
    console.log("   2. http://localhost:3000 adresinden kursları inceleyin");
    console.log("   3. Bir kursa gidip sertifika oluşturun!");
  } catch (error) {
    console.error("\n❌ Hata:", error);
    console.error(
      "\nLütfen .env.local dosyanızın doğru ayarlandığından emin olun."
    );
  }
}

seedData();

