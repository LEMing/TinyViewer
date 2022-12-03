import {useEffect} from 'react';

const useOnSceneReady = (onSceneReady?: () => void) => {
  useEffect(function runOnSceneReady() {
    if (onSceneReady) {
      onSceneReady();
    }
  }, [onSceneReady])
}

export default useOnSceneReady;
