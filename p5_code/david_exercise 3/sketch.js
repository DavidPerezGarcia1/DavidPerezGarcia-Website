let counter = 0;
let clickCount = 0;
let speedX, speedY, loX, loY;
let speedX2, speedY2, loX2, loY2;
let counter1 = 45;
let counter2 = -45;
let counterR = 0;


let value = 0;
let factor = 2;


function setup() {
  createCanvas(500,800,);
  background(20);
  fill(255);
  angleMode(DEGREES);
  speedX = random(-4, 4);
  speedY = random(-4,4);
  loX = height / 2;
  loY = width / 2;
  speedX2 = random(-5, 5);
  speedY2 = random(-5, 5);
  speedX4 = random(-15, 15);
  speedY4 = random(-15, 15);
  loX2 = height / 2;
  loY2 = width / 2;
  x = width;
}
function draw(){
  pair(); 
  dgdrawingaround();
dgcentipederound();
dgmousePressed();

}

function dgnumbercount() {
  value += 1; 
}
dgnumbercount(); 





function pair() {
  background(20,250,20);
  dgCircleCentipedeWildChange();

dgRedeyeSpin(410,720,-counter,.75);
  fill(250,0,0);
  dgRedeyeSpin(450,50,counter,.5);
  dgYelloweyeSpin(80,60,-counter,.75);
  dgYelloweyeSpin(40,750,counter,.5);
  dgLongColorfullcentipede(color(100,200,random(400)),width/4, height/3, -40,1);
  dgShortplaincentipede(color(200,200,random(400)),width/3, height-150, -40,1);
 counter+=5;
 ///////////////////////////////////
console.log( speedX + " " + speedY);
console.log( speedX2 + " " + speedY2);
if (loX < 0) {
  loX = width;}
if (loX > width) {
  loX = 0;}
if (loY < 0) {
  loY = height;}
if (loY > height) {
  loY = 0;}

if (loX2 < 0) {
  speedX2 = -speedX2;}
if (loX2 > width) {
  speedX2 = -speedX2;}
if ((loY < 0) || (loY > height)) {
    speedY = -speedY;}
if ((loY2 < 0) || (loY2 > height)) {
  speedY2 = -speedY2;}
loX += speedX;
loY += speedY;
loX2 += speedX2;
loY2 += speedY2;
dgmoonandcentipede(loX,loY);
dgLongColorfullcentipede(color(200,120,20), loX,loY,15,.5 );
dgShortplaincentipede(color(200,200,random(400)),loX,loY, -180,.8);
dgsunandcentipede(loX2,loY2);
rotate(8);

dgLongColorfullcentipede(color(200,120,20), loX2,loY2,15,.5 );
scale(1);
dgShortplaincentipede(color(200,200,random(400)),loX2,loY2, -180,.8);
}
function dgdrawingaround(){
  push();
  translate(mouseX, mouseY);
  scale(.3);
  dgLongColorfullcentipede(color(200,120,20));
  dgcentipederound((clickCount % 50) + 2);
  pop();
  }
  function dgmousePressed() {
    clickCount++;
  }

  function dgcentipederound(eyeCount) {
    let eyeDistance = 1000.0 / (eyeCount - 1);
    for (let i = 0; i < eyeCount; i++) {
      angleMode(DEGREES);
      rotate(100);
    fill(250,0,0);
      dgLongColorfullcentipede(-40,(i*eyeDistance),.1); 
      dgLongColorfullcentipede(80,(i*eyeDistance),.1);
      console.log("finger");

    }
  }
function dgRedeyeSpin(lx,ly,rot,sc) {
  push();
  translate(lx,ly);
  rotate(radians(counter2));
  scale(sc);
  fill(250,0,0);
  ellipse(0,0,200,200);  
  fill(60)
  ellipse(0,0,160,160);
  fill(250,0,0);
  ellipse(0,0,159,159);
  fill(0);
  ellipse(0,0,40,40);
  fill(0);
  circle(-59,50,30);
  circle(2,-78,30);
  circle(58,50,30);
 if(20>1){
  angleMode(DEGREES);
  rotate(radians(counter2));
  angleMode(DEGREES);
  rotate(radians(counter2));
  fill(0);
  arc(-20,68,50, 30, 0,100);
 }
if (10>1){
  angleMode(DEGREES);
  rotate(radians(counter2));
  angleMode(DEGREES);
  rotate(radians(counter2));
  fill(0);  
  arc(-20,70,50, 30, 0,100);
}
if (15>1){
  angleMode(DEGREES);
    rotate(radians(counter2));
    angleMode(DEGREES);
    
    rotate(radians(counter2));
    fill(0);   
   arc(-10,70,50, 30, 0,100);
}
  pop();
  counter2--;
}
function dgYelloweyeSpin(lx,ly,rot,sc) {
  push();
  translate(lx,ly);
  rotate(radians(counter1));
  scale(sc);
  fill(255, 204, 0);
circle(0,0,150);
rotate(radians(counter1));
fill(0);
ellipse(0,0,110,40);
ellipse(0,0,25,150);
  pop();
  counter1++;

}

function dgLongColorfullcentipede(k,lx,ly,rot,sc) {
 push();
    translate(lx+100,ly);
    rotate(rot);
    scale(sc+.1);
    dgbody1();
    dghead(k,20,-15);
    dgRedeyeSpin(-25,-57,counter,.1);    
    dgYelloweyeSpin(65,-57,-counter,.1);
    dgarm(k,-50,10); 
    dgarm(k,30,10); 
    dgbody2(k);
    dgbody3(k);
    dgbody4andtoysword(70,0,2,k);
    dgbody5andcirclefood(k);
    if (20>19){
      angleMode(DEGREES);
      rotate(-10);
      dgarm2(k,-105,90);
      dgarm2(k,-20,90);
    }
    if(10>1){
      angleMode(DEGREES);
      rotate(22);
      dgarm3(k,-50,160);
      dgarm3(k,38,160);
    }
    if(101>1){
      angleMode(DEGREES);
      rotate(40);
      dgarm4(k,95,150);
      dgarm4(k,157,150);    
    }
    if(95>1){
      angleMode(DEGREES);
      rotate(-70);
      dgfinger(k,50,70);
      angleMode(DEGREES);
      rotate(40);
      dgfinger(k,85,25);
    }
    if(96>1){
      angleMode(DEGREES);
      rotate(190);
      dgfinger(k,50,-22);
      angleMode(DEGREES);
      rotate(220);
      dgfinger(k, -48,35);
    }
    if(961>1){
    translate(105,75)
      angleMode(DEGREES);
      rotate(90);
      dgfinger(k,50,-22);
      angleMode(DEGREES);
      rotate(220);
      dgfinger(k, -48,35);
    }
    if(9161>1){
      translate(105,75)
        angleMode(DEGREES);
        rotate(-70);
        dgfinger(k,50,-22);
        angleMode(DEGREES);
        rotate(220);
        dgfinger(k, -48,35);
      }
      textSize(32);
      angleMode(DEGREES);
      rotate(-70);
      value += factor;
text(value, -90,70);


  pop();
}

function dgShortplaincentipede(k,lx,ly,rot,sc) {
  push();
  translate(lx-50,ly+60);
  angleMode(DEGREES);
  rotate(270);
  let k2 = color(30);
  rotate(rot);
  scale(sc-0.4);
  dgbody1();
  dghead(k2,20,-15);
  dgRedeyeSpin(-25,-57,counter,.1);    
  dgYelloweyeSpin(65,-57,-counter,.1);
  dgarm(k2,-50,10); 
  dgarm(k2,30,10); 
  translate(-115,-70);
  angleMode(DEGREES);
    rotate(-40);
    dgbody4andtoysword(k2);

    dgbody5andcirclefood(70,0,2,k2);

  if(101>1){
    angleMode(DEGREES);
    rotate(50);
    dgarm4(k2,90,150);
    dgarm4(k2,150,150);    
  }
  if(96>1){
    angleMode(DEGREES);
    rotate(180);
    scale(.80);
    angleMode(DEGREES);
    rotate(190);
    dgfinger(k2,80,90);
    dgfinger(k2,270,60);
  } 
pop();
}

function dgbody1(){
  fill(250,0,50);
  
  rect(0,0,40,80, 15,15,25,25);
  
}

function dghead(c,lx,ly,rot,hat){
push();
fill(c);
translate(lx,ly)
ellipse(0,0,40,40);
ellipse(45,-42.5,40,40);
ellipse(-45,-42.5,40,40);
fill(250);
ellipse(45,-42.5,30,30);
ellipse(-45,-42.5,30,30);
fill(0,100,255);
angleMode(DEGREES);
rotate(-45);
ellipse(1,-21,10,44);
angleMode(DEGREES);
rotate(95);
ellipse(1,-21,10,44);

pop();
}

function dgarm(c,lx,ly){
  fill(250,100,0);
  rect(lx,ly,60,15,10);
  }
function dgarm2(c,lx,ly){
fill(200,200,0);
rect(lx,ly,60,15,10);
}
function dgarm3(c,lx,ly){
  fill(c);
  rect(lx,ly,60,15,10);
  }
  function dgarm4(c,lx,ly){
    fill(0,250,100);
    rect(lx,ly,40,15,10);
    }
   
        function dgfinger(c,lx,ly){
          fill(250,0,0);
          rect(lx,ly,20,8,10);
          }

function dgbody2(){
  x -= 1222;
ellipse(x, 10, 50, 50);
if (x < 0) {
  x = width; 
}
  angleMode(DEGREES);
rotate(-45);
fill(200,50,150);

rect(-59,58,40,80, 15,15,25,25);

}
function dgbody3(){
  angleMode(DEGREES);
rotate(24);
fill(200,200,100);
rect(-3,128,40,80, 15,15,25,25);
}
function dgbody4andtoysword(xpos, ypos, circlefood){
  angleMode(DEGREES);
rotate(44);
fill(200,100,200);
rect(130,120,40,80, 15,15,25,25);

if (circlefood == 2) {
  fill(20,20,200);
  rect(width/2+xpos-240,height/2 -430 +ypos ,50,8,7);
  fill(250,0,0);
  rect(width/2+xpos-227,height/2 -490 +ypos ,25,60,7);
  fill(300,100,0);
  rect(width/2+xpos-224,height/2 -420 +ypos ,18,30);
  

  }
}
function dgbody5andcirclefood(xpos, ypos, circlefood){
  if (circlefood == 2) {
    fill(20,20,200);
    circle(width/2+xpos-160,height/2 -140 +ypos ,40,50,7);
    fill(250,0,0);
    circle(width/2+xpos-151,height/2 -150 +ypos ,30,10,7);
    fill(300,100,0);
    circle(width/2+xpos-160,height/2 -140 +ypos ,25,50,7);
    }
  angleMode(DEGREES);
rotate(-54);
fill(100,200,100);
arc(-80, 250, 80, 80, 160, 95);
arc(-80, 250, 80, 80, -counter, counter);
}

function dgmoonandcentipede(lx,ly) {
  strokeWeight(4);
  fill(250);
  point(lx-10,ly-10,20)

  fill(0);
  circle(lx,ly,70);
  fill(180);
  ellipse(lx,ly, 25, 25);
  fill(0);
  ellipse(lx-4,ly-4, 17, 17);
  fill(250);
  circle(lx+15,ly+15,8);
  circle(lx-15,ly-15,8);
  circle(lx+15,ly-15,8);
  circle(lx-15,ly+20,8);
  circle(lx-18,ly-18,8);
}
function dgsunandcentipede(lx,ly) {
  strokeWeight(4);
  fill(300,100,0);
  point(lx-10,ly-10,20)
  fill(200,200,0);
  circle(lx,ly,70);
  fill(300,10,10);
  ellipse(lx,ly, 25, 25);
  fill(300,10,10);
  circle(lx+15,ly+15,8);
  circle(lx-15,ly-15,8);
  circle(lx+15,ly-15,8);
  circle(lx-15,ly+20,8);
  circle(lx-18,ly-18,8);
  
}
function dgCircleCentipedeWildChange(){
  let g = random(.1);
  let m = mouseX;
  let q = mouseY;
  console.log(m + " " + g);
  if (m < width/2)  {
    dgShortplaincentipede(color(200,200,random(400)),loX,loY,g * 5, g * 2,);
  }
  if (q < height/2)  {
    dgLongColorfullcentipede(color(200,200,random(400)),loX,loY+10,g * 20, g * 4.5);

  
  }
  
}


