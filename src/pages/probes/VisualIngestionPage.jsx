import MultimodalProbeLayout from '../../components/probe/MultimodalProbeLayout';
import { getMultimodalProbeData } from '../../data/multimodalProbes';

export default function VisualIngestionPage(props) {
  const probeData = getMultimodalProbeData('visual-ingestion');

  return <MultimodalProbeLayout {...props} probeData={probeData} />;
}
