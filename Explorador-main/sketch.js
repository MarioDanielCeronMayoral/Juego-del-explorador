var bg_img, explorer;
var guerrero;
var piramide;
var invisibleground;
var fireImg;
var obstacle, obstacleImg;
var score= 0;
var gameOver, gameOverImg;

function preload(){

  piramide = loadImage("assets/piramide.jpg");
  sonido = loadSound("assets/mario-bros-jump.mp3");
  guerreroImg = loadImage("assets/guerrero.png");
  fireImg = loadImage("assets/fire.png")
  obstacleImg = loadImage("assets/obstacle.png");

}



function setup() {
  createCanvas(1800, 800);
  guerrero = createSprite(100,600,100,100);
  guerrero.addImage(guerreroImg);
  guerrero.scale = 0.5;

  invisibleground = createSprite(200,780,2800,10);
  invisibleground.visible=false
  obstacleG = new Group();
  fireG = new Group();

}

function draw() {
    background(piramide);
    textSize(100);
    fill(255);
    text("Puntuación: " + score, 500, 100)

    if(keyDown(RIGHT_ARROW)){
    guerrero.x = guerrero.x + 4;
    }

    if(keyDown(LEFT_ARROW)){
      guerrero.x = guerrero.x - 4;
    }
    
    if(keyDown("space")){
      guerrero.velocityY = -10;
      sonido.play();    
   }

    guerrero.velocityY = guerrero.velocityY +0.8;
    guerrero.collide(invisibleground);

    if (obstacleG.isTouching(guerrero)) {
      obstcaleG.destroyEach();
      score= score + 2;
     
    }
    else if (fireG.isTouching(guerrero)) {
      fireG.destroyEach();
      gameOver = createSprite(800,500,250,250)
      
    }

    spawnFire();
    spawnObstacle();
    drawSprites();
  }  

  function spawnFire(){
    if(frameCount % 180===0){
      fire=createSprite(600,765,40,10);
      fire.velocityX=-3
      fire.scale= 0.3
      fire.addImage(fireImg)
      fire.x=Math.round(random(0,1500))
      fireG.add(fire);
      
    }
  }
    function spawnObstacle(){
      if(frameCount % 250===0){
        obstacle=createSprite(600,765,40,10);
        obstacle.velocityX=-3
        obstacle.scale= 1
        obstacle.addImage(obstacleImg)
        obstacle.x=Math.round(random(0,1500))
        obstacleG.add(obstacle)
        
      }
  }