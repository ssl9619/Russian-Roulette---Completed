let animationComplete = false; // when complete game starts
let player1lives = 3;
let player2lives = 3;
let player1_turn = true;
let selected_round = 0;
let capturedFrameCount = 0;
let flag = false;
let flag0_p1 = false;
let flag0_p2 = false;
let restartingRound = false;
let player1_lost_life = false;
let player2_lost_life = false;
let bullet_blank = false;


// after one life the game restarts until someone dies completely
function play_menu() {
    background(0);

    /*
    Order of events:
    Select number of live and blank rounds based on difficulty
    Run the animation
    Begin
    (Animation should last like a couple of seconds);
    */
    // initial framecount has already been set


    /////////////////////////////////////////
    /// PLAYER 1 & 2 TITLE ANIMATIONS 
    /////////////////////////////////////////
    let animation_text_duration = 60*2;
    // Player 1 title
    push();
    fill(stroke_r, 0,0);
    stroke(255);
    strokeWeight(4);
    textFont(cyrillic);
    textAlign(CENTER, CENTER);
    let size = 108;
    // let size = map(frameCount, initialFrameCount, initialFrameCount+animation_text_duration, 0, 108);
    // size = constrain(size, 0, 108);

    // TODO [OPTIONAL] use a cos or sin wave to make it less linear and instead make it so that it slows as its about to stop
    let xleft = map(frameCount, initialFrameCount, initialFrameCount+animation_text_duration, -(width/6+100), 0);
    xleft = constrain(xleft, -(width/6+100), 0);
    
    textSize(size);
    let x = width/6+xleft;
    let y = height/4;
    text("PLAYER", x, y);
    text("1", x, y+size);
    pop();

    // Player 2 title
    push();
    fill(stroke_r, 0,0);
    stroke(255);
    strokeWeight(4);
    textFont(cyrillic);
    textAlign(CENTER, CENTER);
    textSize(size);

    let xright = map(frameCount, initialFrameCount, initialFrameCount+animation_text_duration, width/6+100, 0);
    xright = constrain(xright, 0, width/6+100);
    x = width*5/6 + xright;
    // y = height/2;
    text("PLAYER", x, y);
    text("2", x, y+size);
    pop();

    /////////////////////////////////////////
    /// PLAYER 1 & 2 LIVES ANIMATIONS 
    /////////////////////////////////////////
    // Player 1 lives
    push();
    imageMode(CENTER);
    translate(width/6 + xleft, height/2+100);
    let variableSize = map(sin(frameCount*0.01), -1, 1, 0.9,1.1);
    
    scale(variableSize, variableSize);
    // variable lives

    switch(player1lives) {
        case 3:
            image(health_three, 0,0);
        break;
        case 2:
            image(health_two, 0,0);
        break;
        case 1:
            image(health_one, 0,0);
        break;
        case 0:
            image(health_zero, 0,0);
        break;
    }
    pop();

    // Player 2 lives
    push();
    imageMode(CENTER);
    translate(width*5/6 + xright, height/2+100);
    variableSize = map(sin(frameCount*0.01), -1, 1, 0.9,1.1);
    
    scale(variableSize, variableSize);
    // variable lives

    switch(player2lives) {
        case 3:
            image(health_three, 0,0);
        break;
        case 2:
            image(health_two, 0,0);
        break;
        case 1:
            image(health_one, 0,0);
        break;
        case 0:
            image(health_zero, 0,0); // TODO zero doesnt work
        break;
    }
    pop();




    /////////////////////////////////////////
    /// TITLE
    /////////////////////////////////////////
    let oscil0 = sin(frameCount*0.01);

    let englishTitle = map(oscil0, 0,1, 0,255);
    let russianTitle = map(oscil0, -1,0, 255,0);
    // In english
    push();
    textFont(cyrillic);
    textSize(100);
    fill(0,0)
    stroke(englishTitle);
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    text("Russian Roulette", width/2, 80);
    pop();

    // invisible but it shows as lines over the arc
    push();
    textFont(cyrillic);
    textSize(100);
    fill(0,0)
    stroke(russianTitle);
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    if(oscil0 < 0) {
        text("Русская рулетка", width/2, 80);
    }
    pop();




    /////////////////////////////////////////
    /// DIFFICULTY LISTED BELOW TITLE
    /////////////////////////////////////////
    push();
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
    textAlign(CENTER, CENTER);
    textSize(42);
    textFont(cyrillic);
    text(difficulty_string, width/2, 160);
    pop();





    /////////////////////////////////////////
    /// BULLETS ANIMATION
    /////////////////////////////////////////
    // if first part is done

    let animation_bullet_duration = 60*3;
    push();
    if(frameCount >= initialFrameCount + animation_text_duration + 60) {

        
        translate(width/2, height/2);
        imageMode(CENTER);
        round_live.resize(100,0);
        round_blank.resize(100,0);
        round_schrodinger.resize(100,0);

        if(frameCount < initialFrameCount + animation_text_duration + 60 + animation_bullet_duration) {
            if(frameCount % 60 <= 10) {
                image(round_schrodinger, b1[0], b1[1]);
                image(round_schrodinger, b0[0], b0[1]);
                image(round_schrodinger, b2[0], b2[1]);
                image(round_schrodinger, b3[0], b3[1]);
                image(round_schrodinger, b4[0], b4[1]);
                image(round_schrodinger, b5[0], b5[1]);
            }
        }

    }
    pop();

    /////////////////////////////////////////
    /// BULLETS ANIMATION x2
    /////////////////////////////////////////
    /// show the number of live rounds
    // might have it change depending on difficulty
    let animation_bullet_live = 60*2;
    push();

    translate(width/2, height/2);
    imageMode(CENTER);
    // round_live.resize(150,0);
    // round_blank.resize(150,0);
    // round_schrodinger.resize(150,0);
    rounds_radius = 200

    if(frameCount >= initialFrameCount + animation_text_duration + 60 + animation_bullet_duration &&
        frameCount < initialFrameCount + animation_text_duration + 60 + animation_bullet_duration + animation_bullet_live
    ) {
        // if(frameCount % 60 <= 30) {

            // first round
            if(rounds[0] == true) {
                image(round_live, b0[0], b0[1]);
            } else {
                image(round_blank, b0[0], b0[1]);
            }

            // second round
            if(rounds[1] == true) {
                image(round_live, b1[0], b1[1]);
            } else {
                image(round_blank, b1[0], b1[1]);
            }

            // third round
            if(rounds[2] == true) {
                image(round_live, b2[0], b2[1]);
            } else {
                image(round_blank, b2[0], b2[1]);
            }

            // fourth round
            if(rounds[3] == true) {
                image(round_live, b3[0], b3[1]);
            } else {
                image(round_blank, b3[0], b3[1]);
            }

            // fifth round
            if(rounds[4] == true) {
                image(round_live, b4[0], b4[1]);
            } else {
                image(round_blank, b4[0], b4[1]);
            }

            // sixth round
            if(rounds[5] == true) {
                image(round_live, b5[0], b5[1]);
            } else {
                image(round_blank, b5[0], b5[1]);
            }

            // im sure there is a better way of doing this but right now it doesnt matter
        // }
    }
    pop();

    // Start sign
    push();
    if(frameCount >= initialFrameCount + animation_text_duration + 240 + animation_bullet_duration &&
        frameCount < initialFrameCount + animation_text_duration + 300 + animation_bullet_duration + animation_bullet_live
    ) {

        textFont(cyrillic);
        textSize(120);
        fill(0);
        stroke(255);
        strokeWeight(3);
        textAlign(CENTER, CENTER);
        text("START!", width/2, height/2);
    }

    if(frameCount > initialFrameCount + animation_text_duration + 300 + animation_bullet_duration + animation_bullet_live + 60) {
        animationComplete = true;
    }
    pop();
    


    let animation_death_duration = 60*4;
    /////////////////////////////////////////
    /// PLAYER 1/2 DEATH
    /////////////////////////////////////////
    push();
        textFont(cyrillic);
        textSize(140);
        fill(200,0,0);
        stroke(255);
        strokeWeight(4);
        textAlign(CENTER, CENTER);

        if(player1lives == 0 && frameCount <= capturedFrameCount + animation_death_duration) {
            text("PLAYER 2 WINS!", width/2, height/2);
        }
        if(player2lives == 0 && frameCount <= capturedFrameCount + animation_death_duration) {
            text("PLAYER 1 WINS!", width/2, height/2);
        }
    pop();

    /////////////////////////////////////////
    /// PLAYER 1/2 DEATH ANIMATION
    /////////////////////////////////////////
    let animation_death_duration_two = 60*4;
    push();
    textFont(cyrillic);
    textSize(140);
    fill(0);
    stroke(255);
    strokeWeight(6);
    textAlign(CENTER, CENTER);
    if(player1lives == 0 && frameCount > capturedFrameCount + animation_death_duration + 30
    && frameCount < capturedFrameCount + animation_death_duration + 30 + animation_death_duration_two
    ) {
        text("RETURNING TO\nSTART", width/2, height/2);
    }

    if(player1lives == 0 && frameCount > capturedFrameCount + animation_death_duration + 30 + animation_death_duration_two
        ) {
            animationComplete = false; // when complete game starts
            player1lives = 3;
            player2lives = 3;
            player1_turn = true;
            selected_round = 0;
            capturedFrameCount = 0;
            flag = false;
            flag0_p1 = false;
            flag0_p2 = false;
            restartingRound = false;
            player1_lost_life = false;
            player2_lost_life = false;
            sceneNumber = 0;
        }


    pop();




    /////////////////////////////////////////
    /// GAME LOGIC
    /////////////////////////////////////////
    // Display whos turn it is
    push();
    textFont(cyrillic);
    textSize(140);
    fill(200,0,0);
    stroke(255);
    strokeWeight(4);
    textAlign(CENTER, CENTER);

        if(animationComplete && player1lives > 0 && player2lives > 0 && !restartingRound) {
            if(player1_turn) {
                text("TURN:\nPLAYER 1", width/2, height/2);
                // player1_turn = !player1_turn;
            } else {
                text("TURN:\nPLAYER 2", width/2, height/2);
                // player1_turn = !player1_turn;
            }

        }
    pop();

    // Gun firing
    // selected_round keeps going up until it hits 5 (starts at 0)
    // if one of the players gets shocked they lose a life
    // if someone gets shocked the background flashes red for a moment
    // shock lasts half a second (30 frames) (30 frames after button 2 is pressed when the round is live)
    // to reset rounds is changed and then framecount is set to the beginning of the play menu

    // button 2 is shoot the other person
    // button 1 is shoot yourself

    // button 4 is shoot the other person for player 2
    // button 3 is shoot yourself


    // if(animationComplete) {
    //     if(player1_turn) {
    //         // Player 1's turn

    //         if(button1 == 1 && !flag) {
    //             // capture the specific frame
    //             if(rounds[selected_round] == true) {
    //                 // bullet is live
    //                 player1lives--;
    //                 flag = true; // make it true after changing turn  
    //             } else {
    //                 // bullet is not live
    //             }
    //         }

            
    //     } else {
    //         // Player 2's turn



    //     }
    // }


    if(animationComplete && !restartingRound) {
        if(player1_turn) {
            // player 1 turn

            /////////////////////////////////////////
            /// SHOOT YOURSELF 
            /////////////////////////////////////////
            if(button1 == 1 && !flag) {
                capturedFrameCount = frameCount;
                flag = true;
    
                if(rounds[selected_round] == true) {
                    gLED = 1;
                    player1lives = player1lives - 1;
                    player1_lost_life = true;
                    restartingRound = true;
                    player1_turn = false; // if you die swaps turns

                    // TODO RESET THE ROUNDS
                    // TODO play a sound for blank and live
                } else {
                    bullet_blank = true;
                    selected_round++;
                }   
            }

            if(button1 == 0 && flag) {
                // gLED = 0;
                // player1_turn = false;
                // it stays your turn
                flag = false;
            }


            /////////////////////////////////////////
            /// SHOOT THE OTHER PLAYER (Player 1 shoots 2) 
            /////////////////////////////////////////
            if(button2 == 1 && !flag0_p1) {
                capturedFrameCount = frameCount;
                flag0_p1 = true;
    
                if(rounds[selected_round] == true) {
                    // yLED = 1; // yellow led is the other player
                    player2lives = player2lives - 1;
                    player2_lost_life = true;
                    restartingRound = true;
                    player1_turn = false; // swaps turns regardless

                    // TODO RESET THE ROUNDS
                    // TODO play a sound for blank and live
                } else {
                    selected_round++;
                }   
                
            }

            if(button2 == 0 && flag0_p1) {
                // yLED = 0;
                player1_turn = false;
                // it stays your turn
                flag0_p1 = false;
                // restartingRound = true;
            }
            
    
        } else {
            // player 2 turn

            /////////////////////////////////////////
            /// SHOOT YOURSELF
            /////////////////////////////////////////
            if(button3 == 1 && !flag) {
                capturedFrameCount = frameCount;
                flag = true;
    
                if(rounds[selected_round] == true) {
                    // gLED = 1;
                    player2lives = player2lives - 1;
                    player2_lost_life = true;
                    restartingRound = true;
                    player1_turn = false; // if you die swaps turns

                    // TODO RESET THE ROUNDS
                    // TODO play a sound for blank and live
                } else {
                    bullet_blank = true;
                    selected_round++;
                }   
            }

            if(button3 == 0 && flag) {
                // gLED = 0;
                // player1_turn = false;
                // it stays your turn
                flag = false;
            }


            /////////////////////////////////////////
            /// SHOOT THE OTHER PLAYER (Player 1 shoots 2) 
            /////////////////////////////////////////
            if(button4 == 1 && !flag0_p2) {
                capturedFrameCount = frameCount;
                flag0_p1 = true;
    
                if(rounds[selected_round] == true) {
                    // yLED = 1; // yellow led is the other player
                    player1lives = player1lives - 1;
                    player1_lost_life = true;
                    restartingRound = true;
                    player1_turn = true; // swaps turns regardless

                    // TODO RESET THE ROUNDS
                    // TODO play a sound for blank and live
                } else {
                    selected_round++;
                }   
                
            }

            if(button4 == 0 && flag0_p2) {
                // yLED = 0;
                player1_turn = true;
                // it stays your turn
                flag0_p2 = false;
                // restartingRound = true;
            }
        }
    }


    /////////////////////////////////////////
    /// BLANK BULLET ANIMATION 
    /////////////////////////////////////////
    let animation_blank_duration = 60*2;
    if(bullet_blank) {
        if(frameCount < capturedFrameCount + animation_blank_duration && frameCount > capturedFrameCount) {
            push();
            textFont(cyrillic);
            textSize(120);
            fill(150,0,0);
            stroke(255);
            strokeWeight(3);
            textAlign(CENTER, CENTER);
            text("BLANK!", width/2, height/2+300);
            pop();
        }

        if(frameCount > capturedFrameCount + animation_blank_duration + 10) {
            bullet_blank = false;
        }
    }


    // TODO Later
    /////////////////////////////////////////
    /// RESTART ANIMATION 
    /////////////////////////////////////////
    let animation_lostlife_duration = 60*3;
    push();
    if(restartingRound && player1lives > 0 && player2lives > 0) {
        // use captured framecount

        if(frameCount < capturedFrameCount + animation_lostlife_duration) {
            textFont(cyrillic);
            textSize(120);
            fill(0);
            stroke(255);
            strokeWeight(3);
            textAlign(CENTER, CENTER);
            if(player1_lost_life) {
                text("PLAYER 1\n-1 life", width/2, height/2);
            }

            if(player2_lost_life) {
                text("PLAYER 2\n-1 life", width/2, height/2);
            }
        }

        if(frameCount > capturedFrameCount + animation_lostlife_duration && frameCount < capturedFrameCount + animation_lostlife_duration + 120) {
            textFont(cyrillic);
            textSize(120);
            fill(0);
            stroke(255);
            strokeWeight(3);
            textAlign(CENTER, CENTER);
            text("RESTARTING\nROUND...", width/2, height/2);
            selected_round = 0;
            // restartingRound = false;
            // player1_lost_life = false;
            // player2_lost_life = false;
            rounds = rounds_function();
        }

        if(frameCount > capturedFrameCount + animation_lostlife_duration) {
            gLED = 0;
            yLED = 0;
        }

            /////////////////////////////////////////
            /// BULLETS ANIMATION *2
            /////////////////////////////////////////
        push();
        if(frameCount > capturedFrameCount + animation_lostlife_duration + 150) {
            
            translate(width/2, height/2);
            imageMode(CENTER);
            round_live.resize(100,0);
            round_blank.resize(100,0);
            round_schrodinger.resize(100,0);

            if(frameCount < capturedFrameCount + animation_lostlife_duration + 150 + animation_bullet_duration) {
                if(frameCount % 60 <= 10) {
                    image(round_schrodinger, b1[0], b1[1]);
                    image(round_schrodinger, b0[0], b0[1]);
                    image(round_schrodinger, b2[0], b2[1]);
                    image(round_schrodinger, b3[0], b3[1]);
                    image(round_schrodinger, b4[0], b4[1]);
                    image(round_schrodinger, b5[0], b5[1]);
                }
            }
        }
        pop();

        /////////////////////////////////////////
        /// BULLETS ANIMATION x2
        /////////////////////////////////////////
        /// show the number of live rounds
        // might have it change depending on difficulty
        let animation_bullet_live = 60*2;
        push();

        translate(width/2, height/2);
        imageMode(CENTER);
        // round_live.resize(150,0);
        // round_blank.resize(150,0);
        // round_schrodinger.resize(150,0);
        rounds_radius = 200

        if(frameCount >= capturedFrameCount + animation_lostlife_duration + 150 + animation_bullet_duration &&
            frameCount < capturedFrameCount + animation_lostlife_duration + 150 + animation_bullet_duration + animation_bullet_live
        ) {
            // if(frameCount % 60 <= 30) {

                // first round
                if(rounds[0] == true) {
                    image(round_live, b0[0], b0[1]);
                } else {
                    image(round_blank, b0[0], b0[1]);
                }

                // second round
                if(rounds[1] == true) {
                    image(round_live, b1[0], b1[1]);
                } else {
                    image(round_blank, b1[0], b1[1]);
                }

                // third round
                if(rounds[2] == true) {
                    image(round_live, b2[0], b2[1]);
                } else {
                    image(round_blank, b2[0], b2[1]);
                }

                // fourth round
                if(rounds[3] == true) {
                    image(round_live, b3[0], b3[1]);
                } else {
                    image(round_blank, b3[0], b3[1]);
                }

                // fifth round
                if(rounds[4] == true) {
                    image(round_live, b4[0], b4[1]);
                } else {
                    image(round_blank, b4[0], b4[1]);
                }

                // sixth round
                if(rounds[5] == true) {
                    image(round_live, b5[0], b5[1]);
                } else {
                    image(round_blank, b5[0], b5[1]);
                }

                // im sure there is a better way of doing this but right now it doesnt matter
            // }
        }
        pop();

        if(frameCount > capturedFrameCount + animation_lostlife_duration + 150 + animation_bullet_duration + animation_bullet_live) {
            restartingRound = false;
            player1_lost_life = false;
            player2_lost_life = false;
        }
    
    }
    pop();

}





////////////////////////////////////////
/// OTHER FUNCTIONS
/////////////////////////////////////////
// Shock the player, requires the player and the frame at which button pressed
// not used
function shockPlayer(iFrame) {
    // debug
    if(player1_turn) {
        if(frameCount < iFrame + 30) {
            gLED = 1;
        } else {
            gLED = 0;
        }
    } else {
        if(frameCount < iFrame + 30) {
            yLED = 1;
        } else {
            yLED = 0;
        }
    }
}


function randomLiveRounds() {

    // let i = round(random(1,5));
  
    let min = 1;
    let max = 1;
  
    switch(difficulty) {
      case 0: // standard
      min = 1;
      max = 1;
      break;
      case 1: // hard
      min = 1;
      max = 2;
      break;
      case 2: // harder
      min = 2;
      max = 3;
      break;
      case 3: // nearly impossible
      min = 2;
      max = 4;
      break;
      case 4: // masochist
      min = 3;
      max = 5;
      break;
    }
  
    let i = round(random(min,max));
  
    return i;
}

function rounds_function() {

    // this was annoying
    // not written very cleanly but who cares
    return roundsCreator(randomLiveRounds());
}

function roundsCreator(liveRounds) {
    let rounds_copy = [];
    let liveCount = liveRounds;
    for(let i = 0; i<6; i++) {
      rounds_copy.push(false);
    }
  
    while(liveCount > 0) {
      let r = round(random(0,5));
  
      if(!rounds_copy[r]) {
        rounds_copy[r] = true;
        liveCount--;
      }
    }
  
    return rounds_copy
  }
  

// There was a sketch made by Daniel Shiffman (https://p5js.org/examples/math-polartocartesian.html)
// but I decided to make it on my own with inspiration from him since the sketch didn't have a function
// that I could copy

// use degrees
function polarToCartesian(radius, theta) {
    let cartesian = []; // returns [x,y]
  
    angleMode(DEGREES);
    // x value;
    let x;
    x = cos(theta) * radius;
    cartesian.push(x);
  
    let y;
    y = sin(theta) * radius;
    cartesian.push(y);
  
    return cartesian;
  }