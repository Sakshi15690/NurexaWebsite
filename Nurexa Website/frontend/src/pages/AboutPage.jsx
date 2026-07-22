import { Helmet } from "react-helmet-async";
import {
  Brain,
  HeartHandshake,
  Sparkles,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Human-Centric AI",
    body:
      "We build AI solutions that empower people, augment decision-making, and improve business outcomes without replacing the human element.",
    icon: HeartHandshake,
  },
  {
    title: "Intelligent Automation",
    body:
      "Automate repetitive work, accelerate operations, and enable your teams to focus on innovation instead of manual processes.",
    icon: Workflow,
  },
  {
    title: "Enterprise Transformation",
    body:
      "From strategy to implementation, we modernize organizations through secure, scalable, enterprise-ready AI adoption.",
    icon: Sparkles,
  },
];

const stats = [
  { number: "17+", label: "Years Enterprise Experience" },
  { number: "100+", label: "AI Use Cases Identified" },
  { number: "40%", label: "Average Efficiency Potential" },
  { number: "Enterprise", label: "Security First" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
    },
  }),
};

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Nurexa Inc</title>
        <meta
          name="description"
          content="Nurexa helps enterprises adopt AI, automation and digital transformation with secure, scalable and human-centric solutions."
        />
      </Helmet>

      <div className="relative overflow-hidden bg-slate-950">

        {/* Animated Background */}

        <div className="absolute inset-0">

          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -60, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
            }}
            className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"
          />

          <motion.div
            animate={{
              x: [0, -70, 0],
              y: [0, 60, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
            }}
            className="absolute right-10 top-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-[130px]"
          />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
            }}
            className="absolute bottom-10 left-1/2 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]"
          />
        </div>

        {/* Hero */}

        <section className="relative px-4 py-28 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 lg:p-16 shadow-2xl"
            >

              <div className="flex items-center gap-3">

                <Brain className="h-10 w-10 text-cyan-400" />

                <span className="uppercase tracking-[0.3em] text-sm text-cyan-300">
                  About Nurexa
                </span>

              </div>

              <h1 className="mt-8 max-w-4xl text-5xl lg:text-7xl font-bold text-white leading-tight">

                Enterprise AI
                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Built Around People
                </span>

              </h1>

              <p className="mt-8 max-w-3xl text-xl text-slate-300 leading-9">

                At Nurexa, we help organizations discover practical AI
                opportunities, automate complex workflows, modernize enterprise
                operations, and create measurable business value.

                <br /><br />

                Our philosophy is simple:

                <strong className="text-white">
                  {" "}
                  AI should accelerate people—not replace them.
                </strong>

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400 hover:scale-105">

                  Book Assessment

                </button>

                <button className="rounded-xl border border-white/20 px-8 py-4 text-white hover:bg-white/10 transition">

                  Explore Solutions

                </button>

              </div>

            </motion.div>

          </div>

        </section>

        {/* Stats */}

        <section className="relative px-4 pb-20">

          <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-4">

            {stats.map((item, index) => (

              <motion.div
                key={item.label}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 text-center"
              >

                <h2 className="text-5xl font-bold text-cyan-400">

                  {item.number}

                </h2>

                <p className="mt-4 text-slate-300">

                  {item.label}

                </p>

              </motion.div>

            ))}

          </div>

        </section>

        {/* Pillars */}

        <section className="relative px-4 pb-24">

          <div className="mx-auto max-w-7xl">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 text-center text-4xl font-bold text-white"
            >

              Our Core Principles

            </motion.h2>

            <div className="grid gap-8 lg:grid-cols-3">

              {pillars.map(({ title, body, icon: Icon }, index) => (

                <motion.div
                  key={title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                  }}
                  className="group rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 group-hover:bg-cyan-500/30 transition">

                    <Icon className="h-8 w-8 text-cyan-300" />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">

                    {title}

                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">

                    {body}

                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="relative px-4 pb-32">

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-6xl rounded-[36px] border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-xl p-16 text-center"
          >

            <h2 className="text-4xl font-bold text-white">

              Ready to Transform Your Enterprise?

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">

              Discover how AI, automation and modern enterprise technologies can
              reduce operational costs, improve productivity and accelerate
              digital transformation.

            </p>

            <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-cyan-400">

              Schedule Your AI Assessment

              <ArrowRight size={20} />

            </button>

          </motion.div>

        </section>

      </div>
    </>
  );
}

export default AboutPage;