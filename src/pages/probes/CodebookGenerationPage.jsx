import { useState } from 'react';
import { ArrowLeft, ChevronRight, ClipboardList, Compass, FolderTree, Lightbulb, Sparkles } from 'lucide-react';
import WorkflowSection from '../../components/probe/WorkflowSection';
import { getAuditingModelProbeData } from '../../data/auditingModelProbes';

const probeData = getAuditingModelProbeData('codebook-generation');

function SectionCard({ title, items, icon }) {
  const SectionIcon = icon;

  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
        <SectionIcon className="h-4 w-4" />
        {title}
      </div>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm leading-6 text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CodebookGenerationPage({ topLevelProbe, selectedProbe, onBack }) {
  const [selectedCourse, setSelectedCourse] = useState(probeData.courseOptions[0]);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [showTeachingInsights, setShowTeachingInsights] = useState(false);
  const [activeGroupTitle, setActiveGroupTitle] = useState(null);

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

          <label className="mt-6 block text-sm font-semibold text-slate-900" htmlFor="codebook-generation-course">
            {probeData.courseLabel}
          </label>
          <select
            id="codebook-generation-course"
            value={selectedCourse}
            onChange={(event) => {
              setSelectedCourse(event.target.value);
              setHasGenerated(false);
              setShowTeachingInsights(false);
              setActiveGroupTitle(null);
            }}
            className="mt-3 w-full rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
          >
            {probeData.courseOptions.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => {
              setHasGenerated(true);
              setActiveGroupTitle(probeData.groupedInsights[0]?.title ?? null);
            }}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Sparkles className="h-4 w-4" />
            {probeData.submitLabel}
          </button>

          <button
            type="button"
            onClick={() => setShowTeachingInsights((current) => !current)}
            className={`mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${
              showTeachingInsights
                ? 'border-slate-900 bg-slate-900 text-white hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Lightbulb className="h-4 w-4" />
            {probeData.teachingToggleLabel}
          </button>
        </section>

        <section className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.outputLabel}</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">{probeData.outputTitle}</h2>

          {hasGenerated ? (
            <div className="mt-5 space-y-4">
              <SectionCard title={probeData.themesLabel} items={probeData.themes} icon={ClipboardList} />

              <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <FolderTree className="h-4 w-4" />
                  {probeData.groupedInsightsLabel}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {probeData.groupedInsights.map((group) => (
                    <button
                      key={group.title}
                      type="button"
                      onClick={() => setActiveGroupTitle(group.title)}
                      className={`rounded-[20px] border p-4 text-left transition ${
                        activeGroupTitle === group.title
                          ? 'border-slate-500 bg-slate-200 shadow-[0_10px_30px_rgba(148,163,184,0.22)]'
                          : 'border-slate-200 bg-slate-50/90 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <p className="text-sm font-semibold text-slate-900">{group.title}</p>
                      <div className="mt-3 grid gap-2">
                        {group.items.map((item) => (
                          <div key={item} className="rounded-[16px] border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                            {item}
                          </div>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>

                {activeGroupTitle ? (
                  <div
                    className="mt-4 rounded-[20px] border border-slate-200 px-4 py-4"
                    style={{
                      background: `linear-gradient(155deg, rgba(255,255,255,0.96), ${topLevelProbe.tint})`,
                    }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Selected summary</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {probeData.groupedInsights.find((group) => group.title === activeGroupTitle)?.summary}
                    </p>
                  </div>
                ) : null}
              </div>

              {showTeachingInsights ? (
                <>
                  <SectionCard title={probeData.teachingInsightsLabel} items={probeData.teachingInsights} icon={Lightbulb} />
                  <SectionCard title={probeData.teachingActionsLabel} items={probeData.teachingActions} icon={Sparkles} />
                </>
              ) : null}
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
