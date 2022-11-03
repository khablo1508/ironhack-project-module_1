class Game {
  constructor() {
    this.spiders = [
      new Spider(WIDTH * 0.39, HEIGHT * -0.007),
      new Spider(WIDTH * 0.67, HEIGHT * 0.107),
      new Spider(WIDTH * 0.79, HEIGHT * 0.39),
      new Spider(WIDTH * 0.67, HEIGHT * 0.68),
      new Spider(WIDTH * 0.39, HEIGHT * 0.79),
      new Spider(WIDTH * 0.114, HEIGHT * 0.68),
      new Spider(WIDTH * -0.007, HEIGHT * 0.39),
      new Spider(WIDTH * 0.114, HEIGHT * 0.107),
    ];
    this.visibleSpiders = 0;
    this.failureShortSound = new Audio('../assets/failure-short.mp3');
    this.successShortSound = new Audio('../assets/ratchet-short.mp3');
    this.wonSound = new Audio('../assets/won-long.mp3');
    this.lostSound = new Audio('../assets/lost-long.mp3');
    this.font;
  }
  preload() {
    this.font = loadFont('../assets/ShadowsIntoLight.ttf');
    this.spiders.forEach((spider, index) => {
      spider.image = loadImage(`../assets/spider-pos${index}.png`);
    });
  }

  drawButton() {
    // restart button
    stroke('#fff4a3');
    rect(WIDTH * 0.83, HEIGHT * 0.03, WIDTH * 0.14, WIDTH * 0.071, 20);

    // text
    text('Restart?', WIDTH * 0.86, HEIGHT * 0.071);
    fill('#174366');
    textSize(16);
    textFont('ShadowsIntoLight');
  }

  drawBigFieldCircle() {
    // big yellow circle
    stroke('#000');
    strokeWeight(6);
    fill('#fff4a3');
    circle(WIDTH / 2, HEIGHT / 2, WIDTH * 0.857);
  }
  drawSmallerFieldCircle() {
    // smaller light blue circle inside of the yellow circle
    stroke('#000');
    strokeWeight(4);
    fill('#0171a1');
    circle(WIDTH / 2, HEIGHT / 2, WIDTH * 0.743);
  }

  drawButtonCircles() {
    noStroke();
    fill('#ff1d00');
    //multiple middle circles
    // 0 & 4
    circle(WIDTH / 2, HEIGHT * 0.1, WIDTH * 0.045);
    circle(WIDTH / 2, HEIGHT * 0.9, WIDTH * 0.045);

    // 7 & 1
    circle(WIDTH * 0.22, HEIGHT * 0.215, WIDTH * 0.045);
    circle(WIDTH * 0.78, HEIGHT * 0.215, WIDTH * 0.045);

    // 6 & 2
    circle(WIDTH * 0.1, HEIGHT / 2, WIDTH * 0.045);
    circle(WIDTH * 0.9, HEIGHT / 2, WIDTH * 0.045);

    // 5 & 3//
    circle(WIDTH * 0.22, HEIGHT * 0.785, WIDTH * 0.045);
    circle(WIDTH * 0.78, HEIGHT * 0.785, WIDTH * 0.045);
  }

  drawTinyCircles() {
    noStroke();
    fill('#ff1d00');

    circle(WIDTH * 0.35, HEIGHT * 0.13, WIDTH * 0.023);
    circle(WIDTH * 0.65, HEIGHT * 0.13, WIDTH * 0.023);

    circle(WIDTH * 0.35, HEIGHT * 0.87, WIDTH * 0.023);
    circle(WIDTH * 0.65, HEIGHT * 0.87, WIDTH * 0.023);

    circle(WIDTH * 0.13, HEIGHT * 0.35, WIDTH * 0.023);
    circle(WIDTH * 0.87, HEIGHT * 0.35, WIDTH * 0.023);

    circle(WIDTH * 0.13, HEIGHT * 0.65, WIDTH * 0.023);
    circle(WIDTH * 0.87, HEIGHT * 0.65, WIDTH * 0.023);
  }

  drawStar() {
    stroke('#fff');
    strokeWeight(6);
    // 1 to 6
    line(WIDTH / 2, HEIGHT * 0.135, WIDTH * 0.236, HEIGHT * 0.75);
    // 1 to 4
    line(WIDTH / 2, HEIGHT * 0.135, WIDTH * 0.76, HEIGHT * 0.75);
    // 4 to 7
    line(WIDTH * 0.76, HEIGHT * 0.75, WIDTH * 0.135, HEIGHT / 2);
    // 7 to 2
    line(WIDTH * 0.135, HEIGHT / 2, WIDTH * 0.75, HEIGHT * 0.236);
    // 2 to 5
    line(WIDTH * 0.75, HEIGHT * 0.236, WIDTH / 2, HEIGHT * 0.86);
    // 5 to 8
    line(WIDTH / 2, HEIGHT * 0.86, WIDTH * 0.236, HEIGHT * 0.243);
    // 8 to 3
    line(WIDTH * 0.236, HEIGHT * 0.243, WIDTH * 0.86, HEIGHT / 2);
    // 3 to 6
    line(WIDTH * 0.86, HEIGHT / 2, WIDTH * 0.236, HEIGHT * 0.75);
  }

  checkClick() {
    if (
      mouseX > WIDTH * 0.43 &&
      mouseX < WIDTH * 0.57 &&
      mouseY < HEIGHT * 0.157 &&
      mouseY > HEIGHT * 0.028
    ) {
      if (!this.spiders[0].visible) {
        if (!this.spiders[3].visible && !this.spiders[5].visible) {
          this.spiders[3].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[3].visible && !this.spiders[5].visible) {
          this.spiders[5].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (!this.spiders[3].visible && this.spiders[5].visible) {
          this.spiders[3].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[3].visible && this.spiders[5].visible) {
          this.visibleSpiders = this.visibleSpiders;
          this.failureShortSound.play();
        }
      } else {
        this.failureShortSound.play();
      }
      // check if won
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 1
    } else if (
      mouseX > WIDTH * 0.715 &&
      mouseX < WIDTH * 0.84 &&
      mouseY < HEIGHT * 0.28 &&
      mouseY > HEIGHT * 0.14
    ) {
      if (!this.spiders[1].visible) {
        if (!this.spiders[4].visible && !this.spiders[6].visible) {
          this.spiders[4].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[4].visible && !this.spiders[6].visible) {
          this.spiders[6].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (!this.spiders[4].visible && this.spiders[6].visible) {
          this.spiders[4].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[4].visible && this.spiders[6].visible) {
          this.visibleSpiders = this.visibleSpiders;
          this.failureShortSound.play();
        }
      } else {
        this.failureShortSound.play();
      }
      // check if won
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 2
    } else if (
      mouseX > WIDTH * 0.8 &&
      mouseX < WIDTH * 0.97 &&
      mouseY < HEIGHT * 0.57 &&
      mouseY > HEIGHT * 0.43
    ) {
      if (!this.spiders[2].visible) {
        if (!this.spiders[5].visible && !this.spiders[7].visible) {
          this.spiders[5].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[5].visible && !this.spiders[7].visible) {
          this.spiders[7].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (!this.spiders[5].visible && this.spiders[7].visible) {
          this.spiders[5].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[5].visible && this.spiders[7].visible) {
          this.visibleSpiders = this.visibleSpiders;
          this.failureShortSound.play();
        }
      } else {
        this.failureShortSound.play();
      }
      // check if won
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 3
    } else if (
      mouseX > WIDTH * 0.71 &&
      mouseX < WIDTH * 0.86 &&
      mouseY < HEIGHT * 0.86 &&
      mouseY > HEIGHT * 0.71
    ) {
      if (!this.spiders[3].visible) {
        if (!this.spiders[6].visible && !this.spiders[0].visible) {
          this.spiders[6].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[6].visible && !this.spiders[0].visible) {
          this.spiders[0].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (!this.spiders[6].visible && this.spiders[0].visible) {
          this.spiders[6].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[6].visible && this.spiders[6].visible) {
          this.visibleSpiders = this.visibleSpiders;
          this.failureShortSound.play();
        }
      } else {
        this.failureShortSound.play();
      }
      // check if won
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 4
    } else if (
      mouseX > WIDTH * 0.43 &&
      mouseX < WIDTH * 0.57 &&
      mouseY < HEIGHT * 0.98 &&
      mouseY > HEIGHT * 0.83
    ) {
      if (!this.spiders[4].visible) {
        if (!this.spiders[7].visible && !this.spiders[1].visible) {
          this.spiders[7].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[7].visible && !this.spiders[1].visible) {
          this.spiders[1].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (!this.spiders[7].visible && this.spiders[1].visible) {
          this.spiders[7].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[7].visible && this.spiders[1].visible) {
          this.visibleSpiders = this.visibleSpiders;
          this.failureShortSound.play();
        }
      } else {
        this.failureShortSound.play();
      }
      // check if won
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 5
    } else if (
      mouseX > WIDTH * 0.14 &&
      mouseX < WIDTH * 0.28 &&
      mouseY < HEIGHT * 0.86 &&
      mouseY > HEIGHT * 0.71
    ) {
      if (!this.spiders[5].visible) {
        if (!this.spiders[2].visible && !this.spiders[0].visible) {
          this.spiders[0].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[0].visible && !this.spiders[2].visible) {
          this.spiders[2].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (!this.spiders[0].visible && this.spiders[2].visible) {
          this.spiders[0].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[0].visible && this.spiders[2].visible) {
          this.visibleSpiders = this.visibleSpiders;
          this.failureShortSound.play();
        }
      } else {
        this.failureShortSound.play();
      }
      // check if won
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 6
    } else if (
      mouseX > WIDTH * 0.028 &&
      mouseX < WIDTH * 0.17 &&
      mouseY < HEIGHT * 0.57 &&
      mouseY > HEIGHT * 0.43
    ) {
      if (!this.spiders[6].visible) {
        if (!this.spiders[1].visible && !this.spiders[3].visible) {
          this.spiders[1].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[1].visible && !this.spiders[3].visible) {
          this.spiders[3].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (!this.spiders[1].visible && this.spiders[3].visible) {
          this.spiders[1].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[1].visible && this.spiders[3].visible) {
          this.visibleSpiders = this.visibleSpiders;
          this.failureShortSound.play();
        }
      } else {
        this.failureShortSound.play();
      }
      // check if won
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 7
    } else if (
      mouseX > WIDTH * 0.14 &&
      mouseX < WIDTH * 0.28 &&
      mouseY < HEIGHT * 0.28 &&
      mouseY > HEIGHT * 0.14
    ) {
      if (!this.spiders[7].visible) {
        if (!this.spiders[2].visible && !this.spiders[4].visible) {
          this.spiders[2].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[2].visible && !this.spiders[4].visible) {
          this.spiders[4].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (!this.spiders[2].visible && this.spiders[4].visible) {
          this.spiders[2].visible = true;
          this.visibleSpiders++;
          this.successShortSound.play();
        } else if (this.spiders[2].visible && this.spiders[4].visible) {
          this.visibleSpiders = this.visibleSpiders;
          this.failureShortSound.play();
        }
      } else {
        this.failureShortSound.play();
      }
      // check if won
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // RESTART
    } else if (
      mouseX > WIDTH * 0.814 &&
      mouseX < WIDTH &&
      mouseY < HEIGHT * 0.1 &&
      mouseY > 0
    ) {
      this.lostSound.play();
      this.lostSound.playbackRate = 1.5;
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    }
  }
}

class Spider {
  constructor(x, y) {
    this.image;
    this.x = x;
    this.y = y;
    this.visible = false;
  }

  setVisibleSpider() {
    if (this.visible) {
      image(this.image, this.x, this.y, WIDTH * 0.215, HEIGHT * 0.215);
    }
  }
}
