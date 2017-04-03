function Slide(x, y, w, h, a) {
    this.body = Bodies.rectangle(x, y, w, h, {
        friction: 0,
        isStatic: true,
        angle: a
    });
    World.add(engine.world, this.body);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rectMode(CENTER);
        fill(255);
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, w, h);
        pop();
    }
}