
var bg,backgroundImg,startPage;
var rocket,rokectImg,rocket2Img;
var skyImg,spaceImg;
var form;
var gameState=0;
var stroyImg,stroy3Img;
var time,time2,time3,time4,time5,time6,time7,time8,time9,time10;
var throttle;
var z=0;

var fire,fire2,fire3,fireImg;
var a=0;
var astroidImg4;
var astroid;
var rand;
var x,y;
var astroidGroup;
var h=100;
var i =0;
var gameState2;
var explosion,explosionImg;

function preload()
{
backgroundImg = loadImage("earth background.jpg");
startPage = loadImage("Slide1.PNG");
storyImg = loadImage("rocket-3.gif");

stroy3Img = loadImage("destruction seen.jpg");
skyImg = loadImage("sky.jpg");
spaceImg = loadImage("space_background.gif");

rocketImg = loadImage("space_rocket-1.png");
fireImg = loadAnimation("fire (1).png","fire (2).png","fire (3).png","fire (4).png","fire (5).png");
astroidImg4 = loadImage("astroid-4.gif");
explosionImg = loadImage("explosion.gif");
rocket2Img = loadImage("rockets.png");
}

function setup()
{
createCanvas(displayWidth,displayHeight-100);



throttle = createSprite(displayWidth -100,displayHeight-100,20,0);
throttle.shapeColor = "white";



rocket =createSprite(displayWidth/2+150,displayHeight/2,100,500);
rocket.addImage(rocketImg);
rocket.scale = 1.25;



fire =createSprite(displayWidth/2+150,displayHeight/2+345,100,50);
fire.addAnimation("fire",fireImg);
fire.scale = 0.5;
fire.visible = false;

fire2 =createSprite(displayWidth/2+200,displayHeight/2+345,100,50);
fire2.addAnimation("fire",fireImg);
fire2.scale = 0.5;
fire2.visible = false;

fire3 =createSprite(displayWidth/2+100,displayHeight/2+345,100,50);
fire3.addAnimation("fire",fireImg);
fire3.scale = 0.5;
fire3.visible = false;

explosion =createSprite(displayWidth/2+100,displayHeight/2+345,100,50);
explosion.scale = 0.5;
explosion.visible = false;

astroidGroup = new Group();

form = new Form();
}

function draw()
{
    explosion.x = rocket.x;
    explosion.y = rocket.y;

    fill("blue");
    textSize(30);

   if(!astroidGroup.isTouching(rocket))
   {
       time9 = World.seconds;
   }

    if(gameState < 8)
    {
    x =frameCount;

    }
    if(gameState<8 && gameState2 ===1)
    {
fire.y = rocket.y+345;
fire2.y = rocket.y+345;
fire3.y = rocket.y+345;
    }

    
    if(gameState<8 && gameState2 ===2)
    {
fire.y = rocket.y+310;
fire2.y = rocket.y+310;
fire3.y = rocket.y+310;
    }

     if(keyDown(UP_ARROW))
     {
       UpKeyPreesed();
     }
    if(throttle.height === 20)
    {
        z =10;
    }

    if(throttle.height === 40)
    {
        z =20;
    }

    if(throttle.height === 60)
    {
        z =30;
    }

    if(throttle.height === 80)
    {
        z =40;
    }

    if(throttle.height === 100)
    {
        z =50;
    }

    if(throttle.height === 120)
    {
        z =60;
    }

    if(throttle.height === 140)
    {
        z =70;
    }

    if(throttle.height === 160)
    {
        z =80;
    }

    if(throttle.height === 180)
    {
        z =90;
    }

    if(throttle.height === 200)
    {
        z =100;
    }


    throttle.shapeColor = "white";

    if(gameState < 1){
    time = World.seconds;
    }
    if(gameState <2)
    {
        time3 = World.seconds;
    }
    if(gameState < 3)
    {
        time5 = World.seconds;
    }

    if(gameState < 6)
    {
        time7 = World.seconds;
    }

 if(gameState === 0)
 {
background(startPage);


 }
 form.display();
 if(gameState === 4)
 {
    background(startPage);
    form.start();

 }
 if(gameState === 1)
 { 
     background(storyImg);
     form.hide();
    time2 = World.seconds-time;
    console.log(time2);
    console.log(time);
    fill("blue");
    textSize(25);
     text("Your agency's moon mission has lauched sucessfully",displayWidth/2,displayHeight/2);
 }
 if(time2 > 2 && gameState === 1)
 {
     gameState=3;
 }
 if(gameState === 2)
 {

      gameState =5;
 }

if(gameState === 3)
{
    background(stroy3Img);
    fill("blue");
    textSize(25);
     text("But in the space it was destroyed,",displayWidth-displayWidth+200,displayHeight/2);
     text("And now you only can launch one mission.",displayWidth-displayWidth+200,displayHeight/2+50);
     time6 = World.seconds - time5;
}
if(gameState2 === 2 && gameState=== 5)
{
    rocket.addImage(rocket2Img);
    rocket.y = displayHeight/2-10;
    fire.scale = 0.3;
    fire2.scale = 0.3;
    fire3.scale = 0.3;

}
else if(gameState2 === 1 && gameState ===5)
{
    rocket.addImage(rocketImg);
    rocket.y = displayHeight/2;
    fire.scale = 0.5;
    
}

if(time6 > 5 && gameState === 3)
{
    gameState = 4;
}

if(gameState > 4)
{
    form.hide();
}

if(gameState === 5)
{
    background(backgroundImg);

    drawSprites();
    text("Press Up Arrow to up the throttle",displayWidth-600,displayHeight-300);
text(z + "%",displayWidth-100,displayHeight - 200);

  
}
if(z === 100)
{
    gameState = 6;
}


if(gameState === 6 && gameState2 === 1)
{
    background(backgroundImg);

    rocket.velocityY =-3;

 fire.visible = true;
throttle.destroy();
  drawSprites();
  
}

if(gameState === 6 && gameState2 ===2)
{
    background(backgroundImg);

    rocket.velocityY =-3;

 fire.visible = true;
 fire2.visible = true;
 fire3.visible = true;
 
  drawSprites();


 
}

if(rocket.y < -150 && gameState===6)
{
    rocket.y = displayHeight;
    a=1;
}
if(a===1)
{
    gameState =7;
}
if(gameState === 7)
{background(skyImg);
    rocket.velocityY =-3;
    drawSprites();
  
}


if(rocket.y < -140 && gameState === 7)
{
    a=2;
}

if(a===2)
{
    rocket.y = displayHeight-300;
    gameState = 8;
}

rectMode(LEFT);

    if(gameState === 8)
{
    background(spaceImg);
    fire.visible = true;
   
    fire.x = rocket.x;
    fire.y = rocket.y + 120;
    fire.scale = 0.116;

    fire2.x = rocket.x;
    fire2.y = rocket.y + 120;
    fire2.scale = 0.116;

    fire3.x = rocket.x;
    fire3.y = rocket.y + 120;
    fire3.scale = 0.116;

    rocket.width =30;
    rocket.height = 50;
    rocket.scale = 0.5;
    rocket.velocityY = 0;
    drawSprites();
    text("Health: ",displayWidth-displayWidth+100,displayHeight-displayHeight+100);
rect(displayWidth-displayWidth+200,displayHeight-displayHeight+70,h,20);
    spwanAstroid();
    if(keyDown(RIGHT_ARROW))
    {
        move(5);
    }

    if(keyDown(LEFT_ARROW))
    {
        move(-5);
    }
    if(astroidGroup.isTouching(rocket))
    {
        
        h -=0.7;
        explosion.visible = true;
        explosion.addImage(explosionImg);
        time10 = World.seconds - time9;
    }
  
    if(astroidGroup.isTouching(rocket) && time10 > 2)
    {
        time10 = 0;
        explosion.visible = false;
        explosion.addImage(backgroundImg);
        rocket.x = displayWidth/2;
    }

    if(y>2501)
    {
        gameState = 9;
    astroidGroup.destroyEach();

     
    }

    
}

if(gameState === 9 && gameState2 === 1)
{
    background(0);
   
    astroidGroup.destroyEach();
rocket.destroy();
fire.destroy();
fire2.destroy();
fire3.destroy();




        drawSprites();
    text("Yay! You Won",displayWidth/2,displayHeight/2);
    text("We have reached the moon",displayWidth/2,displayHeight/2+50);

}

if(gameState === 9 && gameState2 === 2)
{
    background(0);

    astroidGroup.destroyEach();

    rocket.visible = false;
    fire.visible = false;

    drawSprites();

 
    text("Yay! You Won",displayWidth/2,displayHeight/2)
    text("We have reached the mars",displayWidth/2,displayHeight/2+50);

}



if(h < 1)
{
    rocket.destroy();
    background(0);
    text("Game Over",displayWidth/2,displayHeight/2);
    
}

}




function UpKeyPreesed()
{
    if(z < 91)
    {
    throttle.height= throttle.height + 20;   
    }
}

function spwanAstroid()
{
  y = frameCount-x;
  if(y<2001)
  {
    if(frameCount % 60 ===0)
    {
     astroid = createSprite(random((displayWidth-displayWidth),displayWidth),-30,20,20);
    astroid.velocityY=3;
    rand = random(1,4);
    astroid.addImage(astroidImg4);
    astroid.scale = 0.2;
    astroidGroup.add(astroid);
    }
if(y % 100 === 0)
{
    astroidGroup.velocityYEach += 1;
}
}
}

function move(num)
{
    rocket.x = rocket.x + num;
}

