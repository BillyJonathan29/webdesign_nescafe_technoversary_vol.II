import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckSquare,
  Square,
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  Info
} from 'lucide-react'
import { CHECKLIST_ITEMS, TRANSPORT_EMISSIONS } from '../data/zeroWasteChecklist'

const STORAGE_KEY = 'ciremaigreen_zerowaste_checked'

export default function ZeroWaste() {
  // Checked items stored in LocalStorage
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Selected phase filter
  const [activePhase, setActivePhase] = useState<'all' | 'preparation' | 'packing' | 'on-trail' | 'post-trip'>('all')

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds))
    } catch (e) {
      console.warn('LocalStorage not available', e)
    }
  }, [checkedIds])

  // Toggle item
  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Reset checklist
  const handleReset = () => {
    if (window.confirm('Reset seluruh checklist kesiapan nol sampah Anda?')) {
      setCheckedIds([])
    }
  }

  // Check all items
  const handleCheckAll = () => {
    setCheckedIds(CHECKLIST_ITEMS.map((item) => item.id))
  }

  // Calculations
  const totalItems = CHECKLIST_ITEMS.length
  const completedCount = checkedIds.length
  const progressPercent = Math.round((completedCount / totalItems) * 100)

  // Readiness Status Level
  const readinessStatus = useMemo(() => {
    if (progressPercent === 100) {
      return {
        label: 'Siap Ekspedisi Nol Sampah Paripurna',
        desc: 'Seluruh perlengkapan dan disiplin Leave No Trace telah terpenuhi. Anda siap menjaga kemurnian Ciremai.',
        color: 'text-[#203D32]',
        bg: 'bg-[#EDE8DC]',
      }
    }
    if (progressPercent >= 70) {
      return {
        label: 'Kesiapan Baik: Periksa Beberapa Poin Kunci',
        desc: 'Mayoritas persiapan penting sudah siap. Perhatikan sisa item bernilai kritis sebelum berangkat.',
        color: 'text-[#71816A]',
        bg: 'bg-[#FAF8F4]',
      }
    }
    if (progressPercent >= 40) {
      return {
        label: 'Kesiapan Menengah: Perlu Penyesuaian Logistik',
        desc: 'Masih ada potensi kemasan sachet atau plastik sekali pakai yang berisiko tercecer di gunung.',
        color: 'text-[#B77D58]',
        bg: 'bg-[#FAF8F4]',
      }
    }
    return {
      label: 'Tahap Awal Persiapan',
      desc: 'Mulai dengan merepacking logistik makanan dari kardus sachet ke wadah pakai ulang.',
      color: 'text-[#74604D]',
      bg: 'bg-[#FAF8F4]',
    }
  }, [progressPercent])

  // Missing critical recommendations
  const missingCriticalItems = useMemo(() => {
    return CHECKLIST_ITEMS.filter(
      (item) => !checkedIds.includes(item.id) && item.weightImpact === 'Kritis'
    )
  }, [checkedIds])

  // Filtered Checklist items
  const filteredItems = useMemo(() => {
    if (activePhase === 'all') return CHECKLIST_ITEMS
    return CHECKLIST_ITEMS.filter((item) => item.phase === activePhase)
  }, [activePhase])

  // Carbon Calculator State
  const [distanceKm, setDistanceKm] = useState<number>(220) // default Jakarta/Bandung to Kuningan avg
  const [hikerCount, setHikerCount] = useState<number>(2)
  const [selectedTransport, setSelectedTransport] = useState<string>('kereta')

  const currentFactor = useMemo(() => {
    return TRANSPORT_EMISSIONS.find((t) => t.mode === selectedTransport) || TRANSPORT_EMISSIONS[0]
  }, [selectedTransport])

  // Total Round Trip Emission (kg CO2e)
  const calculatedEmission = useMemo(() => {
    const roundTripKm = distanceKm * 2
    const totalKg = roundTripKm * currentFactor.factorKgCo2PerKm * hikerCount
    return Math.round(totalKg * 10) / 10
  }, [distanceKm, currentFactor, hikerCount])

  return (
    <div className="bg-[#F5F2E9] min-h-screen text-[#292D29]">
      {/* Header */}
      <div className="border-b border-[#DCDDD2] bg-[#FAF8F4] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-editorial-sans text-[#74604D]">
            <Link to="/" className="hover:text-[#203D32]">Beranda</Link>
            <span>/</span>
            <span className="text-[#203D32] font-semibold">Zero-Waste Hiking Guide</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
              Interactive Readiness Tool
            </span>
            <h1 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#203D32] leading-tight">
              Panduan Praktis Ekspedisi Minim Sampah
            </h1>
            <p className="text-sm sm:text-base text-[#74604D] font-editorial-sans leading-relaxed">
              Checklist interaktif berbasis prinsip <em>Leave No Trace (LNT)</em> untuk merancang logistik pendakian yang tidak meninggalkan residu sampah di ketinggian Gunung Ciremai.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* READINESS SUMMARY CARD */}
        <div className="border border-[#DCDDD2] bg-[#FAF8F4] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#DCDDD2]">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#74604D]">
                Indikator Kesiapan Anda
              </span>
              <h2 className="font-editorial-serif text-2xl sm:text-3xl text-[#203D32]">
                {readinessStatus.label}
              </h2>
              <p className="text-sm text-[#74604D] max-w-xl">
                {readinessStatus.desc}
              </p>
            </div>

            {/* Score Badge */}
            <div className="flex items-center gap-4 bg-[#EDE8DC] p-4 border border-[#DCDDD2] shrink-0 self-start md:self-auto">
              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-editorial-serif font-bold text-[#203D32]">
                  {progressPercent}%
                </span>
                <span className="block text-[11px] text-[#74604D] font-mono">
                  {completedCount} dari {totalItems} Poin
                </span>
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-[#203D32] flex items-center justify-center font-editorial-serif font-bold text-xs text-[#203D32] bg-[#F5F2E9]">
                {completedCount}/{totalItems}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full h-3 bg-[#EDE8DC] border border-[#DCDDD2] overflow-hidden">
              <div
                className="h-full bg-[#203D32] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-xs text-[#74604D] font-mono">
              <span>0% Belum Siap</span>
              <span>Target: 100% Bebas Sampah Plastik Sekali Pakai</span>
              <span>100% Paripurna</span>
            </div>
          </div>

          {/* Unchecked Critical Warnings */}
          {missingCriticalItems.length > 0 && (
            <div className="p-4 bg-amber-50/60 border border-amber-300/60 text-xs text-amber-900 space-y-1.5">
              <div className="flex items-center gap-2 font-semibold">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Perhatian: Masih ada {missingCriticalItems.length} poin berbobot kritis yang belum Anda penuhi:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 pl-1 text-[#74604D]">
                {missingCriticalItems.map((item) => (
                  <li key={item.id}>
                    <strong>{item.title}</strong>: {item.whyItMatters}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions: Reset and Check All */}
          <div className="flex items-center justify-between pt-2 text-xs">
            <button
              type="button"
              onClick={handleCheckAll}
              className="text-[#203D32] hover:text-[#B77D58] font-semibold underline underline-offset-2"
            >
              Centang Semua Item
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 text-[#74604D] hover:text-rose-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Checklist</span>
            </button>
          </div>
        </div>

        {/* PHASE FILTER PILLS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#DCDDD2] text-xs">
          <span className="font-semibold text-[#74604D] uppercase tracking-wider mr-2 text-[11px]">
            Tahapan:
          </span>
          {[
            { id: 'all', label: 'Semua Tahapan' },
            { id: 'preparation', label: 'Fase 1: Persiapan Rumah' },
            { id: 'packing', label: 'Fase 2: Di Ransel' },
            { id: 'on-trail', label: 'Fase 3: Di Jalur' },
            { id: 'post-trip', label: 'Fase 4: Pasca Trip' },
          ].map((phase) => (
            <button
              key={phase.id}
              type="button"
              onClick={() => setActivePhase(phase.id as any)}
              className={`px-3 py-1.5 border whitespace-nowrap transition-colors ${
                activePhase === phase.id
                  ? 'bg-[#203D32] text-[#F5F2E9] border-[#203D32] font-semibold'
                  : 'bg-[#FAF8F4] text-[#74604D] border-[#DCDDD2] hover:bg-[#EDE8DC]'
              }`}
            >
              {phase.label}
            </button>
          ))}
        </div>

        {/* CHECKLIST ITEMS LIST */}
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const isChecked = checkedIds.includes(item.id)
            return (
              <div
                key={item.id}
                role="checkbox"
                aria-checked={isChecked}
                tabIndex={0}
                onClick={() => toggleItem(item.id)}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault()
                    toggleItem(item.id)
                  }
                }}
                className={`p-5 sm:p-6 border transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#203D32] ${
                  isChecked
                    ? 'bg-[#EDE8DC]/60 border-[#203D32]/40 opacity-90'
                    : 'bg-[#FAF8F4] border-[#DCDDD2] hover:border-[#71816A]'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Visual Checkbox Indicator */}
                  <span
                    className="mt-0.5 shrink-0 text-[#203D32] select-none"
                    aria-hidden="true"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-[#203D32]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#74604D]" />
                    )}
                  </span>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-[#74604D] uppercase tracking-wider">
                        {item.phaseLabel} &bull; {item.category}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-bold px-2 py-0.5 tracking-wider ${
                          item.weightImpact === 'Kritis'
                            ? 'bg-rose-100 text-rose-900 border border-rose-300'
                            : 'bg-[#EDE8DC] text-[#203D32] border border-[#DCDDD2]'
                        }`}
                      >
                        Bobot: {item.weightImpact}
                      </span>
                    </div>

                    <h3
                      className={`font-editorial-serif text-xl ${
                        isChecked ? 'line-through text-[#74604D]' : 'text-[#203D32]'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 text-xs text-[#71816A] border-t border-[#DCDDD2]/60 flex items-start gap-1.5">
                      <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#B77D58]" />
                      <span><strong>Mengapa ini krusial:</strong> {item.whyItMatters}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CARBON CALCULATOR SECTION: Transparent, Documented Methodology */}
        <section className="pt-10 border-t border-[#DCDDD2]">
          <div className="border border-[#DCDDD2] bg-[#FAF8F4] p-6 sm:p-10 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
                Estimasi Emisi Perjalanan &middot; Asumsi Terbuka
              </span>
              <h2 className="font-editorial-serif text-2xl sm:text-3xl text-[#203D32]">
                Kalkulator Jejak Karbon Transportasi
              </h2>
              <p className="text-xs sm:text-sm text-[#74604D] font-editorial-sans leading-relaxed">
                Transportasi menuju basecamp merupakan penyumbang emisi terbesar dalam sebuah perjalanan alam. Hitung estimasi emisi karbon perjalanan Anda berdasarkan data faktor emisi per penumpang-kilometer.
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Distance Slider */}
              <div className="space-y-2 p-4 bg-[#F5F2E9] border border-[#DCDDD2]">
                <div className="flex justify-between items-center text-xs font-semibold text-[#203D32]">
                  <span>Jarak Satu Arah (km)</span>
                  <span className="font-mono">{distanceKm} km</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="600"
                  step="10"
                  value={distanceKm}
                  onChange={(e) => setDistanceKm(Number(e.target.value))}
                  className="w-full accent-[#203D32]"
                />
                <div className="text-[10px] text-[#74604D] flex justify-between font-mono">
                  <span>Cirebon ~35km</span>
                  <span>Bandung ~130km</span>
                  <span>Jakarta ~240km</span>
                </div>
              </div>

              {/* Hiker Count */}
              <div className="space-y-2 p-4 bg-[#F5F2E9] border border-[#DCDDD2]">
                <div className="flex justify-between items-center text-xs font-semibold text-[#203D32]">
                  <span>Jumlah Rombongan</span>
                  <span className="font-mono">{hikerCount} Orang</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={hikerCount}
                  onChange={(e) => setHikerCount(Number(e.target.value))}
                  className="w-full accent-[#203D32]"
                />
                <div className="text-[10px] text-[#74604D] flex justify-between font-mono">
                  <span>1 Pendaki</span>
                  <span>4 Carpool</span>
                  <span>8 Regu</span>
                </div>
              </div>

              {/* Mode Selector */}
              <div className="space-y-2 p-4 bg-[#F5F2E9] border border-[#DCDDD2]">
                <label className="text-xs font-semibold text-[#203D32] block">
                  Moda Transportasi Utama
                </label>
                <select
                  value={selectedTransport}
                  onChange={(e) => setSelectedTransport(e.target.value)}
                  className="w-full p-2 bg-[#FAF8F4] border border-[#DCDDD2] text-xs text-[#292D29] focus:outline-none focus:border-[#203D32]"
                >
                  {TRANSPORT_EMISSIONS.map((t) => (
                    <option key={t.mode} value={t.mode}>
                      {t.name}
                    </option>
                  ))}
                </select>
                <p className="text-[10px] text-[#74604D]">
                  {currentFactor.description}
                </p>
              </div>
            </div>

            {/* Result Box */}
            <div className="p-6 bg-[#203D32] text-[#F5F2E9] border border-[#37463E] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#A3B49D] font-mono">
                  Estimasi Emisi Pulang-Pergi ({distanceKm * 2} km total):
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-editorial-serif text-4xl sm:text-5xl font-bold text-[#FAF8F4]">
                    {calculatedEmission}
                  </span>
                  <span className="text-base text-[#A3B49D] font-mono">kg CO&sub2;e</span>
                </div>
                <p className="text-xs text-[#A3B49D] font-editorial-sans">
                  Faktor Emisi Digunakan: <strong>{currentFactor.factorKgCo2PerKm} kg CO&sub2;e/pkm</strong> (Sumber acuan: Rata-rata IPCC/DEFRA transportasi darat).
                </p>
              </div>

              {/* Methodological honesty callout */}
              <div className="max-w-xs text-xs text-[#A3B49D] border-l border-[#37463E] pl-4 space-y-1">
                <p className="text-[#FAF8F4] font-semibold">Keterbatasan &amp; Asumsi:</p>
                <p className="text-[11px] leading-relaxed">
                  Perhitungan ini adalah perkiraan kasar tanpa memperhitungkan kemacetan rute atau jenis bahan bakar spesifik. Kami tidak menjual klaim &ldquo;beli bibit pohon otomatis impas karbon&rdquo; tanpa program audit terukur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSPARENT DISCLAIMER BANNER */}
        <div className="p-6 bg-[#EDE8DC] border border-[#DCDDD2] text-xs text-[#74604D] leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#203D32]">
            <ShieldCheck className="w-4 h-4 text-[#71816A]" />
            <span>Pernyataan Transparansi &amp; Integritas Informasi:</span>
          </div>
          <p>
            Penilaian kesiapan ini bukan merupakan sertifikasi resmi atau surat izin pendakian (SIMAKSI) dari Balai Taman Nasional Gunung Ciremai (BTNGC). Checklist ini dirancang sebagai panduan edukasi mandiri bagi penggiat alam bebas agar mempersiapkan logistik dengan prinsip minim dampak lingkungan. Pendaftaran pendakian resmi tetap wajib dilakukan melalui kanal resmi booking BTNGC.
          </p>
        </div>
      </div>
    </div>
  )
}
