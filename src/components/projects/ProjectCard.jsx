import React, { useRef, useState, useEffect } from 'react'

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val))
}

export default function ProjectCard({ project }) {
  const cardRef = useRef(null)
  const imgRef = useRef(null)
  const [isHover, setIsHover] = useState(false)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [isTouch, setIsTouch] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setIsTouch(typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0))
    setReduceMotion(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    const el = cardRef.current
    if (!el || isTouch || reduceMotion) return

    function handleMove(e) {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const rx = clamp((y - 0.5) * -1 * 5, -5, 5) // rotateX
      const ry = clamp((x - 0.5) * 5, -5, 5) // rotateY
      setTilt({ rx, ry })
    }
    function handleLeave() {
      setTilt({ rx: 0, ry: 0 })
      setIsHover(false)
    }
    function handleEnter() {
      setIsHover(true)
    }

    el.addEventListener('pointermove', handleMove)
    el.addEventListener('pointerleave', handleLeave)
    el.addEventListener('pointerenter', handleEnter)

    return () => {
      el.removeEventListener('pointermove', handleMove)
      el.removeEventListener('pointerleave', handleLeave)
      el.removeEventListener('pointerenter', handleEnter)
    }
  }, [isTouch, reduceMotion])

  const transformStyle = {
    transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(${isHover ? 6 : 0}px)`,
    transition: tilt.rx === 0 && tilt.ry === 0 ? 'transform 300ms ease' : 'transform 100ms linear'
  }

  return (
    <article
      ref={cardRef}
      className="bg-[rgba(255,255,255,0.04)] border border-white/10 rounded-2xl shadow-lg overflow-hidden will-change-transform"
      style={{ ...transformStyle }}
    >
      <div className="relative overflow-hidden">
        {project.img && (
          <img
            ref={imgRef}
            src={project.img}
            alt={project.name ? `${project.name} screenshot` : 'Project screenshot'}
            className={`w-full h-56 object-cover transition-transform duration-500 ease-out ${isHover ? 'scale-105' : ''}`}
            draggable={false}
          />
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white/90 mb-2">{project.name}</h3>
        {project.desc && <p className="text-sm text-white/70 mb-4">{project.desc}</p>}

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((t, i) => (
              <span key={i} className="text-xs bg-white/6 backdrop-blur-sm px-2 py-1 rounded-full border border-white/8 text-white/80">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 text-sm font-medium rounded-md bg-white/6 border border-white/8 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 text-sm font-medium rounded-md bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
