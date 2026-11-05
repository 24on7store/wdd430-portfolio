"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  // 1. Initialize the date state as a stable string to protect the build shell
    const [currentYear, setCurrentYear] = useState<string>("");

    // 2. Set the exact year text only after the component safely loads on the client side
    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    return (
        <footer className="bg-slate-950 text-slate-400 py-6 mt-16 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
            <p>
            &copy; {currentYear || "2026"} |  Mackison JEAN PIERRE | All rights reserved.
            </p>
        </div>
        </footer>
    );
}
