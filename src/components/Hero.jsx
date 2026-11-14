function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-screen items-center gap-[5vw] px-[5vw] pb-[70px] pt-[130px] lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div>
        <h1 className="mb-7 text-[clamp(3rem,7.5vw,7rem)] text-burgundy">
          <span className="block">Timeless Comfort.</span>
          <span className="block pl-[clamp(0px,4vw,60px)] italic text-mocha">
            Refined Living.
          </span>
        </h1>

        <p className="mb-9 max-w-[46ch] text-[1.05rem]">
          MIRAAS ROYALE designs sofas, beds and tables with soft, sculpted
          forms and honest materials, made for homes that are lived in every
          day.
        </p>

        <div className="flex flex-wrap gap-3.5">
          <a
            href="#collections"
            className="inline-block rounded-full border border-burgundy bg-burgundy px-8 py-[15px] text-[0.95rem] font-medium text-ivory transition duration-300 hover:-translate-y-0.5"
          >
            Explore Collection
          </a>
          <a
            href="#story"
            className="inline-block rounded-full border border-burgundy px-8 py-[15px] text-[0.95rem] font-medium text-burgundy transition duration-300 hover:-translate-y-0.5 hover:bg-burgundy hover:text-ivory"
          >
            Discover Our Story
          </a>
        </div>
      </div>

      <div className="h-[55vh] rounded-[0_110px_0_110px] bg-linear-to-br from-cream to-bronze lg:h-[min(75vh,700px)] lg:rounded-[0_180px_0_180px]"></div>
    </section>
  )
}

export default Hero