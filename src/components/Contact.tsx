import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const socials = [
  {
    platform: 'Facebook',
    page: 'Wiskids Suriname',
    description: 'Evenementen, updates en foto\'s van de Wiskids-projecten.',
    href: 'https://www.facebook.com/profile.php?id=61574927554483',
    color: '#1877F2',
    bg: '#1877F2',
    icon: <FbIcon size={28} />,
  },
  {
    platform: 'YouTube',
    page: '@WiskidsSuriname',
    description: 'Gratis wiskundevideo\'s voor leerjaar 9 & 10 op het VOJ-curriculum.',
    href: 'https://www.youtube.com/@WiskidsSuriname',
    color: '#FF0000',
    bg: '#FF0000',
    icon: <YtIcon size={28} />,
  },
  {
    platform: 'Facebook',
    page: 'Young Help Suriname',
    description: 'Het volledige YHS-netwerk: STEM, robotics en community-projecten.',
    href: 'https://www.facebook.com/younghelpsuriname/',
    color: '#1877F2',
    bg: '#1877F2',
    icon: <FbIcon size={28} />,
  },
  {
    platform: 'Website',
    page: 'younghelpsuriname.org',
    description: 'Meer over de missie, programma\'s en het team van Young Help Suriname.',
    href: 'https://www.younghelpsuriname.org/',
    color: '#22d3ee',
    bg: '#0891b2',
    icon: <GlobeIcon size={28} />,
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 })

  return (
    <section id="contact" ref={ref} className="py-24 px-6" style={{ background: '#0d1b2a' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="font-black leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#f1f5f9' }}
          >
            Blijf op de hoogte
          </h2>
          <p className="mt-3 text-base max-w-lg" style={{ color: 'rgba(241,245,249,0.5)', lineHeight: 1.65 }}>
            Volg Wiskids en Young Help Suriname op social media voor de nieuwste
            updates over evenementen, video's en app-releases.
          </p>
        </motion.div>

        {/* 2×2 social cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {socials.map((s, i) => (
            <motion.a
              key={s.page}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group flex gap-4 p-6 rounded-2xl transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              }}
            >
              {/* Platform icon with brand color */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: s.bg }}
              >
                {s.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold mb-0.5" style={{ color: 'rgba(241,245,249,0.35)' }}>
                  {s.platform}
                </div>
                <div className="font-black text-sm mb-2" style={{ color: '#f1f5f9' }}>
                  {s.page}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(241,245,249,0.4)', lineHeight: 1.6 }}>
                  {s.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="shrink-0 self-center opacity-30 group-hover:opacity-70 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA banner — real photo background */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Background photo */}
          <img
            src="/assets/events/IMG_3564.jpg"
            alt="Wiskids evenement"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.25 }}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(13,27,42,0.7)' }}
          />

          <div className="relative z-10 px-6 sm:px-10 py-10 sm:py-14 text-center">
            <span className="inline-block w-14 h-14 rounded-2xl overflow-hidden mb-5 mx-auto">
              <img
                src="/assets/logo/mathmaster-icon.png"
                alt="Math Master"
                style={{ width: 56, height: 56, objectFit: 'contain', display: 'block' }}
              />
            </span>

            <h3
              className="font-black mb-3"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#f1f5f9' }}
            >
              Klaar om te spelen?
            </h3>
            <p
              className="text-base max-w-sm mx-auto mb-8"
              style={{ color: 'rgba(241,245,249,0.55)', lineHeight: 1.65 }}
            >
              Download Math Master gratis en begin vandaag met wiskunde leren
              op een leuke manier.
            </p>
            <a
              href="https://www.mediafire.com/file/v8avab7x42ij6gt/HypeMath28.apk/file"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-black text-base"
              style={{ background: '#F4A522', color: '#070e17' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download de App
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function FbIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
    </svg>
  )
}

function YtIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
    </svg>
  )
}

function GlobeIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}
