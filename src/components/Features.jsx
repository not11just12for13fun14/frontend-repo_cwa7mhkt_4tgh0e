import { BarChart3, Lock, FileText, Database, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Automated Reports",
    desc: "Ask in natural language and generate board-ready PDFs, slides, and datasets in minutes.",
  },
  {
    icon: FileText,
    title: "Interactive Graphs",
    desc: "Drill into KPIs with explainable charts powered by your own data.",
  },
  {
    icon: Lock,
    title: "Private LLM",
    desc: "Run models in your VPC or on-prem. Zero data leaves your environment.",
  },
  {
    icon: Database,
    title: "Unified Connectors",
    desc: "Bring Snowflake, BigQuery, Postgres, SaaS apps and files together securely.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade",
    desc: "SOC2, SSO, RBAC, audit logs, retention policies, and fine-grained controls.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need to trust your insights</h2>
          <p className="mt-3 text-slate-600">We combine private LLMs with governed data workflows so teams can move fast without compromising security.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
