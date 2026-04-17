import brainstormingCopilot from './conversational-chatbot/brainstorming-copilot.json';
import planning from './conversational-chatbot/planning.json';

export const conversationalChatbotProbes = {
  'brainstorming-copilot': brainstormingCopilot,
  planning,
};

export function getConversationalProbeData(probeId) {
  return conversationalChatbotProbes[probeId] ?? null;
}
