import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckSquare,
  Square,
  RotateCcw,
  AlertTriangle
} from 'lucide-react'
import { CHECKLIST_ITEMS, TRANSPORT_EMISSIONS } from '../data/zeroWasteChecklist'
import { useLanguage } from '../context/LanguageContext'

const STORAGE_KEY = 'ciremaigreen_zerowaste_checked'

export default function ZeroWaste() {
  const { lang } = useLanguage()

  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [activePhase, setActivePhase] = useState<'all' | 'preparation' | 'packing' | 'on-trail' | 'post-trip'>('all')

  // Transport calculator states
  const [selectedTransport, setSelectedTransport] = useState(TRANSPORT_EMISSIONS[0].mode)
  const [travelDistance, setTravelDistance] = useState(120) // in km
  const [passengerCount, setPassengerCount] = useState(2)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds))
    } catch (e) {
      console.warn('LocalStorage not available', e)
    }
  }, [checkedIds])

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleReset = () => {
    if (window.confirm('Reset seluruh checklist kesiapan nol sampah Anda?')) {
      setCheckedIds([])
    }
  }

  const handleCheckAll = () => {
    setCheckedIds(CHECKLIST_ITEMS.map((item) => item.id))
  }

  const totalItems = CHECKLIST_ITEMS.length
  const completedCount = checkedIds.length
  const progressPercent = Math.round((completedCount / totalItems) * 100)

  const filteredItems = useMemo(() => {
    if (activePhase === 'all') return CHECKLIST_ITEMS
    return CHECKLIST_ITEMS.filter((item) => item.phase === activePhase)
  }, [activePhase])

  // Carbon calculation
  const currentTransport = TRANSPORT_EMISSIONS.find((t) => t.mode === selectedTransport) || TRANSPORT_EMISSIONS[0]
  const totalEmissionsKg = Math.round(
    ((travelDistance * currentTransport.factorKgCo2PerKm) / (passengerCount || 1)) * 10
  ) / 10

  return (
    <div className="bg-[#060e09] min-h-screen text-white pt-24 pb-20 font-['Mori',sans-serif]">
      {/* Header Banner */}
      <div className="border-b border-white/10 bg-[#0a1610] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <Link to="/" className="hover:text-emerald-300">
              {lang === 'ID' ? 'Beranda' : 'Home'}
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white font-medium">
              {lang === 'ID' ? 'Etika Rimba & Nol Sampah' : 'Zero-Waste Mountain Ethics'}
            </span>
          </div>

          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-400">
              Leave No Trace &middot; BTNGC Zero-Waste Protocol
            </span>
            <h1 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Panduan Mandiri Pendakian Bebas Sampah
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Audit logistik pendakian Anda sebelum naik ke 3.078 mdpl. Cegah pencemaran mikroplastik, lindungi satwa dari ketergantungan makanan manusia, dan hitung estimasi jejak karbon perjalanan.
            </p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* SECTION 1: INTERACTIVE CHECKLIST */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Progress & Rules Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            <div className="bg-[#0f2218] border border-white/10 rounded-3xl p-6 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                  Kesiapan Logistik
                </span>
                <span className="text-lg font-bold text-white font-mono">
                  {progressPercent}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-lime-400 transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <p className="text-xs text-neutral-300">
                {completedCount} dari {totalItems} butir protokol zero-waste telah diverifikasi.
              </p>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCheckAll}
                  className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-neutral-200 transition-all"
                >
                  Centang Semua
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="py-2 px-3 rounded-xl bg-white/5 hover:bg-rose-500/20 border border-white/10 text-xs text-rose-300 transition-all flex items-center gap-1"
                  title="Reset"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Strict Prohibition Card */}
            <div className="bg-rose-950/30 border border-rose-500/30 rounded-3xl p-6 space-y-3">
              <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Dilarang Keras di TNGC:
              </h4>
              <ul className="space-y-2 text-xs text-neutral-200">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Tisu Basah</strong> (mengandung serat sintetis plastik yang tidak terurai puluhan tahun).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Botol Plastik Sekali Pakai</strong> (wajib ganti botol tumbler / jeriken lipat).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Membuang Sisa Makanan Sembarangan</strong> (suhu dingin memperlambat dekomposisi hingga berbulan-bulan).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Checklist Items (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Filter Phase Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs no-scrollbar">
              {[
                { id: 'all', label: 'Semua Protokol' },
                { id: 'preparation', label: 'Persiapan Sebelum Berangkat' },
                { id: 'packing', label: 'Packing Logistik' },
                { id: 'on-trail', label: 'Di Jalur & Puncak' },
                { id: 'post-trip', label: 'Pasca Turun' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePhase(p.id as typeof activePhase)}
                  className={`px-3.5 py-2 rounded-full border transition-all whitespace-nowrap ${
                    activePhase === p.id
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50 font-semibold'
                      : 'bg-white/[0.03] text-neutral-300 border-white/10 hover:border-white/20'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Checklist Loop */}
            <div className="space-y-3">
              {filteredItems.map((item) => {
                const isChecked = checkedIds.includes(item.id)
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                      isChecked
                        ? 'bg-emerald-950/20 border-emerald-500/30 text-neutral-200'
                        : 'bg-[#0f2218] border-white/10 hover:border-white/25 text-white'
                    }`}
                  >
                    <button
                      type="button"
                      className="mt-0.5 text-emerald-400 focus:outline-none shrink-0"
                      aria-label={isChecked ? 'Uncheck' : 'Check'}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-neutral-500" />
                      )}
                    </button>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className={`text-sm font-semibold tracking-tight ${isChecked ? 'line-through text-neutral-400' : 'text-white'}`}>
                          {item.title}
                        </h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {item.weightImpact}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-[11px] text-emerald-400/90 italic pt-1">
                        Dampak Ekologis: {item.whyItMatters}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        {/* SECTION 2: TRANSPORT CARBON EMISSION CALCULATOR */}
        <div className="bg-[#0f2218] border border-white/10 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
              Kalkulator Jejak Karbon
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Hitung Emisi Transportasi Perjalanan Anda ke Ciremai
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              Ketahui estimasi emisi CO₂ perjalanan Anda dari kota asal ke pos pendakian di Kuningan / Majalengka dan kompensasikan dengan aksi penghijauan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300 block">
                Moda Transportasi:
              </label>
              <select
                value={selectedTransport}
                onChange={(e) => setSelectedTransport(e.target.value)}
                className="w-full bg-[#0a1610] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400"
              >
                {TRANSPORT_EMISSIONS.map((t) => (
                  <option key={t.mode} value={t.mode} className="bg-[#0a1610] text-white">
                    {t.name} ({t.factorKgCo2PerKm} kg CO₂/km)
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300 block">
                Jarak Tempuh PP (km):
              </label>
              <input
                type="number"
                min="10"
                max="1000"
                value={travelDistance}
                onChange={(e) => setTravelDistance(Number(e.target.value))}
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-neutral-300 block">
                Jumlah Penumpang:
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={passengerCount}
                onChange={(e) => setPassengerCount(Number(e.target.value))}
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>

          <div className="mt-6 p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-neutral-400 block">Estimasi Emisi Karbon Per Orang:</span>
              <div className="text-3xl font-bold text-white font-mono mt-0.5">
                {totalEmissionsKg} <span className="text-emerald-400 text-sm font-normal">kg CO₂e</span>
              </div>
            </div>

            <div className="text-xs text-neutral-300 max-w-md">
              Dapat dikompensasikan dengan menanam <strong>1 bibit pohon Saninten/Jamuju</strong> di kawasan rehabilitasi bersama komunitas penyangga TNGC.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
