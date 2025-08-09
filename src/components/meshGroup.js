import {
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
} from "three";

function createMeshGroup() {
  const group = new Group();

  const geometry = new SphereGeometry(0.18, 16, 16);
  const material = new MeshStandardMaterial({
    color: "indigo",
    // flatShading: true
  });

  const protoSphere = new Mesh(geometry, material);

  // protoSphere.position.y = 1.2;

  // group.add(protoSphere);

  for (let i = 0; i < 1; i += 0.05) {
    const sphere = protoSphere.clone();
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.z = Math.sin(2 * Math.PI * i);

    sphere.scale.multiplyScalar(0.01 + i);

    group.add(sphere);
  }

  const radiansPerSecond = MathUtils.degToRad(30);

  group.tick = (delta) => {
    group.rotation.y -= delta * radiansPerSecond;
    // group.rotation.x -= delta * radiansPerSecond;
    // group.rotation.z -= delta * radiansPerSecond;



  };

  return group;
}

export default createMeshGroup;
