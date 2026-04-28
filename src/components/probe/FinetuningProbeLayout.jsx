import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Clipboard,
  Compass,
  Cpu,
  Database,
  LoaderCircle,
  Sparkles,
  Upload,
} from 'lucide-react';
import WorkflowSection from './WorkflowSection';

export default function FinetuningProbeLayout({ topLevelProbe, selectedProbe, onBack, probeData }) {
  const promptExamples = probeData.promptExamples ?? [];
  const [selectedModel, setSelectedModel] = useState(probeData.modelOptions?.[0] ?? '');
  const [activePromptId, setActivePromptId] = useState(promptExamples[0]?.id ?? null);
  const activePrompt = useMemo(
    () => promptExamples.find((example) => example.id === activePromptId) ?? promptExamples[0] ?? null,
    [activePromptId, promptExamples],
  );
  const [promptValue, setPromptValue] = useState(activePrompt?.prompt ?? '');
  const [trainingState, setTrainingState] = useState('idle');
  const [comparisonOutput, setComparisonOutput] = useState(null);

  useEffect(() => {
    setSelectedModel(probeData.modelOptions?.[0] ?? '');
    setActivePromptId(promptExamples[0]?.id ?? null);
    setPromptValue(promptExamples[0]?.prompt ?? '');
    setTrainingState('idle');
    setComparisonOutput(null);
  }, [selectedProbe.id, probeData.modelOptions, promptExamples]);

  useEffect(() => {
    if (trainingState !== 'training') {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setTrainingState('complete');
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [trainingState]);

  const applyPromptExample = (example) => {
    setActivePromptId(example.id);
    setPromptValue(example.prompt);
  };

  const handleTraining = () => {
    setTrainingState('training');
  };

  const handleInference = () => {
    const matchingExample = promptExamples.find((example) => example.prompt === promptValue.trim()) ?? activePrompt;

    if (!matchingExample) {
      setComparisonOutput(null);
      return;
    }

    setComparisonOutput({
      generic: matchingExample.genericOutput,
      finetuned: matchingExample.finetunedOutput,
    });
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

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
              <Compass className="h-3.5 w-3.5" />
              Finetuning Probe
            </div>
            <div className="space-y-3">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
                {selectedProbe.title}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-700 md:text-lg">{probeData.summary}</p>
            </div>
          </div>

          <div
            className="rounded-[28px] border border-slate-200/90 px-5 py-4 shadow-[0_24px_70px_rgba(148,163,184,0.16)]"
            style={{
              background: `linear-gradient(155deg, rgba(255,255,255,0.95), ${topLevelProbe.tint})`,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Faculty-owned tuning</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Upload local teaching artifacts, simulate model training, and compare a generic model against the finetuned one.
            </p>
          </div>
        </div>
      </div>

      <section className="rounded-[32px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)] md:p-7">
        <div className="flex flex-col gap-6 xl:grid xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.trainingLabel}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">{probeData.trainingTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{probeData.trainingNote}</p>

            <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[24px] border border-dashed border-slate-300 bg-white p-5">
                <div className="flex items-center gap-3 text-slate-800">
                  <Upload className="h-5 w-5" />
                  <p className="text-sm font-medium">{probeData.datasetLabel}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{probeData.datasetCaption}</p>
                <div className="mt-4 space-y-3">
                  {probeData.datasetFiles.map((file) => (
                    <div key={file} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                      {file}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-5">
                <label className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {probeData.modelLabel}
                </label>
                <div className="relative mt-3">
                  <Cpu className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  <select
                    value={selectedModel}
                    onChange={(event) => setSelectedModel(event.target.value)}
                    className="w-full appearance-none rounded-[18px] border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
                  >
                    {probeData.modelOptions.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5 rounded-[20px] border border-slate-200 bg-slate-50/90 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{probeData.costLabel}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">{probeData.costValue}</p>
                </div>

                <button
                  type="button"
                  onClick={handleTraining}
                  className="mt-5 inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {probeData.trainButtonLabel}
                </button>
              </div>
            </div>
          </div>

          <div
            className="rounded-[28px] border border-slate-200 p-5"
            style={{
              background: `linear-gradient(180deg, rgba(248,250,252,0.98), ${topLevelProbe.tint}), linear-gradient(145deg, rgba(255,255,255,0.96), rgba(248,250,252,0.9))`,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.trainingStatusLabel}</p>
            <div className="mt-4 rounded-[24px] border border-slate-200 bg-white/92 p-5">
              {trainingState === 'training' ? (
                <div className="flex min-h-[250px] flex-col items-center justify-center text-center">
                  <LoaderCircle className="h-12 w-12 animate-spin text-slate-700" />
                  <p className="mt-4 text-lg font-semibold text-slate-900">{probeData.trainingInProgressText}</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                    Adapting {selectedModel} using past assignments, rubrics, and feedback records.
                  </p>
                </div>
              ) : trainingState === 'complete' ? (
                <div className="min-h-[250px]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    <Sparkles className="h-3.5 w-3.5" />
                    Complete
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-950">{probeData.trainingCompleteText}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{probeData.trainingCompleteNote}</p>
                  <div className="mt-6 rounded-[20px] border border-slate-200 bg-slate-50/90 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Model used</p>
                    <p className="mt-2 text-base font-medium text-slate-900">{selectedModel}</p>
                  </div>
                  <div className="mt-4 rounded-[20px] border border-slate-200 bg-slate-50/90 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Training corpus</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">Past assignments, rubrics, and teacher feedback histories</p>
                  </div>
                </div>
              ) : (
                <div className="flex min-h-[250px] flex-col items-center justify-center text-center">
                  <Database className="h-12 w-12 text-slate-400" />
                  <p className="mt-4 text-lg font-semibold text-slate-900">Ready to train</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                    Choose an open source model and start training to prepare the finetuned comparison below.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)] md:p-7">
        <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          <div className="grid gap-5">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.inferenceLabel}</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">{probeData.inferenceTitle}</h2>
              <textarea
                value={promptValue}
                onChange={(event) => setPromptValue(event.target.value)}
                placeholder={probeData.promptPlaceholder}
                className="mt-5 min-h-[220px] w-full resize-none rounded-[24px] border border-slate-200 bg-slate-50/90 px-4 py-4 text-sm leading-7 text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
              />
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleInference}
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {probeData.submitLabel}
                </button>
              </div>
            </div>

            <div
              className="rounded-[28px] border border-slate-200 p-5"
              style={{
                background: `linear-gradient(180deg, rgba(248,250,252,0.98), ${topLevelProbe.tint}), linear-gradient(145deg, rgba(255,255,255,0.96), rgba(248,250,252,0.9))`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.promptExamplesLabel}</p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-950">Example prompt</h2>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{probeData.promptExamplesCaption}</p>
              <div className="mt-5 space-y-3">
                {promptExamples.map((example) => {
                  const isActive = example.id === activePrompt?.id;

                  return (
                    <div
                      key={example.id}
                      className={`rounded-[22px] border p-4 transition ${
                        isActive ? 'border-slate-300 bg-white shadow-sm' : 'border-slate-200/90 bg-slate-50/75'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-slate-900">{example.label}</p>
                        <button
                          type="button"
                          onClick={() => applyPromptExample(example)}
                          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                            isActive
                              ? 'bg-slate-900 text-white'
                              : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <Clipboard className="h-3.5 w-3.5" />
                          Use example
                        </button>
                      </div>
                      <p className="mt-3 line-clamp-5 whitespace-pre-wrap text-sm leading-6 text-slate-600">{example.prompt}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Comparative output</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">Generic vs finetuned</h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="min-h-[520px] rounded-[24px] border border-slate-200 bg-slate-50/90 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Generic model</p>
                <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                  {comparisonOutput?.generic || 'Press Enter to show the generic model output for the current prompt.'}
                </p>
              </div>
              <div className="min-h-[520px] rounded-[24px] border border-slate-200 bg-slate-50/90 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Finetuned model</p>
                <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                  {comparisonOutput?.finetuned || 'Press Enter to show the finetuned model output for the current prompt.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkflowSection topLevelProbe={topLevelProbe} probeData={probeData} />
    </div>
  );
}
