import {EnvironmentOptions, ViewerOptions} from './types';

const DEFAULT_ENVIRONMENT: EnvironmentOptions = {
  clientHeight: 480,
  clientWidth: 640,
  lightOptions: {
    lightIntensity: 1,
    skyColor: 0xF7FBFB,
    groundColor: 0x9EA4A7,
  },
  sceneOptions: {
    fog: {
      color: 0xFFFFFF,
      near: 10,
      far: 500
    },
    sceneColor: 0xFAFDFE,
    envMapUrl: 'data/venice_sunset_1k.hdr',
  }
};

export const DEFAULT_VIEWER_OPTIONS: ViewerOptions = {
  addDefaultHelpers: true,
  addDefaultLight: true,
  environment: DEFAULT_ENVIRONMENT,
}

// Derived options
export const DEFAULT_SCENE_OPTIONS = {
  fog: DEFAULT_ENVIRONMENT.sceneOptions.fog,
  background: DEFAULT_ENVIRONMENT.sceneOptions.sceneColor,
  envMapUrl: DEFAULT_ENVIRONMENT.sceneOptions.envMapUrl,
}

export const DEFAULT_LIGHT_OPTIONS = {
  addDefaultLight: DEFAULT_VIEWER_OPTIONS.addDefaultLight,
  groundColor: DEFAULT_ENVIRONMENT.lightOptions.groundColor,
  skyColor: DEFAULT_ENVIRONMENT.lightOptions.skyColor,
  intensity: DEFAULT_ENVIRONMENT.lightOptions.lightIntensity
}
