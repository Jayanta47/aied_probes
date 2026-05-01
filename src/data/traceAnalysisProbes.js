import conversationMonitoring from './trace-analysis/conversation-monitoring.json';
import knowledgeTracing from './trace-analysis/knowledge-tracing.json';

const traceAnalysisProbes = {
  'conversation-monitoring': conversationMonitoring,
  'knowledge-tracing': knowledgeTracing,
};

export function getTraceAnalysisProbeData(probeId) {
  return traceAnalysisProbes[probeId] ?? null;
}
