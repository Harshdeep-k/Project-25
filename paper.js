class paper
{
    constructor()
    {
        //in matter.js the circle object has radius=20
        this.body=Bodies.circle(100,300,25,{
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:2
        });
        World.add(world,this.body);
        this.image=loadImage("paper.png");
    }
    display()
    {
        var pos=this.body.position;
        fill("pink");
        imageMode(CENTER);
        //the circle object has d=40 corresponding to 20 radius
        image(this.image,pos.x,pos.y,70,70);

    }

}