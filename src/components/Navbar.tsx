import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'Over Ons', href: '#over-ons' },
  { label: 'Wiskids', href: '#wiskids' },
  { label: 'App', href: '#app' },
  { label: "Video's", href: '#videos' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(7,14,23,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-xl overflow-hidden shrink-0 block" style={{ minWidth: 32 }}>
            <img
              src="/assets/logo/mathmaster-icon.png"
              alt="MathMaster"
              style={{ width: 32, height: 32, objectFit: 'contain', display: 'block' }}
            />
          </span>
          <span className="font-black text-lg" style={{ color: '#f1f5f9', letterSpacing: '-0.02em' }}>
            Math<span style={{ color: '#F4A522' }}>Master</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold transition-colors duration-150"
              style={{ color: 'rgba(241,245,249,0.55)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f1f5f9')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(241,245,249,0.55)')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.mediafire.com/file/v8avab7x42ij6gt/HypeMath28.apk/file"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-black transition-opacity duration-150"
            style={{ background: '#F4A522', color: '#070e17' }}
          >
            Download App
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menu openen"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-px transition-all duration-250 origin-center"
              style={{
                background: '#f1f5f9',
                ...(i === 0 && open ? { transform: 'rotate(45deg) translate(4px, 4px)' } : {}),
                ...(i === 1 && open ? { opacity: 0 } : {}),
                ...(i === 2 && open ? { transform: 'rotate(-45deg) translate(4px, -4px)' } : {}),
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ background: 'rgba(7,14,23,0.98)', overflow: 'hidden' }}
          >
            <div className="px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center py-3.5 text-sm font-semibold"
                  style={{
                    color: 'rgba(241,245,249,0.7)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://www.mediafire.com/file/v8avab7x42ij6gt/HypeMath28.apk/file"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 flex justify-center px-5 py-3 rounded-xl text-sm font-black"
                style={{ background: '#F4A522', color: '#070e17' }}
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
