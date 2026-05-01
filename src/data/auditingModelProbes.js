import accessibilityCheck from './auditing_models/accessibility-check.json';
import codebookGeneration from './auditing_models/codebook-generation.json';
import gradingConsistencyCheck from './auditing_models/grading-consistency-check.json';

const auditingModelProbes = {
  'accessibility-check': accessibilityCheck,
  'codebook-generation': codebookGeneration,
  'grading-consistency-check': gradingConsistencyCheck,
  'grading-consistency-audit': gradingConsistencyCheck,
};

export function getAuditingModelProbeData(probeId) {
  return auditingModelProbes[probeId] ?? null;
}
