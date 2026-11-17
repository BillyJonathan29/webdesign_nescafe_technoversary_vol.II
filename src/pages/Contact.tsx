import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  MapPin,
  Send,
  CheckCircle2,
  PhoneCall,
  Clock
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

interface FormData {
  fullName: string
  email: string
  category: string
  subject: string
  message: string
}

const RANGER_STATIONS = [
  {
    name: 'Balai Taman Nasional Gunung Ciremai (Kantor Pusat)',
    location: 'Jl. Raya Cirebon-Kuningan KM 9, No. 1, Kuningan, Jawa Barat',
    tel: '(0232) 873111',
    hours: 'Senin – Jumat: 08.00 – 16.00 WIB',
    focus: 'Administrasi Umum, Riset Ekologi, & Perizinan Simaksi Resmi',
  },
  {
    name: 'Pos Pendakian & Resor Palutungan',
    location: 'Desa Cisantana, Kecamatan Cigugur, Kabupaten Kuningan',
    tel: '+62 812-2200-3078',
    hours: 'Buka 24 Jam (Pelayanan Cek Logistik: 07.00 – 17.00 WIB)',
    focus: 'Pos Pemeriksaan Sampah Jalur Selatan & Briefing Ranger',
  },
  {
    name: 'Pos Pendakian & Resor Linggajati',
    location: 'Desa Linggajati, Kecamatan Cilimus, Kabupaten Kuningan',
    tel: '+62 853-1144-3078',
    hours: 'Pelayanan Registrasi: 07.00 – 16.30 WIB',
    focus: 'Pemeriksaan Jalur Lereng Timur & Verifikasi Kesehatan',
  },
  {
    name: 'Pos Pendakian & Resor Apuy',
    location: 'Desa Argamukti, Kecamatan Argapura, Kabupaten Majalengka',
    tel: '+62 821-3078-4455',
    hours: 'Pelayanan Registrasi: 07.00 – 16.30 WIB',
    focus: 'Pemeriksaan Jalur Lereng Barat & Pengawasan Zona Kawah',
  },
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const initialType = searchParams.get('type')
  const { lang } = useLanguage()

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    category:
      initialType === 'report'
        ? 'laporan-jalur'
        : initialType === 'contribute'
        ? 'usulan-konten'
        : 'pertanyaan-umum',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {}

    if (!formData.fullName.trim()) {
      errs.fullName = 'Nama lengkap wajib diisi.'
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Nama minimal 3 karakter.'
    }

    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Format alamat email tidak valid.'
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subjek pesan tidak boleh kosong.'
    }

    if (!formData.message.trim()) {
      errs.message = 'Isi pesan tidak boleh kosong.'
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Pesan terlalu singkat (minimal 15 karakter).'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  return (
    <div className="bg-[#060e09] min-h-screen text-white pt-24 pb-20 font-['Mori',sans-serif]">
      {/* Header Banner */}
      <div className="border-b border-white/10 bg-[#0a1610] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <Link to="/" className="hover:text-emerald-300">
              {lang === 'ID' ? 'Beranda' : 'Home'}
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white font-medium">
              {lang === 'ID' ? 'Kontak & Pos Jaga Ranger' : 'Contact & Ranger Stations'}
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-400">
              Ranger Network &middot; Pos Jaga Lapangan &middot; Dukungan Komunitas
            </span>
            <h1 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Pusat Informasi &amp; Koordinasi Lapangan
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Hubungi tim edukasi CiremaiGreen, sampaikan laporan kerusakan jalur, atau temukan lokasi dan jam operasional pos pemeriksaan resmi di lingkar Gunung Ciremai.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#0f2218] border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="space-y-2 mb-6">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                Formulir Komunikasi
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Kirim Laporan atau Pertanyaan
              </h2>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">Pesan Anda Berhasil Terkirim!</h3>
                  <p className="text-xs text-neutral-300">
                    Terima kasih atas kontribusi Anda. Tim konservasi CiremaiGreen akan membalas ke email <strong>{formData.email}</strong>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      fullName: '',
                      email: '',
                      category: 'pertanyaan-umum',
                      subject: '',
                      message: '',
                    })
                  }}
                  className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-neutral-300 block">Nama Lengkap *</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="contoh: Rahmat Hidayat"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-400">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-neutral-300 block">Email Aktif *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@email.com"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                    />
                    {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-neutral-300 block">Kategori Pesan *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#0a1610] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="pertanyaan-umum">Pertanyaan Umum Jalur &amp; Simaksi</option>
                    <option value="laporan-jalur">Laporan Kerusakan Jalur / Tumpukan Sampah</option>
                    <option value="usulan-konten">Usulan Materi Edukasi / Riset</option>
                    <option value="relawan">Pendaftaran Relawan Konservasi</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-neutral-300 block">Subjek Pesan *</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="contoh: Pertanyaan Rute Palutungan"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                  />
                  {errors.subject && <p className="text-[11px] text-rose-400">{errors.subject}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-neutral-300 block">Isi Pesan Detail *</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pesan Anda secara jelas..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-emerald-400"
                  />
                  {errors.message && <p className="text-[11px] text-rose-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Pos Jaga Resmi (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                Pos Pemeriksaan Resmi
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Pos Jaga &amp; Resor Konservasi TNGC
              </h2>
            </div>

            <div className="space-y-4">
              {RANGER_STATIONS.map((station) => (
                <div
                  key={station.name}
                  className="bg-[#0f2218] border border-white/10 hover:border-emerald-400/40 rounded-2xl p-5 space-y-2 transition-colors"
                >
                  <h3 className="text-sm font-bold text-white">{station.name}</h3>
                  <div className="flex items-start gap-2 text-xs text-neutral-300">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{station.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] text-neutral-400 pt-1">
                    <span className="flex items-center gap-1.5 text-emerald-300">
                      <PhoneCall className="w-3 h-3 text-emerald-400" />
                      {station.tel}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      {station.hours}
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-400/80 pt-1 border-t border-white/5">
                    Fokus: {station.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
