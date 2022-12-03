import {Object3D} from 'three';
import {GLTF, GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

export const loadGLB = (resourceURL: string, onProgress?: (xhr: ProgressEvent) => void): Promise<Object3D> => {
  const loader = new GLTFLoader();

  return new Promise((resolve, reject) => {
    const onLoad = (gltf: GLTF) => {
      resolve(gltf.scene);
    }

    const onError = (error: ErrorEvent) => {
      reject(error.message);
    }

    try {
      loader.load(resourceURL, onLoad, onProgress, onError);
    } catch (error) {
      onError(error as ErrorEvent)
    }
  });
}
