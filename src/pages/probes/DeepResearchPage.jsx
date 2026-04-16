import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page for multi-step research workflows that gather sources, synthesize evidence, and produce a reasoned output.',
  sections: [
    { eyebrow: 'Focus', title: 'Long-form investigation', body: 'Capture the search strategy, evidence standards, synthesis logic, and reporting format you want the probe to use.' },
    { eyebrow: 'Inputs', title: 'Research brief', body: 'Provide guiding questions, source boundaries, confidence expectations, and output requirements.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Literature scans, evidence gathering, and high-context synthesis tasks.' },
    { label: 'Output shape', value: 'Research briefs, source-backed findings, and structured summaries.' },
  ],
});
