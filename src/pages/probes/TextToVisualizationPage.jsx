import MultimodalProbeLayout from '../../components/probe/MultimodalProbeLayout';
import { getMultimodalProbeData } from '../../data/multimodalProbes';

export default function TextToVisualizationPage(props) {
  const probeData = getMultimodalProbeData('text-to-visualization');

  return <MultimodalProbeLayout {...props} probeData={probeData} />;
}
