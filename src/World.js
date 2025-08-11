import createCamera from "./components/camera.js";
import createScene from "./components/scene.js";
import createRenderer from "./systems/renderer.js";
import createCube from "./components/cube.js";
import Resizer from "./systems/Resizer.js";
import createLights from "./components/lights.js";
import Loop from "./systems/Loop.js";
import createControls from "./systems/controls.js";
import createMeshGroup from "./components/meshGroup.js";
import Car from "./components/Car/Car.js";
import helpers from "./components/helpers.js";
import Road from "./components/Road/Road.js";
import loadBirds from "./components/birds/birds.js";
const { createAxesHelper, createGridHelper } = helpers;

class World {
  #camera;
  #scene;
  #renderer;
  #loop;
  #controls;

  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    this.#controls = createControls(this.#camera, this.#renderer.domElement)

    container.append(this.#renderer.domElement);
    // const cube = createCube();
    const car = new Car();
    const road = new Road();
    // const meshGroup = createMeshGroup();
    const { mainLight, ambientLight, hemisphereLight, spotLight } =
      createLights();

    // controls.target.copy(cube.position);

    this.#loop.updatables.push(this.#controls, car, road);
    this.#scene.add(mainLight, ambientLight, hemisphereLight);

    const resizer = new Resizer(container, this.#camera, this.#renderer);

    this.#scene.add(createAxesHelper(), createGridHelper());
    // resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  async init() {
    const models = await loadBirds();

    this.#controls.target.copy(models.parrot.position)

    this.#scene.add(...Object.values(models));
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
