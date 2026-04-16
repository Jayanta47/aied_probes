import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to analyze grades and feedback together so you can inspect both scoring alignment and pedagogical usefulness.',
  sections: [
    { eyebrow: 'Focus', title: 'Feedback quality', body: 'Look at tone, specificity, actionability, and the relationship between assigned scores and written rationale.' },
    { eyebrow: 'Inputs', title: 'Assessment batch', body: 'Add learner work, expected standards, prior feedback examples, and the patterns you want surfaced.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Assessment review, grader monitoring, and feedback improvement.' },
    { label: 'Output shape', value: 'Score distributions, feedback analysis, and targeted observations.' },
  ],
});
