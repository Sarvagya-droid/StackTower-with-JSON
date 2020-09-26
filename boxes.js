class Box{
    constructor(x, y){
        var options ={
            isSatic:false,
            restitution:0.8,
            friction:1.0,
           // density:1.0
        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        World.add(world, this.body);
    }

    score(){
        //if(this.Visiblity<0 && this.Visiblity>-1000 ){
      //      score++
       // }
    }

    display(){
       // push();
        rectMode(CENTER);
        if(this.body){
            fill("lightgreen");
            rect(this.body.position.x, this.body.position.y, 30, 40);   
        if(this.body.position.y>240){
            //this.Visiblity=0;
            this.body = null;
        }
        }
     //  pop();
    }
}