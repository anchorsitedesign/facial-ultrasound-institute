import Image from "next/image";

export default function Speaking() {
  const topics = [
    "International keynote presentations",
    "Live ultrasound demonstrations",
    "Industry faculty education",
    "Private workshops and consulting",
  ];

  return (
    <section className="bg-[#F8F6F2] py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[2.25rem] shadow-2xl shadow-black/10">
          <Image
            src="/images/speaking/speaking-keynote.png"
            alt="Dr. Dawn Naylor presenting at an international medical conference"
            width={1800}
            height={1200}
            className="h-[620px] w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
            International Speaking
          </p>

          <h2 className="mt-5 text-5xl font-light leading-tight md:text-6xl text-[#1C1C1E]">
            Sharing knowledge with
            <br />
            clinicians around the world.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#6B675F]">
            Dr. Dawn Naylor is an invited speaker, faculty educator, and
            international presenter, delivering lectures, live ultrasound
            demonstrations, and hands-on workshops focused on anatomy,
            injectable safety, and evidence-based aesthetic medicine.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-[1.75rem] border border-[#E8E2D9] bg-[#E8E2D9] md:grid-cols-2">

          {topics.map((topic) => (
            <div
              key={topic}
              className="bg-white p-8 transition hover:bg-[#FCFBF8]"
            >
              <div className="mb-5 h-px w-14 bg-[#C6A15B]" />

              <p className="text-lg leading-7 text-[#3D3935]">
                {topic}
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