const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, slingShot;
var engine, world;
var block1,;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    //ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    block1 = new block(300,235,30,40);
    block2 = new block(330,235,30,40);
    block3 = new block(360,235,30,40);
    block4 = new block(390,235,30,40);
    block5 = new block(420,235,30,40);
    block6 = new block(450,235,30,40);
    block7 = new block(480,235,30,40);
    
    block8 = new block(330,235,30,40);
    block9 = new block(360,235,30,40);
    //console.block(); = new block(810,260,300, PI/2);
    block10 = new block(390,235,30,40);
    block11 = new block(420,235,30,40);
    block12 =  new block(450,235,300,40);

    block13 = new block(360,235,30,40);
    block14 = new block(390,235,30,40);
    block15 = new block(420,235,30,40);
    
    block16 = new block(390,235,40,30);
    //bird = new Bird(200,50);

    //block6 = new block(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    //background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    block1.display();
    block2.display();
    ground.display();
    block3.display();
    block4.display();

    block5.display();
    block6.display();
    block7.display();
    block8.display();

    block9.display();
    block10.display();
    block11.display();

    block12.display();
    block13.display();
    block14.display();

    block15.display();
    block16.display();

    polygon.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
if(keyCode===32){
    slingShot.attach(polygon.body);
}
}
