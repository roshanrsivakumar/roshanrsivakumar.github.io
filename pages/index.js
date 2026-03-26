import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Factory, BarChart3, Users } from 'lucide-react'
import SEO from '../components/SEO'

const stats = [
  { value: '21', label: 'Years Old', sub: 'Born July 20, 2003' },
  { value: 'COO', label: 'Sri Jai Groups', sub: 'Youngest in the room' },
  { value: '2021', label: 'Founded MyThrivehood', sub: 'Under Dhanam Trust' },
  { value: '3', label: 'Degrees Pursued', sub: 'B.E. → MBA → MDA' },
]

const acts = [
  {
    Icon: Factory,
    title: 'The Factory',
    sub: 'Manufacturing',
    desc: 'Bus bodies. Truck containers. Aircraft seat structures. From shop floor to boardroom — Sri Jai Groups runs heavy.',
    href: '/experience',
    cta: 'The Craft',
  },
  {
    Icon: BarChart3,
    title: 'The Algorithm',
    sub: 'Operations Analytics',
    desc: 'Lean manufacturing meets production analytics. VCU MDA candidate turning floor data into competitive advantage.',
    href: '/education',
    cta: 'The Stages',
  },
  {
    Icon: Users,
    title: 'The Movement',
    sub: 'Social Impact',
    desc: 'MyThrivehood — a career networking and fundraising platform born from the belief that ambition needs community.',
    href: '/mythrivehood',
    cta: 'The Movement',
  },
]

export default function Home() {
  const [curtainDone, setCurtainDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setCurtainDone(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <SEO
        title="The Life of a Showman | Roshan Sivakumar"
        description="Roshan Sivakumar — The Industrial Showman. COO at Sri Jai Groups. MBA & MDA candidate at VCU. From Chennai's factory floors to global analytics."
        url="https://roshanrsivakumar.com"
      />

      {/* Curtain Rise */}
      <AnimatePresence>
        {!curtainDone && (
          <>
            <motion.div
              key="curtain-left"
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.77, 0, 0.18, 1] }}
              className="fixed inset-y-0 left-0 w-1/2 bg-navy-900 z-[200]"
              style={{ backgroundColor: '#0a1a3e' }}
            />
            <motion.div
              key="curtain-right"
              initial={{ x: 0 }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.77, 0, 0.18, 1] }}
              className="fixed inset-y-0 right-0 w-1/2 z-[200]"
              style={{ backgroundColor: '#0a1a3e' }}
            />
            <motion.div
              key="curtain-logo"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="fixed inset-0 z-[201] flex flex-col items-center justify-center pointer-events-none"
            >
              <p className="font-display text-4xl font-bold text-amber-500 tracking-tight">ROSHAN</p>
              <p className="text-slate-400 text-xs tracking-[0.4em] uppercase mt-1">The Industrial Showman</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG grid */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        {/* Gold accent line */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent opacity-40" />

        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-amber-500 text-sm tracking-[0.4em] uppercase font-body mb-6"
            >
              ✦ The Life of a Showman
            </motion.p>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.7 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-slate-100 leading-none mb-4"
            >
              ROSHAN<br />
              <span className="text-amber-500">SIVAKUMAR</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.0, duration: 0.6, transformOrigin: 'left' }}
              className="h-px bg-amber-500 w-48 mb-6"
            />

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.6 }}
              className="text-slate-300 text-xl md:text-2xl font-body font-light max-w-2xl mb-12 leading-relaxed"
            >
              From the factory floors of Chennai to the analytics boards of Virginia —
              this is the industrial showman's story.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-8 py-3 font-body font-semibold text-sm tracking-wide hover:bg-amber-400 transition-colors"
              >
                Read My Story <ArrowRight size={16} />
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 border border-amber-500/40 text-amber-500 px-8 py-3 font-body font-semibold text-sm tracking-wide hover:border-amber-500 hover:bg-amber-500/5 transition-all"
              >
                Explore My Work
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-amber-500 to-transparent"
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl font-black text-amber-500">{value}</p>
              <p className="text-slate-200 font-body font-medium mt-1">{label}</p>
              <p className="text-slate-500 text-xs mt-1">{sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Three Acts */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3">The Performance</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">The Three Acts</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {acts.map(({ Icon, title, sub, desc, href, cta }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group border border-slate-800 hover:border-amber-500/40 p-8 transition-all duration-300 hover:bg-slate-900/50"
            >
              <div className="w-12 h-12 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
                <Icon className="text-amber-500" size={22} />
              </div>
              <p className="text-amber-500 text-xs tracking-widest uppercase mb-2">{sub}</p>
              <h3 className="font-display text-2xl font-bold text-slate-100 mb-4">{title}</h3>
              <p className="text-slate-400 font-body text-sm leading-relaxed mb-6">{desc}</p>
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-amber-500 text-sm font-body font-medium hover:gap-3 transition-all"
              >
                {cta} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20" style={{ backgroundColor: '#0a1a3e' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100">
              Let&apos;s build something<br />
              <span className="text-amber-500">extraordinary.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-10 py-4 font-body font-bold tracking-wide hover:bg-amber-400 transition-colors"
          >
            Connect With Me <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
