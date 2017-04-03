function Ball(x, y, r) {
    this.x = x;
    this.y = y;
    this.c = Bodies.circle(this.x, this.y, r, {
        friction: 0
    });
    World.add(engine.world, this.c);

    this.isOffScreen = function() {
        var pos = this.c.position;
        return (pos.y > height + 100);
    }

    this.show = function() {
        var pos = this.c.position;
        var angle = this.c.angle;

        push();
        fill(255);
        translate(pos.x, pos.y)
        rotate(angle);
        ellipse(0, 0, r * 2);
        pop();
    }
}
