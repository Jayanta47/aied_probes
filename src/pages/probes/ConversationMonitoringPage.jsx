import { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  BarChart3,
  ChevronRight,
  Compass,
  Lightbulb,
  MessagesSquare,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import WorkflowSection from '../../components/probe/WorkflowSection';
import { getTraceAnalysisProbeData } from '../../data/traceAnalysisProbes';

const probeData = getTraceAnalysisProbeData('conversation-monitoring');

function DetailList({ items, accent = 'slate' }) {
  return (
    <div className="mt-4 grid gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className={`rounded-[18px] border px-4 py-3 text-sm leading-6 ${
            accent === 'amber'
              ? 'border-amber-200 bg-amber-50 text-amber-900'
              : 'border-slate-200 bg-slate-50/90 text-slate-700'
          }`}
        >
          <span className="font-semibold">{item.label}:</span> {item.value}
        </div>
      ))}
    </div>
  );
}

export default function ConversationMonitoringPage({ topLevelProbe, selectedProbe, onBack }) {
  const [selectedCourse, setSelectedCourse] = useState(probeData.courseOptions[0]);
  const [selectedChannel, setSelectedChannel] = useState(probeData.channelOptions[0]);
  const [selectedTimeWindow, setSelectedTimeWindow] = useState(probeData.timeWindowOptions[0]);
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
            Trace Analysis Probe
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

          <label className="mt-6 block text-sm font-semibold text-slate-900" htmlFor="conversation-monitoring-course">
            {probeData.courseLabel}
          </label>
          <select
            id="conversation-monitoring-course"
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

          <label className="mt-6 block text-sm font-semibold text-slate-900" htmlFor="conversation-monitoring-channel">
            {probeData.channelLabel}
          </label>
          <select
            id="conversation-monitoring-channel"
            value={selectedChannel}
            onChange={(event) => {
              setSelectedChannel(event.target.value);
              setHasGenerated(false);
            }}
            className="mt-3 w-full rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
          >
            {probeData.channelOptions.map((channel) => (
              <option key={channel} value={channel}>
                {channel}
              </option>
            ))}
          </select>

          <label className="mt-6 block text-sm font-semibold text-slate-900" htmlFor="conversation-monitoring-time">
            {probeData.timeWindowLabel}
          </label>
          <select
            id="conversation-monitoring-time"
            value={selectedTimeWindow}
            onChange={(event) => {
              setSelectedTimeWindow(event.target.value);
              setHasGenerated(false);
            }}
            className="mt-3 w-full rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
          >
            {probeData.timeWindowOptions.map((windowOption) => (
              <option key={windowOption} value={windowOption}>
                {windowOption}
              </option>
            ))}
          </select>

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
                className="rounded-[24px] border border-slate-200 px-4 py-4"
                style={{
                  background: `linear-gradient(155deg, rgba(255,255,255,0.96), ${topLevelProbe.tint})`,
                }}
              >
                <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-3">
                  <p><span className="font-semibold text-slate-900">{probeData.courseLabel}:</span> {selectedCourse}</p>
                  <p><span className="font-semibold text-slate-900">{probeData.channelLabel}:</span> {selectedChannel}</p>
                  <p><span className="font-semibold text-slate-900">{probeData.timeWindowLabel}:</span> {selectedTimeWindow}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 md:col-span-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <MessagesSquare className="h-4 w-4" />
                    {probeData.overviewTitle}
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    {probeData.overviewStats.map((stat) => (
                      <div key={stat.label} className="rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                        <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Lightbulb className="h-4 w-4" />
                    {probeData.conceptualInsightTitle}
                  </div>
                  <DetailList items={probeData.conceptualInsight} />
                </div>

                <div className="rounded-[24px] border border-amber-300 bg-amber-50 p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-amber-900">
                    <AlertTriangle className="h-4 w-4" />
                    {probeData.behavioralAlertTitle}
                  </div>
                  <DetailList items={probeData.behavioralAlert} accent="amber" />
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <BarChart3 className="h-4 w-4" />
                    {probeData.engagementTrendsTitle}
                  </div>
                  <div className="mt-4 grid gap-3">
                    {probeData.engagementTrends.map((trend) => (
                      <div key={trend} className="rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm leading-6 text-slate-700">
                        {trend}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[20px] border border-slate-200 bg-slate-50/80 p-4">
                    <div className="flex h-28 items-end gap-3">
                      {probeData.engagementChartBars.map((bar) => (
                        <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                          <div className="flex h-20 w-full items-end rounded-full bg-white px-2 py-2">
                            <div
                              className="w-full rounded-full bg-slate-900/80"
                              style={{ height: `${bar.value}%` }}
                            />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Activity className="h-4 w-4" />
                    {probeData.instructorActionTitle}
                  </div>
                  <div className="mt-4 grid gap-3">
                    {probeData.instructorActions.map((action) => (
                      <div key={action} className="rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm leading-6 text-slate-700">
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
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
