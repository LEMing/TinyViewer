import {Color} from 'three';
import mockRenderer from '../../__mocks__/mockRenderer';
import {DEFAULT_LIGHT_OPTIONS, DEFAULT_SCENE_OPTIONS} from '../../constants';
import {createCamera, createControls, createLight, createScene} from '../environment';

describe('Should test environment functions', () => {
  test('Create a Camera object', () => {
    const camera = createCamera();
    expect(camera.type).toEqual('PerspectiveCamera');
  });

  test('Create a Scene object', () => {
    const scene = createScene(DEFAULT_SCENE_OPTIONS);
    expect(scene.type).toEqual('Scene');
  });

  test('Create a Scene with fog', () => {
    const fogColor = 0xFF000;
    const scene = createScene({...DEFAULT_SCENE_OPTIONS, fog: {color: fogColor, near: 10, far: 50}});
    const sceneFog = scene.fog?.color.getHex();
    expect(sceneFog).toEqual(fogColor);
  });

  test('Create a Scene with background color', () => {
    const backgroundColor = 0x00FF00;
    const scene = createScene({...DEFAULT_SCENE_OPTIONS, background: backgroundColor});
    const sceneBackground: Color = scene.background as Color;
    expect(sceneBackground.getHex()).toEqual(backgroundColor);
  });

  test('Create Light', () => {
    const light = createLight(DEFAULT_LIGHT_OPTIONS);
    expect(light.length).toEqual(2);
    const [atmosphereLight, directionalLight] = light;
    expect(atmosphereLight.type).toEqual('HemisphereLight');
    expect(directionalLight.type).toEqual('DirectionalLight');
  });

  test('Create Controls', () => {
    const camera = createCamera();
    // @ts-ignore // We use mockRenderer here, it's fine
    const controls = createControls({camera, renderer: mockRenderer});
    expect(controls).toBeDefined();
    expect(controls.mouseButtons).toBeDefined();
  })
});
