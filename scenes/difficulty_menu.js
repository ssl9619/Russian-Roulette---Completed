let difficulty = 0;
/*
0 = Standard (1 bullet)
1 = Hard (1-2 Bullets)
2 = Harder (2-3 Bullets)
3 = Nearly Impossible (2-4 Bullets)
4 = Masochist (3-5 Bullets)
*/

let difficulty_standard_hovering = false;
let difficulty_hard_hovering = false;
let difficulty_harder_hovering = false;
let difficulty_nearlyImpossible_hovering = false;
let difficulty_masochist_hovering = false;
let button2Pres = false;

function difficulty_menu() {
    background(0); // will remove this eventually and replace with some kind of video in the background

    if(button1 == 0) {
        button1Pres = false;
    }


    /////////////////////////////////////////
    /// SCENE SWITCH
    /////////////////////////////////////////
    /// ITS IMPORTANT THAT IT'S HERE BECAUSE
    /// THE POTENTIOMETER VALUE CHANGES WHEN
    /// THE BUTTON IS PRESSED
    /////////////////////////////////////////
    /// TODO do the same for the other scenes

    if(pot >= 0 && pot < 204) {
        difficulty_standard_hovering = true;
    } else {
        difficulty_standard_hovering = false;
    }

    if(pot > 205 && pot < 408) {
        difficulty_hard_hovering = true;
    } else {
        difficulty_hard_hovering = false;
    }

    if(pot > 409 && pot < 622) {
        difficulty_harder_hovering = true;
    } else {
        difficulty_harder_hovering = false;
    }

    if(pot > 623 && pot < 826) {
        difficulty_nearlyImpossible_hovering = true;
    } else {
        difficulty_nearlyImpossible_hovering = false;
    }

    if(pot > 827 && pot <= 1023) {
        difficulty_masochist_hovering = true;
    } else {
        difficulty_masochist_hovering = false;
    }


    /////////////////////////////////////////
    /// STANDARD DIFFICULTY
    /////////////////////////////////////////
    // Rect
    let x = width/5;
    let y = height/2;
    let offset = -150;
    let bigWidth = 280;
    let smallWidth = 200;
    let bigHeight = 150;
    let smallHeight = 120;

    let sW = 4;
    let stroke_r = 100;
    
    let oscil = sin(frameCount*0.05); // oscillating
    let variableFill = map(oscil, -1, 1, -50, 0);

    let stroke_r_hovering = stroke_r+variableFill;


    push();
    // outer rect
    stroke(stroke_r,0,0);
    strokeWeight(sW+map(oscil,-1,1,sW-2,sW+2));

    if(difficulty_standard_hovering) 
        {
            fill(255);
        } 
        else 
        {
            fill(0);
        }
    
    w = bigWidth;
    h = bigHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 60, 60, 60, 60)
    pop();



    push();
    // inner 1
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_standard_hovering) 
        {
        fill(255);
        } 
        else 
        {
        fill(0);
        }

    w = bigWidth;
    h = smallHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 30, 30, 30, 30)
    pop();

    
    push();
    //inner 2
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_standard_hovering) 
        {
        // stroke(stroke_r_hovering,0,0);
        fill(255);
        } else {
        fill(0,0);
        }
    w = smallWidth;
    h = bigHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 30, 30, 30, 30)
    pop();



    push();
    //inner most rect
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_standard_hovering) {
        fill(stroke_r,0,0);
    } 
    else 
    {
        fill(0);
    }
    
    w = smallWidth;
    h = smallHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 25, 25, 25, 25)
    pop();

    // Start Text
    push();
    // x = map(oscil, -1, 1, 2, 0);
    x0 = map(sin(frameCount*0.01), -1, 1, 0, 8); // not using oscil so that its slower
    if(difficulty_standard_hovering) {
        stroke(0);
        strokeWeight(5);
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
    text("STANDARD", x, y+offset); 
    pop();


    




    /////////////////////////////////////////
    /// HARD DIFFICULTY
    /////////////////////////////////////////
    // Rect
    x = width*2/5;
    y = height/2;
    offset = -150;

    sW = 4;
    stroke_r = 100;
    
    oscil = sin(frameCount*0.05); // oscillating
    variableFill = map(oscil, -1, 1, -50, 50);

    stroke_r_hovering = stroke_r+variableFill;


    push();
    // outer rect
    stroke(stroke_r,0,0);
    strokeWeight(sW+map(oscil,-1,1,sW-2,sW+2));

    if(difficulty_hard_hovering) 
        {
            fill(255);
        } 
        else 
        {
            fill(0);
        }
    
    w = bigWidth;
    h = bigHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 60, 60, 60, 60)
    pop();



    push();
    // inner 1
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_hard_hovering) 
        {
        fill(255);
        } 
        else 
        {
        fill(0);
        }

    w = bigWidth;
    h = smallHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 30, 30, 30, 30)
    pop();

    
    push();
    //inner 2
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_hard_hovering) 
        {
        // stroke(stroke_r_hovering,0,0);
        fill(255);
        } else {
        fill(0,0);
        }
    w = smallWidth;
    h = bigHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 30, 30, 30, 30)
    pop();



    push();
    //inner most rect
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_hard_hovering) {
        fill(stroke_r,0,0);
    } 
    else 
    {
        fill(0);
    }
    
    w = smallWidth;
    h = smallHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 25, 25, 25, 25)
    pop();

    // Start Text
    push();
    // x = map(oscil, -1, 1, 2, 0);
    x0 = map(sin(frameCount*0.01), -1, 1, 0, 8); // not using oscil so that its slower
    if(difficulty_hard_hovering) {
        stroke(0);
        strokeWeight(5);
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
    text("HARD", x, y+offset); 
    pop();




    /////////////////////////////////////////
    /// HARDER DIFFICULTY
    /////////////////////////////////////////
    // Rect
    x = width*3/5;
    y = height/2;
    offset = -150;

    sW = 4;
    stroke_r = 100;
    
    oscil = sin(frameCount*0.05); // oscillating
    variableFill = map(oscil, -1, 1, -50, 50);

    stroke_r_hovering = stroke_r+variableFill;


    push();
    // outer rect
    stroke(stroke_r,0,0);
    strokeWeight(sW+map(oscil,-1,1,sW-2,sW+2));

    if(difficulty_harder_hovering) 
        {
            fill(255);
        } 
        else 
        {
            fill(0);
        }
    
    w = bigWidth;
    h = bigHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 60, 60, 60, 60)
    pop();



    push();
    // inner 1
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_harder_hovering) 
        {
        fill(255);
        } 
        else 
        {
        fill(0);
        }

    w = bigWidth;
    h = smallHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 30, 30, 30, 30)
    pop();

    
    push();
    //inner 2
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_harder_hovering) 
        {
        // stroke(stroke_r_hovering,0,0);
        fill(255);
        } else {
        fill(0,0);
        }
    w = smallWidth;
    h = bigHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 30, 30, 30, 30)
    pop();



    push();
    //inner most rect
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_harder_hovering) {
        fill(stroke_r,0,0);
    } 
    else 
    {
        fill(0);
    }
    
    w = smallWidth;
    h = smallHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 25, 25, 25, 25)
    pop();

    // Start Text
    push();
    // x = map(oscil, -1, 1, 2, 0);
    x0 = map(sin(frameCount*0.01), -1, 1, 0, 8); // not using oscil so that its slower
    if(difficulty_harder_hovering) {
        stroke(0);
        strokeWeight(5);
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
    text("HARDER", x, y+offset); 
    pop();




    /////////////////////////////////////////
    /// NEARLY IMPOSSIBLE DIFFICULTY
    /////////////////////////////////////////
    // Rect
    x = width*4/5;
    y = height/2;
    offset = -150;

    sW = 4;
    stroke_r = 100;
    
    oscil = sin(frameCount*0.05); // oscillating
    variableFill = map(oscil, -1, 1, -50, 50);

    stroke_r_hovering = stroke_r+variableFill;


    push();
    // outer rect
    stroke(stroke_r,0,0);
    strokeWeight(sW+map(oscil,-1,1,sW-2,sW+2));

    if(difficulty_nearlyImpossible_hovering) 
        {
            fill(255);
        } 
        else 
        {
            fill(0);
        }
    
    w = bigWidth;
    h = bigHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 60, 60, 60, 60)
    pop();



    push();
    // inner 1
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_nearlyImpossible_hovering) 
        {
        fill(255);
        } 
        else 
        {
        fill(0);
        }

    w = bigWidth;
    h = smallHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 30, 30, 30, 30)
    pop();

    
    push();
    //inner 2
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_nearlyImpossible_hovering) 
        {
        // stroke(stroke_r_hovering,0,0);
        fill(255);
        } else {
        fill(0,0);
        }
    w = smallWidth;
    h = bigHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 30, 30, 30, 30)
    pop();



    push();
    //inner most rect
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_nearlyImpossible_hovering) {
        fill(stroke_r,0,0);
    } 
    else 
    {
        fill(0);
    }
    
    w = smallWidth;
    h = smallHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 25, 25, 25, 25)
    pop();

    // Start Text
    push();
    // x = map(oscil, -1, 1, 2, 0);
    x0 = map(sin(frameCount*0.01), -1, 1, 0, 8); // not using oscil so that its slower
    if(difficulty_nearlyImpossible_hovering) {
        stroke(0);
        strokeWeight(5);
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
    text("NEARLY\nIMPOSSIBLE", x, y+offset); 
    pop();




    /////////////////////////////////////////
    /// MASOCHIST DIFFICULTY
    /////////////////////////////////////////
    // Rect
    x = width/2;
    y = height/2;
    offset = 0;

    sW = 4;
    stroke_r = 100;
    
    oscil = sin(frameCount*0.05); // oscillating
    variableFill = map(oscil, -1, 1, -50, 50);

    stroke_r_hovering = stroke_r+variableFill;


    push();
    // outer rect
    stroke(stroke_r,0,0);
    strokeWeight(sW+map(oscil,-1,1,sW-2,sW+2));

    if(difficulty_masochist_hovering) 
        {
            fill(255);
        } 
        else 
        {
            fill(0);
        }
    
    w = bigWidth;
    h = bigHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 60, 60, 60, 60)
    pop();



    push();
    // inner 1
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_masochist_hovering) 
        {
        fill(255);
        } 
        else 
        {
        fill(0);
        }

    w = bigWidth;
    h = smallHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 30, 30, 30, 30)
    pop();

    
    push();
    //inner 2
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_masochist_hovering) 
        {
        // stroke(stroke_r_hovering,0,0);
        fill(255);
        } else {
        fill(0,0);
        }
    w = smallWidth;
    h = bigHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 30, 30, 30, 30)
    pop();



    push();
    //inner most rect
    stroke(stroke_r,0,0);
    strokeWeight(sW);
    if(difficulty_masochist_hovering) {
        fill(stroke_r,0,0);
    } 
    else 
    {
        fill(0);
    }
    
    w = smallWidth;
    h = smallHeight;
    rect(x-w/2, y-(h/2)+offset, w, h, 25, 25, 25, 25)
    pop();

    // Start Text
    push();
    // x = map(oscil, -1, 1, 2, 0);
    x0 = map(sin(frameCount*0.01), -1, 1, 0, 8); // not using oscil so that its slower
    if(difficulty_masochist_hovering) {
        stroke(0);
        strokeWeight(5);
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
    text("MASOCHIST", x, y+offset); 
    textSize(32+(x0*1.5));
    textAlign(CENTER, CENTER);
    textFont(oldStandardTT_regular);

    stroke(0);
    strokeWeight(5);
    fill(255);
    // x0 = 0;
    text("HOLD!", x, y+offset+100); 
    pop();





    /////////////////////////////////////////
    /// BUTTON HOLDING LOGIC
    /////////////////////////////////////////

    if(!button1Pres) {
        // once the button has been released from the last scene
        // Note: temporary press has been set to false before getting to this scene
        if(button1 == 1 && !temporaryPress) {
            initialFrameCount = frameCount;
            temporaryPress = true; // so that this if statement cannot be called after
        }

        if(button1 == 0 && temporaryPress) {
            temporaryPress = false;
        }
    }

    // // Sliding Inner Rect (this is so cool)
    push();
    // change x and y depending on location
    w = 200;
    // let durationComplete = frameCount == initialFrameCount + duration;
    duration = 60;
    if(difficulty_standard_hovering) {
        x = width/5;
        y = height/2-150;
        
    }
    if(difficulty_hard_hovering) {
        x =width*2/5;
        y = height/2-150;
        
    }
    if(difficulty_harder_hovering) {
        x =width*3/5;
        y = height/2-150;
        
    }
    if(difficulty_nearlyImpossible_hovering) {
        x =width*4/5;
        y = height/2-150;
        
    }
    if(difficulty_masochist_hovering) {
        x = width/2;
        y = height/2;
        
    }

    if(temporaryPress) {
        fill(255);
        stroke(stroke_r, 0, 0);
        strokeWeight(sW);
        let w0 = map(frameCount, initialFrameCount, initialFrameCount + duration, 0, w);
        w0 = constrain(w0, 0, 200);
        rect(x-w/2,y-h/2,w0,h, 25, 25, 25, 25);

        if(difficulty_standard_hovering) {
            if(w0 == 200) { // This isnt best but ...
                difficulty = 0;
                rounds = rounds_function();
            }
        }
        if(difficulty_hard_hovering) {
            if(w0 == 200) {
                difficulty = 1;
                rounds = rounds_function();
            }
        }
        if(difficulty_harder_hovering) {
            if(w0 == 200) {
                difficulty = 2;
                rounds = rounds_function();
            }
        }
        if(difficulty_nearlyImpossible_hovering) {
            if(w0 == 200) {
                difficulty = 3;
                rounds = rounds_function();
            }
        }
        if(difficulty_masochist_hovering) {
            if(w0 == 200) {
                difficulty = 4;
                rounds = rounds_function();
            }
        }
        

    }
    pop();






    /////////////////////////////////////////
    /// CURRENT DIFFICULTY DISPLAY
    /////////////////////////////////////////
    /// WILL ALSO DISPLAY THAT YOU HAVE TO
    /// PRESS BUTTON 2 TO CONTINUE
    /////////////////////////////////////////

    push();
    textFont(cyrillic);
    let coefficient = 0.01;
    textSize(map(sin(frameCount*coefficient), -1, 1, 128, 140));
    let difficulty_string = "STANDARD";
    let difficulty_description = "1 LIVE BULLET";
    
    switch(difficulty) {
        case 0:
            fill(255);
            coefficient = 0.01;
            difficulty_string = "STANDARD";
            difficulty_description = "1 LIVE BULLET";
        break;
        case 1:
            fill(255);
            stroke(stroke_r, 0,0);
            strokeWeight(2);
            coefficient = 0.02;
            difficulty_string = "HARD";
            difficulty_description = "1-2 LIVE BULLETS";
        break;
        case 2:
            fill(0);
            stroke(255,0,0);
            strokeWeight(6);
            coefficient = 0.06;
            difficulty_string = "HARDER";
            difficulty_description = "2-3 LIVE BULLETS";
        break;
        case 3:
            fill(255,0,0);
            stroke(255,0,0);
            strokeWeight(4);
            coefficient = 0.04;
            difficulty_string = "NEARLY IMPOSSIBLE";
            difficulty_description = "2-4 LIVE BULLETS";
        break;
        case 4:
            fill(stroke_r, 0,0);
            stroke(255,0,0);
            strokeWeight(2);
            coefficient = 0.03;
            difficulty_string = "MASOCHIST";
            difficulty_description = "3-5 LIVE BULLETS";
        break;
    }

    x = width/2;
    y = height*3/4;
    textAlign(CENTER, CENTER);
    text(difficulty_string, x, y);

    textFont(oldStandardTT_bold);
    textSize(42);
    text(difficulty_description, x, y+100);
    fill(255);
    strokeWeight(0);
    textSize(28);
    text("Button 2 to Start", x, y+155);
    pop();

    /////////////////////////////////////////
    /// GO TO PLAY SCREEN
    /////////////////////////////////////////
    if(button2 == 1) {
        button2Pres = true;
        initialFrameCount = frameCount;
        rounds = rounds_function();
        sceneNumber = 5;
    }

    
    /////////////////////////////////////////
    /// TITLE
    /////////////////////////////////////////

    let oscil0 = sin(frameCount*0.005);

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
    text("Difficulty", width/2, 100);
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
        text("сложность", width/2, 100);
    }
    pop();
}