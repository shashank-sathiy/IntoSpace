const game_config = {
        view: document.getElementById("game"),
        resizeTo: window,
}

const game = new PIXI.Application(game_config)
document.body.appendChild(game.view);

// const bg = PIXI.Sprite.from("/assets/starry-night.jpeg")
// game.stage.addChild(bg);

const ship = PIXI.Sprite.from("/assets/ship.png");
game.stage.addChild(ship);

ship.anchor.set(1, 0.5); 
ship.x = game.screen.width / 2;
ship.y = game.screen.height / 2;
ship.width = 200;
ship.height = 200;
console.log(game.screen.width)

window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
                console.log(ship.x, ship.y);
                if (ship.x + 20 <= game.screen.width)
                        ship.x += 20;
        } else if (event.key === "ArrowLeft") {
                console.log(ship.x, ship.y);
                if (ship.x - 20 >= 0) 
                        ship.x -= 20;
        }
});

let direction = "right";
let speed = 5;
game.ticker.add((delta) => {
        if (direction === "right") {
                if (ship.x >= game.screen.width) {
                        direction = "left";
                } else {
                        ship.x += speed * delta;
                }
        } 
        else if (direction === "left") {
                if (ship.x <= 200) {
                        direction = "right";
                } else {
                        ship.x -= speed * delta;
                }
        }
});