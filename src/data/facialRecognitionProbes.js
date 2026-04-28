import attendanceEngagement from './facial-recognition/attendance-engagement.json';

const facialRecognitionProbes = {
  'attendance-engagement': attendanceEngagement,
};

export function getFacialRecognitionProbeData(probeId) {
  return facialRecognitionProbes[probeId] ?? null;
}
