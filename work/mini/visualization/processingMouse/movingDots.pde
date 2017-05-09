//move/draw dots sketch
//https://processing.org/tutorials/pvector/ - reference
//declare global variables
int num = int(random(100,2000)); // quantity of dots
Dot[] dots = new Dot[num]; // array of dots
//PVector - geometrical vector
PVector velocity; // declare vector for velocity
PVector location;// declare vector for position of dot
PVector acceleration;// declare vector for acceleration
PVector target;// declare variable for mouse tracking
PVector dir;// declare vector for direction
float  c;// variable to change range 
float topspeed;// to limit velocity
int transparency;// variable to set transparency of dots

void setup(){//default settings
  colorMode(RGB); // set colors to RGB
  size(1500, 600);// set up window size
  smooth();// anti-aliasing
  background(30);// set background color
  transparency = 50;
  topspeed = 6;// set beginning speed
  c = 0.1;// set default for c variable
  for (int i = 0; i < dots.length; i++) {// to loop through each dot in array
    dots[i] = new Dot(); // create new dot for each place in array
  }//close for loop
}// close setup function

void draw(){// settings for each new moment while program running
// // uncomment for change from 'drawing mode'
if (key == '1'){

  transparency = 50;//set new transparency
  for (int i = 0; i < dots.length; i++) {// for each dot in array 
    dots[i].update(); // call update method that relates to Dot class
    dots[i].display();// call display method that relates to Dot class
  }// close for loop
}  
if (key == '2'){

  background(30);
  transparency = 250;//set new transparency
  for (int i = 0; i < dots.length; i++) {// for each dot in array 
    dots[i].update(); // call update method that relates to Dot class
    dots[i].display();// call display method that relates to Dot class
  }// close for loop
}   
  //println("dots:" +num +", direct:" + c + ", topspeed:" +topspeed); // display info (to debug)   
}// close draw method  
  
void keyPressed(){// action when key pressed
      //if any other key pressed motion will be stopped  
}// close keypressed function
  
void mousePressed(){ // actions if mousepressed
  background(30);// renew background on mouse click
  num += int(random(-1010,1000));// renew quantity of dots
  c = random(0.0001,0.2);// renew 'radius'
  topspeed = int(random(1,10));// change limitations of velocity
}// close mousepressed function

class Dot{// create object
//declare variables within class
  PVector velocity; // declare vector for dot's velocity
  PVector location;// declare vector for dot's position
  PVector acceleration;// declare vector for dot's acceleration
  float topspeed;// declare limitation of dot's velocity
  
  Dot(){// constructor (to segt defaults for object
    location = new PVector(random(width), random(height));// default position of dot random)
    velocity = new PVector(random(10), random(10));// default velocity of dot (random)
    topspeed = 7;// default velocity limitation
  }// close constructor
  
  void update() {// dot's method to set behavior
    target = new PVector(mouseX, mouseY);// to track mouse movement
    dir = PVector.sub(target, location); // to calculate direction of movement
    dir.normalize();// normalize this vector to a length of 1
    dir.mult(c);//  multiply a this vector by a scalar (will change 'radius' randomly)
    acceleration = dir;// make acceleration settings equal to dir settings   
    velocity.add(acceleration);// velocity changes by acceleration
    velocity.limit(topspeed);// set limitations to velocity
    location.add(velocity);// location changes by velocity.    
  }// close update method
  
  void display(){// dot's method to display graphic output
    strokeWeight(1);
    stroke(map(location.y, 20, height, 50, 255),  map(location.x, 20, width, 30, 255), map(location.y, 20, width, 30, 255),transparency);// to define color of dot's stroke depending on location of each dot
    fill(map(location.y, 20, height, 50, 255), map(location.x, 20, width, 30, 255), map(location.y, 20, width, 30, 255), transparency);  // to define color of dot's fill depending on location of each dot
    ellipse(location.x, location.y,0.3,0.3); // to draw 'Dot'
  }// to close display method
}// to close class 'Dot'