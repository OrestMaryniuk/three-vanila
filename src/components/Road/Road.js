import { Group } from "three";
import createMeshes from "./meshes";

class Road extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();
    this.add(this.meshes.road);

    this.speed = 3; 
    this.offset = 0;
  }

  tick(delta) {
    this.offset += this.speed * delta;
    this.meshes.road.position.x = (this.offset % 50);
  }
}

export default Road;
