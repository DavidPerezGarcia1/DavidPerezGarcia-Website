function splash()  {
  var textX;
  var textY;
  var loy= 0;  
  var loy2= 0;
  var loy3= 0;

  let btnevent1 =false;
  let btnevent2 =false;
  let img; 
  var click1;
  var click2;
  var click3;
  var clickImg;
  this.setup = function() {
    console.log("We are at setup for splash");
    outputVolume(.15);  
    img = loadImage('assets/space1.jpg');
    
    click1 = new Clickable();
    click1.locate(20, 290);
    
    click1.onHover = function () {
      this.color = "#ABAAFF";
      this.textColor = "#FAAFBF";
      this.text = "You Better!";
    }
    
    click1.onOutside = function () {
      this.color = "#EEAEEE";
      this.text = "Click Me!";
      this.textColor = "#000000";
    }
    
    // Variable to store whether the click happened.
    let clicked = false;
  
    click1.onPress = function () {
      this.stroke = "#FF0000";
      this.text = "HAHA GET TROLL";
      clicked = true;  // Set clicked to true when clicked.
    }
  
    click1.onRelease = function () {
      this.y += 50;
      if (clicked) {
        textSize(32); // Set text size.
        fill(0, 102, 153);
        text("HAHA GET TROLL", 150, 150); // Display "NAH" text at specified location.
      }
    }
  }


  this.enter = function()  {
      console.log("We are at entering splash");
      background("grey");
      textAlign(CENTER);
      textSize(30);
      noStroke();

 
      snd1.stop();
      // make sure ghost is gone from this scene
      meteor.visible = false;
    

  }


  this.draw = function()
  {
    background("lightblue");
    image(img,0,0,1000,1000);

    // this is the draw function for all p5.play commands
    fill(20,80,120);
    ellipse(width/2,height/2+140,760,420);
    fill(20,150,220);
    ellipse(width/2,height/2+150,760,420);
   

    fill(20,150,20);
    ellipse(50,500,260,120);
    ellipse(550,450,260,220);
    ellipse(250,280,260,120);
 


    
      push();
      translate(120,loy-100);
      fill(160);
      text("Is",0,-40);
      ellipse(0,0,80,80);
      fill(60);
      circle(10,10,20);
      ellipse(-10,-20,20,25);
      ellipse(-20,15,30,20);
      if (loy > height-240) {
        loy = 0;
      }
       loy++;
      pop();

      push();
      translate(300,loy2-100);
      fill(160);
      text("Meteor",30,-70,-70);
      ellipse(0,0,80,80);
      fill(60);
      circle(10,10,20);
      ellipse(-10,-20,20,25);
      ellipse(-20,15,30,20);
      if (loy2 > height-260) {
        loy2 = 0;
      }
       loy2++;
      pop();
      
      push();
      translate(500,loy3-100);
      fill(160);
      text("coming!",0,-50);
      ellipse(0,0,80,80);
      fill(60);
      circle(10,10,20);
      ellipse(-10,-20,20,25);
      ellipse(-20,15,30,20);
      if (loy3 > height-230) {
        loy3 = 0;
      }
       loy3++;
      pop();
                           // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Help",width-350,height-70,100,40,color(220,200,300),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
                          // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent2 = checkButtonPress("Start",width/2-60,height-140,120,40,color(20,280,200),color(100),color(250));
    if (btnevent2) {   // main or next scene
      btnevent2 = false;
       playshortsound();
       this.sceneManager.showNextScene();
    }
    click1.draw();
  }

  this.keyPressed = function() {
      fill(0,255,0);
      text(keyCode, textX, textY += 10);

      if ( textY > height )  {
          textX += 20;
          textY = 0;
      }
  }

  this.mousePressed = function() {

   
  }

  
}

///////////////////////  2  ////////////////////////


function main() {
this.y = 0;
this.lox = 50;
this.loy = 120;
let btnevent1 = false;
let gameOver = false;
let ghostFallSpeed = 1; 
let ghostStartY = 0; 
let earthY = 140;
let ghostWinPosition = 100; // 
let ghostPushedAway = false; // 
let img; 

this.setup = function() {
  console.log("We are at setup for main");
  img = loadImage('assets/space2.jpg');

}

this.enter = function() {
  console.log("We are at entering main");
  this.restartGame(); 
}

this.draw = function() {
  background("lightblue");
  image(img,0,0,1000,1000);

  fill(20, 80, 120);
  ellipse(width / 2, height / 2 + 140, 460, 420);
  fill(20, 150, 220);
  ellipse(width / 2, height / 2 + 150, 460, 420);
  fill(20, 150, 20);
  ellipse(150, 450, 130, 60);
  ellipse(420, 450, 130, 110);
  ellipse(250, 240, 130, 60);

  if (!gameOver && !ghostPushedAway) {
    meteor.position.y += ghostFallSpeed;

    if (meteor.position.y >= earthY) {
      meteor.position.y = earthY; 
      gameOver = true; // Trigger game over
      meteor.changeAnimation("stand"); 
      snd1.stop(); // Stop background music
      snd2.stop(); // Stop sound when hovering
    }
    
  }

  if (dist(mouseX, mouseY, meteor.position.x, meteor.position.y) < 50) {
    let angle = atan2(meteor.position.y - mouseY, meteor.position.x - mouseX);
    meteor.position.x += cos(angle) * 5; 
    meteor.position.y += sin(angle) * 5; 

    if (!ghostPushedAway && meteor.position.y < ghostWinPosition) {
      // Ghost is pushed far enough to win
      ghostPushedAway = true;
      gameOver = true;
      meteor.changeAnimation("stand"); 
      snd1.stop(); // Stop background music
    }
    if (!snd3.isPlaying()) {
      snd3.play(); // Play the second sound when ghost hits Earth
    }
  }

  if (gameOver) {
    if (ghostPushedAway) {
      fill(0, 255, 0); 
      textSize(40);
      textAlign(CENTER, CENTER);
      text("You Win!", width / 2, height / 2 - 50);
    } else {
      fill(255, 0, 0); 
      textSize(40);
      textAlign(CENTER, CENTER);
      text("Game Over", width / 2, height / 2 - 50);
    }

    let btnevent2 = checkButtonPress("Restart", width / 2 - 60, height / 2 + 50, 120, 40, color(20, 280, 200), color(100), color(250));
    if (btnevent2) {  
      btnevent2 = false;
      this.restartGame(); // Call the restart function
    }
  }
}

this.restartGame = function() {
  gameOver = false; 
  ghostPushedAway = false; 
  meteor.position.y = ghostStartY; 
  meteor.position.x = width / 2; 
  meteor.visible = true; 
  meteor.changeAnimation("normal"); 
  if (!snd1.isPlaying()) {
    snd1.play(); 
  }
}

this.mousePressed = function() {
}
}

/////////////////////

function main2() {
this.y = 0;
this.lox = 50;
this.loy = 120;
let btnevent1 = false;
let gameOver = false; 
let ghostFallSpeed = 4;
let ghostStartY = height; 
let earthY = 430;
let ghostWinPosition = 500; 
let ghostPushedAway = false; 
let img; 

this.setup = function() {
  console.log("We are at setup for main");
  img = loadImage('assets/space3.jpg');

}

this.enter = function() {
  console.log("We are at entering main");
  this.restartGame();
}

this.draw = function() {
  background("lightblue");
  image(img,0,0,1000,1000);

  // Draw Earth
  fill(20, 80, 120);
  ellipse(width / 2, height / 2 - 2, 260, 270);
  fill(20, 150, 220);
  ellipse(width / 2, height / 2, 260, 260);
  fill(20, 150, 20);
  ellipse(220, 300, 65, 30);
  ellipse(360, 250, 65, 55);
  ellipse(250, 160, 65, 30);

  if (!gameOver && !ghostPushedAway) {
    meteor.position.y -= ghostFallSpeed; 

    if (meteor.position.y <= earthY) {
      meteor.position.y = earthY; 
      gameOver = true; 
      meteor.changeAnimation("stand"); 
      snd1.stop(); // Stop background music
      snd2.stop(); // Stop sound when hovering
    }
  }

  if (dist(mouseX, mouseY, meteor.position.x, meteor.position.y) < 50) {
    let angle = atan2(meteor.position.y - mouseY, meteor.position.x - mouseX);
    meteor.position.x += cos(angle) * 5; 
    meteor.position.y += sin(angle) * 5; 

    if (!ghostPushedAway && meteor.position.y < ghostWinPosition) {
      ghostPushedAway = true;
      gameOver = true; 
      meteor.changeAnimation("stand"); 
      snd1.stop(); 
    }
  }

  if (gameOver) {
    if (ghostPushedAway) {
      fill(0, 255, 0); 
      textSize(40);
      textAlign(CENTER, CENTER);
      text("You Win!", width / 2, height / 2 - 50);
    } else {
      fill(255, 0, 0);
      textSize(40);
      textAlign(CENTER, CENTER);
      text("Game Over", width / 2, height / 2 - 50);
    }

    let btnevent2 = checkButtonPress("Restart", width / 2 - 60, height / 2 + 50, 120, 40, color(20, 280, 200), color(100), color(250));
    if (btnevent2) {  
      btnevent2 = false;
      this.restartGame();
    }
  }
}

this.restartGame = function() {
  gameOver = false; 
  ghostPushedAway = false; 
  meteor.position.y = ghostStartY; 
  meteor.position.x = width / 2; 
  meteor.visible = true; 
  meteor.changeAnimation("normal"); // Reset ghost animation to "stand"
  if (!snd1.isPlaying()) {
    snd1.play();
  }
}

this.mousePressed = function() {
}
}





////////////////////////////// 3 /////////////////

function help() {
let img; 

  this.setup = function()  {
      console.log("We are at setup for help");
      // access a different scene using the SceneManager
      img = loadImage('assets/space4.jpg');

  }

  this.enter = function()
  {
   console.log("We are at entering for help");
   meteor.visible = true;
   meteor.position.x = 100;
   meteor.position.y = 100;


  }

  this.draw = function() {
    background("lightblue");
    // this is the draw function for all p5.play commands
    image(img,0,0,1000,1000);

    fill(20,80,120);
    ellipse(width/2,height/2+140,760,420);
    fill(20,150,220);
    ellipse(width/2,height/2+150,760,420);
   

    fill(20,150,20);
    ellipse(50,500,260,120);
    ellipse(550,450,260,220);
    ellipse(250,280,260,120);
    fill("black");
    textAlign(LEFT);
    textSize(25);
    text( "Hi, Am Big boom, I make thing go bye bye " , 170,70);
    text( "To win the game, move your mouse over me", 30, 220);
    text( " so your home does not go bye bye", 30, 250);

    

    if ( meteor.mouse.hovering() ) {
      console.log("over");
      meteor.changeAnimation("normal");
      // ghosty.position.x += random(-4,4);
      // ghosty.position.y += random(-2,2);
    
   }  else {

    meteor.changeAnimation("normal");


   }
    

   if (meteor.mouse.pressing()) {
         if ( !snd2.isPlaying() ) {
            snd2.play();
        } else {
            snd2.pause();

        }

     this.sceneManager.showScene( main );

   }  



      
  }

 

}


function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

let btnc = "";
let btnstate =false;

if ( mouseX > bx - boxW &&
     mouseX < bx + boxW &&
     mouseY > by - boxH &&
     mouseY < by + boxH ) {
     overBox = true;

  if (!mouseIsPressed) {
    stroke(255);
    btnc = ovcolor;
    btnstate = false;
  } else {
    console.log(str + " pressed");
    stroke(255);
    btnc = dncolor;
    btnstate = true;
  }

} else {
  stroke(255);
  btnc = upcolor;
  overBox = false;
}

push();
translate(bx,by);
fill(btnc);
rect(0, 0, boxW, boxH,10); // draw the box

fill(20);
noStroke();
textSize(20);
textAlign(CENTER);
text (str,boxW/2,28);

  pop();

  return btnstate;

}



function playshortsound() {
if ( !snd2.isPlaying() ) {
  snd2.play();
} else {
   snd2.stop();
}


}