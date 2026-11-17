const collections = [
  {
    name: 'Living Room',
    tagline: 'Elegant seating for grand moments',
    image: '/images/living.jpeg',
    alt: 'Luxury living room with a carved gilded sofa and burgundy velvet',
  },
  {
    name: 'Bedroom',
    tagline: 'A royal sanctuary of comfort',
    image: '/images/bedroom.jpeg',
    alt: 'Luxury bedroom with a gilded tufted headboard and burgundy bedding',
  },
  {
    name: 'Dining Room',
    tagline: 'Gather in timeless style',
    image: '/images/dinning.jpeg',
    alt: 'Luxury dining room with an oval table and cream upholstered chairs',
  },
  {
    name: 'Accent Furniture',
    tagline: 'The perfect finishing touch',
    image: '/images/accent.jpeg',
    alt: 'Gilded side table and cream armchair with fresh white flowers',
  },
]

function Collections() {
  return (
    <section id="collections" className="scroll-mt-16 bg-cream px-[5vw] py-[90px] lg:py-[120px]">
      <div className="mb-14 text-center">
        <p className="mb-4 flex items-center justify-center gap-4 text-[0.78rem] font-medium tracking-[0.3em] text-bronze">
          <span className="h-px w-10 bg-bronze/60"></span>
          OUR COLLECTIONS
          <span className="h-px w-10 bg-bronze/60"></span>
        </p>
        <h2 className="text-[clamp(2.3rem,5vw,4.4rem)] text-burgundy">
          Crafted for Every Corner
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((item) => (
          <a key={item.name} href="#signature" className="group block text-center">
            <div className="overflow-hidden rounded-t-full">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-5 text-[1.7rem] text-burgundy">{item.name}</h3>
            <p className="mt-1 text-[0.9rem] text-mocha/80">{item.tagline}</p>
            <span className="mt-3 inline-block border-b border-gold pb-0.5 text-[0.88rem] text-burgundy transition-colors group-hover:text-bronze">
              Explore →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Collections