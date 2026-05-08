import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  CircleCheckBig,
  Compass,
  FileUp,
  Import,
  LoaderCircle,
  Sparkles,
} from 'lucide-react';
import WorkflowSection from '../../components/probe/WorkflowSection';
import { getAuditingModelProbeData } from '../../data/auditingModelProbes';

const probeData = getAuditingModelProbeData('accessibility-check');

const optionIcons = {
  upload: FileUp,
  canvas: Import,
};

export default function AccessibilityCheckPage({ topLevelProbe, selectedProbe, onBack }) {
  const defaultOption = probeData.materialOptions[0]?.id ?? null;
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isChecking, setIsChecking] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const selectedMaterials = useMemo(
    () => probeData.materialPreview[selectedOption] ?? [],
    [selectedOption],
  );

  useEffect(() => {
    if (!isChecking) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsChecking(false);
      setHasResults(true);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [isChecking]);

  const startAudit = () => {
    setHasResults(false);
    setIsChecking(true);
  };

  return (
    <div className="flex min-h-[calc(100vh-6rem)] flex-col gap-8">
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
          <ChevronRight className="h-3.5 w-3.5" />
          <span>{selectedProbe.title}</span>
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
            <Compass className="h-3.5 w-3.5" />
            Auditing Probe
          </div>
          <div className="space-y-3">
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
              {selectedProbe.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-700 md:text-lg">{probeData.summary}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
        <section className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.inputLabel}</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">{probeData.inputTitle}</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">{probeData.inputCaption}</p>

          <div className="mt-6 grid gap-3">
            {probeData.materialOptions.map((option) => {
              const isSelected = option.id === selectedOption;
              const OptionIcon = optionIcons[option.id] ?? FileUp;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setSelectedOption(option.id);
                    setHasResults(false);
                    setIsChecking(false);
                  }}
                  className={`rounded-[24px] border p-4 text-left transition ${
                    isSelected
                      ? 'border-slate-300 bg-white shadow-[0_18px_40px_rgba(148,163,184,0.12)]'
                      : 'border-slate-200 bg-slate-50/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800">
                      <OptionIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{option.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{option.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50/90 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{probeData.materialPreviewLabel}</p>
            <div className="mt-4 space-y-3">
              {selectedMaterials.map((material) => (
                <div key={material} className="rounded-[18px] border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
                  {material}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={startAudit}
            disabled={isChecking}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-wait disabled:bg-slate-700"
          >
            {isChecking ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {isChecking ? 'Checking materials...' : probeData.submitLabel}
          </button>
        </section>

        <section className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.outputLabel}</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">{probeData.outputTitle}</h2>

          {isChecking ? (
            <div className="mt-5 flex min-h-[460px] flex-col items-center justify-center rounded-[24px] border border-dashed border-slate-300 bg-slate-50/80 px-6 text-center">
              <LoaderCircle className="h-10 w-10 animate-spin text-slate-500" />
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                Running a sample WCAG-style review across the selected materials and preparing example findings.
              </p>
            </div>
          ) : hasResults ? (
            <div className="mt-5 space-y-4">
              <div
                className="rounded-[26px] border border-emerald-200 p-6"
                style={{
                  background: `linear-gradient(145deg, rgba(255,255,255,0.98), ${topLevelProbe.tint})`,
                  boxShadow: '0 22px 50px rgba(16, 185, 129, 0.1)',
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      {probeData.complianceLabel}
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{probeData.complianceScore}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">{probeData.complianceSummary}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                    <CircleCheckBig className="h-3.5 w-3.5" />
                    WCAG standards
                  </div>
                </div>
              </div>

              {probeData.issues.map((issue) => (
                <div key={issue.id} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_18px_48px_rgba(148,163,184,0.12)]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-slate-950">{issue.title}</p>
                      <p className="mt-2 text-sm font-medium text-slate-500">{issue.material}</p>
                    </div>
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-900">
                      {issue.severity}
                    </span>
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[20px] border border-slate-200 bg-slate-50/90 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Observed issue</p>
                      <p className="mt-2 text-sm leading-7 text-slate-700">{issue.description}</p>
                    </div>
                    <div className="rounded-[20px] border border-emerald-200 bg-emerald-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">Suggested revision</p>
                      <p className="mt-2 text-sm leading-7 text-emerald-900">{issue.recommendation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-5 flex min-h-[460px] items-center justify-center rounded-[24px] border border-dashed border-slate-300 bg-slate-50/80 px-6 text-center">
              <p className="max-w-md text-sm leading-7 text-slate-600">{probeData.emptyOutputText}</p>
            </div>
          )}

          <p className="mt-4 text-sm leading-7 text-slate-500">{probeData.outputCaption}</p>
        </section>
      </div>

      <WorkflowSection topLevelProbe={topLevelProbe} probeData={probeData} />
    </div>
  );
}
