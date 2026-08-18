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

        {/* Corner accents */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-[#2d3e5f]/30 pointer-events-none"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a962]/5 pointer-events-none"
          style={{ clipPath: "polygon(0 100%, 0 0, 100% 100%)" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <p className="font-body font-semibold tracking-[0.4em] text-[#c9a962] text-sm mb-4 uppercase">
            Est. 2018 &nbsp;·&nbsp; Premium Grooming
          </p>

          {/* Gold rule */}
          <div className="w-16 h-px bg-[#c9a962] mx-auto mb-8 opacity-60" />

          {/* Headline */}
          <h1 className="font-heading font-black leading-none tracking-tight text-[#ffffff] mb-4">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              THE
            </span>
            <span className="block text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-[#ffffff] leading-none -mt-2">
              CUT
            </span>
            <span
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
              style={{ WebkitTextStroke: "2px #c9a962", color: "transparent" }}
            >
              ROOM
            </span>
          </h1>

          {/* Gold rule */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mt-6 mb-6" />

          {/* Tagline */}
          <h2 className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-[#c9a962] tracking-[0.15em] italic mb-3">
            Where Style Meets Precision
          </h2>

          {/* Subtext */}
          <p className="font-body text-sm sm:text-base text-[#8b9dc3] tracking-widest uppercase mb-12 max-w-md mx-auto">
            Expert Cuts · Classic Shaves · Refined Grooming
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="font-body font-semibold tracking-widest text-sm uppercase bg-[#c9a962] text-[#0d1829] px-10 py-4 hover:bg-[#b8953f] transition-colors duration-200 w-full sm:w-auto text-center"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="font-body font-semibold tracking-widest text-sm uppercase border border-[#8b9dc3] text-[#8b9dc3] px-10 py-4 hover:bg-[#2d3e5f] hover:text-[#ffffff] transition-colors duration-200 w-full sm:w-auto text-center"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-body text-xs tracking-widest uppercase text-[#8b9dc3]">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#c9a962] to-transparent" />
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────── */}
      <section id="services" className="bg-[#0d1829] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <p className="font-body font-semibold tracking-[0.4em] text-[#8b9dc3] text-xs uppercase mb-3">
              The Menu
            </p>
            <h2 className="font-heading font-bold text-5xl sm:text-6xl text-[#ffffff] tracking-tight section-title-center">
              Services & Pricing
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="group bg-[#1a2744] border border-[#2d3e5f] hover:border-[#c9a962]/50 p-6 transition-all duration-200 hover:bg-[#2d3e5f]/40 flex flex-col"
              >
                {/* Price badge */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-semibold text-lg text-[#ffffff] leading-tight group-hover:text-[#c9a962] transition-colors duration-200">
                    {service.name}
                  </h3>
                  <span className="font-body font-bold text-xl text-[#c9a962] ml-3 shrink-0">
                    {service.price}
                  </span>
                </div>
                <p className="font-body text-sm text-[#ffffff]/50 leading-relaxed flex-1">
                  {service.description}
                </p>
                {/* Bottom accent line */}
                <div className="mt-4 h-px bg-gradient-to-r from-[#c9a962]/30 to-transparent group-hover:from-[#c9a962] transition-all duration-200" />
              </div>
            ))}
          </div>

          {/* Book CTA */}
          <div className="mt-12 text-center">
            <p className="font-body text-[#ffffff]/50 text-sm mb-4">
              Walk-ins welcome · Appointments preferred
            </p>
            <a
              href="#booking"
              className="inline-block font-body font-semibold tracking-widest text-sm uppercase bg-[#c9a962] text-[#0d1829] px-12 py-4 hover:bg-[#b8953f] transition-colors duration-200"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* ─── About ────────────────────────────────────────────── */}
      <section id="about" className="bg-[#1a2744] py-24 px-6 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c9a962 0, #c9a962 1px, transparent 1px, transparent 24px)",
          }}
          aria-hidden
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body font-semibold tracking-[0.4em] text-[#8b9dc3] text-xs uppercase mb-3">
                Our Story
              </p>
              <h2 className="font-heading font-bold text-5xl sm:text-6xl text-[#ffffff] tracking-tight section-title mb-8">
                About Us
              </h2>
              <p className="font-body text-[#ffffff]/70 text-base leading-relaxed mb-6">
                The Cut Room was founded on the belief that a great haircut is more than a service
                — it&apos;s a ritual. Since 2018, we&apos;ve been crafting looks with the precision
                of a tailor and the care of a trusted friend.
              </p>
              <p className="font-body text-[#ffffff]/70 text-base leading-relaxed mb-8">
                Every client walks out with more than a fresh cut. They leave looking sharp,
                feeling confident, and ready to take on whatever comes next.
              </p>
              <a
                href="#booking"
                className="inline-block font-body font-semibold tracking-widest text-sm uppercase border border-[#c9a962] text-[#c9a962] px-8 py-3 hover:bg-[#c9a962] hover:text-[#0d1829] transition-colors duration-200"
              >
                Meet Your Barber
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "6+", label: "Years of Excellence" },
                { number: "5K+", label: "Satisfied Clients" },
                { number: "8", label: "Signature Services" },
                { number: "100%", label: "Precision Guaranteed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0d1829] border border-[#2d3e5f] p-8 flex flex-col items-center justify-center text-center"
                >
                  <span className="font-heading font-black text-4xl text-[#c9a962] mb-2">
                    {stat.number}
                  </span>
                  <span className="font-body text-xs text-[#8b9dc3] tracking-widest uppercase leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Booking ──────────────────────────────────────────── */}
      <section id="booking" className="bg-[#0d1829] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body font-semibold tracking-[0.4em] text-[#8b9dc3] text-xs uppercase mb-3">
            Reserve Your Seat
          </p>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl text-[#ffffff] tracking-tight section-title-center mb-6">
            Book Now
          </h2>
          <p className="font-body text-[#ffffff]/60 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Appointments are preferred to guarantee your slot. Walk-ins are always welcome
            based on availability. Call us or stop in today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+15554238871"
              className="flex items-center justify-center gap-3 bg-[#c9a962] text-[#0d1829] px-10 py-5 hover:bg-[#b8953f] transition-colors duration-200 w-full sm:w-auto font-body font-bold tracking-widest text-sm uppercase"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.72-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call to Book
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 border border-[#2d3e5f] text-[#8b9dc3] px-10 py-5 hover:border-[#8b9dc3] hover:text-[#ffffff] transition-colors duration-200 w-full sm:w-auto font-body font-semibold tracking-widest text-sm uppercase"
            >
              Get Directions
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: "⏱", title: "Quick & Efficient", body: "In-and-out service with no wait for booked appointments." },
              { icon: "✂", title: "Master Barbers", body: "Years of training in classic and modern cutting techniques." },
              { icon: "✦", title: "Premium Experience", body: "Hot towels, precision razors, and quality products every time." },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a2744] border border-[#2d3e5f] p-6">
                <div className="text-2xl text-[#c9a962] mb-3">{item.icon}</div>
                <h3 className="font-heading font-semibold text-[#ffffff] text-base mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-[#ffffff]/50 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Hours ────────────────────────────────────────────── */}
      <section id="hours" className="bg-[#2d3e5f] py-24 px-6 relative overflow-hidden">
        {/* Decorative element */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #c9a962 0, #c9a962 2px, transparent 2px, transparent 20px)",
          }}
          aria-hidden
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Hours table */}
            <div>
              <div className="mb-10">
                <p className="font-body font-semibold tracking-[0.4em] text-[#8b9dc3] text-xs uppercase mb-3">
                  We&apos;re Open
                </p>
                <h2 className="font-heading font-bold text-5xl sm:text-6xl text-[#ffffff] tracking-tight section-title">
                  Hours
                </h2>
              </div>

              {/* Status badge */}
              <div className="mb-8">
                <HoursStatus />
              </div>

              {/* Hours list */}
              <div className="space-y-0 border-t border-[#1a2744]/60">
                {schedule.map((item) => {
                  const isToday = item.day === today;
                  return (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center py-3.5 border-b border-[#1a2744]/60 ${
                        isToday ? "bg-[#1a2744]/40 -mx-4 px-4" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {isToday && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a962] shrink-0" />
                        )}
                        <span
                          className={`font-heading font-medium tracking-wider text-base ${
                            isToday ? "text-[#c9a962]" : "text-[#ffffff]/70"
                          }`}
                        >
                          {item.day}
                        </span>
                      </div>
                      <span
                        className={`font-body text-sm ${
                          item.hours === "Closed"
                            ? "text-[#8b9dc3] font-semibold"
                            : isToday
                              ? "text-[#ffffff]"
                              : "text-[#ffffff]/60"
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
                <p className="font-body font-semibold tracking-[0.4em] text-[#8b9dc3] text-xs uppercase mb-3">
                  Find Us
                </p>
                <h2 className="font-heading font-bold text-5xl sm:text-6xl text-[#ffffff] tracking-tight section-title" id="contact">
                  Contact
                </h2>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 text-[#c9a962]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold tracking-wider text-[#ffffff] text-base mb-1">
                      Address
                    </p>
                    <address className="not-italic font-body text-[#ffffff]/60 text-sm leading-relaxed">
                      312 Main Street<br />
                      Downtown District<br />
                      Your City, ST 00000
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 text-[#c9a962]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.72-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold tracking-wider text-[#ffffff] text-base mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+15554238871"
                      className="font-body text-[#c9a962] text-lg hover:text-[#ffffff] transition-colors duration-200"
                    >
                      (555) 423-8871
                    </a>
                  </div>
                </div>

                {/* Big call button */}
                <a
                  href="tel:+15554238871"
                  className="mt-4 flex items-center justify-center gap-3 bg-[#c9a962] hover:bg-[#b8953f] text-[#0d1829] px-8 py-5 transition-colors duration-200 w-full group"
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
                  <span className="font-body font-bold tracking-widest text-base uppercase">
                    Call to Book
                  </span>
                </a>

                {/* Note */}
                <p className="font-body text-xs text-[#ffffff]/30 tracking-wide">
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
      <footer className="bg-[#0d1829] border-t border-[#2d3e5f] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 28 28"
              fill="none"
              className="text-[#c9a962]"
            >
              <path
                d="M8 20L20 8M8 8c0 0 2-2 4 0s2 4 0 6-4 2-6 0-2-4 0-6zm12 12c0 0 2-2 4 0s2 4 0 6-4 2-6 0-2-4 0-6z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-heading text-sm font-semibold tracking-widest text-[#ffffff]/60 uppercase">
              The Cut Room
            </span>
          </div>
          <p className="font-body text-xs text-[#ffffff]/30 tracking-wide">
            &copy; {new Date().getFullYear()} The Cut Room. All rights reserved.
          </p>
          <p className="font-body text-xs text-[#8b9dc3]/60 tracking-widest italic">
            Where Style Meets Precision
          </p>
        </div>
      </footer>
    </>
  );
}
