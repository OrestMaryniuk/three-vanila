import { Group, MathUtils } from "three";
import createMeshes from "./meshes";

const wheelSpeed = MathUtils.degToRad(90);

class Car extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();
    this.add(
      this.meshes.cabin,
      this.meshes.body,
      this.meshes.bumper,
      this.meshes.frontWheels,
      this.meshes.rearWheels,
      this.meshes.roof,
      this.meshes.lights
    );
  }

  tick(delta) {
    this.meshes.frontWheels.rotation.z += wheelSpeed * delta;
    this.meshes.rearWheels.rotation.z += wheelSpeed * delta;
  }
}

export default Car;
