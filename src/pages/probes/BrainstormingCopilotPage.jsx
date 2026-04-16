import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page for idea generation support, divergence, clustering, and rapid expansion of early concepts.',
  sections: [
    { eyebrow: 'Focus', title: 'Idea expansion', body: 'Explore how the copilot widens the space of possibilities while staying grounded in the problem frame.' },
    { eyebrow: 'Inputs', title: 'Prompt seeds', body: 'Add goals, constraints, themes, and the desired level of novelty or practicality.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Concept ideation, early-stage exploration, and collaborative brainstorming.' },
    { label: 'Output shape', value: 'Idea lists, grouped themes, and follow-up brainstorming prompts.' },
  ],
});
