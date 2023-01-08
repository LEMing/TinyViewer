import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader';
import {getWebGLRenderer} from './getWebGLRenderer';
import {ControlsProps, SceneProps, LightProps} from './types';
import {isWebGLAvailable} from './utils';

export const createCamera = () => {
  const myCamera = new THREE.PerspectiveCamera(30, undefined, 1, 100000);
  myCamera.position.set(0, 2, 20);
  return myCamera;
};

export const createScene = (props: SceneProps) => {
  const {
    background,
    fog,
    envMapUrl,
  } = props;
  const myScene = new THREE.Scene();
  myScene.background = new THREE.Color(background);
  if (envMapUrl) {
    new RGBELoader().load( envMapUrl, (dataTexture) => {
      myScene.environment = dataTexture;
      myScene.environment.mapping = THREE.EquirectangularReflectionMapping;
    });
  }
  if (fog) {
    myScene.fog = new THREE.Fog(fog.color, fog.near, fog.far);
  }
  return myScene;
};

export const createRenderer = () => {
  if (isWebGLAvailable()) {
    const myRenderer = getWebGLRenderer();
    setDefaultRendererSettings(myRenderer);
    return myRenderer as THREE.WebGLRenderer;
  }
  throw new Error('WebGL context is not available here');
};

export const setDefaultRendererSettings = (renderer: THREE.WebGLRenderer) => {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.85;
}

export const createControls = (props: ControlsProps) => {
  const {camera, renderer} = props;
  const myControls = new OrbitControls(camera, renderer.domElement);
  myControls.autoRotateSpeed = 6;
  myControls.enableDamping = false;
  myControls.enablePan = false;
  myControls.enableZoom = true;
  myControls.maxDistance = 1000000;
  myControls.minDistance = 0.1;
  myControls.screenSpacePanning = false;
  myControls.target = new THREE.Vector3(0, 1.5, 0);
  myControls.mouseButtons = {
    LEFT: THREE.MOUSE.LEFT,
    MIDDLE: THREE.MOUSE.MIDDLE,
    RIGHT: THREE.MOUSE.RIGHT,
  };
  return myControls;
};

export const createLight = (props: LightProps): THREE.Object3D[] => {
  const {
    intensity,
    skyColor,
    groundColor,
  } = props;
  const atmosphereLight = new THREE.HemisphereLight(skyColor, groundColor, intensity);
  atmosphereLight.name = 'atmosphereLight';
  const directionalLight = new THREE.DirectionalLight(0xffffff, intensity);
  directionalLight.position.y = 50;
  directionalLight.position.x = 100;
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024 * 4;
  directionalLight.shadow.mapSize.height = 1024 * 4;
  directionalLight.shadow.radius = 1;
  directionalLight.shadow.bias = 0.00001;
  directionalLight.name = 'directionalLight';

  return [atmosphereLight, directionalLight];
};
