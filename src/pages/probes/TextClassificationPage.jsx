import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to assign categories, labels, or tags to text so large collections become easier to sort and inspect.',
  sections: [
    { eyebrow: 'Focus', title: 'Labeling behavior', body: 'Measure classification accuracy, thresholding, ambiguity handling, and fit against the intended taxonomy.' },
    { eyebrow: 'Inputs', title: 'Schema design', body: 'Add labels, examples, edge cases, and the confidence or escalation rules the probe should follow.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Sorting responses, coding content, and tagging incoming text at scale.' },
    { label: 'Output shape', value: 'Predicted labels, confidence bands, and structured text metadata.' },
  ],
});
