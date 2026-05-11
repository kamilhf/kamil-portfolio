# Kamil Hayyunaji Fabriano — Portfolio Website

Portfolio pribadi berbasis **Next.js 14**, **Tailwind CSS**, dan **Framer Motion** dengan color scheme biru muda.

---

## 🚀 Setup & Instalasi

```bash
# 1. Masuk ke folder project
cd kamil-portfolio

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 📁 Struktur Folder

```
kamil-portfolio/
├── app/
│   ├── globals.css        ← Global styles + animasi
│   ├── layout.tsx         ← Root layout + Google Fonts
│   └── page.tsx           ← Halaman utama (assembly semua section)
├── components/
│   ├── Navbar.tsx          ← Sticky nav dengan smooth scroll
│   ├── Hero.tsx            ← Hero section dengan animated role text
│   ├── About.tsx           ← About me + contacts + CV download
│   ├── Skills.tsx          ← Skill tools dengan logo + sertifikasi
│   ├── WorkExperience.tsx  ← Timeline kerja + foto dokumentasi
│   ├── OrganizationalExperience.tsx ← Pengalaman organisasi + foto
│   ├── PersonalLife.tsx    ← Bio personal + hobby photos
│   ├── Footer.tsx          ← Footer sederhana
│   └── AnimateOnScroll.tsx ← Utility: fade-up saat di-scroll
├── public/
│   ├── cv/
│   │   └── CV_Kamil.pdf       ← ⚠️ Letakkan CV PDF kamu di sini
│   └── images/
│       ├── profile.jpg         ← ⚠️ Foto profil kamu
│       ├── work/
│       │   ├── phr-1.jpg       ← Foto dokumentasi PHR (dst.)
│       │   ├── big-1.jpg       ← Foto dokumentasi BIG (dst.)
│       │   └── ...
│       ├── org/
│       │   ├── img-tutor-1.jpg ← Foto kegiatan org (dst.)
│       │   └── ...
│       └── hobbies/
│           ├── hobby-1.jpg     ← Foto hobi kamu
│           └── ...
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🖼️ Cara Menambahkan Foto & Konten

### 1. Foto Profil
Letakkan foto kamu di `public/images/profile.jpg`, lalu di `components/About.tsx` **ganti** bagian placeholder dengan:
```tsx
<Image src="/images/profile.jpg" alt="Kamil Hayyunaji Fabriano" fill className="object-cover" />
```

### 2. CV untuk Download
Letakkan file PDF di `public/cv/CV_Kamil.pdf`.

### 3. Foto Work Experience
Letakkan foto di `public/images/work/`, lalu di `components/WorkExperience.tsx` **isi** field `src` pada masing-masing entry:
```tsx
{ src: "/images/work/phr-1.jpg", label: "..." }
```

### 4. Foto Organizational Experience
Sama seperti di atas, letakkan di `public/images/org/`.

### 5. Foto Hobi
Letakkan di `public/images/hobbies/`, lalu di `components/PersonalLife.tsx`:
- Isi field `src` pada array `hobbies`
- Ganti field `caption` dengan nama aktivitas/hobi
- Ganti teks `personalBio` dengan paragraf deskripsi dirimu sendiri

### 6. Kontak
Di `components/About.tsx`, perbarui `href` pada array `contacts` dengan:
- Gmail: `mailto:emailkamu@gmail.com`
- WhatsApp: `https://wa.me/628XXXXXXXXXX`
- LinkedIn: `https://linkedin.com/in/username-kamu`

---

## 🎨 Kustomisasi Warna

Semua warna didefinisikan sebagai CSS variables di `app/globals.css`. Untuk mengubah accent color, edit variabel `--sky-*`.

---

## 📦 Build untuk Production

```bash
npm run build
npm start
```

Atau deploy langsung ke **Vercel** (gratis untuk proyek personal):
1. Push ke GitHub
2. Import di [vercel.com](https://vercel.com)
3. Done — auto-deploy setiap push!
