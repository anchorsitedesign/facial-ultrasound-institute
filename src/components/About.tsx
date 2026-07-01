export default function About() {
  return (
    <section id="about" className="bg-[#F8F6F2] px-6 py-28 text-[#1C1C1E]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C6A15B]">
              About Dr. Dawn Naylor
            </p>

            <h2 className="mt-4 text-5xl font-light leading-tight">
              Education.
              <br />
              Innovation.
              <br />
              Patient Safety.
            </h2>

            <div className="mt-10 h-px w-24 bg-[#C6A15B]" />

            <p className="mt-10 text-lg leading-8 text-[#5F5A52]">
              Founder of the Dawn Naylor DNP Facial Ultrasound Training Center
              and Skin Esteem Aesthetics & Wellness Center, Dr. Dawn Naylor has
              dedicated her career to advancing safer, more precise aesthetic
              medicine through education, research, and clinical innovation.
            </p>
          </div>

          <div className="space-y-8">

            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <h3 className="text-xl font-medium">
                More than two decades of clinical leadership
              </h3>

              <p className="mt-4 leading-8 text-[#5F5A52]">
                Dr. Naylor brings over 25 years of healthcare experience,
                spanning critical care, cardiology, advanced procedural
                medicine, and aesthetic practice. Her work combines deep
                clinical knowledge with a passion for education and patient
                safety.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <h3 className="text-xl font-medium">
                International educator and faculty
              </h3>

              <p className="mt-4 leading-8 text-[#5F5A52]">
                She has taught facial ultrasound, anatomy, vascular mapping,
                complication management, and ultrasound-guided injectables
                throughout North America, Europe, and Asia while serving as
                faculty for leading educational organizations worldwide.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <h3 className="text-xl font-medium">
                Research driving the future of aesthetics
              </h3>

              <p className="mt-4 leading-8 text-[#5F5A52]">
                As Principal Investigator, Dr. Naylor collaborates with
                internationally recognized facial ultrasound pioneers including
                Dr. Peter Velthuis and Dr. Leonie Schelke to advance
                evidence-based standards in aesthetic medicine.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}