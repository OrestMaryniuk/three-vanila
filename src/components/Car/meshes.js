import { MathUtils, Mesh, Group } from "three";
import createGeometries from "./geometries";
import createMaterials from "./materials";

function createMeshes() {
  const geometries = createGeometries();
  const materials = createMaterials();

  const body = new Mesh(geometries.body, materials.body);

  const bumper = new Mesh(geometries.bumper, materials.bumper);
  bumper.position.y=-0.3

  const cabin = new Mesh(geometries.cabin, materials.glass);
  cabin.position.set(0.4, 0.8, 0);

  const tire = new Mesh(geometries.tires, materials.detail);
  tire.rotation.x = MathUtils.degToRad(90);

  const rim = new Mesh(geometries.rim, materials.rim);
  rim.rotation.x = MathUtils.degToRad(90);
  rim.position.z = 0.1;

  const wheelProto = new Group();
  wheelProto.add(tire, rim);

  function createWheelPair(yaw, zOffset) {
    const rightWheel = wheelProto.clone();
    rightWheel.position.set(yaw, -0.3, zOffset);

    const leftWheel = wheelProto.clone();
    leftWheel.rotation.y = MathUtils.degToRad(180);
    leftWheel.position.set(yaw, -0.3, -zOffset);

    const pair = new Group();
    pair.add(rightWheel, leftWheel);
    return pair;
  }

  const frontWheels = createWheelPair(-1.3, 1.1);
  const rearWheels = createWheelPair(1.3, 1.1);

  const tires = new Group();
  tires.add(frontWheels, rearWheels);

  const roof = new Mesh(geometries.roof, materials.body);
  roof.position.set(0.4, 1.1, 0);

  const light = new Mesh(geometries.lights, materials.lights);
  light.position.set(-1.85, 0.2, -0.9);
  const lights = new Group();
  for (let i = 0; i < 2; i++) {
    const newLight = light.clone();
    i % 2 === 1 ? (newLight.position.z = 0.9) : (newLight.position.z = -0.9);

    lights.add(newLight);
  }

  return { body, bumper, cabin, tires, roof, lights };
}

export default createMeshes;
