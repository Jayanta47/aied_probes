import computerActionAgents from './llm-based-agents/computer-action-agents.json';
import webAgents from './llm-based-agents/web-agents.json';

const llmBasedAgentProbes = {
  'computer-action-agents': computerActionAgents,
  'web-agents': webAgents,
};

export function getLlmBasedAgentProbeData(probeId) {
  return llmBasedAgentProbes[probeId] ?? null;
}
