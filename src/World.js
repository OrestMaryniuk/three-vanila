import createCamera from "./components/camera.js";
import createScene from "./components/scene.js";
import createRenderer from "./systems/renderer.js";
import createCube from "./components/cube.js";
import Resizer from "./systems/Resizer.js";
import createLights from "./components/lights.js";
import Loop from "./systems/Loop.js";

class World {
  #camera;
  #scene;
  #renderer;
  #loop;

  constructor(container) {
    this.#camera = createCamera()
    this.#scene = createScene()
    this.#renderer = createRenderer()
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

    container.append(this.#renderer.domElement);
    const cube = createCube();
    const light = createLights();

    this.#loop.updatables.push(cube);
    this.#scene.add(cube, light)

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
