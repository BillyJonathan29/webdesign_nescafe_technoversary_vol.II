import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SmoothScroll from './components/SmoothScroll'
import Chatbot from './components/Chatbot'
import { LanguageProvider } from './context/LanguageContext'
import Home from './pages/Home'
import About from './pages/About'
import Explore from './pages/Explore'
import FieldNotes from './pages/FieldNotes'
import ZeroWaste from './pages/ZeroWaste'
import Contact from './pages/Contact'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <SmoothScroll>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#060e09] text-neutral-100 selection:bg-emerald-500/30 selection:text-emerald-200">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/field-notes" element={<FieldNotes />} />
                <Route path="/zero-waste" element={<ZeroWaste />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
            <Chatbot />
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </LanguageProvider>
  )
}
