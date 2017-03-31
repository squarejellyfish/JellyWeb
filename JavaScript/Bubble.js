function Bubble(x, y){
  this.x = x;
  this.y = y;
  this.xspeed = random(15, -15);
  this.yspeed = random(15, -15);

  this.show = function(){
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, 15, 15);
  }
  this.update = function(){
    this.x += this.xspeed;
    this.y += this.yspeed;

    if(this.x > width || this.x < 0){
      this.xspeed *= -1;
    }
    if(this.y > height || this.y < 0){
      this.yspeed *= -1;
    }
  }
}
