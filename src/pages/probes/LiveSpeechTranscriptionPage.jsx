import MultimodalProbeLayout from '../../components/probe/MultimodalProbeLayout';
import { getMultimodalProbeData } from '../../data/multimodalProbes';

export default function LiveSpeechTranscriptionPage(props) {
  const probeData = getMultimodalProbeData('live-speech-transcription');

  return <MultimodalProbeLayout {...props} probeData={probeData} />;
}
