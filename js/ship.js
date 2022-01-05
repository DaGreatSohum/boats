class Boat{

constructor(x,y,w,h, boatPos){
  //spritename = createSprite(x,y,w,h)    
 //this.body = Bodies.rectangle(x,y,w,h)

var sohum ={
   isStatic : true
}

this.body= Bodies.rectangle(x,y,w,h, sohum)
this.boatImg=loadImage("assets/boat.png")

World.add(world,this.body)
this.w = w;
this.h = h;
this.boatPos = boatPos;

 }


display(){
 image(this.boatImg,this.body.position.x,this.body.position.y,this.w,this.h)
    
}












}