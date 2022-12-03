import {Dispatch} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

export interface ViewerDispatchers {
  setCamera?: Dispatch<THREE.Camera>;
  setControls?: Dispatch<OrbitControls>;
  setRenderer?: Dispatch<THREE.Renderer>;
  setScene?: Dispatch<THREE.Scene>;
}

export interface ViewerProps {
  animationRunner?: () => void;
  className?: string,
  dispatchers?: ViewerDispatchers,
  object3D?: Promise<THREE.Object3D>,
  onSceneReady?: () => void,
  options?: ViewerOptions,
}

export interface EnvironmentOptions {
  clientHeight: number,
  clientWidth: number,
  lightOptions: {
    lightIntensity: number,
    skyColor: number,
    groundColor: number,
  }
  sceneOptions: {
    envMapUrl: string,
    sceneColor: number,
    fog: SceneFog
  }
}

export type SceneFog = {
  color: number,
  near: number,
  far: number
}

export interface ViewerOptions {
  addDefaultHelpers: boolean,
  addDefaultLight: boolean,
  environment: EnvironmentOptions,
}

export interface ClientAreaProps {
  clientHeight?: number,
  clientWidth?: number,
}

export interface ThreeEnvironment {
  scene: THREE.Scene,
  controls: OrbitControls,
  camera: THREE.Camera,
  renderer: THREE.Renderer,
}
