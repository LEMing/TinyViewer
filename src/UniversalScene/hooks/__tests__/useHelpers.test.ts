import { renderHook } from '@testing-library/react'
import {DEFAULT_SCENE_OPTIONS} from '../../../constants';
import {createScene} from '../../../environment';
import useHelpers from '../useHelpers';

jest.mock('three/examples/jsm/loaders/RGBELoader', () => ({
  RGBELoader: jest.fn().mockImplementation(() => {
    return {load: jest.fn()}
  })
}));

describe('Should test useHelpers hook', () => {
  test('Should add 2 helper objects to the scene', () => {
    const scene = createScene(DEFAULT_SCENE_OPTIONS);
    const addHelpers = true;
    const numberOfChildrenBefore = scene.children.length;
    renderHook(() => useHelpers(scene, addHelpers));
    const numberOfChildrenAfter = scene.children.length;
    expect(numberOfChildrenAfter).toEqual(numberOfChildrenBefore + 2);
  });

  test('Should keep the scene without any helpers', () => {
    const scene = createScene(DEFAULT_SCENE_OPTIONS);
    const addHelpers = false;
    const numberOfChildrenBefore = scene.children.length;
    renderHook(() => useHelpers(scene, addHelpers));
    const numberOfChildrenAfter = scene.children.length;
    expect(numberOfChildrenAfter).toEqual(numberOfChildrenBefore);
  })
})
