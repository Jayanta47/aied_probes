import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page for web-based agent workflows that navigate online environments, gather evidence, and complete browser-native tasks.',
  sections: [
    { eyebrow: 'Focus', title: 'Browser-native workflows', body: 'Frame research, browsing, extraction, and action-taking patterns that matter when an agent operates across websites.' },
    { eyebrow: 'Inputs', title: 'Task framing', body: 'Add target sites, browsing constraints, success criteria, and the types of artifacts the agent should collect or produce.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Search, comparison, extraction, and multi-step web actions.' },
    { label: 'Output shape', value: 'Citations, captured evidence, structured findings, or completed web tasks.' },
  ],
});
