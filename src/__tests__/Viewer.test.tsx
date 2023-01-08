import {render, screen, waitFor} from '@testing-library/react';
import React from 'react';
import * as THREE from 'three';
import mockRenderer from '../__mocks__/mockRenderer';
import {createBoxOrSphere} from '../utils';
import Viewer from '../Viewer';
import '@testing-library/jest-dom';

const mockObject3D = new THREE.Object3D();
jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  loadGLB: () => Promise.resolve(mockObject3D),
}));

jest.mock('../environment/environment', () => ({
    ...jest.requireActual('../environment/environment'),
  createRenderer: jest.fn().mockImplementation(() => mockRenderer),
  }),
);

describe('Viewer component', () => {
  test('Should find "Initialisation error" message', async () => {
    render(<Viewer />);

    await waitFor(() => {
      const loader = screen.getByText('Initialisation error');
      expect(loader).toBeInTheDocument();
    });
  });

  test('Should find the universal scene test id', async () => {
    const object3D = Promise.resolve(createBoxOrSphere({name: 'My cube'}));
    render(<Viewer object3D={object3D}/>);

    await waitFor(() => {
      const loader = screen.getByTestId('universal-scene is-ready-true');
      expect(loader).toBeInTheDocument();
    });
  });
})
