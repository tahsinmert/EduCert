# Kurulum Rehberi

## Gereksinimler

- Node.js 18 veya üzeri
- Sanity hesabı (ücretsiz)

## Adımlar

### 1. Bağımlılıkları Yükle

```bash
npm install
```

### 2. Sanity Projesi Oluştur

1. [sanity.io](https://www.sanity.io) adresine git
2. "Create project" butonuna tıkla
3. Proje adı ver
4. Proje ID'sini not al

### 3. API Token Al

1. Sanity dashboard'da **API** sekmesine git
2. **Tokens** → **Add API token**
3. Token adı: "EduCert"
4. Yetki: **Editor**
5. Token'ı kopyala

### 4. Environment Dosyası Oluştur

`.env.local` dosyası oluştur:

```env
SANITY_PROJECT_ID=abc123
SANITY_DATASET=production
SANITY_API_VERSION=2023-10-01
SANITY_API_TOKEN=sk_xyz...

NEXT_PUBLIC_SANITY_PROJECT_ID=abc123
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Projeyi Başlat

```bash
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) aç.

### 6. Studio'ya İçerik Ekle

1. [http://localhost:3000/studio](http://localhost:3000/studio) aç
2. Giriş yap
3. Sertifika şablonu oluştur
4. Kurs ekle

## Sorun Giderme

### Studio açılmıyor
- `.env.local` dosyasını kontrol et
- Proje ID'sinin doğru olduğundan emin ol

### Sertifika oluşturulamıyor
- API Token'ın **Editor** yetkisi olmalı
- Token'ı `.env.local`'e doğru yazdığından emin ol

### Build hatası
```bash
rm -rf .next
npm run dev
```

---

Sorun devam ederse `.env.local` dosyasını kontrol et.
