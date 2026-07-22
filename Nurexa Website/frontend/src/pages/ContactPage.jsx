import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Mail, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { submitInquiry } from '../services/contactService'

function ContactPage() {
  const shouldReduceMotion = useReducedMotion()
  const [form, setForm] = useState({
    type: 'contact',
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      await submitInquiry(form)
      setStatus({ type: 'success', message: 'Thanks! Your message has been sent to hello@nurexa.ca.' })
      setForm({
        type: 'contact',
        name: '',
        email: '',
        company: '',
        message: ''
      })
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'We could not send your message right now. Please email hello@nurexa.ca directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact | Nurexa Inc</title>
        <meta name="description" content="Get in touch with Nurexa for AI strategy, automation, and digital transformation consulting." />
      </Helmet>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimatedSection direction="left" delay={0.08}>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let’s explore what AI can do for your business.</h1>
            <p className="mt-6 text-lg text-slate-300">Reach out to discuss AI adoption opportunities, transformation programs, or a strategic assessment.</p>
            <div className="mt-8 space-y-4">
              <a href="mailto:Hello@nurexa.ca" className="flex items-center gap-3 text-slate-300 transition hover:text-white">
                <Mail className="h-5 w-5 text-brand-100" /> Hello@nurexa.ca
              </a>
              <a href="https://www.linkedin.com/company/nurexa-ai/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 transition hover:text-white">
                <Linkedin className="h-5 w-5 text-brand-100" /> linkedin.com/company/nurexa-ai
              </a>
            </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.12}>
            <motion.form onSubmit={handleSubmit} whileHover={{ y: -4, scale: 1.01 }} initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }} animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0" placeholder="you@company.com" />
              </div>
            </div>
            <div className="mt-6">
              <label className="mb-2 block text-sm text-slate-300">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0" placeholder="Your company" />
            </div>
            <div className="mt-6">
              <label className="mb-2 block text-sm text-slate-300">How can we help?</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows="5" className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 outline-none ring-0" placeholder="Tell us about your goals and challenges." />
            </div>
            {status.message ? (
              <div className={`mt-5 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm ${status.type === 'success' ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200' : 'border-rose-500/40 bg-rose-500/10 text-rose-200'}`}>
                {status.type === 'success' ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />}
                <span>{status.message}</span>
              </div>
            ) : null}
            <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }} className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-medium text-white transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? 'Sending...' : 'Send Inquiry'} <ArrowRight className="h-4 w-4" />
            </motion.button>
            </motion.form>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default ContactPage
