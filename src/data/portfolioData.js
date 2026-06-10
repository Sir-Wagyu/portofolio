export const personalInfo = {
   name: "Wahyu Nur Hidayadi",
   title: "Frontend Web Developer",
   location: "Kuta Selatan, Badung, Bali",
   email: "whyuunur@gmail.com",
   github: "https://github.com/Sir-Wagyu",
   linkedin: "https://www.linkedin.com/in/wahyunurh/",
   summary:
      "I am an Information Technology student with a deep interest in the world of technology, particularly in areas such as web development, UI/UX design, and digital creativity. I enjoy exploring how technology can solve real-world problems, whether through writing clean and efficient code, designing user-friendly interfaces, or creating visual content that enhances user experience",
   summary2:
      "Throughout my journey in IT, I have focused on developing both technical and creative skills by working on various projects that involve programming, design, and team collaboration. These experiences have helped me become more adaptable, communicative, and eager to explore new tools and technologies across different areas of tech. I believe that learning by doing, combined with strong teamwork, is the key to growing as a well-rounded tech enthusiast. I am always excited to take on new challenges and contribute to projects that make a positive impact.",
};

export const skills = {
   frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
   backend: ["PHP", "Laravel", "MySQL"],
   tools: ["Git & GitHub", "Figma", "CodeIgniter"],
   soft: ["Komunikasi", "Problem Solving", "Adaptasi", "Manajemen Waktu", "Kreatif", "Kepemimpinan"],
};

export const education = [
   {
      institution: "Politeknik Negeri Bali",
      degree: "Jurusan Teknologi Informasi",
      gpa: "IPK 3.77 / 4.00",
      period: "2023 - Sekarang",
      location: "Bali",
   },
   {
      institution: "SMK Negeri 1 Kuta Selatan",
      degree: "Jusan Multimedia",
      period: "2020 - 2023",
      location: "Bali",
   },
];

export const projects = [
   {
      id: 1,
      tumbnail: "/images/tumbnails/gymyankarta-home.png",
      title: "Aplikasi Pencatatan Keuangan & Absensi Member | YankartaGYM",
      category: "Web Application",
      technologies: ["Laravel", "Tailwind CSS", "MySQL"],
      period: "Juni 2025 - Juli 2025",
      description: "Sistem manajemen gym berbasis web yang mengintegrasikan Point of Sale (POS) untuk pencatatan transaksi keuangan dan sistem absensi member menggunakan QR Code dalam satu platform terpadu.",
      overview:
         "Gym Yankarta adalah sebuah pusat kebugaran di Jimbaran, Bali, yang membutuhkan sistem terdigitalisasi untuk mengelola operasional harian. Aplikasi ini dirancang untuk menangani dua alur kerja utama: manajemen member & absensi dan pencatatan keuangan (POS). Sistem ini bertujuan untuk menggantikan pencatatan manual, meningkatkan efisiensi admin/kasir, dan memberikan pengalaman yang lebih baik bagi para member.",
      features: [
         {
            title: "Fitur Admin",
            features: [
               "Dashboard Utama: Menampilkan ringkasan metrik penting seperti member aktif, member menunggu verifikasi, dan total pendapatan bulan ini dengan chart pendapatan tahunan",
               "Point of Sale (POS) / Kasir: Mencatat 3 tipe transaksi (Pembayaran Membership, Pengunjung Harian, Penjualan Barang Tambahan) dengan aktivasi otomatis membership",
               "Dukungan skema harga berbeda untuk member Lokal dan Foreign (Bule), termasuk durasi mingguan",
               "Fitur keranjang belanja untuk penjualan multi-item dalam satu transaksi",
               "Kelola Member: Daftar lengkap member dengan pencarian dan filter berdasarkan status dan tipe member",
               "Detail member dengan riwayat absensi dalam format kalender visual",
               "Absensi QR Code: QR Code yang diperbarui secara dinamis untuk di-scan oleh member",
               "Pengaturan Harga: Halaman khusus untuk mengubah harga membership, tarif pengunjung harian, dan harga produk tambahan",
               "Laporan & Ekspor: Laporan pendapatan bulanan/tahunan dan ekspor ke format Excel, statistik member (member baru, member akan expired, dll)",
            ],
         },
         {
            title: "Fitur Member",
            features: [
               "Registrasi & Verifikasi: Alur pendaftaran mandiri dengan proses verifikasi melalui email",
               "Dashboard Member: Menampilkan statistik personal seperti sisa hari masa aktif, total kehadiran, dan persentase kehadiran",
               "Kalender visual untuk melihat riwayat absensi pribadi dan periode aktif membership",
               "Absensi QR Code: Fitur membuka kamera dan scan QR Code di gym untuk mencatat kehadiran (dibatasi sekali sehari)",
               "Manajemen Profil: Member dapat mengubah informasi profil dan password mereka",
            ],
         },
         {
            title: "Pencapaian Teknis",
            features: [
               "Komunikasi langsung dengan klien untuk menggali kebutuhan sistem pencatatan transaksi kasir dan manajemen member",
               "Memimpin tim beranggotakan 4 orang dan membagi peran sesuai keahlian UI/UX dan backend developer",
               "Mengembangkan fitur otentikasi, pencatatan transaksi harian, manajemen user pada dashboard admin, serta absensi berbasis QR pada dashboard member",
               "Aplikasi mampu digunakan oleh lebih dari 100 member dan mampu mencatat lebih dari 50 transaksi per hari",
            ],
         },
      ],
      screenshots: [
         {
            image: "/images/screenshots/gymyankarta/ss-gymyankarta1.png",
            caption: "Halaman Utama - Tampilan awal aplikasi YankartaGYM",
         },
      ],
      demo: "https://yankartagym.com/",
      repository: "https://github.com/Nyomanpass/gymyankarta",
      status: "Completed",
   },
   {
      id: 2,
      tumbnail: "/images/tumbnails/siduktang-home.png",
      title: "Aplikasi Manajemen Penduduk Pendatang | Sidukang",
      category: "Web Application",
      technologies: ["Laravel", "Tailwind CSS", "MySQL"],
      period: "Mei 2025 - Juni 2025",
      description: "Sistem informasi berbasis web untuk pengelolaan data penduduk pendatang dengan fitur pengajuan surat administrasi dan sistem approval bertingkat.",
      overview:
         "Proyek kemitraan mata kuliah Pemrograman Web 2 dengan nilai akhir A. Sistem ini dikembangkan untuk mengatasi proses administrasi penduduk pendatang yang masih manual. Membangun sistem pendataan penduduk pendatang serta pengajuan surat administrasi (domisili, keterangan kelahiran, pengantar umum, dll) dengan mengimplementasikan fitur otentikasi, role-based access, approval pengajuan, dan notifikasi status surat. UI responsif dan user-friendly untuk kemudahan akses multi-device.",
      features: [
         "Proyek kemitraan mata kuliah Pemrograman Web 2 dengan nilai akhir A",
         "Membangun sistem pendataan penduduk pendatang serta pengajuan surat administrasi (domisili, keterangan kelahiran, pengantar umum, dll)",
         "Mengimplementasikan fitur otentikasi, role-based access, approval pengajuan, dan notifikasi status surat",
         "UI responsif dan user-friendly untuk kemudahan akses multi-device",
      ],
      screenshots: [
         {
            image: "/images/screenshots/siduktang/ss-siduktang1.png",
            caption: "Halaman Awal - Tampilan awal aplikasi Sidukang",
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang2.png",
            caption: "Halaman Otentikasi - Login untuk akses sistem",
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang3.png",
            caption: "Halaman Dashboard - Ringkasan data penduduk dan pengajuan surat",
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang4.png",
            caption: "Halaman Verifikasi - Proses verifikasi akun oleh admin",
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang5.png",
            caption: "Halaman Master Data - Pengelolaan data akun",
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang6.png",
            caption: "Halaman Approval - Proses persetujuan pengajuan surat oleh admin",
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang7.png",
            caption: "Halaman Pengajuan Surat - Formulir pengajuan surat administrasi penduduk",
         },
         {
            image: "/images/screenshots/siduktang/ss-siduktang8.png",
            caption: "Halaman Laporan - Laporan pendataan penduduk dan status lainnya",
         },
      ],
      repository: "https://github.com/Sir-Wagyu/pendataanPendudukV2",
      status: "Completed",
   },
   {
      id: 3,
      tumbnail: "/images/tumbnails/nadiaartshop-home.png",
      title: "Website Katalog Produk | Nadia Art Shop",
      category: "Landing Page",
      technologies: ["React.js", "PHP Native", "MySQL"],
      period: "Nov 2024 - Dec 2025",
      description: "Website e-commerce berbasis React.js yang menampilkan katalog produk kerajinan Bali otentik dengan fitur pencarian, filter produk, dan integrasi WhatsApp untuk inquiry.",
      overview:
         "Nadia Art Shop adalah bisnis kecil yang menjual kerajinan Bali otentik, termasuk dekorasi dinding dan furniture kantor. Website ini berfungsi sebagai katalog produk yang memungkinkan pengguna untuk menjelajahi produk, melihat detail, dan melakukan inquiry. Frontend dikembangkan menggunakan React.js dengan fokus pada desain responsif dan navigasi yang user-friendly. Backend didukung oleh PHP Native dan MySQL API untuk manajemen produk yang dinamis.",
      features: [
         {
            title: "Halaman Beranda yang Dinamis",
            features: [
               "Hero Banner: Spanduk menarik yang menampilkan produk utama dan brand identity",
               "Produk Unggulan: Showcase produk-produk terbaik dan terpopuler",
               "Tentang Kami: Bagian yang menceritakan sejarah dan visi Nadia Art Shop",
               "Galeri Gambar: Menampilkan koleksi produk kerajinan Bali dalam format visual yang menarik",
               "Call-to-Action: Tombol ajakan bertindak yang mengarah ke katalog dan kontak",
            ],
         },
         {
            title: "Katalog Produk yang Mudah Dijelajahi",
            features: [
               "Filter Pencarian Lanjutan: Filter berdasarkan kategori, bahan, ukuran, dan warna produk",
               "Pencarian Cepat: Search bar untuk menemukan produk berdasarkan nama dengan cepat",
               "Navigasi Halaman: Pagination system untuk menangani katalog produk yang besar",
               "Sorting Options: Urutkan produk berdasarkan popularitas, harga, atau kebaruan",
            ],
         },
         {
            title: "Halaman Detail Produk yang Komprehensif",
            features: [
               "Informasi Lengkap: Gambar, deskripsi detail, bahan, ukuran, dan spesifikasi warna",
               "Galeri Produk: Multiple images untuk setiap produk dengan zoom functionality",
               "Produk Terkait: Bagian 'Anda mungkin juga suka' untuk meningkatkan engagement",
               "Spesifikasi Teknis: Detail craftsmanship dan informasi produk yang komprehensif",
            ],
         },
         {
            title: "Pengalaman Pengguna yang Interaktif",
            features: [
               "Desain Responsif: Adaptasi seamless di berbagai perangkat (desktop, tablet, mobile)",
               "Smooth Animations: Animasi halus saat scroll untuk pengalaman yang modern",
               "Interactive Gallery: Galeri interaktif untuk browsing produk dengan mudah",
               "Loading Optimization: Performance yang optimal untuk pengalaman user yang baik",
            ],
         },
         {
            title: "Kontak dan Komunikasi",
            features: [
               "Halaman Kontak Khusus: Informasi lengkap untuk menghubungi Nadia Art Shop",
               "FAQ Section: Bagian pertanyaan yang sering diajukan dengan expandable answers",
               "WhatsApp Integration: Tombol 'Konsultasi Sekarang' dan 'Pesan Sekarang' langsung ke WhatsApp",
               "Easy Inquiry: Form kontak yang mudah digunakan untuk pertanyaan produk",
            ],
         },
      ],
      screenshots: [
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia1.png",
            caption: "Halaman Beranda - Tampilan awal website Nadia Art Shop",
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia2.png",
            caption: "Halaman Beranda - Showcase produk unggulan",
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia3.png",
            caption: "Halaman Beranda - Keunggulan produk produk ",
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia4.png",
            caption: "Halaman Katalog Produk - Showcase produk ",
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia5.png",
            caption: "Halaman Katalog Produk - Filter dan pencarian produk",
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia6.png",
            caption: "Halaman Detail Produk - Informasi lengkap produk",
         },
         {
            image: "/images/screenshots/nadiaartshop/ss-nadia7.png",
            caption: "Halaman Kontak - Informasi kontak dan FAQ",
         },
      ],
      demo: "https://nadiaartshop.com/",
      repository: "https://github.com/Sir-Wagyu/nadia-shop",
      status: "Completed",
   },
   {
      id: 4,
      tumbnail: "/images/tumbnails/arifinbatik-home.png",
      title: "Website E-commerce | Arifin Batik",
      category: "Landing Page",
      technologies: ["React.js", "PHP Native", "MySQL"],
      period: "Jan 2025 - Feb 2025",
      description: "Website company profile dan katalog online untuk produsen dan pemasok grosir batik cap premium dengan fitur pencarian produk dan filter kategori yang lengkap.",
      overview:
         "Arifin Batik adalah bisnis yang berdedikasi pada produksi dan penjualan batik cap berkualitas tinggi, dengan pengalaman lebih dari 30 tahun. Aplikasi web ini dibangun untuk menjadi wajah digital perusahaan, menampilkan cerita, koleksi, dan detail produk kepada calon pelanggan dan mitra bisnis. Tujuannya adalah untuk memperluas jangkauan pasar dan memudahkan pelanggan dalam menemukan serta memesan produk batik yang otentik dan berkelas.",
      features: [
         {
            title: "Beranda Informatif",
            features: [
               "Menampilkan perkenalan singkat tentang Arifin Batik dan sejarah perusahaan",
               "Showcase jenis-jenis produk batik cap yang tersedia",
               "Menyajikan keunggulan layanan dan kualitas produk",
               "Cuplikan koleksi dan galeri untuk menarik minat pengunjung",
            ],
         },
         {
            title: "Katalog Produk Dinamis",
            features: [
               "Halaman produk dengan fitur pencarian real-time untuk menemukan produk dengan cepat",
               "Sistem Filter canggih berdasarkan Kategori (Rainbow, Plain, Smoke)",
               "Filter berdasarkan Motif (Tumbuhan, Bunga, Hewan, Abstrak)",
               "Filter berdasarkan Warna untuk pencarian yang lebih spesifik",
               "Tampilan daftar produk dalam format grid yang responsif dan menarik",
            ],
         },
         {
            title: "Halaman Detail Produk",
            features: [
               "Menampilkan gambar produk, nama, material, dan deskripsi lengkap",
               "Menyajikan detail spesifik seperti warna dan motif batik",
               "Menampilkan Produk Terkait dari kategori yang sama untuk meningkatkan engagement pengguna",
               "Informasi detail tentang kualitas dan proses pembuatan batik cap",
            ],
         },
         {
            title: "Galeri Foto",
            features: ["Kolom galeri yang menampilkan visual menarik dari produk-produk batik", "Showcase produk dalam berbagai suasana dan styling", "Galeri interaktif untuk memberikan pengalaman visual yang optimal"],
         },
         {
            title: "Halaman Kontak & FAQ",
            features: [
               "Menyediakan informasi kontak yang jelas (WhatsApp, Email, Lokasi)",
               "Dilengkapi bagian Frequently Asked Questions (FAQ) untuk menjawab pertanyaan umum pelanggan",
               "Integrasi tombol 'Order Now' yang mengarah langsung ke WhatsApp untuk kemudahan pemesanan",
               "Informasi lengkap tentang proses pemesanan dan layanan grosir",
            ],
         },
      ],
      screenshots: [],
      demo: "https://arifinbatik.com/",
      repository: "https://github.com/Sir-Wagyu/arifin-batik",
      status: "Completed",
   },
   {
      id: 5,
      tumbnail: "/images/tumbnails/syntaxacademy-home.png",
      title: "Website E-learning | Syntax Academy",
      category: "Web Application",
      technologies: ["CodeIgniter 3", "Tailwind CSS", "MySQL"],
      period: "Mar 2025 - Apr 2025",
      description: "Platform e-learning untuk kursus bahasa pemrograman dengan integrasi payment gateway Midtrans dan sistem manajemen konten pembelajaran yang lengkap.",
      overview:
         "SyntaxAcademy adalah platform e-learning yang dikembangkan sebagai tugas akhir mata kuliah kampus dengan hasil nilai A. Aplikasi ini diciptakan untuk mengatasi permasalahan utama yaitu mahalnya kursus-kursus bahasa pemrograman online yang tersedia di pasaran. Platform ini bertujuan menyediakan akses pembelajaran programming yang berkualitas dengan biaya terjangkau, sehingga dapat diakses oleh lebih banyak pelajar dan mahasiswa yang memiliki keterbatasan finansial namun ingin mengembangkan skill programming mereka.",
      features: [
         {
            title: "Fitur Siswa",
            features: [
               "Otentikasi Pengguna: Sistem registrasi dan login untuk siswa",
               "Katalog Kursus: Menampilkan daftar kursus yang tersedia beserta detailnya",
               "Pembelajaran Online: Siswa dapat mengakses materi kursus yang telah dibeli",
               "Manajemen Profil: Pengguna dapat melihat dan mengelola profil mereka",
               "Proses Transaksi: Integrasi dengan payment gateway (Midtrans) untuk proses pembelian kursus",
               "Riwayat Transaksi: Pengguna dapat melihat riwayat pembelian kursus mereka",
            ],
         },
         {
            title: "Fitur Admin",
            features: [
               "Dashboard Admin: Panel administratif untuk mengelola platform",
               "Manajemen Pengguna: Kelola data dan akun siswa yang terdaftar",
               "Manajemen Kursus: Tambah, edit, dan hapus kursus programming",
               "Manajemen Materi Pembelajaran: Upload dan kelola konten pembelajaran",
               "Monitor Transaksi: Pantau dan kelola proses pembayaran kursus",
            ],
         },
         {
            title: "Pencapaian Teknis",
            features: [
               "Tugas akhir mata kuliah dengan nilai A, menggunakan CodeIgniter 3 sebagai framework utama",
               "Mengimplementasikan sistem pembayaran online terintegrasi dengan Midtrans payment gateway",
               "Desain responsif dan user-friendly untuk pengalaman belajar yang optimal di berbagai perangkat",
               "Solusi e-learning yang terjangkau untuk mengatasi mahalnya kursus programming online",
            ],
         },
      ],
      screenshots: [
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax1.png",
            caption: "Halaman Utama - Tampilan awal aplikasi Syntax Academy",
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax2.png",
            caption: "Halaman Katalog Kursus - Daftar kursus yang tersedia",
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax3.png",
            caption: "Halaman Paket Kursus - Detail kursus dengan harga dan deskripsi",
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax4.png",
            caption: "Halaman Otentikasi - Proses login pengguna",
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax5.png",
            caption: "Halaman Otentikasi - Proses registrasi pengguna baru",
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax6.png",
            caption: "Halaman Pembayaran - Proses pembayaran langganan",
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax7.png",
            caption: "Halaman Detail Kursus - Informasi lengkap tentang kursus yang dipilih",
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax8.png",
            caption: "Halaman Materi Kursus - Akses materi pembelajaran setelah pembelian",
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax9.png",
            caption: "Halaman Dashboard Admin - Panel administratif untuk mengelola platform",
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax10.png",
            caption: "Halaman Manajemen Member - Kelola data dan akun siswa yang terdaftar",
         },
         {
            image: "/images/screenshots/syntaxacademy/ss-syntax11.png",
            caption: "Halaman Manajemen Kursus - Tambah, edit, dan hapus kursus programming",
         },
      ],
      repository: "https://github.com/Sir-Wagyu/SyntaxAcademy",
      status: "Completed",
   },
   {
      id: 6,
      tumbnail: "/images/tumbnails/nusantaraJourney-home.png",
      title: "Landing Page | Nusantara Journey",
      category: "Landing Page",
      technologies: ["HTML", "Tailwind CSS"],
      period: "Apr 2024 - Jun 2024",
      description: "Landing page responsif untuk mempromosikan destinasi wisata Indonesia dengan informasi lengkap tentang tempat wisata, ulasan pengunjung, dan galeri foto menarik.",
      overview:
         "Nusantara Journey adalah proyek UKM Computer Club yang bertujuan untuk mempromosikan destinasi wisata di Indonesia melalui platform digital. Dengan desain yang menarik dan responsif, landing page ini memberikan informasi lengkap tentang berbagai tempat wisata, termasuk deskripsi, gambar, dan ulasan pengguna untuk meningkatkan awareness terhadap kekayaan pariwisata Indonesia.",
      features: ["Desain Responsif: Memastikan tampilan yang optimal di berbagai perangkat", "Informasi Lengkap: Menyediakan detail tentang setiap destinasi wisata", "Ulasan Pengguna: Menampilkan ulasan dan rating dari pengunjung"],
      image: "[PROJECT_IMAGE_PLACEHOLDER]",
      demo: "https://nusantara-journey.netlify.app/",
      repository: "https://github.com/Sir-Wagyu/NusantaraJourneyRemastered",
      status: "Completed",
   },
   {
      id: 7,
      tumbnail: "/images/tumbnails/bomboraweb-home.png",
      title: "Landing Page | Bombora Web",
      category: "Landing Page",
      technologies: ["React.js", "Tailwind CSS", "Native PHP", "MySQL"],
      period: "Des 2024 - Jan 2025",
      description: "Website landing page dan portofolio untuk tim pengembangan web Bombora yang khusus melayani pembuatan website dan sistem aplikasi web untuk UMKM dengan fitur galeri portofolio dan sistem pemesanan terintegrasi.",
      overview:
         "Bombora Web adalah tim pengembangan web yang beranggotakan 4 orang developer yang fokus membantu UMKM dalam membangun presence digital mereka. Website ini dirancang dengan alur yang intuitif bagi pengunjung, mulai dari perkenalan hingga melakukan pemesanan. Aplikasi ini tidak hanya berfungsi sebagai halaman perkenalan yang informatif, tetapi juga sebagai galeri portofolio komprehensif dan platform pemesanan yang terintegrasi.",
      features: [
         {
            title: "Halaman Utama (Landing Page)",
            features: [
               "Hero Section: Sambutan utama yang menarik perhatian pengunjung",
               "Tentang Kami: Penjelasan singkat mengenai layanan yang ditawarkan, seperti Website Development dan Marketing Design",
               "Keunggulan Layanan: Menampilkan poin-poin kenapa klien harus memilih Bombora, seperti pengerjaan cepat dan konsultasi gratis",
               "Daftar Paket Harga: Tampilan perbandingan paket (Starter, Growth, Premium) dengan fitur dan harga yang jelas",
               "Langkah-Langkah Pemesanan: Panduan visual mengenai alur pemesanan website",
               "Galeri Template: Slider berisi preview template website yang tersedia",
               "FAQ (Frequently Asked Questions): Kumpulan pertanyaan umum untuk menjawab keraguan calon klien",
            ],
         },
         {
            title: "Halaman Templates",
            features: [
               "Galeri lengkap berisi semua template website yang tersedia, lengkap dengan gambar preview",
               "Fitur filter berdasarkan kategori (agriculture, company, restaurant, dll.) untuk mempermudah pencarian",
               "Tombol untuk melihat live preview dan langsung memesan template yang dipilih",
            ],
         },
         {
            title: "Halaman Portofolio",
            features: ["Menampilkan daftar klien dan proyek yang pernah dikerjakan sebagai bukti kualitas"],
         },
         {
            title: "Formulir Pemesanan & Konsultasi",
            features: [
               "Form Pemesanan: Formulir terstruktur untuk memesan paket website, memilih template, dan mengisi detail kebutuhan",
               "Form Konsultasi: Halaman khusus untuk calon klien yang ingin bertanya atau berdiskusi via WhatsApp",
            ],
         },
      ],
      screenshots: [
         {
            image: "/images/screenshots/bombora/ss-bombora1.png",
            caption: "Halaman Beranda - Tampilan awal website Bombora Web",
         },
         {
            image: "/images/screenshots/bombora/ss-bombora2.png",
            caption: "Halaman Beranda - Section Penjelasan Proses Pemesanan",
         },
         {
            image: "/images/screenshots/bombora/ss-bombora3.png",
            caption: "Halaman Paket - Daftar paket harga yang ditawarkan",
         },
         {
            image: "/images/screenshots/bombora/ss-bombora4.png",
            caption: "Halaman Form Pemesanan - Formulir pemesanan website",
         },
         {
            image: "/images/screenshots/bombora/ss-bombora5.png",
            caption: "Halaman Template - Galeri template website yang tersedia",
         },
      ],
      demo: "https://bomboraweb.com/",
      repository: "https://github.com/passchatter/bomboraweb",
      status: "Completed",
   },
   {
      id: 8,
      tumbnail: "/images/tumbnails/jobscape-home.png",
      title: "Website Job Portal | Jobscape",
      category: "Landing Page",
      technologies: ["React.js", "Tailwind CSS"],
      period: "Feb 2025 - Mar 2025",
      description: "Website job portal yang menghubungkan pencari kerja dengan perusahaan, menyediakan fitur pencarian lowongan.",
      overview:
         "Jobscape adalah platform job portal yang dikembangkan sebagai tugas akhir bootcamp React.js dari Sanbercode dengan pencapaian juara 2 pada batch tersebut. Proyek ini merupakan implementasi dari seluruh materi yang telah dipelajari selama bootcamp, mencakup React fundamentals, state management, component lifecycle, API integration, dan best practices dalam pengembangan frontend modern. Platform ini dirancang untuk menghubungkan pencari kerja dengan perusahaan melalui interface yang user-friendly dan responsif.",
      features: [
         {
            title: "Halaman Beranda",
            features: [
               "Hero Section: Sambutan utama yang menarik perhatian pengunjung",
               "Tentang Kami: Penjelasan singkat mengenai layanan yang ditawarkan, seperti Website Development dan Marketing Design",
               "Keunggulan Layanan: Menampilkan poin-poin kenapa klien harus memilih Jobscape, seperti kemudahan penggunaan dan dukungan pelanggan",
               "Daftar Lowongan: Tampilan perbandingan lowongan yang tersedia dengan fitur dan lokasi yang jelas",
               "Langkah-Langkah Pendaftaran: Panduan visual mengenai alur pendaftaran pekerjaan",
               "Galeri Perusahaan: Slider berisi logo perusahaan yang sedang membuka lowongan",
               "FAQ (Frequently Asked Questions): Kumpulan pertanyaan umum untuk menjawab keraguan calon pelamar",
            ],
         },
         {
            title: "Halaman Lowongan",
            features: [
               "Daftar lengkap berisi semua lowongan pekerjaan yang tersedia, lengkap dengan deskripsi dan persyaratan",
               "Fitur filter berdasarkan kategori (teknologi, pemasaran, desain, dll.) untuk mempermudah pencarian",
               "Tombol untuk melihat detail lowongan dan langsung melamar pekerjaan yang dipilih",
            ],
         },
         {
            title: "Halaman Perusahaan",
            features: ["Menampilkan daftar perusahaan yang sedang membuka lowongan dan profil singkat mereka"],
         },
         {
            title: "Formulir Pendaftaran",
            features: ["Form Pendaftaran: Formulir terstruktur untuk mendaftar pekerjaan, mengunggah CV, dan mengisi detail diri", "Form Kontak: Halaman khusus untuk calon pelamar yang ingin bertanya atau berdiskusi via WhatsApp"],
         },
      ],
      screenshots: [
         {
            image: "/images/screenshots/jobscape/ss-jobscape1.png",
            caption: "Halaman Beranda - Tampilan awal website Jobscape",
         },
         {
            image: "/images/screenshots/jobscape/ss-jobscape2.png",
            caption: "Halaman Otentikasi - Login untuk akses sistem",
         },
         {
            image: "/images/screenshots/jobscape/ss-jobscape3.png",
            caption: "Halaman Otentikasi - Pendaftaran untuk pencari kerja",
         },
         {
            image: "/images/screenshots/jobscape/ss-jobscape4.png",
            caption: "Halaman Lowongan - Daftar lowongan pekerjaan yang tersedia",
         },
         {
            image: "/images/screenshots/jobscape/ss-jobscape5.png",
            caption: "Halaman Detail Lowongan - Informasi lengkap tentang lowongan pekerjaan",
         },
      ],
      demo: "https://newjobscape.netlify.app/",
      repository: "https://github.com/Sir-Wagyu/jobScape",
      status: "Completed",
   },
];

export const certifications = [
   {
      title: "Bootcamp Frontend Development (React.js)",
      issuer: "Sanbercode",
      period: "Juni 2024 - Juli 2024",
      description: "Intensive frontend development bootcamp focusing on React.js and modern web development practices",
      skills: ["React.js", "JavaScript", "HTML/CSS", "Git"],
      credential: "https://drive.google.com/file/d/18BYWym3wlZB3oWUFJG8lDTsmowRxD6vb/view?usp=sharing",
   },
   {
      title: "Pelatihan Tailwind CSS",
      issuer: "UKM Computer Club",
      period: "April 2024 - Juni 2024",
      description: "Comprehensive training on Tailwind CSS framework and responsive web design",
      skills: ["Tailwind CSS", "Responsive Design", "CSS Utilities"],
      credential: "[CREDENTIAL_LINK_PLACEHOLDER]",
   },
];

export const trainingsAndCertifications = [
   {
      title: "React Js Web Frontend",
      issuer: "Sanbercode",
      period: "August 19th - September 13th, 2024",
      date: "September 2024",
      type: "Bootcamp",
      description: "Intensive bootcamp focusing on React.js development and modern web frontend technologies",
      skills: ["React.js", "JavaScript", "Frontend Development", "Web Development"],
      certificateNumber: "45484/650/SNBR/BOOTCAMP/IX/2024",
      credential: "https://drive.google.com/file/d/18BYWym3wlZB3oWUFJG8lDTsmowRxD6vb/view?usp=sharing",
   },
   {
      title: "Graphic Design Professional Skill",
      issuer: "MySkill - E-Learning",
      period: "September 6, 2023",
      date: "September 2023",
      type: "Professional Course",
      description: "Completed a Full Learning Path with Professional Skill in Graphic Design covering 36 courses",
      skills: ["Graphic Design", "Visual Design", "Creative Design", "Adobe Tools"],
      totalCourses: "36 Courses",
      credential: "https://drive.google.com/file/d/12Nvc4Er-1adw57FVAxWvwx1Pi1WQZRP5/view?usp=sharing",
   },
   {
      title: "Belajar JavaScript",
      issuer: "CodePolitan",
      period: "9 Mei 2024",
      date: "May 2024",
      type: "Online Course",
      description: "Menyelesaikan kelas Belajar JavaScript dalam program Kelas Online CODEPOLITAN",
      skills: ["JavaScript", "Programming Fundamentals", "Web Development"],
      credential: "https://codepolitan.com/c/ALMEIG2",
      validUntil: "9 Mei 2027",
   },
   {
      title: "Belajar Dasar HTML",
      issuer: "CodePolitan",
      period: "12 Januari 2024",
      date: "January 2024",
      type: "Online Course",
      description: "Menyelesaikan kelas Belajar Dasar HTML dalam program Kelas Online CodePolitan",
      skills: ["HTML", "Web Fundamentals", "Frontend Basics"],
      credential: "https://codepolitan.com/c/EGX3BZS",
      validUntil: "11 Januari 2027",
   },
   {
      title: "Belajar Dasar CSS",
      issuer: "CodePolitan",
      period: "26 Januari 2024",
      date: "January 2024",
      type: "Online Course",
      description: "Menyelesaikan kelas Belajar Dasar CSS dalam program Kelas Online CODEPOLITAN",
      skills: ["CSS", "Styling", "Web Design", "Frontend Development"],
      credential: "https://codepolitan.com/c/PIKH016",
      validUntil: "25 Januari 2027",
   },
];

export const contact = {
   email: "whyunurhd@gmail.com",
   location: "Perum. Bali Kencana Resort 11",
   github: "https://github.com/Sir-Wagyu",
   linkedin: "https://www.linkedin.com/in/wahyunurh/",
   instagram: "https://www.instagram.com/whyuuunr/",
   whatsapp: "https://wa.me/6288223754172",
   available: true,
   message: "Open to internship opportunities as a Frontend Developer or Fullstack Developer. Let's collaborate!",
};

export const experience = [
   {
      period: "Juni 2025 - Juli 2025",
      role: "Project Lead & Fullstack Developer",
      company: "Aplikasi Keuangan & Absensi - YankartaGYM",
      description: "Memimpin tim pengembangan sistem manajemen gym dengan fitur pencatatan transaksi dan absensi QR code",
   },
   {
      period: "Mei 2025 - Juni 2025",
      role: "Fullstack Developer",
      company: "Aplikasi Manajemen Penduduk - Sidukang",
      description: "Mengembangkan sistem informasi penduduk pendatang dengan fitur administrasi dan approval workflow",
   },
   {
      period: "Des 2024 - Jan 2025",
      role: "Frontend Developer",
      company: "Website E-commerce - Nadia Art Shop",
      description: "Membangun frontend katalog produk dengan integrasi API dan desain responsif",
   },
   {
      period: "Apr 2024 - Jun 2024",
      role: "Frontend Developer",
      company: "Nusantara Journey (UKM Computer Club Project)",
      description: "Mengembangkan website tourism dengan fokus pada user experience dan responsive design",
   },
];
