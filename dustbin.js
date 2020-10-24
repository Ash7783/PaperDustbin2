class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.height=height;
        this.width=width;
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body);
        }

        display(){
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            rectMode(CENTER);
            fill(255,0,0);
            rect(0,0,this.width,this.height);
            pop();
        }
        addImage(){
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y-40,this.width+15,this.height+100)
        }
}