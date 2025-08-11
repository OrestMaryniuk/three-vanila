import { GLTFLoader } from "three/examples/jsm/Addons.js";
import setupModel from "./setupModel";

async function loadBirds() {
  const loader = new GLTFLoader();
  const parrotData = await loader.loadAsync("/models/Parrot.glb");
  const flamingoData = await loader.loadAsync("/models/Flamingo.glb");
  const storkData = await loader.loadAsync("/models/Stork.glb");

  console.log("Squaawk!", parrotData);
  const parrot = setupModel(parrotData);
  parrot.scale.set(0.05, 0.05, 0.05);
  parrot.position.set(0,0,4)

  const flamingo = setupModel(flamingoData);
  flamingo.scale.set(0.05, 0.05, 0.05);
  flamingo.position.set(-3,0,-2)

  const stork = setupModel(storkData);
  stork.scale.set(0.05, 0.05, 0.05);
  stork.position.set(3,0,-6)


  return { parrot, flamingo, stork };
}

export default loadBirds;
