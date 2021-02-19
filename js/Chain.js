class Chain{
    constructor(bodyA,pointB){
var options = {
    stiffness:0.04,
    length:10,
bodyA:bodyA,
pointB:pointB
}
this.pointB = pointB;

this.rope = Constraint.create(options);
World.add(world,this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
        if(this.rope.bodyA){
     var pointA = this.rope.bodyA.position;
     var pointB = this.pointB;
push();
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();
        }
    }
}