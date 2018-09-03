// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Keep track of our socket connection
var socket;
var c1,c2;

var w;
var h;
var btn1;
var value = 0;

var btn1c;
var btn1x;
var btn2c;
var btn2x;
var btn3c;
var btn3x;
var btn4c;
var btn4x;

var btnWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //fullScreen();
  background(0);


  btn1 =  createSprite(400, 400);
  //btn1.addAnimation('normal', 'assets/ghost_spin0001.png', 'assets/ghost_spin0003.png');
 
  btn1.addAnimation('normal', 'assets/asterisk_normal0001.png', 'assets/asterisk_normal0003.png');
  btn1.addAnimation('stretch', 'assets/asterisk_stretching0001.png', 'assets/asterisk_stretching0008.png');


  btn1.mouseActive = true;



  btn1c = color(255,0,0);
  btn1x = 0; 
  btn2c = color(0,255,0);
  btn2x = btnWidth;
  btn3c = color(0,0,255);
  btn3x = btnWidth * 2;
  btn4c = color(100,100,100);
  btn4x = btnWidth * 3;
  btnWidth = windowWidth/4;

  // c1 = 255;
  // c2 = 255;
  // w = windowWidth;
  // h = windowHeight;


  // btn1 = new Button(w/2-200,h/2,"red");
  // btn2 = new Button(w/2+200,h/2,"green");

  //frameRate(50);
  //println(frameRate);
  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://192.168.1.77:3000');
  

  // btn1 = createButton('Green');
  // btn2 = createButton('Red');
  // btn1.position(w/2-200,h/2);
  // btn2.position(w/2+200,h/2);
  
  // btn1.mousePressed(sendButton1);
  // btn2.mousePressed(sendButton2);

  //  btn1.onMouseOver = function() {
  //   this.changeAnimation('stretch');
  //   console.log("hover");
  //   bc = x + 20;
  //   x = bc;
  //   background(bc);
  //   print(bc);
  // };

  btn1.onMouseReleased = function() {
    this.changeAnimation('normal');
  };

}

function draw() {
    background(0);




  fill(btn1c);
  rect(btn1x, 0, btnWidth, windowHeight);

  fill(btn2c);
  rect(btn2x, 0, btnWidth, windowHeight);

  fill(btn3c);
  rect(btn3x, 0, btnWidth, windowHeight);

  fill(btn4c);
  rect(btn4x, 0, btnWidth, windowHeight);


 // if(btn1.onMouseOver)
 //    btn1.rotation-= 10;

  //btn1.visible = !btn1.mouseIsPressed;

  //drawSprites();


}


var x = 0;

function touchStarted() {
  if(mouseX>=0 && mouseX<btnWidth){
    btn1c =  color(100,x+=20,0);  
  }
  if(mouseX>=0 && mouseX<btnWidth){
    btn2c =  color(100,x+=20,0);  
  }

  if(mouseX>=0 && mouseX<btnWidth){
    btn3c =  color(100,x+=20,0);  
  }
  
  if(mouseX>=0 && mouseX<btnWidth){
    btn4c =  color(100,x+=20,0);  
  }

  // if (value === 200) {
  //   value = 100;
  // } else {
  //   value = 200;
  // }



// Function for sending to the socket
function sendButton1() {
  // We are sending!
  
  
  // Make a little object with  and y
  var data = {
    c1: 200,
    c2: 50
  };

  console.log("data:", data);
  socket.emit('button',data);  
}

// Function for sending to the socket
function sendButton2() {
 
  
  // Make a little object with  and y
  var data = {
    c1: 50,
    c2: 200
  };
  console.log("data:", data);
  socket.emit('button',data);  
}




// Jitter class
function Button(x,y,bc) {
  this.x = x;
  this.y = y;
  this.display = function() {
  if(bc == "red"){
    fill(255,0,0);
  }
  else if(bc == "green"){
    fill(0,255,0);
  }
    ellipse(this.x, this.y, w/4,w/4);
  };
}

}
