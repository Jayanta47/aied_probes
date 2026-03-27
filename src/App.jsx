import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tools = [
  { id: 'synthesizer', title: 'The Synthesizer', color: 'bg-blue-500/20' },
  { id: 'matchmaker', title: 'The Matchmaker', color: 'bg-purple-500/20' },
  { id: 'evaluator', title: 'The Evaluator', color: 'bg-green-500/20' },
  { id: 'guide', title: 'Socratic Guide', color: 'bg-orange-500/20' },
];

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="min-h-screen p-10 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 drop-shadow-md">AI Co-Design Probes</h1>

      {/* The Gallery View */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
        {tools.map((tool) => (
          <motion.div
            key={tool.id}
            layoutId={tool.id}
            onClick={() => setSelectedId(tool.id)}
            className={`cursor-pointer rounded-2xl p-6 h-40 flex items-center justify-center 
                       backdrop-blur-md border border-white/30 shadow-xl hover:bg-white/10 transition-colors
                       ${tool.color}`}
          >
            <motion.h2 className="text-2xl font-semibold">{tool.title}</motion.h2>
          </motion.div>
        ))}
      </div>

      {/* The Expanded "Slide Right" View */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-10 bg-black/20 backdrop-blur-sm">
            <motion.div
              layoutId={selectedId}
              className="w-full max-w-4xl h-[80vh] bg-white/20 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 relative flex flex-col"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 text-white hover:text-gray-200 font-bold"
              >
                Close ✕
              </button>
              
              {/* Content of the expanded tool will go here */}
              <motion.h2 className="text-4xl font-bold mb-6">
                {tools.find(t => t.id === selectedId).title}
              </motion.h2>
              <div className="flex-1 border border-white/20 rounded-xl p-4 bg-black/10">
                <p className="text-lg opacity-80">This is where the wizard of oz interaction area will live...</p>
              </div>
              
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}