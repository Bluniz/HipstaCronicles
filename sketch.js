let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somDoJogo;



//Função para carregar dados antes da renderização
function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

//Função para criar/configurar o game
function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(40);
  somDoJogo.loop();
}

//Função para desenhar/renderizar o game
function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  
  
}

  
