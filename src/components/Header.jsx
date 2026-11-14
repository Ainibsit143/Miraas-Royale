function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-cream/90 px-[5vw] py-4 backdrop-blur-md">
      <a href="#home" className="flex items-center gap-3 text-burgundy">
        <span className="grid h-[38px] w-[38px] place-items-center rounded-full border border-burgundy font-heading text-[0.95rem] font-semibold">
          MR
        </span>
        <span className="font-heading text-[1.1rem] font-semibold tracking-[0.22em]">
          MIRAAS ROYALE
        </span>
      </a>

      <nav className="flex gap-[34px] text-[0.92rem]">
        <a href="#home" className="border-b border-transparent py-1 transition-colors hover:border-bronze hover:text-burgundy">
          Home
        </a>
        <a href="#collections" className="border-b border-transparent py-1 transition-colors hover:border-bronze hover:text-burgundy">
          Collections
        </a>
        <a href="#story" className="border-b border-transparent py-1 transition-colors hover:border-bronze hover:text-burgundy">
          Our Story
        </a>
        <a href="#craftsmanship" className="border-b border-transparent py-1 transition-colors hover:border-bronze hover:text-burgundy">
          Craftsmanship
        </a>
        <a href="#contact" className="border-b border-transparent py-1 transition-colors hover:border-bronze hover:text-burgundy">
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header