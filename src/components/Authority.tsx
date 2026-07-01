export default function Authority() {
  const stats = [
    {
      value: "25+",
      label: "Years",
      description: "Clinical Healthcare Experience",
    },
    {
      value: "10+",
      label: "Years",
      description: "Clinical Ultrasound Experience",
    },
    {
      value: "3+",
      label: "Years",
      description: "Training Providers Worldwide",
    },
  ];

  return (
    <section className="bg-[#F8F6F2] px-6 py-20 text-[#1C1C1E]">
      <div className="mx-auto max-w-7xl border-t border-[#C6A15B]/30 pt-14">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
              Global Authority
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              Advancing the global standard for facial ultrasound education.
            </h2>
          </div>

          <div>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.description}
                  className="border-t border-[#C6A15B]/30 pt-6"
                >
                  <p className="text-5xl font-light text-[#1C1C1E]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#C6A15B]">
                    {stat.label}
                  </p>
                  <p className="mt-3 leading-7 text-[#5F5A52]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-x-20 gap-y-14 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#C6A15B]">
                  International Faculty
                </p>
                <p className="mt-3 leading-7 text-[#5F5A52]">
                  Teaching facial ultrasound, anatomy, and complication
                  prevention across global medical education programs.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#C6A15B]">
                  Published Research
                </p>
                <p className="mt-3 leading-7 text-[#5F5A52]">
                  Published in JAAD for work advancing ultrasound integration in
                  aesthetic medicine.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#C6A15B]">
                  Clinical Precision
                </p>
                <p className="mt-3 leading-7 text-[#5F5A52]">
                  Focused on facial vascular anatomy, patient safety, injectable
                  complications, and ultrasound-guided care.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#C6A15B]">
                  Global Education
                </p>
                <p className="mt-3 leading-7 text-[#5F5A52]">
                  Courses, consulting, speaking, and hands-on training across
                  North America, Europe, and Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}