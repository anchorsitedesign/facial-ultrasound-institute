import Image from "next/image";

export default function Speaking() {
  const highlights = [
    "Keynote presentations",
    "Live ultrasound demonstrations",
    "Industry faculty education",
    "Private workshops and consulting",
  ];

  return (
    <section id="speaking" className="bg-white px-6 py-24 text-[#1C1C1E]">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            International Speaking
          </p>

          <h2 className="mt-5 text-5xl font-light leading-tight md:text-6xl">
            Sharing knowledge with clinicians around the world.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B675F]">
            Through keynote presentations, faculty appointments, live
            demonstrations, and educational workshops, the Institute advances
            facial ultrasound education for clinicians worldwide.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="border-t border-[#E8E2D9] pt-4 text-base leading-7 text-[#3D3935]"
              >
                {item}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex rounded-full bg-[#1C1C1E] px-8 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A15B]"
          >
            Invite Dr. Naylor to Speak
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10">
          <Image
            src="/images/speaking/speaking-keynote.png"
            alt="Dr. Dawn Naylor presenting at an international medical conference"
            width={1400}
            height={1000}
            className="h-[520px] w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}