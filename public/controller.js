// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Keep track of our socket connection
var socket;
var btnWidth;
var btn1Color;
var btn1x;
var btn2Color;
var btn2x;
var btn3Color;
var btn3x;
var btn4Color;
var btn4x;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);


  btnWidth = windowWidth/4;
  btn1Color = 0;
  btn1x = 0; 
  btn2Color = 0;
  btn2x = btnWidth;
  btn3Color = 0;
  btn3x = btnWidth * 2;
  btn4Color = 0;
  btn4x = btnWidth * 3;

  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://192.168.43.229:3000');

}

function draw() {
  background(0);

  if(btn1Color > 0) btn1Color -= 51;
  if(btn2Color > 0) btn2Color -= 51;
  if(btn3Color > 0) btn3Color -= 51;
  if(btn4Color > 0) btn4Color -= 51;

  
  fill(btn1Color, btn1Color, btn1Color);
  rect(btn1x, 0, btnWidth, windowHeight);

  fill(btn2Color, btn2Color, btn2Color);
  rect(btn2x, 0, btnWidth, windowHeight);

  fill(btn3Color, btn3Color, btn3Color);
  rect(btn3x, 0, btnWidth, windowHeight);

  fill(btn4Color, btn4Color, btn4Color);
  rect(btn4x, 0, btnWidth, windowHeight);

}


function touchStarted() {
  var data = {
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false
  };

  if(mouseX>=0 && mouseX<btnWidth){
    btn1Color = 255;
    data.btn1 = true;
    console.log("data:", data);
    socket.emit('button',data);
  }
  if(mouseX>=btnWidth && mouseX<btnWidth*2){
    btn2Color = 255;
    data.btn2 = true;
    console.log("data:", data);
    socket.emit('button',data);

  }

  if(mouseX>=btnWidth*2 && mouseX<btnWidth*3){
    btn3Color = 255;
    data.btn3 = true;
    console.log("data:", data);
    socket.emit('button',data);

  }
  
  if(mouseX>=btnWidth*3 && mouseX<btnWidth*4){
    btn4Color = 255;
    data.btn4 = true;
    console.log("data:", data);
    socket.emit('button',data);

  }

}
