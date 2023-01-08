import { removeObjectByName } from '../utils';
import * as THREE from 'three';

describe('removeObjectByName', () => {
  let scene;

  beforeEach(() => {
    scene = new THREE.Scene();
  });

  it('should remove an object from the scene by its name', () => {
    const object = new THREE.Object3D();
    object.name = 'testObject';
    scene.add(object);
    removeObjectByName(scene, 'testObject');
    expect(scene.children).not.toContain(object);
  });

  it('should not remove any objects if no name is provided', () => {
    const object = new THREE.Object3D();
    object.name = 'testObject';
    scene.add(object);
    removeObjectByName(scene);
    expect(scene.children).toContain(object);
  });

  it('should not throw an error if no object with the provided name exists in the scene', () => {
    expect(() => removeObjectByName(scene, 'nonExistentObject')).not.toThrow();
  });
});
