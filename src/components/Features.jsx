const features = [
  {
    label: 'Premium Quality Materials',
    icon: (
      <>
        <path d="M6 3h12l4 6-10 12L2 9z" />
        <path d="M2 9h20M8 9l4 12 4-12M9 3l-1 6M15 3l1 6" />
      </>
    ),
  },
  {
    label: 'Timeless Designs',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    label: 'Expert Craftsmanship',
    icon: (
      <>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    label: 'Worldwide Delivery',
    icon: (
      <>
        <path d="M2 6h11v10H2zM13 9h5l3 3v4h-8" />
        <circle cx="6.5" cy="18" r="2" />
        <circle cx="17.5" cy="18" r="2" />
      </>
    ),
  },
]

function Features() {
  return (
    <section className="border-y border-gold/40 bg-burgundy px-[5vw] py-12">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        {features.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-3 text-center text-ivory"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-none stroke-gold stroke-[1.3]"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {item.icon}
            </svg>
            <p className="max-w-[16ch] text-[0.92rem] leading-snug">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features