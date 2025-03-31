
let dgcentipede22;
let centipedes2 = []; 
let scaleChange = 1; 
let kirbyArray = [];

let kirbys = [];
let dgcentipede23;
let centipedes = [];
let sinArray = new Array(15);


let centipedes1 = [];
let centipedes3 = [];
let centipedes6 = []; 

function setup() {
  createCanvas(1000, 1500);
  
  textSize(18);
  let col = color(20,180);
  for (let i = 0; i < 5; i++) { 
    centipedes1.push(new dgCentipede22());
    centipedes1[i].loX = random(width);
    centipedes1[i].loY = random(height);
  }

  dgcentipede22 = new dgCentipede22();
  for (let i = 0; i < 15; i++) {
    let kirby = new afKirby(color(random(255), random(255), random(255)), random(width), random(height));
    kirbyArray.push(kirby);
}
   s1 = new dgCentipede21(0, 200,200, color(0,100,255,120));
   s2 = new dgCentipede21(5,0, 400,100, color(254,60,0,180));
 
   for (let i = 0; i < sinArray.length; i++) {
  sinArray[i] = new dgCentipede21(8,i*10, 300,500, color(254,random(120),0,200));
   }

   for (let i = 0; i < 15; i++) {
    let colorValue = color(random(255), random(255), random(255));
    let xpos = random(width);
    let ypos = random(height);
    let Number = i + 1; 
    centipedes.push(new dgCentipede23(colorValue, xpos, ypos, Number));
 
  }
  for (let i = 0; i < 15; i++) { 
    let color = [random(255), random(255), random(255)]; 
    let x = random(width); 
    let y = random(height); 
    kirbys.push(new afKirby(color, x, y)); 
}

for (let i = 0; i < 15; i++) {
  centipedes2.push(new dgCentipede24());
}
for (let i = 0; i < 10; i++) {
  centipedes6.push(new dgCentipede26()); 
}


console.log("Number of centipedes: " + centipedes6.length);

}


function draw() {
  background(20, 250, 20);
  for (let centipede6 of centipedes6) {
    centipede6.draw();
  }
  for (let centipede1 of centipedes1) {
    centipede1.draw(); 
  }
  dgcentipede22.draw();
  

  for (let kirby of kirbyArray) {
    kirby.move();
    kirby.display();
}
for (let centipede of centipedes) {
  centipede.draw();
  centipede.drift();
}
for (let centipede2 of centipedes2) {
 
  centipede2.scaleFactor = scaleChange; 
  centipede2.draw(); 
}
for (let centipede3 of centipedes3) {
  centipede3.draw();
}
}

function mousePressed() {
  centipedes6.push(new dgCentipede26()); 
  console.log("new cand total count: " + centipedes6.length);


}

function keyPressed() {

  if (key === '6') {

    scaleChange *= 1.5; 

  }
  if (key === '2') {
    for (let kirby of kirbyArray) {
        kirby.color = color(random(255), random(255), random(255)); 
    }
}

else if (key === '3') {
    for (let kirby of kirbyArray) {
        kirby.color = kirby.color; 
        kirby.sizeFactor *= 0.9; 
    }
}

else if (key === '4') {
    for (let kirby of kirbyArray) {
        kirby.color = kirby.color; 
        kirby.sizeFactor *= 1.1; 
    }
}
if (key === 'B' || key === 'b') {
  let newKirby = new Kirby(color(random(255), random(255), random(255)), random(width), random(height));
  kirbyArray.push(newKirby);
}

}
function breakApartCentipedes() {
  for (let centipede3 of centipedes3) {
    centipede3.speedX = random(-10, 10); 
    centipede3.speedY = random(-10, 10);
  }
}

class dgCentipede21 {
  constructor() {
    this.counter = 0;
    this.clickCount = 0;
    this.speedX = random(-4, 4);
    this.speedY = random(-4, 4);
    this.loX = height / 2;
    this.loY = width / 2;
    this.loX2 = height / 2;
    this.loY2 = width / 2;
    this.speedX2 = random(-5, 5);
    this.speedY2 = random(-5, 5);
    this.counter1 = 45;
    this.counter2 = -45;
    this.counterR = 0;
    this.value = 0;
    this.factor = 2;
    this.x = width;
    
    angleMode(DEGREES);
  }



  draw() {
    this.pair();
  
  }

  dgnumbercount() {
    this.value += 1; 
  }
  
  pair() {
  
    this.counter += 5;


    if (this.loX2 < 0) this.speedX2 = -this.speedX2;
    if (this.loX2 > width) this.speedX2 = -this.speedX2;
    
    if ((this.loY2 < 0) || (this.loY2 > height)) this.speedY2 = -this.speedY2;

    this.loX2 += this.speedX2;
    this.loY2 += this.speedY2;


    this.dgsunandcentipede(this.loX2, this.loY2);
    
    rotate(8);
  
    this.dgLongColorfullcentipede(color(200, 120, 20), this.loX2, this.loY2, 15, 0.5);
    scale(1);
    this.dgShortplaincentipede(color(200, 200, random(400)), this.loX2, this.loY2, -180, 0.8);
  }

  dgdrawingaround() {

    push();
    translate(mouseX, mouseY);
    scale(0.3);
    this.dgLongColorfullcentipede(color(200, 120, 20));
    this.dgcentipederound((this.clickCount % 50) + 2);
    pop();
  }

  dgmousePressed() {
    this.clickCount++;
  }

  dgcentipederound(eyeCount) {
    let eyeDistance = 1000.0 / (eyeCount - 1);
    for (let i = 0; i < eyeCount; i++) {
      angleMode(DEGREES);
      rotate(100);

      fill(250, 0, 0);
      this.dgLongColorfullcentipede(-40, (i * eyeDistance), 0.1); 
      this.dgLongColorfullcentipede(80, (i * eyeDistance), 0.1);
    }
  }

  dgRedeyeSpin(lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(this.counter2));
    scale(sc);
    fill(250, 0, 0);
    ellipse(0, 0, 200, 200);  
    fill(60);
    ellipse(0, 0, 160, 160);
    fill(250, 0, 0);
    ellipse(0, 0, 159, 159);
    fill(0);
    ellipse(0, 0, 40, 40);
    fill(0);
    circle(-59, 50, 30);
    circle(2, -78, 30);
    circle(58, 50, 30);
  

    if (20 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);
      arc(-20, 68, 50, 30, 0, 100);
    }
    if (10 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);  
      arc(-20, 70, 50, 30, 0, 100);
    }
    if (15 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);   
      arc(-10, 70, 50, 30, 0, 100);
    }
    pop();
    this.counter2--;
  }

  dgYelloweyeSpin(lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(this.counter1));
    scale(sc);
    fill(255, 204, 0);
    circle(0, 0, 150);
    rotate(radians(this.counter1));
    fill(0);
    ellipse(0, 0, 110, 40);
    ellipse(0, 0, 25, 150);
    pop();
    this.counter1++;
  }

  dgLongColorfullcentipede(k, lx, ly, rot, sc) {
    push();
    translate(lx + 100, ly);
    rotate(rot);
    scale(sc + 0.1);
    this.dgbody1();
    this.dghead(k, 20, -15);
    this.dgRedeyeSpin(-25, -57, this.counter, 0.1);    
    this.dgYelloweyeSpin(65, -57, -this.counter, 0.1);
    this.dgarm(k, -50, 10); 
    this.dgarm(k, 30, 10); 
    this.dgbody2(k);
    this.dgbody3(k);
    this.dgbody4andtoysword(70, 0, 2, k);
    this.dgbody5andcirclefood(k);
    

    if (20 > 19) {
      angleMode(DEGREES);
      rotate(-10);
      this.dgarm2(k, -105, 90);
      this.dgarm2(k, -20, 90);
    }
    if (10 > 1) {
      angleMode(DEGREES);
      rotate(22);
      this.dgarm3(k, -50, 160);
      this.dgarm3(k, 38, 160);
    }
    if (101 > 1) {
      angleMode(DEGREES);
      rotate(40);
      this.dgarm4(k, 95, 150);
      this.dgarm4(k, 157, 150);    
    }
    if (95 > 1) {
      angleMode(DEGREES);
      rotate(-70);
      this.dgfinger(k, 50, 70);
      angleMode(DEGREES);
      rotate(40);
      this.dgfinger(k, 85, 25);
    }
    if (96 > 1) {
      angleMode(DEGREES);
      rotate(190);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    if (961 > 1) {
      translate(105, 75);
      angleMode(DEGREES);
      rotate(90);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    if (9161 > 1) {
      translate(105, 75);
      angleMode(DEGREES);
      rotate(-70);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    
    textSize(32);
    angleMode(DEGREES);
    rotate(-70);
    this.value += this.factor;
    text(this.value, -90, 70);

    pop();
  }

  dgShortplaincentipede(k, lx, ly, rot, sc) {
    push();
    translate(lx - 50, ly + 60);
    angleMode(DEGREES);
    rotate(270);
    let k2 = color(30);
    rotate(rot);
    scale(sc - 0.4);
    this.dgbody1();
    this.dghead(k2, 20, -15);
    this.dgRedeyeSpin(-25, -57, this.counter, 0.1);    
    this.dgYelloweyeSpin(65, -57, -this.counter, 0.1);
    this.dgarm(k2, -50, 10); 
    this.dgarm(k2, 30, 10); 
    translate(-115, -70);
    angleMode(DEGREES);
    rotate(-40);
    this.dgbody4andtoysword(k2);
    this.dgbody5andcirclefood(70, 0, 2, k2);

    if (101 > 1) {
      angleMode(DEGREES);
      rotate(50);
      this.dgarm4(k2, 90, 150);
      this.dgarm4(k2, 150, 150);    
    }
  
    if (96 > 1) {
      angleMode(DEGREES);
      rotate(180);
      scale(0.80);
      angleMode(DEGREES);
      rotate(190);
      this.dgfinger(k2, 80, 90);
      this.dgfinger(k2, 270, 60);
    } 
    pop();
  }

  dgbody1() {
    fill(250, 0, 50);
    rect(0, 0, 40, 80, 15, 15, 25, 25);
  }

  dghead(c, lx, ly) {
    push();
    fill(c);
    translate(lx, ly);
    ellipse(0, 0, 40, 40);
    ellipse(45, -42.5, 40, 40);
    ellipse(-45, -42.5, 40, 40);
    fill(250);
    ellipse(45, -42.5, 30, 30);
    ellipse(-45, -42.5, 30, 30);
    fill(0, 100, 255);
    angleMode(DEGREES);
    rotate(-45);
    ellipse(1, -21, 10, 44);
    angleMode(DEGREES);
    rotate(95);
    ellipse(1, -21, 10, 44);
    pop();
  }

  dgarm(c, lx, ly) {
    fill(250, 100, 0);
    rect(lx, ly, 60, 15, 10);
  }
  
  dgarm2(c, lx, ly) {
    fill(200, 200, 0);
    rect(lx, ly, 60, 15, 10);
  }

  dgarm3(c, lx, ly) {
    fill(c);
    rect(lx, ly, 60, 15, 10);
  }
  
  dgarm4(c, lx, ly) {
    fill(0, 250, 100);
    rect(lx, ly, 40, 15, 10);
  }

  dgfinger(c, lx, ly) {
    fill(250, 0, 0);
    rect(lx, ly, 20, 8, 10);
  }

  dgbody2() {
    this.x -= 1222;
    ellipse(this.x, 10, 50, 50);
    if (this.x < 0) {
      this.x = width; 
    }
    angleMode(DEGREES);
    rotate(-45);
    fill(200, 50, 150);
    rect(-59, 58, 40, 80, 15, 15, 25, 25);
  }

  dgbody3() {
    angleMode(DEGREES);
    rotate(24);
    fill(200, 200, 100);
    rect(-3, 128, 40, 80, 15, 15, 25, 25);
  }

  dgbody4andtoysword(xpos, ypos, circlefood) {
    angleMode(DEGREES);
    rotate(44);
    fill(200, 100, 200);
    rect(130, 120, 40, 80, 15, 15, 25, 25);

    if (circlefood == 2) {
      fill(20, 20, 200);
      rect(width / 2 + xpos - 240, height / 2 - 430 + ypos, 50, 8, 7);
      fill(250, 0, 0);
      rect(width / 2 + xpos - 227, height / 2 - 490 + ypos, 25, 60, 7);
      fill(300, 100, 0);
      rect(width / 2 + xpos - 224, height / 2 - 420 + ypos, 18, 30);
    }
  }

  dgbody5andcirclefood(xpos, ypos, circlefood) {
    if (circlefood == 2) {
      fill(20, 20, 200);
      circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 40, 50, 7);
      fill(250, 0, 0);
      circle(width / 2 + xpos - 151, height / 2 - 150 + ypos, 30, 10, 7);
      fill(300, 100, 0);
      circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 25, 50, 7);
    }
    angleMode(DEGREES);
    rotate(-54);
    fill(100, 200, 100);
    arc(-80, 250, 80, 80, 160, 95);
    arc(-80, 250, 80, 80, -this.counter, this.counter);
  }

  dgmoonandcentipede(lx, ly) {
    strokeWeight(4);
    fill(250);
    point(lx - 10, ly - 10, 20);
    fill(0);
    circle(lx, ly, 70);
    fill(180);
    ellipse(lx, ly, 25, 25);
    fill(0);
    ellipse(lx - 4, ly - 4, 17, 17);
    fill(250);
    circle(lx + 15, ly + 15, 8);
    circle(lx - 15, ly - 15, 8);
    circle(lx + 15, ly - 15, 8);
    circle(lx - 15, ly + 20, 8);
    circle(lx - 18, ly - 18, 8);
  }

  dgsunandcentipede(lx, ly) {
    strokeWeight(4);
    fill(300, 100, 0);
    point(lx - 10, ly - 10, 20);
    fill(200, 200, 0);
    circle(lx, ly, 70);
    fill(300, 10, 10);
    ellipse(lx, ly, 25, 25);
    fill(300, 10, 10);
    circle(lx + 15, ly + 15, 8);
    circle(lx - 15, ly - 15, 8);
    circle(lx + 15, ly - 15, 8);
    circle(lx - 15, ly + 20, 8);
    circle(lx - 18, ly - 18, 8);
  }

  dgCircleCentipedeWildChange() {
    let g = random(0.1);
    let m = mouseX;
    let q = mouseY;
    
    if (m < width / 2) {
      this.dgShortplaincentipede(color(200, 200, random(400)), this.loX, this.loY, g * 5, g * 2);
    }
    if (q < height / 2) {
      this.dgLongColorfullcentipede(color(200, 200, random(400)), this.loX, this.loY + 10, g * 20, g * 4.5);
    }
  }
}



class dgCentipede22 {
  constructor() {
    this.counter = 0;
    this.clickCount = 0;
    this.speedX = random(-4, 4);
    this.speedY = random(-4, 4);
    this.loX = height / 2;
    this.loY = width / 2;
    this.loX2 = height / 2;
    this.loY2 = width / 2;
    this.speedX2 = random(-5, 5);
    this.speedY2 = random(-5, 5);
    this.counter1 = 45;
    this.counter2 = -45;
    this.counterR = 0;
    this.value = 0;
    this.factor = 2;
    this.x = width;
    
    angleMode(DEGREES);
  }
  draw() {
    this.pair();
  }

  dgnumbercount() {
    this.value += 1; 
  }
  
  pair() {
    this.counter += 5;

    if (this.loX < 0) this.loX = width;
    if (this.loX > width) this.loX = 0;
    if (this.loY < 0) this.loY = height;
    if (this.loY > height) this.loY = 0;

    if (this.loX2 < 0) this.speedX2 = -this.speedX2;
    if (this.loX2 > width) this.speedX2 = -this.speedX2;
    if ((this.loY < 0) || (this.loY > height)) this.speedY = -this.speedY;
    if ((this.loY2 < 0) || (this.loY2 > height)) this.speedY2 = -this.speedY2;

    this.loX += this.speedX;
    this.loY += this.speedY;
    this.loX2 += this.speedX2;
    this.loY2 += this.speedY2;

    this.dgmoonandcentipede(this.loX, this.loY);
    this.dgLongColorfullcentipede(color(200, 120, 20), this.loX, this.loY, 15, 0.5);
    this.dgShortplaincentipede(color(200, 200, random(400)), this.loX, this.loY, -180, 0.8);
  }

  dgdrawingaround() {

    push();
    translate(mouseX, mouseY);
    scale(0.3);
    this.dgLongColorfullcentipede(color(200, 120, 20));
    this.dgcentipederound((this.clickCount % 50) + 2);
    pop();
  }

  dgmousePressed() {
    this.clickCount++;
  }

  dgcentipederound(eyeCount) {
    let eyeDistance = 1000.0 / (eyeCount - 1);
    for (let i = 0; i < eyeCount; i++) {
      angleMode(DEGREES);
      rotate(100);

      fill(250, 0, 0);
      this.dgLongColorfullcentipede(-40, (i * eyeDistance), 0.1); 
      this.dgLongColorfullcentipede(80, (i * eyeDistance), 0.1);
    }
  }

  dgRedeyeSpin(lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(this.counter2));
    scale(sc);
    fill(250, 0, 0);
    ellipse(0, 0, 200, 200);  
    fill(60);
    ellipse(0, 0, 160, 160);
    fill(250, 0, 0);
    ellipse(0, 0, 159, 159);
    fill(0);
    ellipse(0, 0, 40, 40);
    fill(0);
    circle(-59, 50, 30);
    circle(2, -78, 30);
    circle(58, 50, 30);
  

    if (20 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);
      arc(-20, 68, 50, 30, 0, 100);
    }
    if (10 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);  
      arc(-20, 70, 50, 30, 0, 100);
    }
    if (15 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);   
      arc(-10, 70, 50, 30, 0, 100);
    }
    pop();
    this.counter2--;
  }

  dgYelloweyeSpin(lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(this.counter1));
    scale(sc);
    fill(255, 204, 0);
    circle(0, 0, 150);
    rotate(radians(this.counter1));
    fill(0);
    ellipse(0, 0, 110, 40);
    ellipse(0, 0, 25, 150);
    pop();
    this.counter1++;
  }

  dgLongColorfullcentipede(k, lx, ly, rot, sc) {
    push();
    translate(lx + 100, ly);
    rotate(rot);
    scale(sc + 0.1);
    this.dgbody1();
    this.dghead(k, 20, -15);
    this.dgRedeyeSpin(-25, -57, this.counter, 0.1);    
    this.dgYelloweyeSpin(65, -57, -this.counter, 0.1);
    this.dgarm(k, -50, 10); 
    this.dgarm(k, 30, 10); 
    this.dgbody2(k);
    this.dgbody3(k);
    this.dgbody4andtoysword(70, 0, 2, k);
    this.dgbody5andcirclefood(k);
    

    if (20 > 19) {
      angleMode(DEGREES);
      rotate(-10);
      this.dgarm2(k, -105, 90);
      this.dgarm2(k, -20, 90);
    }
    if (10 > 1) {
      angleMode(DEGREES);
      rotate(22);
      this.dgarm3(k, -50, 160);
      this.dgarm3(k, 38, 160);
    }
    if (101 > 1) {
      angleMode(DEGREES);
      rotate(40);
      this.dgarm4(k, 95, 150);
      this.dgarm4(k, 157, 150);    
    }
    if (95 > 1) {
      angleMode(DEGREES);
      rotate(-70);
      this.dgfinger(k, 50, 70);
      angleMode(DEGREES);
      rotate(40);
      this.dgfinger(k, 85, 25);
    }
    if (96 > 1) {
      angleMode(DEGREES);
      rotate(190);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    if (961 > 1) {
      translate(105, 75);
      angleMode(DEGREES);
      rotate(90);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    if (9161 > 1) {
      translate(105, 75);
      angleMode(DEGREES);
      rotate(-70);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    
    textSize(32);
    angleMode(DEGREES);
    rotate(-70);
    this.value += this.factor;
    text(this.value, -90, 70);

    pop();
  }

  dgShortplaincentipede(k, lx, ly, rot, sc) {
    push();
    translate(lx - 50, ly + 60);
    angleMode(DEGREES);
    rotate(270);
    let k2 = color(30);
    rotate(rot);
    scale(sc - 0.4);
    this.dgbody1();
    this.dghead(k2, 20, -15);
    this.dgRedeyeSpin(-25, -57, this.counter, 0.1);    
    this.dgYelloweyeSpin(65, -57, -this.counter, 0.1);
    this.dgarm(k2, -50, 10); 
    this.dgarm(k2, 30, 10); 
    translate(-115, -70);
    angleMode(DEGREES);
    rotate(-40);
    this.dgbody4andtoysword(k2);
    this.dgbody5andcirclefood(70, 0, 2, k2);

    if (101 > 1) {
      angleMode(DEGREES);
      rotate(50);
      this.dgarm4(k2, 90, 150);
      this.dgarm4(k2, 150, 150);    
    }
  
    if (96 > 1) {
      angleMode(DEGREES);
      rotate(180);
      scale(0.80);
      angleMode(DEGREES);
      rotate(190);
      this.dgfinger(k2, 80, 90);
      this.dgfinger(k2, 270, 60);
    } 
    pop();
  }

  dgbody1() {
    fill(250, 0, 50);
    rect(0, 0, 40, 80, 15, 15, 25, 25);
  }

  dghead(c, lx, ly) {
    push();
    fill(c);
    translate(lx, ly);
    ellipse(0, 0, 40, 40);
    ellipse(45, -42.5, 40, 40);
    ellipse(-45, -42.5, 40, 40);
    fill(250);
    ellipse(45, -42.5, 30, 30);
    ellipse(-45, -42.5, 30, 30);
    fill(0, 100, 255);
    angleMode(DEGREES);
    rotate(-45);
    ellipse(1, -21, 10, 44);
    angleMode(DEGREES);
    rotate(95);
    ellipse(1, -21, 10, 44);
    pop();
  }

  dgarm(c, lx, ly) {
    fill(250, 100, 0);
    rect(lx, ly, 60, 15, 10);
  }
  
  dgarm2(c, lx, ly) {
    fill(200, 200, 0);
    rect(lx, ly, 60, 15, 10);
  }

  dgarm3(c, lx, ly) {
    fill(c);
    rect(lx, ly, 60, 15, 10);
  }
  
  dgarm4(c, lx, ly) {
    fill(0, 250, 100);
    rect(lx, ly, 40, 15, 10);
  }

  dgfinger(c, lx, ly) {
    fill(250, 0, 0);
    rect(lx, ly, 20, 8, 10);
  }

  dgbody2() {
    this.x -= 1222;
    ellipse(this.x, 10, 50, 50);
    if (this.x < 0) {
      this.x = width; 
    }
    angleMode(DEGREES);
    rotate(-45);
    fill(200, 50, 150);
    rect(-59, 58, 40, 80, 15, 15, 25, 25);
  }

  dgbody3() {
    angleMode(DEGREES);
    rotate(24);
    fill(200, 200, 100);
    rect(-3, 128, 40, 80, 15, 15, 25, 25);
  }

  dgbody4andtoysword(xpos, ypos, circlefood) {
    angleMode(DEGREES);
    rotate(44);
    fill(200, 100, 200);
    rect(130, 120, 40, 80, 15, 15, 25, 25);

    if (circlefood == 2) {
      fill(20, 20, 200);
      rect(width / 2 + xpos - 240, height / 2 - 430 + ypos, 50, 8, 7);
      fill(250, 0, 0);
      rect(width / 2 + xpos - 227, height / 2 - 490 + ypos, 25, 60, 7);
      fill(300, 100, 0);
      rect(width / 2 + xpos - 224, height / 2 - 420 + ypos, 18, 30);
    }
  }

  dgbody5andcirclefood(xpos, ypos, circlefood) {
    if (circlefood == 2) {
      fill(20, 20, 200);
      circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 40, 50, 7);
      fill(250, 0, 0);
      circle(width / 2 + xpos - 151, height / 2 - 150 + ypos, 30, 10, 7);
      fill(300, 100, 0);
      circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 25, 50, 7);
    }
    angleMode(DEGREES);
    rotate(-54);
    fill(100, 200, 100);
    arc(-80, 250, 80, 80, 160, 95);
    arc(-80, 250, 80, 80, -this.counter, this.counter);
  }

  dgmoonandcentipede(lx, ly) {
    strokeWeight(4);
    fill(250);
    point(lx - 10, ly - 10, 20);
    fill(0);
    circle(lx, ly, 70);
    fill(180);
    ellipse(lx, ly, 25, 25);
    fill(0);
    ellipse(lx - 4, ly - 4, 17, 17);
    fill(250);
    circle(lx + 15, ly + 15, 8);
    circle(lx - 15, ly - 15, 8);
    circle(lx + 15, ly - 15, 8);
    circle(lx - 15, ly + 20, 8);
    circle(lx - 18, ly - 18, 8);
  }

  dgsunandcentipede(lx, ly) {
    strokeWeight(4);
    fill(300, 100, 0);
    point(lx - 10, ly - 10, 20);
    fill(200, 200, 0);
    circle(lx, ly, 70);
    fill(300, 10, 10);
    ellipse(lx, ly, 25, 25);
    fill(300, 10, 10);
    circle(lx + 15, ly + 15, 8);
    circle(lx - 15, ly - 15, 8);
    circle(lx + 15, ly - 15, 8);
    circle(lx - 15, ly + 20, 8);
    circle(lx - 18, ly - 18, 8);
  }

  dgCircleCentipedeWildChange() {
    let g = random(0.1);
    let m = mouseX;
    let q = mouseY;
    
    if (m < width / 2) {
      this.dgShortplaincentipede(color(200, 200, random(400)), this.loX, this.loY, g * 5, g * 2);
    }
    if (q < height / 2) {
      this.dgLongColorfullcentipede(color(200, 200, random(400)), this.loX, this.loY + 10, g * 20, g * 4.5);
    }
  }
}



class dgCentipede23 {
  c;
  xpos;
  ypos;
  orifice;
  constructor(tempC,  tempXpos,  tempYpos,  oa) {
    this.counter = 0;
    this.clickCount = 0;
    this.speedX = random(-4, 4);
    this.speedY = random(-4, 4);
    this.loX = height / 2;
    this.loY = width / 2;
    this.loX2 = height / 2;
    this.loY2 = width / 2;
    this.speedX2 = random(-5, 5);
    this.speedY2 = random(-5, 5);
    this.counter1 = 45;
    this.counter2 = -45;
    this.counterR = 0;
    this.value = 0;
    this.factor = 2;
    this.x = width;
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.orifice =  "Centipede " + oa;

    angleMode(DEGREES);
  }



  draw() {
    this.pair();

  }

  dgnumbercount() {
    this.value += 1; 
  }
  
  pair() {

 
    this.dgLongColorfullcentipede(color(100, 200, random(400)), width / 4, height / 3, -40, 1);
   
    

   
  }

  dgdrawingaround() {

    push();
    translate(mouseX, mouseY);
    scale(0.3);
    this.dgLongColorfullcentipede(color(200, 120, 20));
    this.dgcentipederound((this.clickCount % 50) + 2);
    pop();
  }

  dgcentipederound(eyeCount) {
    let eyeDistance = 1000.0 / (eyeCount - 1);
    for (let i = 0; i < eyeCount; i++) {
      angleMode(DEGREES);
      rotate(100);

      fill(250, 0, 0);
      this.dgLongColorfullcentipede(-40, (i * eyeDistance), 0.1); 
      this.dgLongColorfullcentipede(80, (i * eyeDistance), 0.1);
    }
  }

  dgRedeyeSpin(lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(this.counter2));
    scale(sc);
    fill(250, 0, 0);
    ellipse(0, 0, 200, 200);  
    fill(60);
    ellipse(0, 0, 160, 160);
    fill(250, 0, 0);
    ellipse(0, 0, 159, 159);
    fill(0);
    ellipse(0, 0, 40, 40);
    fill(0);
    circle(-59, 50, 30);
    circle(2, -78, 30);
    circle(58, 50, 30);
  

    if (20 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);
      arc(-20, 68, 50, 30, 0, 100);
    }
    if (10 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);  
      arc(-20, 70, 50, 30, 0, 100);
    }
    if (15 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);   
      arc(-10, 70, 50, 30, 0, 100);
    }
    pop();
    this.counter2--;
  }

  dgYelloweyeSpin(lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(this.counter1));
    scale(sc);
    fill(255, 204, 0);
    circle(0, 0, 150);
    rotate(radians(this.counter1));
    fill(0);
    ellipse(0, 0, 110, 40);
    ellipse(0, 0, 25, 150);
    pop();
    this.counter1++;
  }

  dgLongColorfullcentipede(k, lx, ly, rot, sc) {
    push();
    translate(lx + 100, ly);
    rotate(rot);
    scale(sc + 0.1);
    this.dgbody1();
    this.dghead(k, 20, -15);
    this.dgRedeyeSpin(-25, -57, this.counter, 0.1);    
    this.dgYelloweyeSpin(65, -57, -this.counter, 0.1);
    this.dgarm(k, -50, 10); 
    this.dgarm(k, 30, 10); 
    this.dgbody2(k);
    this.dgbody3(k);
    this.dgbody4andtoysword(70, 0, 2, k);
    this.dgbody5andcirclefood(k);
    

    if (20 > 19) {
      angleMode(DEGREES);
      rotate(-10);
      this.dgarm2(k, -105, 90);
      this.dgarm2(k, -20, 90);
    }
    if (10 > 1) {
      angleMode(DEGREES);
      rotate(22);
      this.dgarm3(k, -50, 160);
      this.dgarm3(k, 38, 160);
    }
    if (101 > 1) {
      angleMode(DEGREES);
      rotate(40);
      this.dgarm4(k, 95, 150);
      this.dgarm4(k, 157, 150);    
    }
    if (95 > 1) {
      angleMode(DEGREES);
      rotate(-70);
      this.dgfinger(k, 50, 70);
      angleMode(DEGREES);
      rotate(40);
      this.dgfinger(k, 85, 25);
    }
    if (96 > 1) {
      angleMode(DEGREES);
      rotate(190);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    if (961 > 1) {
      translate(105, 75);
      angleMode(DEGREES);
      rotate(90);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    if (9161 > 1) {
      translate(105, 75);
      angleMode(DEGREES);
      rotate(-70);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    
    textSize(32);
    angleMode(DEGREES);
    rotate(-70);
    this.value += this.factor;
    text(this.value, -90, 70);

    pop();
  }

  

  dgbody1() {
    fill(250, 0, 50);
    rect(0, 0, 40, 80, 15, 15, 25, 25);
  }

  dghead(c, lx, ly) {
    push();
    fill(c);
    translate(lx, ly);
    ellipse(0, 0, 40, 40);
    ellipse(45, -42.5, 40, 40);
    ellipse(-45, -42.5, 40, 40);
    fill(250);
    ellipse(45, -42.5, 30, 30);
    ellipse(-45, -42.5, 30, 30);
    fill(0, 100, 255);
    angleMode(DEGREES);
    rotate(-45);
    ellipse(1, -21, 10, 44);
    angleMode(DEGREES);
    rotate(95);
    ellipse(1, -21, 10, 44);
    pop();
  }

  dgarm(c, lx, ly) {
    fill(250, 100, 0);
    rect(lx, ly, 60, 15, 10);
  }
  
  dgarm2(c, lx, ly) {
    fill(200, 200, 0);
    rect(lx, ly, 60, 15, 10);
  }

  dgarm3(c, lx, ly) {
    fill(c);
    rect(lx, ly, 60, 15, 10);
  }
  
  dgarm4(c, lx, ly) {
    fill(0, 250, 100);
    rect(lx, ly, 40, 15, 10);
  }

  dgfinger(c, lx, ly) {
    fill(250, 0, 0);
    rect(lx, ly, 20, 8, 10);
  }

  dgbody2() {
    this.x -= 1222;
    ellipse(this.x, 10, 50, 50);
    if (this.x < 0) {
      this.x = width; 
    }
    angleMode(DEGREES);
    rotate(-45);
    fill(200, 50, 150);
    rect(-59, 58, 40, 80, 15, 15, 25, 25);
  }

  dgbody3() {
    angleMode(DEGREES);
    rotate(24);
    fill(200, 200, 100);
    rect(-3, 128, 40, 80, 15, 15, 25, 25);
  }

  dgbody4andtoysword(xpos, ypos, circlefood) {
    angleMode(DEGREES);
    rotate(44);
    fill(200, 100, 200);
    rect(130, 120, 40, 80, 15, 15, 25, 25);

    if (circlefood == 2) {
      fill(20, 20, 200);
      rect(width / 2 + xpos - 240, height / 2 - 430 + ypos, 50, 8, 7);
      fill(250, 0, 0);
      rect(width / 2 + xpos - 227, height / 2 - 490 + ypos, 25, 60, 7);
      fill(300, 100, 0);
      rect(width / 2 + xpos - 224, height / 2 - 420 + ypos, 18, 30);
    }
  }

  dgbody5andcirclefood(xpos, ypos, circlefood) {
    if (circlefood == 2) {
      fill(20, 20, 200);
      circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 40, 50, 7);
      fill(250, 0, 0);
      circle(width / 2 + xpos - 151, height / 2 - 150 + ypos, 30, 10, 7);
      fill(300, 100, 0);
      circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 25, 50, 7);
    }
    angleMode(DEGREES);
    rotate(-54);
    fill(100, 200, 100);
    arc(-80, 250, 80, 80, 160, 95);
    arc(-80, 250, 80, 80, -this.counter, this.counter);
  }

  drift() {
    
    noStroke();
    fill(this.c);
    this.dgLongColorfullcentipede(color(100, 200, random(400)), this.xpos,this.ypos,random(15,20) +10,random(1,1));
   
    fill(250,0,0);
   
    text( this.orifice,this.xpos+15,this.ypos -115);
    this.xpos += random(-1,1);
    this.ypos += random(-1,1);
  }
}


class afKirby {
  constructor(color, x, y) {
      this.color = color; 
      this.x = x; 
      this.y = y; 
      this.eyeOffset = 5; 
      this.bluePupilOffsetX = 0; 
      this.bluePupilOffsetY = 0; 
      this.speed = createVector(random(-2, 2), random(-2, 2)); 
      this.sizeFactor = 1; 
  }

  move() {
      this.x += this.speed.x;
      this.y += this.speed.y;

    
      if (this.x < 0 || this.x > width) {
          this.speed.x *= -1; 
      }
      if (this.y < 0 || this.y > height) {
          this.speed.y *= -1; 
      }
  }

  display() {
      this.drawBody();
      this.drawBlush(); 
      this.drawEyes();
      this.drawMouth();
      this.drawFeet();
      this.drawArms(); 
  }

  drawBody() {
      push();
      translate(this.x, this.y);
      fill(this.color);
      stroke(0); 
      strokeWeight(4); 
      ellipse(0, 0, 120 * this.sizeFactor, 150 * this.sizeFactor); 
      pop();
  }

  drawBlush() {
      push();
      translate(this.x, this.y);
      fill(150, 50, 50); 
      noStroke(); 
      ellipse(-45 * this.sizeFactor, 0, 20 * this.sizeFactor, 10 * this.sizeFactor); 
      ellipse(45 * this.sizeFactor, 0, 20 * this.sizeFactor, 10 * this.sizeFactor); 
      pop();
  }

  drawEyes() {
      this.eye(-35 * this.sizeFactor, -40 * this.sizeFactor, 0); 
      this.eye(35 * this.sizeFactor, -40 * this.sizeFactor, random(-this.eyeOffset, this.eyeOffset)); // Right eye (bigger) with random offset
  }

  eye(lx, ly, offset) {
      push();
      translate(this.x, this.y);
      fill(255); 
      stroke(0); 
      strokeWeight(2);
      ellipse(lx * this.sizeFactor, ly * this.sizeFactor, 50 * this.sizeFactor, 40 * this.sizeFactor); 
      
    
      this.bluePupilOffsetX = random(-5 * this.sizeFactor, 5 * this.sizeFactor);
      this.bluePupilOffsetY = random(-3 * this.sizeFactor, 3 * this.sizeFactor);
      fill(0, 0, 255); 
      stroke(0); 
      strokeWeight(1); 
      ellipse(lx * this.sizeFactor + this.bluePupilOffsetX, ly * this.sizeFactor + this.bluePupilOffsetY, 15 * this.sizeFactor, 8 * this.sizeFactor); 

   
      fill(0); 
      ellipse(lx * this.sizeFactor + this.bluePupilOffsetX, ly * this.sizeFactor + this.bluePupilOffsetY, 7 * this.sizeFactor, 7 * this.sizeFactor); 
      
      fill(0, 0, 255); 
      ellipse(lx * this.sizeFactor + this.bluePupilOffsetX, ly * this.sizeFactor + this.bluePupilOffsetY + 4 * this.sizeFactor, 4 * this.sizeFactor, 4 * this.sizeFactor); // Smaller blue circle
      pop();
  }

  drawMouth() {
      push();
      translate(this.x, this.y);
      fill(255, 0, 0); 
      stroke(0); 
      strokeWeight(2); 
      arc(0, 20 * this.sizeFactor, 60 * this.sizeFactor, 40 * this.sizeFactor, 0, PI); 
      pop();
  }

  drawFeet() {
      push();
      translate(this.x, this.y);
      fill(255, 0, 0); 
      stroke(0); 
      strokeWeight(2); 
      ellipse(-30 * this.sizeFactor, 80 * this.sizeFactor, 30 * this.sizeFactor, 20 * this.sizeFactor); 
      ellipse(30 * this.sizeFactor, 80 * this.sizeFactor, 30 * this.sizeFactor, 20 * this.sizeFactor); 
      fill(0); 
      ellipse(-30 * this.sizeFactor, 85 * this.sizeFactor, 10 * this.sizeFactor, 10 * this.sizeFactor); 
      ellipse(30 * this.sizeFactor, 85 * this.sizeFactor, 10 * this.sizeFactor, 10 * this.sizeFactor); 
      pop();
  }

  drawArms() {
      push();
      translate(this.x, this.y);
      fill(this.color); 
      stroke(0); 
      strokeWeight(2); 
      ellipse(-60 * this.sizeFactor, 20 * this.sizeFactor, 30 * this.sizeFactor, 20 * this.sizeFactor); 
      ellipse(60 * this.sizeFactor, 20 * this.sizeFactor, 30 * this.sizeFactor, 20 * this.sizeFactor); 
      pop();
  }
}


class dgCentipede24 {
  
  constructor() {
    this.counter = 0;
    this.clickCount = 0;
    this.speedX = random(-4, 4);
    this.speedY = random(-4, 4);
    this.loX = height / 2;
    this.loY = width / 2;
    this.loX2 = height / 2;
    this.loY2 = width / 2;
    this.speedX2 = random(-5, 5);
    this.speedY2 = random(-5, 5);
    this.counter1 = 45;
    this.counter2 = -45;
    this.counterR = 0;
    this.value = 0;
    this.factor = 2;
    this.x = width;
    this.scaleFactor = 1; 

    angleMode(DEGREES);
  }
draw() {
  this.pair();

}

dgnumbercount() {
  this.value += 1; 
}

pair() {
  this.counter += 5;

  if (this.loX2 < 0) this.speedX2 = -this.speedX2;
  if (this.loX2 > width) this.speedX2 = -this.speedX2;

  if ((this.loY2 < 0) || (this.loY2 > height)) this.speedY2 = -this.speedY2;

  this.loX2 += this.speedX2;
  this.loY2 += this.speedY2;

  this.dgsunandcentipede(this.loX2, this.loY2);

  rotate(8);

  this.dgLongColorfullcentipede(color(200, 120, 20), this.loX2, this.loY2, 15, this.scaleFactor);
  scale(1);
  this.dgShortplaincentipede(color(200, 200, random(400)), this.loX2, this.loY2, -180, this.scaleFactor);
}

dgdrawingaround() {

  push();
  translate(mouseX, mouseY);
  scale(0.3);
  this.dgLongColorfullcentipede(color(200, 120, 20));
  this.dgcentipederound((this.clickCount % 50) + 2);
  pop();
}

dgmousePressed() {
  this.clickCount++;
}

dgcentipederound(eyeCount) {
  let eyeDistance = 1000.0 / (eyeCount - 1);
  for (let i = 0; i < eyeCount; i++) {
    angleMode(DEGREES);
    rotate(100);

    fill(250, 0, 0);
    this.dgLongColorfullcentipede(-40, (i * eyeDistance), 0.1); 
    this.dgLongColorfullcentipede(80, (i * eyeDistance), 0.1);
  }
}

dgRedeyeSpin(lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(radians(this.counter2));
  scale(sc);
  fill(250, 0, 0);
  ellipse(0, 0, 200, 200);  
  fill(60);
  ellipse(0, 0, 160, 160);
  fill(250, 0, 0);
  ellipse(0, 0, 159, 159);
  fill(0);
  ellipse(0, 0, 40, 40);
  fill(0);
  circle(-59, 50, 30);
  circle(2, -78, 30);
  circle(58, 50, 30);


  if (20 > 1) {
    angleMode(DEGREES);
    rotate(radians(this.counter2));
    angleMode(DEGREES);
    rotate(radians(this.counter2));
    fill(0);
    arc(-20, 68, 50, 30, 0, 100);
  }
  if (10 > 1) {
    angleMode(DEGREES);
    rotate(radians(this.counter2));
    angleMode(DEGREES);
    rotate(radians(this.counter2));
    fill(0);  
    arc(-20, 70, 50, 30, 0, 100);
  }
  if (15 > 1) {
    angleMode(DEGREES);
    rotate(radians(this.counter2));
    angleMode(DEGREES);
    rotate(radians(this.counter2));
    fill(0);   
    arc(-10, 70, 50, 30, 0, 100);
  }
  pop();
  this.counter2--;
}

dgYelloweyeSpin(lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(radians(this.counter1));
  scale(sc);
  fill(255, 204, 0);
  circle(0, 0, 150);
  rotate(radians(this.counter1));
  fill(0);
  ellipse(0, 0, 110, 40);
  ellipse(0, 0, 25, 150);
  pop();
  this.counter1++;
}

dgLongColorfullcentipede(k, lx, ly, rot, sc) {
  push();
  translate(lx + 100, ly);
  rotate(rot);
  scale(sc + 0.1);
  this.dgbody1();
  this.dghead(k, 20, -15);
  this.dgRedeyeSpin(-25, -57, this.counter, 0.1);    
  this.dgYelloweyeSpin(65, -57, -this.counter, 0.1);
  this.dgarm(k, -50, 10); 
  this.dgarm(k, 30, 10); 
  this.dgbody2(k);
  this.dgbody3(k);
  this.dgbody4andtoysword(70, 0, 2, k);
  this.dgbody5andcirclefood(k);
  

  if (20 > 19) {
    angleMode(DEGREES);
    rotate(-10);
    this.dgarm2(k, -105, 90);
    this.dgarm2(k, -20, 90);
  }
  if (10 > 1) {
    angleMode(DEGREES);
    rotate(22);
    this.dgarm3(k, -50, 160);
    this.dgarm3(k, 38, 160);
  }
  if (101 > 1) {
    angleMode(DEGREES);
    rotate(40);
    this.dgarm4(k, 95, 150);
    this.dgarm4(k, 157, 150);    
  }
  if (95 > 1) {
    angleMode(DEGREES);
    rotate(-70);
    this.dgfinger(k, 50, 70);
    angleMode(DEGREES);
    rotate(40);
    this.dgfinger(k, 85, 25);
  }
  if (96 > 1) {
    angleMode(DEGREES);
    rotate(190);
    this.dgfinger(k, 50, -22);
    angleMode(DEGREES);
    rotate(220);
    this.dgfinger(k, -48, 35);
  }
  if (961 > 1) {
    translate(105, 75);
    angleMode(DEGREES);
    rotate(90);
    this.dgfinger(k, 50, -22);
    angleMode(DEGREES);
    rotate(220);
    this.dgfinger(k, -48, 35);
  }
  if (9161 > 1) {
    translate(105, 75);
    angleMode(DEGREES);
    rotate(-70);
    this.dgfinger(k, 50, -22);
    angleMode(DEGREES);
    rotate(220);
    this.dgfinger(k, -48, 35);
  }
  
  textSize(32);
  angleMode(DEGREES);
  rotate(-70);
  this.value += this.factor;
  text(this.value, -90, 70);

  pop();
}

dgShortplaincentipede(k, lx, ly, rot, sc) {
  push();
  translate(lx - 50, ly + 60);
  angleMode(DEGREES);
  rotate(270);
  let k2 = color(30);
  rotate(rot);
  scale(sc - 0.4);
  this.dgbody1();
  this.dghead(k2, 20, -15);
  this.dgRedeyeSpin(-25, -57, this.counter, 0.1);    
  this.dgYelloweyeSpin(65, -57, -this.counter, 0.1);
  this.dgarm(k2, -50, 10); 
  this.dgarm(k2, 30, 10); 
  translate(-115, -70);
  angleMode(DEGREES);
  rotate(-40);
  this.dgbody4andtoysword(k2);
  this.dgbody5andcirclefood(70, 0, 2, k2);

  if (101 > 1) {
    angleMode(DEGREES);
    rotate(50);
    this.dgarm4(k2, 90, 150);
    this.dgarm4(k2, 150, 150);    
  }

  if (96 > 1) {
    angleMode(DEGREES);
    rotate(180);
    scale(0.80);
    angleMode(DEGREES);
    rotate(190);
    this.dgfinger(k2, 80, 90);
    this.dgfinger(k2, 270, 60);
  } 
  pop();
}

dgbody1() {
  fill(250, 0, 50);
  rect(0, 0, 40, 80, 15, 15, 25, 25);
}

dghead(c, lx, ly) {
  push();
  fill(c);
  translate(lx, ly);
  ellipse(0, 0, 40, 40);
  ellipse(45, -42.5, 40, 40);
  ellipse(-45, -42.5, 40, 40);
  fill(250);
  ellipse(45, -42.5, 30, 30);
  ellipse(-45, -42.5, 30, 30);
  fill(0, 100, 255);
  angleMode(DEGREES);
  rotate(-45);
  ellipse(1, -21, 10, 44);
  angleMode(DEGREES);
  rotate(95);
  ellipse(1, -21, 10, 44);
  pop();
}

dgarm(c, lx, ly) {
  fill(250, 100, 0);
  rect(lx, ly, 60, 15, 10);
}

dgarm2(c, lx, ly) {
  fill(200, 200, 0);
  rect(lx, ly, 60, 15, 10);
}

dgarm3(c, lx, ly) {
  fill(c);
  rect(lx, ly, 60, 15, 10);
}

dgarm4(c, lx, ly) {
  fill(0, 250, 100);
  rect(lx, ly, 40, 15, 10);
}

dgfinger(c, lx, ly) {
  fill(250, 0, 0);
  rect(lx, ly, 20, 8, 10);
}

dgbody2() {
  this.x -= 1222;
  ellipse(this.x, 10, 50, 50);
  if (this.x < 0) {
    this.x = width; 
  }
  angleMode(DEGREES);
  rotate(-45);
  fill(200, 50, 150);
  rect(-59, 58, 40, 80, 15, 15, 25, 25);
}

dgbody3() {
  angleMode(DEGREES);
  rotate(24);
  fill(200, 200, 100);
  rect(-3, 128, 40, 80, 15, 15, 25, 25);
}

dgbody4andtoysword(xpos, ypos, circlefood) {
  angleMode(DEGREES);
  rotate(44);
  fill(200, 100, 200);
  rect(130, 120, 40, 80, 15, 15, 25, 25);

  if (circlefood == 2) {
    fill(20, 20, 200);
    rect(width / 2 + xpos - 240, height / 2 - 430 + ypos, 50, 8, 7);
    fill(250, 0, 0);
    rect(width / 2 + xpos - 227, height / 2 - 490 + ypos, 25, 60, 7);
    fill(300, 100, 0);
    rect(width / 2 + xpos - 224, height / 2 - 420 + ypos, 18, 30);
  }
}

dgbody5andcirclefood(xpos, ypos, circlefood) {
  if (circlefood == 2) {
    fill(20, 20, 200);
    circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 40, 50, 7);
    fill(250, 0, 0);
    circle(width / 2 + xpos - 151, height / 2 - 150 + ypos, 30, 10, 7);
    fill(300, 100, 0);
    circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 25, 50, 7);
  }
  angleMode(DEGREES);
  rotate(-54);
  fill(100, 200, 100);
  arc(-80, 250, 80, 80, 160, 95);
  arc(-80, 250, 80, 80, -this.counter, this.counter);
}

dgmoonandcentipede(lx, ly) {
  strokeWeight(4);
  fill(250);
  point(lx - 10, ly - 10, 20);
  fill(0);
  circle(lx, ly, 70);
  fill(180);
  ellipse(lx, ly, 25, 25);
  fill(0);
  ellipse(lx - 4, ly - 4, 17, 17);
  fill(250);
  circle(lx + 15, ly + 15, 8);
  circle(lx - 15, ly - 15, 8);
  circle(lx + 15, ly - 15, 8);
  circle(lx - 15, ly + 20, 8);
  circle(lx - 18, ly - 18, 8);
}

dgsunandcentipede(lx, ly) {
  strokeWeight(4);
  fill(300, 100, 0);
  point(lx - 10, ly - 10, 20);
  fill(200, 200, 0);
  circle(lx, ly, 70);
  fill(300, 10, 10);
  ellipse(lx, ly, 25, 25);
  fill(300, 10, 10);
  circle(lx + 15, ly + 15, 8);
  circle(lx - 15, ly - 15, 8);
  circle(lx + 15, ly - 15, 8);
  circle(lx - 15, ly + 20, 8);
  circle(lx - 18, ly - 18, 8);
}

dgCircleCentipedeWildChange() {
  let g = random(0.1);
  let m = mouseX;
  let q = mouseY;
  
  if (m < width / 2) {
    this.dgShortplaincentipede(color(200, 200, random(400)), this.loX, this.loY, g * 5, g * 2);
  }
  if (q < height / 2) {
    this.dgLongColorfullcentipede(color(200, 200, random(400)), this.loX, this.loY + 10, g * 20, g * 4.5);
  }
}
}

class dgCentipede26 {
  constructor() {
    this.counter = 0;
    this.clickCount = 0;
    this.speedX = random(-4, 4);
    this.speedY = random(-4, 4);
    this.loX = height / 2;
    this.loY = width / 2;
    this.loX2 = height / 2;
    this.loY2 = width / 2;
    this.speedX2 = random(-5, 5);
    this.speedY2 = random(-5, 5);
    this.counter1 = 45;
    this.counter2 = -45;
    this.counterR = 0;
    this.value = 0;
    this.factor = 2;
    this.x = width;
    
    angleMode(DEGREES);
  }
  draw() {
    this.pair();
  }

  dgnumbercount() {
    this.value += 1; 
  }
  
  pair() {
    this.counter += 5;

    if (this.loX < 0) this.loX = width;
    if (this.loX > width) this.loX = 0;
    if (this.loY < 0) this.loY = height;
    if (this.loY > height) this.loY = 0;

    if (this.loX2 < 0) this.speedX2 = -this.speedX2;
    if (this.loX2 > width) this.speedX2 = -this.speedX2;
    if ((this.loY < 0) || (this.loY > height)) this.speedY = -this.speedY;
    if ((this.loY2 < 0) || (this.loY2 > height)) this.speedY2 = -this.speedY2;

    this.loX += this.speedX;
    this.loY += this.speedY;
    this.loX2 += this.speedX2;
    this.loY2 += this.speedY2;

    this.dgmoonandcentipede(this.loX, this.loY);
    this.dgLongColorfullcentipede(color(200, 120, 20), this.loX, this.loY, 15, 0.5);
    this.dgShortplaincentipede(color(200, 200, random(400)), this.loX, this.loY, -180, 0.8);
  }

  dgdrawingaround() {

    push();
    translate(mouseX, mouseY);
    scale(0.3);
    this.dgLongColorfullcentipede(color(200, 120, 20));
    this.dgcentipederound((this.clickCount % 50) + 2);
    pop();
  }

  dgmousePressed() {
    this.clickCount++;
  }

  dgcentipederound(eyeCount) {
    let eyeDistance = 1000.0 / (eyeCount - 1);
    for (let i = 0; i < eyeCount; i++) {
      angleMode(DEGREES);
      rotate(100);

      fill(250, 0, 0);
      this.dgLongColorfullcentipede(-40, (i * eyeDistance), 0.1); 
      this.dgLongColorfullcentipede(80, (i * eyeDistance), 0.1);
    }
  }

  dgRedeyeSpin(lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(this.counter2));
    scale(sc);
    fill(250, 0, 0);
    ellipse(0, 0, 200, 200);  
    fill(60);
    ellipse(0, 0, 160, 160);
    fill(250, 0, 0);
    ellipse(0, 0, 159, 159);
    fill(0);
    ellipse(0, 0, 40, 40);
    fill(0);
    circle(-59, 50, 30);
    circle(2, -78, 30);
    circle(58, 50, 30);
  

    if (20 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);
      arc(-20, 68, 50, 30, 0, 100);
    }
    if (10 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);  
      arc(-20, 70, 50, 30, 0, 100);
    }
    if (15 > 1) {
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      angleMode(DEGREES);
      rotate(radians(this.counter2));
      fill(0);   
      arc(-10, 70, 50, 30, 0, 100);
    }
    pop();
    this.counter2--;
  }

  dgYelloweyeSpin(lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(this.counter1));
    scale(sc);
    fill(255, 204, 0);
    circle(0, 0, 150);
    rotate(radians(this.counter1));
    fill(0);
    ellipse(0, 0, 110, 40);
    ellipse(0, 0, 25, 150);
    pop();
    this.counter1++;
  }

  dgLongColorfullcentipede(k, lx, ly, rot, sc) {
    push();
    translate(lx + 100, ly);
    rotate(rot);
    scale(sc + 0.1);
    this.dgbody1();
    this.dghead(k, 20, -15);
    this.dgRedeyeSpin(-25, -57, this.counter, 0.1);    
    this.dgYelloweyeSpin(65, -57, -this.counter, 0.1);
    this.dgarm(k, -50, 10); 
    this.dgarm(k, 30, 10); 
    this.dgbody2(k);
    this.dgbody3(k);
    this.dgbody4andtoysword(70, 0, 2, k);
    this.dgbody5andcirclefood(k);
    

    if (20 > 19) {
      angleMode(DEGREES);
      rotate(-10);
      this.dgarm2(k, -105, 90);
      this.dgarm2(k, -20, 90);
    }
    if (10 > 1) {
      angleMode(DEGREES);
      rotate(22);
      this.dgarm3(k, -50, 160);
      this.dgarm3(k, 38, 160);
    }
    if (101 > 1) {
      angleMode(DEGREES);
      rotate(40);
      this.dgarm4(k, 95, 150);
      this.dgarm4(k, 157, 150);    
    }
    if (95 > 1) {
      angleMode(DEGREES);
      rotate(-70);
      this.dgfinger(k, 50, 70);
      angleMode(DEGREES);
      rotate(40);
      this.dgfinger(k, 85, 25);
    }
    if (96 > 1) {
      angleMode(DEGREES);
      rotate(190);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    if (961 > 1) {
      translate(105, 75);
      angleMode(DEGREES);
      rotate(90);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    if (9161 > 1) {
      translate(105, 75);
      angleMode(DEGREES);
      rotate(-70);
      this.dgfinger(k, 50, -22);
      angleMode(DEGREES);
      rotate(220);
      this.dgfinger(k, -48, 35);
    }
    
    textSize(32);
    angleMode(DEGREES);
    rotate(-70);
    this.value += this.factor;
    text(this.value, -90, 70);

    pop();
  }

  dgShortplaincentipede(k, lx, ly, rot, sc) {
    push();
    translate(lx - 50, ly + 60);
    angleMode(DEGREES);
    rotate(270);
    let k2 = color(30);
    rotate(rot);
    scale(sc - 0.4);
    this.dgbody1();
    this.dghead(k2, 20, -15);
    this.dgRedeyeSpin(-25, -57, this.counter, 0.1);    
    this.dgYelloweyeSpin(65, -57, -this.counter, 0.1);
    this.dgarm(k2, -50, 10); 
    this.dgarm(k2, 30, 10); 
    translate(-115, -70);
    angleMode(DEGREES);
    rotate(-40);
    this.dgbody4andtoysword(k2);
    this.dgbody5andcirclefood(70, 0, 2, k2);

    if (101 > 1) {
      angleMode(DEGREES);
      rotate(50);
      this.dgarm4(k2, 90, 150);
      this.dgarm4(k2, 150, 150);    
    }
  
    if (96 > 1) {
      angleMode(DEGREES);
      rotate(180);
      scale(0.80);
      angleMode(DEGREES);
      rotate(190);
      this.dgfinger(k2, 80, 90);
      this.dgfinger(k2, 270, 60);
    } 
    pop();
  }

  dgbody1() {
    fill(250, 0, 50);
    rect(0, 0, 40, 80, 15, 15, 25, 25);
  }

  dghead(c, lx, ly) {
    push();
    fill(c);
    translate(lx, ly);
    ellipse(0, 0, 40, 40);
    ellipse(45, -42.5, 40, 40);
    ellipse(-45, -42.5, 40, 40);
    fill(250);
    ellipse(45, -42.5, 30, 30);
    ellipse(-45, -42.5, 30, 30);
    fill(0, 100, 255);
    angleMode(DEGREES);
    rotate(-45);
    ellipse(1, -21, 10, 44);
    angleMode(DEGREES);
    rotate(95);
    ellipse(1, -21, 10, 44);
    pop();
  }

  dgarm(c, lx, ly) {
    fill(250, 100, 0);
    rect(lx, ly, 60, 15, 10);
  }
  
  dgarm2(c, lx, ly) {
    fill(200, 200, 0);
    rect(lx, ly, 60, 15, 10);
  }

  dgarm3(c, lx, ly) {
    fill(c);
    rect(lx, ly, 60, 15, 10);
  }
  
  dgarm4(c, lx, ly) {
    fill(0, 250, 100);
    rect(lx, ly, 40, 15, 10);
  }

  dgfinger(c, lx, ly) {
    fill(250, 0, 0);
    rect(lx, ly, 20, 8, 10);
  }

  dgbody2() {
    this.x -= 1222;
    ellipse(this.x, 10, 50, 50);
    if (this.x < 0) {
      this.x = width; 
    }
    angleMode(DEGREES);
    rotate(-45);
    fill(200, 50, 150);
    rect(-59, 58, 40, 80, 15, 15, 25, 25);
  }

  dgbody3() {
    angleMode(DEGREES);
    rotate(24);
    fill(200, 200, 100);
    rect(-3, 128, 40, 80, 15, 15, 25, 25);
  }

  dgbody4andtoysword(xpos, ypos, circlefood) {
    angleMode(DEGREES);
    rotate(44);
    fill(200, 100, 200);
    rect(130, 120, 40, 80, 15, 15, 25, 25);

    if (circlefood == 2) {
      fill(20, 20, 200);
      rect(width / 2 + xpos - 240, height / 2 - 430 + ypos, 50, 8, 7);
      fill(250, 0, 0);
      rect(width / 2 + xpos - 227, height / 2 - 490 + ypos, 25, 60, 7);
      fill(300, 100, 0);
      rect(width / 2 + xpos - 224, height / 2 - 420 + ypos, 18, 30);
    }
  }

  dgbody5andcirclefood(xpos, ypos, circlefood) {
    if (circlefood == 2) {
      fill(20, 20, 200);
      circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 40, 50, 7);
      fill(250, 0, 0);
      circle(width / 2 + xpos - 151, height / 2 - 150 + ypos, 30, 10, 7);
      fill(300, 100, 0);
      circle(width / 2 + xpos - 160, height / 2 - 140 + ypos, 25, 50, 7);
    }
    angleMode(DEGREES);
    rotate(-54);
    fill(100, 200, 100);
    arc(-80, 250, 80, 80, 160, 95);
    arc(-80, 250, 80, 80, -this.counter, this.counter);
  }

  dgmoonandcentipede(lx, ly) {
    strokeWeight(4);
    fill(250);
    point(lx - 10, ly - 10, 20);
    fill(0);
    circle(lx, ly, 70);
    fill(180);
    ellipse(lx, ly, 25, 25);
    fill(0);
    ellipse(lx - 4, ly - 4, 17, 17);
    fill(250);
    circle(lx + 15, ly + 15, 8);
    circle(lx - 15, ly - 15, 8);
    circle(lx + 15, ly - 15, 8);
    circle(lx - 15, ly + 20, 8);
    circle(lx - 18, ly - 18, 8);
  }

  dgsunandcentipede(lx, ly) {
    strokeWeight(4);
    fill(300, 100, 0);
    point(lx - 10, ly - 10, 20);
    fill(200, 200, 0);
    circle(lx, ly, 70);
    fill(300, 10, 10);
    ellipse(lx, ly, 25, 25);
    fill(300, 10, 10);
    circle(lx + 15, ly + 15, 8);
    circle(lx - 15, ly - 15, 8);
    circle(lx + 15, ly - 15, 8);
    circle(lx - 15, ly + 20, 8);
    circle(lx - 18, ly - 18, 8);
  }

  dgCircleCentipedeWildChange() {
    let g = random(0.1);
    let m = mouseX;
    let q = mouseY;
    
    if (m < width / 2) {
      this.dgShortplaincentipede(color(200, 200, random(400)), this.loX, this.loY, g * 5, g * 2);
    }
    if (q < height / 2) {
      this.dgLongColorfullcentipede(color(200, 200, random(400)), this.loX, this.loY + 10, g * 20, g * 4.5);
    }
  }
}