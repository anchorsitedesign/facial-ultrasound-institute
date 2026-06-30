export default function Education() {
  const programs = [
    {
      title: "Facial Ultrasound Courses",
      description:
        "Hands-on education designed to help clinicians integrate ultrasound into aesthetic practice with greater confidence and precision.",
    },
    {
      title: "Private Training",
      description:
        "Customized one-on-one or small-group training for providers, practices, and advanced aesthetic teams.",
    },
    {
      title: "Cadaver Anatomy Education",
      description:
        "Advanced anatomy-focused learning connecting facial structure, vascular mapping, ultrasound, and injectable safety.",
    },
    {
      title: "Consulting & Curriculum",
      description:
        "Strategic education, clinical safety protocols, and ultrasound integration support for organizations and training programs.",
    },
  ];

  return (
    <section id="education" className="bg-[#F8F6F2] px-6 py-28 text-[#1C1C1E]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
              Education
            </p>

            <h2 className="mt-4 text-5xl font-light leading-tight">
              Training clinicians to see more clearly.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#6B675F]">
              Dr. Naylor’s educational programs are built around anatomy,
              imaging, complication prevention, and practical ultrasound-guided
              decision making.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-[#1C1C1E] px-7 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A15B]"
            >
              Inquire About Training
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-8 h-px w-16 bg-[#C6A15B]" />

                <h3 className="text-2xl font-light">{program.title}</h3>

                <p className="mt-5 leading-7 text-[#6B675F]">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}