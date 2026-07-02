import Image from "next/image";

export default function Authority() {
  const stats = [
    {
      value: "25+",
      label: "Years",
      description: "Clinical healthcare experience",
    },
    {
      value: "10+",
      label: "Years",
      description: "Clinical ultrasound experience",
    },
    {
      value: "1,000+",
      label: "Providers",
      description: "Trained through lectures and education",
    },
  ];

  const pillars = [
    "Facial vascular anatomy",
    "Ultrasound-guided assessment",
    "Complication prevention",
    "Evidence-based injectable safety",
  ];

  return (
    <section className="bg-[#F8F6F2] px-6 py-28 text-[#1C1C1E]">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            Global Authority
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-5xl">
            Advancing the global standard for facial ultrasound education.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#5F5A52]">
            Dr. Dawn Naylor integrates clinical experience, ultrasound
            expertise, research, and hands-on provider education to elevate
            safety and precision in aesthetic medicine.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.description} className="border-t border-[#C6A15B]/30 pt-5">
                <p className="text-4xl font-light text-[#1C1C1E]">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B]">
                  {stat.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#5F5A52]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/10">
            <Image
              src="/images/education/education-action.jpg"
              alt="Dr. Dawn Naylor teaching facial ultrasound"
              width={1200}
              height={900}
              className="h-[560px] w-full object-cover"
            />
          </div>

          <div className="relative -mt-20 ml-auto max-w-xl rounded-[1.5rem] bg-white p-8 shadow-2xl shadow-black/10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B]">
              Teaching Focus
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="border-t border-[#ECE6DE] pt-4 text-base leading-7 text-[#3D3935]"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}