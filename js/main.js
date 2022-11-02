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

  if (visibleSpiders > 3) {
    game.drawButton();
  }
}

function mouseClicked() {
  console.log(mouseX, mouseY);
  // CIRCLE 0
  if (mouseX > 315 && mouseX < 385 && mouseY < 90 && mouseY > 40) {
    if (!game.spider0.visible) {
      if (!game.spider3.visible && !game.spider5.visible) {
        game.spider3.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider3.visible && !game.spider5.visible) {
        game.spider5.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (!game.spider3.visible && game.spider5.visible) {
        game.spider3.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider3.visible && game.spider5.visible) {
        visibleSpiders = visibleSpiders;
        game.failureShortSound.play();
      }
      game.setVisibleSpider(0);
    } else {
      game.failureShortSound.play();
    }
    console.log(visibleSpiders);
    if (visibleSpiders === 7) {
      game.wonSound.play();
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    }

    // CIRCLE 1
  } else if (mouseX > 520 && mouseX < 570 && mouseY < 180 && mouseY > 120) {
    if (!game.spider1.visible) {
      if (!game.spider4.visible && !game.spider6.visible) {
        game.spider4.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider4.visible && !game.spider6.visible) {
        game.spider6.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (!game.spider4.visible && game.spider6.visible) {
        game.spider4.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider4.visible && game.spider6.visible) {
        visibleSpiders = visibleSpiders;
        game.failureShortSound.play();
      }
      game.setVisibleSpider(1);
    } else {
      game.failureShortSound.play();
    }
    console.log(visibleSpiders);
    if (visibleSpiders === 7) {
      game.wonSound.play();
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    }

    // CIRCLE 2
  } else if (mouseX > 595 && mouseX < 665 && mouseY < 385 && mouseY > 315) {
    if (!game.spider2.visible) {
      if (!game.spider5.visible && !game.spider7.visible) {
        game.spider5.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider5.visible && !game.spider7.visible) {
        game.spider7.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (!game.spider5.visible && game.spider7.visible) {
        game.spider5.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider5.visible && game.spider7.visible) {
        visibleSpiders = visibleSpiders;
        game.failureShortSound.play();
      }
      game.setVisibleSpider(2);
    } else {
      game.failureShortSound.play();
    }
    console.log(visibleSpiders);
    if (visibleSpiders === 7) {
      game.wonSound.play();
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    }

    // CIRCLE 3
  } else if (mouseX > 510 && mouseX < 575 && mouseY < 585 && mouseY > 515) {
    if (!game.spider3.visible) {
      if (!game.spider6.visible && !game.spider0.visible) {
        game.spider6.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider6.visible && !game.spider0.visible) {
        game.spider0.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (!game.spider6.visible && game.spider0.visible) {
        game.spider6.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider6.visible && game.spider6.visible) {
        visibleSpiders = visibleSpiders;
        game.failureShortSound.play();
      }
      game.setVisibleSpider(3);
    } else {
      game.failureShortSound.play();
    }
    console.log(visibleSpiders);
    if (visibleSpiders === 7) {
      game.wonSound.play();
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    }

    // CIRCLE 4
  } else if (mouseX > 315 && mouseX < 385 && mouseY < 665 && mouseY > 595) {
    if (!game.spider4.visible) {
      if (!game.spider7.visible && !game.spider1.visible) {
        game.spider7.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider7.visible && !game.spider1.visible) {
        game.spider1.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (!game.spider7.visible && game.spider1.visible) {
        game.spider7.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider7.visible && game.spider7.visible) {
        visibleSpiders = visibleSpiders;
        game.failureShortSound.play();
      }
      game.setVisibleSpider(4);
    } else {
      game.failureShortSound.play();
    }
    console.log(visibleSpiders);
    if (visibleSpiders === 7) {
      game.wonSound.play();
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    }

    // CIRCLE 5
  } else if (mouseX > 120 && mouseX < 190 && mouseY < 585 && mouseY > 515) {
    if (!game.spider5.visible) {
      if (!game.spider2.visible && !game.spider0.visible) {
        game.spider0.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider0.visible && !game.spider2.visible) {
        game.spider2.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (!game.spider0.visible && game.spider2.visible) {
        game.spider0.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider0.visible && game.spider2.visible) {
        visibleSpiders = visibleSpiders;
        game.failureShortSound.play();
      }
      game.setVisibleSpider(5);
    } else {
      game.failureShortSound.play();
    }
    console.log(visibleSpiders);
    if (visibleSpiders === 7) {
      game.wonSound.play();
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    }

    // CIRCLE 6
  } else if (mouseX > 35 && mouseX < 115 && mouseY < 385 && mouseY > 315) {
    if (!game.spider6.visible) {
      if (!game.spider1.visible && !game.spider3.visible) {
        game.spider1.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider1.visible && !game.spider3.visible) {
        game.spider3.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (!game.spider1.visible && game.spider3.visible) {
        game.spider1.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider1.visible && game.spider3.visible) {
        visibleSpiders = visibleSpiders;
        game.failureShortSound.play();
      }
      game.setVisibleSpider(6);
    } else {
      game.failureShortSound.play();
    }
    console.log(visibleSpiders);
    if (visibleSpiders === 7) {
      game.wonSound.play();
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    }

    // CIRCLE 7
  } else if (mouseX > 120 && mouseX < 190 && mouseY < 185 && mouseY > 115) {
    if (!game.spider7.visible) {
      if (!game.spider2.visible && !game.spider4.visible) {
        game.spider2.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider2.visible && !game.spider4.visible) {
        game.spider4.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (!game.spider2.visible && game.spider4.visible) {
        game.spider2.visible = true;
        visibleSpiders++;
        game.successShortSound.play();
      } else if (game.spider2.visible && game.spider4.visible) {
        visibleSpiders = visibleSpiders;
        game.failureShortSound.play();
      }
      game.setVisibleSpider(7);
    } else {
      game.failureShortSound.play();
    }

    console.log(visibleSpiders);
    if (visibleSpiders === 7) {
      game.wonSound.play();
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    }

    // RESTART
  } else if (mouseX > 570 && mouseX < 790 && mouseY < 70 && mouseY > 0) {
    game.lostSound.play();
    game.lostSound.playbackRate = 1.5;
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
  console.log(
    game.spider0.visible,
    game.spider1.visible,
    game.spider2.visible,
    game.spider3.visible,
    game.spider4.visible,
    game.spider5.visible,
    game.spider6.visible,
    game.spider7.visible
  );
}
