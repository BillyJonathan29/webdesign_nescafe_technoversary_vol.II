import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Compass, Leaf, BookOpen, CheckSquare, PhoneCall, Info } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Beranda', icon: Leaf },
  { to: '/explore', label: 'Eksplorasi & Peta', icon: Compass },
  { to: '/field-notes', label: 'Catatan & Hayati', icon: BookOpen },
  { to: '/zero-waste', label: 'Zero-Waste Guide', icon: CheckSquare },
  { to: '/about', label: 'Tentang', icon: Info },
  { to: '/contact', label: 'Kontak', icon: PhoneCall },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Track scroll state for subtle border appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F5F2E9]/95 backdrop-blur-md border-b border-[#DCDDD2] shadow-xs'
          : 'bg-[#F5F2E9] border-b border-[#DCDDD2]/70'
      }`}
    >
      {/* Top Editorial Utility Strip */}
      <div className="hidden lg:block border-b border-[#DCDDD2]/50 bg-[#EDE8DC]/50 text-[11px] text-[#74604D] tracking-wide">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="font-editorial-sans font-medium text-[#203D32]">
              Taman Nasional Gunung Ciremai
            </span>
            <span className="text-[#DCDDD2]">&bull;</span>
            <span>Titik Tertinggi Jawa Barat (3.078 mdpl)</span>
            <span className="text-[#DCDDD2]">&bull;</span>
            <span>Koordinat 6&deg;53&prime;30&Prime;S 108&deg;24&prime;00&Prime;E</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#203D32] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71816A] animate-pulse"></span>
              Status Jalur: Buka (Cuaca Bersahabat)
            </span>
            <span className="text-[#DCDDD2]">&bull;</span>
            <Link
              to="/zero-waste"
              className="text-[#B77D58] hover:text-[#9A6544] font-medium underline underline-offset-2 transition-colors"
            >
              Cek Checklist Bebas Sampah &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#203D32] rounded-md p-1">
          <Logo variant="horizontal" theme="dark" size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-all duration-150 rounded-sm ${
                  isActive
                    ? 'text-[#203D32] font-semibold border-b-2 border-[#203D32] bg-[#EDE8DC]/40'
                    : 'text-[#292D29]/80 hover:text-[#203D32] hover:bg-[#EDE8DC]/30'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/zero-waste"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#203D32] text-[#F5F2E9] hover:bg-[#172D25] rounded-none border border-[#203D32] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#203D32]"
          >
            <CheckSquare className="w-3.5 h-3.5 text-[#B77D58]" />
            <span>Zero-Waste Guide</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#203D32] hover:bg-[#EDE8DC] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#203D32]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Tutup navigasi menu' : 'Buka navigasi menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DCDDD2] bg-[#F5F2E9] px-4 pt-4 pb-6 shadow-lg animate-in slide-in-from-top duration-150">
          <div className="flex flex-col gap-1.5">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 text-base font-medium rounded-sm ${
                    isActive
                      ? 'bg-[#203D32] text-[#F5F2E9] font-semibold'
                      : 'text-[#292D29] hover:bg-[#EDE8DC]'
                  }`
                }
              >
                <Icon className="w-5 h-5 opacity-80" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
          
          <div className="mt-5 pt-4 border-t border-[#DCDDD2]">
            <Link
              to="/zero-waste"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold uppercase tracking-wider bg-[#203D32] text-[#F5F2E9] rounded-none shadow-xs"
            >
              <CheckSquare className="w-4 h-4 text-[#B77D58]" />
              Panduan Nol Sampah
            </Link>
            <p className="text-[11px] text-[#74604D] text-center mt-2.5">
              Konservasi alam mandiri kawasan Gunung Ciremai &middot; Kuningan, Jabar
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
