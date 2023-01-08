import { renderHook } from '@testing-library/react-hooks';
import * as THREE from 'three';
import mockRenderer from '../../../__mocks__/mockRenderer';

import useAnimate from '../useAnimate';
describe('useAnimate', () => {
  it('should return a function', () => {
    const { result } = renderHook(() => useAnimate({
      animationID: { current: 0 },
      scene: new THREE.Scene(),
      camera: new THREE.Camera(),
      // @ts-ignore
      renderer: mockRenderer,
    }));
    expect(typeof result.current).toBe('function');
  });

  it('should call requestAnimationFrame with the animate function as a callback', () => {
    const requestAnimationFrameMock = jest.fn();
    const { result } = renderHook(() => useAnimate({
      animationID: { current: 0 },
      scene: new THREE.Scene(),
      camera: new THREE.Camera(),
      // @ts-ignore
      renderer: mockRenderer,
    }));
    (global as any).requestAnimationFrame = requestAnimationFrameMock;
    result.current();
    expect(requestAnimationFrameMock).toHaveBeenCalledWith(result.current);
  });

  it('should call the animationRunner function if it is defined', () => {
    const animationRunnerMock = jest.fn();
    const { result } = renderHook(() => useAnimate({
      animationID: { current: 0 },
      scene: new THREE.Scene(),
      camera: new THREE.Camera(),
      // @ts-ignore
      renderer: mockRenderer,
      animationRunner: animationRunnerMock,
    }));
    result.current();
    expect(animationRunnerMock).toHaveBeenCalled();
  });

  it('should not call the animationRunner function if it is not defined', () => {
    const { result } = renderHook(() => useAnimate({
      animationID: { current: 0 },
      scene: new THREE.Scene(),
      camera: new THREE.Camera(),
      // @ts-ignore
      renderer: mockRenderer,
    }));
    result.current();
  });

  it('should call the renderer.render function with the correct arguments', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const { result } = renderHook(() => useAnimate({
      animationID: { current: 0 },
      scene,
      camera,
      // @ts-ignore
      renderer: mockRenderer,
    }));
    result.current();
    expect(mockRenderer.render).toHaveBeenCalledWith(scene, camera);
  });
});
