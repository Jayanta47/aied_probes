import imageGen from './multimodal/image_gen.png';
import liveSpeechTranscription from './multimodal/live-speech-transcription.json';
import textToVisualization from './multimodal/text-to-visualization.json';
import visualIngestion from './multimodal/visual-ingestion.json';

const multimodalProbes = {
  'text-to-visualization': {
    ...textToVisualization,
    exampleInputs: textToVisualization.exampleInputs.map((example) => ({
      ...example,
      outputImageSrc: imageGen,
      outputAlt: 'Generated classroom diagram about photosynthesis',
    })),
  },
  'live-speech-transcription': liveSpeechTranscription,
  'visual-ingestion': visualIngestion,
};

export function getMultimodalProbeData(probeId) {
  return multimodalProbes[probeId] ?? null;
}
