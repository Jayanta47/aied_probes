import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Layers3, Sparkles } from 'lucide-react';
import { useState } from 'react';

const categories = [
  {
    id: 'discovery',
    title: 'Discovery Probes',
    eyebrow: 'Find signals early',
    description: 'Use these tools to surface patterns, collect perspectives, and frame the right questions.',
    accent: 'from-cyan-400/30 via-sky-500/20 to-blue-600/25',
    tint: 'rgba(88, 188, 255, 0.12)',
    tools: [
      {
        id: 'interview-mapper',
        title: 'Interview Mapper',
        blurb: 'Organize interview prompts, probe paths, and follow-up opportunities in one place.',
      },
      {
        id: 'signal-catcher',
        title: 'Signal Catcher',
        blurb: 'Collect repeated themes and weak signals emerging across sessions.',
      },
      {
        id: 'context-scan',
        title: 'Context Scan',
        blurb: 'Review assumptions, stakeholders, and surrounding constraints before deeper work.',
      },
      {
        id: 'friction-finder',
        title: 'Friction Finder',
        blurb: 'Spot confusion points, hesitation moments, and places where users lose momentum.',
      },
      {
        id: 'journey-sampler',
        title: 'Journey Sampler',
        blurb: 'Capture a lightweight snapshot of how participants move through a larger experience.',
      },
    ],
  },
  {
    id: 'evaluation',
    title: 'Evaluation Probes',
    eyebrow: 'Test what matters',
    description: 'Compare outputs, inspect quality, and document how a probe behaves over time.',
    accent: 'from-emerald-400/30 via-teal-500/20 to-green-600/25',
    tint: 'rgba(91, 214, 166, 0.12)',
    tools: [
      {
        id: 'rubric-check',
        title: 'Rubric Check',
        blurb: 'Score responses against criteria and review where they succeed or fall short.',
      },
      {
        id: 'behavior-log',
        title: 'Behavior Log',
        blurb: 'Track outputs across sessions so changes and regressions are easy to inspect.',
      },
    ],
  },
  {
    id: 'facilitation',
    title: 'Facilitation Probes',
    eyebrow: 'Guide the interaction',
    description: 'Shape the conversation flow, support learners, and scaffold the next useful move.',
    accent: 'from-amber-300/30 via-orange-400/20 to-rose-500/25',
    tint: 'rgba(255, 183, 120, 0.12)',
    tools: [
      {
        id: 'socratic-guide',
        title: 'Socratic Guide',
        blurb: 'Present prompts that help a learner think more deeply without taking over.',
      },
      {
        id: 'reflection-loop',
        title: 'Reflection Loop',
        blurb: 'Encourage users to pause, summarize, and refine their own reasoning.',
      },
      {
        id: 'prompt-tuner',
        title: 'Prompt Tuner',
        blurb: 'Adjust framing, tone, and constraints to improve the next interaction.',
      },
      {
        id: 'warmup-sequence',
        title: 'Warmup Sequence',
        blurb: 'Ease participants into a session with lighter opening prompts and low-stakes tasks.',
      },
    ],
  },
  {
    id: 'synthesis',
    title: 'Synthesis Probes',
    eyebrow: 'Turn findings into direction',
    description: 'Gather evidence, condense outcomes, and create a sharper next step for the team.',
    accent: 'from-fuchsia-400/30 via-pink-500/20 to-violet-600/25',
    tint: 'rgba(221, 134, 255, 0.12)',
    tools: [
      {
        id: 'pattern-synthesizer',
        title: 'Pattern Synthesizer',
        blurb: 'Pull together insights across activities and surface recurring structures.',
      },
      {
        id: 'insight-board',
        title: 'Insight Board',
        blurb: 'Lay out findings in a lightweight visual board for comparison and discussion.',
      },
      {
        id: 'decision-brief',
        title: 'Decision Brief',
        blurb: 'Summarize what was learned and prepare the handoff into the next action.',
      },
      {
        id: 'cluster-weaver',
        title: 'Cluster Weaver',
        blurb: 'Group related observations into themes that are easier to compare and discuss.',
      },
      {
        id: 'takeaway-maker',
        title: 'Takeaway Maker',
        blurb: 'Turn scattered notes into a concise set of conclusions for quick team review.',
      },
      {
        id: 'next-step-planner',
        title: 'Next Step Planner',
        blurb: 'Translate findings into concrete follow-up experiments, prompts, or design decisions.',
      },
    ],
  },
];

const panelTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

function CategoryCard({ category, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative min-h-[270px] overflow-hidden rounded-[28px] border p-6 text-left backdrop-blur-xl transition-all duration-300 ${
        isActive
          ? 'border-white/60 bg-white/18 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:-translate-y-2'
          : 'border-white/30 bg-white/10 hover:border-white/45 hover:bg-white/16 hover:-translate-y-1'
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-90 transition-transform duration-500 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_38%)]" />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/72">
            {category.eyebrow}
          </p>
          <h2 className="max-w-[14ch] text-2xl font-semibold text-white md:text-[1.9rem]">
            {category.title}
          </h2>
          <p className="max-w-[28ch] text-sm leading-6 text-white/82">
            {category.description}
          </p>
        </div>

        <span className="inline-flex items-center gap-2 text-sm font-medium text-white/92">
          Explore tools
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}

function ToolCard({ tool, tint, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative overflow-hidden rounded-[24px] border border-white/40 bg-white/11 p-5 text-left shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl transition-all duration-300 hover:border-white/60 hover:bg-white/16"
    >
      <div
        className="absolute inset-0 opacity-100"
        style={{ background: `linear-gradient(135deg, ${tint}, rgba(255, 255, 255, 0.05))` }}
      />
      <div className="relative flex h-full flex-col gap-5">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/45 bg-white/38 text-slate-900">
          <Sparkles className="h-4 w-4" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
          <p className="text-sm leading-6 text-white/80">{tool.blurb}</p>
        </div>

        <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-white/90">
          Open tool
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}

export default function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedToolId, setSelectedToolId] = useState(null);

  const selectedCategory = categories.find((category) => category.id === selectedCategoryId) ?? null;
  const selectedTool = selectedCategory?.tools.find((tool) => tool.id === selectedToolId) ?? null;

  return (
    <div className="min-h-screen overflow-hidden px-5 py-6 text-white md:px-8 md:py-8 xl:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl flex-col rounded-[34px] border border-white/22 bg-black/10 p-5 shadow-[0_28px_100px_rgba(0,0,0,0.18)] backdrop-blur-md md:p-7">
        <AnimatePresence mode="wait" initial={false}>
          {selectedTool && selectedCategory ? (
            <motion.section
              key={selectedTool.id}
              initial={{ x: '100%', opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.8 }}
              transition={panelTransition}
              className="flex min-h-[calc(100vh-6.75rem)] flex-col"
            >
              <div className="flex items-start justify-between gap-4 pb-6">
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setSelectedToolId(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/16"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                    {selectedCategory.title}
                  </p>
                  <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    {selectedTool.title}
                  </h1>
                </div>

                <div className="hidden rounded-full border border-white/20 bg-white/10 p-3 text-white/70 md:block">
                  <Layers3 className="h-5 w-5" />
                </div>
              </div>

              <div
                className="flex flex-1 flex-col rounded-[30px] border border-white/60 px-6 py-6 text-slate-900 shadow-[0_32px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-8"
                style={{
                  background: `linear-gradient(180deg, rgba(255, 255, 255, 0.96), ${selectedCategory.tint}), linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.88))`,
                }}
              >
                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Probe overview
                      </p>
                      <p className="max-w-3xl text-base leading-7 text-slate-700">
                        {selectedTool.blurb} This detail page is ready for the content structure you decide later,
                        while already giving you the slide-in interaction, the back path, and a soft white surface for
                        the actual tool experience.
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-[22px] border border-slate-200 bg-white/88 p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                          Status
                        </p>
                        <h2 className="mt-3 text-xl font-semibold text-slate-900">Ready for content</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          Plug in tool descriptions, form fields, embeds, or probe instructions whenever you are ready.
                        </p>
                      </div>

                      <div className="rounded-[22px] border border-slate-200 bg-white/82 p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                          Layout
                        </p>
                        <h2 className="mt-3 text-xl font-semibold text-slate-900">Soft information card</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          The page uses a nearly white tile with only a subtle category tint, matching the direction you described.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-slate-200/90 bg-white/84 p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Placeholder area
                    </p>
                    <div className="mt-4 flex h-full min-h-64 flex-col justify-between rounded-[20px] border border-dashed border-slate-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(248,250,252,0.95))] p-5">
                      <div>
                        <h2 className="text-lg font-semibold text-slate-900">Tool content can live here</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          Keep this panel for descriptions, inputs, examples, media, or interactive probe controls once
                          you finalize the structure.
                        </p>
                      </div>
                      <p className="text-sm font-medium text-slate-500">Content design to be decided later.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          ) : (
            <motion.section
              key="home"
              initial={{ x: '-8%', opacity: 0.85 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-12%', opacity: 0.7 }}
              transition={panelTransition}
              className="flex min-h-[calc(100vh-6.75rem)] flex-col"
            >
              <header className="max-w-3xl space-y-4 pb-8 md:pb-10">
                <p className="text-sm font-semibold uppercase tracking-[0.38em] text-white/68">
                  AI Co-Design Probes
                </p>
                <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  Browse probe categories, then open each tool in its own focused space.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/78 md:text-lg">
                  The landing view stays visual and lightweight. Choose a category tile, scan the tools inside it, and
                  open any tool into a full-screen panel that slides in from the right.
                </p>
              </header>

              <div className="space-y-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.34em] text-white/62">
                    Probe categories
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                    Select a category to reveal its tools
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {categories.map((category) => (
                    <CategoryCard
                      key={category.id}
                      category={category}
                      isActive={category.id === selectedCategoryId}
                      onSelect={() => {
                        setSelectedToolId(null);
                        setSelectedCategoryId((currentId) =>
                          currentId === category.id ? null : category.id,
                        );
                      }}
                    />
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {selectedCategory ? (
                  <motion.div
                    key={selectedCategory.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/28 p-5 backdrop-blur-sm md:p-8"
                  >
                    <motion.section
                      initial={{ opacity: 0, y: 28, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 18, scale: 0.97 }}
                      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                      className="relative z-50 max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/45 bg-slate-950/30 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-7"
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-1.5"
                        style={{
                          background: `linear-gradient(90deg, ${selectedCategory.tint}, rgba(255, 255, 255, 0.72), ${selectedCategory.tint})`,
                        }}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(180deg, rgba(15, 23, 42, 0.72), rgba(15, 23, 42, 0.54)), radial-gradient(circle at top right, ${selectedCategory.tint}, transparent 34%)`,
                        }}
                      />

                      <div className="relative flex max-h-[calc(88vh-3.5rem)] flex-col">
                        <div className="flex flex-col gap-4 border-b border-white/12 pb-6 md:flex-row md:items-start md:justify-between">
                          <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/76">
                              <Layers3 className="h-3.5 w-3.5" />
                              Active selection
                            </div>
                            <h3 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                              {selectedCategory.title}
                            </h3>
                            <p className="mt-4 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                              {selectedCategory.description}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => setSelectedCategoryId(null)}
                            className="inline-flex items-center gap-2 self-start rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-medium text-white/84 transition hover:bg-white/16"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Close
                          </button>
                        </div>

                        <div className="mt-6 overflow-y-auto pr-1">
                          <div className="mb-4 flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/64">
                              Tools in this category
                            </p>
                            <span className="rounded-full border border-white/14 bg-white/8 px-2.5 py-1 text-sm font-medium text-white/68">
                              {selectedCategory.tools.length} tools
                            </span>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {selectedCategory.tools.map((tool) => (
                              <ToolCard
                                key={tool.id}
                                tool={tool}
                                tint={selectedCategory.tint}
                                onOpen={() => setSelectedToolId(tool.id)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.section>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
