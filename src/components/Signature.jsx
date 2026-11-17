const pieces = [
  {
    name: 'Aurelia Sofa',
    detail: 'Three-seat sofa with a hand-carved gilded frame and cream velvet.',
    price: 'PKR 485,000',
    image: '/images/signature_sofa.jpeg',
    pos: 'object-[50%_70%]',
    alt: 'Aurelia three-seat sofa with a carved gilded frame',
  },
  {
    name: 'Selene Bed',
    detail: 'King bed with a tufted headboard and a gilded carved frame.',
    price: 'PKR 395,000',
    image: '/images/signature_bed.jpeg',
    pos: 'object-center',
    alt: 'Selene king bed with a tufted headboard and burgundy bedding',
  },
  {
    name: 'Orla Centre Table',
    detail: 'Hand-carved gilded centre table with a polished marble top.',
    price: 'PKR 320,000',
    image: '/images/signature_table.jpeg',
    pos: 'object-[50%_80%]',
    alt: 'Orla centre table with carved gilded legs and a marble top',
  },
  {
    name: 'Vesper Lounge Chair',
    detail: 'Wing armchair with a gilded frame and a burgundy velvet cushion.',
    price: 'PKR 165,000',
    image: '/images/signature_chair.jpeg',
    pos: 'object-center',
    alt: 'Vesper wing armchair with a carved gilded frame',
  },
]

function Signature() {
  return (
    <section
      id="signature"
      className="scroll-mt-16 bg-ivory px-[5vw] py-[90px] lg:py-[120px]"
    >
      <div className="mb-14 text-center">
        <p className="mb-4 flex items-center justify-center gap-4 text-[0.78rem] font-medium tracking-[0.3em] text-bronze">
          <span className="h-px w-10 bg-bronze/60"></span>
          SIGNATURE PIECES
          <span className="h-px w-10 bg-bronze/60"></span>
        </p>
        <h2 className="text-[clamp(2.3rem,5vw,4.4rem)] text-burgundy">
          Pieces our clients love
        </h2>
        <p className="mx-auto mt-4 max-w-[48ch] text-mocha/80">
          A first look at the pieces we are asked for most. Prices shown are
          starting prices.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1200px] gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {pieces.map((piece) => (
          <article
            key={piece.name}
            className="group flex flex-col border border-gold/40 bg-cream/50 p-3 transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_rgba(73,51,44,0.15)]"
          >
            <div className="overflow-hidden">
              <img
                src={piece.image}
                alt={piece.alt}
                loading="lazy"
                className={`aspect-[4/5] w-full object-cover ${piece.pos} transition-transform duration-1000 group-hover:scale-105`}
              />
            </div>

            <div className="flex flex-1 flex-col px-2 pb-3 pt-5 text-center">
              <h3 className="text-[1.6rem] text-burgundy">{piece.name}</h3>
              <p className="mt-2 flex-1 text-[0.9rem] text-mocha/80">
                {piece.detail}
              </p>
              <p className="mt-4 font-heading text-[1.35rem] text-bronze">
                {piece.price}
              </p>
              <a
                href={`mailto:hello@miraasroyale.com?subject=Enquiry: ${piece.name}`}
                className="mt-4 inline-block rounded-full border border-gold px-6 py-2.5 text-[0.88rem] font-medium text-burgundy transition-colors duration-300 hover:bg-gold hover:text-burgundy-deep"
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