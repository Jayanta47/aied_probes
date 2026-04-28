import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Clipboard,
  Compass,
  Image as ImageIcon,
  MessageSquareQuote,
  Mic,
  Sparkles,
  Upload,
} from 'lucide-react';
import WorkflowSection from './WorkflowSection';

function OutputPanel({ displayedOutput, probeData }) {
  if (displayedOutput?.type === 'image' && displayedOutput.src) {
    return (
      <div className="mt-5 min-h-[560px] rounded-[24px] border border-slate-200 bg-slate-50/90 px-5 py-5">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <ImageIcon className="h-4 w-4" />
          Sample image
        </div>
        <div className="mt-5 overflow-hidden rounded-[22px] border border-slate-200 bg-white">
          <img src={displayedOutput.src} alt={displayedOutput.alt} className="h-full w-full object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5 min-h-[560px] rounded-[24px] border border-slate-200 bg-slate-50/90 px-5 py-5">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
        <MessageSquareQuote className="h-4 w-4" />
        Sample response
      </div>
      <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700">
        {displayedOutput?.text || `Press ${probeData.submitLabel} to show the sample output.`}
      </p>
    </div>
  );
}

export default function MultimodalProbeLayout({ topLevelProbe, selectedProbe, onBack, probeData }) {
  const examples = probeData.exampleInputs ?? [];
  const [activeExampleId, setActiveExampleId] = useState(examples[0]?.id ?? null);
  const activeExample = examples.find((example) => example.id === activeExampleId) ?? examples[0] ?? null;
  const [inputValue, setInputValue] = useState(activeExample?.input ?? '');
  const [displayedOutput, setDisplayedOutput] = useState(null);

  useEffect(() => {
    setActiveExampleId(examples[0]?.id ?? null);
    setInputValue(examples[0]?.input ?? '');
    setDisplayedOutput(null);
  }, [selectedProbe.id]);

  const applyExample = (example) => {
    setActiveExampleId(example.id);
    setInputValue(example.input);
  };

  const handleSubmit = () => {
    const matchingExample = examples.find((example) => example.input === inputValue.trim()) ?? activeExample;

    if (!matchingExample) {
      setDisplayedOutput(null);
      return;
    }

    if (matchingExample.outputType === 'image') {
      setDisplayedOutput({
        type: 'image',
        src: matchingExample.outputImageSrc,
        alt: matchingExample.outputAlt ?? selectedProbe.title,
      });
      return;
    }

    setDisplayedOutput({
      type: 'text',
      text: matchingExample.outputText ?? '',
    });
  };

  const isUploadMode = probeData.inputMode === 'upload';

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
              Multimodal Probe
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
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">Medium pairing</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Each probe keeps the same layout, but the input and output medium changes with the task.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
        <section className="grid gap-5">
          <div className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.inputLabel}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">{probeData.inputTitle}</h2>

            {isUploadMode ? (
              <div className="mt-5 rounded-[24px] border border-dashed border-slate-300 bg-slate-50/90 p-5">
                <div className="flex items-center gap-3 text-slate-800">
                  {selectedProbe.id === 'live-speech-transcription' ? (
                    <Mic className="h-5 w-5" />
                  ) : (
                    <Upload className="h-5 w-5" />
                  )}
                  <p className="text-sm font-medium">{probeData.uploadLabel}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{probeData.uploadNote}</p>
                <div className="mt-4 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                  {probeData.sampleFileLabel}: {inputValue || activeExample?.input}
                </div>
              </div>
            ) : (
              <textarea
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder={probeData.inputPlaceholder}
                className="mt-5 min-h-[220px] w-full resize-none rounded-[24px] border border-slate-200 bg-slate-50/90 px-4 py-4 text-sm leading-7 text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
              />
            )}

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {probeData.submitLabel}
              </button>
            </div>
          </div>

          <div
            className="rounded-[30px] border border-slate-200 bg-white/92 p-5 shadow-[0_30px_90px_rgba(148,163,184,0.18)]"
            style={{
              background: `linear-gradient(180deg, rgba(248,250,252,0.98), ${topLevelProbe.tint}), linear-gradient(145deg, rgba(255,255,255,0.96), rgba(248,250,252,0.9))`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.examplesLabel}</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-950">{isUploadMode ? 'Sample upload' : 'Example prompts'}</h2>
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">{probeData.examplesCaption}</p>

            <div className="mt-5 space-y-3">
              {examples.map((example) => {
                const isActive = example.id === activeExample?.id;

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
                        onClick={() => applyExample(example)}
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                          isActive
                            ? 'bg-slate-900 text-white'
                            : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <Clipboard className="h-3.5 w-3.5" />
                        {isUploadMode ? 'Use file' : 'Use example'}
                      </button>
                    </div>
                    <p className="mt-3 line-clamp-4 whitespace-pre-wrap text-sm leading-6 text-slate-600">{example.input}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.outputLabel}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">{probeData.outputTitle}</h2>
            <OutputPanel displayedOutput={displayedOutput} probeData={probeData} />
            <p className="mt-4 text-sm leading-7 text-slate-500">{probeData.outputCaption}</p>
          </div>
        </section>
      </div>

      <WorkflowSection topLevelProbe={topLevelProbe} probeData={probeData} />
    </div>
  );
}
