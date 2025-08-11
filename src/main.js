import World from "./World.js";

async function main() {
  const container = document.getElementById("app");
  const button = document.getElementById("button");

  // button.addEventListener('click', function () {
  button.style.display = "none";
  const world = new World(container);
  await world.init();
  world.start();
  // })
}

main().catch((err) => {
  console.error(err);
});
