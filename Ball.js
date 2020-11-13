class Bob{
    constructor(x,y,r){
        var b1 ={
            restitution:1.3,
            friction:0.3,
            density:0.8
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,(this.r)/2,b1);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill(255,0,255);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
    
};