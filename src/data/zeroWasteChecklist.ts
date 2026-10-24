export interface ChecklistItem {
  id: string
  phase: 'preparation' | 'packing' | 'on-trail' | 'post-trip'
  phaseLabel: string
  title: string
  description: string
  whyItMatters: string
  category: 'Wadah & Logistik' | 'Peralatan Masak' | 'Kebersihan & Sanitasi' | 'Perilaku Jalur'
  weightImpact: 'Tinggi' | 'Sedang' | 'Kritis'
}

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'repack-food',
    phase: 'preparation',
    phaseLabel: 'Fase 1: Persiapan di Rumah',
    title: 'Repacking Logistik Makanan ke Wadah Reusable',
    description: 'Lepaskan kardus luar, plastik sachet sekali pakai, dan bungkus ganda sebelum berangkat. Pindahkan beras, mi, havermut, dan bumbu ke dalam wadah ziplock tebal atau kotak makanan tahan bentur.',
    whyItMatters: 'Mencegah 80% potensi sampah plastik terbang terbawa angin di camp pos atas karena bungkus sudah tertinggal di rumah.',
    category: 'Wadah & Logistik',
    weightImpact: 'Kritis'
  },
  {
    id: 'tumbler-water-bladder',
    phase: 'preparation',
    phaseLabel: 'Fase 1: Persiapan di Rumah',
    title: 'Gunakan Botol Minum Reusable / Water Bladder',
    description: 'Gantikan 4-6 botol air mineral PET sekali pakai dengan botol minum Tritan tahan banting atau kantung air minum (water bladder) 2–3 liter yang dilengkapi selang hisap.',
    whyItMatters: 'Botol plastik sekali pakai adalah jenis sampah terbanyak nomor satu yang dievakuasi ranger Ciremai dari pos Cigowang dan Tanjakan Asu.',
    category: 'Wadah & Logistik',
    weightImpact: 'Kritis'
  },
  {
    id: 'biodegradable-soap',
    phase: 'packing',
    phaseLabel: 'Fase 2: Perlengkapan di Ransel',
    title: 'Sabun Organik Tanpa Busa Kimia (Biodegradable)',
    description: 'Siapkan sabun serbaguna berbahan dasar minyak kelapa murni tanpa SLS/paraben untuk mencuci tangan. Gunakan minimal 60 meter dari bibir mata air.',
    whyItMatters: 'Deterjen konvensional merusak lapisan pelindung insang larva serangga air dan mengubah pH alami mata air Ciremai.',
    category: 'Kebersihan & Sanitasi',
    weightImpact: 'Sedang'
  },
  {
    id: 'trash-drybag',
    phase: 'packing',
    phaseLabel: 'Fase 2: Perlengkapan di Ransel',
    title: 'Trash Drybag / Trashbag Tebal Khusus Sampah',
    description: 'Sediakan kantong kedap air (drybag bekas atau karung kanvas) khusus wadah sampah basah dan kering di bagian terluar tas untuk dibawa pulang.',
    whyItMatters: 'Kantong plastik tipis (kresek) mudah robek terkena duri semak dan tercecer di punggungan jalur tanpa disadari.',
    category: 'Wadah & Logistik',
    weightImpact: 'Kritis'
  },
  {
    id: 'pocket-ashtray',
    phase: 'packing',
    phaseLabel: 'Fase 2: Perlengkapan di Ransel',
    title: 'Asbak Saku Portabel (Jika Merokok)',
    description: 'Wadah logam kecil bertutup kedap udara untuk menampung puntung dan abu rokok hingga turun ke pos pendaftaran.',
    whyItMatters: 'Filter puntung rokok mengandung serat mikroplastik selulosa asetat dan racun nikotin yang mencemari tanah gambut serta berisiko memicu kebakaran hutan musim kemarau.',
    category: 'Kebersihan & Sanitasi',
    weightImpact: 'Tinggi'
  },
  {
    id: 'stay-on-trail',
    phase: 'on-trail',
    phaseLabel: 'Fase 3: Selama di Jalur Pendakian',
    title: 'Tetap Melangkah di Jalur Resmi Bertanda',
    description: 'Jangan memotong tikungan (switchback) lereng bukit meskipun terlihat lebih cepat. Berjalan satu baris di tengah tapak tanah.',
    whyItMatters: 'Memotong jalur menciptakan saluran air baru yang memicu longsor lereng andesit dan mematikan kecambah tanaman endemik.',
    category: 'Perilaku Jalur',
    weightImpact: 'Tinggi'
  },
  {
    id: 'pack-out-organic',
    phase: 'on-trail',
    phaseLabel: 'Fase 3: Selama di Jalur Pendakian',
    title: 'Bawa Turun Kembali Semua Sisa Organik',
    description: 'Kulit jeruk, kulit pisang, tulang ikan, dan sisa nasi dimasukkan ke dalam wadah kedap aroma, tidak dikubur sembarangan di tanah dingin.',
    whyItMatters: 'Di atas 2.000 mdpl dekomposisi organik membutuhkan waktu hingga dua tahun dan mengubah kebiasaan makan alami babi hutan serta monyet.',
    category: 'Wadah & Logistik',
    weightImpact: 'Kritis'
  },
  {
    id: 'low-noise-nature',
    phase: 'on-trail',
    phaseLabel: 'Fase 3: Selama di Jalur Pendakian',
    title: 'Jaga Ketenangan (Bebas Pengeras Suara Bluetooth)',
    description: 'Nikmati suara angin, burung, dan gemericik air. Dilarang membawa speaker portabel dengan volume keras di area istirahat dan pos camp.',
    whyItMatters: 'Kebisingan mengusir satwa arboreal seperti Surili Jawa dari koridor pakan alaminya ke jurang yang tidak terlindungi.',
    category: 'Perilaku Jalur',
    weightImpact: 'Sedang'
  },
  {
    id: 'waste-audit-checkpoint',
    phase: 'post-trip',
    phaseLabel: 'Fase 4: Pasca Perjalanan di Basecamp',
    title: 'Pemeriksaan Sampah di Pos Registrasi BTNGC',
    description: 'Laporkan kantong sampah bawaan kepada ranger di pos pendaftaran untuk ditimbang dan dicocokkan dengan manifes logistik awal.',
    whyItMatters: 'Membantu pengelola mengaudit data volume sampah tahunan dan memastikan tidak ada botol atau gas kaleng yang ditinggalkan di pos atas.',
    category: 'Kebersihan & Sanitasi',
    weightImpact: 'Kritis'
  }
]

export interface TransportEmissionFactor {
  mode: string
  name: string
  factorKgCo2PerKm: number // kg CO2e per passenger km (DEFRA / IPCC estimation reference)
  description: string
}

export const TRANSPORT_EMISSIONS: TransportEmissionFactor[] = [
  {
    mode: 'kereta',
    name: 'Kereta Api (Stasiun Cirebon + Angkot/Bus Kuningan)',
    factorKgCo2PerKm: 0.041,
    description: 'Pilihan paling rendah emisi untuk pendaki dari wilayah Jabodetabek, Bandung, atau Jawa Tengah.'
  },
  {
    mode: 'bus',
    name: 'Bus Umum Antar-Kota',
    factorKgCo2PerKm: 0.082,
    description: 'Pilihan transportasi publik massal rute terminal Kuningan / Cirebon.'
  },
  {
    mode: 'motor',
    name: 'Sepeda Motor Pribadi (150cc)',
    factorKgCo2PerKm: 0.103,
    description: 'Pilihan fleksibel jalur lingkar Cirebon-Kuningan dengan efisiensi sedang.'
  },
  {
    mode: 'mobil-carpool',
    name: 'Mobil Pribadi Carpool (4 Orang)',
    factorKgCo2PerKm: 0.048,
    description: 'Satu kendaraan dibagi rata 4 penumpang menekan jejak per kapita secara signifikan.'
  },
  {
    mode: 'mobil-solo',
    name: 'Mobil Pribadi Solo / 1 Orang',
    factorKgCo2PerKm: 0.192,
    description: 'Jejak emisi tertinggi per penumpang.'
  }
]
