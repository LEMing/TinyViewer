import {createBoxOrSphere} from '../../utils';
import {DEFAULT_SCENE_OPTIONS} from '../../constants';
import {createScene} from '../../environment';
import {removeObjectByUUID} from '../utils';

describe('Should test Universal Scene utils', () => {
  test('Should remove object3d by its uuid from scene', () => {
    const scene = createScene(DEFAULT_SCENE_OPTIONS);
    const cube = createBoxOrSphere({name: 'My cube'});
    scene.add(cube);

    const cubeByName = scene.getObjectByName('My cube');
    expect(cubeByName).toBeDefined();
    expect(scene.children.length).toEqual(1);
    removeObjectByUUID(scene, cube.uuid);
    expect(scene.children.length).toEqual(0);
  })
})
