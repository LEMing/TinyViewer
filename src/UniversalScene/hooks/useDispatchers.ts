import {useEffect} from 'react';
import {ThreeEnvironment, ViewerDispatchers} from '../../types';

type UseDispatchers = {
  threeEnv: ThreeEnvironment;
  dispatchers?: ViewerDispatchers;
}

const useDispatchers = (props: UseDispatchers) => {
  const {threeEnv, dispatchers} = props;
  const {scene, camera, renderer, controls} = threeEnv;

  useEffect(function dispatchScene() {
    if (scene) {
      dispatchers?.setScene?.(scene);
    }
  }, [scene, dispatchers]);

  useEffect(function dispatchRenderer() {
    if (renderer) {
      dispatchers?.setRenderer?.(renderer);
    }
  }, [renderer, dispatchers]);

  useEffect(function dispatchCamera() {
    if (camera) {
      dispatchers?.setCamera?.(camera);
    }
  }, [camera, dispatchers]);

  useEffect(function dispatchControls() {
    if (controls) {
      dispatchers?.setControls?.(controls);
    }
  }, [controls, dispatchers]);

}

export default useDispatchers;
