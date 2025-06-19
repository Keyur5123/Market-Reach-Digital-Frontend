import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import ReactGA from "react-ga4"
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    ReactGA.initialize("G-N5JNNZ199W")
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "App.tsx" })
  }, [])
  
  return (
    <div className="min-h-screen bg-background dark">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <HomePage />
              </motion.div>
            }
          />
          <Route
            path="/services"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ServicesPage />
              </motion.div>
            }
          />
          <Route
            path="/case-studies"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CaseStudiesPage />
              </motion.div>
            }
          />
          <Route
            path="/blog"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BlogPage />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ContactPage />
              </motion.div>
            }
          />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
