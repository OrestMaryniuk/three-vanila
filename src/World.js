import createCamera from "./components/camera.js";
import createScene from "./components/scene.js";
import createRenderer from "./systems/renderer.js";
import createCube from "./components/cube.js";
import Resizer from "./systems/Resizer.js";
import createLights from "./components/lights.js";
import Loop from "./systems/Loop.js";
import createControls from "./systems/controls.js";

class World {
  #camera;
  #scene;
  #renderer;
  #loop;

  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

    container.append(this.#renderer.domElement);
    const cube = createCube();
    const { mainLight, ambientLight, hemisphereLight } = createLights();
    const controls = createControls(this.#camera, this.#renderer.domElement);
    // controls.target.copy(cube.position);

    this.#loop.updatables.push(cube);
    this.#loop.updatables.push(controls);

    this.#scene.add(cube, mainLight, ambientLight, hemisphereLight);

    const resizer = new Resizer(container, this.#camera, this.#renderer);
    // resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }
}

export default World;
