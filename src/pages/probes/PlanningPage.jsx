import ConversationalProbeLayout from '../../components/probe/ConversationalProbeLayout';
import { getConversationalProbeData } from '../../data/conversationalChatbotProbes';

export default function PlanningPage(props) {
  const probeData = getConversationalProbeData('planning');

  return <ConversationalProbeLayout {...props} probeData={probeData} />;
}
