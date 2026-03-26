import { motion } from 'framer-motion'
import { GraduationCap, Globe, BookOpen } from 'lucide-react'
import SEO from '../components/SEO'

const degrees = [
  {
    degree: 'B.E. Mechanical Engineering',
    institution: 'M. Kumarasamy College of Engineering',
    location: 'Karur, Tamil Nadu, India',
    period: '2019 – 2023',
    focus: 'The foundation. Thermodynamics, manufacturing processes, machine design, and the language of the factory floor.',
    highlights: ['Manufacturing Processes', 'Machine Design', 'Thermodynamics', 'Industrial Engineering', 'CAD/CAM'],
  },
  {
    degree: 'MBA — Lean Operations',
    institution: 'Christ University',
    location: 'Bangalore, Karnataka, India',
    period: '2023 – 2024',
    focus: 'Where engineering met business. Supply chain management, lean manufacturing, operations strategy, and the art of removing waste at every level.',
    highlights: ['Lean Manufacturing', 'Supply Chain Management', 'Operations Strategy', 'Business Analytics', 'Project Management'],
  },
  {
    degree: 'MDA — Production Analytics',
    institution: 'Virginia Commonwealth University (VCU)',
    location: 'Richmond, Virginia, USA',
    period: '2025 – Present',
    focus: 'The frontier. Master of Data Analytics with a production and operations focus — machine learning applied to manufacturing systems, predictive maintenance, and factory intelligence.',
    highlights: ['Production Analytics', 'Machine Learning', 'Python & SQL', 'Data Visualisation', 'Operations Research'],
  },
]

export default function Education() {
  return (
    <>
      <SEO
        title="The Stages | Education — Roshan Sivakumar"
        description="Roshan Sivakumar's education — B.E. Mechanical Engineering (M. Kumarasamy), MBA Lean Operations (Christ University), MDA Production Analytics (VCU)."
        url="https://roshanrsivakumar.com/education"
      />

      {/* Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">Chapter Three</p>
          <h1 className="font-display text-6xl md:text-8xl font-black text-slate-100 mb-6">
            The<br /><span className="text-amber-500">Stages</span>
          </h1>
          <div className="h-px bg-amber-500 w-24 mb-8" />
          <p className="text-slate-300 text-xl font-body font-light max-w-2xl leading-relaxed">
            Three institutions. Three transformations. Each one a different stage in the same performance.
          </p>
        </motion.div>
      </section>

      {/* Degrees */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="space-y-8">
          {degrees.map(({ degree, institution, location, period, focus, highlights }, i) => (
            <motion.div
              key={degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-slate-800 hover:border-amber-500/30 transition-colors"
            >
              <div className="grid md:grid-cols-3">
                {/* Left panel */}
                <div className="p-8 border-b md:border-b-0 md:border-r border-slate-800" style={{ backgroundColor: '#0a1a3e' }}>
                  <div className="flex items-center gap-3 mb-4">
                    {i === 2 ? <Globe className="text-amber-500" size={20} /> : <GraduationCap className="text-amber-500" size={20} />}
                    <span className="text-amber-500 text-xs tracking-widest uppercase">Degree {i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-100 mb-2">{degree}</h3>
                  <p className="text-amber-500/80 font-body text-sm mb-1">{institution}</p>
                  <p className="text-slate-500 text-xs">{location}</p>
                  <p className="text-slate-600 text-xs mt-2 font-mono">{period}</p>
                </div>

                {/* Middle — focus */}
                <div className="p-8 md:col-span-2">
                  <div className="flex items-start gap-3 mb-6">
                    <BookOpen className="text-amber-500 mt-1 flex-shrink-0" size={16} />
                    <p className="text-slate-300 font-body leading-relaxed">{focus}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {highlights.map(h => (
                      <span key={h} className="border border-amber-500/20 text-amber-500/70 text-xs px-3 py-1">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Split: Christ vs VCU */}
      <section className="border-t border-amber-500/10">
        <div className="grid md:grid-cols-2">
          {/* Christ University */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-16 border-r border-amber-500/10"
            style={{ backgroundColor: '#0a1a3e' }}
          >
            <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">Life at</p>
            <h2 className="font-display text-4xl font-bold text-slate-100 mb-6">Christ University</h2>
            <p className="text-slate-300 font-body leading-relaxed mb-8">
              Bangalore gave me the contrast I needed. Moving from a factory floor in Tamil Nadu to a management
              school campus, I learned that lean thinking isn&apos;t just a manufacturing concept — it&apos;s a mindset.
              MBA life meant late nights with case studies, early mornings in supply chain labs, and a constant
              reminder that the best operators think in systems.
            </p>
            <ul className="space-y-2 text-slate-400 text-sm font-body">
              {['Supply chain deep-dives', 'Manufacturing analytics projects', 'Cross-cultural business exposure', 'Operations strategy thesis work'].map(i => (
                <li key={i} className="flex gap-2"><span className="text-amber-500">—</span>{i}</li>
              ))}
            </ul>
          </motion.div>

          {/* VCU */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-16 bg-slate-950"
          >
            <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">Life at</p>
            <h2 className="font-display text-4xl font-bold text-slate-100 mb-6">
              Virginia Commonwealth<br />University
            </h2>
            <p className="text-slate-300 font-body leading-relaxed mb-8">
              Richmond, Virginia. A city that doesn&apos;t apologise for its grit — the right backdrop for a
              data analytics programme that takes production systems seriously. VCU&apos;s MDA programme is
              where mechanical intuition meets machine learning, and where I&apos;m learning to turn terabytes
              of factory data into decisions worth millions.
            </p>
            <ul className="space-y-2 text-slate-400 text-sm font-body">
              {['Production analytics specialisation', 'Python & ML for manufacturing', 'Industry research partnerships', 'Global cohort of engineers & analysts'].map(i => (
                <li key={i} className="flex gap-2"><span className="text-amber-500">—</span>{i}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  )
}
