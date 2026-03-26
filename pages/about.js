import { motion } from 'framer-motion'
import { MapPin, Calendar, Heart, Briefcase } from 'lucide-react'
import SEO from '../components/SEO'

const timeline = [
  { year: '2003', event: 'Born in Chennai, Tamil Nadu', detail: 'Raised in Anna Nagar — the city of ambition.' },
  { year: '2018', event: 'Joined the family legacy', detail: 'First steps inside the Sri Jai Groups factory floor. Mechanical engineering was the plan.' },
  { year: '2021', event: 'Founded MyThrivehood', detail: 'Under Dhanam Educational Trust — a platform for career networking and fundraising.' },
  { year: '2022', event: 'B.E. Mechanical Engineering', detail: 'M. Kumarasamy College of Engineering — the foundation of everything industrial.' },
  { year: '2023', event: 'MBA — Lean Operations', detail: 'Christ University, Bangalore. Supply chain, lean manufacturing, and the pursuit of operational excellence.' },
  { year: '2024', event: 'COO, Sri Jai Groups', detail: 'Youngest executive in the room. Overseeing manufacturing operations across Sri Jai Chakraa Motors and RR Hevirex.' },
  { year: '2025', event: 'MDA Candidate, VCU', detail: 'Virginia Commonwealth University — Master of Data Analytics specialising in production analytics.' },
]

const family = [
  { role: 'Mother', name: 'Meenakshi Venkatachalam', title: 'Proprietor, Sri Jai Groups', note: 'The backbone of the empire.' },
  { role: 'Father', name: 'Sivakumar Rajendran', title: 'CEO, Sri Jai Groups | Mechanical Engineer', note: 'The architect of the legacy.' },
  { role: 'Brother', name: 'Ragul Rajkumar Sivakumar', title: 'The other Rajkumar', note: '' },
]

const interests = [
  'Taylor Swift & the Swifties', 'Operations Analytics', 'Data Science', 'Blogging',
  'Personal essays', 'Marketing Analytics', 'Beach trips', 'Adeni chai',
  'Tamil culture', 'Travel', 'Lean Manufacturing', 'Photography',
]

export default function About() {
  return (
    <>
      <SEO
        title="The Legacy | Roshan Sivakumar"
        description="The story of Roshan Sivakumar — born Chennai 2003, Anna Nagar. COO of Sri Jai Groups, founder of MyThrivehood, and analytics candidate at VCU. The Legacy."
        url="https://roshanrsivakumar.com/about"
      />

      {/* Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">Chapter One</p>
          <h1 className="font-display text-6xl md:text-8xl font-black text-slate-100 mb-6">
            The<br /><span className="text-amber-500">Legacy</span>
          </h1>
          <div className="h-px bg-amber-500 w-24 mb-8" />
          <p className="text-slate-300 text-xl font-body font-light max-w-2xl leading-relaxed">
            A story that begins on the factory floor of Chennai and doesn&apos;t end anywhere near a corner office.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { Icon: MapPin, label: 'Origin', value: 'Anna Nagar, Chennai' },
            { Icon: Calendar, label: 'Born', value: 'July 20, 2003' },
            { Icon: Briefcase, label: 'Current Role', value: 'COO, Sri Jai Groups' },
          ].map(({ Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-4 border border-slate-800 p-5"
            >
              <Icon className="text-amber-500 flex-shrink-0" size={20} />
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-widest">{label}</p>
                <p className="text-slate-100 font-body font-medium mt-0.5">{value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sri Jai Groups */}
      <section className="py-20 border-y border-amber-500/10" style={{ backgroundColor: '#0a1a3e' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3">The Empire</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">Sri Jai Groups</h2>
            <p className="text-slate-400 mt-4 max-w-xl font-body">
              Heavy manufacturing. Family-owned. Built with iron and intention.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sri Jai Chakraa Motors',
                type: 'Automotive Manufacturing',
                desc: 'Bus bodies and truck container fabrication. Engineering-grade manufacturing at scale, serving commercial transport across Tamil Nadu.',
                role: 'Operations under the Rajkumar legacy.',
              },
              {
                name: 'RR Hevirex',
                type: 'Heavy Manufacturing & Expansion',
                desc: 'The next frontier — expanding into aircraft seat structures and advanced fabrication. Where heavy manufacturing meets aerospace precision.',
                role: 'Where the future is being built.',
              },
            ].map(({ name, type, desc, role }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-amber-500/20 p-8"
              >
                <p className="text-amber-500 text-xs tracking-widest uppercase mb-2">{type}</p>
                <h3 className="font-display text-2xl font-bold text-slate-100 mb-4">{name}</h3>
                <p className="text-slate-400 font-body text-sm leading-relaxed mb-4">{desc}</p>
                <p className="text-amber-500/70 text-xs italic">{role}</p>
              </motion.div>
            ))}
          </div>

          {/* Family */}
          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold text-slate-100 mb-8">The Founding Family</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {family.map(({ role, name, title, note }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-slate-700 p-6"
                >
                  <p className="text-amber-500 text-xs tracking-widest uppercase mb-2">{role}</p>
                  <p className="font-display text-lg font-bold text-slate-100">{name}</p>
                  <p className="text-slate-400 text-sm mt-1">{title}</p>
                  {note && <p className="text-slate-600 text-xs italic mt-2">{note}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3">The Journey</p>
          <h2 className="font-display text-4xl font-bold text-slate-100">A Timeline</h2>
        </motion.div>

        <div className="relative pl-8 border-l border-amber-500/20">
          {timeline.map(({ year, event, detail }, i) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="mb-10 relative"
            >
              <div className="absolute -left-[2.35rem] w-4 h-4 border-2 border-amber-500 bg-slate-950 rounded-full" />
              <p className="text-amber-500 text-xs tracking-widest uppercase mb-1">{year}</p>
              <h3 className="font-display text-xl font-bold text-slate-100 mb-1">{event}</h3>
              <p className="text-slate-400 font-body text-sm">{detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="py-20 border-t border-amber-500/10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3">Off-Stage</p>
          <h2 className="font-display text-3xl font-bold text-slate-100">What Moves Me</h2>
        </motion.div>
        <div className="flex flex-wrap gap-3">
          {interests.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border border-slate-700 text-slate-300 text-sm px-4 py-2 hover:border-amber-500/50 hover:text-amber-500 transition-colors cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </section>
    </>
  )
}
