let recMode = false;
let m;
let M;
let n;
let n2;
let N;
let N2;
let N3
let can;  
let theta;
let alpha = 0; 
let dgFirstTree;      
let dgSecondLayerOfLeaf;      
let dgSecondTree;    
let dgSecondLayerOfLeaf2;
let dgThirdlayerofleaf3;
let dgThirdTree;
let dgThirdTreeDifferentLeaf;

function setup() {
    can = createCanvas(1920, 1080);
    background(20);
    fill(255);
    frameRate(111); 
    noLoop();

    console.log(frameCount);
    m = loadImage("assets/morningimage.png");
    M = loadImage("assets/morning2image.jpg");
    n = loadImage("assets/noonimage.jpg");
    n2 = loadImage("assets/noon2image.jpg");
    n3 = loadImage("assets/noon3image.jpg");

    N = loadImage("assets/nightimage.jpg");
     N2 = loadImage("assets/night2image.jpg");
     N3 = loadImage("assets/night2image.jpg");

    dgFirstTree = new dgTree(); 
    dgSecondLayerOfLeaf = new dgTreeSecondLayer();
    dgSecondTree = new dgBigTree(); 
    dgSecondLayerOfLeaf2 = new dgBigTreeSecondLayer();
    dgThirdlayerofleaf3 = new dgBigTreeThirdLayer(); 
    dgThirdTree = new dgSnowTree(); 
    dgThirdTreeDifferentLeaf = new dgSnowTreeCrazy();

}



  function preload() {

  }

function draw() {
    if (frameCount < 200) {
      frameRate(30);

      background(m);
      if (alpha < 255) {//fading in, but hard to tell 
          alpha += 5; 
      }


      stroke(255, alpha);
      for (let i = 0; i < 100; i++) {
          strokeWeight(1);
        
          stroke(50, alpha); 
          point(random(width), random(height));
      }
      stroke(255, alpha);
      let a = ((frameCount / 2) / width) * 290;
      theta = radians(a);
      translate(width / 2, height);
      dgFirstTree.drawBranch(320);
    } else if (frameCount < 300) {
      background(M);
      frameRate(1);

        if (alpha < 255) {
          alpha += 5; 
      }
      stroke(255, alpha);
      for (let i = 0; i < 100; i++) {
          strokeWeight(1);
          stroke(50, alpha);
          point(random(width), random(height));
      }
      stroke(255, alpha);
      let a = ((frameCount / 2) / width) * 290;
      theta = radians(a);
      translate(width / 2, height);
      dgSecondLayerOfLeaf.drawBranch(320); 
      //////////////////////////////////////////////////////////////////////////
  }
     else if (frameCount < 400) {
        background(n);
        frameRate(1);
      let a = ((frameCount/2) / width) * 190;
      theta = radians(a);
translate(width / 2, height);

stroke(20, 100, 60); 
strokeWeight(10); 
line(0, 0, 0, -120);

translate(0, -120);
 
strokeWeight(8); 
dgSecondTree.drawBranch(320); 

     } else if (frameCount < 500) {
  background(n2);
  frameRate(1);
let a = ((frameCount/2) / width) * 190;
theta = radians(a);

translate(width / 2, height);

stroke(20, 100, 60); 
strokeWeight(10); 
line(0, 0, 0, -120);

translate(0, -120);

strokeWeight(8); 
dgSecondLayerOfLeaf2.drawBranch(320); 

     }
else if (frameCount < 600) {
  background(n3);
  frameRate(1);
let a = ((frameCount/2) / width) * 190;
theta = radians(a);

translate(width / 2, height);

stroke(20, 100, 60); 
strokeWeight(10); 
line(0, 0, 0, -120);

translate(0, -120);

strokeWeight(8);
dgThirdlayerofleaf3.drawBranch(320); 
//////////////////////////////////////////////////////////////////////////
    } else if (frameCount < 700) {
        background(N);
        frameRate(1);
     
        let a = ((frameCount/2) / width) * 190;
        theta = radians(a);
       
        translate(width / 2, height);
        
        stroke(139, 69, 19);
        strokeWeight(4); 
        line(0, 0, 0, -120);
        translate(0, -120); 
       
        dgThirdTree.drawBranch(420); 
       
    }
    else if (frameCount < 800) {
      background(N2);
      frameRate(1);
   
      let a = ((frameCount/2) / width) * 190;
      theta = radians(a); 
     
      translate(width / 2, height);
      
      stroke(139, 69, 19);
      strokeWeight(4); 
      line(0, 0, 0, -120);
      translate(0, -120); 
     
      dgThirdTreeDifferentLeaf.drawBranch(420);
     
    }


    else if (frameCount < 1810) {
      background(N3);
      frameRate(1);
   
      let a = ((frameCount/2) / width) * 190;
      theta = radians(a); 
     
      translate(width / 2, height);
      
      stroke(139, 69, 19); 
      strokeWeight(4); 
      line(0, 0, 0, -120);
      translate(0, -120);
     
      dgThirdTreeDifferentLeaf.drawBranch(420); 
     
     
}
recordit();
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

function recordit() {  // new version
    if (recMode == true) {
        let ext = nf(frameCount, 4);
        saveCanvas(can, 'frame-' + ext, 'jpg');
        console.log("rec " + ext);
    }
}


class dgTree {//class, overall formate is the same throughout the classes
  constructor() {
    this.strokeWeight = 5;  //stroke weight
    this.branchColor = color(109, 59, 19, 205); //core tree branch color  //3 core method i use
    this.leafColors = [//all color i use for the leaf into a lis
      color(0, 255, 150, 255), 
      color(0, 155, 150, 255), 
    ];
  }
  setAngle(theta) {
    this.theta = theta; 
  }
  setThickness(weight) {
    this.strokeWeight = weight; 
  }
  setColor( alpha = 255) {
    this.branchColor = color( alpha); //fade in
  }


  
  drawBranch(h) {//argument 
    strokeWeight(this.strokeWeight);
    stroke(this.branchColor,0,0, alpha);
    line(0, 0, 0, -h);
    translate(0, -h);

    if (h < 10) {
      fill(this.leafColors[0], alpha);
      ellipse(0, 0, 18, 32);
      fill(this.leafColors[1], alpha);
      ellipse(0, 0, 9, 16);
    } else {
      push();
      rotate(theta);
      this.drawBranch(h * 0.66);  
      pop();

      push();
      rotate(-theta);
      this.drawBranch(h * 0.66);  
      pop();
    }
  }
}
class dgTreeSecondLayer {
  constructor() {
    this.strokeWeight = 3;  
    this.branchColor = color(109, 59, 19, 205);  
    this.leafColors = [
      color(0, 255, 150, 255), 
      color(0, 155, 150, 255), 
   
      color(0, 30, 155, 150), 
      color(0, 40, 55, 150), 
    ];
  }
  setAngle(theta) {
    this.theta = theta; 
  }
  setThickness(weight) {
    this.strokeWeight = weight; 
  }
  setColor( alpha = 255) {
    this.branchColor = color(alpha); 
  }
  drawBranch(h) {//argument 
  strokeWeight(h / 10); 
 

  stroke(this.branchColor,0,0,0, alpha); 
  line(10, 0, 0, -h);  
  translate(0, -h); 
  
  
  if (h < 10) {
      fill(this.leafColors[0], alpha); 
      ellipse(0, 0, 18, 32);
      fill(this.leafColors[1], alpha);
      ellipse(0, 0, 9, 16);

       
      fill(this.leafColors[2],alpha);
      ellipse(0, 60, 18, 32);
      fill(this.leafColors[3],alpha); 
      ellipse(0, 60, 9, 16); 
  
    } else {
      push();
      rotate(-theta); 
      this.drawBranch(h * 0.66);  
      pop();
  
      push();
      rotate(theta); 
      this.drawBranch(h * 0.66);  
      fill(this.leafColors[3],alpha); 
      circle(800,800,20);
      pop();
    }
}
}

class dgBigTree {
  constructor() {
    this.strokeWeight = 3;  
    this.branchColor = color(109, 59, 19, 205);  
    this.leafColors = [
      color(0, 205, 150, 155), 
      color(0, 105, 150, 255), 
    ];
  }
  setAngle(theta) {
    this.theta = theta; 
  }
  setThickness(weight) {
    this.strokeWeight = weight; 
  }
  setColor( alpha = 255) {
    this.branchColor = color(alpha); 
  }
  
  drawBranch(h) {//argument 
    h *= 0.97;

  if (h > 2) {
    
    push();    
    rotate(theta); 
    strokeWeight(this.strokeWeight);
    stroke(this.branchColor); 
    
    line(0, 0, 0, -h);
    translate(0, -h);
    this.drawBranch(h* 0.66);       
    pop();    

    push();
    rotate(-theta);
    stroke(100, 69, 19); 

    line(0, 0, 0, -h);
    translate(0, -h);
    this.drawBranch(h* 0.66);
    
    
    pop();
  } else {
    
    noStroke();
    
    fill(this.leafColors[0]); 
    ellipse(10, 0, 9, 16); 
    fill(this.leafColors[1]); 
    ellipse(0, 0, 4.5, 8); 


 
  }
}
}


class dgBigTreeSecondLayer {
  constructor() {
    this.strokeWeight = 3;  
    this.branchColor = color(109, 59, 19, 205);  
    this.leafColors = [
      color(0, 205, 150, 155), 
      color(0, 105, 150, 255), 
      color(0, 255, 150, 255), 
      color(0, 155, 150, 255), 
    ];
  }
  setAngle(theta) {
    this.theta = theta; 
  }
  setThickness(weight) {
    this.strokeWeight = weight; 
  }
  setColor( alpha = 255) {
    this.branchColor = color(alpha); 
  }
  drawBranch(h) {//argument 

    h *= 0.97;

  if (h > 2) {
    
    push();    
    rotate(theta); 
    strokeWeight(this.strokeWeight);
    stroke(this.branchColor); 
    line(0, 0, 0, -h);
    translate(0, -h);
    this.drawBranch(h* 0.66);
    pop();    

    
    push();
    rotate(-theta);
    stroke(100, 69, 19); 

    line(0, 0, 0, -h);
    translate(0, -h);
    this.drawBranch(h* 0.66);

    fill(this.leafColors[3],alpha); 
    circle(800,800,20);
    pop();
  } else {
    fill(120, 100, 30); 
    noStroke();
    
    fill(this.leafColors[0]); 
    ellipse(0, 0, 9, 16); 
    fill(this.leafColors[1]); 
    ellipse(0, 0, 4.5, 8);  

    fill(this.leafColors[2]); 
    ellipse(0, 60, 9, 16); 
    fill(this.leafColors[3]); 
    ellipse(0, 60, 4.5, 8); 


  
  }
}
}

class dgBigTreeThirdLayer {
  constructor() {
    this.strokeWeight = 3;  
    this.branchColor = color(109, 59, 19, 205);  
    this.leafColors = [
      color(0, 205, 150, 155), 
      color(0, 105, 150, 255), 
      color(0, 255, 150, 255), 
      color(0, 155, 150, 255), 
      color(0, 85, 100, 255), 
      color(0, 55, 50, 255), 
    ];
  }
  setAngle(theta) {
    this.theta = theta; 
  }
  setThickness(weight) {
    this.strokeWeight = weight; 
  }
  setColor( alpha = 255) {
    this.branchColor = color(alpha); 
  }
  drawBranch(h) {//argument 

    h *= 0.97;

  if (h > 2) {
    push();    
    rotate(theta); 
    strokeWeight(this.strokeWeight);
    stroke(this.branchColor);
    line(0, 0, 0, -h);
    translate(0, -h);
    this.drawBranch(h* 0.66);
    pop();    

    push();
    rotate(-theta);
    stroke(100, 69, 19); 

    line(0, 0, 0, -h);
    translate(0, -h);
    this.drawBranch(h* 0.66);
    pop();
  } else {
    fill(120, 100, 30); 
    noStroke();
    
    fill(this.leafColors[0]); 
    ellipse(0, 0, 9, 16); 
    fill(this.leafColors[1]); 
    ellipse(0, 0, 4.5, 8); 

    fill(this.leafColors[2]); 
    ellipse(0, 60, 9, 16); 
    fill(this.leafColors[3]); 
    ellipse(0, 60, 4.5, 8); 


    fill(this.leafColors[4]); 
    ellipse(0, 120, 9, 16); 
    fill(this.leafColors[5]); 
    ellipse(0, 120, 4.5, 8); 

  }
}
}
class dgSnowTree {
  constructor() {
    this.strokeWeight = 3;  
    this.branchColor = color(19, 59, 19, 205);  
    this.leafColors = [
      color(250), 
      color(random(240, 255), random(240, 255), random(240, 255), random(150, 255)), 
   
    ];
  }
  setAngle(theta) {
    this.theta = theta; 
  }
  setThickness(weight) {
    this.strokeWeight = weight; 
  }
  setColor( alpha = 255) {
    this.branchColor = color(alpha); 
  }
  drawBranch(h){//argument 

  h *= 0.66;

  if (h > 2) {
    push(); 
    stroke(this.branchColor); 
    strokeWeight(this.strokeWeight);
    rotate(theta); 
    
    line(0, 0, 0, -h); 
    translate(0, -h); 
    fill(this.leafColors[0]); 
    noStroke(); 
    ellipse(0, 0, 10, 10); 


    fill(this.leafColors[1]); 
    noStroke(); 
    ellipse(0, 0, random(8, 15), random(8, 15)); 

    this.drawBranch(h);
    pop(); 

    
    push(); 
    stroke(139, 9, 19); 
    strokeWeight(h / 20); 
    rotate(-theta);
    line(0, 0, 0, -h); 
    translate(0, -h); 
     fill(this.leafColors[0]); 
  noStroke(); 
  ellipse(0, 0, 10, 10); 



  fill(this.leafColors[1]); 
  noStroke(); 
  ellipse(0, 0, random(8, 15), random(8, 15)); 
    this.drawBranch(h);
    pop(); 
  }
}
}

class dgSnowTreeCrazy {
  constructor() {
    this.strokeWeight = 10;  
    this.branchColor = color(19, 59, 19, 205);  
    this.leafColors = [
      color(250), 
      color(random(200, 255), random(200, 255), random(200, 255), random(150, 255)), 
   
    ];
  }
  setAngle(theta) {
    this.theta = theta; 
  }
  setThickness(weight) {
    this.strokeWeight = weight; 
  }
  setColor( alpha = 255) {
    this.branchColor = color(alpha); 
  }
  drawBranch(h) {//argument 

  h *= 0.66;

  if (h > 2) {
   
    push(); 
    stroke(this.branchColor); 
    strokeWeight(this.strokeWeight);
    circle(900,900,20);
    fill(250);
    ellipse(900, 900, 80, 20);
    fill(250,0,200);
    ellipse(900, 900, 40, 50);
    rotate(theta); 
    line(0, 0, 0, -h); 
    translate(0, -h); 
    fill(255); 
    noStroke(); 
    ellipse(130, 0, 10, 10); 
 
    
    fill(random(40, 255), random(30, 255), random(10, 255), random(20, 255)); 
    noStroke(); 
    ellipse(130, 0, random(8, 15), random(8, 15)); 
    this.drawBranch(h);

    pop();

   
    push();
    stroke(this.branchColor); 
    strokeWeight(this.strokeWeight);
    rotate(-theta); 
    line(0, 0, 0, -h); 
    translate(0, -h); 
    fill(255); 
    noStroke(); 
    ellipse(30, 0, 10, 10); 
  

    fill(random(240, 255), random(240, 255), random(240, 255), random(150, 255)); 
    noStroke(); 
    ellipse(130, 0, random(8, 15), random(8, 15)); 
    this.drawBranch(h);
    pop();
  }
}
}
function drawSnow2() {
  
  fill(255); 
  noStroke(); 
  ellipse(30, 0, 10, 10); 
}

function drawLeaves2() {
  fill(random(240, 255), random(240, 255), random(240, 255), random(150, 255)); 
  noStroke(); 
  ellipse(30, 0, random(8, 15), random(8, 15)); 

}
