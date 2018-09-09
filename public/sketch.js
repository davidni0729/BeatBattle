
var z = 0;
var e = 0;
var sp = 10;
var sc = 0;
var start = [];
var s;
var song;
var press = [];
var com = 0;
var wei;
var weia;
var sec;



var block1PosY = 0;
var block1Channel = 0;

var block1;

function preload()
{
  s = loadImage('square.jpg');
}
function setup()
{

  createCanvas(800,700);
  smooth();
  background(200);
  block1 = new block(block1Channel,block1PosY);

  start[0] = false;
  // We make a named event called 'mouse' and write an
  // anonymous callback function
   socket.on('button',
    // When we receive data
    function(data) {
 



      console.log("Got: " + data.btn1 + " " + data.btn2 + " " + data.btn3 + " " + data.btn4 + " " );
        if(data.btn1)
        {
          fill(128);
          rect(0,650,100,50);
          judgeCh1();

        }
          
        if(data.btn2)
		{
          fill(128);
          rect(100,650,100,50);	
        }
        if(data.btn3)
		{
          fill(128);
          rect(200,650,100,50);	
        }
        if(data.btn4)
		{
          fill(128);
          rect(300,650,100,50);	
        }
    }
  );
}
function draw()
{
block1.update();

block1.display();
if(block1.PosY > 800&&block1.PosY < 850)
  	   block1reset();
  	   com = 0;

  //image(s,100,a129-130,100,150);
  //image(s,200,a130-130,100,150);

    if(start[0])
  {
    fill(0);
    textSize(50);
    text(com,180,350);
    song.autoplay(true);
    song.volume(0.05);
  }
  stroke(0);
  strokeWeight(10);
  line(0,650,400,650);
  line(400,0,400,700);
  line(0,700,400,700);
  strokeWeight(1);
  line(100,0,100,800);
  line(200,0,200,800);
  line(300,0,300,800);
  fill(255,50);    
  stroke(200,0);
  rect(0,0,width,height);
  fill(0);
  textSize(24);
  //text("speed: " + sp,410,600);
  text("score: " + sc,410,350);
  if(start[0] === false)
  {
    //fill(0);
    //rect(410,60,180,60);
    //fill(255);
    //textSize(24);
    //text("speed up",450,100);
    fill(0);
    text("press p to start",110,350);
    if(sp > 1)
    {
      //fill(0);
      //rect(410,360,180,60);
      //fill(255);
      //text("speed down",430,400);
    }
  }
  if(keyIsDown(80))
  {
    start[0] = true;
  }
  if(keyIsDown(68))
  {
    press[0] = true;
  }
  else
  {
    press[0] = false;
  }
  if(keyIsDown(70))
  {
    press[1] = true;
  }
  else
  {
    press[1] = false;
  }
  if(keyIsDown(74))
  {
    press[2] = true;
  }
  else
  {
    press[2] = false;
  }
  if(keyIsDown(75))
  {
    press[3] = true;
  }
  else
  {
    press[3] = false;
  }
}
function keyTyped()
{
  if (key === 'p'&&start[0] === false)
  {
    sec = 0;
    song = createAudio('freedomdive.mp3');
    song.autoplay(true);
    song.volume(0.01);
  }
}
//function keyReleased()
//{
  //if(key == 'd')
  //{
    //press[0] = false;
  //}
  //if(key == 'f')
  //{
    //press[1] = false;
  //}
  //if(key == 'j')
  //{
    //press[2] = false;
  //}
  //if(key == 'k')
  //{
    //press[3] = false;
  //}
//}
function pressed(x,y,z,w)
{
  wei = (700 - (sp - (-w % sp)));
  weia = wei + (sp -(wei % sp)) + (sp - (-w % sp));
  z += sp;
  if(x&&z > 550&&z < 780)
  {
      z = 900;
      sc = sc + 1000 + 5*com;
      com += 1;
  }
  if(z === weia)
  {
    com = 0;
  }
  image(s,y,z,100,50);
  return z;
}
function stpressed(b,c,d,e,f,g,h)
{
  wei = (700 - (sp - (-f % sp)));
  weia = wei + (sp -(wei % sp)) + (sp - (-f % sp));
  d += sp;
  if(keyIsPressed === true&&d > 600&&d < 750)
  {
    if(press[b]&&press[e]&&press[g] === false&&press[h] === false)
    {       
      d = 900;
      sc = sc + 1000 + 5*com;
      com += 1;
    }
  }
  if(d === weia)
  {
    com = 0;
  }
  image(s,c,d,100,50);
  return d;
}


function block(Channel,PosY){
  this.Channel = Channel;
  this.PosY = PosY;
  this.update = function(){
  	this.PosY += 10;
  }  
  this.display = function(){
   image(s,this.Channel,this.PosY,100,50);  	
  }
}

function judgeCh1()
{
	if (block1.PosY > 550&&block1.PosY < 800)
	   calculator();
}

function calculator(){
	combo();
    sc = sc + 1 + com*5;
    block1reset();
}

function block1reset() {
	block1.PosY = 0;
	
}
function combo() {
  com += 1;
}

