import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to generate or refine qualitative codebooks from interviews, observations, conversations, and other textual evidence.',
  sections: [
    { eyebrow: 'Focus', title: 'Theme formation', body: 'Support the emergence of categories, labels, definitions, and inclusion or exclusion rules for coding.' },
    { eyebrow: 'Inputs', title: 'Evidence corpus', body: 'Provide source excerpts, analytical lens, maturity of the coding scheme, and required codebook format.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Qualitative analysis, grounded coding, and research synthesis setup.' },
    { label: 'Output shape', value: 'Code definitions, category hierarchies, and draft codebooks.' },
  ],
});
