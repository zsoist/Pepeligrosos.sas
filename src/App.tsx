import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { PepeAvatar } from './components/PepeAvatar'
import { ProjectFeature, ProjectGridCard } from './components/ProjectFeature'
import { SectionIntro } from './components/SectionIntro'
import {
  aboutPillars,
  capabilities,
  collaborationFocus,
  contactLinks,
  featuredProjects,
  heroSignals,
  heroStats,
  navigationLinks,
  trustPoints,
} from './data/siteContent'

const heroPreviewClasses = [
  'hero__floating-card hero__floating-card--north',
  'hero__floating-card hero__floating-card--west',
  'hero__floating-card hero__floating-card--east',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const featured = featuredProjects.slice(0, 2)
  const secondary = featuredProjects.slice(2)

  return (
    <div className="site-shell">
      <Navigation
        links={navigationLinks}
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />

      <main>
        <section id="home" className="hero">
          <div className="hero__aurora" aria-hidden="true" />
          <div className="hero__grain" aria-hidden="true" />

          <div className="container hero__grid">
            <motion.div
              className="hero__copy"
              initial={{ opacity: 0, y: 32, filter: 'blur(18px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow">Colombia based frontend developer</p>
              <h1 className="hero__headline">
                <span>Pepe</span>
                <span>Lancheros</span>
              </h1>
              <p className="hero__lede">
                Warm, cinematic frontend experiences built with accessibility,
                motion and visual care.
              </p>
              <p className="hero__body">
                Sebastian Lancheros, better known as Pepe, creates thoughtful
                websites that feel precise in structure, polished in motion and
                deeply human in tone.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="#work">
                  View selected work
                </a>
                <a className="button button--ghost" href="#contact">
                  Start a conversation
                </a>
              </div>

              <ul className="hero__tags" aria-label="Core strengths">
                <li>5+ years of frontend craft</li>
                <li>Design-aware implementation</li>
                <li>Accessible by default</li>
              </ul>
            </motion.div>

            <motion.div
              className="hero__stage"
              initial={{ opacity: 0, scale: 0.96, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="hero__halo" aria-hidden="true" />
              {featuredProjects.slice(0, 3).map((project, index) => (
                <motion.article
                  key={project.title}
                  className={heroPreviewClasses[index]}
                  initial={{ opacity: 0, y: 16, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.35 + index * 0.12 }}
                >
                  <div className="hero__floating-image">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading="eager"
                      />
                    ) : (
                      <div className="hero__floating-placeholder" />
                    )}
                  </div>
                  <div className="hero__floating-copy">
                    <span>{project.category}</span>
                    <strong>{project.title}</strong>
                  </div>
                </motion.article>
              ))}

              <PepeAvatar variant="hero" />

              <motion.div
                className="hero__note"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8 }}
              >
                <span className="hero__note-kicker">Core mechanic kept</span>
                <p>
                  Leave the cursor still and Pepe keeps scanning the room with
                  small, idle eye movements.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="container hero__metrics">
            {heroStats.map((item) => (
              <motion.article
                key={item.label}
                className="metric-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7 }}
              >
                <p className="metric-card__value">{item.value}</p>
                <p className="metric-card__label">{item.label}</p>
                <p className="metric-card__detail">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="signal-strip" aria-label="Signals">
          <div className="signal-strip__track">
            {[...heroSignals, ...heroSignals].map((signal, index) => (
              <span className="signal-strip__item" key={`${signal}-${index}`}>
                {signal}
              </span>
            ))}
          </div>
        </section>

        <section id="work" className="section section--ink">
          <div className="container">
            <SectionIntro
              eyebrow="Selected work"
              title="Projects presented like scenes, not thumbnails."
              description="A curated set of builds that show Pepe at his best: accessible thinking, strong structure, visual care and modern frontend execution."
            />

            <div className="project-stack">
              {featured.map((project, index) => (
                <ProjectFeature
                  key={project.title}
                  project={project}
                  reverse={Boolean(index % 2)}
                />
              ))}
            </div>

            <div className="project-grid">
              {secondary.map((project) => (
                <ProjectGridCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section--sand">
          <div className="container about__layout">
            <div className="about__copy">
              <SectionIntro
                eyebrow="About Pepe"
                title="A frontend builder with a maker's instinct and an editorial eye."
                description="The warmth from the original portfolio stays. The difference is that now it lands with more intention, more presence and more confidence."
                theme="light"
              />

              <p>
                Sebastian Lancheros, but everybody calls him Pepe. He came to
                the web through curiosity first: electronics engineering,
                photography, visual experimentation and then years of
                self-taught frontend craft.
              </p>
              <p>
                That mix still defines the work. He cares about interfaces that
                feel clear at first glance, elegant under motion and considerate
                for the people using them. Accessibility, responsive behavior
                and visual rhythm are treated as part of the same system.
              </p>

              <blockquote className="pull-quote">
                “The best interfaces feel quietly intentional. You notice the
                care, not the friction.”
              </blockquote>
            </div>

            <div className="about__visual">
              <motion.article
                className="about__portrait-panel"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8 }}
              >
                <div className="about__portrait-copy">
                  <span>Pepe, in practice</span>
                  <h3>Human warmth. Visual sensitivity. Frontend discipline.</h3>
                </div>
                <PepeAvatar variant="panel" />
              </motion.article>

              <div className="about__cards">
                {aboutPillars.map((pillar) => (
                  <motion.article
                    key={pillar.title}
                    className="about-card"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.65 }}
                  >
                    <span>{pillar.kicker}</span>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section section--ink">
          <div className="container">
            <SectionIntro
              eyebrow="Capabilities"
              title="A premium strengths section, not a generic stack dump."
              description="Pepe works across visual refinement, technical execution and interface usability, treating each build as both a system and a story."
            />

            <div className="capabilities-grid">
              {capabilities.map((capability) => (
                <motion.article
                  key={capability.title}
                  className="capability-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65 }}
                >
                  <div className="capability-card__topline">
                    <span>{capability.kicker}</span>
                    <strong>{capability.note}</strong>
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <ul>
                    {capability.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--sand section--proof">
          <div className="container proof__layout">
            <div className="proof__copy">
              <SectionIntro
                eyebrow="Proof and fit"
                title="Credibility without losing warmth."
                description="The site closes the gap between creative energy and professional confidence: clear experience signals, sharper positioning and easy ways to reach out."
                theme="light"
              />

              <p className="proof__body">
                Pepe is currently a strong fit for design-minded product teams,
                thoughtful agencies, freelancers needing a frontend partner and
                brands that want their site to feel more crafted than
                conventional.
              </p>

              <div className="proof__focus">
                {collaborationFocus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="proof__grid">
              {trustPoints.map((point) => (
                <motion.article
                  key={point.title}
                  className="proof-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65 }}
                >
                  <span>{point.kicker}</span>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact__aurora" aria-hidden="true" />
          <div className="container">
            <motion.div
              className="contact__panel"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact__copy">
                <p className="eyebrow">Contact</p>
                <h2>Let&apos;s build something people remember.</h2>
                <p>
                  Available for frontend roles, freelance collaborations and
                  design-aware web projects that need both clarity and
                  character.
                </p>
              </div>

              <div className="contact__actions">
                <a
                  className="button button--primary"
                  href="mailto:pepe.lancheros@gmail.com"
                >
                  Send an email
                </a>
                <a
                  className="button button--ghost"
                  href="https://www.linkedin.com/in/sebastian-lancheros/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>

            <div className="contact__details">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  className="contact-link"
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                >
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
