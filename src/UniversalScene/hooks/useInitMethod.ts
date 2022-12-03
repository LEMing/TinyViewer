import {useCallback} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

type UseInitMethod = {
  threeRoot: HTMLDivElement | null,
  renderer: THREE.Renderer,
  controls: OrbitControls;
}

const useInitMethod = ({threeRoot, renderer, controls}: UseInitMethod) => {
  return useCallback(() => {
    if (threeRoot) {
      threeRoot.appendChild(renderer.domElement);
      controls.update();
    }
  }, [controls, renderer.domElement, threeRoot]);
}

export default useInitMethod;
