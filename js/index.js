window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  const player = {
    x: 250,
    y: 600,
    w: 40,
    h: 80,
  };

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 700;
  const h = canvas.height;
  const w = canvas.width;

  const car = new Image();
  car.src = "images/car.png";
  car.onload = function () {
    ctx.drawImage(car, player.x, player.y, player.w, player.h);
  };

  function startGame() {
    console.log("START");
    animate();
  }

  function animate() {
    console.log("Animating");
    window.requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(car, player.x, player.y, player.w, player.h);
  }

  function move(e) {
    switch (e.key) {
      case "ArrowLeft":
        if (player.x - 10 < 0) {
          player.x = 0;
        } else {
          player.x -= 10;
        }
        break;
      case "ArrowRight":
        if (player.x + player.w + 10 > w) {
          player.x = w - player.w;
        } else {
          player.x += 10;
        }
        break;
    }
  }

  document.addEventListener("keydown", move);
};
