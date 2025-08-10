import { MathUtils, Mesh } from "three";
import createGeometries from "./geometries";
import createMaterials from "./materials";

function createMeshes() {
  const geometries = createGeometries();
  const materials = createMaterials();

  const road = new Mesh(geometries.road, materials.road);
  road.rotation.set(MathUtils.degToRad(-90),0,0)
  road.position.set(0,-0.8,0)

  return { road };
}

export default createMeshes;
