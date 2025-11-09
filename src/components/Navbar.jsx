import { Rocket, Shield, Lock } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 flex items-center justify-center text-white shadow">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-slate-900 text-lg">PrivyReports</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#how" className="hover:text-slate-900 transition">How it works</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center text-slate-600 gap-1">
              <Shield size={16} />
              <span className="text-sm">Private by design</span>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50">
              <Lock size={16} />
              Sign in
            </button>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
