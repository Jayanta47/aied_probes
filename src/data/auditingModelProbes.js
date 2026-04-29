import accessibilityCheck from './auditing_models/accessibility-check.json';
import codebookGeneration from './auditing_models/codebook-generation.json';
import gradingConsistencyAudit from './auditing_models/grading-consistency-audit.json';

const auditingModelProbes = {
  'accessibility-check': accessibilityCheck,
  'codebook-generation': codebookGeneration,
  'grading-consistency-audit': gradingConsistencyAudit,
};

export function getAuditingModelProbeData(probeId) {
  return auditingModelProbes[probeId] ?? null;
}
