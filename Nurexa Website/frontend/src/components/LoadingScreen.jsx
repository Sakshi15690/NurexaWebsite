import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 1 }}
          exit={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030611]"
        >
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center rounded-[2rem] border border-white/10 bg-white/5 px-8 py-10 text-center shadow-glow backdrop-blur-xl"
          >
            <div className="mb-4 rounded-[1.2rem] border border-brand-500/25 bg-brand-500/10 p-3">
              <img src="/nurexa-logo.png" alt="Nurexa logo" className="h-14 w-14 rounded-xl object-contain" />
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-200">Nurexa</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Assess. Automate. Accelerate.</h2>
            <div className="mt-4 flex items-center gap-2 text-slate-300">
              <Sparkles className="h-4 w-4" />
              <span>Preparing your experience</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
