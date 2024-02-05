const game_config = {
        resizeTo: window,
}

const game = new PIXI.Application(game_config)
document.body.appendChild(game.view);

const ship = PIXI.Sprite.from("/assets/ship.png");
game.stage.addChild(ship);

ship.anchor.set(1, 0.5); // bottom center
ship.x = game.screen.width / 2;
ship.y = game.screen.height / 2;
ship.width = 200;
ship.height = 200;

window.addEventListener("keyup", (event) => {
        if (event.key === "ArrowRight") {
                ship.x += 20;
        } else if (event.key === "ArrowLeft") {
                ship.x -= 20;
        }
});