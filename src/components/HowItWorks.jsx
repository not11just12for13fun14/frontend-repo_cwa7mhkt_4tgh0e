import { Server, Wand2, Presentation, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Server,
    title: "Connect securely",
    desc: "Link your warehouse and SaaS tools via read-only connectors with granular scopes.",
  },
  {
    icon: Wand2,
    title: "Ask in plain English",
    desc: "Describe the report you need. Our private LLM handles SQL, joins, and transformations.",
  },
  {
    icon: Presentation,
    title: "Review and share",
    desc: "Approve queries, see lineage, and export to PDF, slides, or dashboards.",
  },
  {
    icon: CheckCircle2,
    title: "Stay compliant",
    desc: "Everything is logged with built-in governance and role-based access controls.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">How it works</h2>
          <p className="mt-3 text-slate-600">From question to audit-ready report in minutes.</p>
        </div>

        <ol className="mt-12 grid md:grid-cols-2 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-fuchsia-600/10 text-fuchsia-600 flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Step {idx + 1}</div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
