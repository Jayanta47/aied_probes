import { ArrowLeft, ArrowRight, ChevronRight, Compass } from 'lucide-react';
import { navigate, getProbePath } from '../../lib/navigation';

export default function ProbeScaffold({
  topLevelProbe,
  selectedProbe,
  onBack,
  summary,
  sections,
  highlights,
}) {
  const isNestedProbe = topLevelProbe.id !== selectedProbe.id;
  const relatedProbes = topLevelProbe.children ?? [];

  return (
    <div className="flex min-h-[calc(100vh-6rem)] flex-col gap-8 lg:grid lg:grid-cols-[1.18fr_0.82fr]">
      <div className="space-y-8">
        <div className="space-y-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to gallery
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            <span>{topLevelProbe.title}</span>
            {isNestedProbe ? <ChevronRight className="h-3.5 w-3.5" /> : null}
            {isNestedProbe ? <span>{selectedProbe.title}</span> : null}
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
              <Compass className="h-3.5 w-3.5" />
              Probe View
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
              {selectedProbe.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-700 md:text-lg">{summary}</p>
          </div>
        </div>

        <div
          className="rounded-[30px] border border-slate-200 bg-white/88 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.2)] md:p-8"
          style={{
            background: `linear-gradient(180deg, rgba(248, 250, 252, 0.98), ${topLevelProbe.tint}), linear-gradient(140deg, rgba(255,255,255,0.98), rgba(247,250,252,0.92))`,
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <div key={section.title} className="rounded-[24px] border border-slate-200 bg-white/86 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{section.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="space-y-5">
        <div className="rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-[0_28px_70px_rgba(148,163,184,0.18)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Probe metadata</p>
          <div className="mt-5 space-y-4">
            <div className="rounded-[22px] border border-slate-200 bg-slate-50/90 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Top-level tool</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">{topLevelProbe.title}</p>
            </div>
            <div className="rounded-[22px] border border-slate-200 bg-slate-50/90 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Selection type</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                {isNestedProbe ? 'Exact probe' : 'Direct top-level probe'}
              </p>
            </div>
            {highlights.map((highlight) => (
              <div key={highlight.label} className="rounded-[22px] border border-slate-200 bg-slate-50/90 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{highlight.label}</p>
                <p className="mt-2 text-base font-medium text-slate-800">{highlight.value}</p>
              </div>
            ))}
          </div>
        </div>

        {relatedProbes.length > 0 ? (
          <div className="rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-[0_28px_70px_rgba(148,163,184,0.18)] backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Related exact probes</p>
            <div className="mt-5 space-y-3">
              {relatedProbes.map((probe) => {
                const isActive = probe.id === selectedProbe.id;

                return (
                  <button
                    key={probe.id}
                    type="button"
                    onClick={() => navigate(getProbePath(topLevelProbe.id, probe.id))}
                    className={`flex w-full items-center justify-between rounded-[20px] border px-4 py-4 text-left transition ${
                      isActive
                        ? 'border-slate-300 bg-slate-100 text-slate-950'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="pr-4 text-sm font-medium">{probe.title}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
