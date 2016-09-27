function Boid() {
	this.force = createVector(0,0);
	this.acc = createVector(random(.1, .9), random(-.9, .1));
	this.vel = createVector(random(-3, 3), random(-3, 3));
	this.loc = createVector(random(width), random(height));
  this.color = (random(30,40), random(30,40), random(150,200));


	this.render = function() {
    var circle = random(5,12);
		push();
		  noStroke();
  		fill(this.color);
  		ellipse(this.loc.x, this.loc.y, 20, 20)
		pop();
		push();
  		fill(random(200),20,20);
  		//noStroke();
  		ellipse(this.loc.x, this.loc.y, circle, circle);

  	pop();

	}

	this.update = function(force) {
		this.force = force; // Incase we want to send f
		this.fear = random(100, 200);
		//calc force vector
		this.force = p5.Vector.sub(this.loc,mover.loc);
		this.force.normalize();
		this.force.mult(.2);
		// If in range of Mover--run for your life!
		if(this.loc.dist(mover.loc) < 60){
			this.applyForce(this.force);
			this.vel.add(this.force);
			this.vel.limit(random(6,8));
		} else if(this.loc.dist(mover.loc) < 90){
			this.applyForce(this.force);
			this.vel.add(this.force);
			this.vel.limit(random(6,8));
		}else{
			//this.vel.add(this.force);
			this.vel.limit(8);
		}
		this.loc.add(this.vel);
		this.acc.mult(0);
	}
	//bounce off walls
	this.checkEdges = function() {
		if (this.loc.x > width || this.loc.x < 0) this.vel.x *= -1;
		if (this.loc.y > height || this.loc.y < 0) this.vel.y *= -1;
	}
}
