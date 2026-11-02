import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Search,
  BookOpen,
  Leaf,
  X,
  ShieldAlert,
  ChevronRight,
  Camera
} from 'lucide-react'
import { BIODIVERSITY, Species } from '../data/biodiversity'
import { FIELD_NOTES, Article } from '../data/fieldNotes'

export default function FieldNotes() {
  const [searchParams] = useSearchParams()
  const initialSpeciesId = searchParams.get('species')
  const initialSlug = searchParams.get('slug')
  const initialTab = searchParams.get('tab')

  // Main active tab: 'biodiversity' | 'articles' | 'gallery'
  const [activeTab, setActiveTab] = useState<'biodiversity' | 'articles' | 'gallery'>(
    initialTab === 'articles' ? 'articles' : initialSpeciesId ? 'biodiversity' : 'biodiversity'
  )

  // Biodiversity filters
  const [bioSearch, setBioSearch] = useState('')
  const [bioFilter, setBioFilter] = useState<'all' | 'fauna' | 'flora' | 'threatened'>('all')
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null)

  // Article filters
  const [articleSearch, setArticleSearch] = useState('')
  const [articleCategory, setArticleCategory] = useState<string>('all')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  // Sync initial query params
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

  // R-32: Handle Escape key to close open dialog modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedSpecies) setSelectedSpecies(null)
        if (selectedArticle) setSelectedArticle(null)
      }
    }
    if (selectedSpecies || selectedArticle) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedSpecies, selectedArticle])

  // Filtered Species
  const filteredSpecies = useMemo(() => {
    return BIODIVERSITY.filter((s) => {
      const matchesSearch =
        s.commonName.toLowerCase().includes(bioSearch.toLowerCase()) ||
        s.scientificName.toLowerCase().includes(bioSearch.toLowerCase()) ||
        s.family.toLowerCase().includes(bioSearch.toLowerCase()) ||
        s.description.toLowerCase().includes(bioSearch.toLowerCase())

      let matchesFilter = true
      if (bioFilter === 'fauna') matchesFilter = s.type === 'fauna'
      if (bioFilter === 'flora') matchesFilter = s.type === 'flora'
      if (bioFilter === 'threatened') {
        matchesFilter = s.iucnStatusCode === 'CR' || s.iucnStatusCode === 'EN'
      }

      return matchesSearch && matchesFilter
    })
  }, [bioSearch, bioFilter])

  // Filtered Articles
  const filteredArticles = useMemo(() => {
    return FIELD_NOTES.filter((a) => {
      const matchesSearch =
        a.title.toLowerCase().includes(articleSearch.toLowerCase()) ||
        a.subtitle.toLowerCase().includes(articleSearch.toLowerCase()) ||
        a.author.toLowerCase().includes(articleSearch.toLowerCase()) ||
        a.summary.toLowerCase().includes(articleSearch.toLowerCase())

      const matchesCat = articleCategory === 'all' || a.category === articleCategory

      return matchesSearch && matchesCat
    })
  }, [articleSearch, articleCategory])

  return (
    <div className="bg-[#F5F2E9] min-h-screen text-[#292D29]">
      {/* Header */}
      <div className="border-b border-[#DCDDD2] bg-[#FAF8F4] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-editorial-sans text-[#74604D]">
            <Link to="/" className="hover:text-[#203D32]">Beranda</Link>
            <span>/</span>
            <span className="text-[#203D32] font-semibold">Direktori Konservasi &amp; Catatan</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B77D58]">
              Conservation Library &amp; Field Journal
            </span>
            <h1 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#203D32] leading-tight">
              Arsip Hayati &amp; Catatan Konservasi Ciremai
            </h1>
            <p className="text-sm sm:text-base text-[#74604D] font-editorial-sans leading-relaxed">
              Kompilasi ilmiah taksonomi flora-fauna terverifikasi serta jurnal lapangan mengenai hidrologi, etika penjelajahan, dan restorasi habitat.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 pt-4 border-t border-[#DCDDD2]">
            <button
              type="button"
              onClick={() => setActiveTab('biodiversity')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border ${
                activeTab === 'biodiversity'
                  ? 'bg-[#203D32] text-[#F5F2E9] border-[#203D32]'
                  : 'bg-[#F5F2E9] text-[#74604D] border-[#DCDDD2] hover:bg-[#EDE8DC]'
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              <span>Direktori Spesies Hayati ({BIODIVERSITY.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('articles')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border ${
                activeTab === 'articles'
                  ? 'bg-[#203D32] text-[#F5F2E9] border-[#203D32]'
                  : 'bg-[#F5F2E9] text-[#74604D] border-[#DCDDD2] hover:bg-[#EDE8DC]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Jurnal Catatan Lapangan ({FIELD_NOTES.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border ${
                activeTab === 'gallery'
                  ? 'bg-[#203D32] text-[#F5F2E9] border-[#203D32]'
                  : 'bg-[#F5F2E9] text-[#74604D] border-[#DCDDD2] hover:bg-[#EDE8DC]'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Galeri Dokumentasi Alam</span>
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: BIODIVERSITY DIRECTORY */}
      {activeTab === 'biodiversity' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Controls: Search + Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#DCDDD2]">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#74604D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama umum, nama ilmiah, atau famili..."
                value={bioSearch}
                onChange={(e) => setBioSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#FAF8F4] border border-[#DCDDD2] text-sm text-[#292D29] placeholder-[#74604D]/60 focus:outline-none focus:border-[#203D32]"
              />
              {bioSearch && (
                <button
                  type="button"
                  onClick={() => setBioSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#74604D]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
              {[
                { id: 'all', label: 'Semua Spesies' },
                { id: 'fauna', label: 'Fauna Satwa' },
                { id: 'flora', label: 'Flora & Tumbuhan' },
                { id: 'threatened', label: 'Status Kritis / Terancam' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setBioFilter(f.id as any)}
                  className={`px-3 py-1.5 border whitespace-nowrap transition-colors ${
                    bioFilter === f.id
                      ? 'bg-[#203D32] text-[#F5F2E9] border-[#203D32] font-semibold'
                      : 'bg-[#FAF8F4] text-[#74604D] border-[#DCDDD2] hover:bg-[#EDE8DC]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Species Empty State */}
          {filteredSpecies.length === 0 && (
            <div className="p-12 text-center border border-[#DCDDD2] bg-[#FAF8F4] my-8 space-y-3">
              <Leaf className="w-8 h-8 text-[#71816A] mx-auto" />
              <h3 className="font-editorial-serif text-xl text-[#203D32]">
                Tidak Ada Spesies yang Cocok
              </h3>
              <p className="text-sm text-[#74604D] max-w-md mx-auto">
                Tidak ditemukan data hayati untuk kata kunci &ldquo;{bioSearch}&rdquo;. Coba gunakan nama latin, nama lokal umum, atau atur ulang kategori filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setBioSearch('')
                  setBioFilter('all')
                }}
                className="px-4 py-2 bg-[#203D32] text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider mt-2 hover:bg-[#172D25] transition-colors"
              >
                Reset Filter Hayati
              </button>
            </div>
          )}

          {/* Species Grid */}
          {filteredSpecies.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredSpecies.map((species) => (
                <div
                  key={species.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedSpecies(species)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedSpecies(species)
                    }
                  }}
                  className="bg-[#FAF8F4] border border-[#DCDDD2] cursor-pointer group hover:border-[#203D32] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#203D32] transition-colors flex flex-col justify-between overflow-hidden shadow-2xs"
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#203D32]/10 border-b border-[#DCDDD2]">
                      <img
                        src={species.imageUrl}
                        alt={species.commonName}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span
                        className={`absolute top-2.5 right-2.5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          species.iucnStatusCode === 'CR'
                            ? 'bg-rose-900 text-rose-100'
                            : species.iucnStatusCode === 'EN'
                            ? 'bg-amber-800 text-amber-100'
                            : 'bg-[#203D32] text-[#F5F2E9]'
                        }`}
                      >
                        {species.iucnStatus}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <p className="text-[10px] font-mono text-[#74604D] uppercase tracking-wider">
                        Famili: {species.family}
                      </p>
                      <h3 className="font-editorial-serif text-xl text-[#203D32] group-hover:text-[#B77D58] transition-colors">
                        {species.commonName}
                      </h3>
                      <p className="text-xs italic text-[#71816A] font-editorial-serif">
                        {species.scientificName}
                      </p>
                      <p className="text-xs text-[#292D29]/80 font-editorial-sans line-clamp-2 leading-relaxed pt-1">
                        {species.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-2">
                    <div className="pt-3 border-t border-[#DCDDD2]/70 flex items-center justify-between text-[11px] text-[#74604D]">
                      <span>Zona: {species.elevationRange}</span>
                      <span className="font-semibold text-[#203D32] group-hover:text-[#B77D58] flex items-center gap-1">
                        <span>Lihat Taksonomi</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: FIELD NOTES ARTICLES */}
      {activeTab === 'articles' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Article Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#DCDDD2]">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#74604D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari judul artikel atau topik ekologi..."
                value={articleSearch}
                onChange={(e) => setArticleSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#FAF8F4] border border-[#DCDDD2] text-sm text-[#292D29] placeholder-[#74604D]/60 focus:outline-none focus:border-[#203D32]"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
              {[
                { id: 'all', label: 'Semua Kategori' },
                { id: 'Ekologi & Habitat', label: 'Ekologi & Habitat' },
                { id: 'Etika Wisata', label: 'Etika Wisata' },
                { id: 'Konservasi Lapangan', label: 'Konservasi Lapangan' },
                { id: 'Hidrologi & Tanah', label: 'Hidrologi & Tanah' },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setArticleCategory(c.id)}
                  className={`px-3 py-1.5 border whitespace-nowrap transition-colors ${
                    articleCategory === c.id
                      ? 'bg-[#203D32] text-[#F5F2E9] border-[#203D32] font-semibold'
                      : 'bg-[#FAF8F4] text-[#74604D] border-[#DCDDD2] hover:bg-[#EDE8DC]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Empty State */}
          {filteredArticles.length === 0 && (
            <div className="p-12 text-center border border-[#DCDDD2] bg-[#FAF8F4] my-8 space-y-3">
              <BookOpen className="w-8 h-8 text-[#B77D58] mx-auto" />
              <h3 className="font-editorial-serif text-xl text-[#203D32]">
                Tidak Ada Jurnal yang Cocok
              </h3>
              <p className="text-sm text-[#74604D] max-w-md mx-auto">
                Tidak ditemukan catatan lapangan untuk kata kunci &ldquo;{articleSearch}&rdquo;. Coba gunakan kata kunci lain atau pilih semua kategori.
              </p>
              <button
                type="button"
                onClick={() => {
                  setArticleSearch('')
                  setArticleCategory('all')
                }}
                className="px-4 py-2 bg-[#203D32] text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider mt-2 hover:bg-[#172D25] transition-colors"
              >
                Reset Filter Artikel
              </button>
            </div>
          )}

          {/* Articles Editorial Grid */}
          {filteredArticles.length > 0 && (
            <div className="space-y-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedArticle(article)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedArticle(article)
                    }
                  }}
                  className="border border-[#DCDDD2] bg-[#FAF8F4] p-6 sm:p-8 cursor-pointer group hover:border-[#203D32] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#203D32] transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-[#74604D] font-mono">
                        <span className="text-[#B77D58] font-semibold uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span>&bull;</span>
                        <span>{article.date}</span>
                        <span>&bull;</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h2 className="font-editorial-serif text-2xl sm:text-3xl text-[#203D32] group-hover:text-[#B77D58] transition-colors leading-snug">
                        {article.title}
                      </h2>

                      <p className="text-sm text-[#74604D] italic font-editorial-serif">
                        {article.subtitle}
                      </p>

                      <p className="text-sm text-[#292D29]/80 font-editorial-sans leading-relaxed line-clamp-2">
                        {article.summary}
                      </p>

                      <div className="pt-3 flex items-center justify-between border-t border-[#DCDDD2]/70 text-xs">
                        <span className="text-[#74604D]">
                          Ditulis oleh <strong>{article.author}</strong> ({article.authorRole})
                        </span>
                        <span className="font-semibold text-[#203D32] group-hover:text-[#B77D58] flex items-center gap-1 uppercase tracking-wider">
                          <span>Buka Jurnal</span>
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-4">
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#203D32]/10 border border-[#DCDDD2]">
                        <img
                          src={article.featuredImage}
                          alt={article.imageCaption}
                          width={640}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-[10px] text-[#74604D] font-mono mt-1 text-right">
                        {article.imageCredit}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: GALLERY */}
      {activeTab === 'gallery' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8 pb-4 border-b border-[#DCDDD2]">
            <h2 className="font-editorial-serif text-2xl text-[#203D32]">
              Dokumentasi Lanskap &amp; Kehidupan Liar
            </h2>
            <p className="text-xs text-[#74604D]">
              Semua foto dikurasi dari dokumentasi ekspedisi terverifikasi dan arsip botani pegunungan Jawa Barat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
                title: 'Punggungan Timur Ciremai',
                caption: 'Tutupan awan pagi di atas zona perbatasan montana dan sub-alpin.',
                credit: 'Highland Ridge Collection'
              },
              {
                url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
                title: 'Hutan Lereng Cisantana',
                caption: 'Jajaran pohon tegakan pinus dan rasamala di ketinggian 1.200 mdpl.',
                credit: 'Forest Survey Archive'
              },
              {
                url: 'images/elang-jawa.jpg',
                title: 'Elang Jawa (Nisaetus bartelsi)',
                caption: 'Burung pemangsa endemik bertengger mengintai di kanopi tajuk hutan.',
                credit: 'Raptor Observation Archive'
              },
              {
                url: 'images/lembah-cilengkrang.jpg',
                title: 'Mata Air dan Curug Lembah',
                caption: 'Aliran air jernih bebatuan vulkanik andesit di kawasan Cilengkrang.',
                credit: 'Freshwater Conservation Survey'
              },
              {
                url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
                title: 'Bunga Edelweiss Sub-Alpin',
                caption: 'Koloni semak Anaphalis javanica di lereng berpasir kawah puncak.',
                credit: 'Alpine Botany Documentation'
              },
              {
                url: 'images/surili-jawa.jpeg',
                title: 'Surili Jawa di Tajuk Pohon',
                caption: 'Primata endemik berbulu abu-abu keperakan pemakan daun muda kanopi.',
                credit: 'Arboreal Primate Studies'
              }
            ].map((img, i) => (
              <div key={i} className="border border-[#DCDDD2] bg-[#FAF8F4] overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#203D32]/10">
                  <img
                    src={img.url}
                    alt={img.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="font-editorial-serif text-lg text-[#203D32]">{img.title}</h3>
                  <p className="text-xs text-[#292D29]/80 font-editorial-sans">{img.caption}</p>
                  <p className="text-[10px] text-[#74604D] font-mono pt-1">Sumber: {img.credit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SPECIES DETAIL MODAL / DRAWER */}
      {selectedSpecies && (
        <div
          className="fixed inset-0 z-50 bg-[#203D32]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedSpecies(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#F5F2E9] border border-[#DCDDD2] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedSpecies(null)}
              className="absolute top-4 right-4 p-2 text-[#74604D] hover:text-[#203D32] bg-[#EDE8DC] rounded-none focus:outline-none"
              aria-label="Tutup detail spesies"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#203D32]/10 border border-[#DCDDD2]">
              <img
                src={selectedSpecies.imageUrl}
                alt={selectedSpecies.commonName}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
              <span
                className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${
                  selectedSpecies.iucnStatusCode === 'CR'
                    ? 'bg-rose-900 text-rose-100'
                    : selectedSpecies.iucnStatusCode === 'EN'
                    ? 'bg-amber-800 text-amber-100'
                    : 'bg-[#203D32] text-[#F5F2E9]'
                }`}
              >
                Status: {selectedSpecies.iucnStatus}
              </span>
            </div>

            {/* Scientific Identity */}
            <div className="space-y-1 pb-4 border-b border-[#DCDDD2]">
              <div className="flex items-center justify-between text-xs text-[#74604D] font-mono">
                <span>Famili: {selectedSpecies.family}</span>
                <span>Elevasi: {selectedSpecies.elevationRange}</span>
              </div>
              <h2 className="font-editorial-serif text-3xl text-[#203D32]">
                {selectedSpecies.commonName}
              </h2>
              <p className="text-base italic text-[#71816A] font-editorial-serif">
                {selectedSpecies.scientificName}
              </p>
            </div>

            {/* Ecological Profile */}
            <div className="space-y-4 text-xs sm:text-sm text-[#292D29]/85 font-editorial-sans leading-relaxed">
              <div>
                <h4 className="font-semibold text-[#203D32] uppercase tracking-wider text-[11px] mb-1">
                  Deskripsi &amp; Habitat:
                </h4>
                <p>{selectedSpecies.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#203D32] uppercase tracking-wider text-[11px] mb-1">
                  Peran Ekologis dalam Ekosistem:
                </h4>
                <p>{selectedSpecies.ecologicalRole}</p>
              </div>

              <div className="p-4 bg-[#EDE8DC] border border-[#DCDDD2]">
                <h4 className="font-semibold text-[#203D32] uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#B77D58]" />
                  Catatan Konservasi &amp; Kerentanan:
                </h4>
                <p className="text-xs text-[#74604D]">{selectedSpecies.conservationNotes}</p>
              </div>

              <div className="pt-2 text-[11px] text-[#74604D] border-t border-[#DCDDD2]">
                <strong>Rujukan Ilmiah:</strong> {selectedSpecies.scientificReference}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedSpecies(null)}
                className="px-5 py-2.5 bg-[#203D32] text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#203D32]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedArticle(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#F5F2E9] border border-[#DCDDD2] max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-[#74604D] hover:text-[#203D32] bg-[#EDE8DC] rounded-none focus:outline-none"
              aria-label="Tutup artikel"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Meta */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#74604D] font-mono">
                <span className="text-[#B77D58] font-semibold uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <span>&bull;</span>
                <span>{selectedArticle.date}</span>
                <span>&bull;</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#203D32] leading-tight">
                {selectedArticle.title}
              </h2>
              <p className="text-sm sm:text-base text-[#74604D] italic font-editorial-serif">
                {selectedArticle.subtitle}
              </p>
              <p className="text-xs text-[#203D32] font-semibold">
                Ditulis oleh {selectedArticle.author} ({selectedArticle.authorRole})
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#203D32]/10 border border-[#DCDDD2]">
              <img
                src={selectedArticle.featuredImage}
                alt={selectedArticle.imageCaption}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[10px] text-[#74604D] font-mono -mt-4">
              {selectedArticle.imageCaption} &bull; Kredit: {selectedArticle.imageCredit}
            </p>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#292D29]/90 font-editorial-sans leading-relaxed pt-2">
              {selectedArticle.contentParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Key Takeaway Box */}
            <div className="p-5 bg-[#EDE8DC] border-l-4 border-[#203D32] space-y-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#203D32]">
                Poin Lapangan Kunci:
              </h4>
              <p className="text-xs sm:text-sm text-[#203D32] font-editorial-serif italic">
                &ldquo;{selectedArticle.keyTakeaway}&rdquo;
              </p>
            </div>

            {/* References */}
            <div className="pt-4 border-t border-[#DCDDD2] text-xs text-[#74604D] space-y-1">
              <h5 className="font-semibold text-[#203D32] uppercase tracking-wider text-[10px]">
                Daftar Pustaka &amp; Rujukan:
              </h5>
              <ul className="list-disc list-inside space-y-0.5">
                {selectedArticle.references.map((ref, idx) => (
                  <li key={idx}>{ref}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-[#203D32] text-[#F5F2E9] text-xs font-semibold uppercase tracking-wider"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
