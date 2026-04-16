export const probes = [
  {
    id: 'llm-based-agents',
    title: 'LLM-Based Agents',
    eyebrow: 'Agentic workflows',
    description: 'Coordinate agents that browse, act, and complete structured tasks across digital environments.',
    accent: 'from-sky-300/35 via-cyan-400/18 to-blue-600/28',
    tint: 'rgba(92, 191, 255, 0.16)',
    children: [
      {
        id: 'web-agents',
        title: 'Web Agents',
        blurb: 'Agents that browse, extract, compare, and act across websites and online workflows.',
      },
      {
        id: 'computer-action-agents',
        title: 'Computer Action Agents (Copilots)',
        blurb: 'Copilots that operate software interfaces, trigger actions, and help users complete tasks on-device.',
      },
    ],
  },
  {
    id: 'multimodality',
    title: 'Multimodality',
    eyebrow: 'Across mediums',
    description: 'Bridge text, speech, image, video, and audio so one experience can move fluidly between formats.',
    accent: 'from-emerald-300/35 via-teal-400/18 to-lime-500/24',
    tint: 'rgba(90, 214, 169, 0.16)',
    children: [
      {
        id: 'text-to-visualization',
        title: 'Text-to-Visualization',
        blurb: 'Turn written inputs into visual outputs such as charts, diagrams, or other generated media.',
      },
      {
        id: 'live-speech-transcription',
        title: 'Live Speech Transcription',
        blurb: 'Capture spoken interactions in real time for note-taking, analysis, and follow-up workflows.',
      },
      {
        id: 'visual-ingestion',
        title: 'Visual Ingestion',
        blurb: 'Read and interpret images, screenshots, and other visual artifacts as structured signals.',
      },
    ],
  },
  {
    id: 'simulation',
    title: 'Simulation',
    eyebrow: 'Synthetic practice',
    description: 'Create realistic scenarios for training, rehearsal, or experimentation before working with live users.',
    accent: 'from-amber-200/38 via-orange-400/18 to-rose-500/26',
    tint: 'rgba(255, 181, 118, 0.16)',
    children: [
      {
        id: 'classroom-simulator',
        title: 'Classroom Simulator',
        blurb: 'Model classroom dynamics to test prompts, interventions, and facilitator decisions safely.',
      },
      {
        id: 'virtual-teacher',
        title: 'Virtual Teacher',
        blurb: 'Create teacher-like instructional behavior for tutoring, demonstration, or instructional experiments.',
      },
      {
        id: 'socratic-partner',
        title: 'Socratic Partner',
        blurb: 'Encourage reflection and reasoning through guided, dialogic questioning patterns.',
      },
    ],
  },
  {
    id: 'conversational-chatbot',
    title: 'Conversational Chatbot',
    eyebrow: 'Interactive support',
    description: 'Deploy conversational assistants for ideation, research, and structured planning support.',
    accent: 'from-fuchsia-300/35 via-pink-400/18 to-rose-600/26',
    tint: 'rgba(236, 121, 164, 0.16)',
    children: [
      {
        id: 'brainstorming-copilot',
        title: 'Brainstorming CoPilot',
        blurb: 'Support divergent thinking, idea expansion, and fast concept exploration with a conversational partner.',
      },
      {
        id: 'deep-research',
        title: 'Deep Research',
        blurb: 'Run longer-form investigation workflows that gather, compare, and synthesize evidence.',
      },
      {
        id: 'planning',
        title: 'Planning',
        blurb: 'Transform goals into sequenced steps, options, and operational next moves.',
      },
    ],
  },
  {
    id: 'auditing-models',
    title: 'Auditing Models',
    eyebrow: 'Quality and trust',
    description: 'Inspect outputs for consistency, bias, accessibility, and other high-stakes quality signals.',
    accent: 'from-violet-300/35 via-indigo-400/18 to-blue-700/24',
    tint: 'rgba(146, 161, 255, 0.16)',
    children: [
      {
        id: 'grading-consistency-audit',
        title: 'Grading Consistency Audit',
        blurb: 'Compare grading behavior across prompts, runs, and conditions to surface instability.',
      },
      {
        id: 'content-bias-accessibility-audit',
        title: 'Content Bias and Accessibility Audit',
        blurb: 'Review generated materials for biased framing, exclusion, and accessibility breakdowns.',
      },
    ],
  },
  {
    id: 'analysis-tools',
    title: 'Analysis Tools',
    eyebrow: 'Outcome diagnostics',
    description: 'Measure patterns in feedback, grading, and output quality to inform iteration.',
    accent: 'from-cyan-200/35 via-sky-400/18 to-indigo-500/24',
    tint: 'rgba(110, 196, 255, 0.16)',
    children: [
      {
        id: 'grading-analysis-feedback',
        title: 'Grading Analysis and Feedback',
        blurb: 'Inspect grading outputs and feedback quality to understand alignment, drift, and instructional value.',
      },
    ],
  },
  {
    id: 'codebook-generation',
    title: 'Codebook Generation',
    eyebrow: 'Research structure',
    description: 'Generate coding schemes and category structures from qualitative materials and evolving themes.',
    accent: 'from-stone-200/35 via-zinc-300/14 to-slate-500/24',
    tint: 'rgba(184, 194, 208, 0.16)',
  },
  {
    id: 'text-processing',
    title: 'Text Processing',
    eyebrow: 'Language transforms',
    description: 'Condense, label, and structure textual data so it becomes easier to review at scale.',
    accent: 'from-lime-200/34 via-green-400/16 to-emerald-600/24',
    tint: 'rgba(141, 224, 132, 0.16)',
    children: [
      {
        id: 'text-summarization',
        title: 'Text Summarization',
        blurb: 'Produce concise summaries from longer source material while preserving the key signal.',
      },
      {
        id: 'text-classification',
        title: 'Text Classification',
        blurb: 'Assign labels or categories to text for sorting, auditing, and downstream analysis.',
      },
    ],
  },
  {
    id: 'trace-analysis',
    title: 'Trace Analysis',
    eyebrow: 'Behavioral signals',
    description: 'Read longitudinal traces of activity, conversation, and learning behavior to uncover progression.',
    accent: 'from-rose-200/34 via-orange-300/16 to-red-600/24',
    tint: 'rgba(255, 152, 126, 0.16)',
    children: [
      {
        id: 'knowledge-tracing',
        title: 'Knowledge Tracing',
        blurb: 'Model evolving learner understanding across a sequence of interactions or assessments.',
      },
      {
        id: 'conversation-monitoring',
        title: 'Conversation Monitoring',
        blurb: 'Track conversational patterns, interventions, and drift across longer exchanges.',
      },
    ],
  },
  {
    id: 'information-retrieval',
    title: 'Information Retrieval',
    eyebrow: 'Search and recall',
    description: 'Locate the right evidence, context, or examples from larger corpora when precision matters.',
    accent: 'from-blue-200/35 via-slate-300/14 to-cyan-600/24',
    tint: 'rgba(129, 177, 255, 0.16)',
  },
  {
    id: 'facial-recognition',
    title: 'Facial Recognition',
    eyebrow: 'Presence signals',
    description: 'Use face-based recognition workflows to observe attendance and engagement patterns.',
    accent: 'from-yellow-100/38 via-amber-300/16 to-orange-600/24',
    tint: 'rgba(255, 204, 126, 0.16)',
    children: [
      {
        id: 'attendance-engagement',
        title: 'Attendance and Engagement',
        blurb: 'Monitor who is present and estimate engagement-related cues in supported contexts.',
      },
    ],
  },
  {
    id: 'specialized-models',
    title: 'Specialized Models',
    eyebrow: 'Custom adaptation',
    description: 'Tailor model behavior to domain needs using private data, custom objectives, or specialized evaluation.',
    accent: 'from-slate-200/35 via-violet-300/16 to-fuchsia-600/24',
    tint: 'rgba(184, 156, 255, 0.16)',
    children: [
      {
        id: 'finetuning-private-dataset',
        title: 'Finetuning with Private Dataset',
        blurb: 'Adapt a model with organization-specific data while preserving workflow and governance needs.',
      },
    ],
  },
  {
    id: 'transparency-interpretability-tool',
    title: 'Transparency / Interpretability Tool',
    eyebrow: 'Explain the system',
    description: 'Surface how a model reached a result and expose signals that help people inspect confidence or rationale.',
    accent: 'from-teal-200/35 via-cyan-300/16 to-slate-700/24',
    tint: 'rgba(120, 221, 216, 0.16)',
  },
];

export function findTopLevelProbe(probeId) {
  return probes.find((probe) => probe.id === probeId) ?? null;
}

export function findChildProbe(parentId, childId) {
  return findTopLevelProbe(parentId)?.children?.find((probe) => probe.id === childId) ?? null;
}

export function flattenFinalProbes() {
  return probes.flatMap((probe) => {
    if (!probe.children?.length) {
      return [{ topLevelProbe: probe, selectedProbe: probe }];
    }

    return probe.children.map((childProbe) => ({
      topLevelProbe: probe,
      selectedProbe: childProbe,
    }));
  });
}
