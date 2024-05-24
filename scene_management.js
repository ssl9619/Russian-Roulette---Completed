class sceneManagement {

  constructor(x) {
    this.updateScene(x); // sets the screen initially
  }
  
  updateScene(x) { // has to be called on consistently
    switch(x) {
        // each one is a seperate function
        case 0: // start menu
          start_menu();
        break;
        case 1: // disclaimer menu
          disclaimer();
        break;
        case 2: // tutorial menu
          tutorial_1();
        break;
        case 3: // tutorial menu page 2
          tutorial_2();
        break;
        case 4: // difficulty menu
          difficulty_menu();
        break;
        case 5: // game menu
          play_menu();
        break;
        case 6: // end menu (credits)
          credits_menu();
        break;
        default: // should never happen
        break;
        
    }
  }
}