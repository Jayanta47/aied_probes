import { ArrowRight, Sparkles } from 'lucide-react';

export default function ChildProbeCard({ probe, tint, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white/90 p-5 text-left shadow-[0_20px_60px_rgba(148,163,184,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
    >
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(145deg, ${tint}, rgba(255,255,255,0.78))` }}
      />
      <div className="relative flex h-full flex-col gap-5">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/92 text-slate-950">
          <Sparkles className="h-4 w-4" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-950">{probe.title}</h3>
          <p className="text-sm leading-6 text-slate-700">{probe.blurb}</p>
        </div>

        <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-slate-900">
          View probe
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}
