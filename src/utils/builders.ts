import * as THREE from 'three';

export interface CreateObject3D {
  size?: THREE.Vector3;
  name: string;
  color?: number;
  type?: 'box' | 'sphere';
}

export const createBoxOrSphere = (props: CreateObject3D) => {
  const DEFAULT_SIZE = new THREE.Vector3(1, 1, 1);
  const {
    size = DEFAULT_SIZE,
    name,
    color = 0x333333,
  } = props;

  const geometry = props.type === 'sphere'
    ? new THREE.SphereGeometry(size.x, 32, 32)
    : new THREE.BoxGeometry(size.x, size.y, size.z);
  const material = new THREE.MeshPhysicalMaterial({
    color,
    sheen: 0.1,
    clearcoat: 0.5,
    roughness: 0.5
  } );
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  return mesh;
}

interface CreateCylinder {
  radiusTop?: number;
  radiusBottom?: number;
  height?: number;
  name?: string,
  color?: number,
  radialSegments?: number,
  heightSegments?: number,
}
export const createCylinder = (props: CreateCylinder) => {
  const {
    radiusTop = 1,
    radiusBottom = 1,
    height = 1,
    name = 'cylinder',
    color = 0x333333,
    radialSegments = 32,
    heightSegments = 2,
  } = props;

  const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments)
  const material = new THREE.MeshPhysicalMaterial({
    color,
    sheen: 0.1,
    clearcoat: 0.5,
    roughness: 0.5
  } );
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  return mesh;
}
