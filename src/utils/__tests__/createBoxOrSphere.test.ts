import * as THREE from 'three'
import { createBoxOrSphere, CreateObject3D } from '../builders';

describe('createBoxOrSphere', () => {
  it('creates a box with default size and color', () => {
    const props: CreateObject3D = {
      name: 'test-box',
    };
    const mesh = createBoxOrSphere(props);
    expect(mesh.name).toBe('test-box');
    expect(mesh.geometry).toBeInstanceOf(THREE.BoxGeometry);
    expect(mesh.material).toBeInstanceOf(THREE.MeshPhysicalMaterial);
    expect(mesh.material.color.getHex()).toBe(0x333333);
  });

  it('creates a sphere with default color', () => {
    const props: CreateObject3D = {
      name: 'test-sphere',
      type: 'sphere',
      size: new THREE.Vector3(5, 5, 5),
    };
    const mesh = createBoxOrSphere(props);
    expect(mesh.name).toBe('test-sphere');
    expect(mesh.geometry).toBeInstanceOf(THREE.SphereGeometry);
    expect(mesh.material).toBeInstanceOf(THREE.MeshPhysicalMaterial);
    expect(mesh.material.color.getHex()).toBe(0x333333);
  });

  it('creates a box with custom size and color', () => {
    const props: CreateObject3D = {
      name: 'test-box-custom',
      size: new THREE.Vector3(2, 3, 4),
      color: 0xffffff,
    };
    const mesh = createBoxOrSphere(props);
    expect(mesh.name).toBe('test-box-custom');
    expect(mesh.geometry).toBeInstanceOf(THREE.BoxGeometry);
    expect(mesh.material).toBeInstanceOf(THREE.MeshPhysicalMaterial);
    expect(mesh.material.color.getHex()).toBe(0xffffff);
  });

  it('creates a sphere with custom size and color', () => {
    const props: CreateObject3D = {
      name: 'test-sphere-custom',
      type: 'sphere',
      size: new THREE.Vector3(5, 5, 5),
      color: 0x00ff00,
    };
    const mesh = createBoxOrSphere(props);
    expect(mesh.name).toBe('test-sphere-custom');
    expect(mesh.geometry).toBeInstanceOf(THREE.SphereGeometry);
    expect(mesh.material).toBeInstanceOf(THREE.MeshPhysicalMaterial);
    expect(mesh.material.color.getHex()).toBe(0x00ff00);
  });
});
