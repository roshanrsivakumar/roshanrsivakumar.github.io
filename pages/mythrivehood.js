import { motion } from 'framer-motion'
import { Users, Target, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SEO from '../components/SEO'

const pillars = [
  {
    Icon: Users,
    title: 'Career Networking',
    desc: 'Connecting ambitious young professionals with mentors, peers, and opportunities — regardless of where they started.',
  },
  {
    Icon: Heart,
    title: 'Fundraising',
    desc: 'Community-backed funding for education, skills training, and career development for those who need it most.',
  },
  {
    Icon: Target,
    title: 'The Mission',
    desc: 'Ambition should not be a function of privilege. MyThrivehood exists to close the gap between potential and opportunity.',
  },
]

export default function MyThrivehood() {
  return (
    <>
      <SEO
        title="MyThrivehood | The Movement — Roshan Sivakumar"
        description="MyThrivehood — founded 2021 by Roshan Sivakumar under Dhanam Educational Trust. A career networking and fundraising platform for ambitious young professionals."
        url="https://roshanrsivakumar.com/mythrivehood"
      />

      {/* Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">Chapter Four</p>
          <h1 className="font-display text-6xl md:text-8xl font-black text-slate-100 mb-6">
            The<br /><span className="text-amber-500">Movement</span>
          </h1>
          <div className="h-px bg-amber-500 w-24 mb-8" />
          <p className="text-slate-300 text-xl font-body font-light max-w-2xl leading-relaxed">
            Founded in 2021. Born from the belief that ambition is universal but opportunity is not.
          </p>
        </motion.div>
      </section>

      {/* Origin Story */}
      <section className="py-20 border-y border-amber-500/10" style={{ backgroundColor: '#0a1a3e' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">Origin</p>
              <h2 className="font-display text-4xl font-bold text-slate-100 mb-6">
                Founded Under<br />Dhanam Educational Trust
              </h2>
              <p className="text-slate-300 font-body leading-relaxed mb-4">
                At 18, while most people were figuring out university, Roshan Sivakumar founded MyThrivehood
                under the umbrella of Dhanam Educational Trust — a registered educational non-profit committed
                to expanding access and opportunity.
              </p>
              <p className="text-slate-400 font-body leading-relaxed">
                The name is intentional. &ldquo;Thrive&rdquo; isn&apos;t passive. It&apos;s directional. It demands infrastructure,
                community, and intention. MyThrivehood is the answer to the question: &ldquo;What if the network
                you needed actually existed?&rdquo;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { n: '2021', l: 'Year Founded' },
                { n: '18', l: "Founder's Age" },
                { n: 'Trust', l: 'Dhanam Educational Trust' },
                { n: '∞', l: 'Potential unlocked' },
              ].map(({ n, l }) => (
                <div key={l} className="border border-amber-500/20 p-6">
                  <p className="font-display text-3xl font-black text-amber-500">{n}</p>
                  <p className="text-slate-400 text-sm mt-1 font-body">{l}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3">What We Do</p>
          <h2 className="font-display text-4xl font-bold text-slate-100">The Pillars</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-slate-800 hover:border-amber-500/40 p-8 transition-colors group"
            >
              <div className="w-12 h-12 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:border-amber-500 transition-all">
                <Icon className="text-amber-500" size={22} />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-100 mb-4">{title}</h3>
              <p className="text-slate-400 font-body text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-amber-500/10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl font-bold text-slate-100 mb-6">
            Join the <span className="text-amber-500">Movement</span>
          </h2>
          <p className="text-slate-400 font-body mb-10">
            If you believe ambition deserves infrastructure, reach out. MyThrivehood is always looking for
            mentors, collaborators, and people who give a damn.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-10 py-4 font-body font-bold tracking-wide hover:bg-amber-400 transition-colors"
          >
            Get Involved <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
