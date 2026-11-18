<div align="center">
  <h1>🌲 CiremaiGreen — Digital Conservation & Ecotourism Field Guide</h1>
  <p><strong>Karya Lomba Web Design Nasional: TECHNO VERSARY VOL. II</strong></p>
  <p>Diselenggarakan oleh: <strong>Himpunan Mahasiswa Teknik Informatika (HIMA-TI)</strong><br />Fakultas Ilmu Komputer, Universitas Kuningan (UNIKU)</p>
  <p>Tema Utama: <em>"EcoDigital For Environment: Web Design Competition"</em></p>
  <p>
    <strong>Sinergi Integrasi 2 Sub-Tema:</strong><br />
    🌿 <strong>Sub-Tema 1:</strong> <em>Konservasi Lingkungan & Keanekaragaman Hayati</em><br />
    🧭 <strong>Sub-Tema 2:</strong> <em>Ekowisata Mandiri & Destinasi Wisata Ramah Lingkungan</em>
  </p>
  <p>Tim Pengembang: <strong>Tim Nescafe</strong></p>
  <p>
    <a href="https://webdesign-nescafe-technoversary-vol.vercel.app/" target="_blank">
      <strong>🌐 Live Deployment (Vercel)</strong>
    </a>
  </p>
</div>

---

## 📖 1. Ikhtisar & Sinergi 2 Sub-Tema (Project Overview)

**CiremaiGreen** adalah platform *digital conservation field guide* dan edukasi ekowisata mandiri untuk kawasan **Taman Nasional Gunung Ciremai (3.078 mdpl)** — atap tertinggi Jawa Barat yang membentang di Kabupaten Kuningan dan Majalengka.

Website ini dirancang secara khusus sebagai integrasi harmonis antara **2 sub-tema lomba** dalam satu kesatuan arsitektur digital: menghadirkan pengalaman penjelajahan alam yang memikat sekaligus menanamkan tanggung jawab proteksi ekosistem. CiremaiGreen memadukan estetika **Modern Dark Luxury (Obsidian & Forest Emerald)**, jurnalisme alam editorial bergaya majalah (*editorial typography*), data ilmiah terverifikasi, serta simulasi audit etika penjelajahan bebas sampah (*Leave No Trace*).

### 🌿 Implementasi Sinergis 2 Sub-Tema Kompetisi
Karya ini tidak hanya memilih satu sudut pandang, melainkan menyatukan **kedua sub-tema** secara holistik:

1. **Sub-Tema 1: Konservasi Lingkungan & Keanekaragaman Hayati**
   - **Indeks Spesies Dilindungi**: Inventarisasi taksonomi mendalam flora & fauna terancam punah (*Nisaetus bartelsi*, *Panthera pardus melas*, *Presbytis comata*, *Anaphalis javanica*) merujuk pada **IUCN Red List** dan **Permen LHK P.106/2018**.
   - **Stratifikasi Zonasi Ekologi**: Visualisasi edukatif 4 zona kawasan konservasi (Zona Inti, Zona Rimba, Zona Pemanfaatan, dan Zona Rehabilitasi).
   - **Etika Bebas Sampah (Leave No Trace)**: Edukasi interaktif pelarangan sampah plastik, tisu basah, dan perlindungan vegetasi sub-alpin dari degradasi fisik.

2. **Sub-Tema 2: Ekowisata Mandiri & Destinasi Ramah Lingkungan**
   - **Peta Geospasial 4 Jalur Pendakian Resmi**: Pemetaan interaktif rute Palutungan, Linggajati, Linggasana, dan Apuy lengkap dengan profil elevasi, koordinat GPS, dan pos registrasi BTNGC.
   - **Kalkulator Jejak Karbon & Audit Logistik**: Alat bantu mandiri bagi pendaki untuk mengukur estimasi emisi transportasi darat dan checklist kesiapan logistik bebas sampah sebelum menuju basecamp.
   - **Integrasi Pos Jaga & Jalur Edukasi**: Titik sebaran suaka alam, air terjun resapan, dan kontak siaga pos ranger untuk keselamatan pengunjung.

### 🎨 Art Direction & Identitas Visual
- **Latar Belakang Obsidian Deep Forest** (`#060e09` & `#0f2218`): Menciptakan kontras imersif yang menonjolkan panorama kawah serta keasrian vegetasi hutan pegunungan.
- **Aksen Emerald Bio-Luminescent** (`#10b981` & `#34d399`): Aksen penanda interaktif, elevasi, dan status konservasi.
- **Tipografi Eksklusif PP Mori**: Tipografi kontemporer sans-serif yang tajam, presisi, dan nyaman dibaca untuk metadata serta laporan ilmiah.
- **Tipografi Editorial Serif (Newsreader)**: Digunakan khusus untuk kutipan etika rimba (*wilderness ethics*) dan tajuk reflektif.
- **Tipografi Monospace**: Penanda koordinat geografis nyata (`6°53′30″S 108°24′00″E`), ketinggian pos, dan datum taksonomi IUCN.

---

## 🌟 2. Fitur Unggulan & Inovasi Teknologi

### 🌐 1. Dukungan Dua Bahasa Menyeluruh (Seamless Bilingual ID / EN)
Sistem lokalisasi instan tanpa *page reload* yang dibangun dengan **React Context API** (`LanguageContext.tsx`). Terintegrasi menyeluruh dari halaman Beranda, Peta Interaktif, Indeks Taksonomi Satwa, Checklist Bebas Sampah, hingga dialog Pos Layanan Ranger.

### 🎬 2. Animasi Sinematik & Transisi Halus (Cinematic Scroll Entrance)
Menggunakan **Framer Motion** terintegrasi dengan **Lenis Smooth Scroll** untuk pengalaman interaksi kelas dunia:
- **Hero Watermark Typography**: Tipografi monumental `"CIREMAI"` (17vw) dengan transisi fade-in halus.
- **Caldera Panorama Entrance**: Efek *scale settle* dan *blur-to-focus* pada citra kawah kaldera saat halaman dibuka.
- **Staggered Reveal**: Elemen konten, kartu zonasi, jalur pendakian, dan kolom navigasi footer muncul berjenjang (*staggered wave*) dengan kurva akselerasi `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Micro-Interactions**: Transisi tombol, kartu interaktif, dan efek hover *border glow* tanpa kedutan layout (*zero layout shift*).

### 🗺️ 3. Peta Interaktif Zonasi & Jalur Pendakian (`/explore`)
- Didukung oleh **Leaflet 1.9** + **OpenStreetMap** dengan *custom high-contrast SVG markers*.
- Memetakan 4 Jalur Resmi BTNGC: **Palutungan**, **Linggajati**, **Linggasana**, dan **Apuy**.
- Filter multi-kategori: *Jalur Pendakian, Kawasan Konservasi, Air Terjun Resapan, dan Suaka Flora-Fauna*.
- Drawer panel detail geospasial: Elevasi, koordinat GPS, estimasi durasi tempuh, daya dukung lingkungan (*carrying capacity*), dan regulasi proteksi.
- Mode toggle antara tampilan Peta Interaktif dan Kartu Daftar (*Accessibility-friendly*).

### 🛡️ 4. Panduan & Kalkulator Mandiri Zero-Waste Hiking (`/zero-waste`)
- **Leave No Trace (LNT) Interactive Checklist**: 9 butir kesiapan bertahap mulai dari rumah, di dalam ransel, di jalur, hingga pasca-pendakian.
- **Deteksi Logistik Terlarang**: Peringatan tegas terhadap tisu basah (*wet wipes*), botol plastik sekali pakai, dan sisa makanan anorganik.
- **Kalkulator Jejak Karbon Transportasi**: Estimasi emisi perjalanan darat berdasarkan metodologi IPCC/DEFRA dengan konversi pohon penyerap karbon.
- **Penyimpanan Lokal (LocalStorage)**: Progres audit pendaki tersimpan otomatis di perangkat peramban.

### 🦅 5. Indeks Keanekaragaman Hayati & Jurnal Riset (`/field-notes`)
- Katalog komprehensif flora-fauna terancam punah (*Endangered & Critically Endangered*) yang merujuk pada **IUCN Red List** dan **Permen LHK P.106/2018**:
  - *Elang Jawa (Nisaetus bartelsi)*
  - *Macan Tutul Jawa (Panthera pardus melas)*
  - *Surili Jawa (Presbytis comata)*
  - *Edelweis Jawa (Anaphalis javanica)*
  - *Saninten (Castanopsis argentea)*
- Modal detail taksonomi ilmiah, morfologi, ancaman habitat, dan upaya pelestarian insitu/eksitu.
- Artikel riset populer mengenai fungsi Ciremai sebagai menara air bagi tiga kabupaten (Kuningan, Cirebon, Majalengka).

### 🤖 6. Asisten Virtual Interaktif: Pos Layanan Ranger BTNGC
- Widget asisten lapangan mengambang (*floating ranger desk*) dengan simulasi pengetikan cerdas (*typing feedback*).
- Menjawab pertanyaan pendaki seputar SOP pendakian, regulasi sampah, kuota simaksi, jalur terdekat, dan nomor kontak darurat pos jaga.

---

## 📋 3. Catatan Khusus untuk Dewan Juri (For The Judges)

1. **Orisinalitas Komponen 100% (No Paid Templates)**:  
   Sesuai regulasi kompetisi, proyek ini **murni dibangun dari nol** tanpa menggunakan template berbayar (Tailwind UI, ThemeForest, dsb.). Seluruh antarmuka, tata letak grid, dan sistem kartu direkayasa mandiri.
2. **Standar Rekayasa UI/UX Human-Centered & Aksesibilitas Tinggi (WCAG AAA)**:  
   - Menghindari ornamen generik tanpa fungsi hierarki visual yang jelas.
   - Rasio kontras teks di atas latar belakang gelap telah memenuhi standar **WCAG AAA** untuk kenyamanan mata dan keterbacaan optimal.
   - Komposisi tipografi asimetris yang elegan dengan *micro-interactions* berbasis fisika halus.
3. **Optimasi Performa & Zero Memory Leak**:  
   - Vite 6 manual chunk splitting: `vendor-react`, `vendor-leaflet`, `vendor-icons`.
   - Menggunakan animasi berbasis GPU (`transform`, `opacity`) agar performa tetap 60–120 FPS di perangkat seluler maupun desktop.

---

## 🛠️ 4. Tech Stack & Dependensi

| Kategori | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Core Framework** | React 19 + TypeScript | Komponen modular dengan *type safety* ketat |
| **Build Tool** | Vite 6 | Bundling super cepat dengan optimasi *vendor chunking* |
| **Styling** | Tailwind CSS v4 | Utilitas CSS modern performa tinggi |
| **Animasi** | Framer Motion 14 | Animasi transisi, staggered entrance, dan micro-interactions |
| **Smooth Scroll** | Lenis Smooth Scroll | Pengalaman scrolling halus berbasis inersia alami |
| **Geospatial & Map**| Leaflet 1.9 + React-Leaflet 5 | Peta interaktif zonasi kawasan dan jalur pendakian |
| **Ikonografi** | Lucide React | Ikon modern, seragam, dan berbasis vektor SVG |
| **Tipografi** | PP Mori, Newsreader, JetBrains Mono | Tipografi multi-aksen untuk editorial & data ilmiah |

---

## 💻 5. Panduan Instalasi Lokal (Local Setup)

Untuk menjalankan proyek ini di komputer lokal:

```bash
# 1. Clone repositori ini
git clone https://github.com/BillyJonathan29/webdesign_nescafe_technoversary_vol.II.git

# 2. Masuk ke direktori proyek
cd webdesign_nescafe_technoversary_vol.II

# 3. Instal semua dependensi
npm install

# 4. Jalankan development server
npm run dev
```

Buka peramban dan akses alamat: **`http://localhost:5173`**

### Build Production & Verifikasi:
```bash
# Jalankan kompilasi TypeScript dan build bundle Vite
npm run build

# Preview hasil build produksi secara lokal
npm run preview
```

---

## 📚 6. Sumber Data & Referensi Ilmiah

1. **Taksonomi & Satwa Dilindungi**:
   - IUCN Red List of Threatened Species (*iucnredlist.org*).
   - Peraturan Menteri Lingkungan Hidup dan Kehutanan (Permen LHK) No. P.106/MENLHK/SETJEN/KUM.1/12/2018.
   - Publikasi Inventarisasi Hayati Balai Taman Nasional Gunung Ciremai (BTNGC).
2. **Data Pemetaan Geospasial**:
   - OpenStreetMap & CartoDB Tile Service.
   - Peta Jalur Pendakian Resmi BTNGC (Palutungan, Linggajati, Linggasana, Apuy).
3. **Etika Alam Bebas (Outdoor Ethics)**:
   - *Leave No Trace Center for Outdoor Ethics* (LNT.org) — 7 Prinsip Etika Alam Terbuka.
4. **Metodologi Karbon**:
   - UK Department for Environment, Food & Rural Affairs (DEFRA) & IPCC Greenhouse Gas Conversion Factors.

---

<div align="center">
  <p>Dibuat dengan ❤️ dan dedikasi konservasi oleh <strong>Tim Nescafe</strong> untuk <strong>Techno Versary Vol. II HIMA-TI FKOM UNIKU</strong>.</p>
</div>
