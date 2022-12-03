import {useCallback, useEffect, useState} from 'react';
import useCallbackRef from './useCallbackRef';

const useClientSize = () => {
  const [threeRoot, mountingPoint] = useCallbackRef();
  const [height, setHeight] = useState<number>(1);
  const [width, setWidth] = useState<number>(1);

  const [isMounted, setIsMounted] = useState(false);

  const handleResize = useCallback(() => {
    if (threeRoot) {
      setWidth(threeRoot.offsetWidth);
      setHeight(threeRoot.offsetHeight);
    }
  }, [threeRoot]);

  useEffect(function onMountingPointReady() {
    if (threeRoot) {
      setIsMounted(true);
    }
  }, [threeRoot]);

  useEffect(function runSizeObserver() {
    const observer = new ResizeObserver(handleResize);
    if (isMounted && threeRoot) {
      observer.observe(threeRoot);
    }
    return () => observer.disconnect();
  }, [threeRoot, handleResize, isMounted]);

  return {clientSize: {clientHeight: height, clientWidth: width}, mountingPoint, threeRoot};
}

export default useClientSize;
