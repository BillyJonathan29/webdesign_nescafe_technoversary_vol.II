import { Link } from 'react-router-dom'
import { MapPin, Compass, ShieldCheck, HeartHandshake } from 'lucide-react'
import Logo from './Logo'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="bg-[#050b07] text-neutral-300 border-t border-white/10 font-['Mori',sans-serif]">
      {/* Top Editorial Banner */}
      <div className="border-b border-white/[0.08] py-8 px-4 sm:px-6 lg:px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
              {lang === 'ID' ? 'Etika Penjelajahan Rimba' : 'Wilderness Expedition Ethics'}
            </span>
            <p className="text-lg sm:text-2xl text-white italic font-serif">
              &ldquo;Jangan mengambil apa pun selain foto, jangan meninggalkan apa pun selain jejak kaki.&rdquo;
            </p>
          </div>
          <Link
            to="/zero-waste"
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all shadow-lg shadow-emerald-500/20 shrink-0"
          >
            {lang === 'ID' ? 'Panduan Zero-Waste Hiking' : 'Zero-Waste Hiking Guide'}
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <Logo variant="horizontal" theme="light" size="md" />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {lang === 'ID'
                ? 'Platform field guide digital interaktif pelestarian ekosistem Gunung Ciremai dan panduan penjelajahan alam bertanggung jawab di Kabupaten Kuningan, Jawa Barat.'
                : 'Interactive digital conservation field guide safeguarding Mount Ciremai ecosystem and promoting responsible exploration in Kuningan, West Java.'}
            </p>
            <div className="pt-2 text-xs text-emerald-300/80 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Kabupaten Kuningan &amp; Majalengka, Jawa Barat</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Puncak Gunung Ciremai &middot; 3.078 meter di atas permukaan laut</span>
              </div>
            </div>
          </div>

          {/* Navigation 1: Eksplorasi */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {lang === 'ID' ? 'Eksplorasi' : 'Exploration'}
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/explore" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ID' ? 'Peta Interaktif Zonasi' : 'Interactive Zonation Map'}
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ID' ? '4 Jalur Resmi Pendakian' : '4 Official Hiking Trails'}
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ID' ? 'Air Terjun & Suaka Alam' : 'Sanctuaries & Waterfalls'}
                </Link>
              </li>
              <li>
                <Link to="/zero-waste" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ID' ? 'Kalkulator Emisi & Sampah' : 'Waste & Emission Audit'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation 2: Dokumentasi */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {lang === 'ID' ? 'Dokumentasi' : 'Documentation'}
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/field-notes" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ID' ? 'Indeks Keanekaragaman Hayati' : 'Biodiversity Index'}
                </Link>
              </li>
              <li>
                <Link to="/field-notes" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ID' ? 'Jurnal & Catatan Lapangan' : 'Field Notes & Research'}
                </Link>
              </li>
              <li>
                <Link to="/zero-waste" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ID' ? 'Checklist Bebas Sampah' : 'Zero-Waste Checklist'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ID' ? 'Misi & Etos Konservasi' : 'Conservation Mission'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation 3: Keterlibatan */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {lang === 'ID' ? 'Keterlibatan' : 'Engagement'}
            </h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'ID' ? 'Daftar Relawan Edukasi' : 'Volunteer Program'}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  {lang === 'ID' ? 'Lapor Pelanggaran Jalur' : 'Report Trail Damage'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'ID' ? 'Sumber Data Terverifikasi' : 'Verified Data Sources'}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Academic Notice */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-neutral-400 leading-relaxed">
          <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl">
            <p className="font-semibold text-white mb-1">
              Catatan Integritas &amp; Konteks Kompetisi:
            </p>
            <p>
              Proyek <strong>CiremaiGreen</strong> dirancang sebagai karya orisinal untuk <em>Techno Versary Vol. II : Web Design Competition</em> yang diselenggarakan oleh HIMA-TI FKOM Universitas Kuningan. Data taksonomi merujuk pada Permen LHK P.106/2018 dan status IUCN Red List. Peta interaktif menggunakan data geospasial OpenStreetMap.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} CiremaiGreen. Dikembangkan dengan dedikasi tinggi untuk pelestarian alam Kuningan.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-neutral-400">
            <span>OpenStreetMap</span>
            <span>&bull;</span>
            <span>IUCN Red List</span>
            <span>&bull;</span>
            <span>BTNGC Baseline</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
