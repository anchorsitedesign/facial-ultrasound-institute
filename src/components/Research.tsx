import Image from "next/image";

export default function Research() {
  const highlights = [
    "JAAD published research",
    "Principal investigator",
    "International collaboration",
  ];

  return (
    <section id="research" className="bg-[#F8F6F2] px-6 py-28 text-[#1C1C1E]">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/10">
            <Image
              src="/images/research/research-collaboration.png"
              alt="Facial ultrasound research collaboration"
              width={1200}
              height={900}
              className="h-[560px] w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            Research & Innovation
          </p>

          <h2 className="mt-5 text-5xl font-light leading-tight md:text-6xl">
            Advancing the science behind safer aesthetic medicine.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#6B675F]">
            The Institute bridges clinical practice, facial ultrasound
            education, and published research to support safer, more precise,
            evidence-based aesthetic care.
          </p>

          <div className="mt-12 grid gap-5">
            {highlights.map((item) => (
              <div
                key={item}
                className="border-t border-[#D9CDBB] pt-5 text-lg leading-7 text-[#3D3935]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[1.5rem] bg-white p-8 shadow-xl shadow-black/5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B]">
              Published Work
            </p>

            <p className="mt-5 text-lg leading-8 text-[#3D3935]">
              Dr. Naylor’s doctoral quality improvement project,
              <em> Integrating Ultrasound into Medical Aesthetics</em>, was
              published in the Journal of the American Academy of Dermatology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}