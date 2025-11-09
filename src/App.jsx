import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />

        <section id="cta" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Bring private LLM analytics to your team</h3>
            <p className="mt-3 text-slate-600">Deploy in your VPC, connect data sources, and start generating audit‑ready reports in minutes.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800">Book a demo</a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-800 hover:bg-slate-50">See pricing</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} PrivyReports, Inc. All rights reserved.</p>
          <nav className="text-sm text-slate-600 flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Security</a>
            <a href="#" className="hover:text-slate-900">Docs</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
