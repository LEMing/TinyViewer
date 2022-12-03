import { renderHook } from '@testing-library/react'
import useClientSize from '../useClientSize';

test('Should create a default client dimensions', () => {
  const {result} = renderHook(() => useClientSize());
  // Expect to get default 2x2 size. Since it's mocked in the global-mock.js
  const {clientSize, mountingPoint} = result.current;
  expect(mountingPoint).toBeDefined();
  expect(clientSize).toEqual({clientHeight: 2, clientWidth: 2});
})
