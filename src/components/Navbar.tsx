import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Compass, Leaf, BookOpen, CheckSquare, PhoneCall, Info, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { lang, setLang } = useLanguage()

  const navLinks = [
    { to: '/', label: lang === 'ID' ? 'Beranda' : 'Home', icon: Leaf },
    { to: '/explore', label: lang === 'ID' ? 'Peta & Zonasi' : 'Zonation & Map', icon: Compass },
    { to: '/field-notes', label: lang === 'ID' ? 'Biodiversitas' : 'Biodiversity', icon: BookOpen },
    { to: '/zero-waste', label: lang === 'ID' ? 'Etika Zero-Waste' : 'Zero-Waste', icon: CheckSquare },
    { to: '/about', label: lang === 'ID' ? 'Tentang TNGC' : 'About TNGC', icon: Info },
    { to: '/contact', label: lang === 'ID' ? 'Kontak Ranger' : 'Ranger Contact', icon: PhoneCall },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-['Mori',sans-serif] ${
        isScrolled
          ? 'bg-[#060e09]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-2'
          : 'bg-[#060e09]/60 backdrop-blur-md border-b border-white/[0.05] py-3.5'
      }`}
    >
      {/* Top Status Ticker Strip */}
      <div className="hidden lg:block border-b border-white/[0.04] bg-white/[0.015] text-[11px] text-emerald-300/80 tracking-wide pb-1.5 mb-1.5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {lang === 'ID' ? 'Status Konservasi: Terjaga' : 'Conservation Status: Monitored'}
            </span>
            <span className="text-white/20">&bull;</span>
            <span className="text-neutral-400">
              {lang === 'ID' ? 'Puncak Ciremai 3.078 mdpl (Atap Jawa Barat)' : 'Ciremai Summit 3,078 masl (West Java Roof)'}
            </span>
            <span className="text-white/20">&bull;</span>
            <span className="text-neutral-400 font-mono text-[10px]">6°53′30″S 108°24′00″E</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-300/90 font-medium">
              {lang === 'ID' ? '4 Rute Pendakian Resmi Beroperasi' : '4 Official Trails Active'}
            </span>
            <span className="text-white/20">&bull;</span>
            <Link
              to="/zero-waste"
              className="text-lime-400 hover:text-lime-300 font-medium transition-colors"
            >
              {lang === 'ID' ? 'Kalkulator Sampah Pendaki →' : 'Hiker Waste Audit →'}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="group focus:outline-none rounded-lg p-1">
          <Logo variant="horizontal" theme="light" size="md" />
        </Link>

        {/* Center: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                    : 'text-neutral-300 hover:text-white hover:bg-white/[0.05]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right: Language Switcher & Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
            className="flex items-center gap-1.5 px-3 py-2 border border-white/10 hover:border-white/20 rounded-full text-neutral-300 hover:text-white transition-all bg-white/[0.03] text-xs font-medium cursor-pointer"
            title={lang === 'ID' ? 'Ganti Bahasa / Switch Language' : 'Switch Language'}
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang}</span>
          </button>

          {/* Primary Action Button */}
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white text-xs font-medium tracking-wide transition-all shadow-[0_4px_20px_-2px_rgba(16,185,129,0.45)] hover:scale-105 active:scale-95"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'ID' ? 'Jelajah Peta' : 'Explore Map'}</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
            className="p-2 border border-white/10 rounded-full text-emerald-400 bg-white/[0.03] text-xs font-bold"
            aria-label="Toggle language"
          >
            {lang}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-neutral-200 hover:text-white bg-white/[0.05] border border-white/10 rounded-xl focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup navigasi menu' : 'Buka navigasi menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-[#060e09]/95 backdrop-blur-2xl px-5 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                      isActive
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-neutral-300 hover:bg-white/[0.05]'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/explore"
                className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-semibold uppercase tracking-wider rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
              >
                <Compass className="w-4 h-4" />
                <span>{lang === 'ID' ? 'Buka Peta Interaktif' : 'Open Interactive Map'}</span>
              </Link>
              <p className="text-[11px] text-neutral-400 text-center">
                Balai Taman Nasional Gunung Ciremai &middot; Kuningan, Jawa Barat
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
