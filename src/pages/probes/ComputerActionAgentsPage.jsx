import LlmAgentVideoProbeLayout from '../../components/probe/LlmAgentVideoProbeLayout';
import { getLlmBasedAgentProbeData } from '../../data/llmBasedAgentProbes';

export default function ComputerActionAgentsPage(props) {
  const probeData = getLlmBasedAgentProbeData('computer-action-agents');

  return <LlmAgentVideoProbeLayout {...props} probeData={probeData} />;
}
