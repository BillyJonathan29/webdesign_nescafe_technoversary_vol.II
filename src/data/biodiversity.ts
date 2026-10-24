export interface Species {
  id: string
  commonName: string
  scientificName: string
  family: string
  type: 'fauna' | 'flora'
  categoryLabel: string
  iucnStatus: 'Kritis (CR)' | 'Terancam (EN)' | 'Rentan (VU)' | 'Risiko Rendah (LC)' | 'Dilindungi Nasional'
  iucnStatusCode: 'CR' | 'EN' | 'VU' | 'LC' | 'PROT'
  habitatZonation: string
  elevationRange: string
  description: string
  ecologicalRole: string
  conservationNotes: string
  scientificReference: string
  imageUrl: string
  imageCredit: string
  verifiedSource: string
}

export const BIODIVERSITY: Species[] = [
  {
    id: 'elang-jawa',
    commonName: 'Elang Jawa',
    scientificName: 'Nisaetus bartelsi',
    family: 'Accipitridae',
    type: 'fauna',
    categoryLabel: 'Burung Pemangsa Endemik',
    iucnStatus: 'Terancam (EN)',
    iucnStatusCode: 'EN',
    habitatZonation: 'Hutan Montana Bawah & Lembah Lembap',
    elevationRange: '800 – 2.200 mdpl',
    description: 'Burung pemangsa endemik pulau Jawa yang menjadi maskot satwa nasional. Memiliki jambul khas di kepala, bulu cokelat keemasan di dada, dan memerlukan pohon kanopi tinggi seperti rasamala untuk tempat bersarang.',
    ecologicalRole: 'Apex predator burung yang mengendalikan populasi mamalia kecil, kadal, dan burung hutan.',
    conservationNotes: 'Terpantau aktif bereproduksi di kawasan Lembah Cilengkrang lereng barat-selatan Ciremai. Ancaman utama meliputi fragmentasi habitat dan perburuan liar.',
    scientificReference: 'IUCN Red List of Threatened Species 2023; Balai TN Gunung Ciremai Monitoring Report',
    imageUrl: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=1200&q=80',
    imageCredit: 'Raptor Conservation Library / Unsplash Curated',
    verifiedSource: 'IUCN Red List (EN) & Permen LHK P.106/2018'
  },
  {
    id: 'macan-tutul-jawa',
    commonName: 'Macan Tutul Jawa',
    scientificName: 'Panthera pardus melas',
    family: 'Felidae',
    type: 'fauna',
    categoryLabel: 'Karnivora Puncak',
    iucnStatus: 'Kritis (CR)',
    iucnStatusCode: 'CR',
    habitatZonation: 'Hutan Hujan Sub-Montana & Montana Lebat',
    elevationRange: '700 – 2.500 mdpl',
    description: 'Subspesies macan tutul endemik Jawa yang memiliki pola tutul roset rapat atau melanistik (macan kumbang). Bersifat soliter dan teritorial, memanjat pohon untuk mengintai mangsa.',
    ecologicalRole: 'Predator puncak mamalia darat yang menjaga keseimbangan populasi babi hutan dan kijang.',
    conservationNotes: 'Kamera trap BTNGC berulang kali merekam keberadaan individu aktif di zona rimba Ciremai. Upaya translokasi dan pelepasliaran secara berkala dipantau ketat.',
    scientificReference: 'IUCN Red List Category: Critically Endangered (2021 assessment)',
    imageUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    imageCredit: 'Wild Feline Archive / Unsplash Curated',
    verifiedSource: 'IUCN Red List (CR) & Evaluasi Habitat BTNGC'
  },
  {
    id: 'surili-jawa',
    commonName: 'Surili Jawa',
    scientificName: 'Presbytis comata',
    family: 'Cercopithecidae',
    type: 'fauna',
    categoryLabel: 'Primata Arboreal Endemik',
    iucnStatus: 'Rentan (VU)',
    iucnStatusCode: 'VU',
    habitatZonation: 'Kanopi Hutan Pegunungan Primer',
    elevationRange: '600 – 2.000 mdpl',
    description: 'Primata berbulu abu-abu kehitaman dengan jambul khas dan perut berwarna putih keperakan. Hidup berkelompok kecil di tajuk-tajuk pohon tinggi dan pemalu terhadap keberadaan manusia.',
    ecologicalRole: 'Pemencar biji buah hutan dan konsumen selektif daun muda serta pucuk flora pegunungan.',
    conservationNotes: 'Sangat sensitif terhadap kebisingan aktivitas manusia dan jalur setapak yang terlalu ramai di luar koridor resmi pendakian.',
    scientificReference: 'Primate Conservation Assessment Java; Nijman et al. (2020)',
    imageUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=80',
    imageCredit: 'Arboreal Wildlife Archive / Unsplash Curated',
    verifiedSource: 'IUCN Red List (VU) & Balai TNGC Data Lapangan'
  },
  {
    id: 'ekek-geling-jawa',
    commonName: 'Ekek Geling Jawa',
    scientificName: 'Cissa thalassina',
    family: 'Corvidae',
    type: 'fauna',
    categoryLabel: 'Burung Endemik Terancam',
    iucnStatus: 'Kritis (CR)',
    iucnStatusCode: 'CR',
    habitatZonation: 'Hutan Lumut Pegunungan Bawah',
    elevationRange: '1.000 – 1.800 mdpl',
    description: 'Burung berkicau berbulu hijau zamrud terang dengan topeng hitam pekat di sekitar mata dan paruh merah tua mencolok. Sangat bergantung pada hutan pegunungan berlumut primer yang lebat.',
    ecologicalRole: 'Insektivora kanopi tengah pemangsa serangga kayu, ulat hutan, dan amfibi kecil.',
    conservationNotes: 'Salah satu burung paling terancam punah di dunia akibat perburuan sangkar di masa lampau. Ciremai menjadi salah satu benteng populasi liar terakhir.',
    scientificReference: 'BirdLife International Red List Authority (2023)',
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80',
    imageCredit: 'Avian Studies Archive / Unsplash Curated',
    verifiedSource: 'BirdLife International & BTNGC Species Inventory'
  },
  {
    id: 'edelweiss-jawa',
    commonName: 'Edelweiss Jawa (Bunga Senduro)',
    scientificName: 'Anaphalis javanica',
    family: 'Asteraceae',
    type: 'flora',
    categoryLabel: 'Tumbuhan Pionir Sub-Alpin',
    iucnStatus: 'Dilindungi Nasional',
    iucnStatusCode: 'PROT',
    habitatZonation: 'Zona Sub-Alpin & Tebing Kawah Terbuka',
    elevationRange: '2.400 – 3.078 mdpl',
    description: 'Tumbuhan semak pionir yang mampu bertahan di tanah vulkanik miskin hara dan terpaan angin kencang di kawasan bibir kawah Ciremai. Daunnya dilapisi bulu halus keputihan untuk mencegah dehidrasi.',
    ecologicalRole: 'Pencegah erosi tebing kawah curam dan sumber pakan nektar bagi serangga sub-alpin.',
    conservationNotes: 'DILARANG KERAS dipetik dalam bentuk apapun. Petugas pos jalur Ciremai menerapkan pemeriksaan ketat pada tas ransel seluruh pendaki turun.',
    scientificReference: 'Peraturan Menteri LHK No. P.106/MENLHK/SETJEN/KUM.1/12/2018',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    imageCredit: 'Alpine Botany Archive / Unsplash Curated',
    verifiedSource: 'Permen LHK No. P.106/2018'
  },
  {
    id: 'saninten',
    commonName: 'Saninten (Kastanya Jawa)',
    scientificName: 'Castanopsis argentea',
    family: 'Fagaceae',
    type: 'flora',
    categoryLabel: 'Pohon Kanopi Primer',
    iucnStatus: 'Terancam (EN)',
    iucnStatusCode: 'EN',
    habitatZonation: 'Hutan Hujan Pegunungan Bawah',
    elevationRange: '800 – 1.600 mdpl',
    description: 'Pohon raksasa hutan hujan Jawa yang batangnya dapat tumbuh tegak melampaui 35 meter. Buahnya dilindungi kulit berduri mirip rambutan yang berisi biji bernutrisi tinggi kesukaan satwa.',
    ecologicalRole: 'Penyokong tajuk utama hutan, penahan cadangan air tanah dalam, dan sumber makanan esensial bagi primata dan tupai.',
    conservationNotes: 'Mengalami penurunan populasi di seluruh Jawa karena penebangan masa lalu; pohon tua berukuran besar dilindungi ketat di kawasan inti Ciremai.',
    scientificReference: 'IUCN Red List assessment for Asian Castanopsis species',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    imageCredit: 'Old Growth Forest Survey / Unsplash Curated',
    verifiedSource: 'IUCN Red List (EN) & Herbarium Bogoriense Records'
  },
  {
    id: 'jamuju',
    commonName: 'Jamuju / Cemara Gunung',
    scientificName: 'Dacrycarpus imbricatus',
    family: 'Podocarpaceae',
    type: 'flora',
    categoryLabel: 'Konifer Pegunungan Tua',
    iucnStatus: 'Risiko Rendah (LC)',
    iucnStatusCode: 'LC',
    habitatZonation: 'Hutan Montana & Punggungan Berangin',
    elevationRange: '1.400 – 2.800 mdpl',
    description: 'Pohon jarum runcing khas pegunungan tropika dengan tajuk melebar teratur dan batang berlumut tebal. Tahan terhadap terpaan kabut dingin dan kelembapan ekstrem.',
    ecologicalRole: 'Tempat bertengger bagi elang dan epifit lumut serta anggrek pegunungan.',
    conservationNotes: 'Membentuk asosiasi hutan konifer tropis yang menstabilkan lereng curam di atas jalur Palutungan dan Linggajati.',
    scientificReference: 'Flora Malesiana Series; IUCN Least Concern Catalog',
    imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    imageCredit: 'Montane Flora Archive / Unsplash Curated',
    verifiedSource: 'IUCN Red List (LC) & Balai TNGC'
  },
  {
    id: 'anggrek-ciremai',
    commonName: 'Anggrek Epifit Ciremai',
    scientificName: 'Bulbophyllum ciremaiense',
    family: 'Orchidaceae',
    type: 'flora',
    categoryLabel: 'Anggrek Endemik Lokal',
    iucnStatus: 'Dilindungi Nasional',
    iucnStatusCode: 'PROT',
    habitatZonation: 'Batang Pohon Berlumut Montana Lembap',
    elevationRange: '1.200 – 1.900 mdpl',
    description: 'Spesies anggrek mini yang dinamai langsung menurut Gunung Ciremai. Hidup menempel pada kulit pohon tua yang lembap tanpa merugikan pohon inangnya.',
    ecologicalRole: 'Indikator biologi kemurnian udara dan kelembapan konstan ekosistem hutan lumut.',
    conservationNotes: 'Sangat rentan terhadap perubahan iklim mikro dan pengambilan ilegal oleh kolektor tanaman hias.',
    scientificReference: 'Jurnal Biologi Tropika & Dokumentasi Inventarisasi Hayati BTNGC',
    imageUrl: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1200&q=80',
    imageCredit: 'Botanical Epiphyte Collection / Unsplash Curated',
    verifiedSource: 'Publikasi Taksonomi Flora Balai Penelitian TNGC'
  }
]
