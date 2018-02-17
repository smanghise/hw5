var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	
  for (var i = 0; i < 100; i = i + 1) {
    x[i] = width/2;
    y[i] = height/2;
    xSpeed[i] = random(-2,2)
    ySpeed[i] = random(1,3)
  }
}

function draw() {
  background(0);
  noStroke();
	
  // draw pipe
  rect(0, 200, 230, 20);

  for (var i = 0; i < 100; i = i + 1) {
    ellipse(x[i],y[i], 10);
    x[i] = x[i] + xSpeed[i];
    y[i] = y[i] + ySpeed[i];
