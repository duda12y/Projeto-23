//motor
const Engine = Matter.Engine;
//Mundo
const World = Matter.World;
//Corpos
const Bodies = Matter.Bodies;
//Corpo
const Body = Matter.Body;

//variaveis
var engine;
var world;

var solo, parado;

var bola;

var bola2;

var bola3;

function setup() {
  createCanvas(600, 400);

  //ETAPA 1: Configurar o motor de física
  //criar o motor
  motor = Engine.create();
  mundo = motor.world;

  prop1 = {
    frictionAir: 0.9,
  };

  prop2 = {
    frictionAir: 0.001,
  };

  soloprop = {
    isStatic: true,
  };

  solo = Bodies.rectangle(300, 390, 600, 20, soloprop);
  World.add(mundo, solo);
  //CRIAR CORPOS
  //1º passo: definir as props do corpo

  //2º passo: criar o corpo

  bola3 = Bodies.circle(200, 100, 40);
  //3º passo: adicionar no mundo
  bola2 = Bodies.circle(100, 100, 50, prop2);
  //props da bola

  //cria o corpo da bola
  bola = Bodies.circle(300, 100, 30, prop1);

  //adiciona ela no mundo
  World.add(mundo, bola);
  World.add(mundo, bola2);
  World.add(mundo, bola3);
  //define o tamanho da ellipse pelo raio
  ellipseMode(RADIUS);
  //posiciona o retângulo a partir do centro
  rectMode(CENTER);
}

function draw() {
  background('#dfb5f0');

  //atualizar o motor
  Engine.update(motor);
  fill('lime');
  //colore o solo de marrom
  fill(0);
  rect(solo.position.x, solo.position.y, 600, 20);

  //desenha um retângulo na posição do solo
  ellipse(bola3.position.x, bola3.position.y, 40);
  fill('magenta');
  //define a cor do desenho
  ellipse(bola2.position.x, bola2.position.y, 50);
  fill('red');
  //desenha uma ellipse na posição da bola
  ellipse(bola.position.x, bola.position.y, 30);
}
