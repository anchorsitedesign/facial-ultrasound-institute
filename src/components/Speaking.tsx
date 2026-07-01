export default function Speaking() {
  const topics = [
    "Facial ultrasound in aesthetic medicine",
    "Complication prevention and management",
    "Facial vascular anatomy",
    "Ultrasound-guided injectable safety",
    "Innovation in aesthetic education",
    "Building evidence-based clinical standards",
  ];

  return (
    <section id="speaking" className="bg-[#1C1C1E] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
              Speaking
            </p>

            <h2 className="mt-4 text-5xl font-light leading-tight">
              A global voice in ultrasound-guided aesthetic medicine.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#D6D0C8]">
              Dr. Naylor speaks to clinicians, educators, and industry leaders
              on the future of facial ultrasound, patient safety, anatomy, and
              evidence-based aesthetic practice.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-[#C6A15B] px-7 py-4 text-xs uppercase tracking-[0.18em] text-[#1C1C1E] transition hover:bg-white"
            >
              Invite Dr. Naylor
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-sm uppercase tracking-[0.3em] text-[#C6A15B]">
              Speaking Topics
            </h3>

            <div className="mt-8 grid gap-5">
              {topics.map((topic) => (
                <div
                  key={topic}
                  className="border-b border-white/10 pb-5 text-lg text-[#F8F6F2]"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}