// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    engine;

var ground;
var box1;
var boxy = [];
var slides = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    slides.push(new Slide(width / 2, height * 0.8, width, 10, 0.4));
    slides.push(new Slide(width * 0.8, height * 0.4, width * 0.6, 10, -0.2));
    Engine.run(engine);
}

function mouseDragged() {
    box1 = new Ball(mouseX, mouseY, 15);
    boxy.push(box1);
}

function mousePressed() {
    box1 = new Ball(mouseX, mouseY, 15);
    boxy.push(box1);
}

function draw() {
    background(51);
    for (i = 0; i < boxy.length; i++) {
        boxy[i].show();
        if (boxy[i].isOffScreen()) {
            boxy.splice(i, 1);
            i--;
        }
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].show();
    }
}
