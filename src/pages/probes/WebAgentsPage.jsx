import LlmAgentVideoProbeLayout from '../../components/probe/LlmAgentVideoProbeLayout';
import { getLlmBasedAgentProbeData } from '../../data/llmBasedAgentProbes';

export default function WebAgentsPage(props) {
  const probeData = getLlmBasedAgentProbeData('web-agents');

  return <LlmAgentVideoProbeLayout {...props} probeData={probeData} />;
}
