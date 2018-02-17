var x = [];
var y = [];
var r = 0;

function setup() {
  createCanvas(400, 400);
	
	for(var i = 0; i < 100; i = i +1) {
		x[i] = random(200,210)
		y[i] = random(270,290)
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

	for(var i = 0; i < 100; i = i +1) {
  	push();
  	fill(y[i]);
  	translate(x[i], y[i]);
  	rotate(r);
 	  rect(-10, -10, 20, 20);
  	pop();
  
  	y[i] -= 1;
  	
  	r += 0.05
  
 	 if (y[i] < -150) {
  	y[i] = 290;
		 
	 }

  }
}
