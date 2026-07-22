import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Bot, BrainCircuit, Compass, Sparkles, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { AnimatedSection } from '../components/AnimatedSection'
import { NeuralVisual } from '../components/NeuralVisual'

const focusCards = [
  {
    title: 'Assess',
    description: 'Identify the highest-value AI opportunities in your business.',
    link: '/assessment',
    icon: BrainCircuit
  },
  {
    title: 'Automate',
    description: 'Turn repetitive work into reliable digital workflows.',
    link: '/services',
    icon: Bot
  },
  {
    title: 'Accelerate',
    description: 'Build adoption, capability, and measurable momentum.',
    link: '/contact',
    icon: Compass
  }
]

const reasons = [
  'Business-first strategy and clear executive guidance',
  'Human-centered AI that strengthens teams rather than replacing them',
  'Practical implementation with measurable outcomes'
]

function HomePage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>Home | Nurexa Inc</title>
        <meta name="description" content="Nurexa helps businesses assess opportunities, automate processes, and accelerate transformation with human-centered AI." />
      </Helmet>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="hero-wave hero-wave-1" />
        <div className="hero-wave hero-wave-2" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,124,255,0.24),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-2 text-sm text-brand-100">
              <Sparkles className="h-4 w-4" />
              Premium AI advisory for modern enterprises
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Turn AI complexity into calm, confident momentum.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
              Nurexa helps leadership teams identify opportunities, simplify execution, and accelerate adoption with executive-grade clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link to="/assessment" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-medium text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-500">
                  Book Your AI Assessment <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link to="/services" className="rounded-full border border-white/15 px-5 py-3 font-medium text-slate-100 transition hover:bg-white/10">
                  Explore Solutions
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-glow backdrop-blur-xl">
              <NeuralVisual />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {focusCards.map((card, index) => {
            const Icon = card.icon
            return (
              <AnimatedSection key={card.title} direction="up" delay={0.08 * index}>
                <motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }}>
                  <Link to={card.link} className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition hover:border-brand-400/30 hover:bg-slate-900/90">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{card.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-100">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 shadow-glow lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <AnimatedSection direction="left" delay={0.08}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Why Nurexa</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">A calm, structured approach to enterprise AI.</h2>
                <p className="mt-4 text-slate-300">
                  We combine strategic thinking, a deep understanding of operations, and a people-first philosophy to make transformation feel practical and sustainable.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid gap-4">
              {reasons.map((reason, index) => (
                <AnimatedSection key={reason} direction="up" delay={0.08 + index * 0.06}>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-100" />
                    <p className="text-sm text-slate-300">{reason}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0.08}>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-brand-500/20 bg-brand-500/10 p-8 lg:flex-row lg:items-center lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Ready to begin?</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Let’s map the next practical step for your organization.</h2>
            </div>
            <Link to="/assessment" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100">
              Request My AI Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}

export default HomePage
