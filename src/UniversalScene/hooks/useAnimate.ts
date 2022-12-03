import {MutableRefObject, useCallback} from 'react';
import * as THREE from 'three';

type UseAnimate = {
  animationID: MutableRefObject<number>,
  animationRunner?: () => void;
  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer: THREE.Renderer;
}
const useAnimate = (props: UseAnimate) => {
  const {animationID, animationRunner, scene, camera, renderer} = props;
  const animate = useCallback(() => {
    animationID.current = requestAnimationFrame(animate);
    if (animationRunner) {
      animationRunner();
    }
    renderer.render(scene, camera);
  }, [scene, camera, animationRunner, renderer, animationID]);
  return animate;
}

export default useAnimate;
