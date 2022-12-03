import {isWebGLAvailable} from '../utils';

describe('Should test environment utils', () => {
  test('Should check if WebGL context is available', () => {
    const isAvailable = isWebGLAvailable();
    expect(isAvailable).toEqual(false);
  })
})
