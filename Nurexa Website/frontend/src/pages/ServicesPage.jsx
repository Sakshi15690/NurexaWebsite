import { Helmet } from 'react-helmet-async'
import { Bot, Brain, Cpu, Workflow } from 'lucide-react'

const services = [
  {
    title: 'AI Strategy & Assessment',
    description: 'Identify AI opportunities, evaluate current processes, and build a tailored roadmap.',
    icon: Brain
  },
  {
    title: 'Automation Solutions',
    description: 'Streamline workflows, extract insights from documents, and create AI-powered assistants.',
    icon: Workflow
  },
  {
    title: 'AI Adoption & Enablement',
    description: 'Train teams, manage change, and embed responsible adoption at enterprise scale.',
    icon: Bot
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Modernize systems, improve data operations, and align technology with business strategy.',
    icon: Cpu
  }
]

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services | Nurexa Inc</title>
        <meta name="description" content="Explore Nurexa's AI strategy, automation, adoption, and digital transformation services." />
      </Helmet>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Services</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Enterprise services for practical AI value.</h1>
            <p className="mt-6 text-lg text-slate-300">We deliver end-to-end transformation support, from assessment and design to adoption and ongoing optimization.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-8">
                <Icon className="h-8 w-8 text-brand-100" />
                <h2 className="mt-4 text-2xl font-semibold text-white">{title}</h2>
                <p className="mt-3 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
