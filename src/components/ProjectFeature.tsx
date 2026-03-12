import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import type { Project } from '../data/siteContent'

type ProjectFeatureProps = {
  project: Project
  reverse?: boolean
}

const reveal = {
  initial: { opacity: 0, y: 28, filter: 'blur(18px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.28 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
}

export function ProjectFeature({
  project,
  reverse = false,
}: ProjectFeatureProps) {
  return (
    <motion.article
      className={`project-feature ${reverse ? 'project-feature--reverse' : ''}`}
      style={{ '--accent': project.accent } as CSSProperties}
      {...reveal}
    >
      <div className="project-feature__content">
        <div className="project-feature__meta">
          <span>{project.category}</span>
          <span>{project.role}</span>
          <strong>{project.year}</strong>
        </div>
        <h3>{project.title}</h3>
        <p className="project-feature__summary">{project.summary}</p>
        <p>{project.note}</p>
        <div className="project-feature__stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-feature__links">
          {project.liveUrl ? (
            <a
              className="project-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {project.cta}
            </a>
          ) : (
            <span className="project-link project-link--muted">{project.cta}</span>
          )}
        </div>
      </div>

      <div className="project-feature__visual">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        ) : (
          <div className="project-feature__placeholder" aria-hidden="true" />
        )}
        <span className="project-feature__detail">{project.visualLabel}</span>
      </div>
    </motion.article>
  )
}

export function ProjectGridCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="project-grid-card"
      style={{ '--accent': project.accent } as CSSProperties}
      {...reveal}
    >
      <div className="project-grid-card__meta">
        <span>{project.category}</span>
        <span>{project.role}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>

      <div className="project-grid-card__visual">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        ) : (
          <div className="project-grid-card__placeholder" aria-hidden="true" />
        )}
        <span className="project-grid-card__detail">{project.visualLabel}</span>
      </div>

      {project.liveUrl ? (
        <a
          className="project-link"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          {project.cta}
        </a>
      ) : (
        <span className="project-link project-link--muted">{project.cta}</span>
      )}
    </motion.article>
  )
}
