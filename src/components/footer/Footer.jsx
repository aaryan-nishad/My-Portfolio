import React from 'react'
import navigation from '../../data/navigation'

const CONTACT_EMAIL = 'aaryannishad12@gmail.com'

function Footer() {
    const year = new Date().getFullYear()

    function scrollToTop() {
        try {
            const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
            window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
        } catch {
            window.scrollTo(0, 0)
        }
    }

    return (
        <footer className="mt-12">
            <div className="container mx-auto px-4">
                <div className="bg-[rgba(255,255,255,0.03)] border border-white/8 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                        <div className="flex-1 min-w-0">
                            <h3 className="text-white text-lg font-bold">Aaryan Nishad</h3>
                            <p className="mt-2 text-sm text-white/70">Full Stack Developer building modern, scalable and user-focused web experiences.</p>
                        </div>

                        <nav aria-label="Footer navigation" className="flex-1">
                            <ul className="flex flex-wrap justify-center md:justify-start gap-3">
                                {navigation.map((item) => (
                                    <li key={item.href}>
                                        <a href={item.href} className="inline-block text-sm text-white/80 px-3 py-1 rounded-md transition-transform transform hover:-translate-y-0.5 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label={`Go to ${item.label}`}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex-1 flex flex-col items-end md:items-end gap-3">
                            <div className="flex items-center gap-3">
                                {CONTACT_EMAIL && (
                                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-white/85 px-3 py-2 bg-white/3 rounded-md transition hover:bg-white/6 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label={`Email ${CONTACT_EMAIL}`}>
                                        {CONTACT_EMAIL}
                                    </a>
                                )}
                                <button onClick={scrollToTop} className="ml-2 text-sm text-white/80 px-3 py-2 bg-white/3 rounded-md hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-cyan-400" aria-label="Back to top">
                                    Back to top
                                </button>
                            </div>

                            <div className="text-sm text-white/60">© {year} Aaryan Nishad. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer