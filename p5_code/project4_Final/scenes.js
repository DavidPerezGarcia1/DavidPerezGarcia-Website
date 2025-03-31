// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


////////////////////////////// 1 /////////////////
function splash() {
  let loy = [0, 0, 0, 0]; 
  let shift = 130;  
  let positions = [
    width / 4 - shift,     
    width / 2 - shift,     
    3 * width / 4 - shift,
    width - shift        
  ]; 
  let btnevent1 = false;
  let btnevent2 = false;
  let img; 
  let img2; 
  let img3; 
  let img4; 
  let L;

  this.setup = function() {
    L= loadFont("assets/The Amazing Spider-Man.ttf")

    console.log("start page");
    outputVolume(0.15); 
    player.visible = true; 
    player.position.x = 200; 
    player.position.y = 214;
    player.changeAnimation("normal"); 
    img = loadImage('assets/space1.jpg');
    img2 = loadImage('assets/space2.jpg');
    img3 = loadImage('assets/space3.jpg');
    img4 = loadImage('assets/space4.jpg');

    // Ensure all other sounds are stopped
    if (snd1.isPlaying()) snd1.stop();
    if (snd2.isPlaying()) snd2.stop();
    if (snd3.isPlaying()) snd3.stop();
    if (snd4.isPlaying()) snd4.stop(); 
  };

  this.enter = function() {
    console.log("splash page");
    background("grey");
    textAlign(CENTER);
    textSize(30);
    noStroke();

    if (snd1.isPlaying()) snd1.stop();
    player.visible = false; 
  };

  this.draw = function() {
    background("lightblue");

    if (!snd4.isPlaying()) {
      snd4.loop(); // Set to loop for continuous background music
    }

    // Drawing layered rectangles
    
    fill(200, 50, 10);
    rect(0, 0, 1060, 1020);
    fill(100, 50, 110);
    rect(0, 0, 860, 820);
    image(img4, 0, 0, 860,820);

    fill(100, 250, 110);
    rect(0, 0, 660, 620);
    image(img, 0, 0, 660, 620);

    fill(200, 150, 110);
    
    rect(0, 0, 460, 420);
    image(img2, 0, 0, 460,420);

    fill(20, 150, 0);
    rect(0, 0, 360, 320);
    image(img3, 0, 0, 360,320);

    fill(200, 150, 0);
    rect(0, 0, 260, 220);
    

    // Animating falling players
    for (let i = 0; i < 4; i++) {
      player.position.x = positions[i]; 
      player.position.y = loy[i];  

      player.changeAnimation("normal");  
      
      if (loy[i] > height - 140) {
        loy[i] = 0;
      }
      loy[i]++; 

      player.draw();

      push();
      translate(positions[i], loy[i] - 100); 
      fill(100, 0, 160);
      textFont(L);

      text("We FALLING!", 0, -120); 
      pop();
    }

    // Button interactions
    btnevent1 = checkButtonPress("Help", width - 360, height - 70, 100, 40, color(220, 100, 100), color(100), color(250));  
    if (btnevent1) { 
      btnevent1 = false;
      snd4.stop(); // Stop `snd4` before switching scenes
      this.sceneManager.showScene(help);
    }

    btnevent2 = checkButtonPress("Start", width / 2 - 60, height - 240, 120, 40, color(120, 180, 100), color(100), color(250));
    if (btnevent2) {   
      btnevent2 = false;
      playshortsound(); 
      snd4.stop(); // Stop `snd4` before switching to the next scene
      this.sceneManager.showNextScene();
    }
  };

  let textX = 20;
  let textY = 0;

  this.keyPressed = function() {
    fill(0, 255, 0);
    text(keyCode, textX, textY);

    if (textY > height) {
      // Reset logic, if any, can go here
    }
  };

  this.mousePressed = function() {
    // No specific action for mousePressed on the splash screen yet
  };
}




///////////////////////  2  ////////////////////////
function main() {
  this.y = 0;
  this.lox = 50;
  this.loy = 120;
  let img; 
  let btnevent1 = false;

  let buttons = [];
  let currentInput = '';
  let result = '';
  let x = 290, y = 435;
  let buttonWidth = 100, buttonHeight = 100;
  let animationOverride = false; 
  let resetAnimationTimeout;
  let wrongInputMessage = ''; 
  let wrongInputTimeout;
  let secondWrongInputMessage = ''; 
  let wrongInputCount = 0; 

  this.setup = function () {
    L= loadFont("assets/The Amazing Spider-Man.ttf")

    console.log("main page");
    img = loadImage('assets/bacgroundfight1.png'); 

    // Stop `snd4` to ensure it doesn't play on the main page
    if (snd4.isPlaying()) {
      snd4.stop();
    }

    let buttonLabels = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '=', 'D', '+'
    ];

    buttons = buttonLabels.map((label, i) => ({
      label: label,
      x: x + (i % 4) * (buttonWidth + 10),
      y: y + Math.floor(i / 4) * (buttonHeight + 10), 
      width: buttonWidth,
      height: buttonHeight,
      action: buttonActions(label) 
    }));
  };

  function buttonActions(label) {
    if (label === 'D') {
      return function () {
        currentInput = '';
        result = '';
        wrongInputMessage = ''; 
        secondWrongInputMessage = ''; 
        wrongInputCount = 0;
        clearTimeout(wrongInputTimeout);
        snd3.play(); 
      };
    } else if (label === '=') {
      return function () {
        try {
          if (currentInput === "1+1") {
            player.changeAnimation("BLAST"); 
            animationOverride = true; 
            clearTimeout(resetAnimationTimeout); 
            resetAnimationTimeout = setTimeout(function () {
              player.changeAnimation("normal");
              animationOverride = false; 
            }, 1000);
            wrongInputMessage = ''; 
            secondWrongInputMessage = ''; 
            wrongInputCount = 0;
          } else if (currentInput === "5*5") {
            player.changeAnimation("KICK"); 
            animationOverride = true; 
            clearTimeout(resetAnimationTimeout); 
            resetAnimationTimeout = setTimeout(function () {
              player.changeAnimation("normal");
              animationOverride = false; 
            }, 1000); 
            wrongInputMessage = ''; 
            secondWrongInputMessage = ''; 
            wrongInputCount = 0;
          } else {
            player.changeAnimation("MAD"); 
            animationOverride = true; 
            clearTimeout(resetAnimationTimeout); 
            resetAnimationTimeout = setTimeout(function () {
              player.changeAnimation("normal");
              animationOverride = false; 
            }, 5000);

            wrongInputMessage = "Wrong one";
            clearTimeout(wrongInputTimeout); 
            wrongInputTimeout = setTimeout(function () {
              wrongInputMessage = ''; 
            }, 5000);

            wrongInputCount++;

            if (wrongInputCount === 2) {
              secondWrongInputMessage = "Try 1+1 or 5*5";
            }
          }

          result = eval(currentInput);

        } catch (e) {
          result = 'Error';
        }
        currentInput = result;

        snd3.play(); 
      };
    } else {
      return function () {
        currentInput += label; 
        wrongInputMessage = ''; 
        snd3.play(); 
      };
    }
  }

  this.mousePressed = function () {
    buttons.forEach(function (button) {
      if (mouseX > button.x && mouseX < button.x + button.width &&
          mouseY > button.y && mouseY < button.y + button.height) {
        button.action(); 
      }
    });
  };

  this.enter = function () {
    console.log("main");

    // Stop `snd4` in case it is still playing
    if (snd4.isPlaying()) {
      snd4.stop();
    }

    player.position.x = 50;
    player.position.y = 80;
    player.position.x = width / 2;
    player.position.y = 240;
    player.visible = true;
    player.changeAnimation("normal");
    if (!snd1.isPlaying()) {
      snd1.play(); 
    }
  };

  this.draw = function () {
    background("lightblue");

    fill(0, 120, 200);
    image(img, 0, 0, 1000, 330);
    rect(250, 400, 500, 500);
    btnevent1 = checkButtonPress("Help", width - 150, height - 70, 100, 40, color(220, 100, 100), color(100), color(250));
    if (btnevent1) {
      btnevent1 = false;
      this.sceneManager.showScene(help);
    }
    fill(255);
    rect(300, 340, 380, 40); 
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentInput || result, 490, 357);

    buttons.forEach(function (button) {
      fill(200,110,0);
      rect(button.x, button.y, button.width, button.height, 10); 
      fill(0,200,100);
      textSize(24);
      text(button.label, button.x + button.width / 2, button.y + button.height / 2); 
    });

    if (!animationOverride && mouseX > player.position.x && mouseX < player.position.x + player.width &&
        mouseY > player.position.y && mouseY < player.position.y + player.height) {
      player.changeAnimation("MAD"); 
    } else if (!animationOverride) {
      player.changeAnimation("normal"); 
    }

    player.draw();

    if (wrongInputMessage) {
      fill(0);
      rect(width - 204, 440, 200, 120);
      fill(255, 0, 0); 
      textSize(32);
      textAlign(RIGHT, CENTER);
      text(wrongInputMessage, width - 20, height / 2);
    }

    if (secondWrongInputMessage) {
      fill(0);
      rect(width - 230, 600, 230, 120);
      fill(255, 165, 0);
      textSize(32);
      textAlign(RIGHT, CENTER);
      text(secondWrongInputMessage, width - 20, height / 1.5); 
    }
  };
}


  this.mousePressed = function () {
    buttons.forEach(function (button) {
      if (mouseX > button.x && mouseX < button.x + button.width &&
          mouseY > button.y && mouseY < button.y + button.height) {
        button.action(); 
      }
    });
  }







////////////////////////////// 3 /////////////////

function help() {

  this.setup = function()  {
      console.log("We are at setup for help");
      img = loadImage('assets/bacgroundfight1.png'); 
      if (snd4.isPlaying()) snd4.stop();

  }

  this.enter = function()
  {
   console.log("help page");
   player.visible = true;
   player.position.x = 200;
   player.position.y = 214;
   if (snd4.isPlaying()) {
    snd4.stop();
  }
   if (snd1.isPlaying()) snd1.stop();
   if (snd2.isPlaying()) snd2.stop();
   if (snd3.isPlaying()) snd3.stop();
  }

  this.draw = function() {
    background("lightblue");
    image(img, 0, 0, 1000, 330);
    image(img, 0, 330, 1000, 330);
    image(img, 0, 660, 1000, 330);
    fill(0);
rect(400,100,580,130);
rect(300,600,410,130);
rect(10,410,980,130);
    fill("green");
    textAlign(LEFT);
    textSize(35);
    text( "Hello, I am player, if you use me right,\n I can kick people butt'. " , 400,170);

    text( "Hover over me to see me mad because not point of the game, \nevery time you don't put right input for a combo, an error will\nshow on top and right, after second time, give you the answer  ", 30, 440);
    text( "Wrong one, Try 1+1 or 5*5 " , 300,670);


 

    if ( player.mouse.hovering() ) {
      console.log("over");
      player.changeAnimation("MAD");
    
    
   }  else {

    player.changeAnimation("normal");


   }
    

   if (player.mouse.pressing()) {
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

// Test if the cursor is over the box
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