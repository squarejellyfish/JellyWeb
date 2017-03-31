var b;
var bubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  b = new Bubble(mouseX, mouseY);
  bubble.push(b);
}

function draw() {
  background(51);
  for(var i = 0; i < bubble.length; i++){
    bubble[i].show();
    bubble[i].update();
  }
}
