import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function WorkflowSection({ topLevelProbe, probeData }) {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const workflowAlt = probeData.workflowAlt || `${probeData.title || 'Probe'} workflow diagram`;

  useEffect(() => {
    if (!isImageExpanded) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsImageExpanded(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isImageExpanded]);

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
          <>
            <button
              type="button"
              onClick={() => setIsImageExpanded(true)}
              className="block w-full cursor-zoom-in rounded-[20px] border border-slate-200 bg-white p-0 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-slate-300/70"
              aria-label={`Expand ${workflowAlt}`}
            >
              <img src={probeData.workflowImagePath} alt={workflowAlt} className="w-full rounded-[19px] object-cover" />
            </button>

            {isImageExpanded ? (
              <div
                className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/88 p-4 md:p-8"
                onClick={() => setIsImageExpanded(false)}
                role="dialog"
                aria-modal="true"
                aria-label={workflowAlt}
              >
                <button
                  type="button"
                  className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/92 text-slate-950 shadow-lg transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/40"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsImageExpanded(false);
                  }}
                  aria-label="Close expanded workflow diagram"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
                <img
                  src={probeData.workflowImagePath}
                  alt={workflowAlt}
                  className="max-h-[92vh] max-w-[96vw] cursor-auto rounded-[20px] bg-white object-contain shadow-2xl"
                  onClick={(event) => event.stopPropagation()}
                />
              </div>
            ) : null}
          </>
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
