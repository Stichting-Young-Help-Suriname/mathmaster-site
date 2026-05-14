const navLinks = [
  { label: 'Over Ons', href: '#over-ons' },
  { label: 'Wiskids Evenementen', href: '#wiskids' },
  { label: 'Math Master App', href: '#app' },
  { label: "Video's", href: '#videos' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    label: 'Wiskids Facebook',
    href: 'https://www.facebook.com/profile.php?id=61574927554483',
    icon: <FbIcon />,
  },
  {
    label: 'Wiskids YouTube',
    href: 'https://www.youtube.com/@WiskidsSuriname',
    icon: <YtIcon />,
  },
  {
    label: 'YHS Facebook',
    href: 'https://www.facebook.com/younghelpsuriname/',
    icon: <FbIcon />,
  },
  {
    label: 'YHS Website',
    href: 'https://www.younghelpsuriname.org/',
    icon: <GlobeIcon />,
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#040b12', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0">
              <img
                src="/assets/logo/mathmaster-icon.png"
                alt="MathMaster"
                style={{ width: 36, height: 36, objectFit: 'contain', display: 'block' }}
              />
            </div>
            <span className="font-black text-lg" style={{ color: '#f1f5f9', letterSpacing: '-0.02em' }}>
              Math<span style={{ color: '#F4A522' }}>Master</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(241,245,249,0.4)', lineHeight: 1.7 }}>
            Wiskunde op een leuke en interactieve manier leren voor
            leerlingen in Suriname — via een gratis app, evenementen
            en video's.
          </p>

          {/* Download button */}
          <a
            href="https://www.mediafire.com/file/v8avab7x42ij6gt/HypeMath28.apk/file"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-black"
            style={{ background: '#F4A522', color: '#040b12' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download de App
          </a>
        </div>

        {/* Navigation column */}
        <div>
          <div
            className="text-xs font-bold tracking-widest uppercase mb-5"
            style={{ color: 'rgba(241,245,249,0.25)' }}
          >
            Navigatie
          </div>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium transition-colors duration-150"
                  style={{ color: 'rgba(241,245,249,0.5)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f1f5f9')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(241,245,249,0.5)')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social / links column */}
        <div>
          <div
            className="text-xs font-bold tracking-widest uppercase mb-5"
            style={{ color: 'rgba(241,245,249,0.25)' }}
          >
            Volg Ons
          </div>
          <ul className="space-y-3">
            {socialLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
                  style={{ color: 'rgba(241,245,249,0.5)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f1f5f9')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(241,245,249,0.5)')}
                >
                  <span style={{ color: 'rgba(241,245,249,0.25)' }}>{l.icon}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* YHS column */}
        <div>
          <div
            className="text-xs font-bold tracking-widest uppercase mb-5"
            style={{ color: 'rgba(241,245,249,0.25)' }}
          >
            Het project
          </div>
          <div className="flex items-center gap-2.5 mb-4">
            <img
              src="/assets/logo/yhs-logo.png"
              alt="Young Help Suriname"
              className="w-8 h-8 rounded-full object-cover"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            />
            <span className="text-sm font-bold" style={{ color: 'rgba(241,245,249,0.6)' }}>
              Young Help Suriname
            </span>
          </div>
          <p className="text-xs leading-relaxed mb-5" style={{ color: 'rgba(241,245,249,0.3)', lineHeight: 1.7 }}>
            MathMaster is een initiatief van Young Help Suriname,
            met steun van het IDB Lab, The Back Lot Foundation en
            het Centrum voor Lerarenopleidingen.
          </p>
          <div className="text-xs mb-4" style={{ color: 'rgba(241,245,249,0.2)' }}>
            Met steun van:
          </div>
          <div className="space-y-1.5">
            {[
              'IDB Lab',
              'The Back Lot Foundation',
              'Ministerie van OWC',
              'Centrum voor Lerarenopleidingen',
            ].map((name) => (
              <div key={name} className="text-xs font-semibold" style={{ color: 'rgba(241,245,249,0.4)' }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="text-xs" style={{ color: 'rgba(241,245,249,0.2)' }}>
          © {new Date().getFullYear()} MathMaster · HYPE by{' '}
          <a
            href="https://www.younghelpsuriname.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(241,245,249,0.4)', textDecoration: 'underline', textUnderlineOffset: '2px' }}
          >
            Young Help Suriname
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.youtube.com/@WiskidsSuriname"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity"
            style={{ color: 'rgba(241,245,249,0.25)' }}
            aria-label="YouTube"
          >
            <YtIcon />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61574927554483"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity"
            style={{ color: 'rgba(241,245,249,0.25)' }}
            aria-label="Facebook Wiskids"
          >
            <FbIcon />
          </a>
          <a
            href="https://www.facebook.com/younghelpsuriname/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity"
            style={{ color: 'rgba(241,245,249,0.25)' }}
            aria-label="Facebook YHS"
          >
            <FbIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}

function FbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
    </svg>
  )
}

function YtIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}
