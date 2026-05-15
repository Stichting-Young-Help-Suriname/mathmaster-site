import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'

const screens = [
  { src: '/assets/app/screen-login.jpeg', label: 'Inloggen', desc: 'Google of eigen account' },
  { src: '/assets/app/screen-topics.jpeg', label: 'Kies onderwerp', desc: 'Breuken, Gemiddelden, Driehoeken & meer' },
  { src: '/assets/app/screen-quiz.jpeg', label: 'Quiz', desc: 'Meerkeuze met score en levens' },
  { src: '/assets/app/screen-game.jpeg', label: 'Sorteeractiviteit', desc: 'Sleep driehoeken op tijd' },
  { src: '/assets/app/screen-adventure.jpeg', label: 'Avontuurmodus', desc: 'Papegaai begeleidt je door het spel' },
  { src: '/assets/app/screen-average.jpeg', label: 'Gemiddelden', desc: 'Visuele vraagstukken' },
  { src: '/assets/app/screen-topics2.jpeg', label: 'Overzicht', desc: 'Alle beschikbare lessen' },
]

export default function AppSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 })
  const [active, setActive] = useState(0)

  return (
    <section
      id="app"
      ref={ref}
      className="py-16 sm:py-24 px-6"
      style={{ background: '#070e17' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: screenshot viewer */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-black leading-tight mb-3"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#f1f5f9' }}
            >
              De wiskundige app voor Surinaamse leerlingen
            </h2>
            <p className="text-sm mb-8" style={{ color: 'rgba(241,245,249,0.45)', lineHeight: 1.65 }}>
              HYPE by YHS — gratis Android-app met interactieve quizzen,
              sorteeractiviteiten en 6 onderwerpen op basis van het VOJ-curriculum.
            </p>

            {/* Screen frame — proper landscape 16:9 ratio */}
            <div
              className="relative w-full overflow-hidden rounded-xl mb-3"
              style={{
                aspectRatio: '16 / 9',
                background: '#000',
                boxShadow: '0 0 0 2px rgba(255,255,255,0.07), 0 24px 48px rgba(0,0,0,0.7)',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={screens[active].src}
                  alt={screens[active].label}
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: 'fill' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            </div>

            {/* Screen label */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold" style={{ color: '#F4A522' }}>
                {screens[active].label}
              </span>
              <span className="text-xs" style={{ color: 'rgba(241,245,249,0.3)' }}>
                {screens[active].desc}
              </span>
            </div>

            {/* Thumbnail row */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
              {screens.map((s, i) => (
                <button
                  key={s.src}
                  onClick={() => setActive(i)}
                  aria-label={s.label}
                  className="relative overflow-hidden rounded-lg"
                  style={{
                    aspectRatio: '16 / 9',
                    outline: i === active ? '2px solid #F4A522' : '2px solid transparent',
                    outlineOffset: '1px',
                    opacity: i === active ? 1 : 0.38,
                    transition: 'opacity 0.15s, outline-color 0.15s',
                  }}
                >
                  <img
                    src={s.src}
                    alt={s.label}
                    className="w-full h-full"
                    style={{ objectFit: 'fill' }}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: app info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pt-14"
          >
            {/* App identity */}
            <div
              className="flex items-center gap-5 mb-8 pb-8"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="shrink-0 rounded-2xl overflow-hidden"
                style={{ width: 96, height: 96, boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.5)' }}
              >
                <img
                  src="/assets/logo/mathmaster-icon.png"
                  alt="Math Master icon"
                  style={{ width: 96, height: 96, objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div>
                <div className="font-black text-2xl" style={{ color: '#f1f5f9', letterSpacing: '-0.02em' }}>
                  Math Master
                </div>
                <div className="text-sm mt-1" style={{ color: 'rgba(241,245,249,0.35)' }}>
                  HYPE by YHS &nbsp;·&nbsp; Versie 1.0 &nbsp;·&nbsp; Android
                </div>
              </div>
            </div>

            {/* What's in the app */}
            <div className="space-y-0 mb-10">
              {[
                {
                  title: 'Gamification met score & levens',
                  body: 'Elke les wordt een spel — met 3 levens, een scorebord en tijdslimieten die het uitdagend houden.',
                },
                {
                  title: '6 onderwerpen, VOJ-curriculum',
                  body: 'Breuken, Gemiddelden, Driehoeken, Hoeken, Negatieve getallen en Decimalen voor leerjaar 9 & 10.',
                },
                {
                  title: 'Meerdere speeltypen',
                  body: "Van klassieke meerkeuze-quizzen tot visuele sorteeractiviteiten met cartoon-begeleiders.",
                },
                {
                  title: 'Volledig gratis',
                  body: 'Geen abonnement, geen advertenties. Download de APK direct via de knop hieronder.',
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex gap-4 py-4"
                  style={{
                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}
                >
                  <span
                    className="shrink-0 font-black leading-none select-none"
                    aria-hidden
                    style={{
                      fontSize: '1.5rem',
                      color: 'rgba(244,165,34,0.25)',
                      letterSpacing: '-0.04em',
                      marginTop: '0.05rem',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="font-black text-sm mb-1" style={{ color: '#f1f5f9' }}>
                      {f.title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: 'rgba(241,245,249,0.45)', lineHeight: 1.65 }}>
                      {f.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download */}
            <a
              href="https://www.mediafire.com/file/v8avab7x42ij6gt/HypeMath28.apk/file"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-black text-base mb-3"
              style={{ background: '#F4A522', color: '#070e17' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download APK — Gratis
            </a>
            <p className="text-xs" style={{ color: 'rgba(241,245,249,0.22)' }}>
              Vereist Android 5.0+. Schakel "Onbekende bronnen" in bij installatie.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
