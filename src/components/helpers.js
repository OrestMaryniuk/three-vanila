import { AxesHelper, GridHelper } from "three";

function createAxesHelper() {
  const axesHelper = new AxesHelper(5);
  return axesHelper;
}

function createGridHelper() {
  const gridHelper = new GridHelper(10, 10);
  return gridHelper;
}

export default { createAxesHelper, createGridHelper };
