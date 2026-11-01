import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-[#F5F2E9] min-h-screen text-[#292D29]">
      {/* Header */}
      <div className="border-b border-[#DCDDD2] bg-[#FAF8F4] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-editorial-sans text-[#74604D]">
            <Link to="/" className="hover:text-[#203D32]">Beranda</Link>
            <span>/</span>
            <span className="text-[#203D32] font-semibold">Tentang CiremaiGreen</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
              Manifesto &middot; Latar Belakang &middot; Etos
            </span>
            <h1 className="font-editorial-serif text-3xl sm:text-5xl text-[#203D32] leading-tight">
              Menjembatani Sains Konservasi dengan Langkah Para Penjelajah
            </h1>
            <p className="text-base sm:text-lg text-[#74604D] font-editorial-sans leading-relaxed">
              CiremaiGreen lahir dari kesadaran bahwa keindahan lanskap tidak akan bertahan tanpa pemahaman mendalam tentang ekosistem yang menopangnya.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Story Section: Asymmetric 2 Columns */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-block px-3 py-1 bg-[#EDE8DC] border border-[#DCDDD2] text-xs font-semibold uppercase tracking-wider text-[#203D32]">
              Latar Belakang Gagasan
            </div>

            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#203D32] leading-snug">
              Bukan Sekadar Puncak Tertinggi, Melainkan Menara Air Kehidupan Tiga Wilayah
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#292D29]/85 font-editorial-sans leading-relaxed">
              <p>
                Gunung Ciremai menjulang setinggi 3.078 meter di atas permukaan laut sebagai gunung api soliter tertinggi di Jawa Barat. Wilayah lerengnya membentang melintasi Kabupaten Kuningan dan Majalengka, menjadi benteng terakhir bagi hutan hujan pegunungan primer yang menyimpan ratusan spesies flora dan fauna endemik.
              </p>
              <p>
                Namun popularitas Ciremai sebagai tujuan wisata alam dan pendakian kerap membawa paradoks: tumpukan sampah kemasan makanan di pos perkemahan, perapian liar di tanah gambut, kebisingan yang mengusir satwa liar, hingga degradasi vegetasi sub-alpin di bibir kawah.
              </p>
              <p>
                Kami percaya masalah ini bermula dari kesenjangan informasi. Banyak pengunjung tidak menyadari bahwa di balik keindahan kabut lereng, terdapat 54 mata air alami yang menghidupi sawah warga Kuningan dan Cirebon. CiremaiGreen hadir untuk mengisi celah tersebut dengan menyajikan informasi berbasis fakta lapangan yang dapat dipahami oleh siapa saja.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-[#DCDDD2] bg-[#FAF8F4] p-3 shadow-xs">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#203D32]/10">
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
                  alt="Tutupan hutan hujan pegunungan lereng Ciremai"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] text-[#74604D] font-mono p-2">
                Hutan pegunungan penyerap air di kawasan Palutungan &bull; Dok. Lanskap Kuningan
              </p>
            </div>
          </div>
        </section>

        {/* 4 Pillars of CiremaiGreen */}
        <section className="space-y-8 pt-6 border-t border-[#DCDDD2]">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
              Prinsip Kerja Kami
            </span>
            <h2 className="font-editorial-serif text-3xl text-[#203D32]">
              Empat Pilar CiremaiGreen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-[#DCDDD2] bg-[#FAF8F4] p-6 space-y-3">
              <span className="font-editorial-serif font-bold text-2xl text-[#B77D58]">01</span>
              <h3 className="font-editorial-serif text-xl text-[#203D32]">
                Sains Tanpa Mitos
              </h3>
              <p className="text-xs sm:text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed">
                Menyajikan klasifikasi spesies dengan status IUCN Red List dan peraturan perundangan nasional yang sesungguhnya, bukan menebak atau melebih-lebihkan data.
              </p>
            </div>

            <div className="border border-[#DCDDD2] bg-[#FAF8F4] p-6 space-y-3">
              <span className="font-editorial-serif font-bold text-2xl text-[#B77D58]">02</span>
              <h3 className="font-editorial-serif text-xl text-[#203D32]">
                Leave No Trace Nyata
              </h3>
              <p className="text-xs sm:text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed">
                Mendorong disiplin persiapan logistik praktis sejak dari rumah agar potensi sampah plastik dapat dipangkas sebelum kaki menginjak gerbang awal pendakian.
              </p>
            </div>

            <div className="border border-[#DCDDD2] bg-[#FAF8F4] p-6 space-y-3">
              <span className="font-editorial-serif font-bold text-2xl text-[#B77D58]">03</span>
              <h3 className="font-editorial-serif text-xl text-[#203D32]">
                Akar Komunitas Lokal
              </h3>
              <p className="text-xs sm:text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed">
                Menghormati masyarakat desa lingkar Ciremai (Palutungan, Linggajati, Pajambon) sebagai garda terdepan penjaga kearifan hutan dan air.
              </p>
            </div>

            <div className="border border-[#DCDDD2] bg-[#FAF8F4] p-6 space-y-3">
              <span className="font-editorial-serif font-bold text-2xl text-[#B77D58]">04</span>
              <h3 className="font-editorial-serif text-xl text-[#203D32]">
                Akses Digital Terbuka
              </h3>
              <p className="text-xs sm:text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed">
                Membangun antarmuka web yang ringan, cepat, tanpa komponen berbayar tersembunyi, dan mudah diakses oleh pelajar maupun masyarakat luas di ponsel.
              </p>
            </div>
          </div>
        </section>

        {/* Integrity & Attribution Section */}
        <section id="sources" className="p-8 bg-[#FAF8F4] border border-[#DCDDD2] space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[#DCDDD2]">
            <ShieldCheck className="w-6 h-6 text-[#71816A]" />
            <div>
              <h3 className="font-editorial-serif text-2xl text-[#203D32]">
                Transparansi Sumber &amp; Atribusi Data
              </h3>
              <p className="text-xs text-[#74604D]">
                Komitmen keterbukaan dan kepatuhan penuh terhadap pedoman integritas informasi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#292D29]/85 font-editorial-sans">
            <div className="space-y-2">
              <h4 className="font-semibold text-[#203D32] uppercase tracking-wider text-[11px]">
                Rujukan Konservasi &amp; Taksonomi:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-[#74604D]">
                <li>IUCN Red List of Threatened Species (iucnredlist.org) verifikasi tahun 2021&ndash;2023.</li>
                <li>Peraturan Menteri LHK No. P.106/MENLHK/SETJEN/KUM.1/12/2018 tentang Jenis Tumbuhan dan Satwa Dilindungi.</li>
                <li>Publikasi publik inventarisasi hayati Balai Taman Nasional Gunung Ciremai (BTNGC).</li>
                <li>Steenis, C.G.G.J. van. (1972). <em>The Mountain Flora of Java</em>.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-[#203D32] uppercase tracking-wider text-[11px]">
                Teknologi &amp; Lisensi Komponen:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-[#74604D]">
                <li>Peta Geospasial: Leaflet.js &amp; &copy; OpenStreetMap contributors.</li>
                <li>Ikon: Lucide React (MIT Open Source License).</li>
                <li>Tipografi: Newsreader (OFL) &amp; Plus Jakarta Sans (OFL).</li>
                <li>Bebas Template Berbayar: 100% kode antarmuka dirancang secara mandiri.</li>
              </ul>
            </div>
          </div>

          {/* Academic & Non-Official Partnership Statement */}
          <div className="p-4 bg-[#EDE8DC] border-l-4 border-[#203D32] text-xs text-[#74604D] leading-relaxed">
            <p className="font-semibold text-[#203D32] mb-1">
              Pernyataan Kemitraan &amp; Status Hukum:
            </p>
            <p>
              Website ini dikembangkan secara independen sebagai proyek peserta lomba <strong>Techno Versary Vol. II Web Design Competition</strong> oleh Himpunan Mahasiswa Teknik Informatika, Fakultas Ilmu Komputer, Universitas Kuningan (UNIKU). Website ini <em>bukan merupakan website resmi</em> dari Balai Taman Nasional Gunung Ciremai (BTNGC) dan bukan representasi resmi dari pengelola taman nasional.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="p-8 bg-[#203D32] text-[#F5F2E9] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-editorial-serif text-2xl text-[#FAF8F4]">
              Ingin Terlibat dalam Edukasi Konservasi?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3B49D]">
              Kami membuka pintu bagi siapa saja yang ingin menyumbangkan catatan lapangan, usulan materi edukasi, atau berdiskusi.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#B77D58] hover:bg-[#9A6544] text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            Hubungi Tim CiremaiGreen
          </Link>
        </div>
      </div>
    </div>
  )
}
