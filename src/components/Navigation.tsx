export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F2]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
<div className="text-sm uppercase tracking-[0.35em] text-[#C6A15B]">
  Dawn Naylor
</div>

        <div className="hidden gap-10 text-sm md:flex">
          <a href="#education">Education</a>
          <a href="#research">Research</a>
          <a href="#speaking">Speaking</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-black px-5 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-black hover:text-white"
        >
          Invite Dr. Naylor
        </a>
      </nav>
    </header>
  );
}