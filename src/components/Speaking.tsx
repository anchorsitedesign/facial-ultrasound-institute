import Image from "next/image";

export default function Speaking() {
  const highlights = [
    "International keynote presentations",
    "Live ultrasound demonstrations",
    "Industry faculty education",
    "Private workshops and consulting",
  ];

  return (
    <section id="speaking" className="bg-white py-28 text-[#1C1C1E]">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10">
          <Image
            src="/images/speaking/speaking-keynote.png"
            alt="Dr. Dawn Naylor presenting at an international medical conference"
            width={1800}
            height={1200}
            className="h-[460px] w-full object-cover object-center"
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            International Speaking
          </p>

          <h2 className="mt-4 text-5xl font-light leading-tight md:text-6xl">
            Sharing knowledge with
            <br />
            clinicians around the world.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#6B675F]">
            Through keynote presentations, faculty appointments, live
            demonstrations, and educational workshops, the Institute advances
            facial ultrasound education for clinicians worldwide.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden rounded-[1.75rem] border border-[#E8E2D9] bg-[#E8E2D9] md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="bg-white p-10 transition hover:bg-[#FCFBF8]"
            >
              <div className="mb-5 h-px w-16 bg-[#C6A15B]" />

              <p className="text-xl font-light leading-8 text-[#3D3935]">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex rounded-full bg-[#1C1C1E] px-8 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A15B]"
          >
            Invite Dr. Naylor to Speak
          </a>
        </div>

      </div>
    </section>
  );
}