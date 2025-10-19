'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
              </svg>
              <span className="text-2xl font-bold text-white">SoundStream</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#platforms" className="text-gray-300 hover:text-white transition">Platforms</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Distribute Your Music
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              To The World
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Get your music on Spotify, Apple Music, Amazon, TikTok, and 150+ streaming platforms. Keep 100% of your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105">
              Start Distributing Free
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition backdrop-blur-sm border border-white/20">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '150+', label: 'Streaming Platforms' },
            { value: '500K+', label: 'Artists' },
            { value: '100%', label: 'Rights Retained' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Everything You Need
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🌍',
              title: 'Global Distribution',
              description: 'Release your music to Spotify, Apple Music, Amazon Music, Deezer, TikTok, YouTube Music, and 150+ platforms worldwide.'
            },
            {
              icon: '💰',
              title: 'Keep Your Rights',
              description: 'You own 100% of your master recordings and publishing rights. We never take ownership of your music.'
            },
            {
              icon: '📊',
              title: 'Real-Time Analytics',
              description: 'Track your streams, earnings, and audience demographics with detailed analytics dashboards updated daily.'
            },
            {
              icon: '⚡',
              title: 'Fast Release Times',
              description: 'Get your music live in as little as 24-48 hours. No waiting weeks for your releases to go live.'
            },
            {
              icon: '🎵',
              title: 'Unlimited Releases',
              description: 'Upload unlimited singles, EPs, and albums. No hidden fees or per-release charges on our plans.'
            },
            {
              icon: '🛡️',
              title: 'Content Protection',
              description: 'Automatic copyright protection and content ID management to ensure you get paid for every stream.'
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Distribute To All Major Platforms
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Your music will be available on every major streaming service and digital store
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[
            'Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music', 'TikTok',
            'Deezer', 'Tidal', 'Pandora', 'SoundCloud', 'Instagram',
            'Facebook', 'Snapchat', 'Shazam', 'iHeartRadio', 'Beatport'
          ].map((platform, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition">
              <div className="text-white font-semibold">{platform}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Free',
              price: '$0',
              period: 'forever',
              features: [
                'Unlimited releases',
                '150+ platforms',
                'Keep 80% royalties',
                'Basic analytics',
                'Email support'
              ],
              cta: 'Start Free'
            },
            {
              name: 'Pro',
              price: '$29',
              period: 'per year',
              features: [
                'Everything in Free',
                'Keep 100% royalties',
                'Advanced analytics',
                'Priority support',
                'Custom label name',
                'Pre-order releases'
              ],
              cta: 'Go Pro',
              popular: true
            },
            {
              name: 'Label',
              price: '$99',
              period: 'per year',
              features: [
                'Everything in Pro',
                'Unlimited artists',
                'Team collaboration',
                'White-label option',
                'Dedicated account manager',
                'API access'
              ],
              cta: 'Contact Sales'
            },
          ].map((plan, index) => (
            <div key={index} className={`relative bg-white/5 backdrop-blur-sm border ${plan.popular ? 'border-indigo-500' : 'border-white/10'} rounded-xl p-8 hover:bg-white/10 transition`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <svg className="w-6 h-6 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-white/10 hover:bg-white/20'} text-white px-6 py-3 rounded-lg font-semibold transition`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Share Your Music?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of artists distributing their music worldwide
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Get Started
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-white font-semibold">Thanks! We'll be in touch soon.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
                </svg>
                <span className="text-xl font-bold text-white">SoundStream</span>
              </div>
              <p className="text-gray-400">Professional music distribution made simple.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SoundStream. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
