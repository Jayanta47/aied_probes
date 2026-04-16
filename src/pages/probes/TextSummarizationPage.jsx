import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to condense longer textual materials into shorter, task-relevant summaries while keeping the important signal intact.',
  sections: [
    { eyebrow: 'Focus', title: 'Compression quality', body: 'Test fidelity, concision, structure, and whether the summary preserves what the user actually needs.' },
    { eyebrow: 'Inputs', title: 'Source and audience', body: 'Add the source material, desired length, required emphasis, and who the summary is meant for.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Notes, transcripts, reports, and instructional material summarization.' },
    { label: 'Output shape', value: 'Abstracts, bullet summaries, digest formats, or executive recaps.' },
  ],
});
