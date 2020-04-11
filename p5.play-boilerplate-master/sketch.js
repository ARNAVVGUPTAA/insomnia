var robot_leg1,robot_leg2,robot_torso,robot_arm1,robot_arm2,robot_face,mouseRect;
var i1,i2,i3,i4;
var x = 100,y = 100;

function preload(){
  
  i1 = loadImage("1.png");
  i2 = loadImage("2.png");
  i3 = loadImage("3.png");
  i4 = loadImage("4.png");
  
}

function setup() {
  createCanvas(1200, 800);

  robot_torso = createSprite(600,400,20,20);
  robot_torso.addImage("arm",i3);

  robot_arm1 = createSprite(600,400,20,20);
  robot_arm1.addImage("arm",i1);
  robot_arm1.setCollider("rectangle",-140,-15,160,70);

  robot_arm2 = createSprite(599,370,20,20);
  robot_arm2.addImage("arm",i1);
  robot_arm2.rotation = 180;
  robot_arm2.setCollider("rectangle",-140,-15,160,70);

  robot_face = createSprite(600,272,20,20);
  robot_face.addImage("head",i4);
  robot_face.setCollider("rectangle",0,8,120,120);

  robot_leg1 = createSprite(560,516,20,20);
  robot_leg1.addImage("leg",i2);
  robot_leg1.setCollider("rectangle",0,0,65,100);

  robot_leg2 = createSprite(630,516,20,20);
  robot_leg2.addImage("leg",i2);
  robot_leg2.setCollider("rectangle",0,0,65,100);

  mouseRect = createSprite(100,100,20,20);
  mouseRect.shapeColor = "green";
}

function draw() {
  //trex.debug = true;
  background(rgb(128,128,128));

    mouseRect.x = mouseX;
    mouseRect.y = mouseY;

  if(isTouching(mouseRect,robot_torso)){
    robot_torso.x = mouseX;
    robot_torso.y = mouseY;

    robot_face.y = mouseY - 128;
    robot_face.x = mouseX;

    robot_arm1.x = mouseX;
    robot_arm1.y = mouseY;

    robot_arm2.x = mouseX - 1;
    robot_arm2.y = mouseY - 30;

    robot_leg1.x = mouseX - 40;
    robot_leg1.y = mouseY + 116;

    robot_leg2.x = mouseX + 30;
    robot_leg2.y = mouseY + 116
  }

  if(isTouching(mouseRect,robot_face)){
    robot_face.rotation = robot_face.rotation + 2;
  } else {
    robot_face.rotation = 0;
  }
  if(isTouching(robot_arm1,mouseRect)||isTouching(robot_arm1,mouseRect)){
    if(robot_arm1.rotation>-90){
    robot_arm1.rotation = robot_arm1.rotation - 2;
    robot_arm2.rotation = robot_arm2.rotation + 2;
  } else {
    robot_arm1.rotation = 0;
    robot_arm2.rotation = 180;
  }
 }
  if(isTouching(robot_leg1,mouseRect)&&robot_leg1.x >100){
    robot_leg1.velocityX = -5;
    robot_leg2.velocityX = 5;

  } else{
    robot_leg1.x = robot_torso.x - 40;
    robot_leg2.x = robot_torso.x + 30;
  }
  fill("blue");
  text("to change position, go on torso, to exit, move the mouse rigorously",100,100);
  
  
  drawSprites();
}

