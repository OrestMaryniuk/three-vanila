import {BoxGeometry, MathUtils, Mesh, MeshStandardMaterial} from "three";


function createCube() {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshStandardMaterial({color: '#E5E1DA'});
  const cube = new Mesh(geometry, material);

  cube.rotation.set(0.5, 0.5, 0)

  const radiansPerSecond = MathUtils.degToRad(30)

  cube.tick = (delta) => {
    // console.log(delta*1000)
    // cube.rotation.z += 0.01;
    // cube.rotation.x += 0.01;
    cube.rotation.y += radiansPerSecond*delta;
  };

  return cube;
}

export default createCube;
