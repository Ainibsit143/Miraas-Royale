const pieces = [
  {
    name: 'Aurelia Sofa',
    detail: 'Three-seat sofa in bouclé with a solid walnut base.',
    price: 'PKR 485,000',
    bg: 'from-burgundy to-bronze',
  },
  {
    name: 'Selene Bed',
    detail: 'King bed with a deep, upholstered headboard.',
    price: 'PKR 395,000',
    bg: 'from-cream to-bronze',
  },
  {
    name: 'Orla Dining Table',
    detail: 'Oval pedestal table in oak, seating six.',
    price: 'PKR 320,000',
    bg: 'from-mocha to-bronze',
  },
  {
    name: 'Vesper Lounge Chair',
    detail: 'Rounded lounge chair with a bronze side table.',
    price: 'PKR 165,000',
    bg: 'from-bronze to-ivory',
  },
]

function Signature() {
  return (
    <section id="signature" className="scroll-mt-16 px-[5vw] py-[90px] lg:py-[120px]">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-[clamp(2.3rem,5vw,4.4rem)] text-burgundy">
          Signature pieces
        </h2>
        <p className="max-w-[42ch]">
          A first look at the pieces our clients ask for most. Prices shown are
          starting prices.
        </p>
      </div>

      <div className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
        {pieces.map((piece) => (
          <article key={piece.name} className="group lg:even:mt-14">
            <div className="overflow-hidden rounded-[4px_40px_4px_40px]">
              <div
                className={`aspect-[4/5] bg-linear-to-br ${piece.bg} transition-transform duration-1000 group-hover:scale-105`}
              ></div>
            </div>

            <h3 className="mb-0.5 mt-4 text-[1.7rem] text-mocha">{piece.name}</h3>
            <p className="text-[0.9rem] opacity-80">{piece.detail}</p>

            <div className="mt-2.5 flex items-center justify-between border-t border-mocha/15 pt-3 font-medium">
              <span>{piece.price}</span>
              <a
                href={`mailto:hello@miraasroyale.com?subject=Enquiry: ${piece.name}`}
                className="border-b border-bronze text-[0.88rem] text-burgundy"
              >
                Enquire
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Signature