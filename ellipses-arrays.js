var x = [];
var y = [];
var d = [];
var colors = [];

function setup() {
  createCanvas(400, 400);
	colorMode(HSB)

  for (var i = 0; i < 100; i = i + 1) {
    x[i] = random(0, width);
    y[i] = random(0, height);
    d[i] = random(10,60);
    colors[i] = color(random(255), random(255), random(255))
		
  }
}

function draw() {
  background(0);
  noStroke();

  for (var i = 0; i < 50; i = i + 1) {
    fill(colors[i]);
    ellipse(x[i], y[i], d[i]);
		
  }
}
