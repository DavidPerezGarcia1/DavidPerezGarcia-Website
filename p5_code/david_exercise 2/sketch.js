
let bgcounter = 0;
let counter = 0;
/////
let counterG = 0;
let counterR = 0;
let f; 
let b;
let L;
let Q;
let F;

let cx,cy;
let bgc
let gridSize;
let pizza2;
let pizza;
let pineapple;
let cat2
let dog 
let R
let T
let value = 0; 

let purpOn = false;
let bc;
let x = 500;
let y = 520;

function preload() {
   f = loadFont('assets/DOODLE.ttf');
L= loadFont("assets/The Amazing Spider-Man.ttf")
Q= loadFont("assets/BaksoSapi.otf")
F= loadFont('assets/Fighting Spirit 2.otf')
////
tint('red');
    pizza = loadImage("assets/pizza.png")
    pizza2 = loadImage("assets/pizza.jpg")
    pineapple = loadImage("assets/pineapple.png")
    cat = loadImage("assets/IMG_20240505_205508.jpg")
    dog =loadImage("assets/dog.jpeg")
    
    R= loadImage("assets/rat.webp")
    cx = width/2;
    cy = height/2;
    gridSize = 100;
}


function setup() {
  rectMode(RADIUS); //rectmode 
  bc = color('#664040');
  createCanvas(1920, 1920);

  counterR = height;

  fill(250, 255, 0);
  b = loadImage("assets/cat image.jpg");
  e= loadImage("assets/dog.jpeg");
  R= loadImage("assets/rat.webp")
  if( keyIsPressed) {  // true/false
    keyChoice();
 }
 frameRate(40);
 
}


function draw() {
  
 
  background(bc);
  
  //////////////////////////////////
  noStroke();
  

  
  if (counter+50 > height) {
  background(bgcounter);
  bgcounter+=3;
  counter = 0;
  } else {
  counter+=20;
  
  fill(random(255),random(20),random(220));
  rect(0, counter, width+1920 - random(550), 10);
  fill(random(255),0,random(255),120);
  rect(counter, 0, 10, height+1920 - random(550));
  }
  
  
////////////////////
colorMode(RGB, 200)//colormode for whole shapes 


for (let x = 100; x < 150; x += 1) {
  for (let y = 600; y < 610; y += 1) {
    stroke(x+100, y+100, 500);
    point(x, y);
    fill(!200,200,500) // ! allow turn baby blue some how
    circle(400,400,400)
  }
}
  fill(value,50,200); 
   circle(width/2>=-100, height/2>=-1500,1000);   //>= counter placement     
   fill(value,300,100); 
   rect(width/2, height/2,500);   
      fill(value+100,200,100); 
   circle(mouseX, mouseY,250); 

   if (mouseIsPressed && purpOn) {  // tests true or false
     console.log("show that purple");
     fill(155,250,255);
     let r = random(100,width-10);
     ellipse(width/2, height/2, r, r);
   }
   if (keyIsPressed === true) {
    if (keyCode === UP_ARROW) {
      y -= 25;
    } else if (keyCode === DOWN_ARROW) {
      y += 25;
    } else if (keyCode === LEFT_ARROW) {
      x -= 25;
    } else if (keyCode === RIGHT_ARROW) {
      x += 25;
    }
  }
  fill(100,200,50);

  // Draw the circle at (x, y).
  circle(x, y, 100);

  // Style the circle.
  fill(0);

  // Draw the circle at (x, y).
  circle(x, y, 5);
  //rotate(frameCount / -1);
  tint('green');
  image(b, 50, 50, 100,100);
  
  image(e, 1700, 50, 100,100);
  tint('yellow');
  image(R, 1700, 500, 100,100);
  tint('red');
  image(R, 1700, 1500, 100,100);

  image(e, 50, 1500, 100,100);
  
  background(0,15);
 
  if ( mouseIsPressed && keyIsPressed == true )  {
    textSize((counterR)/2.5);
    textAlign(CENTER);
    fill(255, 0, 255);
    textFont(f);
    text("Cat ", width/2, counterR);
    textFont(Q);
    text("silly  ", width/2, height/3, counterR);
    textFont(F);
    text("is ", width/2, height/4, counterR);
    counterR-=2;
    if (counterR < -50) { //<
      counterR = height;
    }
    
  } else  {
  
  textSize((counterG+50)/3);
  textAlign(CENTER);
  textFont(L);
  fill(random(250), random(200), random(100));
  text("Dog is funny", width/2, counterG);


  counterG +=1.5;
    if (counterG > width) {
      counterG = -50;
      
    }

  }

  

if(fill("!100",20,20)){
 // ! allow random mode to work some how
  circle(300, 300, 100);
  //////////////////////////////
}



  switch(key) {
    case 'a':

      console.log("a left");  // left
      cx+= -gridSize;
      
      image(cat,cx,cy,gridSize,gridSize);
      break;
    case 'f':
      console.log("f up");  // up
      cy+= -gridSize; 
      image(R,cx,cy,gridSize,gridSize);
      break;
    case 'd':
      console.log("d  right");  //right
      cx+= gridSize;
      image(dog,cx,cy,gridSize,gridSize);
      break;
    case 's':
      console.log("s back");  // back
      cy+= gridSize;
      image(pizza,cx,cy,gridSize,gridSize);
      break;
    case 't':
      
        console.log("t text");  // text
        fill(255,0,0);
        text("SpiderMan",800,800);
       
        break;
    default:             
      console.log("None");  
      break;

      
    }
    
    if ( key == 'n' || key == 'N' ) {   
      
      if (value == 0) { 
        value <= 455; //<=
      } else { 
        value = 0;
      }
    }
  
    if (  (key == 'l' || key == 'L') ) {
     purpOn = true;    
     
    }
 
    if (  (key == 'e' || key == 'E' || key == " ") ) {
      purpOn = false;    
  
     }
    key = ""; 

   
}

function keyPressed() {
  if (key === 'g') {
    value = 255;
  } else if (key === 'h') {
    value = 0;
  }
}


function mouseMoved() {
 
  value = value + 5;
  if (value >= 255) {
    value <= 0; // <= this will allow changing color of moving mouse at certain point but I am able to reset by pressing n
  }
}
///////////////////////
function mousePressed() {
 
  strokeWeight(200);
}

function mouseReleased() {
  
}
function mouseClicked() {

  strokeWeight(10);
}
////////////////////  crazy mouse press/click















//below is example of a draft 






// let counterG = 0;
// let counterR = 0;
// let f; 

//  /*
//    You can get free font on the web.. the format that seems to work well with p5
//    is .otf  format.    https://www.1001fonts.com/opentype-fonts.html
//  */
   
// // // optional font loading
//  function preload() { //load command only

//    f = loadFont('assets/space_age.otf');
    
// }


// function setup() {
//   createCanvas(1920, 800);

//   counterR = height;

//   //optionally set the font for drawing
//   textFont(f);

//   // set color of text
//   fill(0, 255, 0);

 
// }

// function draw() {

//     // textSize(40);

//     // text("you said pineapple pizza dip???",300,300,900);

//   background(0,15);
//   // this is an example of 'and' logic
//   if ( mouseIsPressed && keyIsPressed == true )  {
//     textSize((counterR)/2.5);
//     textAlign(CENTER);
//     fill(255, 0, 0);
//     text("Red is Betta ", width/2, counterR);
//     counterR-=.75;
//     if (counterR < -50) {
//       counterR = height;
//     }
    
//   } else  {
  
//   textSize((counterG+50)/3);
//   textAlign(CENTER);
//   fill(0, 255, 0);
//   text("Green is good", width/2, counterG);

//   counterG +=1.5;
//     if (counterG > width) {
//       counterG = -50;
//     }

//   }

  
// }