const linkClass = 'transition-colors hover:text-bronze'

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
]

function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-16 border-t border-bronze/30 bg-mocha px-[5vw] pb-8 pt-20 text-cream"
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <a href="#home" className="flex items-center gap-3 text-cream">
            <span className="grid h-[38px] w-[38px] place-items-center rounded-full border border-cream font-heading text-[0.95rem] font-semibold">
              MR
            </span>
            <span className="font-heading text-[1.1rem] font-semibold tracking-[0.22em]">
              MIRAAS ROYALE
            </span>
          </a>

          <p className="mb-5 mt-4 max-w-[20ch] font-heading text-[1.35rem] italic">
            Timeless Comfort. Refined Living.
          </p>

          <div className="flex gap-3">
            {socials.map((item) => (
              <a
                key={item.name}
                href="#"
                aria-label={item.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-bronze/60 transition-colors hover:bg-bronze hover:text-mocha"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.6]"
                >
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3.5 font-heading text-[1.25rem] text-bronze">Explore</h4>
          <ul className="space-y-1.5 text-[0.92rem]">
            <li><a href="#home" className={linkClass}>Home</a></li>
            <li><a href="#collections" className={linkClass}>Collections</a></li>
            <li><a href="#story" className={linkClass}>Our Story</a></li>
            <li><a href="#craftsmanship" className={linkClass}>Craftsmanship</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3.5 font-heading text-[1.25rem] text-bronze">Collections</h4>
          <ul className="space-y-1.5 text-[0.92rem]">
            <li><a href="#collections" className={linkClass}>Living Room</a></li>
            <li><a href="#collections" className={linkClass}>Bedroom</a></li>
            <li><a href="#collections" className={linkClass}>Dining Room</a></li>
            <li><a href="#collections" className={linkClass}>Accent Furniture</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3.5 font-heading text-[1.25rem] text-bronze">Contact</h4>
          <ul className="space-y-1.5 text-[0.92rem]">
            <li><a href="mailto:hello@miraasroyale.com" className={linkClass}>hello@miraasroyale.com</a></li>
            <li><a href="tel:+920000000000" className={linkClass}>+92 000 0000000</a></li>
            <li>Showroom address, City, Pakistan</li>
            <li>Mon–Sat, 11am–8pm</li>
          </ul>
        </div>
      </div>

      <p className="mt-14 border-t border-cream/15 pt-5 text-[0.82rem] opacity-70">
        © 2026 MIRAAS ROYALE. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer