const scans = [
    ["☕", "Coffee", "94%", "Food · Beverage", "Today"],
    ["🍵", "Black Tea", "88%", "Beverage", "Yesterday"],
    ["🌹", "Rose", "91%", "Floral", "2 days ago"],
    ["🍫", "Chocolate", "86%", "Food", "3 days ago"],
    ["🌿", "Mint", "82%", "Herbal", "5 days ago"],
];

export default function HistoryPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white">
            <nav className="border-b border-white/10">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                    <a href="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl text-black">
                            👃
                        </div>

                        <span className="text-xl font-semibold">
                            SmellLens AI
                        </span>
                    </a>

                    <a
                        href="/dashboard"
                        className="text-sm text-white/50 hover:text-white"
                    >
                        Dashboard
                    </a>
                </div>
            </nav>

            <section className="mx-auto max-w-5xl px-6 py-14">
                <p className="text-sm text-white/35">YOUR ACTIVITY</p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Scan history
                </h1>

                <p className="mt-4 text-sm text-white/40">
                    Explore the smells you have previously scanned.
                </p>

                <div className="mt-12 space-y-3">
                    {scans.map(([emoji, name, confidence, category, date]) => (
                        <div
                            key={`${name}-${date}`}
                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:bg-white/[0.05]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-2xl">
                                    {emoji}
                                </div>

                                <div>
                                    <h2 className="font-medium">{name}</h2>

                                    <p className="mt-1 text-xs text-white/35">
                                        {category}
                                    </p>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-sm font-medium">{confidence}</p>

                                <p className="mt-1 text-xs text-white/30">
                                    {date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <a
                        href="/scan"
                        className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black"
                    >
                        Start New Scan
                    </a>
                </div>
            </section>
        </main>
    );
}