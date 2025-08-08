import { OrbitControls } from "three/examples/jsm/Addons.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  // controls.target.set(1,2,3);
  // controls.enablePan = false;
  controls.enableDamping = true;

  

  controls.tick = () => controls.update();

  return controls;
}

export default createControls;
