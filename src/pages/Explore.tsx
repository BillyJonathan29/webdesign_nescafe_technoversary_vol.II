import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Search,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  X,
  List,
  Map as MapIcon,
  Mountain
} from 'lucide-react'
import { DESTINATIONS, Destination } from '../data/destinations'
import InteractiveMap from '../components/InteractiveMap'
import { useLanguage } from '../context/LanguageContext'

export default function Explore() {
  const [searchParams] = useSearchParams()
  const initialId = searchParams.get('id')
  const { lang } = useLanguage()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [viewMode, setViewMode] = useState<'split' | 'list'>('split')

  useEffect(() => {
    if (initialId) {
      const match = DESTINATIONS.find((d) => d.id === initialId)
      if (match) {
        setSelectedDestination(match)
      }
    } else if (!selectedDestination && DESTINATIONS.length > 0) {
      setSelectedDestination(DESTINATIONS[0])
    }
  }, [initialId])

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.locationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === 'all' || item.type === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="bg-[#060e09] min-h-screen text-white pt-24 pb-20 font-['Mori',sans-serif]">
      {/* 1. Header Banner */}
      <div className="border-b border-white/[0.08] bg-[#0a1610] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <Link to="/" className="hover:text-emerald-300">
              {lang === 'ID' ? 'Beranda' : 'Home'}
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white font-medium">
              {lang === 'ID' ? 'Eksplorasi & Peta Kawasan' : 'Zonation & Map Explorer'}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-1.5">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-400">
                Peta Lapangan Interaktif
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                Peta &amp; Panduan Kawasan Gunung Ciremai
              </h1>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                {lang === 'ID'
                  ? 'Jelajahi titik registrasi resmi jalur pendakian, kawasan resapan air terjun alami, dan zona konservasi flora-fauna di lereng Kuningan.'
                  : 'Explore official trailheads, natural waterfall catchments, and biodiversity habitats around Mount Ciremai, Kuningan.'}
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1.5 bg-white/[0.04] p-1.5 border border-white/10 rounded-full self-start lg:self-end">
              <button
                type="button"
                onClick={() => setViewMode('split')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'split'
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <MapIcon className="w-3.5 h-3.5" />
                <span>{lang === 'ID' ? 'Peta & Detail' : 'Map & Details'}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>{lang === 'ID' ? 'Daftar Lengkap' : 'List View'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Filter & Search Bar */}
      <div className="border-b border-white/[0.08] bg-[#060e09]/95 backdrop-blur-md sticky top-20 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={lang === 'ID' ? 'Cari jalur, air terjun, atau nama desa...' : 'Search trails, waterfalls, or villages...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 text-xs no-scrollbar">
              {[
                { id: 'all', label: lang === 'ID' ? 'Semua Kawasan' : 'All Areas' },
                { id: 'trail', label: lang === 'ID' ? 'Jalur Pendakian' : 'Hiking Trails' },
                { id: 'conservation', label: lang === 'ID' ? 'Konservasi & Edukasi' : 'Conservation' },
                { id: 'waterfall', label: lang === 'ID' ? 'Air Terjun' : 'Waterfalls' },
                { id: 'lake', label: lang === 'ID' ? 'Danau Resapan' : 'Catchment Lakes' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all border cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 shadow-sm'
                      : 'bg-white/[0.03] text-neutral-300 border-white/10 hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-2xl space-y-3">
            <Mountain className="w-10 h-10 text-neutral-500 mx-auto" />
            <h3 className="text-lg font-semibold text-white">Tidak ada kawasan ditemukan</h3>
            <p className="text-xs text-neutral-400">Silakan ubah kata kunci pencarian atau filter kategori.</p>
          </div>
        ) : viewMode === 'split' ? (
          /* Split View: Left (Map + 2-col Destination Cards) | Right (Selected Inspection Card) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* === LEFT COLUMN: MAP + 2-COLUMN CARDS UNDERNEATH (7 cols) === */}
            <div className="lg:col-span-7 space-y-5">
              {/* Map Frame */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#0a1610]">
                <InteractiveMap
                  destinations={filteredDestinations}
                  selectedDestination={selectedDestination}
                  onSelectDestination={setSelectedDestination}
                />
              </div>

              {/* Quick Destination Cards Grid (2 Columns directly below map, exactly like Gambar Kedua) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {filteredDestinations.map((dest) => {
                  const isSelected = selectedDestination?.id === dest.id
                  return (
                    <div
                      key={dest.id}
                      onClick={() => {
                        setSelectedDestination(dest)
                      }}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-emerald-500/15 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]'
                          : 'bg-[#0c1a13] border-white/[0.08] hover:border-white/20 hover:bg-[#0f2218]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                        <span className="text-emerald-400 font-semibold">{dest.categoryLabel}</span>
                        <span className="text-neutral-400">{dest.elevation}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white tracking-tight mb-1">
                        {dest.name}
                      </h4>
                      <p className="text-xs text-neutral-400 flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{dest.locationName}</span>
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* === RIGHT COLUMN: DETAILED INSPECTION CARD (5 cols, exactly like Gambar Kedua) === */}
            <div className="lg:col-span-5">
              {selectedDestination ? (
                <div className="bg-[#0c1a13] border border-white/[0.08] rounded-2xl p-6 space-y-5 shadow-2xl">
                  {/* Photo Banner with credit */}
                  <div className="space-y-2">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.08] bg-black/40">
                      <img
                        src={selectedDestination.imageUrl}
                        alt={selectedDestination.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md text-emerald-300 border border-white/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded">
                        {selectedDestination.categoryLabel}
                      </div>
                    </div>
                    <p className="text-[10px] text-neutral-400 font-mono italic">
                      {selectedDestination.imageCaption} &bull; Sumber: {selectedDestination.imageCredit}
                    </p>
                  </div>

                  {/* Header datum: Elevation & Coordinates */}
                  <div className="space-y-1.5 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                      <span>{selectedDestination.elevation}</span>
                      <span>{selectedDestination.coordinates[0].toFixed(4)}&deg;, {selectedDestination.coordinates[1].toFixed(4)}&deg;</span>
                    </div>
                    <h2 className="text-2xl font-normal text-white tracking-tight">
                      {selectedDestination.name}
                    </h2>
                    <p className="text-xs text-neutral-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{selectedDestination.locationName}, {selectedDestination.district}</span>
                    </p>
                  </div>

                  {/* Karakter Ekologis */}
                  <div className="space-y-1.5">
                    <h3 className="text-[11px] font-mono uppercase tracking-[0.15em] font-semibold text-emerald-400">
                      {lang === 'ID' ? 'Karakter Ekologis' : 'Ecological Character'}
                    </h3>
                    <p className="text-xs font-semibold text-white">{selectedDestination.ecosystemType}</p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {selectedDestination.description}
                    </p>
                  </div>

                  {/* Karakteristik Kunci */}
                  <div className="space-y-2 pt-1">
                    <h3 className="text-[11px] font-mono uppercase tracking-[0.15em] font-semibold text-emerald-400">
                      {lang === 'ID' ? 'Karakteristik Kunci' : 'Key Highlights'}
                    </h3>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {selectedDestination.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ketentuan Kunjungan & Konservasi */}
                  <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{lang === 'ID' ? 'Ketentuan Kunjungan & Konservasi' : 'Visitation & Conservation Rules'}</span>
                    </div>
                    <ul className="space-y-1 text-xs text-neutral-300">
                      {selectedDestination.visitorGuidelines.map((guide, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400">&bull;</span>
                          <span>{guide}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link to Zero Waste Checklist */}
                  <div className="pt-2">
                    <Link
                      to="/zero-waste"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <span>{lang === 'ID' ? 'Siapkan Logistik Nol Sampah' : 'Prepare Zero-Waste Logistics'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="p-12 border border-white/[0.08] bg-[#0c1a13] rounded-2xl text-center text-xs text-neutral-400">
                  {lang === 'ID'
                    ? 'Pilih salah satu lokasi pada peta atau daftar di sebelah kiri untuk melihat rincian ekologis.'
                    : 'Select a location on the map or list on the left to inspect ecological details.'}
                </div>
              )}
            </div>

          </div>
        ) : (
          /* View Mode: Full List View (Clean Editorial Grid) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest) => (
              <article
                key={dest.id}
                className="bg-[#0c1a13] border border-white/[0.08] hover:border-emerald-400/50 rounded-2xl flex flex-col justify-between overflow-hidden transition-all group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/[0.08]">
                    <img
                      src={dest.imageUrl}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-emerald-300 border border-white/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded">
                      {dest.categoryLabel}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                      <span>{dest.elevation}</span>
                      <span>{dest.district}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {dest.name}
                    </h3>

                    <p className="text-xs text-emerald-400/80">
                      {dest.locationName}
                    </p>

                    <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
                      {dest.description}
                    </p>

                    <div className="pt-2 border-t border-white/[0.08] space-y-1">
                      <span className="text-[10px] font-semibold text-neutral-400 block uppercase tracking-wider">
                        {lang === 'ID' ? 'Ketentuan Kunci:' : 'Key Guidelines:'}
                      </span>
                      <p className="text-xs text-neutral-400 italic">
                        {dest.visitorGuidelines[0]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDestination(dest)
                      setViewMode('split')
                      window.scrollTo({ top: 250, behavior: 'smooth' })
                    }}
                    className="w-full py-2.5 rounded-xl border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{lang === 'ID' ? 'Fokuskan ke Peta Interaktif' : 'Focus on Interactive Map'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
