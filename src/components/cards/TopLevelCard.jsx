import { ArrowRight, Tag } from 'lucide-react';

export default function TopLevelCard({ probe, onSelect }) {
  const hasChildren = Boolean(probe.children?.length);
  const tags = probe.tags ?? [];

  return (
    <button
      type="button"
      onClick={onSelect}
      className="group relative min-h-[280px] overflow-hidden rounded-[30px] border border-slate-200/80 bg-white/86 p-6 text-left shadow-[0_24px_80px_rgba(148,163,184,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${probe.accent} opacity-95 transition-transform duration-500 group-hover:scale-105`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_36%)]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-position:center] [background-size:34px_34px]" />

      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="space-y-4">
          <div className="inline-flex rounded-full border border-slate-300/80 bg-white/72 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-600">
            {probe.eyebrow}
          </div>
          <div className="space-y-3">
            <h2 className="max-w-[14ch] text-[1.95rem] font-semibold leading-tight text-slate-950">
              {probe.title}
            </h2>
            <p className="max-w-[28ch] text-sm leading-6 text-slate-700">{probe.description}</p>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <span className="flex min-w-0 flex-wrap gap-2">
            {tags.length > 0 ? (
              tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-300/80 bg-white/72 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))
            ) : (
              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                {hasChildren ? 'Browse probes' : 'Open probe'}
              </span>
            )}
          </span>
          <span className="rounded-full border border-slate-300/80 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600">
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </button>
  );
}
