import { createProbePage } from './createProbePage';

export default createProbePage({
  summary: 'Use this probe page to simulate classroom dynamics, learner responses, and intervention choices before deployment in live settings.',
  sections: [
    { eyebrow: 'Focus', title: 'Scenario rehearsal', body: 'Model common classroom states, disruptions, misunderstandings, and facilitation decision points.' },
    { eyebrow: 'Inputs', title: 'Simulation variables', body: 'Define class profile, lesson context, behavioral constraints, and the intervention types being tested.' },
  ],
  highlights: [
    { label: 'Best for', value: 'Facilitation rehearsal, instructional testing, and what-if scenario design.' },
    { label: 'Output shape', value: 'Synthetic dialogue, scenario branches, and intervention outcomes.' },
  ],
});
