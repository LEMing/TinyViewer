import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {SceneFog} from '../types';

export interface UniversalHookProps {
  builder: () => EnvObject,
}

export interface SceneProps {
  background: number,
  fog: SceneFog,
  envMapUrl: string,
}

export interface ControlsProps {
  camera: THREE.Camera,
  renderer: THREE.Renderer,
}

export interface LightProps {
  intensity: number,
  skyColor: number,
  groundColor: number,
}

export type EnvObject = THREE.Camera | THREE.Scene | THREE.Renderer | OrbitControls;
