class Boy{
    constructor(){
        var options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(300,550,50,100,options);
        
        World.add(world, this.body);
    }
    display(){
        rect(this.body.position.x,this.body.position.y,50,100)
    }

}