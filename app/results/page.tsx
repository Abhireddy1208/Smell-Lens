export default function ResultsPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white">
            {/* Navigation */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                <a href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl text-black">
                        👃
                    </div>

                    <span className="text-xl font-semibold tracking-tight">
                        SmellLens AI
                    </span>
                </a>

                <a
                    href="/scan"
                    className="text-sm text-white/50 transition hover:text-white"
                >
                    Scan Again
                </a>
            </nav>

            {/* Result */}
            <section className="mx-auto max-w-6xl px-6 pb-24 pt-12">
                <div className="text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/35">
                        Scan Complete
                    </p>

                    <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                        We detected something.
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
                        Based on the current prototype sensor data, SmellLens AI predicts
                        the following result.
                    </p>
                </div>

                {/* Main Result Card */}
                <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.025] p-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] p-8 sm:p-12">
                        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row">
                            {/* Smell */}
                            <div className="text-center sm:text-left">
                                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-5xl">
                                    ☕
                                </div>

                                <p className="text-sm text-white/35">Detected smell</p>

                                <h2 className="mt-2 text-4xl font-semibold">
                                    Coffee
                                </h2>

                                <p className="mt-3 text-sm text-white/40">
                                    Food · Beverage
                                </p>
                            </div>

                            {/* Confidence */}
                            <div className="text-center">
                                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/15">
                                    <div className="text-3xl font-semibold">94%</div>
                                </div>

                                <p className="mt-4 text-xs uppercase tracking-widest text-white/30">
                                    Confidence
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar smells */}
                <div className="mx-auto mt-16 max-w-4xl">
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-sm text-white/35">SIMILAR PATTERNS</p>

                            <h2 className="mt-2 text-2xl font-semibold">
                                Other possibilities
                            </h2>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {[
                            {
                                emoji: "🍫",
                                name: "Chocolate",
                                confidence: "71%",
                            },
                            {
                                emoji: "🥜",
                                name: "Roasted Nuts",
                                confidence: "64%",
                            },
                            {
                                emoji: "🍵",
                                name: "Black Tea",
                                confidence: "58%",
                            },
                        ].map((item) => (
                            <div
                                key={item.name}
                                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:bg-white/[0.05]"
                            >
                                <div className="text-3xl">{item.emoji}</div>

                                <h3 className="mt-6 font-medium">{item.name}</h3>

                                <p className="mt-2 text-sm text-white/35">
                                    Pattern similarity · {item.confidence}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Information */}
                <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
                    <p className="text-sm text-white/35">ABOUT THIS SMELL</p>

                    <h2 className="mt-3 text-2xl font-semibold">
                        Coffee aroma
                    </h2>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/45">
                        Coffee aroma contains many volatile compounds produced during
                        roasting and brewing. Different roasting levels and preparation
                        methods can produce different chemical patterns.
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-12 flex justify-center gap-3">
                    <a
                        href="/scan"
                        className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
                    >
                        Scan Again
                    </a>

                    <button className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.06]">
                        Save Result
                    </button>
                </div>

                {/* Prototype notice */}
                <p className="mt-8 text-center text-xs text-white/20">
                    Prototype result · AI model integration coming next
                </p>
            </section>
        </main>
    );
}