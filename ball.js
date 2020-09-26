class Ball{
    constructor(x, y){
        var options ={
            isStatic:false,
        }
        this.body = Bodies.circle(x, y, 15, options);
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(this.body.position.x, this.body.position.y, 30);
    }
}