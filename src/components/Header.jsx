import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Our Story', href: '#story' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-cream/90 px-[5vw] py-4 backdrop-blur-md">
        <a href="#home" className="flex items-center gap-3 text-burgundy">
          <span className="grid h-[38px] w-[38px] place-items-center rounded-full border border-burgundy font-heading text-[0.95rem] font-semibold">
            MR
          </span>
          <span className="font-heading text-[1rem] font-semibold tracking-[0.18em] sm:text-[1.1rem] sm:tracking-[0.22em]">
            MIRAAS ROYALE
          </span>
        </a>

        <nav className="hidden gap-[34px] text-[0.92rem] lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="border-b border-transparent py-1 transition-colors hover:border-bronze hover:text-burgundy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="relative h-10 w-10 lg:hidden"
        >
          <span
            className={`absolute left-2 right-2 h-[1.5px] bg-burgundy transition-all duration-300 ${
              open ? 'top-[19px] rotate-45' : 'top-[13px]'
            }`}
          ></span>
          <span
            className={`absolute left-2 right-2 h-[1.5px] bg-burgundy transition-all duration-300 ${
              open ? 'top-[19px] -rotate-45' : 'top-[25px]'
            }`}
          ></span>
        </button>
      </header>

      <nav
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-cream font-heading text-[2rem] text-burgundy transition-transform duration-500 lg:hidden ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {links.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  )
}

export default Header