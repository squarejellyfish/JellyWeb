var font;
var vehicles = [];

function preload() {
    font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // textFont(font);
    // textSize(250);
    // fill(255);
    // noStroke();
    // text('Fuck', 750, height / 2);

    var points = font.textToPoints('Fuck', 750, height / 2, 250);

    for (var i = 0; i < points.length; i++) {
        var p = points[i];
        var vehicle = new Vehicle(p.x, p.y);
    }
}

function draw() {
    background(51);
    for(var i = 0; i < vehicles.length; i++){
        var v = vehicles[i];
        v.update();
        v.show();
    }
}
