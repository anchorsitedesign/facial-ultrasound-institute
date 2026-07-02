import Image from "next/image";

export default function Education() {
  const outcomes = [
    "Facial ultrasound fundamentals",
    "Vascular mapping and risk assessment",
    "Filler identification and complication prevention",
    "Hands-on scanning and clinical decision-making",
  ];

  const formats = [
    "Signature Courses",
    "Private Training",
    "Cadaver Anatomy Education",
    "Consulting & Curriculum",
  ];

  return (
    <section id="education" className="bg-white px-6 py-32 text-[#1C1C1E]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
              Education
            </p>

            <h2 className="mt-5 text-5xl font-light leading-tight md:text-6xl">
              Hands-on training for safer aesthetic practice.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B675F]">
              The Institute teaches clinicians how to integrate facial
              ultrasound, anatomy, vascular mapping, and complication prevention
              into everyday aesthetic decision-making.
            </p>

            <div className="mt-12 grid gap-5">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex gap-5 border-t border-[#ECE6DE] pt-5"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C6A15B]" />
                  <p className="text-lg leading-7 text-[#3D3935]">{outcome}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-12 inline-flex rounded-full bg-[#1C1C1E] px-8 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A15B]"
            >
              Inquire About Training
            </a>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-[#F8F6F2] shadow-2xl shadow-black/10">
              <Image
                src="/images/education/education-action.jpg"
                alt="Hands-on facial ultrasound education"
                width={1200}
                height={900}
                className="h-[620px] w-full object-cover object-bottom"
              />
            </div>

            <div className="relative -mt-20 ml-auto max-w-xl rounded-[1.5rem] bg-[#F8F6F2] p-8 shadow-2xl shadow-black/10">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B]">
                Training Formats
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {formats.map((format) => (
                  <div
                    key={format}
                    className="border-t border-[#D9CDBB] pt-4 text-base leading-7 text-[#3D3935]"
                  >
                    {format}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}