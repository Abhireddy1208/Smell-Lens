const recentScans = [
    {
        emoji: "☕",
        name: "Coffee",
        category: "Food · Beverage",
        confidence: "94%",
        time: "Just now",
    },
    {
        emoji: "🍵",
        name: "Black Tea",
        category: "Beverage",
        confidence: "88%",
        time: "Yesterday",
    },
    {
        emoji: "🌹",
        name: "Rose",
        category: "Floral",
        confidence: "91%",
        time: "2 days ago",
    },
];

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white">
            <nav className="border-b border-white/10">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                    <a href="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl text-black">
                            👃
                        </div>

                        <span className="text-xl font-semibold">SmellLens AI</span>
                    </a>

                    <a
                        href="/scan"
                        className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
                    >
                        New Scan
                    </a>
                </div>
            </nav>

            <section className="mx-auto max-w-7xl px-6 py-14">
                <div>
                    <p className="text-sm text-white/35">SMELLLENS DASHBOARD</p>

                    <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Explore your smells.
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">
                        Scan a smell, understand its pattern, and keep track of your
                        discoveries.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
                        <p className="text-sm text-white/35">Total scans</p>
                        <p className="mt-4 text-4xl font-semibold">24</p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
                        <p className="text-sm text-white/35">Smells detected</p>
                        <p className="mt-4 text-4xl font-semibold">12</p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7">
                        <p className="text-sm text-white/35">Avg. confidence</p>
                        <p className="mt-4 text-4xl font-semibold">89%</p>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-sm text-white/35">RECENT ACTIVITY</p>

                            <h2 className="mt-2 text-2xl font-semibold">
                                Recent scans
                            </h2>
                        </div>

                        <a
                            href="/history"
                            className="text-sm text-white/40 hover:text-white"
                        >
                            View all
                        </a>
                    </div>

                    <div className="mt-6 space-y-3">
                        {recentScans.map((scan) => (
                            <div
                                key={scan.name}
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:bg-white/[0.05]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-2xl">
                                        {scan.emoji}
                                    </div>

                                    <div>
                                        <h3 className="font-medium">{scan.name}</h3>

                                        <p className="mt-1 text-xs text-white/35">
                                            {scan.category}
                                        </p>
                                    </div>
                                </div>

                                <div className="hidden text-right sm:block">
                                    <p className="text-sm font-medium">{scan.confidence}</p>
                                    <p className="mt-1 text-xs text-white/30">
                                        {scan.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}