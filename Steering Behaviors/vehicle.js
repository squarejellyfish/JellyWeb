function Vehicle(x, y) {
    this.pos = createVector(x, y);
    this.target = createVector(random(width), random(height));
    this.vel = createVector();
    this.scc = createVector();
    this.r = 8;
}

Vehicle.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
}

Vehicle.prototype.show = function() {
    stroke(255);
    strokeWeight(8);
    point(this.pos.x, this.pos.y);
}
