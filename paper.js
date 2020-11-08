class Paper
{
    constructor(x,y)
    {
        var options =
        {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(100,100,20,options);
        this.image = loadImage("paper.png")
        World.add(world,this.body)
    }
    display()
    {
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,80,80);
        pop();
    }
}