let recMode = false;

let can;  // create a canvas reference

function setup() {
    can = createCanvas(1920, 1080);
    background(20);
    fill(255);
    frameRate(111); // slow down the framerate so everything can be drawn. no hurry.
    noLoop();

    console.log(frameCount);
}

function draw() {
    //  start as true until 99
    if (frameCount < 200) {
        background(0);
        frameRate(30);
        stroke(255);
      
        let a = ((frameCount/4) / width) * 290;
        theta = radians(a);
        translate(width/2,height);
        
        line(0,0,0,-120);
        translate(0,-120);
        branch(60);
      circle(100);
      rect(50);
      
    } else if (frameCount < 350) {
        background(0);
        frameRate(30);
        stroke(255);
        let a = ((frameCount/4) / width) * 290;
        theta = radians(a);
        translate(width/2,height);
        line(0,0,0,-120);
        translate(0,-120);
       
        branch(120);
      circle(100);
      rect(1350);
      
    } else if (frameCount < 410) {
        background(0);
        frameRate(30);
        stroke(255);
        let a = ((frameCount/4) / width) * 290;
        theta = radians(a);
        translate(width/2,height);
        line(0,0,0,-120);
        translate(0,-120);
        branch(240);
      circle(100);
      rect(50);
      
    }
    else {
        background(0);
        frameRate(1);
        stroke(255);
        let a = ((frameCount/4) / width) * 290;
        theta = radians(a);
        translate(width/2,height);
        line(0,0,0,-120);
        translate(0,-120);
        branch(540);
      circle(150);
      rect(150);
      
    }

    // recordit();

}


/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {

    if (keyIsPressed === true) {
        let k = key;
        console.log("k is " + k);

        if (k == 's' || k == 'S') {
            console.log("Stopped Recording");
            recMode = false;
            noLoop();
        }

        if (k == ' ') {
            console.log("Start Recording");
            recMode = true;
            loop();
        }
    }
}

// function recordit() {  // new version
//     if (recMode == true) {
//         let ext = nf(frameCount, 4);
//         saveCanvas(can, 'frame-' + ext, 'jpg');
//         console.log("rec " + ext);
//     }
// }
function branch(h) {
    // Each branch will be 2/3rds the size of the previous one
    h *= 0.66;
  
    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    if (h > 2) {
      push();    // Save the current state of transformation (i.e. where are we now)
      rotate(theta);   // Rotate by theta
      line(0, 0, 0, -h);  // Draw the branch
      
      translate(0, -h); // Move to the end of the branch
      
      branch(h);       // Ok, now call myself to draw two new branches!!
      circle(h)
      rect(10, 10, 0, -h);
      pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
  
      // Repeat the same thing, only branch off to the "left" this time!
      push();
      rotate(30);

      line(10, 0, 0, -h);
      fill(random(200),0,200);
      circle(10, 0, 5, -h);
      
      rect(110, 0, 1, -h);
  
      rect(110, 0, 1, -h);
      translate(0, -h);
      branch(h);
      circle(h)
      pop();
    }
  }
  