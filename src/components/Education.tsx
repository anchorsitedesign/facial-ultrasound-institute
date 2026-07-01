import Image from "next/image";

export default function Education() {
  const programs = [
    "Facial Ultrasound Courses",
    "Private Training",
    "Cadaver Anatomy Education",
    "Consulting & Curriculum",
  ];

  return (
    <section id="education" className="bg-[#F8F6F2] px-6 py-28 text-[#1C1C1E]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
  src="/images/education/education-action.jpg"
  alt="Dr. Dawn Naylor teaching facial ultrasound"
  width={1200}
  height={900}
 className="h-[575px] w-full object-cover object-bottom"
/> 
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
              Education
            </p>

            <h2 className="mt-4 text-5xl font-light leading-tight">
              Hands-on training for safer aesthetic practice.
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#6B675F]">
              Dr. Naylor teaches clinicians how to integrate facial ultrasound,
              anatomy, vascular mapping, and complication prevention into
              everyday aesthetic decision making.
            </p>

            <div className="mt-10 grid gap-4">
              {programs.map((program) => (
                <div
                  key={program}
                  className="border-b border-[#C6A15B]/25 pb-4 text-lg"
                >
                  {program}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-[#1C1C1E] px-7 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A15B]"
            >
              Inquire About Training
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}