import { TextureLoader, MeshStandardMaterial } from "three";

function createMaterials() {
  const loader = new TextureLoader();
  const texture = loader.load("/assets/road.jpg");
  const road = new MeshStandardMaterial({color:"#575353" , map: texture });

  return { road };
}

export default createMaterials
