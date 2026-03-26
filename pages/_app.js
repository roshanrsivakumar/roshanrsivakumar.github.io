import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <Layout key={router.pathname}>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  )
}
