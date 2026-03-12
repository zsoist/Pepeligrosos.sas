import { useEffect, useRef } from 'react'

type PepeAvatarProps = {
  variant?: 'hero' | 'panel'
}

export function PepeAvatar({ variant = 'hero' }: PepeAvatarProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const leftEyeRef = useRef<SVGGElement | null>(null)
  const rightEyeRef = useRef<SVGGElement | null>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const leftEye = leftEyeRef.current
    const rightEye = rightEyeRef.current

    if (!wrapper || !leftEye || !rightEye) {
      return
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const leftCenter = { x: 118, y: 152 }
    const rightCenter = { x: 182, y: 152 }
    const cursor = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      lastMove: performance.now(),
    }

    let frame = 0

    const updatePupils = (offsetX: number, offsetY: number) => {
      leftEye.setAttribute('transform', `translate(${offsetX} ${offsetY})`)
      rightEye.setAttribute('transform', `translate(${offsetX} ${offsetY})`)
      leftEye.setAttribute('data-center-x', String(leftCenter.x))
      rightEye.setAttribute('data-center-x', String(rightCenter.x))
    }

    const handlePointerMove = (event: MouseEvent) => {
      cursor.x = event.clientX
      cursor.y = event.clientY
      cursor.lastMove = performance.now()
    }

    const animate = (time: number) => {
      const bounds = wrapper.getBoundingClientRect()
      const centerX = bounds.left + bounds.width / 2
      const centerY = bounds.top + bounds.height / 2
      const idle = time - cursor.lastMove > 1300

      let offsetX = 0
      let offsetY = 0

      if (!reduceMotion) {
        if (idle) {
          offsetX = Math.sin(time / 800) * 4
          offsetY = Math.cos(time / 1100) * 3
        } else {
          const dx = (cursor.x - centerX) / Math.max(bounds.width / 2, 1)
          const dy = (cursor.y - centerY) / Math.max(bounds.height / 2, 1)

          offsetX = Math.max(-6, Math.min(6, dx * 9))
          offsetY = Math.max(-5, Math.min(5, dy * 7))
        }
      }

      updatePupils(offsetX, offsetY)
      frame = window.requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handlePointerMove)
    frame = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', handlePointerMove)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={`pepe-avatar pepe-avatar--${variant}`}
      role="img"
      aria-label="Illustrated portrait of Pepe with eyes that react to cursor movement"
    >
      <svg
        className="pepe-avatar__body"
        viewBox="0 0 320 380"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hoodie" x1="160" x2="160" y1="200" y2="340">
            <stop offset="0%" stopColor="#202a34" />
            <stop offset="100%" stopColor="#121820" />
          </linearGradient>
          <linearGradient id="skin" x1="120" x2="205" y1="112" y2="190">
            <stop offset="0%" stopColor="#efbf8d" />
            <stop offset="100%" stopColor="#d69a6c" />
          </linearGradient>
          <linearGradient id="beard" x1="110" x2="200" y1="156" y2="246">
            <stop offset="0%" stopColor="#513322" />
            <stop offset="100%" stopColor="#2a170f" />
          </linearGradient>
          <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#060507" floodOpacity="0.22" />
          </filter>
        </defs>

        <circle cx="160" cy="170" r="122" fill="rgba(255,255,255,0.05)" />
        <path
          d="M68 334C83 274 114 244 160 244C206 244 237 274 252 334H68Z"
          fill="url(#hoodie)"
          filter="url(#soft-shadow)"
        />
        <path
          d="M108 250C120 229 138 218 160 218C182 218 200 229 212 250V333H108V250Z"
          fill="#0d1016"
          opacity="0.52"
        />
        <rect x="146" y="214" width="28" height="24" rx="9" fill="#d49465" />
        <ellipse cx="160" cy="150" rx="67" ry="78" fill="url(#skin)" />
        <ellipse cx="97" cy="160" rx="11" ry="16" fill="#db9d70" />
        <ellipse cx="223" cy="160" rx="11" ry="16" fill="#db9d70" />
        <path
          d="M110 94C118 66 140 48 160 48C180 48 202 66 210 94C194 78 176 72 160 72C144 72 126 78 110 94Z"
          fill="#3e2b20"
        />
        <path
          d="M104 176C104 142 130 118 160 118C190 118 216 142 216 176C216 214 191 246 160 246C129 246 104 214 104 176Z"
          fill="url(#beard)"
        />
        <path
          d="M117 116C130 104 145 98 160 98C175 98 190 104 203 116C193 88 177 73 160 73C143 73 127 88 117 116Z"
          fill="url(#skin)"
        />
        <path
          d="M119 181C132 196 146 204 160 204C174 204 188 196 201 181C200 208 183 226 160 226C137 226 120 208 119 181Z"
          fill="#f1ba8b"
        />
        <ellipse cx="138" cy="151" rx="22" ry="17" fill="#f6f4ee" />
        <ellipse cx="182" cy="151" rx="22" ry="17" fill="#f6f4ee" />
        <g ref={leftEyeRef}>
          <circle cx="118" cy="152" r="8.5" fill="#1e130d" />
          <circle cx="121" cy="149" r="2.6" fill="#ffffff" opacity="0.8" />
        </g>
        <g ref={rightEyeRef}>
          <circle cx="182" cy="152" r="8.5" fill="#1e130d" />
          <circle cx="185" cy="149" r="2.6" fill="#ffffff" opacity="0.8" />
        </g>
        <path
          d="M128 126C137 120 148 118 158 120"
          stroke="#4b2e1f"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M162 120C172 118 183 120 192 126"
          stroke="#4b2e1f"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M145 188C152 194 168 194 175 188"
          stroke="#6d3426"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M140 204C148 211 171 211 179 204"
          stroke="#2d160e"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M109 246C121 234 139 227 160 227C181 227 199 234 211 246"
          stroke="#d5dee9"
          strokeOpacity="0.08"
          strokeWidth="3"
        />
      </svg>
    </div>
  )
}
