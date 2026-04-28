export default function WorkflowSection({ topLevelProbe, probeData }) {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)] md:p-7">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Workflow</p>
        <h2 className="text-3xl font-semibold text-slate-950">How this probe works</h2>
        <p className="max-w-3xl text-sm leading-7 text-slate-600">
          This section is meant for the architectural diagram that explains what is happening under the hood.
        </p>
      </div>

      <div
        className="mt-6 overflow-hidden rounded-[28px] border border-slate-200 p-5"
        style={{
          background: `linear-gradient(180deg, rgba(248,250,252,0.98), ${topLevelProbe.tint}), linear-gradient(145deg, rgba(255,255,255,0.96), rgba(248,250,252,0.9))`,
        }}
      >
        {probeData.workflowImagePath ? (
          <img
            src={probeData.workflowImagePath}
            alt={probeData.workflowAlt || `${probeData.title || 'Probe'} workflow diagram`}
            className="w-full rounded-[20px] border border-slate-200 bg-white object-cover"
          />
        ) : (
          <div className="flex min-h-[320px] items-center justify-center rounded-[20px] border border-dashed border-slate-300 bg-white/80 px-6 text-center">
            <p className="max-w-lg text-sm leading-7 text-slate-600">
              Add a `workflowImagePath` in this probe&apos;s data file to show the architectural diagram here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
