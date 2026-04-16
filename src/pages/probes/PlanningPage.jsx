import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to turn goals into plans, decision paths, and executable next steps.',
  sections: [
    { eyebrow: 'Focus', title: 'Sequenced action', body: 'Define how the planning probe should decompose work, surface dependencies, and present alternatives.' },
    { eyebrow: 'Inputs', title: 'Target outcome', body: 'Add objectives, constraints, stakeholders, deadlines, and the level of detail expected in the resulting plan.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Project planning, learning plans, and structured execution roadmaps.' },
    { label: 'Output shape', value: 'Step sequences, decision branches, and actionable plans.' },
  ],
});
