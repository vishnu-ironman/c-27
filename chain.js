class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
           pointB:{x:this.offsetX,y:this.offsetY},
           }
            this.Chain = Matter.Constraint.create(options);
           World.add(world,this.Chain);
    }


    display(){
   
    var point1 = this.Chain.bodyA.position;
    var point2 = this.Chain.bodyB.position;
    
    strokeWeight(4);

    var Anchor1x = point1.x;
    var Anchor1y = point1.y;

    

     var Anchor2x = point2.x + this.offsetX;
     var Anchor2y = point2.y + this.offsetY;



    line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);
    }
}