import { useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ChevronRight,
  Compass,
  FileSpreadsheet,
  FileText,
  NotebookPen,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import WorkflowSection from '../../components/probe/WorkflowSection';
import { getAuditingModelProbeData } from '../../data/auditingModelProbes';

const probeData = getAuditingModelProbeData('grading-consistency-check');

const dataSourceIcons = {
  'Exam Scripts': FileText,
  Marksheet: FileSpreadsheet,
  Rubric: NotebookPen,
};

export default function GradingConsistencyCheckPage({ topLevelProbe, selectedProbe, onBack }) {
  const [selectedCourse, setSelectedCourse] = useState(probeData.courseOptions[0]);
  const [hasGenerated, setHasGenerated] = useState(false);

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

          <label className="mt-6 block text-sm font-semibold text-slate-900" htmlFor="grading-consistency-check-course">
            {probeData.courseLabel}
          </label>
          <select
            id="grading-consistency-check-course"
            value={selectedCourse}
            onChange={(event) => {
              setSelectedCourse(event.target.value);
              setHasGenerated(false);
            }}
            className="mt-3 w-full rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
          >
            {probeData.courseOptions.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>

          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-900">{probeData.dataSourcesLabel}</p>
            <div className="mt-3 grid gap-3">
              {probeData.dataSources.map((source) => {
                const SourceIcon = dataSourceIcons[source] ?? FileText;

                return (
                  <div key={source} className="flex items-center gap-3 rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm font-medium text-slate-700">
                    <SourceIcon className="h-4 w-4 text-slate-500" />
                    {source}
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setHasGenerated(true)}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Sparkles className="h-4 w-4" />
            {probeData.submitLabel}
          </button>
        </section>

        <section className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.outputLabel}</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">{probeData.outputTitle}</h2>

          {hasGenerated ? (
            <div className="mt-5 space-y-4">
              <div
                className="rounded-[24px] border border-amber-300 bg-amber-50 p-5"
                style={{
                  boxShadow: '0 18px 40px rgba(251, 191, 36, 0.12)',
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-amber-900">
                      <AlertTriangle className="h-4 w-4" />
                      {probeData.finalOutcomeLabel}
                    </div>
                    <p className="mt-3 text-base font-semibold text-amber-950">{probeData.reportSummaryLabel}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-amber-900">{probeData.reportSummaryText}</p>
                  </div>
                  <div className="rounded-full border border-amber-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
                    {selectedCourse}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {probeData.reportCards.map((card) => (
                  <div key={`${card.student}-${card.question}`} className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_18px_48px_rgba(148,163,184,0.12)]">
                    <div
                      className="border-b border-slate-200 px-5 py-4"
                      style={{
                        background: `linear-gradient(155deg, rgba(255,255,255,0.96), ${topLevelProbe.tint})`,
                      }}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-slate-300 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                            {card.student}
                          </span>
                          <span className="rounded-full border border-slate-300 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                            {card.question}
                          </span>
                        </div>
                        <span className="rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-900">
                          {card.score}
                        </span>
                      </div>
                    </div>

                    <div className="grid gap-4 p-5 md:grid-cols-[1fr_0.9fr]">
                      <div className="space-y-4">
                        <div className="rounded-[20px] border border-slate-200 bg-slate-50/90 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">What is inconsistent</p>
                          <p className="mt-2 text-sm leading-7 text-slate-700">{card.problem}</p>
                        </div>
                        <div className="rounded-[20px] border border-slate-200 bg-slate-50/90 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Conflict source</p>
                          <p className="mt-2 text-sm font-semibold text-slate-900">{card.conflictSource}</p>
                          <p className="mt-2 text-sm leading-7 text-slate-700">{card.conflictDetail}</p>
                        </div>
                      </div>

                      <div className="rounded-[20px] border border-rose-200 bg-rose-50 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-rose-900">
                          <ShieldAlert className="h-4 w-4" />
                          Review note
                        </div>
                        <p className="mt-3 text-sm leading-7 text-rose-900">{card.reviewNote}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  {probeData.reportLabel}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {probeData.finalOutcomeStatus}: {probeData.reportCards.length} cases surfaced for reviewer follow-up.
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-5 flex min-h-[420px] items-center justify-center rounded-[24px] border border-dashed border-slate-300 bg-slate-50/80 px-6 text-center">
              <p className="max-w-md text-sm leading-7 text-slate-600">{probeData.emptyOutputText}</p>
            </div>
          )}
        </section>
      </div>

      <WorkflowSection topLevelProbe={topLevelProbe} probeData={probeData} />
    </div>
  );
}
