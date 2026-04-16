import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to plan and inspect finetuning workflows that adapt a model using private or institution-specific datasets.',
  sections: [
    { eyebrow: 'Focus', title: 'Customization strategy', body: 'Clarify what behavior should improve, how the dataset is governed, and what evaluation will prove the adaptation worked.' },
    { eyebrow: 'Inputs', title: 'Training constraints', body: 'Provide data boundaries, privacy expectations, target behavior shifts, and the evaluation harness for the finetuned model.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Domain adaptation, private data workflows, and institution-specific model tuning.' },
    { label: 'Output shape', value: 'Training plans, evaluation summaries, and customization checkpoints.' },
  ],
});
