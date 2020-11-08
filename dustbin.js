class Dustbin
{
    
    constructor()
    {
        this.bin1=Bodies.rectangle(1150,600,190,20,{isStatic:true})
        this.bin2=Bodies.rectangle(1064,510,20,170,{isStatic:true})
        this.bin3=Bodies.rectangle(1236,510,20,170,{isStatic:true})
        World.add(world,this.bin1)
        World.add(world,this.bin2)
        World.add(world,this.bin3)
    }
        
    display()
    {
        rectMode(CENTER);
        noStroke();
        fill("yellow");
        rect(this.bin1.position.x,this.bin1.position.y,190,20)
        rect(this.bin2.position.x,this.bin2.position.y,20,170)
        rect(this.bin3.position.x,this.bin3.position.y,20,170)
    }
}