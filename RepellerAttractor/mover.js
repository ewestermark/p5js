function Mover() {
 this.force = createVector(random(.03), random(.03));
	this.rad  = 40;
	this.acc = createVector(random(.3), random(.3));
	this.vel = createVector(random(-3, 3), random(-3, 3));
	this.loc = createVector(random(width), random(height));
	this.clr = 150;
}

Mover.prototype.run = function() {
	this.update(this.force);// default = (0,0)
	this.checkEdges();
	this.render();
}

Mover.prototype.applyForce = function (f) {
		this.acc.add(f);
}

Mover.prototype.render = function() {
	push();
	  strokeWeight(random(2,7));
    fill(0);
		stroke(255, 255, 255);
		ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
	pop();
}

Mover.prototype.update = function(force) {
	//setTimeout(changeMoverAcc, 500);
	this.force = force;
	this.applyForce(force);
	this.vel.add(this.acc);
	this.vel.limit(1);
	this.loc.add(this.vel);
}

Mover.prototype.checkEdges = function() {
	if (this.loc.x > width) this.loc.x = 0;
	if (this.loc.x < 0) this.loc.x = width;
	if (this.loc.y > height) this.loc.y = 0;
	if (this.loc.y < 0) this.loc.y = height;

}
