import { AmbientLight, DirectionalLight, HemisphereLight, PointLight, SpotLight } from "three";

function createLights() {
  const mainLight = new DirectionalLight("#FFFCFB", 7);
  mainLight.position.set(10, 10, 10);

  const ambientLight = new AmbientLight("white", 0);
  const hemisphereLight = new HemisphereLight('white', '#14153d', 5);

  // let angle = 0;
  //
  // light.tick = (delta) => {
  //   angle = (angle + delta) % (Math.PI * 2);
  //   const radius = 5;
  //   light.position.x = Math.cos(angle) * radius;
  //   light.position.z = Math.sin(angle) * radius;
  //
  //   light.lookAt(0, 0, 0);
  // };

  return { mainLight, ambientLight, hemisphereLight };
}

export default createLights;
