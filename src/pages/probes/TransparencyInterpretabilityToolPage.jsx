import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to surface explanations, confidence cues, and interpretability signals that make model behavior easier to inspect.',
  sections: [
    { eyebrow: 'Focus', title: 'Explanation design', body: 'Define the forms of rationale, traceability, and confidence communication that should accompany outputs.' },
    { eyebrow: 'Inputs', title: 'Inspection goals', body: 'Add the audience, stakes, explanation depth, and the failure modes that interpretability features should help reveal.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Model explanation, trust-building, and decision transparency workflows.' },
    { label: 'Output shape', value: 'Rationales, confidence indicators, and interpretability summaries.' },
  ],
});
