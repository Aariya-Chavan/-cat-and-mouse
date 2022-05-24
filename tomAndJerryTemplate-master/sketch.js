var cat,cat1,cat2,cat3;
var mouse,mouse1,mouse2,mouse3;
var bg;

function preload() {
    //load the images here
  cat1 = loadAnimation("images/cat1.png");
  cat2 = loadAnimation("images/cat2.png", "images'/cat3.png");
  cat3 = loadAnimation("images/cat4.png");
  mouse1 = loadAnimation("images/mouse1.png");
  mouse2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
  mouse3 = loadAnimation("images/mouse4.png");
  bg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation(cat1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation(mouse1);
    mouse.scale = 0.15

function draw() {

    background(bgImg);
  
    //Write condition here to evalute if tom and jerry collide
    if(cat.x = mouse.x < (cat.width-mouse.width)/2){
      cat.velocityX = 0;
      cat.addAnimation("images/cat4.png");
      cat.x = 300;
      cat.scale = 0.2;
      cat.changeAnimation("images/cat4.png");

      mouse.addAnimation("images/mouse4.png");
      mouse.scale = 0.15;
      mouse.changeAnimation("images/mouse4.png");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keycode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addImage("catRunning",mouse1);
    cat.changeAnimation("catRunning");

    mouse.addImage("mouseRunning",cat3);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseRunning");
  }

}
}
