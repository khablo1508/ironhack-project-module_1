const game = new Game();
let visibleSpiders = 0;

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

  game.setVisibleSpider();
}

function mouseClicked() {
  // CIRCLE 0
  if (mouseX > 325 && mouseX < 375 && mouseY < 80 && mouseY > 50) {
    if (!game.spider0.visible) {
      if (!game.spider3.visible) {
        game.spider3.visible = true;
      } else {
        game.spider5.visible = true;
      }
      game.setVisibleSpider(0);
      // Plus one more visible spider
      visibleSpiders++;
    }

    console.log(visibleSpiders);
    // check if 78 spiders
    if (visibleSpiders === 7) {
      console.log('You won!');
    }
    // CIRCLE 1
  } else if (mouseX > 530 && mouseX < 560 && mouseY < 170 && mouseY > 130) {
    if (!game.spider1.visible) {
      if (!game.spider4.visible) {
        game.spider4.visible = true;
      } else {
        game.spider6.visible = true;
      }
      game.setVisibleSpider(1);
      // Plus one more visible spider
      visibleSpiders++;
    }

    console.log(visibleSpiders);
    // check if 7 spiders
    if (visibleSpiders === 7) {
      console.log('You won!');
    }

    // CIRCLE 2
  } else if (mouseX > 605 && mouseX < 655 && mouseY < 375 && mouseY > 325) {
    if (!game.spider2.visible) {
      if (!game.spider5.visible) {
        game.spider5.visible = true;
      } else {
        game.spider7.visible = true;
      }
      game.setVisibleSpider(2);
      // Plus one more visible spider
      visibleSpiders++;
    }

    console.log(visibleSpiders);
    // check if 7 spiders
    if (visibleSpiders === 7) {
      console.log('You won!');
    }

    // CIRCLE 3
  } else if (mouseX > 520 && mouseX < 565 && mouseY < 575 && mouseY > 525) {
    if (!game.spider3.visible) {
      if (!game.spider6.visible) {
        game.spider6.visible = true;
      } else {
        game.spider0.visible = true;
      }
      game.setVisibleSpider(3);
      // Plus one more visible spider
      visibleSpiders++;
    }

    console.log(visibleSpiders);
    // check if 7 spiders
    if (visibleSpiders === 7) {
      console.log('You won!');
    }

    // CIRCLE 4
  } else if (mouseX > 325 && mouseX < 375 && mouseY < 655 && mouseY > 605) {
    if (!game.spider4.visible) {
      if (!game.spider7.visible) {
        game.spider7.visible = true;
      } else {
        game.spider1.visible = true;
      }
      game.setVisibleSpider(4);

      // Plus one more visible spider
      visibleSpiders++;
    }

    console.log(visibleSpiders);
    // check if 7 spiders
    if (visibleSpiders === 7) {
      console.log('You won!');
    }

    // CIRCLE 5
  } else if (mouseX > 130 && mouseX < 180 && mouseY < 575 && mouseY > 525) {
    if (!game.spider5.visible) {
      if (!game.spider0.visible) {
        game.spider0.visible = true;
      } else {
        game.spider2.visible = true;
      }
      game.setVisibleSpider(5);
      // Plus one more visible spider
      visibleSpiders++;
    }

    console.log(visibleSpiders);
    // check if 7 spiders
    if (visibleSpiders === 7) {
      console.log('You won!');
    }

    // CIRCLE 6
  } else if (mouseX > 45 && mouseX < 105 && mouseY < 375 && mouseY > 325) {
    if (!game.spider6.visible) {
      if (!game.spider1.visible) {
        game.spider1.visible = true;
      } else {
        game.spider3.visible = true;
      }
      game.setVisibleSpider(6);
      // Plus one more visible spider
      visibleSpiders++;
    }

    console.log(visibleSpiders);
    // check if 7 spiders
    if (visibleSpiders === 7) {
      console.log('You won!');
    }

    // CIRCLE 7
  } else if (mouseX > 130 && mouseX < 180 && mouseY < 175 && mouseY > 125) {
    if (!game.spider7.visible) {
      if (!game.spider2.visible) {
        game.spider2.visible = true;
      } else {
        game.spider5.visible = true;
      }

      game.setVisibleSpider(7);
      // Plus one more visible spider
      visibleSpiders++;
    }

    console.log(visibleSpiders);
    // check if 7 spiders
    if (visibleSpiders === 7) {
      console.log('You won!');
    }
  }
}
