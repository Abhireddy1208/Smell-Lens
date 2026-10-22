"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ScanPage() {
    const router = useRouter();
    const [scanning, setScanning] = useState(false);

    const startScan = () => {
        setScanning(true);

        setTimeout(() => {
            router.push("/results");
        }, 5000);
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white">
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
                    href="/dashboard"
                    className="text-sm text-white/50 transition hover:text-white"
                >
                    Dashboard
                </a>
            </nav>

            <section className="flex min-h-[calc(100vh-90px)] items-center justify-center px-6 pb-20">
                <div className="w-full max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/35">
                        SmellLens Scanner
                    </p>

                    <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                        What does it smell like?
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
                        Bring the smell source close to the sensor and start a scan.
                    </p>

                    <div className="mx-auto mt-14 flex aspect-square max-w-[360px] items-center justify-center rounded-full border border-white/10 bg-white/[0.025]">
                        <div
                            className={`flex h-56 w-56 items-center justify-center rounded-full border transition-all duration-500 ${scanning
                                    ? "animate-pulse border-white/50 bg-white/[0.08]"
                                    : "border-white/15 bg-white/[0.03]"
                                }`}
                        >
                            <div className="text-center">
                                <div className="text-6xl">👃</div>

                                <p className="mt-5 text-sm font-medium text-white/70">
                                    {scanning ? "Scanning..." : "Sensor Ready"}
                                </p>

                                <p className="mt-2 text-xs text-white/30">
                                    {scanning
                                        ? "Analyzing chemical pattern"
                                        : "Ready to detect a smell"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={startScan}
                        disabled={scanning}
                        className="mt-12 rounded-full bg-white px-10 py-4 text-sm font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        {scanning ? "Analyzing..." : "Start Scan"}
                    </button>

                    <p className="mt-5 text-xs text-white/25">
                        Prototype mode · Simulated sensor
                    </p>
                </div>
            </section>
        </main>
    );
}