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
  Map as MapIcon
} from 'lucide-react'
import { DESTINATIONS, Destination } from '../data/destinations'
import InteractiveMap from '../components/InteractiveMap'

export default function Explore() {
  const [searchParams] = useSearchParams()
  const initialId = searchParams.get('id')

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [viewMode, setViewMode] = useState<'split' | 'list'>('split')

  // Set initial selected destination from URL query param if present
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

  // Filtered destinations
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
    <div className="bg-[#F5F2E9] min-h-screen text-[#292D29]">
      {/* Editorial Header */}
      <div className="border-b border-[#DCDDD2] bg-[#FAF8F4] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-editorial-sans text-[#74604D]">
            <Link to="/" className="hover:text-[#203D32]">Beranda</Link>
            <span>/</span>
            <span className="text-[#203D32] font-semibold">Eksplorasi Kawasan &amp; Peta</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
                Interactive Field Map
              </span>
              <h1 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#203D32] leading-tight">
                Peta &amp; Panduan Kawasan Gunung Ciremai
              </h1>
              <p className="text-sm sm:text-base text-[#74604D] font-editorial-sans leading-relaxed">
                Jelajahi titik registrasi resmi jalur pendakian, kawasan resapan air terjun alami, dan zona konservasi flora-fauna di lereng Kuningan.
              </p>
            </div>

            {/* Mobile View Toggle */}
            <div className="flex items-center gap-2 bg-[#EDE8DC] p-1 border border-[#DCDDD2] self-start lg:self-end">
              <button
                type="button"
                onClick={() => setViewMode('split')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  viewMode === 'split'
                    ? 'bg-[#203D32] text-[#F5F2E9]'
                    : 'text-[#203D32] hover:bg-[#FAF8F4]'
                }`}
              >
                <MapIcon className="w-3.5 h-3.5" />
                <span>Peta &amp; Detail</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  viewMode === 'list'
                    ? 'bg-[#203D32] text-[#F5F2E9]'
                    : 'text-[#203D32] hover:bg-[#FAF8F4]'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>Daftar Lengkap</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="border-b border-[#DCDDD2] bg-[#F5F2E9] sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#74604D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari jalur, air terjun, atau nama desa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#FAF8F4] border border-[#DCDDD2] text-sm text-[#292D29] placeholder-[#74604D]/60 focus:outline-none focus:border-[#203D32] focus:ring-1 focus:ring-[#203D32]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#74604D] hover:text-[#203D32]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs">
              {[
                { id: 'all', label: 'Semua Kawasan' },
                { id: 'trail', label: 'Jalur Pendakian' },
                { id: 'conservation', label: 'Konservasi & Edukasi' },
                { id: 'waterfall', label: 'Air Terjun' },
                { id: 'lake', label: 'Danau Resapan' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 border whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-[#203D32] text-[#F5F2E9] border-[#203D32] font-semibold'
                      : 'bg-[#FAF8F4] text-[#292D29] border-[#DCDDD2] hover:bg-[#EDE8DC]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* If no match */}
        {filteredDestinations.length === 0 && (
          <div className="p-12 text-center border border-[#DCDDD2] bg-[#FAF8F4] my-8 space-y-3">
            <AlertTriangle className="w-8 h-8 text-[#B77D58] mx-auto" />
            <h3 className="font-editorial-serif text-xl text-[#203D32]">
              Tidak Ada Kawasan yang Cocok
            </h3>
            <p className="text-sm text-[#74604D] max-w-md mx-auto">
              Tidak ditemukan lokasi untuk pencarian &ldquo;{searchQuery}&rdquo;. Coba gunakan kata kunci umum seperti &ldquo;Palutungan&rdquo;, &ldquo;Linggajati&rdquo;, atau reset kategori.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
              className="px-4 py-2 bg-[#203D32] text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider mt-2"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* View Mode: Split Map & Detail Panel */}
        {filteredDestinations.length > 0 && viewMode === 'split' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Map & Location Selector (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Interactive Map */}
              <div className="h-[460px] lg:h-[560px]">
                <InteractiveMap
                  destinations={filteredDestinations}
                  selectedDestination={selectedDestination}
                  onSelectDestination={(dest) => setSelectedDestination(dest)}
                />
              </div>

              {/* Quick Destination Strip under map */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {filteredDestinations.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setSelectedDestination(dest)}
                    className={`text-left p-3.5 border transition-all ${
                      selectedDestination?.id === dest.id
                        ? 'border-[#203D32] bg-[#EDE8DC] shadow-xs'
                        : 'border-[#DCDDD2] bg-[#FAF8F4] hover:bg-[#EDE8DC]/50'
                    }`}
                  >
                    <div className="flex justify-between items-start text-[11px] text-[#74604D] font-mono">
                      <span>{dest.categoryLabel}</span>
                      <span>{dest.elevation}</span>
                    </div>
                    <div className="font-editorial-serif font-semibold text-[#203D32] text-base mt-1">
                      {dest.name}
                    </div>
                    <div className="text-xs text-[#71816A] flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-[#B77D58]" />
                      <span>{dest.locationName}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Selected Location Detail Panel (5 cols) */}
            <div className="lg:col-span-5">
              {selectedDestination ? (
                <div className="border border-[#DCDDD2] bg-[#FAF8F4] p-6 space-y-6">
                  {/* Photo with credit */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#203D32]/10 border border-[#DCDDD2]">
                    <img
                      src={selectedDestination.imageUrl}
                      alt={selectedDestination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#203D32] text-[#F5F2E9] px-2 py-0.5 text-[10px] uppercase font-semibold">
                      {selectedDestination.categoryLabel}
                    </div>
                  </div>
                  <p className="text-[10px] text-[#74604D] font-mono italic -mt-4">
                    {selectedDestination.imageCaption} &bull; Sumber: {selectedDestination.imageCredit}
                  </p>

                  {/* Header info */}
                  <div className="space-y-1.5 pb-4 border-b border-[#DCDDD2]">
                    <div className="flex items-center justify-between text-xs text-[#74604D] font-mono">
                      <span>{selectedDestination.elevation}</span>
                      <span>{selectedDestination.coordinates[0].toFixed(4)}&deg;, {selectedDestination.coordinates[1].toFixed(4)}&deg;</span>
                    </div>
                    <h2 className="font-editorial-serif text-2xl text-[#203D32]">
                      {selectedDestination.name}
                    </h2>
                    <p className="text-xs text-[#71816A] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#B77D58]" />
                      <span>{selectedDestination.locationName}, {selectedDestination.district}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <h3 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#74604D]">
                      Karakter Ekologis
                    </h3>
                    <p className="text-xs font-semibold text-[#203D32]">{selectedDestination.ecosystemType}</p>
                    <p className="text-sm text-[#292D29]/85 font-editorial-sans leading-relaxed">
                      {selectedDestination.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#74604D]">
                      Karakteristik Kunci
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#292D29]/85">
                      {selectedDestination.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#71816A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visitor Guidelines / Leave No Trace */}
                  <div className="p-4 bg-[#EDE8DC] border border-[#DCDDD2] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#203D32]">
                      <AlertTriangle className="w-4 h-4 text-[#B77D58]" />
                      <span>Ketentuan Kunjungan &amp; Konservasi</span>
                    </div>
                    <ul className="space-y-1 text-xs text-[#74604D]">
                      {selectedDestination.visitorGuidelines.map((guide, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span>&bull;</span>
                          <span>{guide}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link to Zero Waste Checklist */}
                  <div className="pt-2">
                    <Link
                      to="/zero-waste"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-[#203D32] hover:bg-[#172D25] text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>Siapkan Logistik Nol Sampah</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B77D58]" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="p-12 border border-[#DCDDD2] bg-[#FAF8F4] text-center text-sm text-[#74604D]">
                  Pilih salah satu lokasi pada peta atau daftar di bawah untuk melihat rincian ekologis.
                </div>
              )}
            </div>
          </div>
        )}

        {/* View Mode: Full List View (Editorial Cards) */}
        {filteredDestinations.length > 0 && viewMode === 'list' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <article
                key={dest.id}
                className="border border-[#DCDDD2] bg-[#FAF8F4] flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#203D32]/10 border-b border-[#DCDDD2]">
                    <img
                      src={dest.imageUrl}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-[#203D32] text-[#F5F2E9] px-2.5 py-1 text-[10px] uppercase font-semibold">
                      {dest.categoryLabel}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#74604D] font-mono">
                      <span>{dest.elevation}</span>
                      <span>{dest.district}</span>
                    </div>

                    <h3 className="font-editorial-serif text-2xl text-[#203D32]">
                      {dest.name}
                    </h3>

                    <p className="text-xs text-[#71816A]">
                      {dest.locationName}
                    </p>

                    <p className="text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed line-clamp-3">
                      {dest.description}
                    </p>

                    <div className="pt-2 border-t border-[#DCDDD2]/60 space-y-1">
                      <span className="text-[11px] font-semibold text-[#74604D] block uppercase tracking-wider">
                        Ketentuan Kunci:
                      </span>
                      <p className="text-xs text-[#74604D] italic">
                        {dest.visitorGuidelines[0]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDestination(dest)
                      setViewMode('split')
                      window.scrollTo({ top: 300, behavior: 'smooth' })
                    }}
                    className="w-full py-2.5 border border-[#203D32] text-[#203D32] hover:bg-[#203D32] hover:text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Fokuskan ke Peta Interaktif</span>
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
