import { MeshPhysicalMaterial, MeshStandardMaterial } from "three";

function createMaterials() {
  const body = new MeshStandardMaterial({
    color: "#770707",
  });

  const bumper = new MeshStandardMaterial({
    color: "#212020",
  });

  const detail = new MeshStandardMaterial({
    color: "#000000",
  });

  const rim = new MeshStandardMaterial({
    color: "#aeabab",
  });

  const glass = new MeshPhysicalMaterial({
    color: "#000000",
    transparent: true,
    opacity: 0.8,
    roughness: 0,
    metalness: 0.1,
    transmission: 1,
    ior: 1,
    thickness: 0.025,
    clearcoat: 1,
    clearcoatRoughness: 0,
  });

  const lights = new MeshStandardMaterial({
    color: "#ffffff",
    emissive: "#ffffff",
    emissiveIntensity: 1,
  });
  const stops = new MeshStandardMaterial({
    color: "#ff0000",
    emissive: "#ff0000",
    emissiveIntensity: 1,
  });

  return { body, bumper, detail, rim, glass, lights, stops };
}

export default createMaterials;
