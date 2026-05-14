import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Nieuwe speltypen',
    body: 'Extra interactieve activiteiten naast de klassieke quiz en sorteeractiviteit.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Klassement',
    body: 'Speel tegen klasgenoten en zie wie de beste wiskundige van de klas is.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Meer onderwerpen',
    body: 'Uitbreiding naar meer vakgebieden en leerjaren binnen het VOJ-curriculum.',
  },
]

export default function ComingSoon() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden" style={{ background: '#070e17' }}>

      {/* Giant "2.0" in the background */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block"
        aria-hidden
        style={{
          fontSize: 'clamp(14rem, 22vw, 22rem)',
          fontWeight: 900,
          fontFamily: "'Nunito', sans-serif",
          color: 'transparent',
          WebkitTextStroke: '2px rgba(244,165,34,0.07)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        2.0
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span
            className="inline-block px-3 py-1 rounded-md text-xs font-black tracking-wider"
            style={{ background: 'rgba(244,165,34,0.12)', color: '#F4A522', border: '1px solid rgba(244,165,34,0.2)' }}
          >
            Binnenkort
          </span>
        </motion.div>

        {/* Main block */}
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left: heading + progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.05 }}
          >
            <div className="flex items-center gap-5 mb-6">
              <div
                className="w-16 h-16 rounded-2xl overflow-hidden shrink-0"
                style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08)' }}
              >
                <img
                  src="/assets/logo/mathmaster-icon.png"
                  alt="Math Master 2.0"
                  style={{ width: 64, height: 64, objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div>
                <div
                  className="font-black leading-none"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#f1f5f9', letterSpacing: '-0.03em' }}
                >
                  Math Master
                  <br />
                  <span style={{ color: '#F4A522' }}>2.0</span>
                </div>
              </div>
            </div>

            <p
              className="text-base mb-8 max-w-md"
              style={{ color: 'rgba(241,245,249,0.5)', lineHeight: 1.7 }}
            >
              De volgende versie is in actieve ontwikkeling. Hetzelfde
              speelse karakter dat leerlingen kennen — met nieuwe
              uitdagingen, meer onderwerpen en een klassement.
            </p>

            {/* Progress bar */}
            <div className="max-w-sm">
              <div
                className="flex justify-between text-xs font-semibold mb-2"
                style={{ color: 'rgba(241,245,249,0.25)' }}
              >
                <span>Ontwikkeling</span>
                <span>Release</span>
              </div>
              <div
                className="h-1 w-full rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '62%' } : {}}
                  transition={{ duration: 1.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #22d3ee 0%, #F4A522 100%)' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                className="flex gap-4 p-5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(244,165,34,0.08)', color: '#F4A522' }}
                >
                  {f.icon}
                </div>
                <div>
                  <div className="font-black text-sm mb-1" style={{ color: '#f1f5f9' }}>
                    {f.title}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(241,245,249,0.4)', lineHeight: 1.65 }}>
                    {f.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
