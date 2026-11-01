import { Link } from 'react-router-dom'
import { MapPin, Compass, ShieldCheck, HeartHandshake } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#203D32] text-[#F5F2E9] border-t border-[#37463E]">
      {/* Top Editorial Banner */}
      <div className="border-b border-[#37463E] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.2em] font-editorial-sans text-[#A3B49D]">
              Ethos Konservasi &middot; Prinsip Lapangan
            </span>
            <p className="font-editorial-serif text-xl sm:text-2xl text-[#FAF8F4] italic">
              &ldquo;Jangan mengambil apa pun selain foto, jangan meninggalkan apa pun selain jejak kaki.&rdquo;
            </p>
          </div>
          <Link
            to="/zero-waste"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#B77D58] hover:bg-[#9A6544] text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider rounded-none transition-colors shrink-0"
          >
            Pelajari Zero-Waste Hiking
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
            <p className="text-sm text-[#F5F2E9]/80 leading-relaxed font-editorial-sans max-w-sm">
              Platform independen field guide digital konservasi ekosistem Gunung Ciremai dan panduan penjelajahan alam bertanggung jawab berbasis di Kabupaten Kuningan, Jawa Barat.
            </p>
            <div className="pt-2 text-xs text-[#A3B49D] space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B77D58] shrink-0" />
                <span>Kabupaten Kuningan &amp; Majalengka, Jawa Barat, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#B77D58] shrink-0" />
                <span>Puncak Gunung Ciremai &middot; 3.078 meter di atas permukaan laut</span>
              </div>
            </div>
          </div>

          {/* Navigation 1: Eksplorasi */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A3B49D]">
              Eksplorasi
            </h3>
            <ul className="space-y-2 text-sm text-[#F5F2E9]/75 font-editorial-sans">
              <li>
                <Link to="/explore" className="hover:text-[#FAF8F4] transition-colors">
                  Peta Interaktif Destinasi
                </Link>
              </li>
              <li>
                <Link to="/explore?tab=trails" className="hover:text-[#FAF8F4] transition-colors">
                  Jalur Resmi Pendakian
                </Link>
              </li>
              <li>
                <Link to="/explore?tab=waterfalls" className="hover:text-[#FAF8F4] transition-colors">
                  Air Terjun &amp; Lembah
                </Link>
              </li>
              <li>
                <Link to="/zero-waste" className="hover:text-[#FAF8F4] transition-colors">
                  Kalkulator Emisi Perjalanan
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation 2: Konservasi & Field Notes */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A3B49D]">
              Dokumentasi
            </h3>
            <ul className="space-y-2 text-sm text-[#F5F2E9]/75 font-editorial-sans">
              <li>
                <Link to="/field-notes" className="hover:text-[#FAF8F4] transition-colors">
                  Indeks Keanekaragaman Hayati
                </Link>
              </li>
              <li>
                <Link to="/field-notes?tab=articles" className="hover:text-[#FAF8F4] transition-colors">
                  Jurnal &amp; Catatan Lapangan
                </Link>
              </li>
              <li>
                <Link to="/zero-waste" className="hover:text-[#FAF8F4] transition-colors">
                  Checklist Bebas Sampah
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FAF8F4] transition-colors">
                  Misi &amp; Etos Konservasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation 3: Keterlibatan & Transparansi */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A3B49D]">
              Keterlibatan
            </h3>
            <ul className="space-y-2 text-sm text-[#F5F2E9]/75 font-editorial-sans">
              <li>
                <Link to="/contact" className="hover:text-[#FAF8F4] transition-colors flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#B77D58]" />
                  <span>Daftar Relawan Edukasi</span>
                </Link>
              </li>
              <li>
                <Link to="/contact?type=report" className="hover:text-[#FAF8F4] transition-colors">
                  Lapor Kerusakan Jalur
                </Link>
              </li>
              <li>
                <Link to="/about#sources" className="hover:text-[#FAF8F4] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#71816A]" />
                  <span>Sumber Data Terverifikasi</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Academic & Competition Transparency Notice */}
        <div className="mt-12 pt-8 border-t border-[#37463E] text-xs text-[#A3B49D] leading-relaxed">
          <div className="p-4 bg-[#172D25] border border-[#37463E] rounded-none">
            <p className="font-semibold text-[#F5F2E9] mb-1">
              Catatan Integritas &amp; Konteks Kompetisi:
            </p>
            <p>
              Proyek <strong>CiremaiGreen</strong> dirancang sebagai karya orisinal untuk <em>Techno Versary Vol. II : Web Design Competition</em> yang diselenggarakan oleh HIMA-TI FKOM Universitas Kuningan. Data spesies merujuk pada taksonomi resmi dan kategori IUCN Red List / Permen LHK No. P.106/2018. Peta interaktif menggunakan data geospasial OpenStreetMap. Situs ini merupakan inisiatif advokasi digital independen dan bukan media resmi pengelola taman nasional.
            </p>
          </div>
        </div>

        {/* Copyright & Signoff */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A3B49D] gap-4">
          <p>
            &copy; {new Date().getFullYear()} CiremaiGreen. Dikembangkan dengan prinsip keterbukaan informasi dan pelestarian alam.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>OpenStreetMap Tiles</span>
            <span>&bull;</span>
            <span>IUCN Red List Data</span>
            <span>&bull;</span>
            <span>BTNGC Public Baseline</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
