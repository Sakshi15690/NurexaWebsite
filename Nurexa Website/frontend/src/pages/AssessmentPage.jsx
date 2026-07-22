import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { submitInquiry } from '../services/contactService'

function AssessmentPage() {
  const shouldReduceMotion = useReducedMotion()
  const [form, setForm] = useState({
    type: 'assessment',
    name: '',
    email: '',
    companySize: '1-50 employees',
    challenges: '',
    processes: ''
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
      setStatus({ type: 'success', message: 'Thanks! Your assessment request has been received and sent to hello@nurexa.ca.' })
      setForm({
        type: 'assessment',
        name: '',
        email: '',
        companySize: '1-50 employees',
        challenges: '',
        processes: ''
      })
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'We could not send your request right now. Please email hello@nurexa.ca directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>AI Assessment | Nurexa Inc</title>
        <meta name="description" content="Book a tailored AI assessment with Nurexa to uncover high-impact opportunities for your organization." />
      </Helmet>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-glow lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">AI Assessment</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Discover Your AI Opportunities</h1>
              <p className="mt-6 text-lg text-slate-300">
                Share a few details about your business and we will help you identify practical AI opportunities with measurable value.
              </p>
              <div className="mt-8 space-y-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-brand-100" /> Hello@nurexa.ca</p>
                <p className="flex items-center gap-3"><Linkedin className="h-5 w-5 text-brand-100" /> linkedin.com/company/nurexa-ai</p>
              </div>
            </div>

            <motion.form onSubmit={handleSubmit} initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none" placeholder="you@company.com" />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm text-slate-300">Company size</label>
                <select name="companySize" value={form.companySize} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none">
                  <option>1-50 employees</option>
                  <option>51-250 employees</option>
                  <option>251-1000 employees</option>
                  <option>1000+ employees</option>
                </select>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm text-slate-300">Current challenges</label>
                <textarea name="challenges" value={form.challenges} onChange={handleChange} rows="4" className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none" placeholder="What is your biggest operational challenge today?" />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm text-slate-300">Processes you want to improve</label>
                <textarea name="processes" value={form.processes} onChange={handleChange} rows="4" className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none" placeholder="Examples: invoice processing, customer support, forecasting, reporting." />
              </div>
              {status.message ? (
                <div className={`mt-5 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm ${status.type === 'success' ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200' : 'border-rose-500/40 bg-rose-500/10 text-rose-200'}`}>
                  {status.type === 'success' ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />}
                  <span>{status.message}</span>
                </div>
              ) : null}
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }} className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-medium text-white transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-70">
                {isSubmitting ? 'Submitting...' : 'Request My AI Assessment'} <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AssessmentPage
