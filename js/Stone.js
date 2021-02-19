class Stone {
    constructor(){
var options = {
    restitution:0.8,
    friction:1,
    density:1.2
}
this.image = loadImage("images/stone.png");
this.body = Bodies.rectangle(200,340,40,40,options);
this.width = 40;
this.height = 40;
World.add(world,this.body);


    }
    display(){
push(); 
translate(this.body.position.x, this.body.position.y);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();

    }
}