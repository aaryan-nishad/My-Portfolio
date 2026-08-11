import React, { useEffect, useMemo, useRef, useState } from 'react'
import navigation from '../../data/navigation'
import CV from '../hero/CV.pdf'

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const sectionIds = useMemo(
    () => navigation.map((item) => item.href.replace('#', '')),
    []
  )

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: [0.2, 0.4, 0.6] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [sectionIds])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <header className='sticky top-4 z-50 px-4'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(12,20,40,0.78)] px-4 shadow-[0_30px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl'>
        <div className='flex items-center gap-3'>
          <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(79,141,255,0.15)] text-sm font-semibold text-[var(--accent-primary)] shadow-[inset_0_0_0_1px_rgba(79,141,255,0.12)]'>
            A
          </span>
          <span className='text-sm font-bold uppercase tracking-[0.25em] text-[var(--text-primary)]'>AARYAN</span>
        </div>

        <nav className='hidden items-center gap-6 md:flex'>
          {navigation.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[var(--text-primary)] shadow-[0_0_18px_rgba(79,141,255,0.18)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(79,141,255,0.08)]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-[var(--accent-primary)] transition-all duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className='flex items-center gap-3'>
          <a
            href={CV}
            download
            className='hidden rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(15,24,55,0.9)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition duration-200 ease hover:border-[rgba(79,141,255,0.35)] hover:shadow-[0_15px_35px_rgba(79,141,255,0.16)] md:inline-flex'
          >
            Resume
          </a>
          <button
            ref={buttonRef}
            type='button'
            aria-controls='navbar-menu'
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((prev) => !prev)}
            className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(15,24,55,0.9)] text-[var(--text-primary)] shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition duration-200 ease hover:border-[rgba(79,141,255,0.35)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-default)] md:hidden'
          >
            <span className='sr-only'>{isOpen ? 'Close navigation menu' : 'Open navigation menu'}</span>
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
              <path
                d={isOpen ? 'M18 6L6 18M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        id='navbar-menu'
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] border border-[rgba(148,163,184,0.18)] bg-[rgba(12,20,40,0.95)] backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.18)] transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className='flex flex-col gap-1 p-4'>
          {navigation.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-[rgba(79,141,255,0.12)] text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)] hover:bg-[rgba(79,141,255,0.08)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </a>
            )
          })}
          <a
            href={CV}
            download
            onClick={() => setIsOpen(false)}
            className='mt-2 inline-flex items-center justify-center rounded-2xl border border-[rgba(148,163,184,0.18)] bg-[rgba(15,24,55,0.92)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:border-[rgba(79,141,255,0.35)] hover:bg-[rgba(15,24,55,0.98)]'
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar