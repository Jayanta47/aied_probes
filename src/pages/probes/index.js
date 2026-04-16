import WebAgentsPage from './WebAgentsPage';
import ComputerActionAgentsPage from './ComputerActionAgentsPage';
import TextToVisualizationPage from './TextToVisualizationPage';
import LiveSpeechTranscriptionPage from './LiveSpeechTranscriptionPage';
import VisualIngestionPage from './VisualIngestionPage';
import ClassroomSimulatorPage from './ClassroomSimulatorPage';
import VirtualTeacherPage from './VirtualTeacherPage';
import SocraticPartnerPage from './SocraticPartnerPage';
import BrainstormingCopilotPage from './BrainstormingCopilotPage';
import DeepResearchPage from './DeepResearchPage';
import PlanningPage from './PlanningPage';
import GradingConsistencyAuditPage from './GradingConsistencyAuditPage';
import ContentBiasAccessibilityAuditPage from './ContentBiasAccessibilityAuditPage';
import GradingAnalysisFeedbackPage from './GradingAnalysisFeedbackPage';
import CodebookGenerationPage from './CodebookGenerationPage';
import TextSummarizationPage from './TextSummarizationPage';
import TextClassificationPage from './TextClassificationPage';
import KnowledgeTracingPage from './KnowledgeTracingPage';
import ConversationMonitoringPage from './ConversationMonitoringPage';
import InformationRetrievalPage from './InformationRetrievalPage';
import AttendanceEngagementPage from './AttendanceEngagementPage';
import FinetuningPrivateDatasetPage from './FinetuningPrivateDatasetPage';
import TransparencyInterpretabilityToolPage from './TransparencyInterpretabilityToolPage';

export const probePageRegistry = {
  'web-agents': WebAgentsPage,
  'computer-action-agents': ComputerActionAgentsPage,
  'text-to-visualization': TextToVisualizationPage,
  'live-speech-transcription': LiveSpeechTranscriptionPage,
  'visual-ingestion': VisualIngestionPage,
  'classroom-simulator': ClassroomSimulatorPage,
  'virtual-teacher': VirtualTeacherPage,
  'socratic-partner': SocraticPartnerPage,
  'brainstorming-copilot': BrainstormingCopilotPage,
  'deep-research': DeepResearchPage,
  planning: PlanningPage,
  'grading-consistency-audit': GradingConsistencyAuditPage,
  'content-bias-accessibility-audit': ContentBiasAccessibilityAuditPage,
  'grading-analysis-feedback': GradingAnalysisFeedbackPage,
  'codebook-generation': CodebookGenerationPage,
  'text-summarization': TextSummarizationPage,
  'text-classification': TextClassificationPage,
  'knowledge-tracing': KnowledgeTracingPage,
  'conversation-monitoring': ConversationMonitoringPage,
  'information-retrieval': InformationRetrievalPage,
  'attendance-engagement': AttendanceEngagementPage,
  'finetuning-private-dataset': FinetuningPrivateDatasetPage,
  'transparency-interpretability-tool': TransparencyInterpretabilityToolPage,
};
