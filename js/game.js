class Game {
  constructor() {
    this.spider0 = new Spider(275, -5);
    this.spider1 = new Spider(470, 75);
    this.spider2 = new Spider(555, 275);
    this.spider3 = new Spider(470, 475);
    this.spider4 = new Spider(275, 555);
    this.spider5 = new Spider(80, 475);
    this.spider6 = new Spider(-5, 275);
    this.spider7 = new Spider(80, 75);
  }
  preload() {
    this.spider0.image = loadImage('../assets/spider-pos0.png');
    this.spider1.image = loadImage('../assets/spider-pos1.png');
    this.spider2.image = loadImage('../assets/spider-pos2.png');
    this.spider3.image = loadImage('../assets/spider-pos3.png');
    this.spider4.image = loadImage('../assets/spider-pos4.png');
    this.spider5.image = loadImage('../assets/spider-pos5.png');
    this.spider6.image = loadImage('../assets/spider-pos6.png');
    this.spider7.image = loadImage('../assets/spider-pos7.png');
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

  setVisibleSpider(index) {
    // let randInd = Math.floor(Math.random() * 2);
    switch (index) {
      default:
        if (this.spider3.visible === true) {
          this.spider3.setVisibleSpider();
        } else {
          this.spider5.setVisibleSpider();
        }
      case 1:
        if (this.spider4.visible === true) {
          this.spider4.setVisibleSpider();
        } else {
          this.spider6.setVisibleSpider();
        }
      case 2:
        if (this.spider5.visible === true) {
          this.spider5.setVisibleSpider();
        } else {
          this.spider7.setVisibleSpider();
        }
      case 3:
        if (this.spider0.visible === true) {
          this.spider0.setVisibleSpider();
        } else {
          this.spider6.setVisibleSpider();
        }
      case 4:
        if (this.spider1.visible === true) {
          this.spider1.setVisibleSpider();
        } else {
          this.spider7.setVisibleSpider();
        }
      case 5:
        if (this.spider0.visible === true) {
          this.spider0.setVisibleSpider();
        } else {
          this.spider2.setVisibleSpider();
        }
      case 6:
        if (this.spider1.visible === true) {
          this.spider1.setVisibleSpider();
        } else {
          this.spider3.setVisibleSpider();
        }
      case 7:
        if (this.spider2.visible === true) {
          this.spider2.setVisibleSpider();
        } else {
          this.spider4.setVisibleSpider();
        }
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
