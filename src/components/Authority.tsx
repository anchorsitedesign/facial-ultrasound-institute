import Image from "next/image";

export default function Authority() {
  const stats = [
    {
      value: "25+",
      label: "Years Clinical Experience",
    },
    {
      value: "10+",
      label: "Years Ultrasound Experience",
    },
    {
      value: "1,000+",
      label: "Providers Trained",
    },
  ];

  return (
    <section className="bg-[#F8F6F2] px-6 py-28 text-[#1C1C1E]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/10">
            <Image
              src="/images/authority/authority-collaboration.png"
              alt="Dr. Dawn Naylor collaborating with international facial ultrasound experts"
              width={1200}
              height={900}
              className="h-[620px] w-full object-cover"
              priority={false}
            />
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
              Global Authority
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              Advancing the global standard for facial ultrasound education.
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#5F5A52]">
              Through international collaboration, clinical research, and
              hands-on education, Dr. Dawn Naylor is helping establish safer,
              more precise standards for facial ultrasound in aesthetic
              medicine.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t border-[#C6A15B]/30 pt-5"
                >
                  <p className="text-4xl font-light text-[#1C1C1E]">
                    {stat.value}
                  </p>

                  <p className="mt-3 text-xs uppercase leading-5 tracking-[0.22em] text-[#8E857A]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-[1.5rem] bg-white p-8 shadow-xl shadow-black/5">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B]">
                Institute Mission
              </p>

              <p className="mt-5 text-lg leading-8 text-[#3D3935]">
                Building a global community of providers committed to anatomy,
                ultrasound-guided assessment, patient safety, and evidence-based
                aesthetic medicine through education, collaboration, and
                innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}