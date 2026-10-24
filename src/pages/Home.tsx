import { Link } from 'react-router-dom'
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  MapPin,
  BookOpen
} from 'lucide-react'
import { DESTINATIONS } from '../data/destinations'
import { BIODIVERSITY } from '../data/biodiversity'
import { FIELD_NOTES } from '../data/fieldNotes'

export default function Home() {
  const featuredDestinations = DESTINATIONS.slice(0, 3)
  const featuredSpecies = BIODIVERSITY.slice(0, 4)
  const featuredArticle = FIELD_NOTES[0]
  const secondaryArticles = FIELD_NOTES.slice(1, 3)

  return (
    <div className="bg-[#F5F2E9] text-[#292D29]">
      {/* 1. HERO SECTION — Asymmetric Editorial Layout */}
      <section className="relative border-b border-[#DCDDD2] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Editorial Kicker & Location Datum */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DCDDD2]/70 text-xs text-[#74604D] font-editorial-sans">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B77D58]"></span>
              <span className="font-semibold uppercase tracking-[0.2em] text-[#203D32]">
                Field Guide Konservasi &middot; Seri 01
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-[#71816A]">
                6&deg;53&prime;30&Prime; S &middot; 108&deg;24&prime;00&Prime; E
              </span>
              <span className="text-[#DCDDD2] hidden sm:inline">&bull;</span>
              <span className="hidden sm:inline font-mono text-[11px]">3.078 mdpl</span>
            </div>
          </div>

          {/* Asymmetrical Grid: Editorial Typography Left + Landscape Frame Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-10">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#EDE8DC] border border-[#DCDDD2] text-[#203D32] text-xs uppercase tracking-[0.16em] font-semibold">
                Gunung Tertinggi di Jawa Barat
              </div>

              <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl text-[#203D32] leading-[1.08] tracking-tight">
                Kenali bentang alamnya. <br />
                <span className="italic font-normal text-[#71816A]">
                  Pahami apa yang menjaganya.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#292D29]/80 leading-relaxed font-editorial-sans max-w-xl">
                CiremaiGreen adalah panduan digital lapangan yang menghubungkan dokumentasi keanekaragaman hayati, pemetaan rute berbasis ekologi, dan etika perjalanan minim sampah di kawasan Taman Nasional Gunung Ciremai, Kabupaten Kuningan.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  to="/explore"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#203D32] text-[#F5F2E9] hover:bg-[#172D25] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#203D32]"
                >
                  <Compass className="w-4 h-4 text-[#B77D58]" />
                  <span>Jelajahi Peta Kawasan</span>
                </Link>

                <Link
                  to="/zero-waste"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FAF8F4] hover:bg-[#EDE8DC] text-[#203D32] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#DCDDD2]"
                >
                  <span>Persiapan Ekspedisi Nol Sampah</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B77D58]" />
                </Link>
              </div>

              {/* Editorial Micro Highlights Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#DCDDD2]/70 text-xs font-editorial-sans">
                <div>
                  <span className="block font-editorial-serif text-2xl font-semibold text-[#203D32]">
                    3.078<span className="text-sm font-normal text-[#74604D]"> m</span>
                  </span>
                  <span className="text-[#74604D] text-[11px] leading-tight block mt-0.5">
                    Puncak Gunung Tertinggi di Jabar
                  </span>
                </div>
                <div>
                  <span className="block font-editorial-serif text-2xl font-semibold text-[#203D32]">
                    4 Jalur
                  </span>
                  <span className="text-[#74604D] text-[11px] leading-tight block mt-0.5">
                    Rute Pendakian Resmi Terdaftar
                  </span>
                </div>
                <div>
                  <span className="block font-editorial-serif text-2xl font-semibold text-[#203D32]">
                    54+ Mata Air
                  </span>
                  <span className="text-[#74604D] text-[11px] leading-tight block mt-0.5">
                    Akuifer Penyangga 3 Kabupaten
                  </span>
                </div>
              </div>
            </div>

            {/* Right Landscape Frame Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Outer frame styling with thin editorial border */}
                <div className="bg-[#EDE8DC] p-2.5 border border-[#DCDDD2] shadow-sm">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#203D32]/10">
                    <img
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
                      alt="Punggungan punggung Gunung Ciremai dengan tutupan vegetasi hutan hujan tropis berkabut"
                      className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.05]"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#203D32]/70 via-transparent to-transparent"></div>
                    
                    {/* Editorial photo overlay tag */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#F5F2E9]/95 backdrop-blur-xs border border-[#DCDDD2] text-xs">
                      <p className="font-editorial-serif italic text-sm text-[#203D32]">
                        Lanskap Lereng Ciremai dari Punggungan Linggajati
                      </p>
                      <p className="text-[10px] text-[#74604D] font-editorial-sans mt-0.5 flex justify-between">
                        <span>Zona Sub-Montana &middot; 1.450 mdpl</span>
                        <span>Dokumentasi Terverifikasi</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtitle datum note below frame */}
                <div className="mt-2.5 text-[11px] text-[#74604D] flex justify-between px-1 font-mono">
                  <span>FIG. 01 — FORMASI STRATOVOLCANO</span>
                  <span>KUNINGAN, JABAR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ECOLOGICAL ZONATION SECTION — Scientific But Approachable */}
      <section className="py-20 border-b border-[#DCDDD2] bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#DCDDD2]">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
                Struktur Ekosistem
              </span>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#203D32]">
                Tiga Lapisan Elevasi Ciremai
              </h2>
              <p className="text-sm sm:text-base text-[#74604D] font-editorial-sans">
                Setiap rentang ketinggian memiliki iklim mikro yang berbeda, jenis tanah yang khas, dan komunitas spesies yang saling bergantung.
              </p>
            </div>
            <div className="text-xs text-[#71816A] font-mono shrink-0">
              [ REF: STEENIS MOUNTAIN FLORA ]
            </div>
          </div>

          {/* Three Varied Columns for Three Zones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            {/* Zone 1: Sub-Montana */}
            <div className="border border-[#DCDDD2] bg-[#F5F2E9] p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-[#74604D] pb-3 border-b border-[#DCDDD2]">
                  <span className="font-mono uppercase font-bold text-[#203D32]">ZONA 01</span>
                  <span>600 &ndash; 1.400 mdpl</span>
                </div>
                <h3 className="font-editorial-serif text-2xl text-[#203D32]">
                  Hutan Sub-Montana Bawah
                </h3>
                <p className="text-sm text-[#292D29]/80 leading-relaxed font-editorial-sans">
                  Zona kanopi tinggi yang didominasi pohon Rasamala (<em>Altingia excelsa</em>) dan Saninten. Menjadi koridor pergerakan primata Surili Jawa dan sarang pohon burung Elang Jawa.
                </p>
                <div className="pt-2 text-xs text-[#71816A] space-y-1">
                  <p><strong>Ciri Tanah:</strong> Lapisan humus tebal, lembap sepanjang tahun</p>
                  <p><strong>Fungsi Kunci:</strong> Resapan air hujan penahan limpasan ke sungai</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCDDD2] text-xs font-semibold text-[#203D32] flex items-center justify-between">
                <span>Contoh: Pos Cigowang, Cilengkrang</span>
                <span className="text-[#B77D58]">&rarr;</span>
              </div>
            </div>

            {/* Zone 2: Montana */}
            <div className="border border-[#DCDDD2] bg-[#F5F2E9] p-6 flex flex-col justify-between relative">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-[#74604D] pb-3 border-b border-[#DCDDD2]">
                  <span className="font-mono uppercase font-bold text-[#203D32]">ZONA 02</span>
                  <span>1.400 &ndash; 2.400 mdpl</span>
                </div>
                <h3 className="font-editorial-serif text-2xl text-[#203D32]">
                  Hutan Montana &amp; Lumut
                </h3>
                <p className="text-sm text-[#292D29]/80 leading-relaxed font-editorial-sans">
                  Zona kabut abadi (cloud forest). Pohon Jamuju dan Pasang ditumbuhi lumut tebal dan anggrek epifit endemik. Suhu malam hari berkisar antara 8&ndash;14&deg;C.
                </p>
                <div className="pt-2 text-xs text-[#71816A] space-y-1">
                  <p><strong>Ciri Tanah:</strong> Gambut pegunungan tipis dan akar saling jalin</p>
                  <p><strong>Kerapuhan:</strong> Erosi tapak mudah terjadi bila jalur dipotong</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCDDD2] text-xs font-semibold text-[#203D32] flex items-center justify-between">
                <span>Contoh: Pos Bapa Tere, Sangga Buana</span>
                <span className="text-[#B77D58]">&rarr;</span>
              </div>
            </div>

            {/* Zone 3: Sub-Alpin */}
            <div className="border border-[#DCDDD2] bg-[#F5F2E9] p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-[#74604D] pb-3 border-b border-[#DCDDD2]">
                  <span className="font-mono uppercase font-bold text-[#203D32]">ZONA 03</span>
                  <span>2.400 &ndash; 3.078 mdpl</span>
                </div>
                <h3 className="font-editorial-serif text-2xl text-[#203D32]">
                  Semak Sub-Alpin &amp; Kawah
                </h3>
                <p className="text-sm text-[#292D29]/80 leading-relaxed font-editorial-sans">
                  Batas vegetasi teratas dengan paparan angin kencang dan gas belerang kawah. Rumah bagi semak Cantigi dan bunga abadi Edelweiss Jawa (<em>Anaphalis javanica</em>).
                </p>
                <div className="pt-2 text-xs text-[#71816A] space-y-1">
                  <p><strong>Ciri Tanah:</strong> Pasir vulkanik lepas andesit dan batuan piroklastik</p>
                  <p><strong>Regulasi:</strong> Dilarang keras memetik tumbuhan apa pun</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#DCDDD2] text-xs font-semibold text-[#203D32] flex items-center justify-between">
                <span>Contoh: Kawah Ganda, Sunan Cirebon</span>
                <span className="text-[#B77D58]">&rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE DESTINATIONS — Editorial Grid */}
      <section className="py-20 border-b border-[#DCDDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#DCDDD2]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
                Kawasan &amp; Jalur
              </span>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#203D32] mt-1">
                Eksplorasi yang Bertanggung Jawab
              </h2>
            </div>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#203D32] hover:text-[#B77D58] transition-colors"
            >
              <span>Buka Peta Interaktif Lengkap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Destinations Grid with distinct visual balance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <article
                key={dest.id}
                className="group border border-[#DCDDD2] bg-[#FAF8F4] flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo with credit */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#203D32]/10 border-b border-[#DCDDD2]">
                    <img
                      src={dest.imageUrl}
                      alt={dest.imageCaption}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#F5F2E9]/90 px-2.5 py-1 text-[10px] font-semibold text-[#203D32] uppercase tracking-wider border border-[#DCDDD2]">
                      {dest.categoryLabel}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#74604D] font-mono">
                      <span>{dest.elevation}</span>
                      <span>{dest.district}</span>
                    </div>

                    <h3 className="font-editorial-serif text-xl text-[#203D32] group-hover:text-[#B77D58] transition-colors">
                      {dest.name}
                    </h3>

                    <p className="text-sm text-[#292D29]/80 font-editorial-sans line-clamp-3 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>
                </div>

                {/* Footer link to Explore with location focus */}
                <div className="p-6 pt-0 mt-4">
                  <div className="pt-4 border-t border-[#DCDDD2]/70 flex items-center justify-between text-xs font-semibold text-[#203D32]">
                    <span className="flex items-center gap-1.5 text-[#74604D]">
                      <MapPin className="w-3.5 h-3.5 text-[#B77D58]" />
                      {dest.locationName}
                    </span>
                    <Link
                      to={`/explore?id=${dest.id}`}
                      className="hover:text-[#B77D58] inline-flex items-center gap-1"
                    >
                      <span>Lihat di Peta</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BIODIVERSITY HIGHLIGHTS — Authentic Flora & Fauna */}
      <section className="py-20 border-b border-[#DCDDD2] bg-[#203D32] text-[#F5F2E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#37463E]">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A3B49D]">
                Keanekaragaman Hayati
              </span>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#FAF8F4]">
                Spesies Penjaga Ekosistem Ciremai
              </h2>
              <p className="text-sm sm:text-base text-[#A3B49D] font-editorial-sans">
                Dokumentasi spesies endemik dan dilindungi dengan status taksonomi resmi dan rujukan konservasi terverifikasi.
              </p>
            </div>
            <Link
              to="/field-notes"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FAF8F4] hover:text-[#B77D58] transition-colors shrink-0"
            >
              <span>Buka Seluruh Direktori Spesies</span>
              <ArrowRight className="w-4 h-4 text-[#B77D58]" />
            </Link>
          </div>

          {/* Species Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {featuredSpecies.map((species) => (
              <div
                key={species.id}
                className="bg-[#172D25] border border-[#37463E] flex flex-col justify-between overflow-hidden group hover:border-[#71816A] transition-colors"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#203D32]">
                    <img
                      src={species.imageUrl}
                      alt={species.commonName}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span
                      className={`absolute top-2.5 right-2.5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        species.iucnStatusCode === 'CR'
                          ? 'bg-rose-900/90 text-rose-100 border border-rose-700'
                          : species.iucnStatusCode === 'EN'
                          ? 'bg-amber-900/90 text-amber-100 border border-amber-700'
                          : 'bg-[#203D32]/90 text-[#FAF8F4] border border-[#71816A]'
                      }`}
                    >
                      {species.iucnStatus}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <p className="text-[11px] font-mono text-[#A3B49D] uppercase tracking-wider">
                      {species.categoryLabel}
                    </p>
                    <h3 className="font-editorial-serif text-xl text-[#FAF8F4]">
                      {species.commonName}
                    </h3>
                    <p className="text-xs italic text-[#A3B49D] font-editorial-serif">
                      {species.scientificName}
                    </p>
                    <p className="text-xs text-[#F5F2E9]/75 font-editorial-sans line-clamp-3 leading-relaxed pt-1">
                      {species.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2">
                  <div className="pt-3 border-t border-[#37463E] flex items-center justify-between text-[11px] text-[#A3B49D]">
                    <span>Elevasi: {species.elevationRange}</span>
                    <Link
                      to={`/field-notes?species=${species.id}`}
                      className="text-[#B77D58] hover:text-[#FAF8F4] font-semibold"
                    >
                      Detail &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONSERVATION IN PRACTICE — 4 Real Principles */}
      <section className="py-20 border-b border-[#DCDDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
              Etika Lapangan
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#203D32]">
              Konservasi dalam Praktik Nyata
            </h2>
            <p className="text-sm sm:text-base text-[#74604D] font-editorial-sans">
              Bukan slogan kosong. Ini adalah empat disiplin kecil yang dapat dilakukan setiap penjelajah untuk mencegah degradasi kawasan Ciremai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#FAF8F4] border border-[#DCDDD2] space-y-3">
              <div className="w-8 h-8 rounded-none bg-[#203D32] text-[#F5F2E9] flex items-center justify-center font-editorial-serif font-bold text-sm">
                01
              </div>
              <h3 className="font-editorial-serif text-xl text-[#203D32]">
                Repacking Sejak dari Rumah
              </h3>
              <p className="text-xs sm:text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed">
                Tinggalkan kemasan kardus, plastik ganda, dan sachet makanan sebelum mendaki. Pindahkan logistik ke wadah kedap pakai ulang untuk memangkas potensi sampah di pos camp hingga 80%.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F4] border border-[#DCDDD2] space-y-3">
              <div className="w-8 h-8 rounded-none bg-[#203D32] text-[#F5F2E9] flex items-center justify-center font-editorial-serif font-bold text-sm">
                02
              </div>
              <h3 className="font-editorial-serif text-xl text-[#203D32]">
                Bawa Turun Sampah Organik
              </h3>
              <p className="text-xs sm:text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed">
                Di ketinggian dingin di atas 2.000 mdpl, kulit pisang dan sisa buah membutuhkan hingga 2 tahun untuk hancur dan merusak pola makan alami satwa liar. Bawa turun kembali seluruhnya.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F4] border border-[#DCDDD2] space-y-3">
              <div className="w-8 h-8 rounded-none bg-[#203D32] text-[#F5F2E9] flex items-center justify-center font-editorial-serif font-bold text-sm">
                03
              </div>
              <h3 className="font-editorial-serif text-xl text-[#203D32]">
                Tetap di Tapak Resmi
              </h3>
              <p className="text-xs sm:text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed">
                Memotong jalur tikungan (switchback) lereng bukit memicu erosi batuan vulkanik andesit yang merusak lapisan kecambah pohon penahan mata air di musim hujan.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F4] border border-[#DCDDD2] space-y-3">
              <div className="w-8 h-8 rounded-none bg-[#203D32] text-[#F5F2E9] flex items-center justify-center font-editorial-serif font-bold text-sm">
                04
              </div>
              <h3 className="font-editorial-serif text-xl text-[#203D32]">
                Redam Kebisingan Suara
              </h3>
              <p className="text-xs sm:text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed">
                Pengeras suara bluetooth mengusir primata Surili Jawa dan mengganggu burung pemangsa Elang Jawa yang mengerami telur tunggalnya di tajuk pohon kanopi.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-[#EDE8DC] border border-[#DCDDD2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#203D32] shrink-0" />
              <span className="text-xs text-[#203D32] font-editorial-sans font-medium">
                Gunakan modul interaktif kami untuk memeriksa kesiapan perlengkapan nol sampah Anda sebelum melakukan registrasi di pos BTNGC.
              </span>
            </div>
            <Link
              to="/zero-waste"
              className="text-xs font-semibold text-[#B77D58] hover:text-[#9A6544] uppercase tracking-wider shrink-0 underline underline-offset-2"
            >
              Buka Interactive Checklist &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. LATEST FIELD NOTES — Editorial Magazine Style */}
      <section className="py-20 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#DCDDD2] mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
                Publikasi &amp; Jurnal
              </span>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#203D32] mt-1">
                Catatan Lapangan Terbaru
              </h2>
            </div>
            <Link
              to="/field-notes"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#203D32] hover:text-[#B77D58] transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Baca Semua Catatan</span>
            </Link>
          </div>

          {/* Asymmetric layout: Big Featured Article on Left, Secondary Articles on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Primary Feature (7 cols) */}
            <article className="lg:col-span-7 border border-[#DCDDD2] bg-[#F5F2E9] overflow-hidden group">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#203D32]/10 border-b border-[#DCDDD2]">
                <img
                  src={featuredArticle.featuredImage}
                  alt={featuredArticle.imageCaption}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#203D32] text-[#F5F2E9] px-2.5 py-1 text-[10px] uppercase font-semibold tracking-wider">
                  {featuredArticle.category}
                </span>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3 text-xs text-[#74604D] font-mono">
                  <span>{featuredArticle.date}</span>
                  <span>&bull;</span>
                  <span>{featuredArticle.readTime}</span>
                  <span>&bull;</span>
                  <span>Oleh {featuredArticle.author}</span>
                </div>
                <h3 className="font-editorial-serif text-2xl sm:text-3xl text-[#203D32] leading-snug group-hover:text-[#B77D58] transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed line-clamp-3">
                  {featuredArticle.subtitle}
                </p>
                <div className="pt-3">
                  <Link
                    to={`/field-notes?slug=${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#203D32] hover:text-[#B77D58] transition-colors"
                  >
                    <span>Baca Catatan Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B77D58]" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Secondary Articles List (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {secondaryArticles.map((article) => (
                <article
                  key={article.id}
                  className="border border-[#DCDDD2] bg-[#F5F2E9] p-6 space-y-3 group hover:border-[#71816A] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-[#74604D] font-mono">
                    <span className="text-[#B77D58] font-semibold">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="font-editorial-serif text-xl text-[#203D32] leading-snug group-hover:text-[#B77D58] transition-colors">
                    <Link to={`/field-notes?slug=${article.slug}`}>{article.title}</Link>
                  </h4>
                  <p className="text-xs text-[#292D29]/80 font-editorial-sans leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="pt-2 text-[11px] text-[#74604D] flex justify-between items-center">
                    <span>{article.author}</span>
                    <Link
                      to={`/field-notes?slug=${article.slug}`}
                      className="font-semibold text-[#203D32] hover:text-[#B77D58]"
                    >
                      Baca &rarr;
                    </Link>
                  </div>
                </article>
              ))}

              {/* Callout box about submitting field observations */}
              <div className="p-6 bg-[#EDE8DC] border border-[#DCDDD2] space-y-2">
                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#74604D]">
                  Partisipasi Lapangan
                </span>
                <h4 className="font-editorial-serif text-lg text-[#203D32]">
                  Punya Dokumentasi atau Riset Hayati?
                </h4>
                <p className="text-xs text-[#74604D] leading-relaxed">
                  Kami menyambut kontribusi catatan lapangan dari mahasiswa, peneliti, dan penggiat alam yang ingin mengedukasi masyarakat mengenai kelestarian Ciremai.
                </p>
                <Link
                  to="/contact?type=contribute"
                  className="inline-block pt-2 text-xs font-semibold text-[#203D32] hover:text-[#B77D58] underline underline-offset-2"
                >
                  Kirim Catatan Pengamatan &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
