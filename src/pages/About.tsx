import { Link } from 'react-router-dom'
import { ShieldCheck, Mountain } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { lang } = useLanguage()

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
              {lang === 'ID' ? 'Tentang CiremaiGreen' : 'About CiremaiGreen'}
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-400">
              Manifesto &middot; Latar Belakang &middot; Etos Konservasi
            </span>
            <h1 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Menjembatani Sains Konservasi dengan Langkah Para Penjelajah
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Mountain className="w-3.5 h-3.5" />
              Latar Belakang Gagasan
            </div>

            <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight leading-snug">
              Bukan Sekadar Puncak Tertinggi, Melainkan Menara Air Kehidupan Tiga Wilayah.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
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
            <div className="border border-white/10 bg-[#0f2218] p-3 rounded-3xl shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-black/40">
                <img
                  src="/images/hutan-pinus.png"
                  alt="Tutupan hutan hujan pegunungan lereng Ciremai"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] text-emerald-300/80 p-2 text-center">
                Hutan pegunungan penyerap air di kawasan Palutungan &bull; Dok. Lanskap Ciremai
              </p>
            </div>
          </div>
        </section>

        {/* 4 Pillars of CiremaiGreen */}
        <section className="space-y-8 pt-6 border-t border-white/10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-400">
              Prinsip Kerja Kami
            </span>
            <h2 className="text-3xl text-white font-normal tracking-tight">
              Empat Pilar CiremaiGreen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Sains Tanpa Mitos',
                desc: 'Menyajikan klasifikasi spesies dengan status IUCN Red List dan peraturan perundangan nasional yang sesungguhnya, bukan menebak atau melebih-lebihkan data.',
              },
              {
                num: '02',
                title: 'Leave No Trace Nyata',
                desc: 'Mendorong disiplin persiapan logistik praktis sejak dari rumah agar potensi sampah plastik dapat dipangkas sebelum kaki menginjak gerbang awal pendakian.',
              },
              {
                num: '03',
                title: 'Akar Komunitas Lokal',
                desc: 'Menghormati masyarakat desa lingkar Ciremai (Palutungan, Linggajati, Pajambon) sebagai garda terdepan penjaga kearifan hutan dan air.',
              },
              {
                num: '04',
                title: 'Akses Digital Terbuka',
                desc: 'Membangun antarmuka web yang ringan, cepat, tanpa komponen berbayar tersembunyi, dan mudah diakses oleh pelajar maupun masyarakat luas di ponsel.',
              },
            ].map((pilar) => (
              <div
                key={pilar.num}
                className="border border-white/10 bg-[#0f2218] rounded-3xl p-6 space-y-3 hover:border-emerald-400/40 transition-colors"
              >
                <span className="font-mono font-bold text-2xl text-emerald-400">{pilar.num}</span>
                <h3 className="text-lg font-bold text-white">{pilar.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integrity & Attribution Section */}
        <section id="sources" className="p-8 bg-[#0a1610] border border-white/10 rounded-3xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <div>
              <h3 className="text-xl font-bold text-white">
                Transparansi Sumber &amp; Atribusi Data
              </h3>
              <p className="text-xs text-neutral-400">
                Komitmen keterbukaan dan kepatuhan penuh terhadap pedoman integritas informasi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-300">
            <div className="space-y-2">
              <h4 className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">
                Rujukan Konservasi &amp; Taksonomi:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-neutral-400">
                <li>IUCN Red List of Threatened Species verifikasi 2021&ndash;2023.</li>
                <li>Permen LHK No. P.106/2018 tentang Jenis Tumbuhan dan Satwa Dilindungi.</li>
                <li>Publikasi inventarisasi hayati Balai TN Gunung Ciremai (BTNGC).</li>
                <li>Steenis, C.G.G.J. van. (1972). The Mountain Flora of Java.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">
                Teknologi &amp; Lisensi Komponen:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-neutral-400">
                <li>Peta Geospasial: Leaflet.js &amp; CartoDB Dark Matter / OSM contributors.</li>
                <li>Ikon &amp; Grafis: Lucide React (MIT License).</li>
                <li>Tipografi: PP Mori Self-Hosted.</li>
                <li>Bebas Template Berbayar: 100% kode antarmuka dirancang mandiri.</li>
              </ul>
            </div>
          </div>

          {/* Academic Statement */}
          <div className="p-4 bg-emerald-950/30 border border-emerald-500/20 rounded-2xl text-xs text-neutral-300 leading-relaxed">
            <p className="font-semibold text-emerald-300 mb-1">
              Pernyataan Integritas &amp; Konteks Kompetisi:
            </p>
            <p>
              Website ini dikembangkan secara independen sebagai proyek peserta lomba <strong>Techno Versary Vol. II Web Design Competition</strong> oleh Himpunan Mahasiswa Teknik Informatika, Fakultas Ilmu Komputer, Universitas Kuningan (UNIKU).
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950 to-[#07130c] border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-white">
              Ingin Terlibat dalam Edukasi Konservasi?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              Kami membuka kolaborasi bagi siapa saja yang ingin menyumbangkan catatan lapangan dan edukasi alam.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all shadow-lg shadow-emerald-500/20 shrink-0"
          >
            Hubungi Tim CiremaiGreen
          </Link>
        </div>
      </div>
    </div>
  )
}
