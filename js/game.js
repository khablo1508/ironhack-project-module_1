class Game {
  constructor() {
    this.spiders = [
      new Spider(275, -5),
      new Spider(470, 75),
      new Spider(555, 275),
      new Spider(470, 475),
      new Spider(275, 555),
      new Spider(80, 475),
      new Spider(-5, 275),
      new Spider(80, 75),
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
    rect(580, 20, 100, 50, 20);

    // text
    fill('#174366');
    text('Restart?', 605, 50);
    textSize(16);
    textFont('ShadowsIntoLight');
  }

  drawBigFieldCircle() {
    // big yellow circle
    stroke('#000');
    strokeWeight(6);
    fill('#fff4a3');
    circle(350, 350, 600);
  }
  drawSmallerFieldCircle() {
    // smaller light blue circle inside of the yellow circle
    stroke('#000');
    strokeWeight(4);
    fill('#0171a1');
    circle(350, 350, 520);
  }

  drawButtonCircles() {
    noStroke();
    fill('#ff1d00');
    //multiple middle circles
    // 0 & 4
    circle(350, 70, 32);
    circle(350, 630, 32);

    // 7 & 1
    circle(155, 150, 32);
    circle(545, 150, 32);

    // 6 & 2
    circle(70, 350, 32);
    circle(630, 350, 32);

    // 5 & 3//
    circle(155, 550, 32);
    circle(545, 550, 32);
  }

  drawTinyCircles() {
    noStroke();
    fill('#ff1d00');

    circle(245, 92, 16);
    circle(455, 92, 16);

    circle(245, 608, 16);
    circle(455, 608, 16);

    circle(92, 245, 16);
    circle(608, 245, 16);

    circle(92, 455, 16);
    circle(608, 455, 16);
  }

  drawStar() {
    stroke('#fff');
    strokeWeight(6);
    // 1 to 6
    line(350, 95, 165, 530);
    // 1 to 4
    line(350, 95, 533, 530);
    // 4 to 7
    line(533, 530, 94, 350);
    // 7 to 2
    line(94, 350, 528, 165);
    // 2 to 5
    line(528, 165, 350, 605);
    // 5 to 8
    line(350, 605, 167, 170);
    // 8 to 3
    line(167, 170, 606, 350);
    // 3 to 6
    line(606, 350, 165, 530);
  }

  // drawPopup() {
  //   stroke('#ff1d00');
  //   strokeWeight(10);
  //   fill('#fff4a3');
  //   circle(350, 350, 680);
  // }

  checkClick() {
    if (mouseX > 300 && mouseX < 400 && mouseY < 110 && mouseY > 20) {
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
      console.log(this.visibleSpiders);
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 1
    } else if (mouseX > 500 && mouseX < 590 && mouseY < 200 && mouseY > 100) {
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
      console.log(this.visibleSpiders);
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 2
    } else if (mouseX > 565 && mouseX < 685 && mouseY < 400 && mouseY > 300) {
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
      console.log(this.visibleSpiders);
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 3
    } else if (mouseX > 500 && mouseX < 600 && mouseY < 600 && mouseY > 500) {
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
      console.log(this.visibleSpiders);
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 4
    } else if (mouseX > 300 && mouseX < 400 && mouseY < 685 && mouseY > 585) {
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
      console.log(this.visibleSpiders);
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 5
    } else if (mouseX > 100 && mouseX < 200 && mouseY < 600 && mouseY > 500) {
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
      console.log(this.visibleSpiders);
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 6
    } else if (mouseX > 20 && mouseX < 120 && mouseY < 400 && mouseY > 300) {
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
      console.log(this.visibleSpiders);
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // CIRCLE 7
    } else if (mouseX > 100 && mouseX < 200 && mouseY < 200 && mouseY > 100) {
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

      console.log(this.visibleSpiders);
      if (this.visibleSpiders === 7) {
        this.wonSound.play();
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      }

      // RESTART
    } else if (mouseX > 570 && mouseX < 790 && mouseY < 70 && mouseY > 0) {
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
      image(this.image, this.x, this.y, 150, 150);
    }
  }
}
