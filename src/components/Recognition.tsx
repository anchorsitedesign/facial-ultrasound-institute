export default function Recognition() {
  const stats = [
    {
      value: "15+",
      label: "Countries Educated",
    },
    {
      value: "1,000+",
      label: "Medical Professionals Trained",
    },
    {
      value: "100+",
      label: "International Lectures",
    },
    {
      value: "25+",
      label: "Years of Clinical Experience",
    },
  ];

  const credentials = [
    "Harvard Executive Education",
    "Top 100 Best Aesthetic Injector",
    "JAAD Published Author",
    "Certified Aesthetic Nurse Specialist (CANS)",
    "International Faculty",
    "Ultrasound Educator & Researcher",
  ];

  const partners = [
    "MERZ",
    "REVANCE",
    "REVANESSE",
    "PACE",
    "AAFE",
    "GALDERMA",
  ];

  return (
    <section className="bg-[#FCFBF8] py-32 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            Recognition
          </p>

          <h2 className="mt-5 text-5xl font-light leading-tight text-[#1C1C1E] md:text-6xl">
            Internationally recognized
            <br />
            for education,
            research, and innovation.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#6B675F]">
            Dr. Dawn Naylor has earned recognition throughout the aesthetic
            medicine community for advancing facial ultrasound education,
            improving patient safety, publishing research, and training
            physicians and advanced practitioners around the world.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[#ECE6DE] bg-[#ECE6DE] lg:grid-cols-3">

          {credentials.map((credential) => (
            <div
              key={credential}
              className="bg-white p-10 transition duration-300 hover:bg-[#F8F6F2]"
            >
              <div className="mb-8 h-px w-16 bg-[#C6A15B]" />

              <h3 className="text-2xl font-light leading-snug text-[#1C1C1E]">
                {credential}
              </h3>
            </div>
          ))}

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-t border-[#C6A15B]/25 pt-6"
            >
              <div className="text-5xl font-light text-[#1C1C1E]">
                {stat.value}
              </div>

              <div className="mt-3 uppercase tracking-[0.18em] text-sm text-[#8E857A]">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

        <div className="mt-28">

          <p className="text-center text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            Industry Collaborations
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#ECE6DE] bg-[#ECE6DE] md:grid-cols-3 lg:grid-cols-6">

            {partners.map((partner) => (
              <div
                key={partner}
                className="flex h-28 items-center justify-center bg-white text-sm tracking-[0.25em] text-[#7F796F] transition hover:bg-[#F8F6F2]"
              >
                {partner}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}