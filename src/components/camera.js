import {PerspectiveCamera} from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    60,
    1,
    0.1,
    200
  );
  camera.position.set(0, 0, 20);

  return camera;
}

export default createCamera;
