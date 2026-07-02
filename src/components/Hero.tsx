import Image from "next/image";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#F8F6F2] px-6 pb-0 pt-6 text-[#1C1C1E]">
      <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="pb-10 text-center lg:pb-16 lg:text-left">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A15B] md:text-sm">
            Dawn Naylor, DNP, ACNP, CANS
          </p>

          <h1 className="text-5xl font-light leading-[1.02] md:text-6xl lg:text-7xl">
            Better Understanding.
            <br />
            Better Outcomes.
          </h1>

          <div className="mx-auto my-6 h-px w-24 bg-[#C6A15B] lg:mx-0" />

          <h2 className="max-w-2xl text-xl font-light leading-snug md:text-3xl">
            Advancing the Global Standard
            <br />
            for Facial Ultrasound Education
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#5F5A52]">
            International educator, researcher, consultant, and clinician
            advancing patient safety through education, innovation, and
            evidence-based aesthetic medicine.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#education"
              className="rounded-full bg-[#1C1C1E] px-8 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A15B]"
            >
              Explore Education
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#1C1C1E] px-8 py-4 text-xs uppercase tracking-[0.18em] transition hover:border-[#C6A15B] hover:text-[#C6A15B]"
            >
              Invite Dr. Naylor
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-[#8C857B]">
            <span>Harvard Executive Education</span>
            <span>•</span>
            <span>JAAD Published Author</span>
            <span>•</span>
            <span>International Faculty</span>
            <span>•</span>
            <span>Top 100 Aesthetic Injector</span>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[430px] items-center justify-center lg:max-w-[560px]">
          <div className="absolute top-20 h-[72%] w-[88%] rounded-full bg-[#E9DFCF] blur-3xl" />

          <Image
            src="/images/hero/dawn-hero.png"
            alt="Dr. Dawn Naylor"
            width={1000}
            height={1300}
            priority
            className="relative z-10 h-auto w-full -translate-y-10 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}