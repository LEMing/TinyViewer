import mockRenderer from '../src/__mocks__/mockRenderer';
import {getWebGLRenderer} from '../src/environment/getWebGLRenderer';
import {isWebGLAvailable} from '../src/environment/utils';

jest.mock('three/examples/jsm/loaders/RGBELoader', () => ({
  RGBELoader: jest.fn().mockImplementation(() => {
    return {load: jest.fn()}
  })
}));

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock('../src/environment/getWebGLRenderer', () => ({
    ...jest.requireActual('../src/environment/getWebGLRenderer'),
    getWebGLRenderer: jest.fn().mockImplementation(() => mockRenderer),
  }),
);

jest.mock('../src/hooks/useClientSize', () => () => ({
  clientSize: {clientHeight: 2, clientWidth: 2},
  mountingPoint: jest.fn()
}));
