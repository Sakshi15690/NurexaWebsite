import { Helmet } from 'react-helmet-async'
import { Brain, HeartHandshake, Sparkles, Workflow } from 'lucide-react'

const pillars = [
  { title: 'Human-Centric AI', body: 'We build AI systems that amplify people, improve decision-making, and create meaningful outcomes.', icon: HeartHandshake },
  { title: 'Intelligent Automation', body: 'We automate repetitive work and free teams to focus on strategy, creativity, and service.', icon: Workflow },
  { title: 'Sustainable Transformation', body: 'We enable adoption with governance, change management, and measurable impact.', icon: Sparkles }
]

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Nurexa Inc</title>
        <meta name="description" content="Learn how Nurexa helps organizations adopt AI and automation in a human-centered, enterprise-ready way." />
      </Helmet>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-glow lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">About Nurexa</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
              Helping organizations transform with AI that serves people first.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-300">
              Nurexa is an AI transformation company helping organizations identify opportunities, automate repetitive work, and unlock new levels of efficiency. We believe AI should amplify human potential, not replace it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-3">
          {pillars.map(({ title, body, icon: Icon }) => (
            <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <Icon className="h-8 w-8 text-brand-100" />
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default AboutPage
