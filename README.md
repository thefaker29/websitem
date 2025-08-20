# Webza — Luxury Gold v3

Yeni lüks palet: **Ivory + Rich Gold + Sapphire**, şekilsiz arkaplan. 
Eski "rengarenk bar" kaldırıldı; yerine **Lux Divider** (altın saçaklı ince çizgi + elmas cap) geldi.

## Kurulum
```bash
npm i
cp .env.example .env
# .env → ADMIN_PASSWORD'ı ayarla
npx prisma generate
npm run prisma:push
npm run seed   # opsiyonel
npm run dev
```

- Site: http://localhost:3000
- Admin: http://localhost:3000/admin/login

## Nereler değişti?
- **Renk paleti**: `app/globals.css` HSL tokenları (light/dark ayrı) tamamen güncellendi.
- **Background**: `components/site/Background.tsx` → shape yok; soft radial + grid.
- **Divider**: `.lux-divider` → H1/başlık ile açıklama arasında kullanıldı.
- **Header/Footer**: Gold vurgulu ince çizgiler, cam yüzey.

## Not
V2 ile aynı backend: Prisma (SQLite), referans CRUD, form gönderimleri, admin cookie koruması.
