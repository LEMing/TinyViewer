import {useEffect, useRef} from 'react';
import {ThreeEnvironment} from '../../types';
import useAnimate from './useAnimate';
import useInitMethod from './useInitMethod';

type UseOnDidMount = {
  threeEnv: ThreeEnvironment,
  threeRoot: HTMLDivElement | null,
  animationRunner?: () => void,
}

const useOnDidMount = (props: UseOnDidMount) => {
  const animationID = useRef<number>(0);
  const {threeRoot, threeEnv, animationRunner} = props;
  const {camera, renderer, controls, scene} = threeEnv;
  const init = useInitMethod({threeRoot, renderer, controls});
  const animate = useAnimate({animationID, animationRunner, scene, camera, renderer});

  useEffect(function onDidMount() {
    const animationFrameID = animationID.current;
    init();
    animate();
    return () => {
      cancelAnimationFrame(animationFrameID);
    };
  }, [animationID, animate, init]);
}

export default useOnDidMount;
