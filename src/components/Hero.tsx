import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F8F6F2] px-6 py-8 text-[#1C1C1E]">
      <div className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#C6A15B] md:text-sm">
            Dawn Naylor, DNP, ACNP, CANS
          </p>

          <h1 className="text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            Better Understanding.
            <br />
            Better Outcomes.
          </h1>

          <div className="mx-auto my-7 h-px w-24 bg-[#C6A15B] lg:mx-0" />

          <h2 className="text-xl font-light leading-snug md:text-3xl">
            Advancing the Global Standard
            <br />
            for Facial Ultrasound Education
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#5F5A52]">
            International educator, researcher, consultant, and clinician
            advancing patient safety through education, innovation, and
            evidence-based aesthetic medicine.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#education"
              className="rounded-full bg-[#1C1C1E] px-7 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A15B]"
            >
              Explore Education
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#1C1C1E] px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:border-[#C6A15B] hover:text-[#C6A15B]"
            >
              Invite Dr. Naylor
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] border border-[#C6A15B]/30" />
          <div className="relative h-[620px] overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <Image
              src="/images/hero/dawn-hero.jpg"
              alt="Dr. Dawn Naylor"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}