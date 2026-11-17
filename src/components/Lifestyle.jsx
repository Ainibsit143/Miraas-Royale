function Lifestyle() {
  return (
    <section
      id="inspiration"
      className="scroll-mt-16 bg-cream px-[5vw] py-[80px] lg:py-[110px]"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-[6vw]">
       <div className="mx-auto w-full max-w-[640px] lg:order-2">
  <div className="overflow-hidden rounded-t-full border-2 border-gold">
    <img
      src="/images/lifestyle.jpeg"
      alt="Cream and gold armchair beside a marble coffee table with red roses"
      loading="lazy"
      className="aspect-[1/1] w-full object-cover object-center"
    />
  </div>
</div>

        <div>
          <p className="mb-4 text-[0.78rem] font-medium tracking-[0.3em] text-bronze">
            DESIGNED FOR LIVING
          </p>
          <h2 className="mb-5 text-[clamp(2.3rem,5vw,4rem)] text-burgundy">
            More Than Furniture,
            <br />
            A Lifestyle
          </h2>
          <p className="mb-8 max-w-[44ch]">
            Create spaces that inspire, impress and feel like home, with MIRAAS
            ROYALE.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-burgundy px-8 py-[13px] text-[0.95rem] font-medium text-burgundy transition duration-300 hover:bg-burgundy hover:text-ivory"
          >
            Get Inspired <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Lifestyle