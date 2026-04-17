import ConversationalProbeLayout from '../../components/probe/ConversationalProbeLayout';
import { getConversationalProbeData } from '../../data/conversationalChatbotProbes';

export default function BrainstormingCopilotPage(props) {
  const probeData = getConversationalProbeData('brainstorming-copilot');

  return <ConversationalProbeLayout {...props} probeData={probeData} />;
}
