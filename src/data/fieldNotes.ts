export interface Article {
  id: string
  title: string
  subtitle: string
  slug: string
  category: 'Ekologi & Habitat' | 'Etika Wisata' | 'Konservasi Lapangan' | 'Hidrologi & Tanah'
  date: string
  readTime: string
  author: string
  authorRole: string
  summary: string
  contentParagraphs: string[]
  keyTakeaway: string
  references: string[]
  featuredImage: string
  imageCaption: string
  imageCredit: string
  isFeatured?: boolean
}

export const FIELD_NOTES: Article[] = [
  {
    id: 'zonasi-vegetasi-ciremai',
    title: 'Membaca Lapisan Kehidupan Ciremai: Dari Hutan Hujan Lembap hingga Kawah Belerang',
    subtitle: 'Sebuah catatan lapangan tentang bagaimana kenaikan setiap seratus meter elevasi mengubah karakter kanopi, kelembapan, dan spesies yang bertahan.',
    slug: 'lapisan-kehidupan-ciremai',
    category: 'Ekologi & Habitat',
    date: '14 Oktober 2024',
    readTime: '6 menit baca',
    author: 'Rahmat Hidayat, S.Hut.',
    authorRole: 'Pemerhati Ekologi Hutan Pegunungan Jawa Barat',
    summary: 'Gunung Ciremai adalah gunung api soliter tertinggi di Jawa Barat (3.078 mdpl). Ketinggiannya menciptakan stratifikasi ekosistem yang sangat tegas dari zona sub-montana, montana, hingga sub-alpin yang unik.',
    contentParagraphs: [
      'Ketika memulai langkah di pos pendakian awal Palutungan pada ketinggian 1.100 mdpl, udara masih menyisakan kehangatan lereng selatan. Kanopi didominasi oleh tanaman pinus tegakan budidaya yang lambat laun berganti menjadi rimba campuran pohon rasamala (Altingia excelsa) dan saninten (Castanopsis argentea) yang menjulang lebih dari tiga puluh meter.',
      'Memasuki zona montana tengah di atas 1.800 mdpl, kelembapan meningkat drastis. Fenomena hutan awan (cloud forest) mulai terlihat: lumut tebal membalut kulit batang pohon jamuju, dan anggrek epifit menempel rapat pada percabangan yang selalu diselimuti halimun basah.',
      'Perubahan paling dramatis terjadi di atas batas pohon (tree line) sekitar 2.700 mdpl. Kanopi pohon lenyap berganti dengan semak tahan angin kencang: edelweiss Jawa (Anaphalis javanica) dan cantigi gunung (Vaccinium varingiaefolium). Di sini, tanah didominasi pasir vulkanik dan kerikil andesit dengan kandungan belerang aktif dari kawah ganda Ciremai.',
      'Memahami stratifikasi ini penting bagi setiap pengunjung. Setiap lapisan elevasi memiliki kerapuhan ekologis berbeda, menampung satwa yang berbeda, dan menuntut kehati-hatian perilaku yang berbeda pula.'
    ],
    keyTakeaway: 'Kawasan sub-alpin di atas 2.700 mdpl memiliki waktu regenerasi tanah paling lambat akibat suhu dingin dan angin; melangkah di luar jalur setapak dapat menghancurkan lapisan lumut yang butuh puluhan tahun untuk tumbuh kembali.',
    references: [
      'Balai Taman Nasional Gunung Ciremai (BTNGC), Rencana Pengelolaan Jangka Panjang Kawasan.',
      'Steenis, C.G.G.J. van. (1972). The Mountain Flora of Java. E.J. Brill, Leiden.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Garis batas pohon dan punggungan berbatu menuju bibir kawah Gunung Ciremai',
    imageCredit: 'Dokumentasi Ekspedisi Lanskap Ciremai',
    isFeatured: true
  },
  {
    id: 'zero-waste-kulit-buah',
    title: 'Mitos “Hancur Jadi Pupuk”: Mengapa Kulit Buah Organik Dilarang Dibuang di Jalur Gunung',
    subtitle: 'Menelaah sains dekomposisi di dataran tinggi dan bahaya perubahan perilaku satwa liar.',
    slug: 'mitos-hancur-jadi-pupuk',
    category: 'Etika Wisata',
    date: '28 September 2024',
    readTime: '5 menit baca',
    author: 'Dina Kusuma',
    authorRole: 'Koordinator Edukasi Zero Waste Hiking',
    summary: 'Banyak pendaki beranggapan membuang kulit pisang atau apel ke semak gunung adalah tindakan ramah lingkungan karena "organik". Di suhu pegunungan yang dingin, sains membuktikan sebaliknya.',
    contentParagraphs: [
      'Salah satu kesalahpahaman paling umum di kalangan penggiat alam bebas adalah asumsi bahwa sisa makanan alami (seperti kulit jeruk, pisang, biji apel, atau sisa nasi) dapat langsung terurai menjadi kompos di semak hutan.',
      'Faktanya, mikroorganisme pengurai membutuhkan suhu hangat dan kelembapan stabil. Di ketinggian 2.000 mdpl ke atas di mana suhu malam hari sering menyentuh 5–10 derajat Celcius, kulit jeruk atau pisang membutuhkan waktu hingga 2 tahun untuk terurai sepenuhnya.',
      'Dampak yang jauh lebih berbahaya adalah pengubahan perilaku satwa liar (habituation). Aroma sisa makanan manusia mengundang tikus gunung, babi hutan, dan monyet ekor panjang untuk mendekati area perkemahan. Satwa kehilangan insting alaminya mencari makan di tajuk pohon, dan mulai bergantung pada sisa sampah pendaki.',
      'Prinsip Leave No Trace sangat tegas: Apa pun yang Anda bawa naik dari bawah, termasuk biji buah dan kulit buah, harus dibawa turun kembali ke pos sampah di gerbang awal.'
    ],
    keyTakeaway: 'Di suhu dingin pegunungan, kulit pisang membutuhkan hingga 2 tahun untuk terurai. Bawa kembali seluruh sisa makanan Anda tanpa pengecualian.',
    references: [
      'Leave No Trace Center for Outdoor Ethics (lnt.org) Research on Decomposition Times.',
      'National Park Service (NPS) Wildlife Habitation and Food Storage Guidelines.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Tanah gambut dan lumut pegunungan yang sangat sensitif terhadap sisa sisa sampah buangan',
    imageCredit: 'Field Botany Journal Archive',
    isFeatured: false
  },
  {
    id: 'elang-jawa-cilengkrang',
    title: 'Menjaga Koridor Sunyi: Catatan dari Habitat Elang Jawa di Lembah Cilengkrang',
    subtitle: 'Bagaimana keterlibatan pemuda desa Pajambon membantu menjaga ruang aman satwa langka nasional.',
    slug: 'menjaga-koridor-elang-jawa',
    category: 'Konservasi Lapangan',
    date: '02 September 2024',
    readTime: '7 menit baca',
    author: 'M. Fajar Pratama',
    authorRole: 'Ranger Lapangan & Pengamat Satwa',
    summary: 'Lembah Cilengkrang di lereng timur-selatan Ciremai menyimpan kerapatan tajuk hutan yang menjadi sarang ideal bagi pasangan Elang Jawa yang terancam punah.',
    contentParagraphs: [
      'Pagi hari di Lembah Cilengkrang selalu dimulai dengan paduan suara air mengalir dari Curug Sabuk dan sahut-sahutan siulan burung ekek geling di kanopi. Di sinilah salah satu kantong populasi Elang Jawa (Nisaetus bartelsi) yang paling terpantau di Jawa Barat.',
      'Elang Jawa adalah satwa monogami yang sangat setia pada pasangan dan wilayah jelajahnya. Mereka membangun sarang besar di tajuk pohon rasamala yang tingginya mencapai 30 meter. Pasangan elang hanya mengerami satu telur dalam periode dua tahun, membuat setiap anak elang yang menetas menjadi harapan besar bagi kelangsungan spesies.',
      'Ancaman terbesar saat ini bukan lagi perburuan langsung, melainkan kebisingan dan aktivitas wisata liar tanpa izin yang masuk terlalu dalam ke zona inti. Suara bising pesawat nirawak (drone) atau pemutar suara buatan dapat membuat induk elang panik meninggalkan sarang dan telurnya mendingin.',
      'Masyarakat Desa Pajambon kini telah menyusun kode etik lokal bersama balai taman nasional: membatasi jumlah rombongan pengamat, melarang penerbangan drone tanpa izin konservasi, dan menempatkan pemandu lokal bersertifikat pada setiap kunjungan.'
    ],
    keyTakeaway: 'Konservasi tidak berarti menutup total kawasan alam, melainkan membatasi jejak kita agar satwa liar tidak pernah merasa terdesak dari rumahnya sendiri.',
    references: [
      'Laporan Monitoring Populasi Raptor Balai Taman Nasional Gunung Ciremai 2023.',
      'Prawiradilaga, D.M. (2006). Ecology and Conservation of the Javan Hawk-Eagle.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Tajuk tinggi pohon hutan tropika tempat bertengger burung pemangsa pegunungan',
    imageCredit: 'Forest Canopy Documentation',
    isFeatured: false
  },
  {
    id: 'mata-air-ciremai',
    title: 'Ciremai Sebagai Menara Air: Mengapa Hutan Puncak Menentukan Kehidupan Tiga Kabupaten',
    subtitle: 'Lebih dari sekadar puncak pendakian, gunung ini adalah tandon hidrologi raksasa bagi Kuningan, Majalengka, dan Cirebon.',
    slug: 'ciremai-sebagai-menara-air',
    category: 'Hidrologi & Tanah',
    date: '19 Agustus 2024',
    readTime: '5 menit baca',
    author: 'Ir. Hendra Gunawan, M.Si.',
    authorRole: 'Pusat Studi Sumber Daya Air & Lingkungan',
    summary: 'Hutan Ciremai menangkap jutaan meter kubik air hujan setiap tahun, menyaringnya melalui lapisan batuan andesit, dan mengeluarkannya menjadi ratusan mata air jernih abadi.',
    contentParagraphs: [
      'Bagi jutaan masyarakat di Kuningan, Majalengka, dan Cirebon, Gunung Ciremai bukan sekadar siluet megah di ufuk barat. Gunung ini adalah sumber air minum, pengairan sawah, dan penggerak ekonomi utama.',
      'Karakteristik batuan vulkanik kuarter dan tutupan hutan perawan membentuk spons raksasa. Hujan deras yang mengguyur lereng tidak langsung meluncur menjadi banjir lumpur di hilir, melainkan diserap perlahan oleh perakaran pohon hutan montana dan diendapkan dalam akuifer bawah tanah.',
      'Data inventarisasi sumber daya air mencatat lebih dari 54 mata air alami berdebit stabil tersebar di sekeliling kaki Ciremai, termasuk mata air Cisantana, Darma, dan Telaga Cicerem.',
      'Bila tutupan vegetasi di punggungan puncak terdegradasi oleh kebakaran akibat api unggun ilegal atau erosi jalur liar, kapasitas resapan ini menurun secara nyata. Menjaga pohon di puncak pada hakikatnya adalah menjaga kran air di dapur rumah-rumah warga di kaki gunung.'
    ],
    keyTakeaway: 'Setiap jengkal vegetasi yang kita jaga di jalur pendakian adalah benteng penahan debit air yang menghidupi jutaan masyarakat di tiga kabupaten sekitarnya.',
    references: [
      'Badan Geologi & Tata Lingkungan ESDM: Kajian Hidrogeologi Lereng Ciremai.',
      'Bappeda Kabupaten Kuningan: Neraca Sumber Daya Air Kawasan Penyangga Ciremai.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Mata air alami dan vegetasi penahan aliran air permukaan di lereng Ciremai',
    imageCredit: 'Water Conservation Survey'
  }
]
