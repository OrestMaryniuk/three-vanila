import {DirectionalLight, PointLight, SpotLight} from "three";

function createLights() {
  const light = new DirectionalLight('#FFFCFB', 7)
  light.position.set(10, 10, 10)

  return light;
}

export default createLights
