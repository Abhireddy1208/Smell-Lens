export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black text-xl">
            👃
          </div>

          <span className="text-xl font-semibold tracking-tight">
            SmellLens AI
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#technology" className="transition hover:text-white">
            Technology
          </a>
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
          <a href="#vision" className="transition hover:text-white">
            Vision
          </a>
        </div>

        <button className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-black">
          Explore
        </button>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-90px)] max-w-6xl flex-col items-center justify-center px-6 pb-24 pt-20 text-center">
          <div className="mb-8 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/60">
            The future of digital smell recognition
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
            Search the world
            <br />
            <span className="text-white/40">through smell.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            SmellLens AI combines advanced sensing hardware and artificial
            intelligence to recognize odors and turn invisible chemical patterns
            into useful digital information.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]">
              Explore SmellLens
            </button>

            <button className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.06]">
              How it works
            </button>
          </div>

          {/* Scan Preview */}
          <div className="mt-20 w-full max-w-4xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl">
              <div className="flex aspect-[16/9] items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#0b0b0b]">
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 text-4xl">
                    👃
                  </div>

                  <p className="text-sm font-medium text-white/70">
                    SmellLens Scanner
                  </p>

                  <p className="mt-2 text-xs text-white/30">
                    Sensor ready · Waiting for a smell
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-white/40">THE TECHNOLOGY</p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Turning smell into data.
            </h2>

            <p className="mt-6 leading-7 text-white/50">
              SmellLens does not simply identify a smell with a single sensor.
              It captures chemical response patterns and uses AI to interpret
              those patterns.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Sense",
                text: "Specialized sensors capture chemical information from the surrounding air.",
              },
              {
                number: "02",
                title: "Understand",
                text: "AI analyzes the sensor fingerprint and compares it with learned patterns.",
              },
              {
                number: "03",
                title: "Discover",
                text: "The system returns a meaningful result with information about the detected smell.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <span className="text-sm text-white/30">{item.number}</span>

                <h3 className="mt-12 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-sm leading-6 text-white/45">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium text-white/40">HOW IT WORKS</p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              From molecules
              <br />
              to meaning.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-white/50">
              A smell becomes measurable sensor data. That data is processed,
              transmitted to the AI engine, and transformed into information
              that people can understand.
            </p>
          </div>

          <div className="space-y-3">
            {[
              "Air enters the sensing system",
              "Sensors generate a chemical fingerprint",
              "ESP32 collects the measurements",
              "AI analyzes the pattern",
              "SmellLens returns the result",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                  {index + 1}
                </span>

                <span className="text-sm text-white/65">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium text-white/40">THE VISION</p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            One day, every phone could have a nose.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-7 text-white/45">
            Just as cameras enabled visual search through technologies like
            Google Lens, SmellLens AI explores a future where smartphones and
            smart devices can understand the world through smell.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 text-sm text-white/35 sm:flex-row">
          <p>© 2026 SmellLens AI</p>

          <p>Sense · Understand · Discover</p>
        </div>
      </footer>
    </main>
  );
}
