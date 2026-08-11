import React from 'react'
import experience from '../../data/experience'

function Experience() {
  return (
    <section id='experience' className='relative overflow-hidden text-white body-font'>
      <div className='container mx-auto px-5 py-24'>
        <div className='max-w-3xl space-y-4 pb-10'>
          <h1
            data-aos='fade-down'
            className='text-4xl font-semibold tracking-tight text-white sm:text-5xl'
          >
            Experience
          </h1>
          <p
            data-aos='fade-up'
            className='max-w-2xl text-base leading-8 text-[var(--text-secondary)]'
          >
            I showcase the journey through my key hands-on roles and project experience, using real-world work to build reliable IT systems.
          </p>
        </div>

        <div className='grid gap-10 lg:grid-cols-[1.2fr_auto] lg:items-center'>
          <div className='relative lg:pl-10'>
            <div className='absolute left-1/2 top-16 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-[rgba(79,141,255,0.18)] lg:block' />

            <div className='space-y-8'>
              {experience.entries.map((entry, index) => (
                <article
                  key={entry.id}
                  data-aos='fade-up'
                  data-aos-delay={`${220 + index * 80}`}
                  className='group relative mx-auto flex w-full max-w-[30rem] flex-col rounded-[2rem] border border-[rgba(148,163,184,0.18)] bg-[rgba(12,20,40,0.78)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition duration-300 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:border-[rgba(79,141,255,0.28)] text-center'
                >
                  <div className='absolute left-1/2 top-6 hidden h-5 w-5 -translate-x-1/2 rounded-full border border-[rgba(79,141,255,0.45)] bg-[rgba(15,24,55,0.95)] shadow-[0_0_0_8px_rgba(79,141,255,0.05)] transition duration-300 group-hover:border-[rgba(79,141,255,0.75)] lg:block' />
                  <div className='relative'>
                    <p className='mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent-primary)]'>
                      {entry.year}
                    </p>
                    <p className='text-base leading-8 text-[var(--text-secondary)] whitespace-pre-line'>
                      {entry.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            data-aos='fade-left'
            data-aos-delay='320'
            className='flex justify-center lg:justify-end'
          >
            <div className='group relative overflow-hidden rounded-[2rem] border border-[rgba(148,163,184,0.18)] bg-[rgba(12,20,40,0.74)] shadow-[0_24px_50px_rgba(0,0,0,0.12)] transition duration-300 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(79,141,255,0.12)]'>
              <img
                src={experience.image}
                alt='Experience section illustration'
                className='h-auto w-full max-w-[420px] object-cover rounded-[1.75rem] transition duration-300 group-hover:scale-[1.01] motion-reduce:transform-none'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience