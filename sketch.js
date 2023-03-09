const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;
var fondoImg;
var arrowSound;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  arrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y, 100, 10);
  fondoImg = loadImage("./assets/fondo.png");
  arrowSound = loadSound("./assets/tiro.mp3");
}

function draw() {
  background(fondoImg);

  Engine.update(engine);

  // Título
  fill("red");
  stroke("black");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 70);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()
  
  // if(keyCode === 32){
  //   arrow.display()
  //   arrow.shoot(playerArcher);
  //  }

  //  if(keyCode === 32){
  //   arrow.shoot(playerArcher.body.angle);
  //  }
   
    if(keyCode === 32 ){
     arrow.display()
     arrow.shoot(playerArcher.body.angle);

}
}