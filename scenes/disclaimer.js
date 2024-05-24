let disclaimer_hovering = false;
let temporaryPress = false; // I just need to capture the press for a moment
let initialFrameCount = 0;
let holding = 0; // has to be held for 3 seconds
let durationComplete = false;

function disclaimer() {
    if(button1 == 0) {
        button1Pres = false;
    }
    // go back button
    background(0);

    stroke_r = 150;

    /////////////////////////////////////////
    /// RECT & LINE
    /////////////////////////////////////////

    // Background Rect
    push();
    fill(255)
    stroke(stroke_r,0,0);
    strokeWeight(12)
    let w = width-200
    // setLineDash([15,30,15]); // Thanks to squishynotions
    rect(width/2-w/2, -25, w, height+50)
    pop();

    // line
    push();
    stroke(stroke_r,0,0);
    strokeWeight(5);
    let y = 150;

    setLineDash([30,15,30]);
    line(width/2-w/2, y, width/2+w/2, y);
    pop();


    /////////////////////////////////////////
    /// DISCLAIMER TEXT
    /////////////////////////////////////////

    // Title
    push();
    fill(0);
    textFont(oldStandardTT_bold);
    textSize(32);
    textAlign(CENTER,CENTER);
    text("DISCLAIMER\tDISCLAIMER\tDISCLAIMER\tDISCLAIMER\tDISCLAIMER", width/2, 30);
    pop();

    push();
    fill(0);
    textFont(oldStandardTT_bold);
    textSize(32);
    textAlign(CENTER,CENTER);
    textSize(64);
    text("DISCLAIMER", width/2, 100);
    pop();

    // Actual text
    push();
    fill(0);
    textFont(oldStandardTT_regular);
    textAlign(LEFT);
    textSize(24);
    text("1. RISK OF ELECTRIC SHOCK:\n\t\t\tThis game involves electric shocks. The shocks have been designed to be small, harmless and mild, however\n\t\t\tthey can still cause discomfort. If you don't want to get shocked you don't have to place your hand on the\n\t\t\tshocking device\n\n2. NOT SUITABLE FOR EVERYONE:\n\t\t\tIf you have a certain condition where you know that even small electric shocks can be of danger do not\n\t\t\tplay this game. If you are under the age of 18 you are not allowed to play this game.\n\n3. VOLUNTARY PARTICIPATION:\n\t\t\tYou don't have to play if you don't want to."
    , 150, 250);
    pop();

    /////////////////////////////////////////
    /// POT HOVERING LOGIC
    /////////////////////////////////////////
    
    if(pot < 512) { // if left it is true and vice versa
        disclaimer_hovering = true;
    } else {
        disclaimer_hovering = false;
    }

    if(button1 == 1) {
        if(!button1Pres) { 
            if(disclaimer_hovering) {
                sceneNumber = 0;
                temporaryPress = false;
                button1Pres = true;
            } else {
                // sceneNumber = 4; // difficulty menu
                button1Pres = true;
            }
        }
    }

    /////////////////////////////////////////
    /// GO BACK
    /////////////////////////////////////////

    let oscil = sin(frameCount*0.01);

    // Rect
    push(); 
    x = (width-200)/4-100;
    y = 620;
    w = 280;
    h = 100;
    stroke(stroke_r, 0,0);
    strokeWeight(6);
    if(!disclaimer_hovering) {
        fill(0);
    } else {
        stroke(stroke_r, 0,0);
        fill(255);
    }
    rect(x,y,w,h, 15, 15, 15, 15);
    pop();

    // Inner
    push(); 

    stroke(stroke_r, 0,0);
    strokeWeight(6);
    if(!disclaimer_hovering) {
        fill(0);
    } else {
        fill(stroke_r, 0,0);
    }
    rect(x+25,y,w-50,h);
    pop();

    /// TEXT
    push();
    stroke(stroke_r, 0 ,0);
    textSize(map(sin(frameCount*0.08),-1,1,48,56));
    strokeWeight(map(oscil,-1,1,0,5));
    if(!disclaimer_hovering) {
        fill(255,0,0);
        
    } else {
        fill(255)
        stroke(0);
        // strokeWeight(5);
    }
    textFont(oldStandardTT_italic);
    
    textAlign(CENTER, CENTER);
    text("Go Back", x+(w/2),y+(h/2));
    pop();





    /////////////////////////////////////////
    /// DIFFICULTY BUTTON
    /////////////////////////////////////////
    // User has to press button 1 and button 3 and hold for 3 seconds and there will be an animation

    // Rect
    push(); 
    x = (width-200)*3/4;
    y = 620;
    w = 320;
    h = 100;
    stroke(stroke_r, 0,0);
    strokeWeight(6);
    if(disclaimer_hovering) {
        fill(0);
    } else {
        stroke(stroke_r, 0,0);
        fill(255);
    }
    rect(x,y,w,h, 15, 15, 15, 15);
    pop();

    // Inner
    push(); 

    stroke(stroke_r, 0,0);
    strokeWeight(6);
    if(disclaimer_hovering) {
        fill(0);
    } else {
        fill(stroke_r, 0,0);
    }
    rect(x+25,y,w-50,h);
    pop();

    /// TEXT
    push();
    stroke(stroke_r, 0 ,0);
    textAlign(CENTER, CENTER);
    textFont(oldStandardTT_italic);

    if(disclaimer_hovering) {
        fill(255,0,0);
    } else {
        // when it is hovering
        fill(stroke_r, 0, 0);
        stroke(0);
        // strokeWeight(2);
        textSize(map(sin(frameCount*0.02),-1,1,28,32));
        text("HOLD!", x+(w/2),y+(h/2)+70);
        
    }   
    
    fill(255)
    strokeWeight(map(oscil,-1,1,0,5));
    textSize(map(sin(frameCount*0.08),-1,1,48,56));
    text("NEXT", x+(w/2),y+(h/2));
    pop();


    /////////////////////////////////////////
    /// SELECTION ARROW 
    /////////////////////////////////////////
    push();

    let varTriangle = map(sin(frameCount*0.05), -1, 1, -5, 10);

    if(!disclaimer_hovering) {

        w = 320;
        x0 = (width-200)*3/4 + w/2;
        y0 = 610 + varTriangle; 
        wTriangle = 25;
        hTriangle = 30;

        fill(stroke_r, 0,0);
        stroke(0);
        strokeWeight(2);
        triangle(x0, y0, x0-wTriangle/2, y0-hTriangle, x0+wTriangle/2, y0-hTriangle);

        w = 320;
        x0 = (width-200)*3/4 + w/2;
        y0 = 590 + varTriangle; 
        wTriangle = 25;
        hTriangle = 10;

        fill(255);
        stroke(255);
        // strokeWeight(2);
        triangle(x0, y0, x0-wTriangle/2, y0-hTriangle, x0+wTriangle/2, y0-hTriangle);
    } else {
        w = 280;
        x0 = (width-200)/4-100 + w/2;
        y0 = 610 + varTriangle; 
        wTriangle = 25;
        hTriangle = 30;

        fill(stroke_r, 0,0);
        stroke(0);
        strokeWeight(2);
        triangle(x0, y0, x0-wTriangle/2, y0-hTriangle, x0+wTriangle/2, y0-hTriangle);

        w = 280;
        x0 = (width-200)/4-100 + w/2;
        y0 = 590 + varTriangle; 
        wTriangle = 25;
        hTriangle = 10;

        fill(255);
        stroke(255);
        // strokeWeight(2);
        triangle(x0, y0, x0-wTriangle/2, y0-hTriangle, x0+wTriangle/2, y0-hTriangle);
    }

    pop();

    /////////////////////////////////////////
    /// LOGIC FOR NEXT BUTTON 
    /////////////////////////////////////////
    if(button1 == 1 && !temporaryPress) {
        initialFrameCount = frameCount;
        temporaryPress = true;
    }

    if(button1 == 0 && temporaryPress) {
        temporaryPress = false;
    }

    // duration of hold
    let duration = 60*2; // 3 seconds

    if(frameCount == initialFrameCount + duration && temporaryPress) {
        initialFrameCount = frameCount;
        temporaryPress = false;
        button1Pres = true;
        sceneNumber = 4;
    }

    // Sliding Inner Rect (this is so cool)
    push();
    if(temporaryPress) {
        fill(0);
        stroke(stroke_r, 0, 0);
        strokeWeight(6);
        let w0 = map(frameCount, initialFrameCount, initialFrameCount + duration, 0, w-50);
        rect(x+25,y,w0,h);
    }
    pop();

    // omg thats done

}