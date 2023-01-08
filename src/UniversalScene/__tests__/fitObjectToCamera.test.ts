import {createBoxOrSphere} from '../../utils';
import {fitObjectToCamera} from '../utils';
import * as THREE from 'three';

test('fits object to camera', () => {
  // Create a mock object
  const object3D = createBoxOrSphere({name: 'my-test-object'});
  object3D.position.set(1, 2, 3);

  // Create a mock camera
  const camera = {
    fov: 45,
    position: new THREE.Vector3(),
    lookAt: jest.fn()
  };

  const controls = {
    target: new THREE.Vector3(),
    update: jest.fn()
  }

  // Fit the object to the camera
  // @ts-ignore
  fitObjectToCamera(object3D, camera, controls);

  // Check that the camera's position and target were set correctly
  expect(camera.position).toEqual(new THREE.Vector3(1, 2, 3.866025403784439));
  expect(controls.target).toEqual(new THREE.Vector3(1, 2, 3));
  expect(camera.lookAt).toHaveBeenCalledWith(new THREE.Vector3(1, 2, 3));
});
