import { motion } from 'framer-motion'

type SectionIntroProps = {
  eyebrow: string
  title: string
  description: string
  theme?: 'dark' | 'light'
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  theme = 'dark',
}: SectionIntroProps) {
  return (
    <motion.div
      className={`section-intro section-intro--${theme}`}
      initial={{ opacity: 0, y: 24, filter: 'blur(16px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  )
}
