import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Signature', href: '#signature' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'Inspiration', href: '#inspiration' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[5vw] transition-all duration-300 ${
          scrolled || open
            ? 'bg-burgundy-deep/95 py-3 backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-[38px] w-[38px] place-items-center rounded-full border border-gold font-heading text-[0.95rem] font-semibold text-gold">
            MR
          </span>
          <span className="font-heading text-[1rem] font-semibold tracking-[0.18em] text-ivory sm:text-[1.1rem] sm:tracking-[0.22em]">
            MIRAAS ROYALE
          </span>
        </a>

        <nav className="hidden gap-[34px] text-[0.92rem] lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="border-b border-transparent py-1 text-ivory/90 transition-colors hover:border-gold hover:text-gold"
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
            className={`absolute left-2 right-2 h-[1.5px] bg-ivory transition-all duration-300 ${
              open ? 'top-[19px] rotate-45' : 'top-[13px]'
            }`}
          ></span>
          <span
            className={`absolute left-2 right-2 h-[1.5px] bg-ivory transition-all duration-300 ${
              open ? 'top-[19px] -rotate-45' : 'top-[25px]'
            }`}
          ></span>
        </button>
      </header>

      <nav
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-burgundy-deep font-heading text-[2rem] text-ivory transition-transform duration-500 lg:hidden ${
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