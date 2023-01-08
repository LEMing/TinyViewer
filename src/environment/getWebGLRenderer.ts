import * as THREE from 'three';

export const getWebGLRenderer = () => {
  return new THREE.WebGLRenderer({preserveDrawingBuffer: true, antialias: true});
}
