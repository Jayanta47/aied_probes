import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to explore how textual prompts can become charts, diagrams, visual explanations, or other generated visual artifacts.',
  sections: [
    { eyebrow: 'Focus', title: 'Prompt-to-visual flow', body: 'Test how narrative input gets translated into structured visuals, layout choices, and explanatory framing.' },
    { eyebrow: 'Inputs', title: 'Source material', body: 'Add prompts, data snippets, style constraints, and evaluation criteria for the resulting visualization.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Visual explainers, charts, educational diagrams, and concept communication.' },
    { label: 'Output shape', value: 'Rendered visuals, visual specs, or intermediary content structures.' },
  ],
});
