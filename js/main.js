const game = new Game();

function preload() {
  game.preload();
}
function setup() {
  let canvas = createCanvas(700, 700);
  canvas.parent('canvas');
}

function draw() {
  game.drawBigFieldCircle();
  game.drawSmallerFieldCircle();
  game.drawButtonCircles();
  game.drawTinyCircles();
  game.drawStar();
  game.spiders.forEach((spider) => {
    spider.setVisibleSpider();
  });

  if (game.visibleSpiders > 3) {
    game.drawButton();
  }
}

function mouseClicked() {
  game.checkClick();
}
