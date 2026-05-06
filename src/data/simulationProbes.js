import classroomSimulator from './simulation/classroom-simulator.json';
import virtualTeacher from './simulation/virtual-teacher.json';

const simulationProbes = {
  'classroom-simulator': classroomSimulator,
  'virtual-teacher': virtualTeacher,
};

export function getSimulationProbeData(probeId) {
  return simulationProbes[probeId] ?? null;
}
