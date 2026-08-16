export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold font-[family-name:var(--font-space-grotesk)] text-emerald-400">
          Hugo.dev
        </span>
        <div className="flex gap-6 text-sm text-slate-300">
          <a href="#home" className="hover:text-emerald-400 transition">Início</a>
          <a href="#sobre" className="hover:text-emerald-400 transition">Sobre</a>
          <a href="#projetos" className="hover:text-emerald-400 transition">Projetos</a>
          <a href="#certificados" className="hover:text-emerald-400 transition">Certificados</a>
          <a href="#contato" className="hover:text-emerald-400 transition">Contato</a>
        </div>
      </div>
    </nav>
  );
}