import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Search,
  BookOpen,
  Leaf,
  X,
  ChevronRight,
  Camera,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'
import { BIODIVERSITY, Species } from '../data/biodiversity'
import { FIELD_NOTES, Article } from '../data/fieldNotes'
import { useLanguage } from '../context/LanguageContext'

export default function FieldNotes() {
  const [searchParams] = useSearchParams()
  const initialSpeciesId = searchParams.get('species')
  const initialSlug = searchParams.get('slug')
  const initialTab = searchParams.get('tab')
  const { lang } = useLanguage()

  const [activeTab, setActiveTab] = useState<'biodiversity' | 'articles' | 'gallery'>(
    initialTab === 'articles' ? 'articles' : initialSpeciesId ? 'biodiversity' : 'biodiversity'
  )

  const [bioSearch, setBioSearch] = useState('')
  const [bioFilter, setBioFilter] = useState<'all' | 'fauna' | 'flora' | 'threatened'>('all')
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null)

  const [articleSearch, setArticleSearch] = useState('')
  const [articleCategory, setArticleCategory] = useState<string>('all')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  useEffect(() => {
    if (initialSpeciesId) {
      const match = BIODIVERSITY.find((s) => s.id === initialSpeciesId)
      if (match) {
        setSelectedSpecies(match)
        setActiveTab('biodiversity')
      }
    }
    if (initialSlug) {
      const match = FIELD_NOTES.find((a) => a.slug === initialSlug)
      if (match) {
        setSelectedArticle(match)
        setActiveTab('articles')
      }
    }
  }, [initialSpeciesId, initialSlug])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedSpecies) setSelectedSpecies(null)
        if (selectedArticle) setSelectedArticle(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedSpecies, selectedArticle])

  const filteredSpecies = useMemo(() => {
    return BIODIVERSITY.filter((item) => {
      const matchesSearch =
        item.commonName.toLowerCase().includes(bioSearch.toLowerCase()) ||
        item.scientificName.toLowerCase().includes(bioSearch.toLowerCase()) ||
        item.family.toLowerCase().includes(bioSearch.toLowerCase()) ||
        item.description.toLowerCase().includes(bioSearch.toLowerCase())

      let matchesFilter = true
      if (bioFilter === 'fauna') matchesFilter = item.type === 'fauna'
      if (bioFilter === 'flora') matchesFilter = item.type === 'flora'
      if (bioFilter === 'threatened') {
        matchesFilter = item.iucnStatusCode === 'CR' || item.iucnStatusCode === 'EN'
      }

      return matchesSearch && matchesFilter
    })
  }, [bioSearch, bioFilter])

  const filteredArticles = useMemo(() => {
    return FIELD_NOTES.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(articleSearch.toLowerCase()) ||
        item.summary.toLowerCase().includes(articleSearch.toLowerCase()) ||
        item.author.toLowerCase().includes(articleSearch.toLowerCase())

      const matchesCategory =
        articleCategory === 'all' || item.category === articleCategory

      return matchesSearch && matchesCategory
    })
  }, [articleSearch, articleCategory])

  return (
    <div className="bg-[#060e09] min-h-screen text-white pt-24 pb-20 font-['Mori',sans-serif]">
      {/* Header Banner */}
      <div className="border-b border-white/10 bg-[#0a1610] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <Link to="/" className="hover:text-emerald-300">
              {lang === 'ID' ? 'Beranda' : 'Home'}
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white font-medium">
              {lang === 'ID' ? 'Dokumentasi & Hayati' : 'Biodiversity & Research'}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-400">
                Biodiversity Monograph &amp; Journal
              </span>
              <h1 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
                {lang === 'ID' ? 'Indeks Keanekaragaman Hayati Ciremai' : 'Ciremai Biodiversity Index & Field Journal'}
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {lang === 'ID'
                  ? 'Katalog taksonomi spesies endemik, status perlindungan IUCN Red List, dan monograf ekologi pegunungan soliter tertinggi Jawa Barat.'
                  : 'Taxonomic catalog of endemic flora & fauna, IUCN conservation status, and ecological research monographs from Mount Ciremai.'}
              </p>
            </div>

            {/* Main Tabs */}
            <div className="flex items-center gap-1.5 bg-white/[0.04] p-1.5 border border-white/10 rounded-full self-start lg:self-end">
              <button
                type="button"
                onClick={() => setActiveTab('biodiversity')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'biodiversity'
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                <span>{lang === 'ID' ? 'Spesies Hayati' : 'Species'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('articles')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'articles'
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{lang === 'ID' ? 'Jurnal Lapangan' : 'Field Notes'}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('gallery')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === 'gallery'
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>{lang === 'ID' ? 'Galeri Foto' : 'Photo Gallery'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* TAB 1: BIODIVERSITY DIRECTORY */}
        {activeTab === 'biodiversity' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0a1610] border border-white/10">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={lang === 'ID' ? 'Cari nama lokal, ilmiah, famili...' : 'Search common or scientific name...'}
                  value={bioSearch}
                  onChange={(e) => setBioSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
                {[
                  { id: 'all', label: 'Semua Spesies' },
                  { id: 'fauna', label: 'Fauna Endemik' },
                  { id: 'flora', label: 'Flora Pegunungan' },
                  { id: 'threatened', label: 'Terancam Punah' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setBioFilter(f.id as typeof bioFilter)}
                    className={`px-3.5 py-1.5 rounded-full border transition-all ${
                      bioFilter === f.id
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-semibold'
                        : 'bg-white/[0.03] border-white/10 text-neutral-300 hover:border-white/25'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredSpecies.map((species) => (
                <div
                  key={species.id}
                  onClick={() => setSelectedSpecies(species)}
                  className="group bg-[#0f2218] border border-white/10 hover:border-emerald-400/50 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={species.imageUrl}
                      alt={species.commonName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2218] via-transparent to-black/30" />
                    
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-emerald-300">
                      {species.iucnStatus}
                    </div>
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                        {species.categoryLabel}
                      </span>
                      <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mt-0.5">
                        {species.commonName}
                      </h3>
                      <p className="text-[11px] text-neutral-400 italic font-serif">
                        {species.scientificName}
                      </p>
                      <p className="text-neutral-300 mt-2 line-clamp-2 leading-relaxed">
                        {species.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                      <span>{species.elevationRange}</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
                        Detail <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: ARTICLES */}
        {activeTab === 'articles' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0a1610] border border-white/10">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={lang === 'ID' ? 'Cari judul artikel atau topik...' : 'Search article title...'}
                  value={articleSearch}
                  onChange={(e) => setArticleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
                {[
                  { id: 'all', label: 'Semua Kategori' },
                  { id: 'Ekologi & Habitat', label: 'Ekologi' },
                  { id: 'Etika Wisata', label: 'Etika Wisata' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setArticleCategory(c.id)}
                    className={`px-3.5 py-1.5 rounded-full border transition-all ${
                      articleCategory === c.id
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-semibold'
                        : 'bg-white/[0.03] border-white/10 text-neutral-300 hover:border-white/25'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-[#0f2218] border border-white/10 hover:border-emerald-400/50 rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                    <span>{article.author}</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      Baca Jurnal <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: GALLERY */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BIODIVERSITY.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedSpecies(item)}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 cursor-pointer bg-[#0f2218]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.commonName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-xs font-bold text-white">{item.commonName}</span>
                  <span className="text-[10px] text-emerald-300 italic font-serif">{item.scientificName}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SPECIES DETAIL MODAL */}
      {selectedSpecies && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative w-full max-w-2xl bg-[#0a1610] border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedSpecies(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-neutral-300 hover:text-white border border-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden shrink-0">
              <img
                src={selectedSpecies.imageUrl}
                alt={selectedSpecies.commonName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1610] via-transparent to-black/30" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 text-[10px] font-semibold uppercase">
                  {selectedSpecies.iucnStatus}
                </span>
                <h2 className="text-2xl font-bold text-white mt-1.5">
                  {selectedSpecies.commonName}
                </h2>
                <p className="text-xs text-emerald-300 italic font-serif">
                  {selectedSpecies.scientificName} &middot; {selectedSpecies.family}
                </p>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs leading-relaxed">
              <div className="grid grid-cols-2 gap-4 bg-white/[0.03] p-3.5 rounded-2xl border border-white/10">
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase font-semibold block">Zona Elevasi</span>
                  <span className="text-white font-medium">{selectedSpecies.elevationRange}</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase font-semibold block">Habitat Zonasi</span>
                  <span className="text-white font-medium">{selectedSpecies.habitatZonation}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                  Deskripsi &amp; Morfologi
                </h4>
                <p className="text-neutral-300">{selectedSpecies.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                  Peran Ekologis di Ciremai
                </h4>
                <p className="text-neutral-300">{selectedSpecies.ecologicalRole}</p>
              </div>

              <div className="bg-emerald-950/40 border border-emerald-500/20 p-3.5 rounded-2xl">
                <h4 className="font-semibold text-emerald-300 uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Catatan Konservasi BTNGC
                </h4>
                <p className="text-neutral-300">{selectedSpecies.conservationNotes}</p>
              </div>

              <div className="text-[10px] text-neutral-400 pt-2 border-t border-white/10">
                Rujukan Verifikasi: {selectedSpecies.scientificReference}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE DETAIL MODAL */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative w-full max-w-3xl bg-[#0a1610] border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-neutral-300 hover:text-white border border-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 overflow-y-auto space-y-5 text-xs leading-relaxed">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-semibold">
                {selectedArticle.category} &middot; {selectedArticle.date}
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {selectedArticle.title}
              </h2>

              <p className="text-sm text-neutral-300 italic border-l-2 border-emerald-400 pl-4 py-1">
                {selectedArticle.subtitle}
              </p>

              <div className="text-neutral-400 text-[11px]">
                Oleh: <strong className="text-white">{selectedArticle.author}</strong> ({selectedArticle.authorRole})
              </div>

              <div className="space-y-3 pt-3 text-sm text-neutral-200 leading-relaxed font-sans border-t border-white/10">
                {selectedArticle.contentParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 text-xs">
                <span className="font-semibold text-emerald-300 block mb-1">Key Ecological Takeaway:</span>
                <p className="text-neutral-200">{selectedArticle.keyTakeaway}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
