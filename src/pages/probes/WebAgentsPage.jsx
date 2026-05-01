import WebAgentDeckProbeLayout from '../../components/probe/WebAgentDeckProbeLayout';
import { getLlmBasedAgentProbeData } from '../../data/llmBasedAgentProbes';

export default function WebAgentsPage(props) {
  const probeData = getLlmBasedAgentProbeData('web-agents');

  return <WebAgentDeckProbeLayout {...props} probeData={probeData} />;
}
