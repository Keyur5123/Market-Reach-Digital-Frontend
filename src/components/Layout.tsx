import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import logo from '../components/images/logo/logo.png'

interface LayoutProps {
  children: React.ReactNode
}

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              {/* <motion.div
                className="w-8 h-8 bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              /> */}
              <motion.img
                src={logo}
                alt="Market Reach Digital Logo"
                className="w-8 h-8 rounded-lg object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <span className="text-xl font-bold text-foreground">
                Market Reach Digital
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-purple-500 ${location.pathname === item.href
                    ? 'text-brand-purple-500'
                    : 'text-muted-foreground'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 text-white hover:opacity-90"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background border border-border rounded-lg mt-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors hover:text-brand-purple-500 ${location.pathname === item.href
                      ? 'text-brand-purple-500'
                      : 'text-muted-foreground'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {/* <div className="w-6 h-6 bg-gradient-to-r from-brand-pink-500 to-brand-purple-500 rounded-lg" />
                <span className="font-bold text-foreground">Market Reach Digital</span> */}
                <motion.img
                  src={logo}
                  alt="Market Reach Digital Logo"
                  className="w-8 h-8 rounded-lg object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
                <span className="font-bold text-foreground">Market Reach Digital</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Strategic marketing solutions that help businesses grow and reach their full potential.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/services" className="hover:text-brand-purple-500 transition-colors">SEO</Link></li>
                <li><Link to="/services" className="hover:text-brand-purple-500 transition-colors">Social Media Marketing</Link></li>
                <li><Link to="/services" className="hover:text-brand-purple-500 transition-colors">Google Ads</Link></li>
                <li><Link to="/services" className="hover:text-brand-purple-500 transition-colors">Website Development</Link></li>
                <li><Link to="/services" className="hover:text-brand-purple-500 transition-colors">Content Strategy</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/case-studies" className="hover:text-brand-purple-500 transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-brand-purple-500 transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-brand-purple-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:hello@marketreachdigital.com" className="hover:underline">
                    hello@marketreachdigital.com
                  </a>
                </li>
                <li>
                  <a href="tel:+61424211212" className="hover:underline">
                    +61 424 211 212
                  </a>
                </li>
                <li>1/47 Jaguar Drive, Clayton<br />Melborune, VIC 3168</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2025 Market Reach Digital. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple-500 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-sm text-muted-foreground hover:text-brand-purple-500 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
