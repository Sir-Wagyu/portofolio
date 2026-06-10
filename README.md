# 🌟 Wahyu Nur Hidayadi - Portfolio Website

Portfolio website profesional yang dibangun dengan React.js untuk mendukung aplikasi magang sebagai Frontend/Fullstack Developer.

## 🚀 Fitur Utama

-  **Responsive Design** - Optimal di semua device (mobile, tablet, desktop)
-  **Modern UI/UX** - Desain yang clean dan profesional
-  **Interactive Components** - Smooth animations dan transitions
-  **Project Showcase** - Galeri project dengan detail lengkap
-  **Skills & Certifications** - Showcase keahlian teknis dan sertifikat
-  **Contact Form** - Form kontak yang user-friendly
-  **SEO Optimized** - Structure yang baik untuk search engines

## 🛠️ Teknologi yang Digunakan

-  **React.js** - Frontend framework
-  **Vite** - Build tool dan development server
-  **CSS3** - Styling dengan custom CSS
-  **JavaScript ES6+** - Modern JavaScript features
-  **Responsive Design** - Mobile-first approach

## 📁 Struktur Project

```
portofolio/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/             # Data configuration
│   │   └── portfolioData.js
│   ├── styles/           # CSS files
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Cara Menjalankan Project

### Prerequisites

-  Node.js (versi 14 atau lebih baru)
-  npm atau yarn

### Installation & Development

1. **Clone atau download project ini**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Jalankan development server**

   ```bash
   npm run dev
   ```

4. **Buka browser dan akses**
   ```
   http://localhost:5173
   ```

### Build untuk Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Mengubah Data Personal

Edit file `src/data/portfolioData.js` untuk mengupdate:

-  Informasi personal
-  Deskripsi project
-  Skills dan keahlian
-  Sertifikasi
-  Informasi kontak

### Menambahkan Project Baru

Tambahkan object baru di array `projects` dalam `portfolioData.js`:

```javascript
{
  id: 4,
  title: "Nama Project",
  category: "Web Application",
  technologies: ["React.js", "Node.js"],
  period: "Bulan Tahun",
  description: "Deskripsi project...",
  features: ["Fitur 1", "Fitur 2"],
  image: "path/to/image.jpg",
  demo: "link-demo",
  repository: "link-repository",
  status: "Completed"
}
```

### Mengganti Warna Theme

Update variabel CSS di `src/App.css` untuk mengubah color scheme:

```css
:root {
   --primary-color: #3b82f6;
   --secondary-color: #1d4ed8;
   --text-color: #1f2937;
   --background-color: #ffffff;
}
```

## 🔗 Links yang Perlu Diupdate

Sebelum deploy, pastikan mengupdate placeholder berikut di `portfolioData.js`:

-  `[GITHUB_LINK_PLACEHOLDER]` - Link GitHub profile
-  `[LINKEDIN_LINK_PLACEHOLDER]` - Link LinkedIn profile
-  `[REPOSITORY_LINK_PLACEHOLDER]` - Link repository project
-  `[DEMO_LINK_PLACEHOLDER]` - Link demo project
-  `[PROJECT_IMAGE_PLACEHOLDER]` - Path gambar project
-  `[CREDENTIAL_LINK_PLACEHOLDER]` - Link sertifikat

## 📱 Responsive Breakpoints

-  **Mobile**: < 480px
-  **Tablet**: 481px - 768px
-  **Desktop**: > 768px

## 🎨 Design System

-  **Primary Color**: Blue (#3b82f6)
-  **Typography**: Inter font family
-  **Spacing**: 8px base unit
-  **Border Radius**: 8px, 12px, 16px
-  **Shadows**: Subtle elevation shadows

## 📄 Browser Support

-  Chrome (latest)
-  Firefox (latest)
-  Safari (latest)
-  Edge (latest)

## 🤝 Contributing

Jika Anda ingin berkontribusi atau memberikan feedback:

1. Fork repository ini
2. Buat branch baru (`feature/improvement`)
3. Commit perubahan Anda
4. Push ke branch
5. Buat Pull Request

## 📞 Contact

**Wahyu Nur Hidayadi**

-  Email: whyunurhd@gmail.com
-  Location: Perum. Bali Kencana Resort 11
-  Available for: Frontend/Fullstack Developer Internship

---

⭐ **Star this repo if you find it helpful!**

Dibuat dengan ❤️ untuk mendukung aplikasi magang sebagai Frontend/Fullstack Developer.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
-  [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
