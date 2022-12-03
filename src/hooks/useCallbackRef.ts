import {useCallback, useState} from 'react';

const useCallbackRef = (): [HTMLDivElement | null, (node: HTMLDivElement) => void] => {
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  const callbackRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      setNode(node);
    }
  }, []);

  return [node, callbackRef];
}

export default useCallbackRef;
