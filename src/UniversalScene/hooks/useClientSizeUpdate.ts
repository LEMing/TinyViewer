import {useEffect} from 'react';
import {ClientAreaProps} from '../../types';
import * as THREE from 'three';

type UseClientSizeUpdate = {
  camera: THREE.PerspectiveCamera,
  renderer: THREE.Renderer,
  clientSize: ClientAreaProps
}

const useClientSizeUpdate = ({camera, renderer, clientSize}: UseClientSizeUpdate) => {
  useEffect(function onClientSizeUpdate() {
    const {clientWidth, clientHeight} = clientSize;
    if (clientWidth && clientHeight) {
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    }
  }, [clientSize, camera, renderer])
}

export default useClientSizeUpdate;
