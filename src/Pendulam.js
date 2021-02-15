class Pendulam{
    constructor(x,y,colour){
        var options={
            setStatic : true,
            restitution : 1,
            friction : 0,
            frictionAir : 0.0,
            slop : 1,
            inertia : Infinity
        }
        this.body = Matter.Bodies.circle(x,y,50,options);
        this.colour = colour;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.colour);
        ellipse(0,0,100,100);
        pop();
    }
}