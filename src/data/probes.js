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
        title: 'Computer Use Agents (Copilots)',
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
        title: 'Virtual Teacher Substitute',
        blurb: 'Create teacher-like instructional behavior for tutoring, demonstration, or instructional experiments.',
      }
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
        id: 'planning',
        title: 'Reasoning and Planning',
        blurb: 'Transform goals into sequenced steps, options, and operational next moves.',
      },
    ],
  },
  {
    id: 'auditing-models',
    title: 'Course Analytics',
    eyebrow: 'Course diagnostics',
    description: 'Inspect outputs for consistency, bias, accessibility, and other high-stakes quality signals.',
    accent: 'from-violet-300/35 via-indigo-400/18 to-blue-700/24',
    tint: 'rgba(146, 161, 255, 0.16)',
    children: [
      {
        id: 'grading-consistency-audit',
        title: 'Grading Consistency Audit',
        blurb: 'Evaluate grading outputs for alignment with rubrics, fairness across student groups, and consistency across similar responses.',
      },
      {
        id: 'content-bias-accessibility-audit',
        title: 'Content Bias and Accessibility Audit',
        blurb: 'Review generated materials for biased framing, exclusion, and accessibility breakdowns.',
      },
      {
        id: 'codebook-generation',
        title: 'Codebook Generation',
        blurb: 'Generate coding schemes and category structures from qualitative materials and evolving themes.',
      }
    ],
  },
  {
    id: 'trace-analysis',
    title: 'Student Learning Trajectory Analysis',
    eyebrow: 'Behavioral signals',
    description: 'Read long term traces of activity, conversation, and learning behavior to uncover progression.',
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
