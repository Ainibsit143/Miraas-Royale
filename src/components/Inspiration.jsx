const images = [
  {
    id: 1,
    classes: 'col-span-2 row-span-2 lg:col-[1/6] lg:row-[1/5]',
    bg: 'from-bronze to-burgundy',
  },
  {
    id: 2,
    classes: 'lg:col-[6/10] lg:row-[1/3]',
    bg: 'from-cream to-bronze',
  },
  {
    id: 3,
    classes: 'row-span-2 lg:col-[6/10] lg:row-[3/6]',
    bg: 'from-mocha to-bronze',
  },
  {
    id: 4,
    classes: 'col-span-2 lg:col-[1/6] lg:row-[5/7]',
    bg: 'from-cream to-mocha',
  },
  {
    id: 5,
    classes: 'col-span-2 lg:col-[10/13] lg:row-[4/7]',
    bg: 'from-burgundy to-cream',
  },
]

function Inspiration() {
  return (
    <section id="inspiration" className="scroll-mt-16 px-[5vw] py-[90px] lg:py-[120px]">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-[clamp(2.3rem,5vw,4.4rem)] text-burgundy">
          Rooms to
          <br />
          live in.
        </h2>
        <p className="max-w-[42ch]">
          Warm neutrals, soft curves and natural texture, styled the way real
          homes are.
        </p>
      </div>

      <div className="grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-[18px] lg:grid-cols-12">
        {images.map((img) => (
          <div
            key={img.id}
            className={`group overflow-hidden rounded-md ${img.classes}`}
          >
            <div
              className={`h-full w-full bg-linear-to-br ${img.bg} transition-transform duration-1000 group-hover:scale-105`}
            ></div>
          </div>
        ))}

        <div className="col-span-2 flex items-center rounded-md bg-burgundy p-7 font-heading text-[1.5rem] italic leading-tight text-ivory lg:col-[10/13] lg:row-[1/4] lg:text-[1.7rem]">
          Calm rooms start with fewer, better pieces.
        </div>
      </div>
    </section>
  )
}

export default Inspiration