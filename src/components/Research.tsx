export default function Research() {
  const highlights = [
    {
      title: "JAAD Published Research",
      description:
        "Her doctoral quality improvement project, Integrating Ultrasound into Medical Aesthetics, was published in the Journal of the American Academy of Dermatology.",
    },
    {
      title: "Principal Investigator",
      description:
        "Dr. Naylor leads facial ultrasound research initiatives focused on safety, innovation, and evidence-based standards in aesthetic medicine.",
    },
    {
      title: "International Collaboration",
      description:
        "Her research initiatives include collaboration with Dr. Peter Velthuis and Dr. Leonie Schelke, internationally recognized leaders in facial ultrasound.",
    },
  ];

  return (
    <section id="research" className="bg-white px-6 py-28 text-[#1C1C1E]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
              Research
            </p>

            <h2 className="mt-4 text-5xl font-light leading-tight">
              Advancing evidence-based aesthetic medicine.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#6B675F]">
              Dr. Naylor’s work bridges clinical practice, ultrasound education,
              and research to support safer, more precise aesthetic care.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#EFEAE3] bg-[#F8F6F2] p-8"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#C6A15B]">
                  {item.title}
                </p>

                <p className="mt-4 text-lg leading-8 text-[#5F5A52]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}