"use client";
import { useState, useEffect } from "react";

const CODE_LINE = `const dev = { nome: "Hugo", foco: "fullstack" };`;

export default function TypingTerminal() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(CODE_LINE.slice(0, i + 1));
      i++;
      if (i === CODE_LINE.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 w-full max-w-md bg-slate-900 border border-slate-800 rounded-lg overflow-hidden text-left">
      <div className="flex gap-2 px-4 py-2 bg-slate-800/50 border-b border-slate-800">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
      </div>
      <div className="p-4 font-[family-name:var(--font-jetbrains-mono)] text-sm text-emerald-400">
        {displayed}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
}