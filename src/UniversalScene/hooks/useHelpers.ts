import {useEffect, useState} from 'react';
import {createGridHelper, createOrdHelper} from '../../helpers';
import * as THREE from 'three';
import {removeObjectsByName} from "./utils";

const useHelpers = (scene: THREE.Scene, addHelpers: boolean) => {
  const [helperNames, setHelperNames] = useState<string[]>([]);

  useEffect(function loadHelpers() {
    if (addHelpers) {
      const helper = createGridHelper({divisions:50, size: 50});
      const ordHelper = createOrdHelper();
      const names = [helper.name, ordHelper.name];
      removeObjectsByName(names, scene);
      scene.add(ordHelper);
      scene.add(helper);
      setHelperNames(names);
    }
  }, [addHelpers, scene]);

  useEffect(function removeHelpers() {
    if (!addHelpers) {
      removeObjectsByName(helperNames, scene);
    }
  }, [helperNames, addHelpers, scene]);
}

export default useHelpers;
