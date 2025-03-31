
let stime;
let stime2;
let counter1 = 45;

function setup() {
  createCanvas(1500,1491);
  background(20);
  fill(255);
  textSize(20);

 // frameRate(15);
  stime = millis();
  stime2 = millis();
  console.log(stime);


}

function draw() {
  background(0,60);
fill("#694206");
rect(0,500,1500);
fill("#FFDE59");
rect(0,-290,1500);

let h = hour();  // 0-23  a 24 hour sequence
  let m = minute();  // 0-59 60 minutes in an hour
  let s = second();  // 0-59 60 seconds in a minute.

  let rawtime = h + " " + " : " + m + " : " + s ;


  text( rawtime, 100,20 );



   // input, raw low, raw high, outlow, outhigh

   let mh = map(h,0,23,0,width);
   let mm = map(m,0,59,0,width);
   let ms = map(s,0,59,0,width);




  let mh2 = map(h,0,23,0,400);
  let mm2 = map(m,0,59,0,400);
  let ms2 = map(s,0,59,0,400);

 




 push();
 pair6(mh,130);
 pair5(mm,400);
 pair(ms2,450);
 pair2(ms2+260,450);
 pair3(ms2+510,450);
 pair4(ms2-250,450);
 
 pair4(250,150);

 pop();

push();
pair7(660,130,);
pop();


push();
 stand(150, 540, 255);
pop();
 
push();
 stand(700, 540, 255);
pop();

push();
 stand(1240, 540, 255);
pop();

push();
 root(1170, 1180, 255);
pop();


push();
 root(630, 1180, 255);
pop();


push();
 root(80, 1180, 255);
pop();

push();
 root2(180, 1520, 255);
pop();

push();
 root2(730, 1520, 255);
pop();

push();
 root2(1270, 1520, 255);
pop();
}



function stand(lx,ly){
   translate(lx,ly);

   fill(20,200,20);
   quad(20, 30, 80, 30, 80, 670, 20, 670);
}


function root(lx,ly){
   translate(lx,ly);

   fill("#BFD92B");
   quad(160, 30, 80, 30, 180, 170, -80, 170);
}

function root2(lx,ly){
   translate(lx,ly);

   fill("#A0B624");
   quad(-160, -30, -80, -30, -180, -170, 80, -170);
}





// push();
// translate(500,500);
// rotate(radians(counter1));
// scale(sc);
// fill("#FE9900");
// circle(lx-300, ly-400, 250);
// fill("#FF4D01"); // Red color for the circle

// drawStar(lx-300, ly-400, 30, 15, 5);

// pop();
// counter1++;

function pair(x, y) {
   
   fill("#FE9900");
      circle(x, y, 250);
      fill("#FF4D01"); // Red color for the circle
   
      drawStar(x, y, 30, 15, 5);
   }
   

   
function pair2(x, y) {
   fill("#FE9900");

   circle(x, y, 250);
   fill("#FF4D01"); // Red color for the circle

   drawStar(x-40, y-30, 30, 15, 5);
   drawStar(x+30, y+10, 30, 15, 5);

}

function pair3(x, y) {
   fill("#FE9900");

   circle(x, y, 250);
   
   fill("#FF4D01"); // Red color for the circle

   drawStar(x-40, y-30, 30, 15, 5);
   drawStar(x+40, y-30, 30, 15, 5);

   drawStar(x, y+40, 30, 15, 5);

}

function pair4(x, y) {
   fill("#FE9900");

   circle(x, y, 250);
   fill("#FF4D01"); // Red color for the circle

   drawStar(x-40, y-30, 30, 15, 5);
   drawStar(x+40, y-30, 30, 15, 5);

   drawStar(x+40, y+40, 30, 15, 5);

   drawStar(x-40, y+40, 30, 15, 5);
}

function pair5(x, y) {
   fill("#FE9900");

   circle(x, y, 250);
   fill("#FF4D01"); // Red color for the circle

   drawStar(x-45, y-35, 30, 15, 5);
   drawStar(x+45, y-35, 30, 15, 5);

   drawStar(x+45, y+45, 30, 15, 5);

   drawStar(x-45, y+45, 30, 15, 5);

   drawStar(x ,y, 30, 15, 5);

}

function pair6(x, y) {
   fill("#FE9900");

   circle(x, y, 250);
   fill("#FF4D01"); // Red color for the circle

   drawStar(x-45, y-35, 30, 15, 5);
   drawStar(x+45, y-35, 30, 15, 5);

   drawStar(x+55, y+35, 30, 15, 5);

   drawStar(x-55, y+35, 30, 15, 5);

   drawStar(x ,y, 30, 15, 5);
   drawStar(x ,y+55, 30, 15, 5);


}



function pair7(x, y,sc) {
   scale(sc);

   fill("#FE9900");

   circle(x, y, 250);
   fill("#FF4D01"); // Red color for the circle

   drawStar(x-60, y-50, 30, 15, 5);
   drawStar(x+60, y-50, 30, 15, 5);
   drawStar(x+65, y, 30, 15, 5);
   drawStar(x+60, y+55, 30, 15, 5);
   drawStar(x-65, y, 30, 15, 5);
   drawStar(x+-60, y+55, 30, 15, 5);


   drawStar(x ,y, 30, 15, 5);


}


function circle(x, y, size) {
   angleMode(DEGREES);
   rotate(-70);
   fill(200,0,0);
   ellipse(x, y, size, size);
}

function drawStar(x, y, radius1, radius2, points) {
   beginShape();
   for (let i = 1; i < TWO_PI; i += TWO_PI / points) {
       let x1 = x + cos(i) * radius1;
       let y1 = y + sin(i) * radius1;
       vertex(x1, y1);
       let x2 = x + cos(i + PI / points) * radius2;
       let y2 = y + sin(i + PI / points) * radius2;
       vertex(x2, y2);
   }
   endShape(CLOSE);
   
}
