import Image from "next/image";

export default function Speaking() {
  const highlights = [
    "Keynote presentations",
    "Faculty education",
    "Live ultrasound demonstrations",
    "Private workshops",
  ];

  return (
    <section id="speaking" className="bg-[#1C1C1E] py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2.25rem] shadow-2xl shadow-black/30">
          <Image
            src="/images/speaking/speaking-keynote.png"
            alt="Dr. Dawn Naylor presenting facial ultrasound research at a medical conference"
            width={1800}
            height={1200}
            className="h-[680px] w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            International Speaking
          </p>

          <h2 className="mt-5 text-5xl font-light leading-tight md:text-6xl">
            Sharing research, education,
            <br />
            and innovation worldwide.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Dr. Dawn Naylor is an invited speaker and faculty educator,
            presenting on facial ultrasound, anatomy, injectable safety,
            complication prevention, and evidence-based aesthetic medicine.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item} className="bg-white/[0.04] p-8">
              <div className="mb-5 h-px w-14 bg-[#C6A15B]" />
              <p className="text-lg leading-7 text-white/85">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex rounded-full bg-[#C6A15B] px-8 py-4 text-xs uppercase tracking-[0.18em] text-[#1C1C1E] transition hover:bg-white"
          >
            Invite Dr. Naylor to Speak
          </a>
        </div>
      </div>
    </section>
  );
}