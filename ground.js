class Ground
{
    constructor()
    {
        this.body=Bodies.rectangle(683,630,10000,30,{isStatic:true});
        World.add(world,this.body);
    }
    display()
    {
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,10000,30)
    }
}