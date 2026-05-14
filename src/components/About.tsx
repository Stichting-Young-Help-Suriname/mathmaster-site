import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const pillars = [
  {
    icon: <LightbulbIcon />,
    title: 'Inspire',
    description:
      "Via interactieve lessen en uitdagende spellen wekken we passie voor wiskunde in leerlingen die dachten dat wiskunde niet voor hen was.",
  },
  {
    icon: <ShieldIcon />,
    title: 'Empower',
    description:
      'We bouwen kennis en zelfvertrouwen op — zodat elke leerling de tools heeft om te slagen, op school en ver daarna.',
  },
  {
    icon: <TargetIcon />,
    title: 'Impact',
    description:
      "Via evenementen, apps en video's bereiken we honderden leerlingen in heel Suriname — samen met scholen, ouders en leerkrachten.",
  },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="over-ons"
      ref={ref}
      className="py-24 px-6"
      style={{ background: '#0d1b2a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top: label + headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: '#22d3ee' }}
          >
            Over het project
          </p>
          <h2
            className="font-black leading-tight mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#f1f5f9' }}
          >
            Wiskunde toegankelijk maken voor elke Surinaamse leerling
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'rgba(241,245,249,0.55)', lineHeight: 1.7 }}
          >
            MathMaster is een initiatief van{' '}
            <a
              href="https://www.younghelpsuriname.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#22d3ee', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Young Help Suriname
            </a>
            {' '}— een team van jonge vrijwilligers die via het HYPE-project
            (Helping Youth Progress in Education) wiskunde leuk en begrijpelijk maken.
            In samenwerking met het IDB Lab, The Back Lot Foundation en het
            Centrum voor Lerarenopleidingen.
          </p>

          {/* Partner logos */}
          <div
            className="mt-8 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: 'rgba(241,245,249,0.2)' }}
            >
              Met steun van
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'IDB Lab',
                'The Back Lot Foundation',
                'Ministerie van OWC',
                'Centrum voor Lerarenopleidingen',
              ].map((name) => (
                <span
                  key={name}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(241,245,249,0.55)',
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Two-column: pillars left, YHS card right */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Pillars */}
          <div className="space-y-0">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.15, duration: 0.5 }}
                className="flex gap-5 py-7"
                style={{
                  borderBottom: i < pillars.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee' }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3
                    className="font-black text-base mb-1.5"
                    style={{ color: '#f1f5f9' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(241,245,249,0.5)', lineHeight: 1.7 }}
                  >
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* YHS organisation card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: '#111e2e',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Card header with real event photo */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/assets/events/IMG_3562.jpg"
                  alt="Wiskids team"
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 30%, #111e2e 100%)',
                  }}
                />
              </div>

              <div className="px-6 pb-6 -mt-8 relative">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/assets/logo/yhs-logo.png"
                    alt="YHS"
                    className="w-12 h-12 rounded-full object-cover"
                    style={{ border: '2px solid #111e2e' }}
                  />
                  <div>
                    <div className="font-black text-base" style={{ color: '#f1f5f9' }}>
                      Young Help Suriname
                    </div>
                    <div className="text-xs font-semibold" style={{ color: '#22d3ee' }}>
                      Empower · Inspire · Impact
                    </div>
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: 'rgba(241,245,249,0.5)', lineHeight: 1.7 }}
                >
                  YHS is een Surinaamse stichting van jonge professionals die hun
                  tijd en kennis vrijwillig inzetten voor duurzame verandering via
                  STEM-onderwijs, ondernemerschap en community-projecten.
                </p>

                <div className="flex gap-2">
                  <a
                    href="https://www.younghelpsuriname.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-bold"
                    style={{
                      background: 'rgba(34,211,238,0.1)',
                      border: '1px solid rgba(34,211,238,0.2)',
                      color: '#22d3ee',
                    }}
                  >
                    Website →
                  </a>
                  <a
                    href="https://www.facebook.com/younghelpsuriname/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-bold"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(241,245,249,0.5)',
                    }}
                  >
                    Facebook →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* Inline SVG icons — purposeful and clean */
function LightbulbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18"/>
      <line x1="10" y1="22" x2="14" y2="22"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  )
}
