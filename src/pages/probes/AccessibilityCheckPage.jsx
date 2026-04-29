import { createProbePage } from './createProbePage';
import { getAuditingModelProbeData } from '../../data/auditingModelProbes';

export default createProbePage(getAuditingModelProbeData('accessibility-check'));
