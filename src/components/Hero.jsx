import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cn8fZ9d9J8Jd9Z3Y/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[70vh] pt-20 pb-16 grid lg:grid-cols-2 items-center gap-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full border border-white/20 bg-white/50 text-slate-700 backdrop-blur">
                Private LLM Analytics
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Generate audit-ready reports and interactive graphs from your private data.
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Connect your data sources, ask in natural language, and get precise, compliant insights. Your data never leaves your environment.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800">
                  Start free trial
                  <ArrowRight size={18} />
                </a>
                <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-800 hover:bg-slate-50">
                  See how it works
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/30 via-fuchsia-200/30 to-transparent pointer-events-none rounded-3xl" />
              <div className="aspect-video rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551281044-8b5e5972d2d4?q=80&w=1974&auto=format&fit=crop"
                  alt="Dashboard preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm text-slate-600">
                <div className="p-3 rounded-lg bg-white/70 border border-slate-200">SOC2 Ready</div>
                <div className="p-3 rounded-lg bg-white/70 border border-slate-200">SAML SSO</div>
                <div className="p-3 rounded-lg bg-white/70 border border-slate-200">On‑prem or VPC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
