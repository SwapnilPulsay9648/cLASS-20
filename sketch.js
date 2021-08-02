var ball, ball2;


function setup() {
  createCanvas(800,400);
  ball = createSprite(400, 200, 50, 50);
  ball.shapeColor = "green"
  ball.debug=true;
  ball2 = createSprite(200, 150, 50, 50);
  ball2.shapeColor = "green"
  ball2.debug=true;
}

function draw() {
  background("black");  

  ball.x = World.mouseX;
  ball.y = World.mouseY;





  if( ball.x-ball2.x < ball.width/2 + ball2.width/2
    && ball2.x-ball.x < ball.width/2 + ball2.width/2
    && ball.y - ball2.y < ball.height/2 +ball2.height/2
    && ball2.y - ball.y < ball.height/2 + ball2.height/2){
    ball.shapeColor = "red"
    ball2.shapeColor = "red"

  }else{

    ball.shapeColor = "green"
    ball2.shapeColor = "green"
  }

  drawSprites();
}