import * as THREE from 'three'

import { createCylinder } from '../builders';

test('creates a cylinder with default properties', () => {
  const cylinder = createCylinder({});
  expect(cylinder).toBeInstanceOf(THREE.Mesh);
  expect(cylinder.name).toBe('cylinder');
  expect(cylinder.geometry.parameters.radialSegments).toEqual(32);
});

test('creates a cylinder with custom properties', () => {
  const cylinder = createCylinder({
    radiusTop: 2,
    radiusBottom: 3,
    height: 4,
    name: 'custom cylinder',
    color: 0x123456,
    radialSegments: 16,
    heightSegments: 4
  });
  expect(cylinder).toBeInstanceOf(THREE.Mesh);
  expect(cylinder.name).toBe('custom cylinder');
  expect(cylinder.material).toBeInstanceOf(THREE.MeshPhysicalMaterial);
  expect(cylinder.geometry).toBeInstanceOf(THREE.CylinderGeometry);
  expect(cylinder.geometry.parameters.height).toEqual(4);
  expect(cylinder.material.color.getHex()).toBe(0x123456);
  expect(cylinder.material.sheen).toBe(0.1);
  expect(cylinder.material.clearcoat).toBe(0.5);
  expect(cylinder.material.roughness).toBe(0.5);
});
