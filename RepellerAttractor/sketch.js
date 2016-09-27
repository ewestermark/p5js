var mover;
var boids = [];
var numBoids = 30;



function setup() {
	var cnv = createCanvas(900, 800);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
	fill(0, 200, 200);
	mover = new Mover();

	//attractor = new Mover(false);
	Boid.prototype = new Mover();
	//Boid.prototype.constructor = Boid;
	b1 = new Boid(); // this must come after inherittance to receive
	loadBoids();
}

function draw() {
	//background(62);
	push()
		fill(120, 120, 240, 40);
		rect(0, 0, width, height);
	pop();
	mover.run();
	//attractor.run();
	for (var i = 0; i < boids.length; i++) {
		boids[i].run();
	}

}

function changeReppelrForce() {
  mover.force = createVector(random(-1, 1), random(-1, 1));
}
setInterval(changeReppelrForce, 1000);


function loadBoids() {
	for (var i = 0; i < numBoids; i++) {
		boids.push(new Boid());
	}
}





// Boid.prototype.render = function() {
// 	fill(200, 30, 150);
// 	ellipse(this.loc.x, this.loc.y, 30, 30);
// }
