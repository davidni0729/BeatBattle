// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Keep track of our socket connection
// var socket;
// var c1,c2;

// var w;
// var h;
var asterisk;
var ghost;
var draggedSprite;


function setup() {
  
createCanvas(800, 400);

  ghost = createSprite(200, 200);
  ghost.addAnimation('normal', 'assets/ghost_spin0001.png', 'assets/ghost_spin0003.png');
  //detect the mouse position and click on this sprite
  //if no collider is defined, the image bounding box will be checked
  ghost.mouseActive = true;

  asterisk = createSprite(600, 200);
  asterisk.addAnimation('normal', 'assets/asterisk_normal0001.png', 'assets/asterisk_normal0003.png');
  asterisk.addAnimation('stretch', 'assets/asterisk_stretching0001.png', 'assets/asterisk_stretching0008.png');
  var anim = asterisk.addAnimation('transform', 'assets/asterisk_circle0001.png', 'assets/asterisk_circle0008.png');

  //if defined, the collider will be used for mouse events
  asterisk.setCollider('circle', 0, 0, 64);

  //I can assign functions to be called upon specific mouse events
  //within the function "this" will reference the sprite that triggered the event
  asterisk.onMouseOver = function() {
    this.changeAnimation('stretch');
  };

  asterisk.onMouseOut = function() {
    this.changeAnimation('normal');
  };

  asterisk.onMousePressed = function() {
    this.changeAnimation('transform');
    this.animation.goToFrame(this.animation.getLastFrame());
    if (draggedSprite == null) {
      draggedSprite = this;
    }
  };

  asterisk.onMouseReleased = function() {
    this.changeAnimation('transform');
    this.animation.goToFrame(0);
    if (draggedSprite == this) {
      draggedSprite = null;
    }
  };

  // createCanvas(windowWidth, windowHeight);
  // //fullScreen();
  // background(0);


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
   //socket = io.connect('http://192.168.1.70:3000');
  // // We make a named event called 'mouse' and write an
  // // anonymous callback function
   //socket.on('button',
  //   // When we receive data
  //   function(data) {
  //     console.log("Got: " + data.c1 + " " + data.c2);
  //     // Draw a blue circle
  //     c1 = data.c1;
  //     c2 = data.c2;
  //     fill(data.c1,data.c2,0);
  //     ellipse(w/2,h/2,100,100);
  //   }
  // );

  

}

function draw() {
  
  background(255, 255, 255);

  if (draggedSprite != null) {
    draggedSprite.position.x = mouseX;
    draggedSprite.position.y = mouseY;
  }

  //if a sprite is mouseActive true I can check if the mouse is over its collider
  //and if the button is pressed
  if(ghost.mouseIsOver)
    ghost.rotation-= 10;

  ghost.visible = !ghost.mouseIsPressed;

  drawSprites();



    // fill(c1,c2,0);
    // ellipse(w/2,h/2,100,100);

  // btn1.display();
  // btn2.display();
  //     console.log("btn1.mouseIsPressed", btn1.mouseIsPressed);
  //     console.log("btn2.mouseIsPressed", btn2.mouseIsPressed);

  // if(btn1.mouseIsPressed){
  //   console.log("btn1 is pressed");

  //   sendButton(200,50);
  // }else if(btn2.mouseIsPressed){
  //   console.log("btn2 is pressed");

  //   sendButton(50,200);
  // } 
}



