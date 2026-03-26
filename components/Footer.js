import Link from 'next/link'
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'

const socials = [
  { Icon: Linkedin, href: 'https://linkedin.com/in/roshanrsivakumar', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com/roshanrsivakumar', label: 'Twitter' },
  { Icon: Instagram, href: 'https://instagram.com/roshanrsivakumar', label: 'Instagram' },
  { Icon: Github, href: 'https://github.com/roshanrsivakumar', label: 'GitHub' },
  { Icon: Mail, href: 'mailto:roshanrsivakumar@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-amber-500/10 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-amber-500 font-bold">ROSHAN SIVAKUMAR</p>
            <p className="text-slate-500 text-sm mt-1 tracking-widest uppercase">The Industrial Showman</p>
          </div>

          <div className="flex items-center gap-5">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-500 hover:text-amber-500 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Roshan Rajkumar Sivakumar. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-amber-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
            <a href="https://www.wikidata.org/wiki/Q138789937" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">Wikidata</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
