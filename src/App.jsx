import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import ProbePageRouter from './pages/ProbePageRouter';
import { getHomePath, getProbePath, navigate, readPathname, resolveRoute } from './lib/navigation';

const shellTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export default function App() {
  const [pathname, setPathname] = useState(readPathname);
  const [selectedParentId, setSelectedParentId] = useState(null);

  useEffect(() => {
    const syncPath = () => setPathname(readPathname());
    window.addEventListener('popstate', syncPath);
    return () => window.removeEventListener('popstate', syncPath);
  }, []);

  const route = resolveRoute(pathname);

  return (
    <div className="min-h-screen overflow-hidden px-4 py-4 text-slate-900 md:px-7 md:py-7 xl:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[1500px] flex-col rounded-[36px] border border-slate-200/80 bg-white/72 p-5 shadow-[0_35px_120px_rgba(148,163,184,0.2)] backdrop-blur-xl md:p-7">
        <AnimatePresence mode="wait" initial={false}>
          {route.page === 'probe' ? (
            <ProbePageRouter
              routeKey={pathname}
              topLevelProbe={route.topLevelProbe}
              selectedProbe={route.selectedProbe}
              transition={shellTransition}
              onBack={() => {
                setSelectedParentId(route.topLevelProbe.children?.length ? route.topLevelProbe.id : null);
                navigate(getHomePath());
              }}
            />
          ) : (
            <HomePage
              key="home"
              selectedParentId={selectedParentId}
              onClosePanel={() => setSelectedParentId(null)}
              onOpenParent={setSelectedParentId}
              onOpenProbe={(parentProbe, childProbe = null) => {
                if (childProbe) {
                  navigate(getProbePath(parentProbe.id, childProbe.id));
                  return;
                }

                navigate(getProbePath(parentProbe.id));
              }}
              transition={shellTransition}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
