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

  const obstacle = {
    x: 200,
    y: 0,
    w: 140,
    h: 20,
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

  ctx.fillStyle = "maroon";

  let game;

  function animate() {
    game = window.requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(car, player.x, player.y, player.w, player.h);
    //draw obstacle
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
    obstacle.y++;
    //this will evaluate to true or false
    let didCollide = detectCollision(player, obstacle);
    if (didCollide) {
      console.log("You Died");
      window.cancelAnimationFrame(game);
    }
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

  function detectCollision(player, obj) {
    if (
      player.x < obj.x + obj.w &&
      player.x + player.w > obj.x &&
      player.y < obj.y + obj.h &&
      player.y + player.h > obj.y
    ) {
      return true;
    } else {
      return false;
    }
  }
};
