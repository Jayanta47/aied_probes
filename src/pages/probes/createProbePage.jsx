import ProbeScaffold from '../../components/probe/ProbeScaffold';

export function createProbePage(definition) {
  return function ProbePage(props) {
    return (
      <ProbeScaffold
        {...props}
        summary={definition.summary}
        sections={definition.sections}
        highlights={definition.highlights}
      />
    );
  };
}
