import { renderHook } from '@testing-library/react'
import useOnSceneReady from '../useOnSceneReady';

describe('Should test the useOnSceneReady hook', () => {
  test('Should perform given function', () => {
    let counter = 0;
    const myFunc = () => {
      counter = counter + 1;
    };
    renderHook(() => useOnSceneReady(myFunc));
    expect(counter).toEqual(1);
  });

  test('Should do nothing', () => {
    renderHook(() => useOnSceneReady());
  });
});
