// Week 11.2 Example of bidirectional serial communication

// Inputs:
// - A0 - sensor connected as voltage divider (e.g. potentiometer or light sensor)
// - A1 - sensor connected as voltage divider 
//
// Outputs:
// - 2 - LED
// - 5 - LED

// int leftLedPin = 2;
// int rightLedPin = 5;


int greenLedPin = 2;
int yellowLedPin = 3;

int button1Pin = 5;
int button2Pin = 6;

int button3Pin = 8;
int button4Pin = 9;


void setup() {
  // Start serial communication so we can send data
  // over the USB connection to our p5js sketch
  Serial.begin(9600);

  // We'll use the builtin LED as a status output.
  // We can't use the serial monitor since the serial connection is
  // used to communicate to p5js and only one application on the computer
  // can use a serial port at once.
  pinMode(LED_BUILTIN, OUTPUT);

  // Outputs on these pins
  pinMode(greenLedPin, OUTPUT);
  pinMode(yellowLedPin, OUTPUT);

  pinMode(button1Pin, INPUT);
  pinMode(button2Pin, INPUT);

  pinMode(button3Pin, INPUT);
  pinMode(button4Pin, INPUT);

  // Blink them so we can check the wiring
  digitalWrite(greenLedPin, HIGH);
  digitalWrite(yellowLedPin, HIGH);
  delay(200);
  digitalWrite(greenLedPin, LOW);
  digitalWrite(yellowLedPin, LOW);



  // start the handshake
  while (Serial.available() <= 0) {
    digitalWrite(LED_BUILTIN, HIGH); // on/blink while waiting for serial data
    Serial.println("0,0,0,0"); // send a starting message
    delay(300);            // wait 1/3 second
    digitalWrite(LED_BUILTIN, LOW);
    delay(50);
  }
}

void loop() {
  // wait for data from p5 before doing something
  while (Serial.available()) {
    digitalWrite(LED_BUILTIN, HIGH); // led on while receiving data

    int greenLed = Serial.parseInt();
    int yellowLed = Serial.parseInt();
    if (Serial.read() == '\n') {
      // digitalWrite(leftLedPin, left);
      // digitalWrite(rightLedPin, right);
      // int sensor = analogRead(A0);
      // delay(5);
      // int sensor2 = analogRead(A1);
      // delay(5);
      // Serial.print(sensor);
      // Serial.print(',');
      // Serial.println(sensor2);

      digitalWrite(greenLedPin, greenLed);
      digitalWrite(yellowLedPin, yellowLed);

      // what to print:
      // button1, button2, button3, button4

      int button1 = digitalRead(button1Pin);
      delay(5); // IDK
      int button2 = digitalRead(button2Pin);
      delay(5);

      int button3 = digitalRead(button3Pin);
      delay(5);
      int button4 = digitalRead(button4Pin);
      delay(5);
      int potentiometer = analogRead(A0);
      delay(5);

      Serial.print(button1);
      Serial.print(',');
      Serial.print(button2);
      Serial.print(',');
      Serial.print(button3);
      Serial.print(',');
      Serial.print(button4);
      Serial.print(',');
      Serial.println(potentiometer);

    }
  }
  digitalWrite(LED_BUILTIN, LOW);
}