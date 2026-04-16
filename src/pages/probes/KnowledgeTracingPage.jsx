import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to model how learner understanding evolves across interactions, assessments, and instructional sequences.',
  sections: [
    { eyebrow: 'Focus', title: 'Learning progression', body: 'Track the signals that suggest mastery, uncertainty, regression, or readiness for the next concept.' },
    { eyebrow: 'Inputs', title: 'Trace data', body: 'Provide learner events, tasks, scoring signals, and the temporal structure that should inform the trace.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Adaptive support, progression analysis, and learning diagnostics.' },
    { label: 'Output shape', value: 'Trajectory estimates, concept state summaries, and intervention cues.' },
  ],
});
