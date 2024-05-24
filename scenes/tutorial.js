let tutorial_hovering = false;

function tutorial_1() {
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
    let w = 600
    // setLineDash([15,30,15]); // Thanks to squishynotions
    rect(width-w, -25, w, height+50)
    pop();

    // line
    push();
    stroke(stroke_r,0,0);
    strokeWeight(5);
    let y = 150;
    setLineDash([15]);
    line(width-w, y,width, y);
    pop();

    push();
    fill(0);
    textFont(oldStandardTT_bold);
    textSize(32);
    textAlign(CENTER,CENTER);
    textSize(64);
    text("TUTORIAL", width-w/2, 70);
    pop();

    // page number
    push();
    fill(0);
    textFont(oldStandardTT_bold);
    textAlign(CENTER,CENTER);
    textSize(24);
    text("pg 1", width-100, height-30);
    pop();

    /////////////////////////////////////////
    /// POT HOVERING LOGIC
    /////////////////////////////////////////
    
    if(pot > 512) { // if left it is true and vice versa
        tutorial_hovering = true;
    } else {
        tutorial_hovering = false;
    }

    if(button1 == 1) {
        if(!button1Pres) { 
            if(tutorial_hovering) { // i have it mixed around a little bit but it is what it is
                sceneNumber = 3; // next page
                temporaryPress = false;
                button1Pres = true;
            } else {
                sceneNumber = 0; //start menu
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
    x = (width-200)/4-300 ;
    y = 700;
    w = 280;
    h = 100;
    stroke(stroke_r, 0,0);
    strokeWeight(6);
    if(tutorial_hovering) {
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
    if(tutorial_hovering) {
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
    if(tutorial_hovering) {
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
    /// SELECTION ARROW 
    /////////////////////////////////////////
    push();

    let varTriangle = map(sin(frameCount*0.05), -1, 1, -5, 10);

    if(!tutorial_hovering) {

        // normal red triangle
        w = 320;
        x0 = (width-200)/4-160;
        y0 = 690 + varTriangle
        wTriangle = 25;
        hTriangle = 30;

        fill(stroke_r, 0,0);
        stroke(0);
        strokeWeight(2);
        triangle(x0, y0, x0-wTriangle/2, y0-hTriangle, x0+wTriangle/2, y0-hTriangle);
        
        w = 320;
        x0 = (width-200)/4-160;
        y0 = 690 + varTriangle-20
        wTriangle = 25;
        hTriangle = 10;

        fill(0);
        stroke(0);
        strokeWeight(2);
        triangle(x0, y0, x0-wTriangle/2, y0-hTriangle, x0+wTriangle/2, y0-hTriangle);

        // w = 320;
        // x0 = (width-200)*3/4 + w/2;
        // y0 = 590 + varTriangle; 
        // wTriangle = 25;
        // hTriangle = 10;

        // fill(255);
        // stroke(255);
        // // strokeWeight(2);
        // triangle(x0, y0, x0-wTriangle/2, y0-hTriangle, x0+wTriangle/2, y0-hTriangle);
    } else {
        w = 280;
        x0 = (width-200)/4-440;
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
    if(!tutorial_hovering) {
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
    if(!tutorial_hovering) {
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

    if(!tutorial_hovering) {
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
}

function tutorial_2() {
    background(0);


    
}