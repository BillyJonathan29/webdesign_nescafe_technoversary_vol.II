export interface Destination {
  id: string
  name: string
  type: 'trail' | 'waterfall' | 'conservation' | 'lake'
  categoryLabel: string
  elevation: string
  coordinates: [number, number] // [lat, lng]
  locationName: string
  district: string
  description: string
  ecosystemType: string
  keyFeatures: string[]
  visitorGuidelines: string[]
  isVerified: boolean
  imageUrl: string
  imageCaption: string
  imageCredit: string
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'jalur-palutungan',
    name: 'Jalur Pendakian Palutungan',
    type: 'trail',
    categoryLabel: 'Jalur Pendakian',
    elevation: '1.100 – 3.078 mdpl',
    coordinates: [-6.9472, 108.4389],
    locationName: 'Desa Cisantana, Cigugur',
    district: 'Kabupaten Kuningan',
    description: 'Jalur pendakian lereng selatan yang terkenal dengan bentang hutan pinus di awal rute, sumber air Cigowang, dan kontur punggungan yang relatif teratur sebelum menyatu dengan puncak Sangga Buana.',
    ecosystemType: 'Zona Hutan Montana Bawah ke Zona Sub-Alpin',
    keyFeatures: [
      'Titik registrasi resmi Balai Taman Nasional Gunung Ciremai (BTNGC)',
      'Sumber mata air alami di Pos Cigowang (1.450 mdpl)',
      'Vegetasi peralihan pinus, rasamala, hingga hamparan edelweiss di kawah barat'
    ],
    visitorGuidelines: [
      'Wajib deklarasi dan verifikasi kantong sampah di Pos Pemeriksaan Cisantana',
      'Dilarang membuat perapian terbuka di tanah gambut hutan',
      'Maksimal kapasitas tenda di Pos Tanjakan Asu & Pos Kawah Burung'
    ],
    isVerified: true,
    imageUrl: 'images/palutungan.jpg',
    imageCaption: 'Kawasan hutan lereng selatan Ciremai di sekitar rute Palutungan',
    imageCredit: 'Dokumentasi Ekspedisi / Unsplash Curated'
  },
  {
    id: 'jalur-linggajati',
    name: 'Jalur Pendakian Linggajati',
    type: 'trail',
    categoryLabel: 'Jalur Pendakian',
    elevation: '600 – 3.078 mdpl',
    coordinates: [-6.8856, 108.4731],
    locationName: 'Desa Linggajati, Cilimus',
    district: 'Kabupaten Kuningan',
    description: 'Rute pendakian legendaris tertua di lereng timur dengan selisih elevasi tertinggi (~2.478 m). Melintasi hutan lebat dengan keanekaragaman flora pohon tinggi yang masih sangat terjaga.',
    ecosystemType: 'Hutan Hujan Sub-Montana & Montana Atas',
    keyFeatures: [
      'Pos Bapa Tere (2.025 mdpl) dengan tanjakan akar curam',
      'Area persinggahan bersejarah dan kanopi pohon Saninten tua',
      'Akses langsung menuju puncak Sunan Ibu dan bibir kawah timur'
    ],
    visitorGuidelines: [
      'Fisik prima diperlukan karena elevasi awal mulai dari dataran rendah (600 mdpl)',
      'Bawa cadangan air mandiri; tidak ada sumber mata air di atas Pos Kuburan Kuda',
      'Kembalikan seluruh sisa kemasan logistik hingga pos gerbang Linggajati'
    ],
    isVerified: true,
    imageUrl: 'images/linggajati.jpeg',
    imageCaption: 'Punggungan terjal dan tutupan hutan lebat rute timur Linggajati',
    imageCredit: 'Unsplash Landscape Collection'
  },
  {
    id: 'lembah-cilengkrang',
    name: 'Lembah Konservasi Cilengkrang',
    type: 'conservation',
    categoryLabel: 'Kawasan Konservasi & Edukasi',
    elevation: '800 – 1.050 mdpl',
    coordinates: [-6.9289, 108.4558],
    locationName: 'Desa Pajambon, Kramatmulya',
    district: 'Kabupaten Kuningan',
    description: 'Lembah rimbun di kaki Ciremai yang menjadi habitat kunci pemantauan Elang Jawa (Nisaetus bartelsi) dan koridor satwa liar alami dengan dua air terjun alami dan pemandian air panas bumi.',
    ecosystemType: 'Lembah Hutan Hujan Tropika Lembap',
    keyFeatures: [
      'Pusat edukasi pengamatan burung pemangsa (raptor watching)',
      'Curug Sabuk dan Curug Sawer dengan aliran air jernih bebatuan vulkanik',
      'Pemberdayaan masyarakat sadar wisata Desa Pajambon'
    ],
    visitorGuidelines: [
      'Gunakan pemandu lokal saat memasuki koridor pengamatan satwa liar',
      'Jangan gunakan pengeras suara atau pemutar audio suara burung (playback) yang mengganggu satwa',
      'Wajib membawa tumbler air minum guna menekan limbah botol plastik sekali pakai'
    ],
    isVerified: true,
    imageUrl: 'images/lembah-cilengkrang.jpg',
    imageCaption: 'Aliran sungai berbatu dan tajuk kanopi lembah Cilengkrang',
    imageCredit: 'Forest & River Exploration Archive'
  },
  {
    id: 'curug-putri',
    name: 'Curug Putri & Bumi Perkemahan Palutungan',
    type: 'waterfall',
    categoryLabel: 'Zona Penyangga Wisata Alam',
    elevation: '1.050 mdpl',
    coordinates: [-6.9531, 108.4412],
    locationName: 'Cisantana, Cigugur',
    district: 'Kabupaten Kuningan',
    description: 'Air terjun berundak setinggi sekitar 20 meter di dasar lembah berhawa sejuk, dikelilingi hutan pinus dan formasi batuan andesit hasil erupsi masa lampau Gunung Ciremai.',
    ecosystemType: 'Zona Pemanfaatan Terbatas Hutan Pinus',
    keyFeatures: [
      'Mata air pegunungan dengan kejernihan tinggi',
      'Zona camping ramah keluarga dengan batas tegas zona konservasi inti',
      'Sentra edukasi pemilahan sampah organik dan anorganik'
    ],
    visitorGuidelines: [
      'Dilarang mencuci peralatan makan memakai sabun kimia langsung di badan air sungai',
      'Gunakan jalur setapak batu yang telah disediakan agar tidak memicu erosi tebing',
      'Seluruh puntung rokok wajib disimpan dalam asbak saku portable'
    ],
    isVerified: true,
    imageUrl: 'images/curug-putrii.jpeg',
    imageCaption: 'Kawasan air terjun dan hutan lereng Gunung Ciremai',
    imageCredit: 'Nature Waterways Archive'
  },
  {
    id: 'jalur-linggasana',
    name: 'Jalur Pendakian Linggasana',
    type: 'trail',
    categoryLabel: 'Jalur Pendakian',
    elevation: '680 – 3.078 mdpl',
    coordinates: [-6.8978, 108.4682],
    locationName: 'Desa Linggasana, Cilimus',
    district: 'Kabupaten Kuningan',
    description: 'Jalur pendakian yang melintasi punggungan alami bersebelahan dengan Linggajati, memiliki vegetasi bambu pegunungan dan pohon ki hujan lebat dengan udara yang sangat tenang.',
    ecosystemType: 'Hutan Pegunungan Rendah & Punggungan Timur',
    keyFeatures: [
      'Kepadatan pendaki lebih rendah dibanding rute utama',
      'Pos Batu Lingga sebagai situs penanda geologis alami',
      'Titik persimpangan rute puncak di Pos Sangga Buana'
    ],
    visitorGuidelines: [
      'Patuhi batas jalur; hindari membuat jalan pintas (switchback cut) yang merusak tanah',
      'Registrasi resmi melalui booking online BTNGC wajib ditunjukkan kepada petugas',
      'Dilarang meninggalkan tisu basah di sepanjang lintasan punggungan'
    ],
    isVerified: true,
    imageUrl: 'images/linggasana.jpeg',
    imageCaption: 'Pemandangan kabut pagi di punggungan timur Gunung Ciremai',
    imageCredit: 'Highland Ridge Series'
  },
  {
    id: 'situ-cicerem',
    name: 'Telaga Biru Cicerem (Zona Resapan Kaki Ciremai)',
    type: 'lake',
    categoryLabel: 'Zona Penyangga & Mata Air',
    elevation: '315 mdpl',
    coordinates: [-6.8394, 108.4117],
    locationName: 'Desa Kaduela, Pasawahan',
    district: 'Kabupaten Kuningan',
    description: 'Danau alami berair sangat bening di utara kaki Gunung Ciremai yang terbentuk dari patahan vulkanik, berfungsi sebagai penampung mata air utama dan habitat ikan air tawar alami.',
    ecosystemType: 'Danau Vulkanik Dataran Kaki Gunung',
    keyFeatures: [
      'Dasar danau terlihat jelas dengan batuan vulkanik berlumut',
      'Pohon beringin dan trembesi purba yang mengikat debit air tanah',
      'Contoh model ekowisata berbasis komunitas desa lokal'
    ],
    visitorGuidelines: [
      'Tidak diperkenankan memberi pakan buatan yang tidak sesuai kepada ekosistem perairan',
      'Dilarang menggunakan perahu bermesin bahan bakar fosil',
      'Patuhi area batas aman pelindung akar pohon penahan tebing'
    ],
    isVerified: true,
    imageUrl: 'images/talaga-biru.jpg',
    imageCaption: 'Kejernihan air danau alami yang bersumber dari resapan Gunung Ciremai',
    imageCredit: 'Aquatic Spring Ecosystems'
  }
]
