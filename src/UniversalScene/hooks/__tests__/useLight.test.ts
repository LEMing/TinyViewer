import { renderHook } from '@testing-library/react'
import {DEFAULT_SCENE_OPTIONS, DEFAULT_VIEWER_OPTIONS} from '../../../constants';
import {createScene} from '../../../environment';
import useLight from '../useLight';

jest.mock('three/examples/jsm/loaders/RGBELoader', () => ({
  RGBELoader: jest.fn().mockImplementation(() => {
    return {load: jest.fn()}
  })
}));

describe('Should test useLight hook', () => {
  test('Should add 2 light objects to the scene', () => {
    const scene = createScene(DEFAULT_SCENE_OPTIONS);
    const addLight = true;
    const numberOfChildrenBefore = scene.children.length;
    const options = {...DEFAULT_VIEWER_OPTIONS, addDefaultLight: addLight};
    renderHook(() => useLight(scene, options));
    expect(scene.children.length).toEqual(numberOfChildrenBefore + 2);
  });

  test('Should keep the scene without changes', () => {
    const scene = createScene(DEFAULT_SCENE_OPTIONS);
    const addLight = false;
    const numberOfChildrenBefore = scene.children.length;
    const options = {...DEFAULT_VIEWER_OPTIONS, addDefaultLight: addLight};
    renderHook(() => useLight(scene, options));
    expect(scene.children.length).toEqual(numberOfChildrenBefore);
  });

});
