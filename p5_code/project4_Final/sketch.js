// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let snd1,snd2,snd3,snd4;
// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var player;

function preload() {
    // sound should be loaded so its available for all places.
   snd1 = loadSound("assets/coolmusic.mp3");
   snd2 = loadSound("assets/coolmusic.mp3");
   snd3 = loadSound("assets/pop.mp3");
   snd4 = loadSound("assets/music_zapsplat_win_city.mp3");

//    snd4 = loadSound("assets/creepy.mp3");

}

function setup() {
    createCanvas(1000, 1000);
    //console.log(hell);
    mgr = new SceneManager();

    player = createSprite(0, 0);
    player.addAnimation("normal", "assets/player1.png",  "assets/player6.png");  // first image, and last image
    player.addAnimation("BLAST", "assets/playerblast1.png",  "assets/playerblast4.png"); // first image, and last image
    player.addAnimation("KICK", "assets/kickblast1.png",  "assets/kickblast6.png"); // first image, and last image

    player.addAnimation("MAD", "assets/mad1.png",  "assets/mad5.png"); // first image, and last image

     // make the sprite invisible until you need it.
     player.visible = false;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
 mgr.addScene (splash);
    mgr.addScene (main);
    mgr.addScene (help);

    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( splash );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( help );
            break;
        case 'h':
            mgr.showScene( help );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}