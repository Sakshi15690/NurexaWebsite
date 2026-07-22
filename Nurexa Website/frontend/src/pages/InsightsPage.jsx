import { Helmet } from 'react-helmet-async'
import { BookOpen, Sparkles, Workflow } from 'lucide-react'

const articles = [
  {
    title: 'AI Will Not Replace Humans. People Using AI Will Transform Work.',
    summary: 'A practical perspective on why AI adoption should be framed as augmentation, not replacement.',
    icon: Sparkles
  },
  {
    title: 'How Businesses Can Start Their AI Journey',
    summary: 'A roadmap for identifying the first opportunities and building momentum responsibly.',
    icon: BookOpen
  },
  {
    title: 'From Manual Processes to Intelligent Automation',
    summary: 'How organizations can turn fragmented workflows into scalable digital operations.',
    icon: Workflow
  }
]

function InsightsPage() {
  return (
    <>
      <Helmet>
        <title>Insights | Nurexa Inc</title>
        <meta name="description" content="Read insights from Nurexa on AI transformation, automation, and future-ready business strategy." />
      </Helmet>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Insights</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Ideas and perspectives for leaders navigating AI.</h1>
            <p className="mt-6 text-lg text-slate-300">We will continue publishing practical guidance, case studies, and strategic thought leadership.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map(({ title, summary, icon: Icon }) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-8">
                <Icon className="h-8 w-8 text-brand-100" />
                <h2 className="mt-4 text-xl font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm text-slate-400">{summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default InsightsPage
