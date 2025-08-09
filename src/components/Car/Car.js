import { Group } from "three";
import createMeshes from "./meshes";

class Car extends Group {
  constructor() {
    super();

    this.meshes = createMeshes()
    this.add(
        this.meshes.cabin,
        this.meshes.body,
        this.meshes.bumper,
        this.meshes.tires,
        this.meshes.roof,
        this.meshes.lights
    )
  }
}

export default Car;
