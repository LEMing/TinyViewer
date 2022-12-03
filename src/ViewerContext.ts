import {createContext, Dispatch} from 'react';
import * as THREE from 'three';
import {ClientAreaProps, ViewerDispatchers, ViewerOptions} from './types';

export interface IViewerContext {
  animationRunner?: () => void;
  dispatchers?: ViewerDispatchers;
  object3D?: Promise<THREE.Object3D>;
  onSceneReady?: () => void;
  options: ViewerOptions;
  threeRoot: HTMLDivElement | null;
  clientSize: ClientAreaProps;
  setIsLoading: Dispatch<boolean>;
}

const ViewerContext = createContext<IViewerContext>({} as IViewerContext);

export default ViewerContext;
