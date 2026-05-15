import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const CHANNEL = 'https://www.youtube.com/@WiskidsSuriname'

const videos = [
  {
    id: 'OxtKE0U-QB4',
    title: 'Hoeken',
    href: 'https://www.youtube.com/watch?v=OxtKE0U-QB4',
  },
  {
    id: 'UtQLiBUPiUU',
    title: 'Oppervlakte, omtrek en inhoud van een balk en kubus',
    href: 'https://www.youtube.com/watch?v=UtQLiBUPiUU',
  },
  {
    id: '6saHpGg6DIU',
    title: 'Basishoogte, omtrek en oppervlakte van een driehoek',
    href: 'https://www.youtube.com/watch?v=6saHpGg6DIU',
  },
  {
    id: 'Lht1BTL72MY',
    title: 'Delen met negatieve getallen',
    href: 'https://www.youtube.com/watch?v=Lht1BTL72MY',
  },
  {
    id: 'HaWLJy0IE_4',
    title: 'Vermenigvuldigen van breuken',
    href: 'https://www.youtube.com/watch?v=HaWLJy0IE_4',
  },
  {
    id: 'CPGLEWwz7WI',
    title: 'Verband tussen procenten, verhoudingen, breuken en decimalen',
    href: 'https://www.youtube.com/watch?v=CPGLEWwz7WI',
  },
]

function thumb(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

export default function VideoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section
      id="videos"
      ref={ref}
      className="py-16 sm:py-24 px-6"
      style={{ background: '#0a1520' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: '#FF0000' }}
              >
                <YTIcon size={18} />
              </div>
              <span className="font-black text-sm" style={{ color: '#f1f5f9' }}>
                Wiskids Suriname
              </span>
              <span className="text-xs" style={{ color: 'rgba(241,245,249,0.3)' }}>
                @WiskidsSuriname
              </span>
            </div>
            <h2
              className="font-black leading-tight mb-3"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#f1f5f9' }}
            >
              Gratis wiskundevideo's
            </h2>
            <p className="text-base max-w-lg" style={{ color: 'rgba(241,245,249,0.5)', lineHeight: 1.7 }}>
              Stap-voor-stap uitleg van wiskundeonderwerpen uit het VOJ-curriculum —
              gemaakt in samenwerking met leerkrachten van 12 scholen.
            </p>
          </div>

          <a
            href={CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm"
            style={{
              background: '#FF0000',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <YTIcon size={15} />
            Abonneren
          </a>
        </motion.div>

        {/* Video grid — 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((v, i) => (
            <motion.a
              key={v.id}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 + 0.1, duration: 0.5 }}
              className="group block rounded-2xl overflow-hidden"
              style={{
                background: '#0d1b2a',
                border: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              }}
            >
              {/* Thumbnail */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '16 / 9', background: '#0d1b2a' }}
              >
                <img
                  src={thumb(v.id)}
                  alt={v.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: 'rgba(0,0,0,0.25)' }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex items-center justify-center rounded-full transition-all duration-250 group-hover:scale-110"
                    style={{
                      width: 52,
                      height: 52,
                      background: 'rgba(255,0,0,0.92)',
                      boxShadow: '0 4px 24px rgba(255,0,0,0.5)',
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>

                {/* Duration chip */}
                <div
                  className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-2 py-1 rounded-md"
                  style={{ background: 'rgba(0,0,0,0.75)' }}
                >
                  <YTIcon size={10} />
                  <span className="text-xs font-bold text-white">YouTube</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4">
                <div
                  className="text-xs font-semibold mb-2"
                  style={{ color: '#f87171' }}
                >
                  Wiskids · Leerjaar 9 &amp; 10
                </div>
                <p
                  className="font-black text-sm leading-snug"
                  style={{ color: '#f1f5f9' }}
                >
                  {v.title}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div>
            <p className="font-bold text-sm" style={{ color: '#f1f5f9' }}>
              Alle video's volledig gratis op YouTube
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(241,245,249,0.35)' }}>
              Abonneer op het kanaal voor de nieuwste afleveringen.
            </p>
          </div>
          <a
            href={CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#f1f5f9',
              textDecoration: 'none',
            }}
          >
            Bekijk alle video's
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}

function YTIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
    </svg>
  )
}
