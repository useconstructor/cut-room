import NavBar from "./components/NavBar";
import HoursStatus from "./components/HoursStatus";

const services = [
  {
    name: "Classic Cut",
    description: "Scissor or clipper cut tailored to your style with a hot towel neck finish.",
    price: "$35",
  },
  {
    name: "Fade & Taper",
    description: "Precision skin or low fade with seamless blend and clean edges.",
    price: "$40",
  },
  {
    name: "Beard Trim",
    description: "Shape, edge, and condition your beard for a sharp, clean look.",
    price: "$25",
  },
  {
    name: "Hot Towel Shave",
    description: "Classic straight-razor shave with hot towels, pre-shave oil, and aftershave.",
    price: "$50",
  },
  {
    name: "Cut & Beard Combo",
    description: "Full haircut plus beard trim — the complete package.",
    price: "$55",
  },
  {
    name: "Head Shave",
    description: "Close scalp shave with straight razor and hot towel treatment.",
    price: "$45",
  },
  {
    name: "Line Up",
    description: "Crisp hairline, sideburn, and neckline edge-up with razor detailing.",
    price: "$20",
  },
  {
    name: "Kids Cut",
    description: "Clean cuts for the little ones, 12 & under.",
    price: "$25",
  },
];

const schedule = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "9:00 AM – 7:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 7:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 7:00 PM" },
  { day: "Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 4:00 PM" },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function Home() {
  return (
    <>
      <NavBar />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section
        id="top"
        className="hero-bg relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        {/* Diagonal stripe accent */}
        <div
          className="absolute inset-0 barber-stripe opacity-60 pointer-events-none"
          aria-hidden
        />

        {/* Red corner accent */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-[#C41E3A]/5 pointer-events-none"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/4 pointer-events-none"
          style={{ clipPath: "polygon(0 100%, 0 0, 100% 100%)" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <p className="font-body font-semibold tracking-[0.4em] text-[#D4AF37] text-sm mb-4 uppercase">
            Est. 2018 &nbsp;·&nbsp; Premium Grooming
          </p>

          {/* Gold rule */}
          <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8 opacity-60" />

          {/* Headline */}
          <h1 className="font-heading font-bold leading-none tracking-tight text-[#F5F5F5] mb-6">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              THE
            </span>
            <span className="block text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-[#F5F5F5] leading-none -mt-2">
              CUT
            </span>
            <span
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
              style={{ WebkitTextStroke: "2px #D4AF37", color: "transparent" }}
            >
              ROOM
            </span>
          </h1>

          {/* Gold rule */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6 mb-8" />

          {/* Tagline */}
          <p className="font-body text-lg sm:text-xl md:text-2xl text-[#F5F5F5]/60 tracking-widest uppercase mb-12 max-w-lg mx-auto">
            Where Sharp Men Get Sharper
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="font-heading font-semibold tracking-widest text-sm uppercase bg-[#C41E3A] text-[#F5F5F5] px-10 py-4 hover:bg-[#A01830] transition-colors duration-200 w-full sm:w-auto text-center"
            >
              View Services
            </a>
            <a
              href="tel:+15554238871"
              className="font-heading font-semibold tracking-widest text-sm uppercase border border-[#D4AF37] text-[#D4AF37] px-10 py-4 hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-colors duration-200 w-full sm:w-auto text-center"
            >
              (555) 423-8871
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-body text-xs tracking-widest uppercase text-[#F5F5F5]">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────── */}
      <section id="services" className="bg-[#1A1A1A] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <p className="font-body font-semibold tracking-[0.4em] text-[#C41E3A] text-xs uppercase mb-3">
              The Menu
            </p>
            <h2 className="font-heading font-bold text-5xl sm:text-6xl text-[#F5F5F5] tracking-tight section-title-center">
              Services & Pricing
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="group bg-[#2C2C2C] border border-[#2C2C2C] hover:border-[#C41E3A]/50 p-6 transition-all duration-200 hover:bg-[#2C2C2C]/80 flex flex-col"
              >
                {/* Price badge */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-semibold text-lg text-[#F5F5F5] leading-tight group-hover:text-[#D4AF37] transition-colors duration-200">
                    {service.name}
                  </h3>
                  <span className="font-heading font-bold text-xl text-[#D4AF37] ml-3 shrink-0">
                    {service.price}
                  </span>
                </div>
                <p className="font-body text-sm text-[#F5F5F5]/50 leading-relaxed flex-1">
                  {service.description}
                </p>
                {/* Bottom accent line */}
                <div className="mt-4 h-px bg-gradient-to-r from-[#C41E3A]/30 to-transparent group-hover:from-[#C41E3A] transition-all duration-200" />
              </div>
            ))}
          </div>

          {/* Book CTA */}
          <div className="mt-12 text-center">
            <p className="font-body text-[#F5F5F5]/50 text-sm mb-4">
              Walk-ins welcome · Appointments preferred
            </p>
            <a
              href="tel:+15554238871"
              className="inline-block font-heading font-semibold tracking-widest text-sm uppercase bg-[#C41E3A] text-[#F5F5F5] px-12 py-4 hover:bg-[#A01830] transition-colors duration-200"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* ─── Hours ────────────────────────────────────────────── */}
      <section id="hours" className="bg-[#2C2C2C] py-24 px-6 relative overflow-hidden">
        {/* Decorative element */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #D4AF37 0, #D4AF37 2px, transparent 2px, transparent 20px)",
          }}
          aria-hidden
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Hours table */}
            <div>
              <div className="mb-10">
                <p className="font-body font-semibold tracking-[0.4em] text-[#C41E3A] text-xs uppercase mb-3">
                  We&apos;re Open
                </p>
                <h2 className="font-heading font-bold text-5xl sm:text-6xl text-[#F5F5F5] tracking-tight section-title">
                  Hours
                </h2>
              </div>

              {/* Status badge */}
              <div className="mb-8">
                <HoursStatus />
              </div>

              {/* Hours list */}
              <div className="space-y-0 border-t border-[#1A1A1A]/60">
                {schedule.map((item) => {
                  const isToday = item.day === today;
                  return (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center py-3.5 border-b border-[#1A1A1A]/60 ${
                        isToday ? "bg-[#1A1A1A]/40 -mx-4 px-4" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isToday && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                        )}
                        <span
                          className={`font-heading font-medium tracking-wider text-base ${
                            isToday ? "text-[#D4AF37]" : "text-[#F5F5F5]/70"
                          }`}
                        >
                          {item.day}
                        </span>
                      </div>
                      <span
                        className={`font-body text-sm ${
                          item.hours === "Closed"
                            ? "text-[#C41E3A] font-semibold"
                            : isToday
                              ? "text-[#F5F5F5]"
                              : "text-[#F5F5F5]/60"
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location + contact */}
            <div>
              <div className="mb-10">
                <p className="font-body font-semibold tracking-[0.4em] text-[#C41E3A] text-xs uppercase mb-3">
                  Find Us
                </p>
                <h2 className="font-heading font-bold text-5xl sm:text-6xl text-[#F5F5F5] tracking-tight section-title" id="contact">
                  Contact
                </h2>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 text-[#D4AF37]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold tracking-wider text-[#F5F5F5] text-base mb-1">
                      Address
                    </p>
                    <address className="not-italic font-body text-[#F5F5F5]/60 text-sm leading-relaxed">
                      312 Main Street<br />
                      Downtown District<br />
                      Your City, ST 00000
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 text-[#D4AF37]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.72-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold tracking-wider text-[#F5F5F5] text-base mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+15554238871"
                      className="font-body text-[#D4AF37] text-lg hover:text-[#F5F5F5] transition-colors duration-200"
                    >
                      (555) 423-8871
                    </a>
                  </div>
                </div>

                {/* Big call button */}
                <a
                  href="tel:+15554238871"
                  className="mt-4 flex items-center justify-center gap-3 bg-[#C41E3A] hover:bg-[#A01830] text-[#F5F5F5] px-8 py-5 transition-colors duration-200 w-full group"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform duration-200"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.72-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="font-heading font-bold tracking-widest text-base uppercase">
                    Call to Book
                  </span>
                </a>

                {/* Note */}
                <p className="font-body text-xs text-[#F5F5F5]/30 tracking-wide">
                  Walk-ins welcome based on availability.
                  <br />
                  Appointments guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ───────────────────────────────────────────── */}
      <footer className="bg-[#111111] border-t border-[#2C2C2C] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 28 28"
              fill="none"
              className="text-[#D4AF37]"
            >
              <path
                d="M8 20L20 8M8 8c0 0 2-2 4 0s2 4 0 6-4 2-6 0-2-4 0-6zm12 12c0 0 2-2 4 0s2 4 0 6-4 2-6 0-2-4 0-6z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-heading text-sm font-semibold tracking-widest text-[#F5F5F5]/60 uppercase">
              The Cut Room
            </span>
          </div>
          <p className="font-body text-xs text-[#F5F5F5]/30 tracking-wide">
            &copy; {new Date().getFullYear()} The Cut Room. All rights reserved.
          </p>
          <div className="flex gap-1 items-center">
            <div className="w-1.5 h-6 bg-[#F5F5F5]" />
            <div className="w-1.5 h-6 bg-[#C41E3A]" />
            <div className="w-1.5 h-6 bg-[#D4AF37]" />
          </div>
        </div>
      </footer>
    </>
  );
}
