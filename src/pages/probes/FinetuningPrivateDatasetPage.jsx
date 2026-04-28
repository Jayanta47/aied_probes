import FinetuningProbeLayout from '../../components/probe/FinetuningProbeLayout';
import { getFinetuningProbeData } from '../../data/finetuningProbes';

export default function FinetuningPrivateDatasetPage(props) {
  const probeData = getFinetuningProbeData('finetuning-private-dataset');

  return <FinetuningProbeLayout {...props} probeData={probeData} />;
}
