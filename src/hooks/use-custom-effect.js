import { useRef } from 'react';
const useCustomEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);
  //useRef because its value persists even though we re-render the component

  //first render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();
    return () => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup();
      }
    };
  }

  //dependency changes and no dependency array
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
    //effect;
    const cleanup = effect();
    if (cleanup && typeof cleanup === 'function' && deps) {
      cleanup();
    }
  }
  //cleanup

  prevDeps.current = deps || [];
};

export default useCustomEffect;
