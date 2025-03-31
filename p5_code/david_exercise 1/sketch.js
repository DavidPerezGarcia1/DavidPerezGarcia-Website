

let counter =0;
//let columns =10;
///let row = 10;
//let U = height / row;
//let J = width / columns;
let rectSize = 51;
let minsize = 20;
function setup() {
  createCanvas(800, 600);
  background(100, 50, 100);
  noStroke();
 angleMode(DEGREES)
 a=0
 frameRate(10);

  }
//divide and conquer 

function draw() {

 

  let y1 = mouseY;

  if (mouseX < 400)  {
   //////try use ++, which is crazy amount 
    for (let i = 0; i-- < mouseX; i ++) { //++ stack a lot
     
      r1 = random(255);
      fill(random(200),0,random(200));
      //circle( i+5, y1, 10, 10 );
      
      arc(i+10, y1, 80, 80, random(200), PI + HALF_PI);

      for (let q = 20; q < 800; q += 80) 
        for (let w = 15; w < 600; w += 40) {
          rand = random(random(250),random(50),random(250));
          fill(random(250),random(100),random(250));
          rect( q+5, w+5, 10, 10 );
          console.log("this has a redscale value of" + rand);
        }
        i++;// allow bit of less lag some how
        
     }

  }
  
  if (mouseX > 400)  {

    let mx = mouseX;
    for (let S = 0; S < mouseX; S += 20) {

     r2 = random(50,255);
      
      fill(random(200),100,random(300));
    
      square(mx--, S+5, 55);//the -- with mx make a small angle which i found cool
      mx--;  //this allow more of an angle with --


      
      console.log("r2 = " + r2);
//////////////////////////

      for (let q = 0; q < 800; q += 150) 
        for (let w = 0; w <600; w += 20) {
          rand = random(random(200),random(50),random(200));
          fill(random(0),random(10),random(200));
          circle( q+5, w+5, 10, 10 );
          console.log("this has a greyscale value of" + rand);
          
        }
     }
////////////////////////////////////////////////////// 
    if (mouseY < 300) {
    
          stroke(counter,255-counter,50-counter,50-counter); // it's like fade in and out but super faster
          triangle(mouseX,y1,mouseX-70,y1+70,mouseX+50,y1);
          console.log("r2 = " + r2);
          
         
/////////////////////////////////////
    }  else 
        {
         
          ///////////////////////////////play around --
      for (let W=1; W < height; W+=10) {
        fill(random(200),random(80),random(0));
        rect(0, W--, width, 10);
        fill(random(0),random(150),random(255));
        rect(W-180, 0, 10, height);
        
        fill(random(100),random(250),random(155));
        rect(W--, 0, 10, height);
        console.log(W);
        noStroke();
      /////////////////////////////
    }  
      for (let i = 0; i < mouseX; i += 20) {
        r3 = random(100);
        fill(400,100,r3);
        rect( i*=5, y1, 10, 10 );
        console.log("r3 = " + r3);
       }

      fill(255,120,0,50);
      ellipse(mouseX-=100,y1,0,30);// use of -=
      noStroke();
    }
    counter-=.5;

  }
  // end of draw
  
}







//////below is just reminding of last draft   





// function setup() {
//   createCanvas(400, 400);
//   background(0, 50, 100);
//   noStroke();
 
//   }



// //divide and conquer 

// function draw() {

//   let y1 = mouseY;

//   if (mouseX < 250)  {
   
//     for (let i = 0; i < mouseX; i += 20) {
//       r1 = random(255);
//       fill(r1);
//       rect( i+5, y1, 10, 10 );
//       console.log("r1 = " + r1);
//      }

//   }
//   ////////
  
//   if (mouseX > 200)  {

//     let mx = mouseX;
//     for (let i = 0; i < mouseX; i += 20) {
//       r2 = random(50,255);
      
//       fill(r2,30);
//       rect( mx, i+5, 10, 10 );
//       console.log("r2 = " + r2);
//      }

//     if (mouseY < 250) {

//       fill(255,0,0,90);
//       triangle(mouseX,y1,mouseX-50,y1+30,mouseX+50,y1+50);

//     }  else {
      
//       for (let i = 0; i < mouseX; i += 20) {
//         r3 = random(100);
//         fill(200,100,0,r3);
//         rect( i+5, y1, 10, 10 );
//         console.log("r3 = " + r3);
//        }

//       fill(255,120,0,50);
//       ellipse(mouseX+100,y1,30,30);

//     }


//   }
//   for (let i=0; i < height; i+=20) {
//     fill(20,255,0);
//     rect(0, i, width, 10);
//     fill(255);
//     rect(i, 0, 10, height);
//     console.log(i);
  
// } // end of draw
// }
