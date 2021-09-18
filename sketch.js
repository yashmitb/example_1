var ball;

function setup() {
  createCanvas(900,1900);
  ball = createSprite(10,10,10,10);
}

function draw() 
{
  background(30);

  if (keyDown("w")){
    ball.y = ball.y-3;
  }

  if (keyDown("a")){
    ball.x = ball.x-3;
  }

  if (keyDown("s")){
    ball.y = ball.y+3;
  }

  if (keyDown("d")){
    ball.x = ball.x+3;
  }

  drawSprites();
  
}
