import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'The Legacy' },
  { href: '/experience', label: 'The Craft' },
  { href: '/education', label: 'The Stages' },
  { href: '/mythrivehood', label: 'MyThrivehood' },
  { href: '/blog', label: 'Thoughts' },
  { href: '/contact', label: 'Connect' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [router.pathname])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className="text-amber-500 font-display text-xl font-bold tracking-tight group-hover:opacity-80 transition-opacity">
            ROSHAN
          </span>
          <span className="text-slate-400 text-xs tracking-[0.3em] uppercase font-body">
            The Showman
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-body tracking-wide transition-colors relative group ${
                  router.pathname === href ? 'text-amber-500' : 'text-slate-300 hover:text-amber-500'
                }`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-px bg-amber-500 transition-all duration-300 ${
                  router.pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-amber-500 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-slate-950/98 border-t border-amber-500/20"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-base font-body transition-colors ${
                      router.pathname === href ? 'text-amber-500' : 'text-slate-300'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
