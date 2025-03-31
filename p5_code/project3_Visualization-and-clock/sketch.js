function setup() {
  createCanvas(2700, 1490);
  background(20);
  fill(255);
  textSize(20);

  stime = millis();
  stime2 = millis();
  console.log(stime);
}

function draw() {
  background(0, 60);
  
  dgCoreBody();

  displayTime();
  let mh = map(hour(), 0, 223, 0, width); 
  let mm = map(minute(), 0, 529, 0, width); 
  let ms = map(second(), 0, 529, 0, width); 

  let mh2 = map(hour(), 0, 223, 0, 400); 
  let mm2 = map(minute(), 0, 529, 0, 400); 
  let ms2 = map(second(), 0, 529, 0, 400); 

  dgDrawPairsandCatfood(mh, mm, ms, ms2);

  dgPlatform();

  fill("#7E635A");
  rect(300,520,200,50);
  fill("#503D36");
  rect(300,520,200,10);
  rect(300,510,20,10);
  rect(480,510,20,10);

  console.log("Millis: " + millis()); 
  console.log("Second: " + second());
  console.log("Minute: " + minute()); 
  console.log("Hour: "+ hour()); 

}

function dgCoreBody() {


  fill("#D4D4D4");
  rect(0, 500, 2700); // Ground
  fill(0,10,30);
  rect(0, -290, 2700,1500); // Sky
}

function displayTime() {
  let h = hour();
  let m = minute();
  let s = second();

}

function dgDrawPairsandCatfood(mh, mm, ms, ms2) {
  push();
  dgLongDragonBody(200,200);

pop();

push();
rotate(-0.3);

dgLongDragonBody(-200,-70);

pop();

let currentSecond = second(); 
let seconds = currentSecond % 10; 
let darkPair = floor(currentSecond / 10) % 10; 
let currentMillisecond = millis() % 1000; 
let millis1 = currentMillisecond / 142; 


push();

let mappedMillis1 = map(millis1, 0, 7, 0, 1); 

if (mappedMillis1 >= 0) dgCatFood(400, 500, 30);
if (mappedMillis1 >= 0.14) dgCatFood2(350, 500, 30); 
if (mappedMillis1 >= 0.28) dgCatFood3(450, 500, 30);
if (mappedMillis1 >= 0.42) dgCatFood4(430, 470, 30);
if (mappedMillis1 >= 0.57) dgCatFood5(400, 470, 30);
if (mappedMillis1 >= 0.71) dgCatFood6(370, 470, 30); 
if (mappedMillis1 >= 0.85) dgCatFood7(400, 440, 1, 30);

pop();

push();

let mappedSeconds = map(seconds, 0, 9, 0, 1); 

if (mappedSeconds >= 0) dgPair(1000, 450, 250);  
if (mappedSeconds >= 0.1) dgPair2(850, 450, 250); 
if (mappedSeconds >= 0.2) dgPair3(1150, 450, 250);  
if (mappedSeconds >= 0.3) dgPair4(1150, 250, 250);  
if (mappedSeconds >= 0.4) dgPair5(1000, 250, 250); 
if (mappedSeconds >= 0.5) dgPair6(850, 250, 250);  
if (mappedSeconds >= 0.6) dgPair7(1000, 100, 1, 250);  
if (mappedSeconds >= 0.7) dgPair(1000, 450, 250);  
if (mappedSeconds >= 0.8) dgPair2(850, 450, 250); 
if (mappedSeconds >= 0.9) dgPair3(1150, 450, 250); 
pop();

let currentMinute = minute(); 
let minutes = currentMinute % 6; 

let mappedMinutes = map(minutes, 0, 9, 0, 1); 

push();

if (mappedMinutes >= 0) dgPairDark(1590, 450, 250);  
if (mappedMinutes >= 0.1) dgPairDark2(1420, 450, 250);  
if (mappedMinutes >= 0.2) dgPairDark3(1770, 450, 250);  
if (mappedMinutes >= 0.3) dgPairDark4(1770, 250, 250);  
if (mappedMinutes >= 0.4) dgPairDark5(1590, 250, 250);  
if (mappedMinutes >= 0.5) dgPairDark6(1420, 250, 250);  
if (mappedMinutes >= 0.6) dgPairDark(1590, 450, 250);  
if (mappedMinutes >= 0.7) dgPairDark2(1420, 450, 250);  
if (mappedMinutes >= 0.8) dgPairDark3(1770, 450, 250);  
if (mappedMinutes >= 0.9) dgPairDark4(1770, 250, 250);  

pop();

let currentHour = hour() % 24;  

let mappedHour = map(currentHour, 0, 11, 0, 1); 

push();

if (mappedHour >= 0) dgPairBright(2220, 450, 250);  
if (mappedHour >= 0.09) dgPairBright2(2050, 450, 250);  
if (mappedHour >= 0.18) dgPairBright3(2390, 450, 250);  
if (mappedHour >= 0.27) dgPairBright4(2390, 250, 250);  
if (mappedHour >= 0.36) dgPairBright5(2220, 300, 250);  
if (mappedHour >= 0.45) dgPairBright6(2050, 250, 250);  
if (mappedHour >= 0.54) dgPairBright7(2220, 130, 1, 250);  
if (mappedHour >= 0.63) dgPairBrightV2(2220, 450, 250);  
if (mappedHour >= 0.72) dgPairBrightV2_1(2050, 450, 250);  
if (mappedHour >= 0.81) dgPairBrightV2_2(2390, 450, 250);  
if (mappedHour >= 0.9) dgPairBrightV2_3(2390, 250, 250);  
if (mappedHour >= 1) dgPairBrightV2_4(2220, 300, 250);  
if (mappedHour >= 1.1) dgPairBrightV2_5(2220, 300, 250); 
if (mappedHour >= 1.2) dgPairBrightV2_6(2050, 250, 250); 
if (mappedHour >= 1.3) dgPairBrightV2_7(2220, 130, 1, 250);
if (mappedHour >= 1.4) dgPairBright(2220, 450, 250);  
if (mappedHour >= 1.5) dgPairBright2(2050, 450, 250);  
if (mappedHour >= 1.6) dgPairBright3(2390, 450, 250);  
if (mappedHour >= 1.7) dgPairBright4(2390, 250, 250);  
if (mappedHour >= 1.8) dgPairBright5(2220, 300, 250);
text("Cat eat the food NOW",300,400);

if (mappedHour >= 1.9) dgPairBright6(2050, 250, 250);  
if (mappedHour >= 2) dgPairBright7(2220, 130, 1, 250);  
if (mappedHour >= 2.1) dgPairBrightV2(2220, 450, 250);  
if (mappedHour >= 2.2) dgPairBrightV2_1(2050, 450, 250); 
pop();
}


function dgPlatform() {
  fill("#738567")

  stand(350, 540); 
  rect(150,570,500,50);
  fill("#AA9565")
  stand(950, 540); 
  rect(750,570,500,50);

  fill("#7882A0")
  stand(1540, 540); 
  rect(1350,570,500,50);

  fill("#93694D")
  stand(2170, 540); 
  rect(1970,570,500,50);

  root(1470, 1180); 
  root(880, 1180); 
  root(280, 1180);  
  root(2100, 1180); 

  root2(380, 1520); 
  root2(980, 1520); 
  root2(1570, 1520); 
  root2(2200, 1520); 



}

function dgcatfood(){
  fill("#A65E10");
  rect(380,490,30);
}

function dgLongDragonBody(x,y){
translate(x,y)
  if (20>10){

  fill("#67C95A");
    rotate(25);
  rect(170,270,500,50);
  rotate(44.8);
  rect(650,-270,500,50);
  rotate(43.2);
  rect(950,590,500,50);
  rotate(44.7);
  rect(1490,-500,500,50);
  rotate(43.3);
  rect(1800,850,500,50);
  rotate(44.3);
  rect(2450,100,500,50);
  rotate(44.3);
  rect(-170,100,500,50);
  }
}
function stand(lx, ly) {
  quad(lx + 20, ly + 30, lx + 80, ly + 30, lx + 80, ly + 670, lx + 20, ly + 670);
}

function root(lx, ly) {
  fill(250);
  quad(lx + 160, ly + 30, lx + 80, ly + 30, lx + 180, ly + 170, lx - 80, ly + 170);
}

function root2(lx, ly) {
  fill("#A7F2DD");
  quad(lx - 160, ly - 30, lx - 80, ly - 30, lx - 180, ly - 170, lx + 80, ly - 170);
}

function dgPair(x, y, size) {
  fill("#FE9900");
  circle(x, y, size);  
  fill("#FF4D01"); 
  dgStar(x, y, size * 0.12, size * 0.06, 5);  
}
function dgPairDark(x, y, size) {
  fill("#150EB0"); 
  circle(x, y, size);  
  fill("#000000"); 
  dgStar(x, y, size * 0.12, size * 0.06, 5);  
}

function dgPair2(x, y, size) {
  fill("#FE9900");
  circle(x, y, size); 
  fill("#FF4D01");  
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 30, y + 10, size * 0.12, size * 0.06, 5);
}

function dgPair3(x, y, size) {
  fill("#FE9900");
  circle(x, y, size); 
  fill("#FF4D01");  
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x, y + 40, size * 0.12, size * 0.06, 5);
}

function dgPair4(x, y, size) {
  fill("#FE9900");
  circle(x, y, size); 
  fill("#FF4D01");  
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y + 40, size * 0.12, size * 0.06, 5);
  dgStar(x - 40, y + 40, size * 0.12, size * 0.06, 5);
}

function dgPair5(x, y, size) {
  fill("#FE9900");
  circle(x, y, size);  
  fill("#FF4D01"); 
  dgStar(x - 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x - 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
}

function dgPair6(x, y, size) {
  fill("#FE9900");
  circle(x, y, size);  
  fill("#FF4D01");  
  dgStar(x - 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 55, y + 35, size * 0.12, size * 0.06, 5);
  dgStar(x - 55, y + 35, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
  dgStar(x, y + 55, size * 0.12, size * 0.06, 5);
}

function dgPair7(x, y, sc, size) {
  scale(sc);  
  fill("#FE9900");
  circle(x, y, size);  
  fill("#FF4D01");  
  dgStar(x - 60, y - 50, size * 0.12, size * 0.06, 5);
  dgStar(x + 60, y - 50, size * 0.12, size * 0.06, 5);
  dgStar(x + 65, y, size * 0.12, size * 0.06, 5);
  dgStar(x + 60, y + 55, size * 0.12, size * 0.06, 5);
  dgStar(x - 65, y, size * 0.12, size * 0.06, 5);
  dgStar(x - 60, y + 55, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
}

////////////
function dgPairDark2(x, y, size) {
  fill("#150EB0"); 
  circle(x, y, size);  
  fill("#000000"); 
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 30, y + 10, size * 0.12, size * 0.06, 5);
}

function dgPairDark3(x, y, size) {
  fill("#150EB0"); 
  circle(x, y, size);  
  fill("#000000"); 
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x, y + 40, size * 0.12, size * 0.06, 5);
}

function dgPairDark4(x, y, size) {
  fill("#150EB0"); 
  circle(x, y, size);  
  fill("#000000"); 
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y + 40, size * 0.12, size * 0.06, 5);
  dgStar(x - 40, y + 40, size * 0.12, size * 0.06, 5);
}

function dgPairDark5(x, y, size) {
  fill("#150EB0"); 
  circle(x, y, size);  
  fill("#000000"); 
  dgStar(x - 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x - 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
}

function dgPairDark6(x, y, size) {
  fill("#150EB0"); 
  circle(x, y, size);  
  fill("#000000"); 
  dgStar(x - 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 55, y + 35, size * 0.12, size * 0.06, 5);
  dgStar(x - 55, y + 35, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
  dgStar(x, y + 55, size * 0.12, size * 0.06, 5);
}

function dgPairDark7(x, y, sc, size) {
  scale(sc);  
  fill("#150EB0"); 
  circle(x, y, size);  
  fill("#000000");  
  dgStar(x - 60, y - 50, size * 0.12, size * 0.06, 5);
  dgStar(x + 65, y, size * 0.12, size * 0.06, 5);
  dgStar(x + 60, y + 55, size * 0.12, size * 0.06, 5);
  dgStar(x - 65, y, size * 0.12, size * 0.06, 5);
  dgStar(x - 60, y + 55, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
}



function dgPairBright(x, y, size) {
  fill("#E53A02");
  circle(x, y, size);  
  fill("#F6E127"); 
  dgStar(x, y, size * 0.12, size * 0.06, 5);  
}

function dgPairBright2(x, y, size) {
  fill("#E53A02");
  circle(x, y, size);  
  fill("#F6E127"); 
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 30, y + 10, size * 0.12, size * 0.06, 5);
}

function dgPairBright3(x, y, size) {
  fill("#E53A02");
  circle(x, y, size);  
  fill("#F6E127"); 
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x, y + 40, size * 0.12, size * 0.06, 5);
}

function dgPairBright4(x, y, size) {
  fill("#E53A02");
  circle(x, y, size);  
  fill("#F6E127"); 
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y + 40, size * 0.12, size * 0.06, 5);
  dgStar(x - 40, y + 40, size * 0.12, size * 0.06, 5);
}

function dgPairBright5(x, y, size) {
  fill("#E53A02");
  circle(x, y, size);  
  fill("#F6E127"); 
  dgStar(x - 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x - 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
}

function dgPairBright6(x, y, size) {
  fill("#E53A02");
  circle(x, y, size);  
  fill("#F6E127"); 
  dgStar(x - 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 55, y + 35, size * 0.12, size * 0.06, 5);
  dgStar(x - 55, y + 35, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
  dgStar(x, y + 55, size * 0.12, size * 0.06, 5);
}

function dgPairBright7(x, y, sc, size) {
  scale(sc);  
  fill("#E53A02");
  circle(x, y, size);  
  fill("#F6E127"); 
  dgStar(x - 60, y - 50, size * 0.12, size * 0.06, 5);
  dgStar(x + 60, y - 50, size * 0.12, size * 0.06, 5);
  dgStar(x + 65, y, size * 0.12, size * 0.06, 5);
  dgStar(x + 60, y + 55, size * 0.12, size * 0.06, 5);
  dgStar(x - 65, y, size * 0.12, size * 0.06, 5);
  dgStar(x - 60, y + 55, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
}

function dgPairBrightV2(x, y, size) {
  fill("#FDDF68");
  circle(x, y, size);  
  fill("#FDA668"); 
  dgStar(x, y, size * 0.12, size * 0.06, 5);  
}

function dgPairBrightV2_1(x, y, size) {
  fill("#FDDF68");
  circle(x, y, size);  
  fill("#FDA668"); 
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 30, y + 10, size * 0.12, size * 0.06, 5);
}

function dgPairBrightV2_2(x, y, size) {
  fill("#FDDF68");
  circle(x, y, size);  
  fill("#FDA668"); 
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x, y + 40, size * 0.12, size * 0.06, 5);
}

function dgPairBrightV2_3(x, y, size) {
  fill("#FDDF68");
  circle(x, y, size);  
  fill("#FDA668"); 
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y + 40, size * 0.12, size * 0.06, 5);
  dgStar(x - 40, y + 40, size * 0.12, size * 0.06, 5);
}

function dgPairBrightV2_4(x, y, size) {
  fill("#FDDF68");
  circle(x, y, size);  
  fill("#FDA668"); 
  dgStar(x - 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x - 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
}

function dgPairBrightV2_5(x, y, size) {
  fill("#FDDF68");
  circle(x, y, size);  
  fill("#FDA668"); 
  dgStar(x - 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x - 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
}

function dgPairBrightV2_6(x, y, size) {
  fill("#FDDF68");
  circle(x, y, size);  
  fill("#FDA668"); 
  dgStar(x - 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 55, y + 35, size * 0.12, size * 0.06, 5);
  dgStar(x - 55, y + 35, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
  dgStar(x, y + 55, size * 0.12, size * 0.06, 5);
}

function dgPairBrightV2_7(x, y, sc, size) {
  scale(sc);  
  fill("#FDDF68");
  circle(x, y, size);  
  fill("#FDA668"); 
  dgStar(x - 60, y - 50, size * 0.12, size * 0.06, 5);
  dgStar(x + 60, y - 50, size * 0.12, size * 0.06, 5);
  dgStar(x + 65, y, size * 0.12, size * 0.06, 5);
  dgStar(x + 60, y + 55, size * 0.12, size * 0.06, 5);
  dgStar(x - 65, y, size * 0.12, size * 0.06, 5);
  dgStar(x - 60, y + 55, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
}
function dgCatFood(x, y, size) {
  fill("#A0593F");
  circle(x, y, size);  
  fill("#9C9B9B"); 
  dgStar(x, y, size * 0.12, size * 0.06, 5);  
}

function dgCatFood2(x, y, size) {
  fill("#A0593F");
  circle(x, y, size);  
  fill("#9C9B9B");  

  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 30, y + 10, size * 0.12, size * 0.06, 5);
}

function dgCatFood3(x, y, size) {
  fill("#FBD437");
  circle(x, y, size);  
  fill("#FBD437"); 

  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x, y + 40, size * 0.12, size * 0.06, 5);
}

function dgCatFood4(x, y, size) {
  fill("#A0593F");
  circle(x, y, size);  
  fill("#9C9B9B"); 
  dgStar(x - 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y - 30, size * 0.12, size * 0.06, 5);
  dgStar(x + 40, y + 40, size * 0.12, size * 0.06, 5);
  dgStar(x - 40, y + 40, size * 0.12, size * 0.06, 5);
}

function dgCatFood5(x, y, size) {
  fill("#A0593F");
  circle(x, y, size);  
  fill("#9C9B9B"); 
  dgStar(x - 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x - 45, y + 45, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
}

function dgCatFood6(x, y, size) {
  fill("#A0593F");
  circle(x, y, size);  
  fill("#9C9B9B"); 
  dgStar(x - 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 45, y - 35, size * 0.12, size * 0.06, 5);
  dgStar(x + 55, y + 35, size * 0.12, size * 0.06, 5);
  dgStar(x - 55, y + 35, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
  dgStar(x, y + 55, size * 0.12, size * 0.06, 5);
}

function dgCatFood7(x, y, sc, size) {
  scale(sc);  
  fill("#A0593F");
  circle(x, y, size);  
  fill("#A0593F"); 
  
  dgStar(x - 60, y - 50, size * 0.12, size * 0.06, 5);
  dgStar(x + 60, y - 50, size * 0.12, size * 0.06, 5);
  dgStar(x + 65, y, size * 0.12, size * 0.06, 5);
  dgStar(x + 60, y + 55, size * 0.12, size * 0.06, 5);
  dgStar(x - 65, y, size * 0.12, size * 0.06, 5);
  dgStar(x - 60, y + 55, size * 0.12, size * 0.06, 5);
  dgStar(x, y, size * 0.12, size * 0.06, 5);
}




function dgStar(x, y, Area, Area2, center) {
  beginShape();
  for (let i = 1; i < TWO_PI; i += TWO_PI / center) {
    let x1 = x + cos(i) * Area;
    let y1 = y + sin(i) * Area;
    vertex(x1, y1);
    let x2 = x + cos(i + PI / center) * Area2;
    let y2 = y + sin(i + PI / center) * Area2;
    vertex(x2, y2);
  }
  endShape(CLOSE);
}