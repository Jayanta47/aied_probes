import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to study attendance and engagement estimation workflows that rely on face-based recognition signals.',
  sections: [
    { eyebrow: 'Focus', title: 'Presence tracking', body: 'Define the conditions for detecting presence, estimating engagement, and handling uncertainty or missing views.' },
    { eyebrow: 'Inputs', title: 'Operational context', body: 'Add camera setup, classroom norms, privacy constraints, and the engagement indicators that matter.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Presence verification, participation analysis, and classroom engagement observation.' },
    { label: 'Output shape', value: 'Attendance records, engagement indicators, and session summaries.' },
  ],
});
