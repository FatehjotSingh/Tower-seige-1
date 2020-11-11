class Box{
  constructor(x, y, color) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.075
      }
      this.body = Bodies.rectangle(x, y, 40,50, options);
      this.width = 40
      this.height = 50
      this.color = color
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill(this.color)
      strokeWeight(2)
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
     }
}