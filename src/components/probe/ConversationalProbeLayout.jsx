import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ChevronRight, Clipboard, Compass, MessageSquareQuote, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import WorkflowSection from './WorkflowSection';

const MotionDiv = motion.div;

function parseStructuredOutput(output) {
  const sections = output.split('\n\n');
  const cards = [];

  sections.forEach((section) => {
    const [heading, ...rest] = section.split('\n');
    const body = rest.join('\n').trim();

    if (!heading?.trim()) {
      return;
    }

    if (/^Thinking model:/i.test(heading)) {
      cards.push({
        id: `status-${cards.length}`,
        kind: 'status',
        title: heading.replace(/^Thinking model:\s*/i, 'Thinking model: '),
        items: body ? [body] : [],
      });
      return;
    }

    if (heading === 'Thinking tokens') {
      cards.push({
        id: `tokens-${cards.length}`,
        kind: 'tokens',
        title: heading,
        items: body.split('\n').filter(Boolean),
      });
      return;
    }

    if (heading === 'Structured reasoning') {
      cards.push({
        id: `reasoning-${cards.length}`,
        kind: 'reasoning',
        title: heading,
        items: body
          .split('\n')
          .filter(Boolean)
          .map((line) => line.replace(/^- /, '').trim()),
      });
      return;
    }

    if (heading === 'Final answer') {
      cards.push({
        id: `final-${cards.length}`,
        kind: 'final',
        title: heading,
        items: body
          .split('\n')
          .filter(Boolean)
          .map((line) => line.replace(/^- /, '').trim()),
      });
      return;
    }

    const lines = [heading, ...rest].filter(Boolean);
    cards.push({
      id: `plain-${cards.length}`,
      kind: 'plain',
      title: lines[0],
      items: lines.slice(1).length ? lines.slice(1) : [lines[0]],
    });
  });

  return cards;
}

function ConversationalProbeContent({ topLevelProbe, selectedProbe, onBack, probeData }) {
  const examples = probeData.examplePrompts ?? [];
  const [activeExampleId, setActiveExampleId] = useState(examples[0]?.id ?? null);
  const activeExample = examples.find((example) => example.id === activeExampleId) ?? examples[0] ?? null;
  const [inputValue, setInputValue] = useState(activeExample?.prompt ?? '');
  const [displayedOutput, setDisplayedOutput] = useState('');
  const [visibleCardCount, setVisibleCardCount] = useState(0);

  const outputCards = useMemo(() => {
    if (!displayedOutput) {
      return [];
    }

    return parseStructuredOutput(displayedOutput);
  }, [displayedOutput]);

  useEffect(() => {
    if (!outputCards.length) {
      setVisibleCardCount(0);
      return undefined;
    }

    setVisibleCardCount(1);
    const timers = outputCards.slice(1).map((_, index) =>
      window.setTimeout(() => {
        setVisibleCardCount(index + 2);
      }, (index + 1) * 350),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [outputCards]);

  const applyExample = (example) => {
    setActiveExampleId(example.id);
    setInputValue(example.prompt);
  };

  const handleSubmit = () => {
    const matchingExample = examples.find((example) => example.prompt === inputValue.trim());
    setDisplayedOutput((matchingExample ?? activeExample)?.output ?? '');
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
              Conversational Probe
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
              Text prompt in, text response out. Each probe can still define its own examples and displayed answer.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
        <section className="grid gap-5">
          <div className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.inputLabel}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">Input box</h2>
            <textarea
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder={probeData.inputPlaceholder}
              className="mt-5 min-h-[220px] w-full resize-none rounded-[24px] border border-slate-200 bg-slate-50/90 px-4 py-4 text-sm leading-7 text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
            />
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Enter
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
                <h2 className="mt-1 text-xl font-semibold text-slate-950">Example prompts</h2>
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
                        Use example
                      </button>
                    </div>
                    <p className="mt-3 line-clamp-4 whitespace-pre-wrap text-sm leading-6 text-slate-600">{example.prompt}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="rounded-[30px] border border-slate-200 bg-white/92 p-6 shadow-[0_30px_90px_rgba(148,163,184,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{probeData.outputLabel}</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">Output box</h2>
              <div className="mt-5 min-h-[560px] rounded-[24px] border border-slate-200 bg-slate-50/90 px-5 py-5">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <MessageSquareQuote className="h-4 w-4" />
                  Sample response
                </div>
                {outputCards.length ? (
                  <div className="mt-4 space-y-3">
                    <AnimatePresence initial={false}>
                      {outputCards.slice(0, visibleCardCount).map((card) => (
                        <MotionDiv
                          key={card.id}
                          initial={{ opacity: 0, y: 16, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className={`rounded-[22px] border p-4 ${
                            card.kind === 'final'
                              ? 'border-emerald-200 bg-emerald-50'
                              : card.kind === 'tokens'
                                ? 'border-sky-200 bg-sky-50/85'
                                : card.kind === 'status'
                                  ? 'border-violet-200 bg-violet-50/90'
                                  : 'border-slate-200 bg-white'
                          }`}
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{card.title}</p>
                          <div className="mt-3 space-y-2">
                            {card.items.map((item) => (
                              <div
                                key={`${card.id}-${item}`}
                                className={`rounded-[18px] px-3 py-3 text-sm leading-6 ${
                                  card.kind === 'tokens'
                                    ? 'border border-sky-200 bg-white text-slate-700'
                                    : card.kind === 'final'
                                      ? 'border border-emerald-200 bg-white/80 font-medium text-emerald-950'
                                      : 'border border-slate-200 bg-slate-50/70 text-slate-700'
                                }`}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </MotionDiv>
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                    Press Enter to show the sample text response for the current prompt.
                  </p>
                )}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-500">{probeData.outputCaption}</p>
            </div>
        </section>
      </div>

      <WorkflowSection topLevelProbe={topLevelProbe} probeData={probeData} />
    </div>
  );
}

export default function ConversationalProbeLayout(props) {
  return <ConversationalProbeContent key={props.selectedProbe.id} {...props} />;
}
