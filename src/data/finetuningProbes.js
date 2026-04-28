import finetuningPrivateDataset from './finetuning/finetuning-private-dataset.json';

const finetuningProbes = {
  'finetuning-private-dataset': finetuningPrivateDataset,
};

export function getFinetuningProbeData(probeId) {
  return finetuningProbes[probeId] ?? null;
}
