
//16x16 array and texts
  let counter2 = -45;

let gridarr1 = [
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], 
    [0, 0, 0, 0, 2, 2, 2, 5, 5, 6, 5, 0, 0, 0, 0, 0], 
    [0, 0, 0, 2, 5, 2, 5, 5, 5, 6, 5, 5, 5, 0, 0, 0], 
    [0, 0, 0, 2, 5, 2, 2, 5, 5, 5, 6, 5, 5, 5, 0, 0], 
    [0, 0, 0, 2, 2, 5, 5, 5, 5, 6, 6, 6, 6,, 0, 0, 0], 
    [0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0], 
    [0, 0, 0, 0, 1, 1, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 0, 0, 0], 
    [0, 0, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 0, 0], 
    [0, 0, 5, 5, 1, 3, 4, 3, 3, 4, 3, 1, 5, 5, 0, 0], 
    [0, 0, 5, 5, 5, 3, 3, 3, 3, 3, 3, 5, 5, 5, 0, 0], 
    [0, 0, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 0, 0], 
    [0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0], 
    [0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0], 
    [0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0], 
];
let gridarr2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 7, 8, 8, 8, 8, 8, 7, 0, 0, 0, 0, 0],
    [0, 0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 7, 0, 0, 0, 0],
    [0, 0, 7, 8, 8, 8, 0, 5, 8, 0, 5, 8, 7, 0, 0, 0],
    [0, 7, 8, 8, 8, 8, 0, 4, 8, 0, 4, 8, 8, 7, 0, 0],
    [7, 8, 8, 8, 8, 8, 0, 0, 8, 0, 0, 8, 8, 8, 7, 0],
    [7, 8, 8, 8, 3, 8, 8, 8, 8, 8, 8, 3, 8, 8, 7, 0],
    [0, 7, 8, 8, 8, 8, 8, 7, 7, 8, 8, 8, 8, 7, 0, 0],
    [0, 0, 7, 8, 8, 8, 8, 3, 3, 8, 8, 8, 7, 0, 0, 0],
    [0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 0, 0, 0],
    [0, 0, 0, 7, 8, 8, 8, 8, 8, 8, 8, 7, 7, 0, 0, 0],
    [0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 7, 7, 3, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//0,1,2,3,4,5,6,7,8,9
var grass = [
    [9,9,9,9,0,0,0,0,9,9,9,9,9,9,9,9],
    [9,9,9,0,5,5,5,5,0,0,9,9,9,9,9,9],
    [9,9,0,5,5,5,5,5,5,5,0,9,9,9,9,9],
    [9,0,5,5,5,5,5,5,5,5,5,0,0,9,9,9],
    [9,0,5,5,5,6,6,6,5,5,6,6,6,0,9,9],
    [0,5,5,5,5,6,6,6,6,6,6,5,6,6,0,9],
    [0,5,5,5,6,6,6,5,5,5,6,6,6,6,0,9],
    [0,5,5,5,6,9,3,9,5,5,6,9,3,9,6,0],
    [0,5,5,5,6,9,3,3,6,6,6,9,3,3,6,0],
    [0,5,5,5,6,9,1,1,6,6,6,9,1,1,6,0],
    [9,0,5,2,6,6,6,6,6,6,6,6,6,6,6,0],
    [9,0,6,6,2,6,6,6,6,6,6,6,6,6,2,0],
    [9,0,6,5,6,2,2,2,2,2,2,2,2,2,0,9],
    [9,0,6,6,6,2,5,5,6,2,2,6,5,6,0,9],
    [9,9,0,2,2,2,6,6,6,0,2,6,6,6,0,9],
    [9,9,9,0,0,0,0,0,0,9,0,0,0,0,9,9]
  
  ];   

  var colorPokeMap = {
    0: [0,0,0],// Black
    1: [160,64,0],// Brown
    2: [0,192,192],// Cyan 
    3: [255,32,0],// Red 
    4: [255,128,0],// Orange 
    5: [0,192,0],// Green 
    6: [128,224,255],// light Blue 
    7: [255,192,0],// Yellow 
    8: [255,255,128],// Pale 
    9: [255,255,255] // White 
    };
//fire flower
let textarr = [
    ["light", "light", "sky", "sky", "sky","sky", "sky", "sky", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["light", "light", "sky", "light", "sky","sky", "sky", "sky", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["light", "sky", "sky", "sky", "sky","sky", "sky", "sky", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "light", "sky", "sky","sky", "sky", "sky", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "sky", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "fire", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "light", "sky", "sky", "sky","sky", "fire", "light", "fire", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","fire", "light", "core", "light", "fire","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","fire", "light", "core", "light", "fire","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "fire", "light", "fire", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "fire", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "root", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "root", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "root", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "root", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["dirt", "dirt", "dirt", "dirt", "dirt","dirt", "dirt", "root", "dirt", "dirt","dirt","dirt","dirt","dirt","dirt","dirt"]
];

//cold flower
let textarr2 = [
    ["light", "light", "sky", "sky", "sky","sky", "sky", "sky", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["light", "light", "sky", "light", "sky","sky", "sky", "sky", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["light", "sky", "sky", "sky", "sky","sky", "sky", "sky", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "light", "sky", "sky","sky", "sky", "sky", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "sky", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "cold", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "light", "sky", "sky", "sky","sky", "cold", "white", "cold", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","cold", "white", "core", "white", "cold","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","cold", "white", "core", "white", "cold","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "cold", "white", "cold", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "cold", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "root", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "root", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "root", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["sky", "sky", "sky", "sky", "sky","sky", "sky", "root", "sky", "sky","sky","sky","sky","sky","sky","sky"],
    ["dirt", "dirt", "dirt", "dirt", "dirt","dirt", "dirt", "root", "dirt", "dirt","dirt","dirt","dirt","dirt","dirt","dirt"]
];

let font1;
let images =[];

let currentPage = 1;

function preload()  {
       font1 = loadFont('assets/oswald.ttf');
       images[0] = loadImage('assets/tree1.jpg');
       images[1] = loadImage('assets/tree2.jpg');
       images[2] = loadImage('assets/tree3.jpg');
       images[3] = loadImage('assets/tree4.jpg');
       images[4] = loadImage('assets/tree5.jpg');
       images[5] = loadImage('assets/tree6.jpg');
       images[6] = loadImage('assets/tree7.jpg');
       images[7] = loadImage('assets/tree8.jpg');
       images[8] = loadImage('assets/tree9.jpg');
       images["sky"] = loadImage('assets/tree9.jpg');




}

function setup() {
     createCanvas(800, 700);
     background(110, 60, 150);
     fill(100);
     textAlign(LEFT);
     textFont(font1);
       angleMode(DEGREES);

      
}

function draw() {
    background(10,50,10);

    if (currentPage == 2) {
      //2darr, x,y,rot,scale, alpha

      dgCoolTriangleShapeNospin(gridarr1, -260, -280, 0, 8, 40);
      dgCoolTriangleShapeSpin(gridarr1, 30, 20, 45, 2, 255);
      dgCoolTriangleShapeSpin(gridarr1, 380, 320, 20, 1.25, 100);
      dgCoolTriangleShapeWithoutSpin(gridarr1, 380, 320, 20, 1.25, 100);
      dgCoolTriangleShapeWithoutSpin(gridarr1, 30, 20, 45, 2, 255);

      dgCoolTriangleShapeWithColor(gridarr1, 350, 690, 45, 1.15, 255);
      dgCoolTriangleShapeWithColor(gridarr1, 760, 560, -45, 1, 255);
   
      dgFireFlower(textarr2, 400, 550, 10, .55, 255); 
      dgFireFlower(textarr, 400, 50, 2110, .75, 155); 

      dgDifferentShapesMember(gridarr1, 60, 480, 2220, 0.85, 255);

      push();
      translate(-60,450);
      fill(200,0,0);
      textSize(20);
      let t = "mario Different shape"
      text(t,0,0,300);  
      pop();
 
      push();
      translate(300,300);
      stroke(4);
      fill(0,200,0);
      textSize(20);
      let q = "Blsck/white mario"
      text(q,0,0,300);  
      pop();
      push();
      translate(400,650);
      stroke(4);
      fill(0,200,0);
      textSize(20);
      let e = "Mario item Text"
      text(e,0,0,300);  
      pop();

      let gridSize = 10;
      for (let i = 0; i < textarr2.length; i++) {
          for (let j = 0; j < textarr2[i].length; j++) {
            let x = j * gridSize;
            let y = i * gridSize;
            dgTextIntoShapes(textarr2[i][j], x+410, y+50, gridSize);
          }
        }

        push();
        translate(350,50);
        stroke(4);
        fill(0,200,0);
        textSize(20);
        let f = "text into shapes"
        text(f,0,0,300);  
        pop();
    }

else if (currentPage == 1) {

    dgMyMario(gridarr1, 420, 360, 45, 2.15, 255);
    dgFireFlower(textarr, 350, 50, -15, .75, 15);
    dgBasicFade(gridarr1, 120, 220, 45, 0.75, 255);
    dgBasicChnageShape(gridarr1, 90, 420, 45, 0.75, 255);
    dgMemberArrayWithImage2(gridarr1,images, -400, 0, -20, 10.85,7);
    dgMemberArrayWithImage(gridarr1,images, 100, 0, -20, 0.85,7);


    push();
    translate(400,20);
    stroke(4);
    fill(0,200,0);
    textSize(20);
    let e = "array text"
    text(e,0,0,300);  
    pop();
    push();
    translate(420,360);
    stroke(4);
    fill(0,200,0);
    textSize(20);
    let i= "mario"
    text(i,0,0,300);  
    pop();

    
    push();
    translate(20,360);
    stroke(4);
    fill(0,200,0);
    textSize(20);
    let m= "mario/Shape"
    text(m,0,0,300);  
    pop();


    
    push();
    translate(20,190);
    stroke(4);
    fill(0,200,0);
    textSize(20);
    let g= "mario black and white fade"
    text(g,0,0,300);  
    pop();

    push();
    translate(20,10);
    stroke(4);
    fill(0,200,0);
    textSize(20);
    let s= "mario Image"
    text(s,0,0,300);  
    pop();

    
   }
    
    else if (currentPage == 3) {
        dgMemberArrayWithImage2(gridarr2,images, -400, 0, -20, 10.85,7);
        dgMemberArrayWithImage2(grass,images, 400, 80, 0, 2.85,190);
        dgMemberArrayWithImage3(grass,images, 400, 80, 0, 1.85,190);
        dgMemberArrayWithImage(gridarr2,images, 50, 130, -3, 1.55);
        dgCoolTriangleShapeWithoutSpin(gridarr2, 380, 420, 20, 1.25, 100);
        dgLyndonPokemon(grass, 500, 10, 0, 0.65,190);
        dgCoolTriangleShapeWithColor(grass, 350, 690, 45, 1.15, 255);
        dgAngeliqueKirby(gridarr2, 550, 420, 0, 0.65,190);
        dgDifferentShapesMember(gridarr2, 60, 480, 2220, 0.85, 255);
        dgDifferentShapesMember2(grass, 620, 80, 220, 0.85, 255);
        push();
        translate(100,100);
        stroke(4);
        fill(0,200,0);
        textSize(20);
        let q = "kirby/image"
        text(q,0,0,300);  
        pop();

        push();
        translate(480,50);
        stroke(4);
        fill(0,200,0);
        textSize(20);
        let e = "Pokemon/image"
        text(e,0,0,300);  
        pop();
      
        push();
        translate(350,400);
        stroke(4);
        fill(0,200,0);
        textSize(20);
        let g = "kirby black/white"
        text(g,0,0,300);  
        pop();

        push();
        translate(120,500);
        stroke(4);
        fill(0,200,0);
        textSize(20);
        let h = "pokemon color change/shape"
        text(h,0,0,300);  
        pop();

        push();
        translate(-60,450);
        fill(200,0,0);
        textSize(20);
        let t = "Kirby Different shape"
        text(t,0,0,300);  
        pop();
   
        push();
        translate(550,70);
        fill(200,0,0);
        textSize(20);
        let w = "Pokemon Different shape"
        text(w,0,0,300);  
        pop();
  
    } 

    else {
background(20,200,20)
        push();
   
        translate(0,120);
        translate(250,120);
        
        dgCoolMario(gridarr1, 100, -40, 0, 2, 255);
        translate(-220,-110);
        fill(200);
        textSize(40);
        text ("Groups memebers is David,Lyndon,Angelique",-80 ,60, 800 );
        text ("David=Mario,Lyndon=Pokeomon,Angelique=Kirby",-20 ,10, 800 );

        pop();

    }




}


function keyPressed() { 

  
    //console.log(key);
     // or 
    if ( key == '1' ) { 
      console.log("Page 1");
      currentPage = 1;

     } else if ( key == '2' ) { 
        console.log("Page 2");
        currentPage = 2;
        
     } else if ( key == '3' ) { 
        console.log("Page 3");
        currentPage = 3;   
     } else {
        currentPage = 0;

     }
  
    }



// the map functions.



          //2darr, x,y,rot,scale, alpha
function dgCoolTriangleShapeSpin(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 128, fade);
            // rect(j * 10, i * 10, 10, 10);
            let angle = frameCount * 0.02;
            rotate(angle);
            
            triangle(j * 10, i * 10, 150, 150, 10, 210);
            

        }
    }
   pop();

}

function dgCoolTriangleShapeNospin(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 128, fade);
            // rect(j * 10, i * 10, 10, 10);

            triangle(j * 11, i * 10, 150, 150, 10, 210);
            

        }
    }
   pop();

}

function dgCoolTriangleShapeWithoutSpin(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 128, fade);
            // rect(j * 10, i * 10, 10, 10);

            
            triangle(j * 10, i * 10, 150, 150, 10, 210);
            

        }
    }
   pop();

}

         //x,y,rot,scale, alpha
function dgCoolMario(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);

    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == 1 ) {
                fill('#D5292B');

            } else if ( value == 2 ){
                fill('#693D2D');
            } else if ( value == 3 ) {
                fill('#2F29D1');
            }  

           else if ( value == 4 ) {
              fill('#FFA61E');
          }

          else if ( value == 5 ) {
              fill('#C97C4D');
          }

          else if ( value == 6 ) {
              fill(0);
          }

            else {
               fill('#00DCFE'); 
      
            }
            let angle = frameCount * 0.04;
            rotate(angle);
            
            quad(j * 9, i * 9, (500), (500),(350), 500, 410,200,200);
            
        }
    }
    pop();

}

function dgMyMario(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);

    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == 1 ) {
                fill('#D5292B');

            } else if ( value == 2 ){
                fill('#693D2D');
            } else if ( value == 3 ) {
                fill('#2F29D1');
            }  

           else if ( value == 4 ) {
              fill('#FFA61E');
          }

          else if ( value == 5 ) {
              fill('#C97C4D');
          }

          else if ( value == 6 ) {
              fill(0);
          }

            else {
               fill('#00DCFE'); 
      
            }
            rect(j * 9, i * 9,10, 10);
            
            
        }
    }
    pop();

}

function dgAngeliqueKirby(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);

    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == 0 ) {
                fill(0);

            } else if ( value == 7 ){
                fill(126, 37, 83);
            } else if ( value == 8 ) {
                fill(255, 119, 168);
            }  

           else if ( value == 3 ) {
              fill(255, 0, 77);
          }

          else if ( value == 4 ) {
              fill(41, 173, 255);
          }

          else if ( value == 5 ) {
              fill(255, 241, 232);
          }

            else {
               fill('#00DCFE'); 
      
            }
            rect(j * 9, i * 9,10, 10);
            
            
        }
    }
    pop();

}

function dgCoolTriangleShapeWithColor(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);

    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == 1 ) {
                fill('#D5292B');

            } else if ( value == 2 ){
                fill('#693D2D');
            } else if ( value == 3 ) {
                fill('#2F29D1');
            }  

           else if ( value == 4 ) {
              fill('#FFA61E');
          }

          else if ( value == 5 ) {
              fill('#C97C4D');
          }

          else if ( value == 6 ) {
              fill(0);
          }

            else {
               fill('#00DCFE'); 
      
            }
            triangle(j * -7, i * -10, -100, -150, -10, -165);
        }
    }
    pop();

}

//0,7,8,5,3

function dgDifferentShapesMember(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                //pink part
                  fill(200,70,110, fade);
                  quad(j * 12-9, i * 12-9, (500), (500),(350), 500, 410,200,200);
                } else if ( value == 1 ){
                  fill(250,0,30, fade);
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } 

              //blue part
              else if ( value == 5 ){
                fill(25,0,230, fade);
                
                circle(j * 12-6, i * 12-6, 10);
            }
            //red part
            else if ( value == 3 ){
                fill(250,0,30, fade);
                 rect(j * 12-6, i * 12-6, 10, 10,2);
            }

            //yellow part
            else if ( value == 7 ){
                fill(250,222,30, fade);
                quad(j * 12-9, i * 12-9, (500), (500),(350), 500, 410,200,200);
            }
            //pink part
            else if ( value == 8 ){
                fill(250,20,230, fade);
                quad(j * 12-9, i * 12-9, (500), (500),(350), 500, 410,200,200);
            }else {
                  fill(110,150,0, fade);
                  square(j * 10, i * 10, 15, 10,5);
              }
        }
    }
    pop();

}


function dgDifferentShapesMember2(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                //pink part
                  fill(200,70,110, fade);
                  quad(j * 12-9, i * 12-9, (500), (500),(350), 500, 410,200,200);
                } else if ( value == 1 ){
                  fill(250,0,30, fade);
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } 

              //blue part
              else if ( value == 1 ){
                fill(225,0,230, fade);
                
                circle(j * 12-6, i * 12-6, 10);
            }
            //red part
            else if ( value == 2 ){
                fill(20,20,230, fade);
                 rect(j * 12-6, i * 12-6, 10, 10,2);
            }

            //yellow part
            else if ( value == 3 ){
                fill(0, fade);
                quad(j * 12-9, i * 12-9, (500), (500),(350), 500, 410,200,200);
            }
            //pink part
            else if ( value == 4 ){
                fill(520,20,230, fade);
                quad(j * 12-9, i * 12-9, (500), (500),(350), 500, 410,200,200);
            }
            else if ( value == 5 ){
                fill(150,200,150, fade);
                quad(j * 12-9, i * 12-9, (500), (500),(350), 500, 410,200,200);
            }
            else if ( value == 6 ){
                fill(50,120,130, fade);
                quad(j * 12-9, i * 12-9, (500), (500),(350), 500, 410,200,200);
            }
            else if ( value == 7 ){
                fill(50,20,230, fade);
                quad(j * 12-9, i * 12-9, (500), (500),(350), 500, 410,200,200);
            }
            else if ( value == 8 ){
                fill(50,20,230, fade);
                quad(j * 12-9, i * 12-9, (500), (500),(350), 500, 410,200,200);
            }
            else if ( value == 9 ){
                fill(250,220,30, fade);
                quad(j * 12-9, i * 12-9, (500), (500),(350), 500, 410,200,200);
            }
            else {

                  fill(110,150,220, fade);
                  square(j * 10, i * 10, 15, 10,5);
              }
        }
    }
    pop();

}



function dgFireFlower(arr,lx,ly,rot,sc,fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == "sky" ) {
                fill(20,170,220, fade);
            } else if ( value == "fire" ){
                fill(200,0,30, fade);
              } else if ( value == "light" ){
                  fill('#FFDE59');
              } else if ( value == "root" ){
                  fill(20,200,20);
            }
            else if ( value == "cold" ){
                fill(20,0,220);
          } 
          else if ( value == "white" ){
            fill(250);
      }else {
                fill(150,75,0);
            }
               text(value, j * 35, i * 10,100);
               //rect( j * 35, i * 10,100,100);
        }
    }
    pop();

}
function dgTextIntoShapes(value, x, y, size) {
    fill(0);
  
    if (value === "light") {
        fill('#FFDE59');
        ellipse(x + size / 2, y + size / 2, size * 0.8);
    } else if (value === "sky") {
        fill(20,170,220);
        rect(x, y, size, size);
    } else if (value === "cold") {
        fill(200,0,30);
        rect(x, y, size, size);

    } else if (value === "white") {
      fill(255); 
      rect(x, y, size, size);
    } else if (value === "root") {
      fill(39, 269, 19); 
      rect(x, y, size, size);
    } else if (value === "dirt") {
      fill(139, 69, 19); 
      rect(x, y, size, size);
    }else {
        fill(150,75,0);
    }
  }


                            //2darray,images in array ,x,y,rot,scale, alpha
 function dgMemberArrayWithImage(arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[0];
                      } else if ( value == 1 ){
                        nuimg = imgarr[2];
                      } else if ( value == 9 ) {
                        nuimg = imgarr[1];
                      } 
                    else if ( value == 3 ) {
                        nuimg = imgarr[4];
                      }
                      else if ( value == 4 ) {
                        nuimg = imgarr[5];
                      }
                      else if ( value == 5 ) {
                        nuimg = imgarr[6];
                      }
                      else if ( value == 6 ) {
                        nuimg = imgarr[7];
                      }
                      else if ( value == 7 ) {
                        nuimg = imgarr[8];
                      }else {
                        nuimg = imgarr[3];
                      }
                    image(nuimg, j * 12, i * 12, 14, 14);
                }
            }
            pop();
        
}

    //2darray,images in array ,x,y,rot,scale, alpha
    function dgMemberArrayWithImage2(arr,imgarr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    let c;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == 0 ) {
                    nuimg = imgarr[0];
                  } else if ( value == 1 ){
                    nuimg = imgarr[2];
                  } else if ( value == 9 ) {
                    nuimg = imgarr[1];
                  } 
                else if ( value == 3 ) {
                    nuimg = imgarr[4];22
                  }
                  else if ( value == 4 ) {
                    nuimg = imgarr[5];
                  }
                  else if ( value == 5 ) {
                    nuimg = imgarr[6];
                  }
                  else if ( value == 6 ) {
                    nuimg = imgarr[7];
                  }
                  else if ( value == 7 ) {
                    nuimg = imgarr[8];
                  }else {
                    nuimg = imgarr[3];
                  }
                  let angle = frameCount * 0.01;
                  rotate(angle);
            c = color(255,fade);
            tint(c);
            image(nuimg, j * 9, i * 9, 15, 15);
        }
    }
    pop();

    }

    function dgMemberArrayWithImage3(arr,imgarr,lx,ly,rot,sc,fade) {
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        let nuimg;
        let c;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                    let value = arr[i][j];
                    if ( value == 0 ) {
                        nuimg = imgarr[0];
                      } else if ( value == 1 ){
                        nuimg = imgarr[2];
                      } else if ( value == 9 ) {
                        nuimg = imgarr[1];
                      } 
                    else if ( value == 3 ) {
                        nuimg = imgarr[4];22
                      }
                      else if ( value == 4 ) {
                        nuimg = imgarr[5];
                      }
                      else if ( value == 5 ) {
                        nuimg = imgarr[6];
                      }
                      else if ( value == 6 ) {
                        nuimg = imgarr[7];
                      }
                      else if ( value == 7 ) {
                        nuimg = imgarr[8];
                      }else {
                        nuimg = imgarr[3];
                      }
              
                c = color(255,fade);
                tint(c);
                image(nuimg, j * 9, i * 9, 15, 15);
            }
        }
        pop();
    
        }
    function dgLyndonPokemon(arr,lx,ly,rot,sc) {
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
    
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
              var colorCode = arr[i][j];
              var colorValue = colorPokeMap[colorCode];
              fill(colorValue[0],colorValue[1],colorValue[2]); 
              rect(j * 10,i * 10,10,10);
            }
        }
        pop();
    
    }


    function dgBasicFade(arr,lx,ly,rot,sc, fade) {
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                fill(arr[i][j] * 128, fade-100);
                rect(j * 10, i * 10, 10, 10);
            }
        }
       pop();
    
    }

    function dgBasicChnageShape(arr,lx,ly,rot,sc, fade) {
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                 let value = arr[i][j];
                  if ( value == 0 ) {
                      fill(200,70,220, fade);
                      ellipse(j * 12, i * 12, 10, 140);
                  } else if ( value == 1 ){
                      fill(150,0,30, fade);
                       rect(j * 12-6, i * 12-6, 10, -50,2);
                  } else {
                      fill(0,150,220, fade);
                       ellipse(j * 12, i * 12, 15, 140,5);
                  }
            }
        }
        pop();
    
    }


