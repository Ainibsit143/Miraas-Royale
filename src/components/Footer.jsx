import { useState } from 'react'

const linkClass = 'transition-colors hover:text-gold'

const socials = [
  {
    name: 'Instagram',
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="0.6" />
      </>
    ),
  },
  {
    name: 'Facebook',
    icon: (
      <path d="M14 8h2.5V4.5H14C11.8 4.5 10.5 6 10.5 8v2H8v3.5h2.5V20H14v-6.5h2.5L17 10h-3V8.5c0-.3.2-.5.5-.5z" />
    ),
  },
  {
    name: 'Pinterest',
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M11 16.5l1.5-6.5M10 10.5c1-2 4-1.6 4 .4 0 1.8-1.6 3-3 2.4" />
      </>
    ),
  },
  {
    name: 'YouTube',
    icon: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="4" />
        <path d="M10.5 9.5v5l4-2.5z" />
      </>
    ),
  },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() === '') return
    setSent(true)
    setEmail('')
  }

  return (
    <footer
      id="contact"
      className="scroll-mt-16 border-t border-gold/40 bg-mocha px-[5vw] pb-8 pt-16 text-cream"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.3fr]">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-[38px] w-[38px] place-items-center rounded-full border border-gold font-heading text-[0.95rem] font-semibold text-gold">
              MR
            </span>
            <span className="font-heading text-[1.1rem] font-semibold tracking-[0.22em] text-ivory">
              MIRAAS ROYALE
            </span>
          </a>
          <p className="mt-4 font-heading text-[1.25rem] italic text-cream/90">
            Redefining Luxury. At Home.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((item) => (
              <a
                key={item.name}
                href="#"
                aria-label={item.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 text-gold transition-colors hover:bg-gold hover:text-mocha"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.6]"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-[1.25rem] text-gold">Quick Links</h4>
          <ul className="space-y-2 text-[0.92rem]">
            <li><a href="#home" className={linkClass}>Home</a></li>
            <li><a href="#collections" className={linkClass}>Collections</a></li>
            <li><a href="#craftsmanship" className={linkClass}>Craftsmanship</a></li>
            <li><a href="#inspiration" className={linkClass}>Inspiration</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-[1.25rem] text-gold">Contact</h4>
          <ul className="space-y-2 text-[0.92rem]">
            <li><a href="mailto:hello@miraasroyale.com" className={linkClass}>hello@miraasroyale.com</a></li>
            <li><a href="tel:+920000000000" className={linkClass}>+92 000 0000000</a></li>
            <li>Showroom address, City, Pakistan</li>
            <li>Mon–Sat, 11am–8pm</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-[1.25rem] text-gold">Join Our Newsletter</h4>
          <p className="mb-4 text-[0.92rem] text-cream/80">
            Be the first to know about new collections.
          </p>

          {sent ? (
            <p className="text-[0.95rem] text-gold">
              Thank you. You are on the list.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-full border border-gold/50 bg-transparent px-5 py-3 text-[0.9rem] text-ivory placeholder:text-cream/50 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-gold text-mocha transition-colors hover:bg-ivory"
              >
                →
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1200px] flex-wrap justify-between gap-3 border-t border-cream/15 pt-5 text-[0.82rem] text-cream/70">
        <p>© 2026 MIRAAS ROYALE. All rights reserved.</p>
        <p>Designed with elegance. For a more beautiful home.</p>
      </div>
    </footer>
  )
}

export default Footer