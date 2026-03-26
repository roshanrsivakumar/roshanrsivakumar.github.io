import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Instagram, Github, MapPin, Send } from 'lucide-react'
import SEO from '../components/SEO'

const channels = [
  { Icon: Mail, label: 'Email', value: 'roshanrsivakumar@gmail.com', href: 'mailto:roshanrsivakumar@gmail.com' },
  { Icon: Linkedin, label: 'LinkedIn', value: '/in/roshanrsivakumar', href: 'https://linkedin.com/in/roshanrsivakumar' },
  { Icon: Twitter, label: 'X / Twitter', value: '@roshanrsivakumar', href: 'https://twitter.com/roshanrsivakumar' },
  { Icon: Instagram, label: 'Instagram', value: '@roshanrsivakumar', href: 'https://instagram.com/roshanrsivakumar' },
  { Icon: Github, label: 'GitHub', value: 'roshanrsivakumar', href: 'https://github.com/roshanrsivakumar' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const mailtoUrl = `mailto:roshanrsivakumar@gmail.com?subject=${encodeURIComponent(form.subject || 'Message from website')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailtoUrl
    setSent(true)
  }

  return (
    <>
      <SEO
        title="Connect | Roshan Sivakumar"
        description="Get in touch with Roshan Sivakumar — The Industrial Showman. For business, collaboration, speaking, or just a conversation about analytics and manufacturing."
        url="https://roshanrsivakumar.com/contact"
      />

      {/* Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">The Stage Door</p>
          <h1 className="font-display text-6xl md:text-8xl font-black text-slate-100 mb-6">
            Connect
          </h1>
          <div className="h-px bg-amber-500 w-24 mb-8" />
          <p className="text-slate-300 text-xl font-body font-light max-w-xl leading-relaxed">
            Whether you want to talk manufacturing, analytics, collaboration, or just say hello — the door is open.
          </p>
          <div className="flex items-center gap-2 mt-4 text-slate-500 text-sm font-body">
            <MapPin size={14} className="text-amber-500" />
            Chennai, India & Richmond, Virginia, USA
          </div>
        </motion.div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-slate-100 mb-8">Send a Message</h2>
            {sent ? (
              <div className="border border-amber-500/30 p-8 text-center">
                <p className="text-amber-500 font-display text-2xl font-bold mb-2">Message Sent ✦</p>
                <p className="text-slate-400 font-body text-sm">Your email client should have opened. If not, email me directly at roshanrsivakumar@gmail.com</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Full name' },
                  { name: 'email', label: 'Your Email', type: 'email', placeholder: 'email@example.com' },
                  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?' },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="text-slate-400 text-xs tracking-widest uppercase font-body block mb-2">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      required
                      className="w-full bg-slate-900 border border-slate-700 text-slate-100 font-body px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder-slate-600"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-slate-400 text-xs tracking-widest uppercase font-body block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your message..."
                    required
                    className="w-full bg-slate-900 border border-slate-700 text-slate-100 font-body px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder-slate-600 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-8 py-3 font-body font-bold text-sm tracking-wide hover:bg-amber-400 transition-colors w-full justify-center"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-slate-100 mb-8">Find Me Elsewhere</h2>
            <div className="space-y-4">
              {channels.map(({ Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 border border-slate-800 hover:border-amber-500/40 p-4 transition-all group"
                >
                  <div className="w-10 h-10 border border-amber-500/30 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all flex-shrink-0">
                    <Icon className="text-amber-500" size={16} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">{label}</p>
                    <p className="text-slate-200 font-body text-sm mt-0.5 group-hover:text-amber-500 transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-10 border-l-2 border-amber-500 pl-6">
              <p className="font-display text-lg text-slate-300 italic leading-relaxed">
                &ldquo;The best conversations start with curiosity. Reach out — I read every message.&rdquo;
              </p>
              <p className="text-amber-500 text-sm mt-3 font-body">— Roshan Sivakumar</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
