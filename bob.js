class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8,
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
    
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}