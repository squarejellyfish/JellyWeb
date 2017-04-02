var font;

function preload() {
    font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    textFont(font);
    textSize(192);
    fill(255);
    noStroke();
    text('Fuck', 10, 200);
}

function draw() {

}
