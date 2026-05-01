import classroomSimulator from './simulation/classroom-simulator.json';

const simulationProbes = {
  'classroom-simulator': classroomSimulator,
};

export function getSimulationProbeData(probeId) {
  return simulationProbes[probeId] ?? null;
}
