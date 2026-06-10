# 🚀 Panduan Menjalankan Portfolio Website

## Quick Start

1. **Buka Terminal/Command Prompt**
2. **Navigasi ke folder project**

   ```bash
   cd "c:\y\KULYEAH\Semester 4\portofolio"
   ```

3. **Install dependencies** (hanya sekali di awal)

   ```bash
   npm install
   ```

4. **Jalankan development server**

   ```bash
   npm run dev
   ```

5. **Buka browser dan akses:**
   ```
   http://localhost:5173
   ```

## 📝 Yang Perlu Anda Lakukan Selanjutnya

### 1. Update Informasi Personal

Edit file `src/data/portfolioData.js` dan ganti placeholder berikut:

-  `[GITHUB_LINK_PLACEHOLDER]` → Link GitHub Anda
-  `[LINKEDIN_LINK_PLACEHOLDER]` → Link LinkedIn Anda
-  `[REPOSITORY_LINK_PLACEHOLDER]` → Link repository project
-  `[DEMO_LINK_PLACEHOLDER]` → Link demo project
-  `[PROJECT_IMAGE_PLACEHOLDER]` → Path gambar project
-  `[CREDENTIAL_LINK_PLACEHOLDER]` → Link sertifikat

### 2. Tambahkan Gambar Project

-  Buat folder `src/assets/images/`
-  Upload screenshot project Anda
-  Update path gambar di `portfolioData.js`

### 3. Tambahkan CV/Resume

-  Upload file CV Anda ke folder `public/`
-  Update link download di komponen Contact

### 4. Customize Warna (Optional)

-  Edit variabel warna di `src/App.css`
-  Sesuaikan dengan preferensi Anda

## 🔧 Commands Berguna

```bash
# Development
npm run dev          # Jalankan development server

# Production
npm run build        # Build untuk production
npm run preview      # Preview production build

# Linting
npm run lint         # Check code quality
```

## 📱 Testing

Pastikan website terlihat baik di:

-  ✅ Desktop (1920x1080)
-  ✅ Tablet (768x1024)
-  ✅ Mobile (375x667)

## 🚀 Deploy

Setelah selesai development, Anda bisa deploy ke:

-  **Vercel** (Recommended)
-  **Netlify**
-  **GitHub Pages**
-  **Firebase Hosting**

---

**Need Help?** Contact Wahyu Nur Hidayadi - whyunurhd@gmail.com
