import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to monitor longer conversations for changes in quality, drift, escalation, or intervention needs.',
  sections: [
    { eyebrow: 'Focus', title: 'Dialogue oversight', body: 'Watch for shifts in tone, topic, support level, and conversational health over time.' },
    { eyebrow: 'Inputs', title: 'Monitoring criteria', body: 'Define the signals, thresholds, and intervention logic that should govern the monitoring workflow.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Session review, safety monitoring, and conversational quality control.' },
    { label: 'Output shape', value: 'Flags, state summaries, and monitoring dashboards or alerts.' },
  ],
});
