import { BoxGeometry, CylinderGeometry, SphereGeometry } from "three";

function createGeometries() {
  const body = new BoxGeometry(4, 1, 2.3);
  const cabin = new CylinderGeometry(1.2, 1.6, 0.6, 4, 1, false, 0.79);
  const tires = new CylinderGeometry(0.5, 0.5, 0.4, 16);
  const rim = new CylinderGeometry(0.3, 0.3, 0.3, 16);
  const roof = new BoxGeometry(1.75, 0.1, 1.75);
  const lights = new SphereGeometry(0.25, 16, 16);
  const bumper = new BoxGeometry(4.2, 0.4, 2.4);
  const stops = new BoxGeometry(0.2, 0.3, 0.4);

  return {
    body,
    bumper,
    cabin,
    tires,
    rim,
    roof,
    lights,
    stops,
  };
}

export default createGeometries;
