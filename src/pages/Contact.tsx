import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  RotateCcw
} from 'lucide-react'

interface FormData {
  fullName: string
  email: string
  category: string
  subject: string
  message: string
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const initialType = searchParams.get('type')

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

  // Validation
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
      errs.message = 'Isi pesan terlalu singkat (minimal 15 karakter).'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  // Handle submit simulation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 700)
  }

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      category: 'pertanyaan-umum',
      subject: '',
      message: '',
    })
    setErrors({})
    setIsSubmitted(false)
  }

  return (
    <div className="bg-[#F5F2E9] min-h-screen text-[#292D29]">
      {/* Header */}
      <div className="border-b border-[#DCDDD2] bg-[#FAF8F4] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-editorial-sans text-[#74604D]">
            <Link to="/" className="hover:text-[#203D32]">Beranda</Link>
            <span>/</span>
            <span className="text-[#203D32] font-semibold">Kontak &amp; Partisipasi</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
              Komunikasi &middot; Kolaborasi &middot; Umpan Balik
            </span>
            <h1 className="font-editorial-serif text-3xl sm:text-5xl text-[#203D32] leading-tight">
              Kirim Masukan, Catatan Lapangan, atau Laporan
            </h1>
            <p className="text-base sm:text-lg text-[#74604D] font-editorial-sans leading-relaxed">
              Kanal komunikasi untuk pertanyaan edukasi konservasi, kontribusi riset keanekaragaman hayati Ciremai, atau masukan pengembangan platform.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Form Left, Info & FAQ Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 border border-[#DCDDD2] bg-[#FAF8F4] p-6 sm:p-10">
            {isSubmitted ? (
              /* Success State */
              <div className="space-y-6 py-6 text-center">
                <div className="w-14 h-14 bg-[#EDE8DC] text-[#203D32] rounded-full mx-auto flex items-center justify-center border border-[#DCDDD2]">
                  <CheckCircle2 className="w-8 h-8 text-[#71816A]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-editorial-serif text-2xl sm:text-3xl text-[#203D32]">
                    Simulasi Pengiriman Berhasil
                  </h3>
                  <p className="text-sm text-[#74604D] font-editorial-sans max-w-md mx-auto leading-relaxed">
                    Terima kasih, <strong>{formData.fullName}</strong>. Pesan Anda untuk kategori <em>&ldquo;{formData.subject}&rdquo;</em> telah tervalidasi dan tercatat dalam sistem simulasi.
                  </p>
                </div>

                {/* Transparency Notice */}
                <div className="p-4 bg-[#EDE8DC] border border-[#DCDDD2] text-xs text-[#74604D] max-w-md mx-auto text-left space-y-1">
                  <p className="font-semibold text-[#203D32]">Catatan Transparansi Prototipe:</p>
                  <p>
                    Karena aplikasi ini adalah prototipe frontend kompetisi tanpa integrasi server email produksi, data form ini disimulasikan secara lokal pada peramban Anda.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#203D32] text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-[#172D25]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Kirim Pesan Lainnya</span>
                </button>
              </div>
            ) : (
              /* Actual Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-[#DCDDD2] pb-4">
                  <h2 className="font-editorial-serif text-2xl text-[#203D32]">
                    Formulir Umpan Balik &amp; Relawan
                  </h2>
                  <p className="text-xs text-[#74604D] mt-1 font-editorial-sans">
                    Seluruh kolom bertanda bintang (<span className="text-[#B77D58]">*</span>) wajib diisi dengan informasi yang benar.
                  </p>
                </div>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#203D32]">
                    Nama Lengkap <span className="text-[#B77D58]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value })
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined })
                    }}
                    placeholder="Contoh: Budi Santoso"
                    className={`w-full p-3 bg-[#F5F2E9] border text-sm text-[#292D29] focus:outline-none focus:border-[#203D32] transition-colors ${
                      errors.fullName ? 'border-rose-600' : 'border-[#DCDDD2]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-600">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#203D32]">
                    Alamat Email Aktif <span className="text-[#B77D58]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: undefined })
                    }}
                    placeholder="nama@email.com"
                    className={`w-full p-3 bg-[#F5F2E9] border text-sm text-[#292D29] focus:outline-none focus:border-[#203D32] transition-colors ${
                      errors.email ? 'border-rose-600' : 'border-[#DCDDD2]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600">{errors.email}</p>
                  )}
                </div>

                {/* Category */}
                <div className="space-y-1.5">
                  <label htmlFor="category" className="block text-xs font-semibold uppercase tracking-wider text-[#203D32]">
                    Kategori Keperluan <span className="text-[#B77D58]">*</span>
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-3 bg-[#F5F2E9] border border-[#DCDDD2] text-sm text-[#292D29] focus:outline-none focus:border-[#203D32]"
                  >
                    <option value="pertanyaan-umum">Pertanyaan Edukasi &amp; Konservasi</option>
                    <option value="laporan-jalur">Laporan Kondisi Jalur &amp; Tumpukan Sampah</option>
                    <option value="usulan-konten">Kontribusi Catatan Lapangan / Riset Satwa</option>
                    <option value="relawan">Pendaftaran Relawan Bersih Jalur / Edukasi</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[#203D32]">
                    Subjek Pesan <span className="text-[#B77D58]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value })
                      if (errors.subject) setErrors({ ...errors, subject: undefined })
                    }}
                    placeholder="Contoh: Temuan tumpukan sampah di Pos 3 Cigowang"
                    className={`w-full p-3 bg-[#F5F2E9] border text-sm text-[#292D29] focus:outline-none focus:border-[#203D32] transition-colors ${
                      errors.subject ? 'border-rose-600' : 'border-[#DCDDD2]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-600">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#203D32]">
                    Isi Pesan Detail <span className="text-[#B77D58]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: undefined })
                    }}
                    placeholder="Tuliskan keterangan detail lokasi, kronologi temuan, atau ide kontribusi Anda..."
                    className={`w-full p-3 bg-[#F5F2E9] border text-sm text-[#292D29] focus:outline-none focus:border-[#203D32] transition-colors ${
                      errors.message ? 'border-rose-600' : 'border-[#DCDDD2]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-600">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#203D32] hover:bg-[#172D25] disabled:bg-[#71816A] text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Memproses Validasi...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#B77D58]" />
                      <span>Kirim Pesan / Laporan</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Basecamp & Emergency Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Context Box */}
            <div className="border border-[#DCDDD2] bg-[#FAF8F4] p-6 sm:p-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
                Informasi Kawasan
              </span>
              <h3 className="font-editorial-serif text-2xl text-[#203D32]">
                Sekretariat &amp; Pos Lapangan
              </h3>
              <p className="text-xs sm:text-sm text-[#74604D] font-editorial-sans leading-relaxed">
                Platform CiremaiGreen dikembangkan di Kabupaten Kuningan sebagai bagian dari upaya peningkatan kesadaran lingkungan digital bagi pelajar, mahasiswa, dan penjelajah alam.
              </p>

              <div className="pt-4 border-t border-[#DCDDD2] space-y-3 text-xs text-[#292D29]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B77D58] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#203D32]">Wilayah Pengamatan:</strong>
                    <span>Lereng Timur &amp; Selatan Kawasan Taman Nasional Gunung Ciremai, Kabupaten Kuningan, Jawa Barat 45551</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B77D58] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#203D32]">Kontak Digital Edukasi:</strong>
                    <span>ciremaigreen.project@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Ranger Basecamp Notice */}
            <div className="p-6 bg-[#EDE8DC] border border-[#DCDDD2] space-y-3">
              <div className="flex items-center gap-2 font-semibold text-xs text-[#203D32]">
                <ShieldCheck className="w-4 h-4 text-[#71816A]" />
                <span>Kontak Resmi Pos Registrasi BTNGC:</span>
              </div>
              <p className="text-xs text-[#74604D] leading-relaxed">
                Untuk urusan darurat evakuasi pendaki atau pemesanan tiket resmi (SIMAKSI), hubungi langsung pos resmi pengelola:
              </p>
              <ul className="text-xs text-[#203D32] space-y-1.5 font-mono">
                <li>&bull; Pos Jalur Palutungan: (0232) 871147</li>
                <li>&bull; Pos Jalur Linggajati: (0232) 873099</li>
                <li>&bull; Call Center BTNGC: www.tngciremai.menlhk.go.id</li>
              </ul>
            </div>

            {/* Quick FAQ Accordion */}
            <div className="border border-[#DCDDD2] bg-[#FAF8F4] p-6 space-y-4">
              <h3 className="font-editorial-serif text-xl text-[#203D32] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#B77D58]" />
                <span>Pertanyaan Umum (FAQ)</span>
              </h3>

              <div className="space-y-3 text-xs text-[#292D29]/85">
                <div className="space-y-1">
                  <h4 className="font-semibold text-[#203D32]">
                    Apakah CiremaiGreen menjual tiket pendakian?
                  </h4>
                  <p className="text-[#74604D]">
                    Tidak. Seluruh perizinan dan tiket pendakian resmi Gunung Ciremai dikelola langsung oleh Balai TNGC secara daring melalui portal resmi pemerintah.
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#DCDDD2]/70">
                  <h4 className="font-semibold text-[#203D32]">
                    Bagaimana cara bergabung sebagai relawan bersih jalur?
                  </h4>
                  <p className="text-[#74604D]">
                    Pilih kategori &ldquo;Pendaftaran Relawan&rdquo; pada form di samping. Kami akan mengoordinasikan jadwal aksi bersama kelompok sadar wisata desa setempat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
