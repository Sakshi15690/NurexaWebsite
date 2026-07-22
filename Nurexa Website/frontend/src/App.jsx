import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles, ShieldCheck, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import InsightsPage from './pages/InsightsPage'
import ContactPage from './pages/ContactPage'
import AssessmentPage from './pages/AssessmentPage'
import { LoadingScreen } from './components/LoadingScreen'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Assessment', path: '/assessment' },
  { name: 'Insights', path: '/insights' },
  { name: 'Contact', path: '/contact' }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const shouldReduceMotion = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (!window.matchMedia('(pointer: fine)').matches) return undefined

    const onMove = (event) => setCursor({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="min-h-screen text-slate-100">
      <LoadingScreen />
      <Helmet>
        <title>Nurexa Inc | Assess. Automate. Accelerate.</title>
        <meta name="description" content="Nurexa helps businesses assess opportunities, automate processes, and accelerate digital transformation with human-centered AI." />
      </Helmet>

      <motion.header
        initial={shouldReduceMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'bg-slate-950/80 shadow-lg shadow-slate-950/30' : 'bg-slate-950/60'}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-wide">
            <img src="/nurexa-logo.png" alt="Nurexa logo" className="h-10 w-10 rounded-xl object-contain" />
            <span className="text-white">Nurexa</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="group relative text-sm text-slate-300 transition duration-300 hover:text-white">
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 rounded-full bg-gradient-to-r from-brand-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link to="/assessment" className="hidden rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-50 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-500/20 md:inline-flex">
            Book Assessment
          </Link>

          <button className="rounded-full border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-slate-300" onClick={() => setMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </motion.header>

      {!shouldReduceMotion && window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[70] h-10 w-10 rounded-full border border-brand-400/30 bg-brand-400/10 backdrop-blur-sm"
          animate={{ x: cursor.x - 20, y: cursor.y - 20, scale: [1, 1.04, 1] }}
          transition={{ type: 'spring', stiffness: 140, damping: 20, mass: 0.3 }}
        />
      ) : null}

      <motion.main
        key={location.pathname}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-white">Nurexa Inc</p>
            <p className="mt-1">Assess. Automate. Accelerate.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="transition hover:text-white">About</Link>
            <Link to="/services" className="transition hover:text-white">Services</Link>
            <Link to="/contact" className="transition hover:text-white">Contact</Link>
          </div>
          <p>Copyright 2026</p>
        </div>
      </footer>
    </div>
  )
}

export default App
