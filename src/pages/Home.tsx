import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Mountain,
  CheckCircle2,
  Leaf,
  Layers,
  ChevronRight
} from 'lucide-react'
import { DESTINATIONS } from '../data/destinations'
import { FIELD_NOTES } from '../data/fieldNotes'
import { useLanguage } from '../context/LanguageContext'

const HERO_SPECIES = [
  {
    id: 'elang-jawa',
    number: '01 / 04',
    name: 'Elang Jawa',
    scientific: 'Nisaetus bartelsi',
    status: 'Terancam Punah (EN)',
    statusCode: 'EN',
    role: 'Apex Predator Rimba & Lambang Garuda',
    elevation: '800 – 2.200 mdpl',
    pop: '~18 Pasang Terpantau di TNGC',
    image: '/images/elang-jawa.jpg',
    description: 'Burung pemangsa endemik pulau Jawa yang menjadi inspirasi lambang negara Garuda. Membutuhkan pohon rasamala purba tinggi untuk sarang bertelur.',
    accent: '#10b981',
  },
  {
    id: 'macan-tutul',
    number: '02 / 04',
    name: 'Macan Tutul Jawa',
    scientific: 'Panthera pardus melas',
    status: 'Kritis (CR)',
    statusCode: 'CR',
    role: 'Karnivora Puncak Kunci Ekosistem',
    elevation: '700 – 2.500 mdpl',
    pop: 'Terpantau Kamera Trap BTNGC',
    image: '/images/macan-tutul.jpeg',
    description: 'Kucing besar endemik terakhir pulau Jawa dengan kemampuan kamuflase sempurna. Berfungsi mengontrol populasi babi hutan dan kijang di lereng Ciremai.',
    accent: '#f59e0b',
  },
  {
    id: 'surili-jawa',
    number: '03 / 04',
    name: 'Surili Jawa',
    scientific: 'Presbytis comata',
    status: 'Rentan (VU)',
    statusCode: 'VU',
    role: 'Penyebar Benih Kanopi Hutan',
    elevation: '600 – 2.000 mdpl',
    pop: 'Populasi Stabil di Lereng Selatan',
    image: '/images/surili-jawa.jpeg',
    description: 'Primata berbulu abu-abu keperakan pemakan pucuk daun muda. Menghabiskan sebagian besar hidupnya di kanopi pohon tinggi tanpa menyentuh tanah.',
    accent: '#34d399',
  },
  {
    id: 'ekek-geling',
    number: '04 / 04',
    name: 'Ekek Geling Jawa',
    scientific: 'Cissa thalassina',
    status: 'Kritis (CR)',
    statusCode: 'CR',
    role: 'Bioindikator Kualitas Hutan Primer',
    elevation: '500 – 2.000 mdpl',
    pop: 'Sangat Langka & Dilindungi',
    image: '/images/ekek-geling.jpeg',
    description: 'Burung bersuara merdu dengan bulu zamrud cerah dan topeng hitam di mata. Keberadaannya menandakan keasrian hutan pegunungan yang belum terjamah.',
    accent: '#a3e635',
  },
]

const ZONATIONS = [
  {
    title: 'Zona Inti (Strict Nature Reserve)',
    area: '2.560 Ha',
    focus: 'Kawah Aktif & Puncak 3.078 mdpl',
    desc: 'Wilayah dengan perlindungan mutlak tertinggi. Larangan total untuk aktivitas wisata, api unggun, atau modifikasi vegetasi. Hanya dapat diakses untuk riset ilmiah berizin khusus Balai TNGC.',
    color: 'emerald',
    rules: ['Akses hanya izin riset BTNGC', 'Dilarang memetik Edelweis', 'Zona steril bebas perkemahan'],
  },
  {
    title: 'Zona Rimba (Wilderness Habitat)',
    area: '6.400 Ha',
    focus: 'Koridor Jelajah Macan Tutul & Elang',
    desc: 'Kawasan penyangga utama keanekaragaman genetik. Hutan primer lebat tempat satwa mamalia besar dan predator berburu tanpa interaksi manusia.',
    color: 'lime',
    rules: ['Jalur jelajah kamera trap aktif', 'Dilarang kebisingan / drone tak berizin', 'Koridor konservasi mata air alami'],
  },
  {
    title: 'Zona Pemanfaatan (Ecotourism & Trails)',
    area: '4.850 Ha',
    focus: '4 Jalur Pendakian Resmi & Destinasi Air Terjun',
    desc: 'Ruang interaksi edukasi dan pendakian berkelanjutan: Palutungan, Linggajati, Apuy, dan Linggasana dengan protokol zero-waste dan kuota Simaksi ketat.',
    color: 'teal',
    rules: ['Wajib registrasi Simaksi Online', 'Pemeriksaan kantong sampah', 'Hanya di jalur marka resmi'],
  },
  {
    title: 'Zona Tradisional & Rehabilitasi',
    area: '1.240 Ha',
    focus: 'Hutan Adat & Pemulihan Ekosistem',
    desc: 'Area kolaborasi bersama masyarakat lokal desa penyangga untuk penanaman kembali flora endemik (Saninten, Jamuju) dan pemanfaatan hasil hutan non-kayu.',
    color: 'amber',
    rules: ['Konservasi bibit tanaman endemik', 'Pemberdayaan ranger lokal', 'Perlindungan tangkapan air desa'],
  },
]

export default function Home() {
  const { lang } = useLanguage()
  const [activeSpeciesIndex, setActiveSpeciesIndex] = useState(0)

  const activeSpecies = HERO_SPECIES[activeSpeciesIndex]

  const featuredDestinations = DESTINATIONS.slice(0, 4)
  const featuredArticles = FIELD_NOTES.slice(0, 3)

  return (
    <div className="bg-[#060e09] text-white overflow-hidden font-['Mori',sans-serif]">
      {/* =========================================================================
          1. CINEMATIC HERO SECTION ("Birdly" Style - Clean Seamless Connected Canvas)
      ========================================================================== */}
      <section className="relative min-h-screen pt-28 lg:pt-32 pb-16 flex flex-col justify-center overflow-hidden border-b border-white/[0.08]">
        
        {/* Giant Monumental Background Typography: "CIREMAI" (H2 / 21st.dev Style) */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none z-0 overflow-hidden hidden md:flex items-center justify-center"
        >
          <span className="text-[17vw] leading-none font-bold tracking-[-0.04em] uppercase text-white/[0.03] whitespace-nowrap select-none font-mono">
            CIREMAI
          </span>
        </div>

        {/* === SEAMLESS MOUNT CIREMAI PANORAMA (Static, Crisp, Bleeds into Background, No Box) === */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-7/12 h-full pointer-events-none select-none overflow-hidden z-0">
          <div className="relative w-full h-full">
            {/* The Aerial Caldera & Clouds Image with Smooth Entrance Reveal */}
            <motion.img
              initial={{ opacity: 0, scale: 1.15, filter: 'blur(8px)' }}
              animate={{ opacity: 0.95, scale: 1.08, filter: 'blur(0px)' }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              src="/images/ciremai.png"
              alt="Gunung Ciremai 3.078 mdpl - Kawah Kaldera & Samudra Awan"
              className="w-full h-full object-cover object-[center_35%] lg:object-[center_28%] -translate-y-2 lg:-translate-y-6 [mask-image:linear-gradient(to_left,black_65%,transparent_100%)]"
            />

            {/* Seamless Gradients Fading Mountain into the Dark Canvas */}
            <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[#060e09] via-[#060e09]/95 via-35% to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#060e09] to-transparent" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#060e09] to-transparent" />
            <div className="absolute inset-0 bg-emerald-950/20 mix-blend-color pointer-events-none" />
          </div>
        </div>

        {/* Ambient Green Atmosphere Glows */}
        <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] rounded-full blur-[160px] opacity-25 bg-emerald-500 pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-[420px] h-[420px] rounded-full blur-[130px] opacity-20 bg-emerald-600 pointer-events-none" />

        {/* Foreground Content Stage */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* === LEFT CONTENT COLUMN (7 cols) === */}
            <div className="lg:col-span-7 space-y-5 lg:space-y-6 relative z-20">
              
              {/* Index Kicker Pill */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md"
              >
                <span className="font-mono text-xs font-semibold text-emerald-400">
                  {activeSpecies.number}
                </span>
                <span className="text-white/20">&bull;</span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-300 font-medium">
                  {lang === 'ID' ? 'Kawasan Konservasi TNGC' : 'TNGC Conservation Area'}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </motion.div>

              {/* Massive Hero Typography */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-2"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.08]">
                  A BRIGHTER <br />
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-lime-300">
                    SANCTUARY
                  </span> <br />
                  FOR CIREMAI.
                </h1>
                <p className="text-sm sm:text-base text-neutral-300/90 max-w-xl leading-relaxed pt-1">
                  {lang === 'ID'
                    ? 'Menjaga denyut nadi rimba tropis, keanekaragaman hayati endemik, dan etika penjelajahan lestari di puncak tertinggi Jawa Barat (3.078 mdpl).'
                    : 'Safeguarding the tropical wilderness pulse, endemic biodiversity, and sustainable expedition ethics on the highest rooftop of West Java (3,078 masl).'}
                </p>
              </motion.div>

              {/* Action Button (Clean single pill) */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
                className="pt-1 flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95"
                >
                  <Compass className="w-4 h-4" />
                  <span>{lang === 'ID' ? 'Jelajahi Rute & Peta' : 'Explore Trails & Map'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/zero-waste"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-neutral-200 hover:text-white text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'ID' ? 'Audit Nol Sampah' : 'Zero-Waste Audit'}</span>
                </Link>
              </motion.div>

              {/* Wildlife Switcher Thumbnails */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
                className="pt-4 space-y-3"
              >
                <span className="text-[11px] uppercase tracking-widest text-emerald-400/80 font-semibold">
                  {lang === 'ID' ? 'Pilih Satwa Endemik untuk Diinspeksi:' : 'Select Wildlife to Inspect:'}
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {HERO_SPECIES.map((species, idx) => {
                    const isSelected = idx === activeSpeciesIndex
                    return (
                      <button
                        key={species.id}
                        type="button"
                        onClick={() => setActiveSpeciesIndex(idx)}
                        className={`group relative flex items-center gap-3 p-2 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm ${
                          isSelected
                            ? 'bg-emerald-500/15 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]'
                            : 'bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.06]'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 relative">
                          <img
                            src={species.image}
                            alt={species.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {isSelected && (
                            <span className="absolute inset-0 bg-emerald-500/20 ring-2 ring-emerald-400 ring-inset rounded-xl"></span>
                          )}
                        </div>
                        <div className="min-w-0 pr-1">
                          <p className="text-xs font-semibold text-white truncate">
                            {species.name}
                          </p>
                          <p className="text-[10px] text-neutral-400 italic truncate font-serif">
                            {species.scientific}
                          </p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </motion.div>

              {/* Bottom Quick Metrics Strip */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    3.078<span className="text-xs text-emerald-400 font-normal ml-0.5">MDPL</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {lang === 'ID' ? 'Puncak Tertinggi Jabar' : 'Highest West Java Peak'}
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    54<span className="text-xs text-emerald-400 font-normal ml-0.5">+</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {lang === 'ID' ? 'Mata Air Alami' : 'Protected Springs'}
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    15.000<span className="text-xs text-emerald-400 font-normal ml-0.5">HA</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {lang === 'ID' ? 'Kawasan Konservasi' : 'Conservation Area'}
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    25<span className="text-xs text-emerald-400 font-normal ml-0.5">+</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {lang === 'ID' ? 'Spesies Terlindungi' : 'Protected Species'}
                  </div>
                </div>
              </motion.div>

            </div>

            {/* === RIGHT COLUMN: UNBLOCKED EXPANSIVE VIEW OF MOUNT CIREMAI === */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none min-h-[300px]">
              {/* Clean unobstructed natural mountain landscape */}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE ZONATION SECTION
      ========================================================================== */}
      <section className="py-24 bg-[#0a1610] border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-3 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'ID' ? 'Zonasi Kawasan Konservasi' : 'Conservation Zonation'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Keseimbangan Perlindungan <br />
              <span className="text-emerald-400 font-semibold">& Daya Dukung Lingkungan.</span>
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {lang === 'ID'
                ? 'Taman Nasional Gunung Ciremai dikelola dengan stratifikasi zonasi ekologi untuk menjamin pemulihan alam, kelestarian satwa, dan edukasi publik yang beretika.'
                : 'Mount Ciremai National Park is governed by ecological zonation to ensure natural recovery, wildlife persistence, and ethical public education.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ZONATIONS.map((zone, idx) => (
              <motion.div
                key={zone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-[#0f2218]/60 hover:bg-[#142e20] border border-white/10 hover:border-emerald-400/40 rounded-3xl p-6 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:scale-[1.015]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-300">
                      {zone.area}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {zone.title}
                  </h3>

                  <p className="text-xs text-emerald-400/90 font-medium">
                    Fokus: {zone.focus}
                  </p>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {zone.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold block">
                    {lang === 'ID' ? 'Aturan Kunci:' : 'Key Protocols:'}
                  </span>
                  {zone.rules.map((rule) => (
                    <div key={rule} className="flex items-center gap-2 text-xs text-neutral-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{rule}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. FEATURED SANCTUARIES & TRAILS
      ========================================================================== */}
      <section className="py-24 bg-[#060e09] border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Mountain className="w-3.5 h-3.5" />
                <span>{lang === 'ID' ? 'Bentang Alam Terkurasi' : 'Curated Landscapes'}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
                Empat Dimensi Rimba <br />
                <span className="text-emerald-400 font-semibold">Taman Nasional Ciremai.</span>
              </h2>
            </div>

            <Link
              to="/explore"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              <span>{lang === 'ID' ? 'Buka Peta Interaktif Lengkap' : 'Open Full Interactive Map'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0f2218] hover:border-emerald-400/50 transition-all duration-500 flex flex-col justify-between hover:scale-[1.015]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2218] via-transparent to-black/30" />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-300">
                    {dest.elevation}
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                      {dest.categoryLabel}
                    </span>
                    <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors mt-1">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-neutral-300 line-clamp-2 mt-1.5 leading-relaxed">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-neutral-400 text-[11px] truncate">{dest.locationName}</span>
                    <Link
                      to="/explore"
                      className="text-emerald-400 font-medium hover:underline inline-flex items-center gap-1 shrink-0"
                    >
                      <span>Peta</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. CONSERVATION FIELD NOTES
      ========================================================================== */}
      <section className="py-24 bg-[#0a1610] border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5" />
                <span>{lang === 'ID' ? 'Jurnal & Riset Konservasi' : 'Research & Field Notes'}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
                Dokumentasi Lapangan <br />
                <span className="text-emerald-400 font-semibold">Ekologi Gunung Ciremai.</span>
              </h2>
            </div>

            <Link
              to="/field-notes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              <span>{lang === 'ID' ? 'Lihat Semua Artikel & Spesies' : 'View All Articles & Species'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-[#0f2218]/50 hover:bg-[#0f2218] border border-white/10 hover:border-emerald-400/40 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between hover:scale-[1.015]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300 font-medium">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span>{article.author}</span>
                  <Link
                    to="/field-notes"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. ZERO-WASTE ETHICS CALL TO ACTION
      ========================================================================== */}
      <section className="py-24 bg-[#060e09] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl bg-gradient-to-r from-emerald-950 via-[#0a2014] to-[#07130c] border border-emerald-500/30 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column (7 cols): Heading & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Gerakan Nol Sampah Pegunungan</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                  Bawa Pulang Sampahmu, <br />
                  <span className="text-emerald-400 font-semibold">
                    Abadikan Jejak Tanpa Kerusakan.
                  </span>
                </h2>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {lang === 'ID'
                    ? 'Gunakan kalkulator audit sampah mandiri kami sebelum mendaki. Cek daftar logistik terlarang (tisu basah, botol sekali pakai) dan verifikasi kantong sampah di pos jaga resmi BTNGC.'
                    : 'Utilize our hiker self-audit waste calculator before ascending. Check restricted items and verify your return waste bag at official BTNGC ranger checkpoints.'}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/zero-waste"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_10px_25px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>{lang === 'ID' ? 'Buka Audit Bebas Sampah' : 'Open Zero-Waste Audit'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 text-neutral-200 hover:text-white hover:border-white/40 text-xs sm:text-sm font-medium transition-all"
                  >
                    <span>{lang === 'ID' ? 'Hubungi Pos Jaga Ranger' : 'Contact Ranger Stations'}</span>
                  </Link>
                </div>
              </div>

              {/* Right Column (5 cols): Authentic Edelweiss Conservation Visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-[#060e09]/80 backdrop-blur-md p-3 group">
                  <div className="relative h-60 sm:h-68 rounded-xl overflow-hidden">
                    <img
                      src="/images/edelwis.jpg"
                      alt="Bunga Abadi Edelweis Ciremai (Anaphalis javanica)"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-emerald-300">
                      <Leaf className="w-3 h-3 text-emerald-400" />
                      <span>Anaphalis javanica &bull; 3.000 mdpl</span>
                    </div>

                    <div className="absolute bottom-3 inset-x-3 text-left">
                      <p className="text-xs font-semibold text-white">
                        {lang === 'ID' ? 'Kemurnian yang Wajib Kita Jaga' : 'Pristine Heritage We Protect'}
                      </p>
                      <p className="text-[11px] text-neutral-300 line-clamp-2 mt-0.5 leading-relaxed">
                        {lang === 'ID'
                          ? 'Setiap sampah anorganik yang ditinggalkan membutuhkan ratusan tahun untuk terurai di ekosistem sub-alpin Ciremai.'
                          : 'Every piece of discarded waste takes centuries to decompose in Ciremai alpine habitat.'}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 px-2 py-1 flex items-center justify-between text-[11px] font-mono text-emerald-300/80">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{lang === 'ID' ? 'Kawasan Bebas Sampah' : 'Zero-Waste Sanctuary'}</span>
                    </span>
                    <span className="text-neutral-400 font-sans text-[10px]">{lang === 'ID' ? 'BTNGC Resmi' : 'Official BTNGC'}</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
