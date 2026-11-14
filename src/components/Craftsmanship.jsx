const details = [
  {
    title: 'Premium upholstery',
    text: 'Dense bouclé and woven fabrics over high-resilience foam that keeps its shape.',
    bg: 'from-cream to-bronze',
    shape: 'rounded-t-[120px] rounded-b-md',
    offset: '',
  },
  {
    title: 'Natural wood',
    text: 'Kiln-dried walnut and oak, chosen for grain and finished with a soft oil.',
    bg: 'from-mocha to-bronze',
    shape: 'rounded-b-[120px] rounded-t-md',
    offset: 'lg:mt-11',
  },
  {
    title: 'Refined details',
    text: 'Tailored seams and piping, stitched evenly and matched to the pattern.',
    bg: 'from-burgundy to-cream',
    shape: 'rounded-t-[120px] rounded-b-md',
    offset: '',
  },
  {
    title: 'Thoughtful build',
    text: 'Joined frames, not stapled ones, so every piece stays steady for years.',
    bg: 'from-bronze to-mocha',
    shape: 'rounded-b-[120px] rounded-t-md',
    offset: 'lg:mt-[88px]',
  },
]

function Craftsmanship() {
  return (
    <section id="craftsmanship" className="scroll-mt-16 bg-cream px-[5vw] py-[90px] lg:py-[120px]">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-[clamp(2.3rem,5vw,4.4rem)] text-burgundy">
          The detail is
          <br />
          the design.
        </h2>
        <p className="max-w-[42ch]">
          Quality shows up in the parts you touch and the parts you never see.
        </p>
      </div>

      <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
        {details.map((item) => (
          <article key={item.title} className={`group ${item.offset}`}>
            <div className={`overflow-hidden ${item.shape}`}>
              <div
                className={`aspect-[3/4] bg-linear-to-br ${item.bg} transition-transform duration-1000 group-hover:scale-105`}
              ></div>
            </div>
            <h3 className="mb-1.5 mt-4 text-[1.6rem] text-mocha">{item.title}</h3>
            <p className="text-[0.92rem]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Craftsmanship