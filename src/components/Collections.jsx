const collections = [
  {
    name: 'Living Room',
    classes:
      'lg:col-span-7 lg:h-[520px] rounded-[6px_70px_6px_6px]',
    bg: 'from-bronze to-burgundy',
  },
  {
    name: 'Bedroom',
    classes:
      'lg:col-span-5 lg:h-[520px] lg:mt-[70px] rounded-[70px_6px_6px_6px]',
    bg: 'from-ivory to-bronze',
  },
  {
    name: 'Dining Room',
    classes:
      'lg:col-span-5 lg:h-[460px] rounded-[6px_6px_6px_70px]',
    bg: 'from-mocha to-bronze',
  },
  {
    name: 'Accent Furniture',
    classes:
      'lg:col-span-7 lg:h-[460px] lg:mt-5 rounded-md',
    bg: 'from-burgundy to-cream',
  },
]

function Collections() {
  return (
    <section id="collections" className="bg-cream px-[5vw] py-[90px] lg:py-[120px]">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-[clamp(2.3rem,5vw,4.4rem)] text-burgundy">
          Four ways to
          <br />
          shape a room.
        </h2>
        <p className="max-w-[42ch]">
          Each collection is designed as a family of pieces, so a room can be
          built slowly and still feel complete.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-[22px]">
        {collections.map((item) => (
          <a
            key={item.name}
            href="#signature"
            className={`group relative col-span-12 block h-[380px] overflow-hidden ${item.classes}`}
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${item.bg} transition-transform duration-1000 group-hover:scale-105`}
            ></div>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-linear-to-t from-mocha/70 to-transparent px-7 pb-6 pt-[70px] text-ivory">
              <h3 className="text-[2rem]">{item.name}</h3>
              <span className="-translate-x-2.5 text-[0.88rem] opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                View pieces
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Collections