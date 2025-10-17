# EduCert - Sertifika Platformu

Online kurslar için sertifika oluşturup doğrulama yapabileceğiniz bir web uygulaması.

## Özellikler

- Kullanıcılar sertifika oluşturabilir
- PDF olarak indirebilir
- QR kod ile doğrulama yapılabilir
- Mobil uyumlu tasarım

## Teknolojiler

- Next.js 15
- TypeScript
- Tailwind CSS
- Sanity CMS
- PDF oluşturma

## Kurulum

### 1. Projeyi İndir

```bash
npm install
```

### 2. Sanity Ayarları

1. [sanity.io](https://www.sanity.io) sitesine git
2. Yeni proje oluştur
3. Proje ID'sini kopyala
4. API Token oluştur

### 3. .env.local Dosyası

Proje klasöründe `.env.local` dosyası oluştur:

```env
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2023-10-01
SANITY_API_TOKEN=your_token

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Projeyi Başlat

```bash
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

### 5. İçerik Ekle

1. [http://localhost:3000/studio](http://localhost:3000/studio) adresine git
2. Sanity ile giriş yap
3. Sertifika şablonu oluştur
4. Kurs ekle

## Kullanım

1. Ana sayfadan kurslara göz at
2. Kurs seçip formunu doldur
3. Sertifikanı oluştur
4. PDF olarak indir

## Dosya Yapısı

```
EduCer/
├── app/            # Sayfalar
├── components/     # Bileşenler
├── lib/            # Yardımcı kodlar
└── sanity/         # CMS ayarları
```

## Lisans

MIT

---

**Geliştirici**: Tahsin Mert Mutlu
