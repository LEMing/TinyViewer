import {renderHook} from '@testing-library/react-hooks';
import mockRenderer from '../../../__mocks__/mockRenderer';
import useInitMethod from '../useInitMethod';

describe('useInitMethod', () => {
  it('should append renderer.domElement to threeRoot and update controls', () => {
    // Arrange
    const threeRoot = document.createElement('div');
    const renderer = mockRenderer;
    const controls = { update: jest.fn() };
    // @ts-ignore
    const { result } = renderHook(() => useInitMethod({ threeRoot, renderer, controls }));
    result.current();
    expect(threeRoot.children.length).toEqual(1)
    expect(controls.update).toHaveBeenCalled();
  });
});
