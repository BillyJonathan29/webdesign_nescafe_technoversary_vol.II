import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Sparkles, Compass } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

interface Message {
  id: string
  type: 'bot' | 'user'
  text: string
}

const PRESET_RESPONSES_ID: Record<string, string> = {
  jalur: "Gunung Ciremai (3.078 mdpl) memiliki 4 jalur pendakian resmi: 1) Palutungan (Kuningan, air melimpah & ramah pemula), 2) Linggajati (Kuningan, jalur legendaris dengan Tanjakan Bapa Tere yang sangat curam), 3) Apuy (Majalengka, estimasi tempuh tercepat), dan 4) Linggasana (jalur alternatif Linggajati). Setiap pendaki wajib mendaftar online (Booking Simaksi).",
  simaksi: "Pendaftaran Simaksi pendakian Ciremai dilakukan secara online melalui portal resmi BTNGC (bookingciremai.menlhk.go.id). Kuota dibatasi demi menjaga daya dukung ekosistem (carrying capacity). Jangan lupa siapkan surat keterangan sehat dan kartu identitas resmi.",
  satwa: "TNGC merupakan habitat satwa endemik kunci yang dilindungi ketat: Elang Jawa (Nisaetus bartelsi - maskot satwa langka nasional), Macan Tutul Jawa (Panthera pardus melas - apex predator pulau Jawa), Surili (Presbytis comata), dan Ekek Geling Jawa (Cissa thalassina). Dilarang keras memburu atau mengganggu satwa!",
  sampah: "TNGC menerapkan aturan ZERO-WASTE ketat: Tisu basah DILARANG KERAS karena serat plastiknya tidak terurai. Setiap logistik pendaki dicek saat naik dan wajib dibawa turun kembali sesuai checklist sampah di pos pemeriksaan.",
  zonasi: "Kawasan TNGC dibagi menjadi beberapa zonasi ekologi: Zona Inti (kawasan mutlak dilindungi di sekitar kawah & puncak 3.078m), Zona Rimba (koridor jelajah macan tutul & elang jawa), dan Zona Pemanfaatan (lokasi jalur trekking resmi dan wisata alam berizin).",
}

const PRESET_RESPONSES_EN: Record<string, string> = {
  jalur: "Mount Ciremai (3,078 masl) has 4 official climbing trails: 1) Palutungan (Kuningan, abundant water & gentler ascent), 2) Linggajati (Kuningan, legendary steep trail with infamous Bapa Tere climb), 3) Apuy (Majalengka, fastest ascent time), and 4) Linggasana. Online registration is strictly required for all climbers.",
  simaksi: "Climbing permits (Simaksi) must be booked online through the official BTNGC portal. Daily quotas are enforced to protect ecosystem carrying capacity. Please prepare a medical health certificate and official ID.",
  satwa: "Mount Ciremai National Park protects critical endemic wildlife: Javan Hawk-Eagle (Nisaetus bartelsi - national emblem bird), Javan Leopard (Panthera pardus melas - apex predator), Javan Surili (Presbytis comata), and Javan Green Magpie. Hunting or disturbing wildlife is strictly prohibited by law.",
  sampah: "TNGC enforces strict ZERO-WASTE regulations: Wet wipes/wet tissues are STRICTLY PROHIBITED as they contain non-biodegradable microplastics. All packaging logged at the entry checkpoint must be verified upon descent.",
  zonasi: "TNGC uses ecological zonation: Core Zone (strictly protected sanctuary around caldera & 3,078m summit), Wilderness Zone (leopard & eagle habitat), and Utilization Zone (designated ecotourism & hiking corridors).",
}

const getBotResponse = (input: string, lang: 'ID' | 'EN'): string => {
  const lower = input.toLowerCase()
  const responses = lang === 'ID' ? PRESET_RESPONSES_ID : PRESET_RESPONSES_EN

  if (lower.includes('jalur') || lower.includes('rute') || lower.includes('trail') || lower.includes('route') || lower.includes('apuy') || lower.includes('palutungan') || lower.includes('linggajati')) {
    return responses.jalur
  }
  if (lower.includes('simaksi') || lower.includes('daftar') || lower.includes('booking') || lower.includes('izin') || lower.includes('permit') || lower.includes('register')) {
    return responses.simaksi
  }
  if (lower.includes('satwa') || lower.includes('hewan') || lower.includes('elang') || lower.includes('macan') || lower.includes('animal') || lower.includes('wildlife') || lower.includes('bird')) {
    return responses.satwa
  }
  if (lower.includes('sampah') || lower.includes('tisu') || lower.includes('waste') || lower.includes('trash') || lower.includes('plastik') || lower.includes('plastic')) {
    return responses.sampah
  }
  if (lower.includes('zona') || lower.includes('kawasan') || lower.includes('zone') || lower.includes('inti') || lower.includes('rimba')) {
    return responses.zonasi
  }

  return lang === 'ID'
    ? "Terima kasih atas pertanyaan Anda. Sebagai asisten konservasi CiremaiGreen, saya siap membantu informasi seputar jalur pendakian (Palutungan/Linggajati/Apuy), izin simaksi, satwa endemik (Elang Jawa & Macan Tutul), atau tata tertib zero-waste. Ketik salah satu topik tersebut."
    : "Thank you for reaching out. As your CiremaiGreen conservation assistant, I can guide you on hiking trails, Simaksi permits, endemic wildlife (Javan Hawk-Eagle & Leopard), or zero-waste rules. Feel free to ask about any of these topics."
}

export default function Chatbot() {
  const { lang } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatBottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMessages([
      {
        id: 'initial',
        type: 'bot',
        text: lang === 'ID'
          ? "Salam Lestari. Saya Ranger Ciremai, asisten digital konservasi TNGC. Ada yang ingin Anda tanyakan seputar rute pendakian, kuota simaksi, satwa langka, atau etika bebas sampah?"
          : "Greetings. I am Ranger Ciremai, your TNGC conservation digital guide. Can I help you with trails, booking permits, wildlife, or mountain zero-waste ethics?",
      },
    ])
  }, [lang])

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input
    if (!query.trim()) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      text: query,
    }
    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const botReply = getBotResponse(query, lang)
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          type: 'bot',
          text: botReply,
        },
      ])
      setIsTyping(false)
    }, 600)
  }

  const quickPrompts = lang === 'ID'
    ? ['Jalur Pendakian', 'Syarat Simaksi', 'Satwa Langka', 'Aturan Sampah']
    : ['Climbing Trails', 'Simaksi Permits', 'Endemic Wildlife', 'Zero-Waste Rules']

  return (
    <div className="fixed bottom-6 right-6 z-50 font-['Mori',sans-serif]">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[90vw] sm:w-[380px] h-[520px] bg-[#0a1610]/95 backdrop-blur-2xl border border-emerald-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-3"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-emerald-950/80 to-[#07130c] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                    <Compass className="w-5 h-5 animate-spin-slow" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0a1610]"></span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                    Ranger Ciremai AI
                    <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                  </h3>
                  <p className="text-[11px] text-emerald-300/70">
                    {lang === 'ID' ? 'Asisten Digital Konservasi 3.078m' : 'Digital Conservation Guide'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Prompts */}
            <div className="px-4 py-2 bg-black/20 border-b border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="shrink-0 px-2.5 py-1 text-[11px] bg-white/[0.04] hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 text-emerald-200 rounded-full transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl ${
                      m.type === 'user'
                        ? 'bg-emerald-600 text-white rounded-br-none'
                        : 'bg-white/[0.06] text-neutral-200 border border-white/10 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs px-2 py-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.15s]"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.3s]"></span>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="p-3 bg-black/30 border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={lang === 'ID' ? 'Tanyakan seputar Ciremai...' : 'Ask about Ciremai...'}
                className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-400 disabled:opacity-40 disabled:hover:bg-emerald-500 transition-all cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-lime-400 text-white flex items-center justify-center shadow-[0_8px_30px_rgba(16,185,129,0.5)] border border-emerald-300/40 cursor-pointer relative group"
        aria-label="Toggle Ranger AI Chatbot"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-lime-400 ring-4 ring-[#060e09] animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-lime-400 ring-2 ring-[#060e09]"></span>
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  )
}
