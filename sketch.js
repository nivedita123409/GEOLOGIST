const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,
stone,stone1,
iron,
ball,
smallball,smallball1,smallball2,smallball3,
smallball4,smallball5,smallball6,smallball7,
smallball8;


function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1400,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(700,120,130);
    stone = new Stone(500,300,130,120);
    stone1 = new Stone1(850,200,90,90);
    iron = new Iron(300,200,20,150);
    ball = new Ball(1000,120,60);
    smallball = new SmallBall(622,478,15);
    smallball1 = new SmallBall1(1150,588,15);
    smallball2 = new SmallBall2(254,525,15);
    smallball3 = new SmallBall3(1200,548,15);
    smallball4 = new SmallBall4(582,478,15);
    smallball5 = new SmallBall5(435,123,15);
    smallball6 = new SmallBall6(135,478,15);
    smallball7 = new SmallBall7(960,478,15);
    smallball8 = new SmallBall8(1100,478,15);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    stone1.display();
    iron.display();
    ball.display();
    smallball.display();
    smallball1.display();
    smallball2.display();
    smallball3.display();
    smallball4.display();
    smallball5.display();
    smallball6.display();
    smallball7.display();
    smallball8.display();
    
    
 
}