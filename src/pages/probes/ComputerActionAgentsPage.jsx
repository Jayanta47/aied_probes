import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page for copilots that take actions inside software interfaces, desktop tools, or constrained operating environments.',
  sections: [
    { eyebrow: 'Focus', title: 'Action-oriented assistance', body: 'Define the UI environment, handoff boundaries, and the exact operations the copilot should attempt or suggest.' },
    { eyebrow: 'Inputs', title: 'Safety and scope', body: 'Capture permissions, confirmation steps, and recovery patterns so the probe reflects realistic operational constraints.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Software guidance, interface operation, and step-by-step digital task completion.' },
    { label: 'Output shape', value: 'Executed actions, suggested workflows, or operator-ready next steps.' },
  ],
});
