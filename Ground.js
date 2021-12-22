class Ground{

  

    constructor(x,y,w,h){
        var ground_options{
            isStatic: true
        };

        this.w=w;
        this.h=h;   
        this.body=Bodies.rectangle(x,y,this.w,this.h, ground_options);
        World.add(world,this.body);
    }

    draw(){

    }
}