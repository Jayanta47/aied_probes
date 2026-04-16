import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to study real-time transcription quality, timing, and downstream utility in live spoken interactions.',
  sections: [
    { eyebrow: 'Focus', title: 'Live capture reliability', body: 'Track latency, speaker clarity, segmentation, and how well transcripts preserve meaning during fast conversation.' },
    { eyebrow: 'Inputs', title: 'Audio context', body: 'Add speaking scenarios, acoustic conditions, speaker roles, and post-processing expectations.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Meetings, classroom talk, interviews, and spoken note capture.' },
    { label: 'Output shape', value: 'Streaming transcripts, speaker turns, and transcript-derived summaries.' },
  ],
});
