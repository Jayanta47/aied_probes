import { useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Compass,
  GraduationCap,
  MessageSquareQuote,
  Sparkles,
  UserRound,
  WandSparkles,
} from 'lucide-react';
import WorkflowSection from '../../components/probe/WorkflowSection';
import { getSimulationProbeData } from '../../data/simulationProbes';

const probeData = getSimulationProbeData('classroom-simulator');

const roleStyles = {
  Teacher: {
    align: 'justify-start',
    bubble: 'bg-amber-50 border-amber-200',
    icon: GraduationCap,
  },
  Student: {
    align: 'justify-end',
    bubble: 'bg-sky-50 border-sky-200',
    icon: UserRound,
  },
  Assistant: {
    align: 'justify-start',
    bubble: 'bg-emerald-50 border-emerald-200',
    icon: WandSparkles,
  },
};

function RoleEditor({
  id,
  label,
  value,
  options,
  onChange,
  descriptionId,
  descriptionLabel,
  descriptionValue,
  descriptionPlaceholder,
  onDescriptionChange,
}) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-slate-50/70 p-4">
      <label className="block text-sm font-semibold text-slate-900" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="mt-3 w-full rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label className="mt-4 block text-sm font-semibold text-slate-900" htmlFor={descriptionId}>
        {descriptionLabel}
      </label>
      <textarea
        id={descriptionId}
        value={descriptionValue}
        onChange={onDescriptionChange}
        placeholder={descriptionPlaceholder}
        className="mt-3 min-h-[88px] w-full resize-none rounded-[18px] border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-800 outline-none transition focus:border-slate-300"
      />
    </div>
  );
}

function ChatTurn({ turn }) {
  const config = roleStyles[turn.role];
  const RoleIcon = config.icon;

  return (
    <div className={`flex ${config.align}`}>
      <div className={`max-w-[85%] rounded-[22px] border px-4 py-4 shadow-sm ${config.bubble}`}>
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
          <RoleIcon className="h-4 w-4" />
          {turn.role}
        </div>
        <p className="mt-2 text-sm leading-7 text-slate-700">{turn.message}</p>
      </div>
    </div>
  );
}

export default function ClassroomSimulatorPage({ topLevelProbe, selectedProbe, onBack }) {
  const [topic, setTopic] = useState(probeData.topicOptions[0]);
  const [context, setContext] = useState('');
  const [studentRole, setStudentRole] = useState(probeData.studentOptions[0]);
  const [studentDescription, setStudentDescription] = useState('');
  const [assistantRole, setAssistantRole] = useState(probeData.assistantOptions[0]);
  const [assistantDescription, setAssistantDescription] = useState('');
  const [teacherRole, setTeacherRole] = useState(probeData.teacherOptions[0]);
  const [teacherDescription, setTeacherDescription] = useState('');
  const [activeConversation, setActiveConversation] = useState(null);

  const resetOutput = () => {
    setActiveConversation(null);
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
            Simulation Probe
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

          <label className="mt-6 block text-sm font-semibold text-slate-900" htmlFor="classroom-simulator-topic">
            {probeData.topicLabel}
          </label>
          <select
            id="classroom-simulator-topic"
            value={topic}
            onChange={(event) => {
              setTopic(event.target.value);
              resetOutput();
            }}
            className="mt-3 w-full rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
          >
            {probeData.topicOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <label className="mt-6 block text-sm font-semibold text-slate-900" htmlFor="classroom-simulator-context">
            {probeData.contextLabel}
          </label>
          <textarea
            id="classroom-simulator-context"
            value={context}
            onChange={(event) => {
              setContext(event.target.value);
              resetOutput();
            }}
            placeholder={probeData.contextPlaceholder}
            className="mt-3 min-h-[110px] w-full resize-none rounded-[18px] border border-slate-200 bg-slate-50/90 px-4 py-3 text-sm leading-7 text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
          />

          <div className="mt-6 space-y-4">
            <p className="text-sm font-semibold text-slate-900">{probeData.rolesLabel}</p>
            <div className="grid gap-4">
              <RoleEditor
                id="classroom-simulator-student"
                label={probeData.studentLabel}
                value={studentRole}
                options={probeData.studentOptions}
                onChange={(event) => {
                  setStudentRole(event.target.value);
                  resetOutput();
                }}
                descriptionId="classroom-simulator-student-description"
                descriptionLabel={probeData.studentDescriptionLabel}
                descriptionValue={studentDescription}
                descriptionPlaceholder={probeData.studentDescriptionPlaceholder}
                onDescriptionChange={(event) => {
                  setStudentDescription(event.target.value);
                  resetOutput();
                }}
              />
              <RoleEditor
                id="classroom-simulator-assistant"
                label={probeData.assistantLabel}
                value={assistantRole}
                options={probeData.assistantOptions}
                onChange={(event) => {
                  setAssistantRole(event.target.value);
                  resetOutput();
                }}
                descriptionId="classroom-simulator-assistant-description"
                descriptionLabel={probeData.assistantDescriptionLabel}
                descriptionValue={assistantDescription}
                descriptionPlaceholder={probeData.assistantDescriptionPlaceholder}
                onDescriptionChange={(event) => {
                  setAssistantDescription(event.target.value);
                  resetOutput();
                }}
              />
              <RoleEditor
                id="classroom-simulator-teacher"
                label={probeData.teacherLabel}
                value={teacherRole}
                options={probeData.teacherOptions}
                onChange={(event) => {
                  setTeacherRole(event.target.value);
                  resetOutput();
                }}
                descriptionId="classroom-simulator-teacher-description"
                descriptionLabel={probeData.teacherDescriptionLabel}
                descriptionValue={teacherDescription}
                descriptionPlaceholder={probeData.teacherDescriptionPlaceholder}
                onDescriptionChange={(event) => {
                  setTeacherDescription(event.target.value);
                  resetOutput();
                }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActiveConversation(probeData.defaultConversation)}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Sparkles className="h-4 w-4" />
            {probeData.submitLabel}
          </button>
        </section>

        <section className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.outputLabel}</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">{probeData.outputTitle}</h2>
            </div>
            <button
              type="button"
              onClick={() => setActiveConversation(probeData.alternativeConversation)}
              disabled={!activeConversation}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeConversation
                  ? 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  : 'cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400'
              }`}
            >
              <MessageSquareQuote className="h-4 w-4" />
              {probeData.variationLabel}
            </button>
          </div>

          {activeConversation ? (
            <div className="mt-5 space-y-4">
              <div
                className="rounded-[24px] border border-slate-200 px-4 py-4"
                style={{
                  background: `linear-gradient(155deg, rgba(255,255,255,0.96), ${topLevelProbe.tint})`,
                }}
              >
                <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                  <p><span className="font-semibold text-slate-900">{probeData.topicLabel}:</span> {topic}</p>
                  <p><span className="font-semibold text-slate-900">{probeData.studentLabel}:</span> {studentRole}</p>
                  <p><span className="font-semibold text-slate-900">{probeData.assistantLabel}:</span> {assistantRole}</p>
                  <p><span className="font-semibold text-slate-900">{probeData.teacherLabel}:</span> {teacherRole}</p>
                </div>
                {context.trim() ? (
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    <span className="font-semibold text-slate-900">{probeData.contextLabel}:</span> {context.trim()}
                  </p>
                ) : null}
                {studentDescription.trim() || assistantDescription.trim() || teacherDescription.trim() ? (
                  <div className="mt-4 rounded-[18px] border border-slate-200 bg-white/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{probeData.customNotesLabel}</p>
                    <div className="mt-3 grid gap-3 text-sm leading-7 text-slate-700">
                      {studentDescription.trim() ? (
                        <p><span className="font-semibold text-slate-900">{probeData.studentLabel}:</span> {studentDescription.trim()}</p>
                      ) : null}
                      {assistantDescription.trim() ? (
                        <p><span className="font-semibold text-slate-900">{probeData.assistantLabel}:</span> {assistantDescription.trim()}</p>
                      ) : null}
                      {teacherDescription.trim() ? (
                        <p><span className="font-semibold text-slate-900">{probeData.teacherLabel}:</span> {teacherDescription.trim()}</p>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                <div className="space-y-3">
                  {activeConversation.map((turn, index) => (
                    <ChatTurn key={`${turn.role}-${index}`} turn={turn} />
                  ))}
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
