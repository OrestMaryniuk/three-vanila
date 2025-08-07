import World from "./World.js";

function main() {
  const container = document.getElementById('app');
  const button = document.getElementById('button');

  // button.addEventListener('click', function () {
    button.style.display = 'none';
    const world = new World(container);
  world.start();
  // })
}

main()
