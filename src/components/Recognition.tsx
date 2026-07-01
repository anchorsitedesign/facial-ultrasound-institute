export default function Recognition() {
  const stats = [
    {
      value: "15+",
      label: "Countries\nEducated",
    },
    {
      value: "1,000+",
      label: "Providers\nTrained",
    },
    {
      value: "100+",
      label: "Lectures\nDelivered",
    },
    {
      value: "25+",
      label: "Years\nClinical Experience",
    },
  ];

  const credentials = [
    "Top 100 Best Aesthetic Injector",
    "JAAD Published Author",
    "Certified Aesthetic Nurse Specialist (CANS)",
    "International Faculty",
    "Ultrasound Pioneer",
    "Global Medical Educator",
    "Industry Trainer",
    "Key Opinion Leader",
  ];

  return (
    <section className="bg-white py-28 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            Recognition
          </p>

          <h2 className="mt-4 text-5xl font-light leading-tight text-[#1C1C1E]">
            Trusted by physicians,
            <br />
            educators, and industry leaders.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B675F]">
            Dr. Dawn Naylor is recognized internationally for advancing facial
            ultrasound education, injectable safety, and evidence-based
            aesthetic medicine through teaching, research, consulting, and
            clinical innovation.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-t border-[#C6A15B]/25 pt-6"
            >
              <div className="text-5xl font-light text-[#1C1C1E]">
                {stat.value}
              </div>

              <div className="mt-3 whitespace-pre-line uppercase tracking-[0.2em] text-sm text-[#8E857A]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">

          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-[#C6A15B]">
              Distinguished Credentials
            </h3>

            <div className="mt-8 grid gap-5">
              {credentials.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-[#EFEAE3] pb-5"
                >
                  <div className="h-2 w-2 rounded-full bg-[#C6A15B]" />

                  <span className="text-lg text-[#3D3935]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-[#C6A15B]">
              Trusted By
            </h3>

            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3">

              {[
                "MERZ",
                "REVANCE",
                "REVANESSE",
                "PACE",
                "AAFE",
                "GALDERMA",
              ].map((logo) => (
                <div
                  key={logo}
                  className="flex h-24 items-center justify-center rounded-xl border border-[#ECE7E0] text-sm tracking-[0.25em] text-[#8A847B]"
                >
                  {logo}
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}