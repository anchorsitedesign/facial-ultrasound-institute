import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F8F6F2] px-6 pb-4 pt-2 text-[#1C1C1E]">
      <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="text-center lg:text-left">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A15B] md:text-sm">
            Dawn Naylor, DNP, ACNP, CANS
          </p>

          <h1 className="text-5xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
            Better Understanding.
            <br />
            Better Outcomes.
          </h1>

          <div className="mx-auto my-5 h-px w-24 bg-[#C6A15B] lg:mx-0" />

          <h2 className="max-w-2xl text-xl font-light leading-snug md:text-3xl">
            Advancing the Global Standard
            <br />
            for Facial Ultrasound Education
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5F5A52]">
            International educator, researcher, consultant, and clinician
            advancing patient safety through education, innovation, and
            evidence-based aesthetic medicine.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
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

        <div className="relative mx-auto flex w-full max-w-[340px] items-end justify-center lg:max-w-[390px]">
          <Image
            src="/images/hero/dawn-hero.png"
            alt="Dr. Dawn Naylor"
            width={800}
            height={1000}
            priority
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}