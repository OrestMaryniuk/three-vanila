import { PlaneGeometry } from "three";

function createGeometries() {
  const road = new PlaneGeometry(120, 5);

  return { road };
}

export default createGeometries
