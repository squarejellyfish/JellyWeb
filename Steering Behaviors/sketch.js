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
    var textStart = width * 0.39;
    var tsize = width * 0.13;
    console.log(tsize);

    var points = font.textToPoints('Shawn', textStart, height / 2, tsize);

    for (var i = 0; i < points.length; i++) {
        var p = points[i];
        var vehicle = new Vehicle(p.x, p.y);
        vehicles.push(vehicle);
    }
}

function draw() {
    background(51);
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}
