
var socket;
var ghost1;
var ghost2;
var ghost3;
var ghost4;
var shift = 200;
var draggedSprite;


function setup() {
  
createCanvas(1200, 400);

  ghost1 = createSprite(200, 200);
  ghost1.addAnimation('normal', 'assets/ghost_spin0001.png', 'assets/ghost_spin0003.png');
  ghost1.mouseActive = true;


  ghost2 = createSprite(200+shift, 200);
  ghost2.addAnimation('normal', 'assets/ghost_spin0001.png', 'assets/ghost_spin0003.png');
  ghost2.mouseActive = true;


  ghost3 = createSprite(200+shift*2, 200);
  ghost3.addAnimation('normal', 'assets/ghost_spin0001.png', 'assets/ghost_spin0003.png');
  ghost3.mouseActive = true;


  ghost4 = createSprite(200+shift*3, 200);
  ghost4.addAnimation('normal', 'assets/ghost_spin0001.png', 'assets/ghost_spin0003.png');
  ghost4.mouseActive = true;
  // asterisk = createSprite(600, 200);
  // asterisk.addAnimation('normal', 'assets/asterisk_normal0001.png', 'assets/asterisk_normal0003.png');
  // asterisk.addAnimation('stretch', 'assets/asterisk_stretching0001.png', 'assets/asterisk_stretching0008.png');
  // var anim = asterisk.addAnimation('transform', 'assets/asterisk_circle0001.png', 'assets/asterisk_circle0008.png');

  // //if defined, the collider will be used for mouse events
  // asterisk.setCollider('circle', 0, 0, 64);

  // //I can assign functions to be called upon specific mouse events
  // //within the function "this" will reference the sprite that triggered the event
  // asterisk.onMouseOver = function() {
  //   this.changeAnimation('stretch');
  // };

  // asterisk.onMouseOut = function() {
  //   this.changeAnimation('normal');
  // };

  // asterisk.onMousePressed = function() {
  //   this.changeAnimation('transform');
  //   this.animation.goToFrame(this.animation.getLastFrame());
  //   if (draggedSprite == null) {
  //     draggedSprite = this;
  //   }
  // };

  // asterisk.onMouseReleased = function() {
  //   this.changeAnimation('transform');
  //   this.animation.goToFrame(0);
  //   if (draggedSprite == this) {
  //     draggedSprite = null;
  //   }
  // };

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
   socket = io.connect('http://192.168.43.229:3000');
  // We make a named event called 'mouse' and write an
  // anonymous callback function
   socket.on('button',
    // When we receive data
    function(data) {
      console.log("Got: " + data.btn1 + " " + data.btn2 + " " + data.btn3 + " " + data.btn4 + " " );
      
        if(data.btn1)
          ghost1.rotation-= 10;
        ghost1.visible = !ghost1.mouseIsPressed;

        if(data.btn2)
          ghost2.rotation-= 10;
        ghost2.visible = !ghost2.mouseIsPressed;

        if(data.btn3)
          ghost3.rotation-= 10;
        ghost3.visible = !ghost3.mouseIsPressed;

        if(data.btn4)
          ghost4.rotation-= 10;
        ghost4.visible = !ghost4.mouseIsPressed;

        drawSprites();
    }
  );
}

function draw() {
  
  background(255, 255, 255);

  if (draggedSprite != null) {
    draggedSprite.position.x = mouseX;
    draggedSprite.position.y = mouseY;
  }

  //draw the ghosts
    drawSprites();
 
}



