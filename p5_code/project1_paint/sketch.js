
//pmouseX
// --10
// --10
// --15
/////////////////////////all of the cross out is me testing stuff

//tic tac toe
//1. intro screan
//2.start a game
//3.chice x or o
//4. xturn // repeating
//5. oturn // repeating
//6. result win/lose/cats game
//7. play again

//stae 0 // will be the start of intro
//state 1 will be x turn
//state 2 will be o turn
// state 3 will be resulte loss/win/tie

//intro state 
//drawing state
   // brusemode
//printing state

let currentkey = '1'; //bushmode
let bgc ;
let gkcount;
let ranredcount;
let brushColor;

function setup() {
    createCanvas(900, 700);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
    brushColor = color(0);
}


function draw() {
    // triggering the clear_print function
    
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}

   rect(0,0,20,20); // 4 arg


  //  function rect(lx,ly,w,h) {

   


  //   // magial rectangle

  //  }


  



      // wrapper function ( no parameters or arguments )
function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function
  // key global variable contains whatever key was last pressed
  let currentkey = key;

switch(currentkey) {
// case '1':
//   console.log("1");  // black line
//  // let k = color(0);
//   drawline(color(0), mouseX, mouseY, pmouseX, pmouseY,);
//   break;
// case '2':
//   console.log("2");  // red line
//   drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
//   break;
// case '3':
//   console.log("3");  // purple line
//   drawline(color(60,29,100), mouseX, mouseY, pmouseX, pmouseY);
//   break;
// case '4':
//   console.log("4");  // fat teal line
//   Rainbow(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
//   break;
case '1':
  console.log("1");  // fat teal line
  
  david_glitchbrush(color(random(150),random(250),random(150)), mouseX, mouseY, pmouseX, pmouseY);
  break;
case 'q':
  console.log("q");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case '2':
    console.log("2");  // erase with bg color
    david_anglesmoothBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {

        gkcount = 1;
    } else {
        gkcount+= .5;
    }
 break;
 case '3':
    console.log("3"); 
    david_spinningbluebrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {

        gkcount = 1;
    } else {
        gkcount+= .5;
    }
 break;
///////////////////////////
//  case '8' :
//  console.log("8");
//  drawCoolLine(color(random(20),50,random(500)), mouseX, mouseY, pmouseX, pmouseY);
//  break;

//  case '9':
//  console.log("9");
//  drawlineRan(color(100,100,200),  mouseX, mouseY, pmouseX, pmouseY, )
//  break;
//  case '0':
//   console.log("0");
//   drawSteveCircRan(color(200,0,50),  mouseX, mouseY, pmouseX, pmouseY, )
// break;
////////////////////////////
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}
//////////////////
}

// function drawline( k,  lx, ly,  px, py) {
  
//   strokeWeight(1);
//   stroke(k);
//   line(lx, ly, px, py);
//   console.log(mouseX);
//   console.log(pmouseX);
// }
// ///////////////////////////////
// function drawCoolLine(k,  lx, ly,  px, py){

  
//   strokeWeight(1);
//   stroke(k);
  
//  fill(random(200),random(100),random(255))
//   rect(lx-150, ly-150, px, py, random(1000),random(1000));
 
 

//   console.log(mouseX);
//   console.log(pmouseX);

// }
// function drawlineRan( k,  lx, ly,  px, py) {
  
//   strokeWeight(ranredcount);
//   stroke(k);
//   fill(random(250,random(100),random(100)))
//   line(lx+random(-20,20), ly+random(-20,20), px, py,);
//   console.log(mouseX);
//   console.log(pmouseX);

//   ranredcount+=.1;
//   if (ranredcount >6)
//   {
//     ranredcount =.5;
//   }
  
// }

// function drawSteveCircRan( k,  lx, ly,  px, py) {
  
//   strokeWeight(2);
//   stroke(100,100-ranredcount,200,ranredcount);
//   fill(random(250),random(250), random(250))
//   ellipse(lx+random(-120,120), ly+random(-120,120), random(5,200), random(5,200));
//   console.log(mouseX);
//   console.log(pmouseX);

//   ranredcount+= .5;
//   if ( ranredcount >255 ) {
//     ranredcount = .5;
//   }


  
//}
////////////////////////////////////
function david_glitchbrush( A,  lx, ly,  px, py) {
  
  strokeWeight(50);
  stroke(A);
 
  triangle(lx, ly, px, py);
  
}

function david_anglesmoothBrush(Acount, lx, ly,  px, py) {
//if (mouseIsPressed){
  //strokeWeight(random(1,35));
  strokeWeight(Acount);
  stroke(200,Acount*3,100);
  //stroke(brushColor);
  
  //image(b,lx,ly, 30,30);77
  line(lx, 10+ly, -px,-py);
//}6
}

function david_spinningbluebrush(GBcount, lx, ly,) {
  //strokeWeight(random(1,35));
  strokeWeight(GBcount);
  

  //image(b,lx,ly, 30,30);
  rotate(frameCount / -1);
  
  fill(random(150),10,GBcount*7);6
  noStroke();
  rect(lx, ly,10,random(100),GBcount*3);
  
}

function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'e' || key == 'E') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

// function keyPressed(){

// if (key=== "r"){

//   brushColor = color(250,0,0);
// } 
// else if (key ==='g') {
//   brushColor = color (random(250),random(250),random(250))
// }
// else if (key ==='g') {
//   brushColor = color (random(250),random(250),random(250))
// }

// }
// mouseX ==> 100
// mpuseX --> 110  --<pmouseX 100

// mouseX > 100
// mouseX > 110
// pmouseX> 100
// mouseX > 120
// pmouseX> 110
// mouseX > 130
