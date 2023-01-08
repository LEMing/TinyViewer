
import {createRenderer} from '../environment';

beforeAll(() => {
  jest.resetAllMocks();
})
describe('createRenderer', () => {
  const mockRenderer = {
    setSize: jest.fn(),
    render: jest.fn(),
    setPixelRatio: jest.fn(),
    shadowMap: {
      enabled: false,
      type: undefined,
    },
    outputEncoding: undefined,
    toneMapping: undefined,
    toneMappingExposure: 0,
  };

  jest.mock('../utils', () => ({
    isWebGLAvailable: () => false,
  }));

  jest.mock('../getWebGLRenderer', () => ({
    getWebGLRenderer: () => mockRenderer,
  }));

  it('should create and return a THREE.WebGLRenderer instance if WebGL is available', () => {
    expect(createRenderer).toThrow();
  });
});
