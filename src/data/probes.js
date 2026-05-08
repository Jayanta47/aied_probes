export const probes = [
  {
    id: 'llm-based-agents',
    title: 'LLM-Based Agents',
    eyebrow: 'Agentic workflows',
    description: 'Orchestrate autonomous agents that search, navigate, compare, and complete multi-step digital tasks.',
    accent: 'from-sky-300/35 via-cyan-400/18 to-blue-600/28',
    tint: 'rgba(92, 191, 255, 0.16)',
    tags: ['Material prep', 'Admin workflow'],
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
    description: 'Translate and connect information across text, speech, visuals, and other media formats.',
    accent: 'from-emerald-300/35 via-teal-400/18 to-lime-500/24',
    tint: 'rgba(90, 214, 169, 0.16)',
    tags: ['Material prep', 'Lecture'],
    children: [
      {
        id: 'text-to-visualization',
        title: 'Text-to-Visualization',
        blurb: 'Turn written inputs into visual outputs such as charts, diagrams, or other generated media.',
      },
      {
        id: 'visual-ingestion',
        title: 'Non-Digital to Text Transcription',
        blurb: 'Read and interpret images, screenshots, and other visual artifacts as structured signals.',
      },
    ],
  },
  {
    id: 'simulation',
    title: 'Simulation',
    eyebrow: 'Synthetic practice',
    description: 'Stage realistic classroom and teaching scenarios for rehearsal, experimentation, and guided practice.',
    accent: 'from-amber-200/38 via-orange-400/18 to-rose-500/26',
    tint: 'rgba(255, 181, 118, 0.16)',
    tags: ['Lecture', 'Student eval'],
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
    description: 'Dialogue based support for ideation, reasoning, explanation, and guided problem solving.',
    accent: 'from-fuchsia-300/35 via-pink-400/18 to-rose-600/26',
    tint: 'rgba(236, 121, 164, 0.16)',
    tags: ['Material prep', 'Lecture'],
    children: [
      {
        id: 'brainstorming-copilot',
        title: 'Brainstorming CoPilot',
        blurb: 'Support divergent thinking, idea expansion, and fast concept exploration with a conversational partner.',
      },
      {
        id: 'planning',
        title: 'Thinking Models',
        blurb: 'Show how a thinking model works through difficult math, algorithms, and multi-step reasoning before giving a final answer.',
      },
    ],
  },
  {
    id: 'auditing-models',
    title: 'Auditing Models',
    eyebrow: 'Course diagnostics',
    description: 'Inspect model outputs for quality, consistency, accessibility, and other high-stakes evaluation signals.',
    accent: 'from-violet-300/35 via-indigo-400/18 to-blue-700/24',
    tint: 'rgba(146, 161, 255, 0.16)',
    tags: ['Student eval', 'Material prep', 'Research'],
    children: [
      {
        id: 'grading-consistency-check',
        title: 'Grading Consistency Check',
        blurb: 'Evaluate grading outputs for alignment with rubrics, fairness across student groups, and consistency across similar responses.',
      },
      {
        id: 'codebook-generation',
        title: 'Codebook Generation',
        blurb: 'Generate coding schemes and category structures from qualitative materials and evolving themes.',
      },
      {
        id: 'accessibility-audit',
        title: 'Accessibility Check',
        blurb: 'Evaluate materials for accessibility issues and generate suggestions for improvement.',
      }
    ],
  },
  {
    id: 'trace-analysis',
    title: 'Student Learning Trajectory Analysis',
    eyebrow: 'Behavioral signals',
    description: 'Interpret learning traces to surface progression, struggle, engagement, and change over time.',
    accent: 'from-rose-200/34 via-orange-300/16 to-red-600/24',
    tint: 'rgba(255, 152, 126, 0.16)',
    tags: ['Student eval', 'Lecture'],
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
    description: 'Track presence and engagement signals from classroom visual data in a structured monitoring workflow.',
    accent: 'from-yellow-100/38 via-amber-300/16 to-orange-600/24',
    tint: 'rgba(255, 204, 126, 0.16)',
    tags: ['Lecture', 'Student eval'],
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
    title: 'Customized Models',
    eyebrow: 'Custom adaptation',
    description: 'Adapt models to local needs through private data, domain tuning, and customized evaluation behavior.',
    accent: 'from-slate-200/35 via-violet-300/16 to-fuchsia-600/24',
    tint: 'rgba(125, 81, 238, 0.16)',
    tags: ['Model setup', 'Material prep'],
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
