import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Full-bleed student photo */}
      <div className="absolute inset-0">
        <img
          src="/assets/events/IMG_3563.jpg"
          alt="Wiskids leerlingen bij evenement"
          className="w-full h-full object-cover object-center"
        />
        {/* Strong overlay so text is always legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(7,14,23,0.97) 0%, rgba(7,14,23,0.88) 45%, rgba(7,14,23,0.6) 100%)',
          }}
        />
        {/* Bottom fade to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to top, #0d1b2a 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-xl"
        >
          {/* YHS badge */}
          <div className="flex items-center gap-2.5 mb-6">
            <img
              src="/assets/logo/yhs-logo.png"
              alt="Young Help Suriname"
              className="w-7 h-7 rounded-full object-cover"
              style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}
            />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.14em' }}
            >
              Young Help Suriname
            </span>
          </div>

          {/* Orange accent rule */}
          <div
            style={{ width: 36, height: 3, background: '#F4A522', borderRadius: 2, marginBottom: 28 }}
          />

          {/* Headline */}
          <h1
            className="font-black leading-none mb-6"
            style={{
              fontSize: 'clamp(3.8rem, 10vw, 7.5rem)',
              color: '#ffffff',
              letterSpacing: '-0.03em',
            }}
          >
            Wiskunde
            <br />
            is{' '}
            <em
              style={{
                color: '#F4A522',
                fontStyle: 'italic',
                display: 'inline-block',
                transform: 'rotate(-1.5deg)',
                transformOrigin: 'left bottom',
                textShadow: '0 0 80px rgba(244,165,34,0.45)',
              }}
            >
              leuk.
            </em>
          </h1>

          {/* Sub */}
          <p
            className="text-base md:text-lg mb-10"
            style={{
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.65,
              fontWeight: 500,
              maxWidth: '38ch',
            }}
          >
            Een gratis Android-app, live wiskundecompetities en
            educatieve video's voor leerlingen in Suriname —
            leerjaar 9 &amp; 10.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#app"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-black text-base"
              style={{ background: '#F4A522', color: '#070e17' }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download de App
            </a>
            <a
              href="#wiskids"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-black text-base"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1.5px solid rgba(255,255,255,0.2)',
                color: '#ffffff',
              }}
            >
              Bekijk Wiskids
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
