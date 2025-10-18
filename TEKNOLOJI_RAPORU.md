# EduCert Projesi - Kullanılan Teknolojiler

**Öğrenci:** Tahsin Mert Mutlu  
**Proje:** EduCert - Online Sertifika Sistemi  
**Tarih:** Ekim 2025

---

## Proje Hakkında

EduCert, online eğitim platformları için sertifika oluşturma ve doğrulama sistemidir. Kullanıcılar kurs tamamladıklarında otomatik sertifika alabilir, PDF/PNG olarak indirebilir ve QR kod ile doğrulayabilirler.

---

## Kullandığım Teknolojiler

### 1. **Next.js 15** (Ana Framework)
- React tabanlı modern web framework'ü
- Hem frontend hem backend kodlarını aynı projede yazabildim
- Sayfa yüklenmeleri çok hızlı (Server-Side Rendering sayesinde)
- SEO için otomatik optimizasyon yapıyor

### 2. **React 19**
- Kullanıcı arayüzü için component-based yapı
- Hooks kullandım: `useState`, `useEffect`, `useRef`
- Her şey modüler ve tekrar kullanılabilir

### 3. **TypeScript**
- JavaScript'e tip güvenliği ekledim
- Hataları kod yazarken yakalayabiliyorum
- Daha profesyonel kod yazmayı öğrendim

### 4. **Tailwind CSS**
- Hızlı stil yazabilmek için utility-first CSS
- Responsive tasarım çok kolay
- Custom tasarım sistemi oluşturdum
- Dergi (magazine) tarzında minimal tasarım

### 5. **Sanity.io** (CMS)
- Kurs içeriklerini yönetmek için headless CMS
- Admin panelinden kolayca kurs ekleyip düzenleyebiliyorum
- Veritabanı kurulumu yapmama gerek kalmadı

### 6. **PDF & Görsel Kütüphaneleri**
- **pdf-lib**: Sertifikaları PDF olarak oluşturmak için
- **html-to-image**: Sertifikaları PNG görseli olarak indirmek için
- **qrcode**: Sertifikalara QR kod eklemek için

### 7. **Diğer Kütüphaneler**
- **Zod**: Form verilerini kontrol etmek için
- **Lucide React**: Modern ikonlar için
- **nanoid**: Benzersiz sertifika kodları oluşturmak için

---

## Neler Öğrendim?

✅ Next.js ile full-stack web uygulaması geliştirmeyi  
✅ TypeScript ile tip güvenli kod yazmayı  
✅ Tailwind CSS ile modern UI tasarımı  
✅ API route'ları oluşturmayı  
✅ PDF ve görsel oluşturma teknikleri  
✅ Headless CMS kullanımı  
✅ QR kod entegrasyonu  
✅ SEO optimizasyonu  
✅ Responsive (mobil uyumlu) tasarım  
✅ Git ve GitHub kullanımı  

---

## Özellikler

### Sertifika Sistemi
- Otomatik sertifika oluşturma
- PDF ve PNG formatında indirme
- QR kod ile doğrulama
- Her sertifikaya özel URL
- Benzersiz doğrulama kodu

### Kullanıcı Arayüzü
- Modern ve minimal tasarım
- Dergi tarzı layout
- Smooth animasyonlar
- Mobil uyumlu
- Koyu mod desteği hazır

### Performans
- Hızlı sayfa yüklemeleri
- Görsel optimizasyonu
- SEO dostu

---

## Proje Yapısı

```
EduCer/
├── app/                    # Sayfalar ve API'lar
│   ├── (site)/            # Ana sayfalar
│   ├── api/               # Backend API'ları
│   └── studio/            # Admin paneli
│
├── components/            # Tekrar kullanılabilir componentler
│   ├── ui/               # Button, Input gibi temel componentler
│   └── certificate/      # Sertifika ile ilgili componentler
│
├── lib/                   # Yardımcı fonksiyonlar
├── sanity/               # CMS ayarları
└── public/               # Görseller ve statik dosyalar
```

---

## Zorluklar ve Çözümler

### 1. PDF Oluşturma
**Sorun:** Türkçe karakterler PDF'de düzgün görünmüyordu  
**Çözüm:** Font dosyalarını embed ettim

### 2. Responsive Tasarım
**Sorun:** Mobilde navbar animasyonu bozuluyordu  
**Çözüm:** Tailwind'in responsive classları ile düzelttim

### 3. CMS Entegrasyonu
**Sorun:** Sanity Studio'yu projeme entegre etmekte zorlandım  
**Çözüm:** Dökümanları okuyarak ve deneme-yanılma ile öğrendim

---

## Gelecek Planları

- [ ] E-posta ile sertifika gönderme
- [ ] LinkedIn'e direkt paylaşım
- [ ] Sertifika şablonlarını özelleştirme
- [ ] İstatistik paneli
- [ ] Toplu sertifika oluşturma

---

## İstatistikler

- **Toplam Kod Satırı:** ~24,000 satır
- **Component Sayısı:** 20+ component
- **Sayfa Sayısı:** 10+ sayfa
- **API Endpoint:** 5 endpoint
- **Geliştirme Süresi:** 2 hafta

---

## Sonuç

Bu proje sayesinde modern web geliştirme teknolojilerini öğrendim ve gerçek bir ürün geliştirdim. Next.js, TypeScript ve Tailwind CSS gibi güncel teknolojileri kullanarak profesyonel bir sertifika yönetim sistemi oluşturdum.

En çok Sanity CMS kullanımını ve PDF oluşturma sürecini öğrenmekten keyif aldım. Projeyi GitHub'a yükledim ve portfolyoma ekledim.

---

**GitHub:** https://github.com/tahsinmert/EduCert  
**LinkedIn:** https://www.linkedin.com/in/tahsinmertmutlu/
