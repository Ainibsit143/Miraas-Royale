function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-burgundy-deep text-ivory"
    >
      <img
        src="/images/cta.jpeg"
        alt="Carved gilded sofa with burgundy velvet cushions and white roses"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-burgundy-deep/75 lg:bg-transparent lg:bg-linear-to-r lg:from-transparent lg:from-25% lg:via-burgundy-deep/65 lg:via-60% lg:to-burgundy-deep"></div>

      <div className="relative grid min-h-[440px] items-center px-[5vw] py-20 lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-10">
          <p className="mb-4 text-[0.78rem] font-medium tracking-[0.3em] text-gold">
            MIRAAS ROYALE
          </p>
          <h2 className="mb-8 max-w-[14ch] text-[clamp(2.4rem,5vw,4.2rem)] text-ivory">
            Make Space for Refined Living.
          </h2>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="#collections"
              className="inline-flex items-center gap-2 rounded-full border border-ivory bg-ivory px-8 py-[13px] text-[0.95rem] font-medium text-burgundy transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-burgundy-deep"
            >
              Explore the Collection <span aria-hidden="true">→</span>
            </a>
            <a
              href="mailto:hello@miraasroyale.com?subject=Enquiry from website"
              className="inline-flex items-center rounded-full border border-ivory/50 px-8 py-[13px] text-[0.95rem] font-medium text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-ivory hover:text-burgundy"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA