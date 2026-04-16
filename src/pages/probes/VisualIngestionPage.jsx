import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to analyze how the system reads images, screenshots, and other visual inputs as meaningful data.',
  sections: [
    { eyebrow: 'Focus', title: 'Visual understanding', body: 'Test recognition, extraction, interpretation, and error patterns when the probe receives image-heavy inputs.' },
    { eyebrow: 'Inputs', title: 'Artifact types', body: 'Add screenshots, classroom materials, diagrams, or media samples and note what signal should be extracted.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Screenshot review, document image parsing, and multimodal evidence extraction.' },
    { label: 'Output shape', value: 'Structured observations, labels, summaries, or visual findings.' },
  ],
});
