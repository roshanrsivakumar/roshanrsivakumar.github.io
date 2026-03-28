import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import SEO from '../components/SEO'

const posts = [
  {
    slug: 'stop-waiting',
    title: 'Stop Waiting for Permission',
    category: 'Leadership',
    date: 'March 2026',
    read: '5 min',
    excerpt: 'No one is going to hand you the keys. The factory floor taught me that the only way to run something is to start running it â before you feel ready.',
    tags: ['Leadership', 'Operations', 'Personal Growth'],
  },
  {
    slug: 'karur-to-dubai',
    title: 'Karur to Dubai: The Long Way Round',
    category: 'Travel & Business',
    date: 'February 2026',
    read: '7 min',
    excerpt: 'A Tamil Nadu factory kid walks into a Dubai trade show. A personal essay on cultural contrast, manufacturing ambition, and the strange comfort of Adeni chai.',
    tags: ['Travel', 'Tamil Culture', 'Manufacturing'],
  },
  {
    slug: 'lean-thinking',
    title: 'Lean Thinking Is a Life Philosophy',
    category: 'Operations',
    date: 'March 2026',
    read: '6 min',
    excerpt: 'Remove the waste. Every system â manufacturing, personal, creative â has waste in it. The discipline of lean thinking is learning to see it.',
    tags: ['Lean Manufacturing', 'Productivity', 'Mindset'],
    href: 'https://roshanrsivakumar.blogspot.com/2026/03/lean-thinking-is-life-philosophy.html',
    live: true,
  },
  {
    slug: 'taylor-swift-analytics',
    title: 'What Taylor Swift Taught Me About Data',
    category: 'Analytics',
    date: 'December 2025',
    read: '8 min',
    excerpt: 'A Swiftie with a analytics degree turns an obsession into a framework. Audience intelligence, release timing, and the data behind the Eras Tour phenomenon.',
    tags: ['Analytics', 'Pop Culture', 'Marketing'],
  },
  {
    slug: 'aircraft-seats',
    title: 'Building for the Sky: Our Aircraft Seat Expansion',
    category: 'Manufacturing',
    date: 'November 2025',
    read: '6 min',
    excerpt: 'Why did a bus body manufacturer decide to build aircraft seat structures? The strategic logic, the engineering challenge, and what it means for Sri Jai Groups.',
    tags: ['Manufacturing', 'Aerospace', 'Strategy'],
  },
  {
    slug: 'mythrivehood-origin',
    title: 'Why I Started MyThrivehood at 18',
    category: 'Social Impact',
    date: 'October 2025',
    read: '5 min',
    excerpt: 'I had access to a family business and a mentorship network most people don\'t. That\'s not something to feel guilty about â it\'s something to multiply.',
    tags: ['Social Impact', 'Entrepreneurship', 'Community'],
  },
]

const categories = ['All', 'Leadership', 'Operations', 'Analytics', 'Manufacturing', 'Travel & Business', 'Social Impact']

export default function Blog() {
  return (
    <>
      <SEO
        title="Thoughts | Roshan Sivakumar"
        description="Roshan Sivakumar writes about operations, analytics, manufacturing, leadership, and life. Thought leadership from The Industrial Showman."
        url="https://roshanrsivakumar.com/blog"
      />

      {/* Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">The Dispatch</p>
          <h1 className="font-display text-6xl md:text-8xl font-black text-slate-100 mb-6">
            Thoughts
          </h1>
          <div className="h-px bg-amber-500 w-24 mb-8" />
          <p className="text-slate-300 text-xl font-body font-light max-w-xl leading-relaxed">
            Operations. Analytics. Manufacturing. Leadership. The occasional Taylor Swift reference.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mt-12">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className={`text-xs px-4 py-2 border transition-colors ${
                cat === 'All'
                  ? 'border-amber-500 text-amber-500 bg-amber-500/10'
                  : 'border-slate-700 text-slate-400 hover:border-amber-500/50 hover:text-amber-500'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ slug, title, category, date, read, excerpt, tags, href, live }, i) => (
            <motion.article
              key={slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-800 hover:border-amber-500/40 transition-colors group flex flex-col"
            >
              {/* Category band */}
              <div className="bg-slate-900 border-b border-slate-800 px-6 py-3 flex items-center justify-between">
                <span className="text-amber-500 text-xs tracking-widest uppercase">{category}</span>
                <span className="flex items-center gap-1 text-slate-600 text-xs">
                  <Clock size={10} />{read} read
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-slate-600 text-xs mb-3 font-mono">{date}</p>
                <h2 className="font-display text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-500 transition-colors leading-snug">
                  {title}
                </h2>
                <p className="text-slate-400 font-body text-sm leading-relaxed mb-6 flex-1">{excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map(tag => (
                    <span key={tag} className="text-xs text-slate-600 border border-slate-800 px-2 py-0.5">{tag}</span>
                  ))}
                </div>
                {live && href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-500 text-sm font-body font-medium hover:gap-3 transition-all self-start">
                    Read more <ArrowRight size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-slate-600 text-sm font-body self-start cursor-default">
                    Coming soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
