import {Color, Scene} from "three";

function createScene() {
  const scene = new Scene();
  scene.background = new Color('#749BC2');

  return scene;
}

export default createScene;
