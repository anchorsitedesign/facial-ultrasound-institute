export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F8F6F2] px-6 text-[#1C1C1E]">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C6A15B]">
          Dawn Naylor, DNP, ACNP, CANS
        </p>

        <h1 className="text-5xl font-light leading-tight md:text-6xl lg:text-7xl">
          Better Understanding.
          <br />
          Better Outcomes.
        </h1>

        <div className="mx-auto my-10 h-px w-24 bg-[#C6A15B]" />

        <h2 className="text-2xl font-light leading-snug md:text-4xl">
          Advancing the Global Standard
          <br />
          for Facial Ultrasound Education
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#5F5A52] md:text-lg">
          International educator, researcher, consultant, and clinician
          advancing patient safety through education, innovation, and
          evidence-based aesthetic medicine.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#education"
            className="rounded-full bg-[#1C1C1E] px-8 py-4 text-sm uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A15B]"
          >
            Explore Education
          </a>

          <a
            href="#contact"
            className="rounded-full border border-[#1C1C1E] px-8 py-4 text-sm uppercase tracking-[0.18em] transition hover:border-[#C6A15B] hover:text-[#C6A15B]"
          >
            Invite Dr. Naylor
          </a>
        </div>
      </div>
    </section>
  );
}