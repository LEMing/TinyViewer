import * as THREE from 'three';
export const removeObjectsByName = (names: string[], scene: THREE.Scene) => {
    names.forEach(name => {
        const existingObject = scene.getObjectByName(name);
        if (existingObject) {
            scene.remove(existingObject);
        }
    })
}

export const getNames = (objects3D: THREE.Object3D[]) => {
    return objects3D.map(object3d => object3d.name);
}

export const isItNewObject = (object3D: THREE.Object3D, scene: THREE.Scene) => {
    return !Boolean(scene.getObjectByProperty('uuid', object3D.uuid));
}
