class Paper{

    constuctor(x,y,radius){

        var options={

            isStatic:false,
           'restitution':0.8,
           'friction':0.5,
            'densiy':1.2
        }

        this.x = x;
        this.y = y;
        this.r = radius;
        this.body=Bodies.circle(x,y,r,r/2,options)
        World.add(world,this.body)

    }

    display(){
     
        

        push();
        ellipseMode(RADIUS)
        strokeWeight(3);
        fill(255,0,255);
        ellipse(200,600,30);
        pop();
    }
}