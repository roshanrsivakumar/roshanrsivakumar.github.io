import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="pt-20"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}
