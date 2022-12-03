import {useEffect, useState} from 'react';
import * as THREE from 'three';
import {removeObjectByName} from '../utils';
import {isItNewObject} from './utils';
const FINAL_OBJECT_NAME = 'final-object-on-scene';
const useObject3D = (scene: THREE.Scene, object3D?: Promise<THREE.Object3D> | THREE.Object3D) => {
  const [isObjectAdded, setIsObjectAdded] = useState(false);
  useEffect(function loadObject3D() {
    if (object3D) {
      setIsObjectAdded(false);
      Promise.resolve(object3D)
      .then((data) => {
        data.name = FINAL_OBJECT_NAME;
        if (isItNewObject(data, scene)) {
          removeObjectByName(scene, FINAL_OBJECT_NAME);
          scene.add(data);
        }
        setIsObjectAdded(true);
      })
      .catch((error: ErrorEvent) => {
        console.error(error.message);
        setIsObjectAdded(false);
      })
    }
  }, [scene, object3D])
  return {isObjectAdded};
}

export default useObject3D;
