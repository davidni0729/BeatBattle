// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Keep track of our socket connection
var socket;
var btnWidth;
var btn1Color;
var btn1OverlayAlpha;
var btn1x;
var btn2Color;
var btn2OverlayAlpha;
var btn2x;
var btn3Color;
var btn3OverlayAlpha;
var btn3x;
var btn4Color;
var btn4OverlayAlpha;
var btn4x;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  btnWidth = windowWidth/4;
  btn1Color = color(190,194,63);
  btn1OverlayAlpha = 0;
  btn1x = 0; 
  btn2Color = color(232,122,144);
  btn2OverlayAlpha = 0;
  btn2x = btnWidth;
  btn3Color = color(88,178,220);
  btn3OverlayAlpha = 0;
  btn3x = btnWidth * 2;
  btn4Color = color(152,109,178);
  btn4OverlayAlpha = 0;
  btn4x = btnWidth * 3;

}

function draw() {
  background(0);

  if(btn1OverlayAlpha > 0) btn1OverlayAlpha -= 20;
  if(btn2OverlayAlpha > 0) btn2OverlayAlpha -= 20;
  if(btn3OverlayAlpha > 0) btn3OverlayAlpha -= 20;
  if(btn4OverlayAlpha > 0) btn4OverlayAlpha -= 20;


  fill(btn1Color);
  rect(btn1x, 0, btnWidth, windowHeight);
  fill(255,255,255,btn1OverlayAlpha);
  rect(btn1x, 0, btnWidth, windowHeight);


  fill(btn2Color);
  rect(btn2x, 0, btnWidth, windowHeight);
  fill(255,255,255,btn2OverlayAlpha);
  rect(btn2x, 0, btnWidth, windowHeight);
  
  fill(btn3Color);
  rect(btn3x, 0, btnWidth, windowHeight);
  fill(255,255,255,btn3OverlayAlpha);
  rect(btn3x, 0, btnWidth, windowHeight);

  fill(btn4Color);
  rect(btn4x, 0, btnWidth, windowHeight);
  fill(255,255,255,btn4OverlayAlpha);
  rect(btn4x, 0, btnWidth, windowHeight);

}


function mousePressed() {
  // if(event.type == 'mousedown'){

    var data = {
        btn1: false,
        btn2: false,
        btn3: false,
        btn4: false
      };

      if(mouseX>=0 && mouseX<btnWidth){
        btn1OverlayAlpha = 255;
        data.btn1 = true;
        console.log("data:", data);
        socket.emit('button',data);
      }

      if(mouseX>=btnWidth && mouseX<btnWidth*2){
        btn2OverlayAlpha = 255;
        data.btn2 = true;
        console.log("data:", data);
        socket.emit('button',data);
      }

      if(mouseX>=btnWidth*2 && mouseX<btnWidth*3){
        btn3OverlayAlpha = 255;
        data.btn3 = true;
        console.log("data:", data);
        socket.emit('button',data);
      }
      
      if(mouseX>=btnWidth*3 && mouseX<btnWidth*4){
        btn4OverlayAlpha = 255;
        data.btn4 = true;
        console.log("data:", data);
        socket.emit('button',data);
      }

  // }

}
