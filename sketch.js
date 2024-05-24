/* Week 11 bidi serial example
 * Originally by Aaron Sherwood
 * Modified by Mangtronix
 *
 * Add this library to Sketch files
 *  https://github.com/mangtronix/IntroductionToInteractiveMedia/blob/master/code/p5.web-serial.js files
 *
 * You must include this line in your index.html (in Sketch Files) to load the
 * web-serial library
 *
 *     <script src="p5.web-serial.js"></script>
 *
 */


let button1;
let button2;
let button3;
let button4;
let button1Pres = false; // Since button 1 operates the menus, this is only needed for button1

let gLED = 0; // these had to be initialized :)))
let yLED = 0;

let pot = 0;
let sm;
let sceneNumber = 0;
/*
0 = start menu
1 = tutorial menu page 1
2 = tutorial menu page 2
3 = disclaimer
4 = difficulty (Dont start at 4 immediately)
5 = game
6 = credits
*/

/// FONTS
let oldStandardTT_bold;
let oldStandardTT_italic;
let oldStandardTT_regular;
let cyrillic;

/// IMAGES
let health_one;
let health_two;
let health_three;
let health_zero;

let round_live;
let round_blank;
let round_schrodinger;

// GLOBAL VAR
let rounds;

let b0;
let b1;
let b2;
let b3;
let b4;
let b5;
let rounds_radius;

let button1_previous_state = false;
let button2_previous_state = false;



function preload() {

  oldStandardTT_bold    = loadFont("font/OldStandardTT-Bold.ttf");
  oldStandardTT_italic  = loadFont("font/OldStandardTT-Italic.ttf");
  oldStandardTT_regular = loadFont("font/OldStandardTT-Regular.ttf");
  cyrillic              = loadFont("font/font fiction.otf");

  health_one    = loadImage("hearts/onelife.png");
  health_two    = loadImage("hearts/twolives.png");
  health_three  = loadImage("hearts/fullhealth.png");
  health_zero   = loadImage("hearts/nohealth.png");

  round_live          = loadImage("bolts/lightningbolt.png");
  round_blank         = loadImage("bolts/blank.png");
  round_schrodinger   = loadImage("bolts/ring.png");

}


function setup() {
  createCanvas(1440, 813); // fits my chrome mac screen without bookmarks open
  textSize(18);
  sm = new sceneManagement(sceneNumber);
  rounds = rounds_function();
  rounds_radius = 135;

  push();
  angleMode(DEGREES);
  b0 = polarToCartesian(rounds_radius, 360/6);
  b1 = polarToCartesian(rounds_radius, 360*2/6);
  b2 = polarToCartesian(rounds_radius, 360*3/6);
  b3 = polarToCartesian(rounds_radius, 360*4/6);
  b4 = polarToCartesian(rounds_radius, 360*5/6);
  b5 = polarToCartesian(rounds_radius, 360);
  pop();
  angleMode(RADIANS);

  health_three.resize(300, 0);
  health_two.resize(300, 0);
  health_one.resize(300, 0);
  health_zero.resize(300,0);
}

function draw() {
  
  if (!serialActive) {
    background(100);
    text("Press Space Bar to select Serial Port", 20, 30);
  } else {
    text("Connected", 20, 30);

    // all the actual code goes into here
    
    sm.updateScene(sceneNumber);
    
    
    
    // debug text
    push();
    // if(sceneNumber == 1) {
    //   fill(0);
    // } else {
    //   fill(255);
    // }
    fill(255);
    stroke(0);
    // strokeWeight(2);
    // text('button1 = ' + str(button1), 20, 50);
    // text('button2 = ' + str(button2), 20, 70);
    // text('button3 = ' + str(button3), 20, 90);
    // text('button4 = ' + str(button4), 20, 110);
    // text('pot = ' + str(pot), 20, 130);
    // text('sceneNumber = ' + sceneNumber, 20, 160);
    // text('temporaryPress = ' + temporaryPress, 20, 180);
    // text('initialFrameCount = ' + initialFrameCount, 20, 200);
    // text('frameCount = ' + frameCount, 20, 220);
    // text('rounds = ' + rounds, 20, 240);
    // text('captured = ' + capturedFrameCount, 20, 260);
    // text('flag = ' + flag, 20, 280);
    // text('selected_round = ' + selected_round, 20, 300);
    
    pop();
  }
}

function keyPressed() {
  if (key == " ") {
    setUpSerial();
  }
}

// Thank you squishynotions (p5js sketch is from him)
// https://editor.p5js.org/squishynotions/sketches/Ax195WTdz
function setLineDash(list) {
  drawingContext.setLineDash(list);
}

// This function will be called by the web-serial library
// with each new *line* of data. The serial library reads
// the data until the newline and then gives it to us through
// this callback function
function readSerial(data) {
  ////////////////////////////////////
  //READ FROM ARDUINO HERE
  ////////////////////////////////////

  if (data != null) {
    // make sure there is actually a message
    // split the message
    
    let fromArduino = split(trim(data), ',');
    // if the right length, then proceed
    if (fromArduino.length == 5) {
      // only store values here
      // do everything with those values in the main draw loop
      
      button1 = fromArduino[0];
      button2 = fromArduino[1];
      button3 = fromArduino[2];
      button4 = fromArduino[3];
      pot     = fromArduino[4];
    }

    //////////////////////////////////
    //SEND TO ARDUINO HERE (handshake)
    //////////////w////////////////////
    // two led values
    let sendToArduino = gLED + "," + yLED + "\n";
    writeSerial(sendToArduino);
  }
}
