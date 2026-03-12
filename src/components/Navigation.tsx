import { AnimatePresence, motion } from 'framer-motion'

type NavigationProps = {
  links: Array<{ href: string; label: string }>
  menuOpen: boolean
  onToggle: () => void
  onNavigate: () => void
}

export function Navigation({
  links,
  menuOpen,
  onToggle,
  onNavigate,
}: NavigationProps) {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#home" onClick={onNavigate}>
          <strong>Pepe</strong>
          <span>Frontend craft</span>
        </a>

        <nav className="nav__desktop" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__status">Available for select work</div>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={onToggle}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-navigation"
            className="nav__mobile"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={onNavigate}>
                {link.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
