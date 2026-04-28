import FacialRecognitionProbeLayout from '../../components/probe/FacialRecognitionProbeLayout';
import { getFacialRecognitionProbeData } from '../../data/facialRecognitionProbes';

export default function AttendanceEngagementPage(props) {
  const probeData = getFacialRecognitionProbeData('attendance-engagement');

  return <FacialRecognitionProbeLayout {...props} probeData={probeData} />;
}
