const stats = [
  { value: '10-year', label: 'frame guarantee' },
  { value: 'Small', label: 'batch production' },
  { value: '100%', label: 'hand finished' },
]

function Story() {
  return (
    <section
      id="story"
      className="grid scroll-mt-16 items-center gap-12 bg-mocha px-[5vw] py-[90px] text-ivory lg:grid-cols-[0.9fr_1.1fr] lg:gap-[7vw] lg:py-[120px]"
    >
      <div className="relative h-[520px] lg:h-[640px]">
        <div className="absolute bottom-[14%] left-0 right-[22%] top-0 rounded-[200px_8px_200px_8px] bg-linear-to-br from-bronze to-burgundy"></div>
        <div className="absolute bottom-0 right-0 h-[44%] w-[48%] rounded-[8px_100px_8px_100px] border-8 border-mocha bg-linear-to-br from-cream to-bronze"></div>
      </div>

      <div>
        <h2 className="mb-7 text-[clamp(2.3rem,5vw,4.4rem)] text-ivory">
          Designed for Living. Crafted for Lasting Beauty.
        </h2>

        <p className="max-w-[52ch] text-cream/80">
          MIRAAS ROYALE began with a simple belief: a sofa should be as good to
          sit in at ten years as on the day it arrives. We draw soft, rounded
          shapes inspired by pebbles, dunes and river stone, then build them
          with frames and finishes made to last.
        </p>
        <p className="mt-4 max-w-[52ch] text-cream/80">
          Every piece is designed in-house, made in small batches and checked by
          hand before it leaves the workshop. The result is furniture that
          feels calm, looks refined and gets better with use.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-11 gap-y-6">
          {stats.map((stat) => (
            <div key={stat.label} className="font-heading text-[2.4rem] leading-none text-bronze">
              {stat.value}
              <small className="mt-1 block font-body text-[0.85rem] text-cream/75">
                {stat.label}
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Story