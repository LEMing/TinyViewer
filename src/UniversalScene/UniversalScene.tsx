import React, {useEffect} from 'react';
import {useContext} from 'react';
import classNames from 'classnames';

import Preloader from '../components/Preloader';
import {
  useDispatchers,
  useHelpers,
  useLight,
  useObject3D,
  useOnDidMount,
  useOnSceneReady,
  useThreeEnvironment
} from './hooks';
import ViewerContext from '../ViewerContext';

import './UniversalScene.scss';
import ErrorMessage from "../components/ErrorMessage";

const UniversalScene = () => {
  const {
    animationRunner,
    clientSize,
    dispatchers,
    object3D,
    onSceneReady,
    options,
    threeRoot,
    setIsLoading,
  } = useContext(ViewerContext);

  const {addDefaultHelpers} = options;
  const threeEnv = useThreeEnvironment(clientSize);
  useDispatchers({threeEnv, dispatchers});
  useLight(threeEnv.scene, options);
  useHelpers(threeEnv.scene, addDefaultHelpers);
  const {isObjectAdded} = useObject3D(threeEnv.scene, object3D);
  useOnSceneReady(onSceneReady);
  useOnDidMount({threeEnv, threeRoot, animationRunner});

  useEffect(function onObjectLoaded() {
    setIsLoading(!isObjectAdded);
  }, [isObjectAdded, setIsLoading]);

  const sceneClasses = classNames({
    'universal-scene': true,
    'fog': isObjectAdded,
  });

  if (!object3D) {
    return <ErrorMessage
        msg={'Initialisation error'}
        debugDetails={'Object3D is not provided.'}
    />
  }

  return (
    <div data-testid={`universal-scene is-ready-${isObjectAdded}`} className={sceneClasses}>
      {!isObjectAdded && <Preloader msg={'Preparing scene...'}/>}
    </div>)
};

export default UniversalScene;
