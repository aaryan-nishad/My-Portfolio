import React, { useEffect, useRef } from 'react'
import heroImg from '../../assets/img.png'
import hiIcon from '../../assets/hi.png'
import reactIcon from '../../assets/react.png'
import nodeIcon from '../../assets/node.png'
import mongoIcon from '../../assets/mongo.png'
import jsIcon from '../../assets/javascript.png'

function HeroVisual() {
  const containerRef = useRef(null)
  const visualRef = useRef(null)
  const frameRef = useRef(null)
  const pointer = useRef({ x: 0, y: 0 })
  const rotation = useRef({ x: 0, y: 0 })
  const isMotionDisabled = useRef(false)

  useEffect(() => {
    if (!window) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
    isMotionDisabled.current = prefersReducedMotion || isTouch

    if (isMotionDisabled.current) {
      if (visualRef.current) {
        visualRef.current.style.transform = 'rotateX(4deg) rotateY(-5deg)'
      }
      return
    }

    const animate = () => {
      if (!visualRef.current) {
        frameRef.current = null
        return
      }

      const dx = pointer.current.x - rotation.current.x
      const dy = pointer.current.y - rotation.current.y
      rotation.current.x += dx * 0.12
      rotation.current.y += dy * 0.12

      visualRef.current.style.transform = `rotateX(${4 + rotation.current.y}deg) rotateY(${-5 + rotation.current.x}deg)`

      if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        frameRef.current = null
      }
    }

    const onMouseMove = (event) => {
      const node = containerRef.current
      if (!node) return

      const rect = node.getBoundingClientRect()
      const rawX = (event.clientX - rect.left) / rect.width - 0.5
      const rawY = (event.clientY - rect.top) / rect.height - 0.5
      pointer.current.x = Math.max(Math.min(rawX * 8, 8), -8)
      pointer.current.y = Math.max(Math.min(rawY * -6, 6), -6)

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    const onMouseLeave = () => {
      pointer.current.x = 0
      pointer.current.y = 0
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    const node = containerRef.current
    node?.addEventListener('mousemove', onMouseMove)
    node?.addEventListener('mouseleave', onMouseLeave)

    return () => {
      node?.removeEventListener('mousemove', onMouseMove)
      node?.removeEventListener('mouseleave', onMouseLeave)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      data-aos='fade-left'
      data-aos-delay='400'
      className='depth-root relative w-full max-w-[520px] lg:max-w-none'
    >
      <div className='absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(79,141,255,0.15),transparent_40%)] blur-3xl opacity-80' />
      <div className='relative mx-auto w-full max-w-[420px] preserve-3d smooth-transform overflow-visible'>
        <div
          ref={visualRef}
          className='relative overflow-visible rounded-[2rem] border border-[rgba(148,163,184,0.16)] bg-[rgba(8,14,28,0.88)] shadow-[0_35px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl'
          style={{ transform: 'rotateX(4deg) rotateY(-5deg)' }}
        >
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,141,255,0.18),transparent_25%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.12),transparent_30%)]' />
          <div className='relative z-10 px-8 py-10 min-h-[420px]'>
            <div className='flex flex-wrap gap-3 mb-6'>
              <div className='surface-glass inline-flex items-center gap-2 rounded-2xl border border-[rgba(79,141,255,0.18)] px-3 py-2 text-xs uppercase tracking-[0.35em] text-[var(--accent-tertiary)]'>
                <img src={hiIcon} alt='Hello badge' className='h-5 w-5' />
                HELLO
              </div>
            </div>
            <div className='text-[4rem] leading-none font-semibold text-[var(--text-primary)]'>
              {'< />'}
            </div>
            <div className='mt-4 inline-flex rounded-full border border-[rgba(83,137,255,0.24)] bg-[rgba(15,24,55,0.65)] px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--accent-secondary)] shadow-[0_10px_30px_rgba(0,0,0,0.16)]'>
              FULL STACK
            </div>

            <div className='mt-8 grid gap-4 md:grid-cols-2'>
              <div className='surface-glass rounded-[1.5rem] border border-[rgba(148,163,184,0.16)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.16)]'>
                <div className='flex items-center gap-3'>
                  <img src={reactIcon} alt='React' className='h-8 w-8' />
                  <span className='text-sm font-semibold text-[var(--text-primary)]'>React</span>
                </div>
              </div>
              <div className='surface-glass rounded-[1.5rem] border border-[rgba(148,163,184,0.16)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.16)]'>
                <div className='flex items-center gap-3'>
                  <img src={nodeIcon} alt='Node.js' className='h-8 w-8' />
                  <span className='text-sm font-semibold text-[var(--text-primary)]'>Node.js</span>
                </div>
              </div>
              <div className='surface-glass rounded-[1.5rem] border border-[rgba(148,163,184,0.16)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.16)]'>
                <div className='flex items-center gap-3'>
                  <img src={mongoIcon} alt='MongoDB' className='h-8 w-8' />
                  <span className='text-sm font-semibold text-[var(--text-primary)]'>MongoDB</span>
                </div>
              </div>
              <div className='surface-glass rounded-[1.5rem] border border-[rgba(148,163,184,0.16)] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.16)]'>
                <div className='flex items-center gap-3'>
                  <img src={jsIcon} alt='JavaScript' className='h-8 w-8' />
                  <span className='text-sm font-semibold text-[var(--text-primary)]'>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute right-6 top-14 h-28 w-28 overflow-hidden rounded-full border border-[rgba(148,163,184,0.16)] bg-[rgba(12,20,40,0.85)] shadow-[0_25px_60px_rgba(0,0,0,0.22)] md:right-8 md:h-32 md:w-32'>
            <img
              src={heroImg}
              alt='Portrait of Aaryan Nishad'
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroVisual
