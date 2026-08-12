import React, { useState, useEffect } from 'react'

const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('idle') // idle | sending | success | error
    const [error, setError] = useState('')
    const [reduceMotion, setReduceMotion] = useState(false)

    useEffect(() => {
        setReduceMotion(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }, [])

    function validate() {
        setError('')
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!name.trim() || name.trim().length > 100) return 'Please enter a valid name (less than 100 characters).'
        if (!emailRe.test(email)) return 'Please enter a valid email address.'
        if (!message.trim() || message.trim().length < 5 || message.trim().length > 2000) return 'Message must be between 5 and 2000 characters.'
        return null
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const v = validate()
        if (v) { setError(v); return }
        setStatus('sending')
        try {
            const res = await fetch(`${apiBase}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() })
            })

            // If server responded, parse JSON and handle according to status
            let data = null
            try {
                data = await res.json()
                        } catch (err) {
                                // Non-JSON response
                                console.error('Invalid JSON from server', err)
            }

            if (!res.ok) {
                // Validation errors from backend (400) should surface to user
                if (res.status === 400 && data && data.message) {
                    setStatus('error')
                    setError(data.message)
                    return
                }

                // For server-side config/errors, keep generic message
                setStatus('error')
                setError('Something went wrong. Please try again.')
                console.error('Server error', res.status, data)
                return
            }

            if (!data || !data.success) {
                setStatus('error')
                setError('Something went wrong. Please try again.')
                return
            }

            setStatus('success')
            setName('')
            setEmail('')
            setMessage('')
        } catch (err) {
            console.error(err)
            setStatus('error')
            // Network or CORS errors surface as TypeError in many browsers
            if (err instanceof TypeError || String(err).toLowerCase().includes('failed to fetch')) {
                setError('Unable to connect to the server. Please try again later.')
            } else {
                setError('Something went wrong. Please try again.')
            }
        }
    }

    return (
        <section id="contacts" aria-labelledby="contact-heading" className="py-8 lg:p-16">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                        <h2 id="contact-heading" className="text-4xl font-extrabold text-white mb-4">Let's Build Something Together</h2>
                        <p className="text-white/75 mb-6">If you have a role, project, or opportunity where my skills are a match, I'd love to hear about it. Send a brief message and I'll get back to you promptly.</p>

                        <div className="space-y-3 text-white/80">
                            <p>No public social/contact links were found in the repository.</p>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className={`bg-[rgba(255,255,255,0.03)] border border-white/8 rounded-2xl p-6 shadow-lg ${reduceMotion ? '' : 'hover:translate-y-[-4px]'} max-w-full`} aria-live="polite">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3 py-2 rounded-md bg-white/3 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    maxLength={100}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 rounded-md bg-white/3 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Briefly describe your project or opportunity"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-3 py-2 rounded-md bg-white/3 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    maxLength={2000}
                                    required
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                >
                                    {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent ✓' : status === 'error' ? 'Try Again' : 'Send Message →'}
                                </button>

                                <div aria-live="polite" className="text-sm text-white/80">
                                    {error && <span className="text-rose-400">{error}</span>}
                                    {!error && status === 'success' && <span className="text-green-400">Thanks! Your message has been sent successfully.</span>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact