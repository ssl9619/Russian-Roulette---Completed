let start_menu_hovering = false; // if false other true
// let start_menu_tutorial_hovering = false;

function start_menu() {
  background(0,0,0);

  if(button1 == 0) {
    button1Pres = false;
    temporaryPress = false;
  }

  /////////////////////////////////////////
  /// LOGIC BEHIND SELECTION
  /////////////////////////////////////////

  if(pot >= 512)  // pot halfway is ~ 512 (max is 1023)
    {
    start_menu_hovering = true;
  } 
  else 
  {
    start_menu_hovering = false;
  }

  if(button1 == 1) {
    if(!button1Pres) {
      if(start_menu_hovering) {
        // go to disclaimer menu
        // frameCount = 0; // this is to create a delay so that the next button press isnt immediate
        // TODO make it on button release 
        sceneNumber = 1;
        button1Pres = true;
  
      } else {
        // go to tutorial menu
        // frameCount = 0;
        sceneNumber = 2;
        button1Pres = true;
  
      }
    }
  }

  /////////////////////////////////////////
  //// END OF LOGIC
  /////////////////////////////////////////
  





  /////////////////////////////////////////
  /// COOL DRAWING STUFF
  /////////////////////////////////////////

  let sW = 9;
  let stroke_r = 100;
  
  let oscil = sin(frameCount*0.05); // oscillating
  let variableFill = map(oscil, -1, 1, -50, 50);

  let stroke_r_hovering = stroke_r+variableFill;


  /////////////////////////////////////////
  /// TITLE
  /////////////////////////////////////////

  let oscil0 = sin(frameCount*0.01);

  let englishTitle = map(oscil0, 0,1, 0,255);
  let russianTitle = map(oscil0, -1,0, 255,0);
  // In english
  push();
  textFont(cyrillic);
  textSize(128);
  fill(0,0)
  stroke(englishTitle);
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  text("Russian Roulette", width/2, 100);
  pop();

  // invisible but it shows as lines over the arc
  push();
  textFont(cyrillic);
  textSize(128);
  fill(0,0)
  stroke(russianTitle);
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  if(oscil0 < 0) {
    text("Русская рулетка", width/2, 100);
  }
  pop();

  
  /////////////////////////////////////////
  /// START BUTTON
  /////////////////////////////////////////

  let downwardOffset = 0;

  push();
  // outer rect
  stroke(stroke_r,0,0);
  strokeWeight(sW+map(oscil,-1,1,sW-2,sW+2));

  if(start_menu_hovering) 
  {
    stroke(stroke_r_hovering,0,0);
    fill(255+variableFill);
  } 
  else 
  {
    fill(0);
  }
  
  let w = 750;
  let h = 360;
  rect(width/2-w/2, (height/2)-(h/2)+downwardOffset, w, h, 60, 60, 60, 60)
  pop();



  push();
  // inner 1
  stroke(stroke_r,0,0);
  strokeWeight(sW);
  if(start_menu_hovering) 
    {
      stroke(stroke_r_hovering,0,0);
      fill(255+variableFill);
    } 
    else 
    {
      fill(0);
    }
  w = 750;
  h = 300;
  rect(width/2-w/2, (height/2)-(h/2)+downwardOffset, w, h, 30, 30, 30, 30)
  pop();

  
  push();
  //inner 2
  stroke(stroke_r,0,0);
  strokeWeight(sW);
  if(start_menu_hovering) 
    {
      stroke(stroke_r_hovering,0,0);
      // fill(255+variableFill);
    } 
  fill(0,0);
  w = 650;
  h = 360;
  rect(width/2-w/2, (height/2)-(h/2)+downwardOffset, w, h, 30, 30, 30, 30)
  pop();



  push();
  //inner most rect
  stroke(stroke_r,0,0);
  strokeWeight(sW);
  if(start_menu_hovering) {

    stroke(stroke_r_hovering,0,0);
    fill(stroke_r+variableFill,0,0);

  } 
  else 
  {
    fill(0);
  }
  
  w = 650;
  h = 300;
  rect(width/2-w/2, (height/2)-(h/2)+downwardOffset, w, h, 25, 25, 25, 25)
  pop();

  // Start Text
  push();
  translate(width/2+10, height/2+downwardOffset);
  let x = map(oscil, -1, 1, 10, 18);
  let x0 = map(sin(frameCount*0.01), -1, 1, 0, 8); // not using oscil so that its slower
  if(start_menu_hovering) {
    stroke(0);
    strokeWeight(x);
    fill(255);
    x0 = 0;
  } 
  else 
  {
    stroke(255,0,0);
    strokeWeight(x0);
    fill(255,0,0);
    // angleMode(DEGREES);
    // rotate(map(oscil, -1, 1, -15, 15));
  }
  textFont(oldStandardTT_italic);
  textSize(108+(x0*2));
  textAlign(CENTER, CENTER);
  text("S T A R T ",0,0); // +10 because it looks misaligned for some reason
  pop();
  /////////////////////////////////////////
  //// END OF START MENU
  /////////////////////////////////////////


  /////////////////////////////////////////
  //// TUTORIAL BUTTON
  /////////////////////////////////////////
  let offset = 300;
  let bigWidth = 400;
  let smallWidth = 300;
  let bigHeight = 150;
  let smallHeight = 100;
  push();
  // outer rect
  stroke(stroke_r,0,0);
  strokeWeight(sW+map(oscil,-1,1,sW-2,sW+2));

  if(!start_menu_hovering) 
  {
    stroke(stroke_r_hovering,0,0);
    fill(255+variableFill);
  } 
  else 
  {
    fill(0);
  }
  
  w = bigWidth;
  h = bigHeight;
  rect(width/2-w/2, (height/2)-(h/2)+offset, w, h, 60, 60, 60, 60)
  pop();



  push();
  // inner 1
  stroke(stroke_r,0,0);
  strokeWeight(sW);
  if(!start_menu_hovering) 
    {
      stroke(stroke_r_hovering,0,0);
      fill(255+variableFill);
    } 
    else 
    {
      fill(0);
    }
  w = bigWidth;
  h = smallHeight;
  rect(width/2-w/2, (height/2)-(h/2)+offset, w, h, 30, 30, 30, 30)
  pop();

  
  push();
  //inner 2
  stroke(stroke_r,0,0);
  strokeWeight(sW);
  if(!start_menu_hovering) 
    {
      stroke(stroke_r_hovering,0,0);
      // fill(255+variableFill);
    } 
  fill(0,0);
  w = smallWidth;
  h = bigHeight;
  rect(width/2-w/2, (height/2)-(h/2)+offset, w, h, 30, 30, 30, 30)
  pop();



  push();
  //inner most rect
  stroke(stroke_r,0,0);
  strokeWeight(sW);
  if(!start_menu_hovering) {

    stroke(stroke_r_hovering,0,0);
    fill(stroke_r+variableFill,0,0);

  } 
  else 
  {
    fill(0);
  }
  
  w = smallWidth;
  h = smallHeight;
  rect(width/2-w/2, (height/2)-(h/2)+offset, w, h, 25, 25, 25, 25)
  pop();

  // Start Text
  push();
  x = map(oscil, -1, 1, 2, 0);
  x0 = map(sin(frameCount*0.01), -1, 1, 0, 8); // not using oscil so that its slower
  if(!start_menu_hovering) {
    stroke(0);
    strokeWeight(x);
    fill(255);
    x0 = 0;
  } 
  else 
  {
    stroke(255,0,0);
    strokeWeight(map(sin(frameCount*0.01), -1, 1, 4, 0));
    fill(255,0,0);
  }

  textFont(oldStandardTT_italic);
  textSize(32+(x0*1.5));
  textAlign(CENTER, CENTER);
  text("TUTORIAL", width/2+10, height/2+offset);
  pop();

  /////////////////////////////////////////
  //// END OF TUTORIAL BUTTON
  /////////////////////////////////////////

}