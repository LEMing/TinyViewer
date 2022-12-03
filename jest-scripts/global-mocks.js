import mockRenderer from '../src/__mocks__/mockRenderer';

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

jest.mock('../src/environment/environment', () => ({
    ...jest.requireActual('../src/environment/environment'),
    createRenderer: jest.fn().mockImplementation(() => mockRenderer),
  }),
);

jest.mock('../src/hooks/useClientSize', () => () => ({
  clientSize: {clientHeight: 2, clientWidth: 2},
  mountingPoint: jest.fn()
}));
