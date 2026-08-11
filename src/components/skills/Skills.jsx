import React from 'react'
import skills from '../../data/skills'

function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden text-white body-font'>
      <div className='container mx-auto px-5 py-24'>
        <div className='max-w-3xl space-y-4 pb-10'>
          <p
            data-aos='fade-down'
            className='text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent-primary)]'
          >
            Skills & Technologies
          </p>
          <h2
            data-aos='fade-up'
            className='text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl'
          >
            Skills & Technologies
          </h2>
          <p
            data-aos='fade-up'
            data-aos-delay='100'
            className='max-w-2xl text-base leading-8 text-[var(--text-secondary)]'
          >
            I use a refined MERN-focused workflow to build polished web experiences, combining modern frontend design with reliable backend and database tooling.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {skills.categories.map((category, index) => (
            <article
              key={category.title}
              data-aos='fade-up'
              data-aos-delay={`${220 + index * 80}`}
              tabIndex='0'
              className='group transform rounded-[2rem] border border-[rgba(148,163,184,0.18)] bg-[rgba(12,20,40,0.78)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition duration-300 ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(79,141,255,0.12)] hover:border-[rgba(79,141,255,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(12,20,40,0.9)]'
              style={{ perspective: '1200px' }}
            >
              <div className='transform-gpu transition duration-300 group-hover:-translate-y-1 group-hover:rotate-x-[0.3deg] group-hover:rotate-y-[0.6deg] motion-reduce:transform-none'>
                <p className='mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent-primary)]'>
                  {category.title}
                </p>
                <div className='flex flex-wrap gap-3'>
                  {category.items.split(', ').map((tech) => (
                    <span
                      key={tech}
                      className='inline-flex items-center gap-3 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-sm text-[var(--text-secondary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
                    >
                      <span className='h-2.5 w-2.5 rounded-full bg-[var(--accent-primary)]' />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          data-aos='fade-up'
          data-aos-delay='520'
          className='mt-10 rounded-[2rem] border border-[rgba(148,163,184,0.18)] bg-[rgba(12,20,40,0.74)] p-5 shadow-[0_24px_50px_rgba(0,0,0,0.12)]'
        >
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent-primary)]'>Technology Icons</p>
          <div className='flex justify-center'>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              {skills.icons.map((icon) => (
                <div
                  key={icon.alt}
                  className='group inline-flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-[rgba(148,163,184,0.12)] bg-[rgba(15,24,55,0.9)] p-3 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(79,141,255,0.12)] focus-within:outline-none focus-within:ring-2 focus-within:ring-[var(--accent-primary)]'
                  tabIndex='0'
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className='h-full w-full object-contain transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills