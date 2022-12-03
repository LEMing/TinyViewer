import * as THREE from 'three';

export const removeObjectByUUID = (scene: THREE.Scene, uuid: string | null) => {
  if (uuid !== null) {
    const previousObject = scene.getObjectByProperty('uuid', uuid);
    if (previousObject) scene.remove(previousObject);
  }
}

export const removeObjectByName = (scene: THREE.Scene, name?: string) => {
  if (name) {
    const previousObject = scene.getObjectByName(name);
    if (previousObject) scene.remove(previousObject);
  }
}
