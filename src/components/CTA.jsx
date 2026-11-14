function CTA() {
  return (
    <section className="bg-burgundy px-[5vw] py-[110px] text-center text-ivory lg:py-[170px]">
      <h2 className="mx-auto mb-6 max-w-[13ch] text-[clamp(2.8rem,7vw,6rem)] text-ivory">
        Make Space for Refined Living.
      </h2>

      <p className="mx-auto mb-10 max-w-[44ch] text-cream/80">
        Browse the collection, or tell us about your room and we will help you
        choose.
      </p>

      <div className="flex flex-wrap justify-center gap-3.5">
        <a
          href="#collections"
          className="inline-block rounded-full border border-ivory bg-ivory px-8 py-[15px] text-[0.95rem] font-medium text-burgundy transition duration-300 hover:-translate-y-0.5 hover:border-bronze hover:bg-bronze hover:text-mocha"
        >
          Explore the Collection
        </a>
        <a
          href="mailto:hello@miraasroyale.com?subject=Enquiry from website"
          className="inline-block rounded-full border border-ivory/50 px-8 py-[15px] text-[0.95rem] font-medium text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-ivory hover:text-burgundy"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}

export default CTA