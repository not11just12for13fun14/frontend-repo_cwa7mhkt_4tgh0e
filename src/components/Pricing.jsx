export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Scale with your team. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
            <p className="mt-1 text-sm text-slate-600">For small teams exploring private LLM analytics.</p>
            <div className="mt-4 text-3xl font-bold">$0<span className="text-base font-medium text-slate-500">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• 3 workspaces</li>
              <li>• 10 data connectors</li>
              <li>• Export to PDF & CSV</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-lg bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800">Start free</a>
          </div>

          <div className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-md">
            <h3 className="text-lg font-semibold text-slate-900">Growth</h3>
            <p className="mt-1 text-sm text-slate-600">Best for fast-growing teams and startups.</p>
            <div className="mt-4 text-3xl font-bold">$49<span className="text-base font-medium text-slate-500">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Unlimited workspaces</li>
              <li>• SAML SSO</li>
              <li>• Versioned reports & audit logs</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-lg bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800">Try Growth</a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
            <p className="mt-1 text-sm text-slate-600">Security and scale for large organizations.</p>
            <div className="mt-4 text-3xl font-bold">Custom</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• VPC or on‑prem deployment</li>
              <li>• RBAC & data governance</li>
              <li>• Dedicated support & SLAs</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-800 hover:bg-slate-50">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
