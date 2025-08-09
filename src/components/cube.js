import {
  BoxGeometry,
  IcosahedronGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from "three";

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('/assets/uv-test-bw.png');
  const texture1 = textureLoader.load("/assets/uv-test-col.png");
  const texture2 = textureLoader.load("/assets/oakfloor_basecolor.png");

  const material = new MeshStandardMaterial({
    map: texture2,
    color: "#574e4e",
    // lightMap: texture,
    // bumpMap: texture,
    // bumpScale: 2,
    // alphaMap: texture1,
    // transparent: true
  });

  return material;
}

function createCube() {
  // const geometry = new IcosahedronGeometry(1,6)
  const geometry = new BoxGeometry(1, 1, 1);
  const material = createMaterial();
  const cube = new Mesh(geometry, material);

  // cube.rotation.set(0.5, 0.5, 0);

  const radiansPerSecond = MathUtils.degToRad(30);
  let time = 0;

  cube.tick = (delta) => {
    // console.log(delta*1000)
    // cube.rotation.z += 0.01;
    // cube.rotation.x += 0.01;
    cube.rotation.y += radiansPerSecond * delta;

    // time += delta;
    // const period = 8;
    // const t = (time % period) / period;
    // const progress = t < 0.5 ? t * 2 : (1 - t) * 2;
    // cube.position.x = -2 + progress * 4;
  };

  return cube;
}

export default createCube;
