var canvas;
var database;
var ContagemDJ = 0;
var estadoJogo;
var form, player, game;
var playerCount;
var bg;
function preload() {
  bg = loadImage("assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.pegar();
  game.startar();

}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function draw() {
  background(bg);
}

