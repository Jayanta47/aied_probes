import knowledgeTracing from './trace-analysis/knowledge-tracing.json';

const traceAnalysisProbes = {
  'knowledge-tracing': knowledgeTracing,
};

export function getTraceAnalysisProbeData(probeId) {
  return traceAnalysisProbes[probeId] ?? null;
}
