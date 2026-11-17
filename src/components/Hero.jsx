function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-burgundy-deep"
    >
      <img
        src="/images/hero-wide.jpeg"
        alt="Grand living room with a carved gilded sofa, crystal chandelier and burgundy velvet curtains"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-linear-to-r from-burgundy-deep/90 via-burgundy-deep/60 to-burgundy-deep/30 lg:via-burgundy-deep/50 lg:to-transparent"></div>

      <div className="relative max-w-[640px] px-[5vw] pb-20 pt-32 text-ivory">
        <p className="mb-5 text-[0.8rem] font-medium tracking-[0.3em] text-gold">
          MIRAAS ROYALE
        </p>

        <h1 className="mb-6 text-[clamp(3rem,7vw,6rem)] text-ivory">
          <span className="block">Timeless Comfort.</span>
          <span className="block italic">Refined Living.</span>
        </h1>

        <p className="mb-9 max-w-[42ch] text-[1.05rem] text-ivory/85">
          Experience the art of luxury with furniture that transforms your home
          into a royal retreat.
        </p>

        <a
          href="#collections"
          className="inline-flex items-center gap-2 rounded-full border border-gold px-8 py-[13px] text-[0.95rem] font-medium text-gold transition duration-300 hover:bg-gold hover:text-burgundy-deep"
        >
          Explore Collections <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default Hero