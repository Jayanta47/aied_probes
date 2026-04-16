import { motion } from 'framer-motion';
import ProbeScaffold from '../components/probe/ProbeScaffold';
import { probePageRegistry } from './probes';

const MotionSection = motion.section;

export default function ProbePageRouter({ topLevelProbe, selectedProbe, onBack, transition, routeKey }) {
  const ProbePage = probePageRegistry[selectedProbe.id];

  return (
    <MotionSection
      key={routeKey}
      initial={{ x: '12%', opacity: 0.86 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-8%', opacity: 0.82 }}
      transition={transition}
      className="flex min-h-[calc(100vh-6rem)] flex-col"
    >
      {ProbePage ? (
        <ProbePage topLevelProbe={topLevelProbe} selectedProbe={selectedProbe} onBack={onBack} />
      ) : (
        <ProbeScaffold
          topLevelProbe={topLevelProbe}
          selectedProbe={selectedProbe}
          onBack={onBack}
          summary={selectedProbe.blurb ?? topLevelProbe.description}
          sections={[
            { eyebrow: 'Status', title: 'Probe page not scaffolded yet', body: 'Create a dedicated module in src/pages/probes and register it in src/pages/probes/index.js.' },
            { eyebrow: 'Fallback', title: 'Generic scaffold', body: 'This keeps the route working while new probe pages are still being added to the structured registry.' },
          ]}
          highlights={[
            { label: 'Registry key', value: selectedProbe.id },
            { label: 'Route family', value: topLevelProbe.id },
          ]}
        />
      )}
    </MotionSection>
  );
}
