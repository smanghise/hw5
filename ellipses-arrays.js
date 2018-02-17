var x = [];
var y = [];
var d = 50;
var colors = [];

function setup() {
  createCanvas(400, 400);
	colorMode(HSB)

  for (var i = 0; i < 100; i = i + 1) {
    x[i] = random(0, width);
    y[i] = random(0, height);
    colors[i] = color(random(360), random(255), random(255))	
  }
}

function draw() {
  background(255);
  noStroke();

  for (var i = 0; i < 50; i = i + 1) {
    fill(colors[i]);
    ellipse(x[i], y[i], d);
	}
		
   if (random() < 0.02) {
      d = random(10,300);	
   }
	
   if (random() < 0.01) {
      d = random(10,200)
   }
		
}
