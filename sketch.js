let imagemCenario;
let imagemCenario2;
let imagemPersonagem;
let imagemInimigo;
let gameOverImage;
let cenario;
let cenario2;
let cenario3;
let personagem;
let inimigo;
let somDoJogo;
let somDoPulo;
let somGameOver;

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]


//Função para carregar dados antes da renderização
function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemCenario2 = loadImage('imagens/assets/charizard.gif');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  gameOverImage = loadImage('imagens/assets/game-over.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somGameOver = loadSound('sons/gameOver.mp3');
}

//Função para criar/configurar o game
function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  cenario2 = new Cenario(imagemCenario2, 2);
  cenario3 = new Cenario(imagemCenario2, 4);

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110,135,220,270);
  inimigo = new Inimigo(matrizInimigo,imagemInimigo,width -52,52,52,104,104);
  frameRate(40);
  somDoJogo.loop();
}

//Função que captura eventos do mouse/teclado
function keyPressed(){
  
 if(key ==='ArrowUp' ) personagem.pula();

}

//Função para desenhar/renderizar o game
function draw() {
  cenario.exibe();
  cenario.move();
  cenario2.exibe2();
  cenario2.move();
  cenario3.exibe2();
  cenario3.move();
  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();
  
  if (personagem.estaColidindo(inimigo)){
  somGameOver.play();
  image(gameOverImage, 0, 200, width, 50)
  noLoop();

  }
  
}

  
