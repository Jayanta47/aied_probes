import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Layers3, Orbit } from 'lucide-react';
import TopLevelCard from '../components/cards/TopLevelCard';
import ChildProbeCard from '../components/cards/ChildProbeCard';
import { probes } from '../data/probes';

const MotionSection = motion.section;
const MotionAside = motion.aside;

export default function HomePage({
  selectedParentId,
  onClosePanel,
  onOpenParent,
  onOpenProbe,
  transition,
}) {
  const selectedParent = probes.find((probe) => probe.id === selectedParentId) ?? null;
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!selectedParent || !sectionRef.current) {
      return;
    }

    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [selectedParent]);

  return (
    <MotionSection
      ref={sectionRef}
      key="home"
      initial={{ opacity: 0.82, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.72, y: -12 }}
      transition={transition}
      className="relative flex min-h-[calc(100vh-6rem)] flex-col overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[34px]">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-cyan-300/16 blur-3xl" />
        <div className="absolute right-0 top-28 h-64 w-64 rounded-full bg-orange-300/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-emerald-300/10 blur-3xl" />
      </div>

      <header className="relative max-w-4xl space-y-5 pb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/82 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-600">
          <Orbit className="h-3.5 w-3.5" />
          AI Probe Gallery
        </div>
        <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
          Probes for Managing Higher Education Faculty Task
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
          Start with the top-level tools, then drill into exact probes only when you need them.
        </p>
      </header>

      <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {probes.map((probe) => (
          <TopLevelCard
            key={probe.id}
            probe={probe}
            onSelect={() => {
              if (probe.children?.length) {
                onOpenParent(probe.id);
                return;
              }

              onOpenProbe(probe);
            }}
          />
        ))}
      </div>

      <AnimatePresence initial={false}>
        {selectedParent ? (
          <MotionAside
            key={selectedParent.id}
            initial={{ x: '100%', opacity: 0.94 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '104%', opacity: 0.92 }}
            transition={transition}
            className="absolute inset-y-0 right-0 z-30 mt-2 flex w-full max-w-3xl justify-end pl-4 md:pl-8"
          >
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white/94 shadow-[0_34px_100px_rgba(148,163,184,0.24)] backdrop-blur-2xl">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0.92), rgba(248,250,252,0.88)), radial-gradient(circle at top right, ${selectedParent.tint}, transparent 34%)`,
                }}
              />
              <div className="relative flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-6 md:px-8">
                <div className="max-w-2xl space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600">
                    <Layers3 className="h-3.5 w-3.5" />
                    Exact probes
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                      {selectedParent.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-700 md:text-base">
                      {selectedParent.description}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClosePanel}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Back
                </button>
              </div>

              <div className="relative flex-1 overflow-y-auto px-6 py-6 md:px-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500">
                    Select an exact probe
                  </p>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600">
                    {selectedParent.children.length} total
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {selectedParent.children.map((probe) => (
                    <ChildProbeCard
                      key={probe.id}
                      probe={probe}
                      tint={selectedParent.tint}
                      onOpen={() => onOpenProbe(selectedParent, probe)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </MotionAside>
        ) : null}
      </AnimatePresence>
    </MotionSection>
  );
}
