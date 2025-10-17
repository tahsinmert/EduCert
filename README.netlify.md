# Netlify Deployment Guide

## Gerekli Environment Variables

Netlify dashboard'da şu environment variable'ları eklemelisiniz:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<your_sanity_project_id>
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=<your_sanity_token>
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
```

## Kurulum Adımları

1. **GitHub Repository'nizi Netlify'a bağlayın**
   - Netlify Dashboard → New Site → Import from Git
   - GitHub'dan EduCert repo'sunu seçin

2. **Build Settings'i ayarlayın**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js

3. **Environment Variables ekleyin**
   - Site Settings → Environment Variables
   - Yukarıdaki değişkenleri ekleyin

4. **Deploy edin**
   - Deploy site butonuna basın

## Sanity CMS Setup

Eğer Sanity CMS kullanmıyorsanız:

1. `npm run seed` ile örnek data oluşturun
2. Ya da Sanity project ID'nizi `.env` dosyasına ekleyin

## Sorun Giderme

- Build hatası alıyorsanız environment variables'ı kontrol edin
- Node.js versiyonu 20+ olmalı
- `netlify.toml` dosyası repo'da mevcut olmalı

