import React from 'react'
import Navbar from '../navbar/Navbar'
import CV from '../hero/CV.pdf'
import HeroVisual from './HeroVisual'

function Hero() {
    return (
        <div className='relative overflow-hidden bg-[var(--bg-default)] min-h-[680px] flex flex-col'>
            <div className='absolute inset-x-0 top-12 flex justify-center pointer-events-none'>
                <div className='h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(79,141,255,0.16),transparent_55%)] blur-3xl opacity-80' />
            </div>
            <Navbar />
            <section
                id='home'
                data-aos='fade-up'
                data-aos-delay='250'
                className='text-[var(--text-primary)] body-font z-10'
            >
                <div className='container mx-auto flex flex-col-reverse gap-16 px-5 py-24 md:flex-row md:items-center'>
                    <div className='lg:flex-grow md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left'>
                        <p
                            data-aos='fade-up'
                            data-aos-delay='300'
                            className='mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-[var(--accent-tertiary)]'
                        >
                            HELLO, I'M
                        </p>
                        <h1
                            data-aos='fade-up'
                            data-aos-delay='350'
                            className='text-5xl sm:text-[4.5rem] md:text-[5rem] leading-[0.95] font-bold text-[var(--text-primary)]'
                        >
                            AARYAN NISHAD
                        </h1>
                        <p
                            data-aos='fade-up'
                            data-aos-delay='400'
                            className='mt-5 text-lg sm:text-xl font-semibold tracking-[0.08em] text-[var(--text-soft)]'
                        >
                            FULL STACK DEVELOPER
                        </p>
                        <p
                            data-aos='fade-up'
                            data-aos-delay='450'
                            className='mt-8 max-w-2xl text-base leading-8 text-[var(--text-secondary)]'
                        >
                            I build polished web experiences from frontend interfaces to backend systems. I enjoy solving problems with code,
                            keeping designs clean, and delivering solutions that feel modern, dependable, and easy to use.
                        </p>
                        <div
                            data-aos='fade-up'
                            data-aos-delay='500'
                            className='mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center md:justify-start'
                        >
                            <a
                                href='#projects'
                                className='inline-flex items-center justify-center rounded-full bg-[var(--accent-primary)] px-8 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(79,141,255,0.25)] transition-transform duration-200 ease hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(79,141,255,0.30)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-default)]'
                            >
                                View My Work
                                <span aria-hidden='true' className='ml-2'>→</span>
                            </a>
                            <a
                                href={CV}
                                download
                                className='inline-flex items-center justify-center rounded-full border border-[rgba(148,163,184,0.24)] bg-[rgba(12,20,40,0.78)] px-8 py-3 text-sm font-semibold text-[var(--text-primary)] transition duration-200 ease hover:border-[rgba(79,141,255,0.35)] hover:bg-[rgba(12,20,40,0.9)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-secondary)] focus:ring-offset-2 focus:ring-offset-[var(--bg-default)]'
                            >
                                Download Resume
                                <span aria-hidden='true' className='ml-2'>↓</span>
                            </a>
                        </div>
                        <div
                            data-aos='fade-up'
                            data-aos-delay='550'
                            className='mt-10 flex flex-wrap justify-center gap-3 sm:justify-start'
                        >
                            {['React', 'Node.js', 'MongoDB', 'JavaScript'].map((tech) => (
                                <span
                                    key={tech}
                                    className='surface-glass inline-flex items-center rounded-2xl border border-[rgba(148,163,184,0.18)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition duration-200 ease hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(79,141,255,0.16)]'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='md:w-1/2 flex justify-center md:justify-end'>
                        <HeroVisual />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero