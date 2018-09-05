
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

        if(data.btn2)
          ghost2.rotation-= 10;

        if(data.btn3)
          ghost3.rotation-= 10;

        if(data.btn4)
          ghost4.rotation-= 10;

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



