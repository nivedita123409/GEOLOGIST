class Iron {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':30
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 100;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("silver");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  