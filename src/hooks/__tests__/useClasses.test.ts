import useClasses from '../useClasses';
import { renderHook } from '@testing-library/react'

test('Should test the useClasses hook', () => {
  const { result } = renderHook(() => useClasses('my-test-class'));
  expect(result.current).toEqual('scene my-test-class');
})
