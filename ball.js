class Ball {
    constructor(x, y) {
      var options =
       {

           isStatic:false,
        'density':1.2,
        'friction': 0,
        'restitution':0.3

      };

      this.body = Bodies.circle(x, y,10,  options);
      this.x = x;
      this.y = y;
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
    //  var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
     
      imageMode(CENTER)
      image(this.image,0, 0, 100,100);
      pop();
    };
  };
  