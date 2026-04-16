import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to define and evaluate teacher-like instructional behaviors, explanations, and classroom-facing support patterns.',
  sections: [
    { eyebrow: 'Focus', title: 'Instructional behavior', body: 'Shape how the virtual teacher explains, scaffolds, checks for understanding, and adapts to learner needs.' },
    { eyebrow: 'Inputs', title: 'Teaching context', body: 'Add subject matter, grade level, instructional goals, and the boundaries for supported teaching moves.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Tutoring flows, modeled instruction, and instructional design experiments.' },
    { label: 'Output shape', value: 'Lesson turns, explanations, prompts, and learner-facing guidance.' },
  ],
});
