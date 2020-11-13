class Rope{
    constructor(bodyA,bodyB,xOffset,yOffset){
        
        var x1 ={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{
                x:xOffset,
                y:yOffset
            }
            
        }
       
        this.rope=Constraint.create(x1);
        this.xOffset=xOffset;
        this.yOffset=yOffset;
        World.add(world,this.rope);
    }

    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(3);
        stroke("white");
        line(pointA.x,pointA.y,pointB.x+this.xOffset,pointB.y+this.yOffset);
      
    }
};