import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to review generated content for bias, exclusion, representational harm, and accessibility issues.',
  sections: [
    { eyebrow: 'Focus', title: 'Inclusive quality review', body: 'Check for harmful framing, missing accessibility support, and uneven treatment across learners or groups.' },
    { eyebrow: 'Inputs', title: 'Audit criteria', body: 'Provide source content, target audience, accessibility expectations, and the kinds of bias signals to monitor.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Content QA, accessibility review, and fairness-oriented inspection.' },
    { label: 'Output shape', value: 'Annotated findings, flagged issues, and revision recommendations.' },
  ],
});
