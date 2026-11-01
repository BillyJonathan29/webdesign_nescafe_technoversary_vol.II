# CiremaiGreen: Digital Conservation & Field Guide

> **Karya Kompetisi Web Design: TECHNO VERSARY VOL. II**  
> Diselenggarakan oleh: **Himpunan Mahasiswa Teknik Informatika, Fakultas Ilmu Komputer, Universitas Kuningan (HIMA-TI FKOM UNIKU)**  
> Tema Utama: *"EcoDigital For Environment: Web Design Competition"*  
> Sub-Tema: *Konservasi Wisata Alam & Travel Destination Ramah Lingkungan*

---

## 1. Filosofi & Art Direction

**CiremaiGreen** dirancang bukan sebagai website biro perjalanan komersial, aplikasi booking wisata, atau dashboard SaaS generik, melainkan perpaduan antara:
- **Majalah editorial alam berkualitas tinggi** dengan komposisi asimetris yang tenang dan berkarakter.
- **Digital field guide** untuk eksplorasi keanekaragaman hayati kawasan Taman Nasional Gunung Ciremai (3.078 mdpl).
- **Platform edukasi konservasi berbasis data terverifikasi** (IUCN Red List, Permen LHK No. P.106/2018).
- **Panduan praktis perjalanan minim sampah** (*Zero-Waste Hiking Guide*) berbasis prinsip *Leave No Trace (LNT)*.

### Palet Warna Alami (Bumi, Hutan, & Kertas Catatan Lapangan)
- **Deep Forest Green** (`#203D32`): Menghadirkan keteduhan kanopi hutan pegunungan bawah.
- **Warm Paper** (`#F5F2E9`): Latar belakang nyaman seperti kertas jurnal lapangan fisik, mengurangi kelelahan mata.
- **Moss Green** (`#71816A`): Aksen lumut dan vegetasi epifit hutan awan.
- **Bark Brown** (`#74604D`): Warna tanah dan batang pohon tua.
- **Muted Clay** (`#B77D58`): Aksen penanda elevasi dan datum koordinat.
- **Soft Border** (`#DCDDD2`): Garis pembatas editorial tipis yang teratur.

### Tipografi
- **Editorial Serif**: *Newsreader* (Google Fonts) untuk judul utama, kutipan, dan artikel lapangan.
- **Clean Sans-Serif**: *Plus Jakarta Sans* untuk hierarki informasi antarmuka, navigasi, metadata, dan filter.

---

## 2. Struktur Halaman & Fitur Interaktif

Website ini memenuhi dan melampaui ketentuan minimal 4 halaman yang dipersyaratkan oleh guidebook kompetisi:

### A. Halaman Beranda (`/`)
- Hero section asimetris dengan penanda koordinat geografis nyata (`6°53′30″S 108°24′00″E · 3.078 mdpl`).
- Dekonstruksi 3 lapisan zonasi ekologi Ciremai (*Sub-Montana*, *Montana & Lumut*, *Sub-Alpin & Kawah*).
- Teaser kawasan dan jalur pendakian resmi.
- Sorotan spesies hayati endemik dengan status IUCN Red List.
- 4 prinsip nyata etika penjelajahan alam.
- Majalah editorial catatan lapangan terbaru.

### B. Halaman Eksplorasi & Peta Interaktif (`/explore`)
- **Peta Interaktif Leaflet + OpenStreetMap** dengan penanda kustom (*custom SVG markers*) titik registrasi jalur (Palutungan, Linggajati, Linggasana) dan zona resapan air (Lembah Cilengkrang, Curug Putri, Telaga Cicerem).
- Filter kategori (*Jalur Pendakian*, *Kawasan Konservasi*, *Air Terjun*, *Danau Resapan*).
- Kotak pencarian langsung (*real-time search*).
- Panel laci detail ekologis lengkap dengan elevasi, koordinat, batasan daya dukung, dan *Leave No Trace tips*.
- Mode toggle antara tampilan peta interaktif dan tampilan daftar lengkap (*accessibility friendly*).

### C. Halaman Konten / Artikel / Galeri (`/field-notes`)
- **Direktori Keanekaragaman Hayati**: Pencarian dan filter taksonomi flora & fauna (Elang Jawa, Macan Tutul Jawa, Surili Jawa, Ekek Geling, Edelweiss Jawa, dsb.) lengkap dengan modal informasi biologis mendalam.
- **Jurnal Catatan Lapangan**: Artikel ilmiah populer bergaya majalah mengenai zonasi hutan, dekomposisi sampah organik di ketinggian, serta peran Ciremai sebagai menara air tiga kabupaten.
- **Galeri Dokumentasi Alam**: Kurasi dokumentasi fotografi dengan takarir (*caption*), koordinat, dan kredit arsip.

### D. Panduan Zero-Waste Hiking (`/zero-waste`)
- **Interactive Readiness Checklist**: 9 butir persiapan bertahap (*Persiapan Rumah, Di Ransel, Selama di Jalur, Pasca-Perjalanan*).
- **Kalkulasi Kesiapan Dinamis**: Persentase kesiapan yang dihitung secara nyata dari interaksi pengguna.
- **Rekomendasi Personal**: Deteksi otomatis item berbobot kritis yang belum dipenuhi.
- **Penyimpanan Lokal (LocalStorage)**: Status centang tersimpan otomatis di browser pengguna.
- **Kalkulator Jejak Karbon Transportasi**: Estimasi emisi perjalanan darat berdasarkan faktor IPCC/DEFRA dengan transparansi metode dan keterbatasan perhitungan.

### E. Halaman Tentang Kami (`/about`)
- Latar belakang geografis dan hidrologis Gunung Ciremai bagi Kabupaten Kuningan, Majalengka, dan Cirebon.
- 4 Pilar CiremaiGreen: *Sains Tanpa Mitos, Leave No Trace Nyata, Akar Komunitas Lokal, Akses Digital Terbuka*.
- Transparansi penuh sumber data & rujukan ilmiah.
- Pernyataan independensi proyek kompetisi.

### F. Halaman Kontak & Partisipasi (`/contact`)
- Formulir umpan balik dengan validasi interaktif di sisi klien (*Nama, Email, Kategori, Subjek, Pesan*).
- Simulasi pengiriman transparan yang menjelaskan status prototipe kompetisi.
- Informasi kontak darurat pos registrasi resmi BTNGC (Palutungan & Linggajati).
- Tanya jawab seputar etika pendakian (*FAQ*).

---

## 3. Komitmen Kepatuhan Regulasi Lomba

1. **Orisinalitas Komponen**: Sesuai Poin 7 Ketentuan Perlombaan Guidebook, proyek ini **100% bebas dari template berbayar** (Tailwind UI premium, Bootstrap Themes berbayar, dsb.). Seluruh styling dibangun sendiri dengan Tailwind CSS v4 dan komponen SVG orisinal.
2. **Kesesuaian Format GitHub**: Direktori proyek dipersiapkan untuk format penamaan repository: `webdesign_namaTim_technoversary_vol.II`.
3. **Integritas Informasi**: Tidak mencantumkan statistik palsu atau klaim hubungan resmi yang belum ada. Seluruh status konservasi didasarkan pada rujukan IUCN Red List dan Permen LHK.

---

## 4. Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Tooling & Bundler**: Vite 6 (dengan optimalisasi *code-splitting vendor chunks*)
- **Routing**: React Router DOM v7
- **Peta Interaktif**: Leaflet 1.9 + React-Leaflet 5 + OpenStreetMap Carto Tiles
- **Ikonografi**: Lucide React (seragam & konsisten)
- **Tipografi**: Newsreader (Editorial Serif) & Plus Jakarta Sans (Sans-Serif) via Google Fonts

---

## 5. Cara Menjalankan Project

### Prasyarat
- **Node.js**: Versi 18.0.0 atau lebih baru (Diuji stabil pada Node v24)
- **npm**: Versi 9.0.0 atau lebih baru

### Panduan Instalasi Lokal

```bash
# 1. Masuk ke direktori proyek
cd /home/bilcode/Documents/web-design/ciremaigreen

# 2. Instalasi dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka peramban (*browser*) dan akses: **`http://localhost:5173`**

### Panduan Build Production & Preview

```bash
# Build production (TypeScript verification + Minified Vite bundles)
npm run build

# Menjalankan preview hasil build lokal
npm run preview
```

---

## 6. Daftar Sumber Data & Referensi

1. **Taksonomi & Status Konservasi**:
   - IUCN Red List of Threatened Species (*Nisaetus bartelsi*, *Panthera pardus melas*, *Presbytis comata*, *Castanopsis argentea*).
   - Peraturan Menteri Lingkungan Hidup dan Kehutanan No. P.106/MENLHK/SETJEN/KUM.1/12/2018 tentang Jenis Tumbuhan dan Satwa Dilindungi.
   - Balai Taman Nasional Gunung Ciremai (BTNGC): Data Potensi Hayati & Profil Kawasan.
2. **Data Geospasial**:
   - OpenStreetMap Contributors & Carto DB Tiles.
3. **Etika Alam Bebas**:
   - Leave No Trace Center for Outdoor Ethics (*lnt.org*): The 7 Principles of Outdoor Ethics.
4. **Faktor Emisi Transportasi**:
   - UK DEFRA / IPCC Conversion Factors for Greenhouse Gas Reporting (rata-rata penumpang per km darat).

---

*CiremaiGreen: Disusun dengan dedikasi untuk pelestarian ekosistem dan kemajuan kompetisi Techno Versary Vol. II FKOM UNIKU.*
