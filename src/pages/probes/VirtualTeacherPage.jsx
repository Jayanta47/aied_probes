import { useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Compass,
  GraduationCap,
  Shield,
  Sparkles,
  UserRound,
  WifiOff,
} from 'lucide-react';
import WorkflowSection from '../../components/probe/WorkflowSection';
import { getSimulationProbeData } from '../../data/simulationProbes';

const probeData = getSimulationProbeData('virtual-teacher');

const roleConfig = {
  Student: {
    isRight: true,
    bubbleBg: 'bg-sky-50',
    bubbleBorder: 'border-sky-200',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-700',
    badgeBg: 'bg-sky-100 text-sky-800',
    Icon: UserRound,
  },
  'Virtual Teacher': {
    isRight: false,
    bubbleBg: 'bg-amber-50',
    bubbleBorder: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    badgeBg: 'bg-amber-100 text-amber-800',
    Icon: GraduationCap,
  },
};

function ChatBubble({ turn }) {
  const cfg = roleConfig[turn.role];
  const { Icon } = cfg;

  return (
    <div className={`flex items-start gap-2.5 ${cfg.isRight ? 'flex-row-reverse' : 'flex-row'}`}>
      <div
        className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${cfg.iconBg}`}
      >
        <Icon className={`h-4 w-4 ${cfg.iconColor}`} />
      </div>
      <div className={`flex max-w-[80%] flex-col gap-1.5 ${cfg.isRight ? 'items-end' : 'items-start'}`}>
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${cfg.badgeBg}`}>
          {turn.role}
        </span>
        <div className={`rounded-[20px] border px-4 py-3 shadow-sm ${cfg.bubbleBg} ${cfg.bubbleBorder}`}>
          <p className="text-sm leading-[1.8] text-slate-700">{turn.message}</p>
        </div>
      </div>
    </div>
  );
}

export default function VirtualTeacherPage({ topLevelProbe, selectedProbe, onBack }) {
  const [topic, setTopic] = useState(probeData.topicOptions[0]);
  const [difficulty, setDifficulty] = useState(probeData.difficultyOptions[1]);
  const [policies, setPolicies] = useState([true, true, true]);
  const [isActivated, setIsActivated] = useState(false);

  const togglePolicy = (i) => {
    setPolicies((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
    setIsActivated(false);
  };

  return (
    <div className="flex min-h-[calc(100vh-6rem)] flex-col gap-8">
      {/* Page header */}
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
            Simulation Probe
          </div>
          <div className="space-y-3">
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
              {selectedProbe.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
              {probeData.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">

        {/* Left: Teacher pre-configuration */}
        <section className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)]">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                <GraduationCap className="h-4 w-4 text-amber-700" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Teacher setup
                </p>
                <h2 className="text-lg font-semibold leading-snug text-slate-950">
                  Lesson &amp; Policy Controller
                </h2>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
              <WifiOff className="h-3 w-3" />
              Offline
            </span>
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-500">
            The teacher configures this before going offline. The virtual substitute follows these settings when students ask for help.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="vt-topic">
                {probeData.topicLabel}
              </label>
              <select
                id="vt-topic"
                value={topic}
                onChange={(e) => { setTopic(e.target.value); setIsActivated(false); }}
                className="w-full rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
              >
                {probeData.topicOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor="vt-difficulty">
                {probeData.difficultyLabel}
              </label>
              <select
                id="vt-difficulty"
                value={difficulty}
                onChange={(e) => { setDifficulty(e.target.value); setIsActivated(false); }}
                className="w-full rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
              >
                {probeData.difficultyOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <Shield className="h-3.5 w-3.5 text-slate-400" />
                <p className="text-sm font-semibold text-slate-900">{probeData.policiesLabel}</p>
              </div>
              <div className="space-y-3 rounded-[18px] border border-slate-200 bg-slate-50/70 px-4 py-4">
                {probeData.policies.map((policy, i) => (
                  <label key={i} className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={policies[i]}
                      onChange={() => togglePolicy(i)}
                      className="mt-0.5 h-4 w-4 cursor-pointer rounded border-slate-300 accent-amber-500"
                    />
                    <span className="text-sm leading-6 text-slate-700">{policy}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsActivated(true)}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Sparkles className="h-4 w-4" />
            {probeData.activateLabel}
          </button>
        </section>

        {/* Right: Interaction arena */}
        <section className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
              {probeData.outputLabel}
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-950">{probeData.outputTitle}</h2>
          </div>

          {isActivated ? (
            <div className="mt-5 space-y-4">
              {/* Session context card */}
              <div
                className="rounded-[20px] border border-slate-200 px-4 py-3"
                style={{
                  background: `linear-gradient(145deg, rgba(255,255,255,0.96), ${topLevelProbe.tint})`,
                }}
              >
                <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-slate-700">
                  <p>
                    <span className="font-semibold text-slate-900">Topic: </span>
                    {topic}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Level: </span>
                    {difficulty}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Active guardrails: </span>
                    {policies.filter(Boolean).length} of {policies.length}
                  </p>
                </div>
              </div>

              {/* Teacher offline banner */}
              <div className="flex items-center gap-2.5 rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-2.5">
                <WifiOff className="h-3.5 w-3.5 flex-shrink-0 text-slate-400" />
                <p className="text-xs leading-5 text-slate-500">{probeData.offlineNote}</p>
              </div>

              {/* Conversation */}
              <div
                className="rounded-[24px] border border-slate-200 p-5"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(248,250,252,0.98) 0%, rgba(241,245,249,0.92) 100%)',
                }}
              >
                <div className="space-y-5">
                  {probeData.conversation.map((turn, i) => (
                    <ChatBubble key={i} turn={turn} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-5 flex min-h-[460px] items-center justify-center rounded-[24px] border border-dashed border-slate-300 bg-slate-50/80 px-6 text-center">
              <p className="max-w-xs text-sm leading-7 text-slate-500">
                {probeData.emptyOutputText}
              </p>
            </div>
          )}
        </section>
      </div>

      <WorkflowSection topLevelProbe={topLevelProbe} probeData={probeData} />
    </div>
  );
}
