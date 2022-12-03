import {renderHook, waitFor} from '@testing-library/react'
import {DEFAULT_SCENE_OPTIONS} from '../../../constants';
import {createScene} from '../../../environment';
import {createBoxOrSphere} from '../../../utils';
import useObject3D from '../useObject3D';
jest.mock('three/examples/jsm/loaders/RGBELoader', () => ({
  RGBELoader: jest.fn().mockImplementation(() => {
    return {load: jest.fn()}
  })
}));

describe('Should test useObject3D hook', () => {
  test('Should add a new object to the scene', () => {
    const scene = createScene(DEFAULT_SCENE_OPTIONS);
    const objectName = 'My Cube';
    const myCube = createBoxOrSphere({name: objectName});
    renderHook(() => useObject3D(scene, myCube));
    waitFor(() => {
      const object3D = scene.getObjectByName(objectName);
      expect(object3D).toBeDefined();
    });
  });

  test('Should keep the scene empty', () => {
    const scene = createScene(DEFAULT_SCENE_OPTIONS);
    renderHook(() => useObject3D(scene));
    const countOfChildren = scene.children.length;
    expect(countOfChildren).toEqual(0);
  });

});
