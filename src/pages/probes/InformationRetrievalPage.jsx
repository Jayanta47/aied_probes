import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to retrieve the right evidence, examples, and context from larger knowledge sources when precision matters.',
  sections: [
    { eyebrow: 'Focus', title: 'Relevance and recall', body: 'Test how well the retrieval layer finds high-value material under different query styles and corpus conditions.' },
    { eyebrow: 'Inputs', title: 'Knowledge source', body: 'Add corpus details, retrieval rules, ranking expectations, and the target use case for the results.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Search, retrieval-augmented generation, and source grounding workflows.' },
    { label: 'Output shape', value: 'Ranked passages, source sets, and retrieval-backed answers.' },
  ],
});
