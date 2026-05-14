import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  { src: '/assets/events/IMG_3571.jpg', caption: 'Het Wiskids-team op het evenement' },
  { src: '/assets/events/IMG_3564.jpg', caption: 'Grote zaal vol leerlingen' },
  { src: '/assets/events/IMG_3563.jpg', caption: 'Energie en enthousiasme in de groep' },
  { src: '/assets/events/IMG_3562.jpg', caption: 'Presentatie wiskundige concepten' },
  { src: '/assets/events/IMG_3567.jpg', caption: 'Kahoot-competitie tussen klassen' },
  { src: '/assets/events/IMG_3568.jpg', caption: 'Samenwerken aan een opdracht' },
  { src: '/assets/events/IMG_3559.jpg', caption: 'Klassikale les op school' },
  { src: '/assets/events/IMG_3572.jpg', caption: 'YHS-vrijwilligers begeleiden leerlingen' },
  { src: '/assets/events/IMG_3574.jpg', caption: 'Interactieve groepsopdracht' },
  { src: '/assets/events/IMG_3582.jpg', caption: 'Breuken leren in de klas' },
]

export default function Events() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 })
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section
      id="wiskids"
      ref={ref}
      className="py-24 px-6"
      style={{ background: '#0d1b2a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/assets/logo/wiskids-logo.png"
              alt="Wiskids Suriname"
              style={{ width: 40, height: 40, objectFit: 'contain', display: 'block', borderRadius: '50%' }}
            />
            <p
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: '#F4A522' }}
            >
              Wiskids Suriname · In de klas en op het podium
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2
                className="font-black leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#f1f5f9' }}
              >
                Wiskunde in actie
              </h2>
              <p
                className="mt-3 text-base max-w-lg"
                style={{ color: 'rgba(241,245,249,0.5)', lineHeight: 1.65 }}
              >
                Van klassikale lessen bij 12 scholen tot grote wiskundecompetities —
                Wiskids brengt leerlingen samen rond wiskunde.
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <a
                href="https://www.facebook.com/profile.php?id=61574927554483"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold"
                style={{
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.2)',
                  color: '#60a5fa',
                }}
              >
                <FacebookIcon />
                Wiskids Facebook
              </a>
            </div>
          </div>
        </motion.div>

        {/* Masonry photo grid */}
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setLightbox(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
              {/* Caption overlay */}
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to top, rgba(7,14,23,0.82) 0%, transparent 55%)',
                }}
              >
                <p
                  className="text-xs font-semibold leading-tight"
                  style={{ color: 'rgba(255,255,255,0.9)' }}
                >
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightbox}
              alt="Foto"
              className="max-h-[88vh] max-w-[90vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#f1f5f9' }}
              onClick={() => setLightbox(null)}
              aria-label="Sluiten"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
    </svg>
  )
}
