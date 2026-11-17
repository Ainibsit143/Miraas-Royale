function Craftsmanship() {
  return (
    <section
      id="craftsmanship"
      className="relative scroll-mt-16 overflow-hidden bg-burgundy-deep text-ivory"
    >
      <img
        src="/images/craft-wide.jpeg"
        alt="Craftsman hand-carving gilded scrollwork into a wooden panel"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-burgundy-deep/75 lg:bg-transparent lg:bg-linear-to-r lg:from-transparent lg:from-25% lg:via-burgundy-deep/65 lg:via-60% lg:to-burgundy-deep"></div>

      <div className="relative grid min-h-[480px] items-center px-[5vw] py-20 lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-10">
          <p className="mb-4 text-[0.78rem] font-medium tracking-[0.3em] text-gold">
            — OUR CRAFTSMANSHIP
          </p>
          <h2 className="mb-5 text-[clamp(2.3rem,5vw,4rem)] text-ivory">
            Art in Every Detail
          </h2>
          <p className="mb-8 max-w-[44ch] text-ivory/80">
            From hand-carved elegance to premium materials, each piece is a
            masterpiece of craftsmanship.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-gold px-8 py-[13px] text-[0.95rem] font-medium text-gold transition duration-300 hover:bg-gold hover:text-burgundy-deep"
          >
            Discover Our Craft <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Craftsmanship