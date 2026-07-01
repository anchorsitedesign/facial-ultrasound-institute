export default function Contact() {
  return (
    <section id="contact" className="bg-[#1C1C1E] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
              Contact
            </p>

            <h2 className="mt-4 text-5xl font-light leading-tight">
              Let&apos;s advance the future of aesthetic medicine together.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#D6D0C8]">
              For speaking invitations, private training, research
              collaborations, consulting, or media inquiries, please contact Dr.
              Dawn Naylor directly.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@yourdomain.com"
                className="rounded-full bg-[#C6A15B] px-7 py-4 text-center text-xs uppercase tracking-[0.18em] text-[#1C1C1E] transition hover:bg-white"
              >
                Email Inquiry
              </a>

              <a
                href="#education"
                className="rounded-full border border-white/30 px-7 py-4 text-center text-xs uppercase tracking-[0.18em] text-white transition hover:border-[#C6A15B] hover:text-[#C6A15B]"
              >
                Explore Education
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C6A15B]">
              Inquiry Types
            </p>

            <div className="mt-8 grid gap-5 text-lg text-[#F8F6F2]">
              <p>Speaking Engagements</p>
              <p>Facial Ultrasound Training</p>
              <p>Private Consulting</p>
              <p>Research Collaborations</p>
              <p>Media & Press</p>
            </div>
          </div>
        </div>

        <footer className="mt-24 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-6 text-sm text-[#AFA79E] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Dawn Naylor, DNP. All rights reserved.</p>

            <p>
              Founder, Dawn Naylor DNP Facial Ultrasound Training Center &
              Skin Esteem Aesthetic & Wellness Center
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}