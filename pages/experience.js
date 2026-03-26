import { motion } from 'framer-motion'
import { Settings, TrendingUp, Plane, Truck } from 'lucide-react'
import SEO from '../components/SEO'

const manufacturing = [
  {
    Icon: Truck,
    product: 'Bus Bodies',
    company: 'Sri Jai Chakraa Motors',
    desc: 'Custom fabrication of commercial bus bodies for Tamil Nadu transport operators. End-to-end manufacturing — steel framing, body panels, finishing.',
  },
  {
    Icon: Settings,
    product: 'Truck Containers',
    company: 'Sri Jai Chakraa Motors',
    desc: 'Heavy-duty truck container manufacturing. Cargo-grade steel construction, compliance engineering, and fleet-scale production volumes.',
  },
  {
    Icon: Plane,
    product: 'Aircraft Seat Structures',
    company: 'RR Hevirex',
    desc: 'The frontier expansion. Precision-engineered aircraft seat frame fabrication — where automotive manufacturing techniques meet aerospace tolerances.',
  },
]

const skills = [
  'Lean Manufacturing', 'Production Analytics', 'Operations Management',
  'Supply Chain Optimisation', 'Process Engineering', 'Data-Driven Decision Making',
  'Steel Fabrication', 'Quality Control', 'Factory Floor Management',
  'Business Intelligence', 'Python / SQL', 'Stakeholder Management',
]

export default function Experience() {
  return (
    <>
      <SEO
        title="The Craft | Experience — Roshan Sivakumar"
        description="Roshan Sivakumar's professional experience — COO at Sri Jai Groups, bus body manufacturing, truck containers, aircraft seats, and production analytics at VCU."
        url="https://roshanrsivakumar.com/experience"
      />

      {/* Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">Chapter Two</p>
          <h1 className="font-display text-6xl md:text-8xl font-black text-slate-100 mb-6">
            The<br /><span className="text-amber-500">Craft</span>
          </h1>
          <div className="h-px bg-amber-500 w-24 mb-8" />
          <p className="text-slate-300 text-xl font-body font-light max-w-2xl leading-relaxed">
            Heavy manufacturing, lean operations, and the relentless pursuit of marginal gains on the factory floor.
          </p>
        </motion.div>
      </section>

      {/* COO Role */}
      <section className="py-20 border-y border-amber-500/10" style={{ backgroundColor: '#0a1a3e' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">Current Role</p>
              <h2 className="font-display text-4xl font-bold text-slate-100 mb-2">
                Chief Operating Officer
              </h2>
              <p className="text-amber-500/80 font-body mb-6">Sri Jai Groups · Chennai, Tamil Nadu</p>
              <p className="text-slate-300 font-body leading-relaxed mb-6">
                Overseeing daily manufacturing operations across Sri Jai Chakraa Motors and RR Hevirex.
                Driving lean transformation, production analytics implementation, and the strategic expansion
                into aircraft seat fabrication.
              </p>
              <ul className="space-y-3 text-slate-400 font-body text-sm">
                {[
                  'Managing multi-unit manufacturing operations',
                  'Implementing data-driven production optimisation',
                  'Leading the aircraft seat structure expansion',
                  'Cross-functional team leadership and stakeholder management',
                ].map(item => (
                  <li key={item} className="flex gap-3">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-amber-500/20 p-8"
            >
              <TrendingUp className="text-amber-500 mb-4" size={28} />
              <p className="font-display text-3xl font-bold text-amber-500 mb-2">Scale</p>
              <p className="text-slate-400 text-sm font-body leading-relaxed">
                From a single factory unit to a multi-entity manufacturing group. Sri Jai Groups operates
                across commercial vehicle body manufacturing and is actively expanding into defence and
                aerospace supply chain manufacturing.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4">
                {[
                  { n: '2+', l: 'Manufacturing units' },
                  { n: '3', l: 'Product categories' },
                  { n: 'COO', l: 'At 21 years old' },
                  { n: '∞', l: 'Ambition' },
                ].map(({ n, l }) => (
                  <div key={l}>
                    <p className="font-display text-2xl font-bold text-amber-500">{n}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Products */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3">What We Build</p>
          <h2 className="font-display text-4xl font-bold text-slate-100">Products</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {manufacturing.map(({ Icon, product, company, desc }, i) => (
            <motion.div
              key={product}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-slate-800 hover:border-amber-500/40 p-8 transition-colors group"
            >
              <div className="w-12 h-12 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
                <Icon className="text-amber-500" size={22} />
              </div>
              <p className="text-amber-500 text-xs tracking-widest uppercase mb-2">{company}</p>
              <h3 className="font-display text-xl font-bold text-slate-100 mb-3">{product}</h3>
              <p className="text-slate-400 font-body text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 border-t border-amber-500/10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3">The Toolkit</p>
          <h2 className="font-display text-3xl font-bold text-slate-100">Skills & Expertise</h2>
        </motion.div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-slate-900 border border-slate-700 text-slate-300 text-sm px-4 py-2 hover:border-amber-500/50 hover:text-amber-500 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>
    </>
  )
}
