import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

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

export const fitObjectToCamera = (object3D: THREE.Object3D, camera: THREE.Camera, controls: OrbitControls) => {
  const boundingBox = new THREE.Box3().setFromObject(object3D);
  const targetVector = new THREE.Vector3();
  const fov = camera instanceof THREE.PerspectiveCamera ? camera.fov : 90;
  const halfAngle = THREE.MathUtils.degToRad(fov) / 2;
  const size = boundingBox.getSize(targetVector);
  const objectRadius = size.length() / 2;
  const distance = objectRadius / Math.tan(halfAngle);
  camera.position.copy(boundingBox.getCenter(targetVector)).add(new THREE.Vector3(0, 0, distance));
  const center = boundingBox.getCenter(targetVector);
  if (camera instanceof THREE.PerspectiveCamera) {
    camera.near = (1 + size.length()) / 100;
  }
  camera.lookAt(center);
  controls.target.copy(center);
  controls.update();
};
