let imagemCenario = [];
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let gameOverImage;

let cenario = [];
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;

let pontuacao; 

let somDoJogo;
let somDoPulo;
let somGameOver;

let countSpeed = 3;

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
const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
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
];

const inimigos = [];


//Função para carregar dados antes da renderização
function preload(){
  imagemCenario[0] = loadImage('imagens/cenario/FlorestParalax/Sky.png');
  imagemCenario[1] = loadImage('imagens/cenario/FlorestParalax/BG_Decor.png');
  imagemCenario[2] = loadImage('imagens/cenario/FlorestParalax/Middle_Decor.png');
  imagemCenario[3] = loadImage('imagens/cenario/FlorestParalax/Foreground.png');
  imagemCenario[4] = loadImage('imagens/cenario/FlorestParalax/Ground.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  gameOverImage = loadImage('imagens/assets/game-over.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somGameOver = loadSound('sons/gameOver.mp3');
}
//Função para criar/configurar o game
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(var i = 0; i < imagemCenario.length; i++){
    if(i >0 && i <3) {
             cenario[1] = new Cenario(imagemCenario[1], countSpeed -1);
      cenario[2] = new Cenario(imagemCenario[2], countSpeed -1.5);
      
    }else{
        cenario[i] = new Cenario(imagemCenario[i], countSpeed);
    }
    
  }
  
  pontuacao = new Pontuacao();
  
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0,30, 110,135,220,270);
  
 const inimigo = new Inimigo(matrizInimigo,imagemInimigo,width -52, 30, 52,52,104,104,10, 200);
  
  const inimigoGrande = new Inimigo(matrizInimigoGrande,   imagemInimigoGrande, width*2, 0, 200,200,400,400,10, 2000);
  
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width -52, 200, 100, 75, 200, 150,10, 2500);
  
  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);
  
  frameRate(40);
  //somDoJogo.loop();
}

//Função que captura eventos do mouse/teclado
function keyPressed(){
  
 if(key ==='ArrowUp' ) personagem.pula();

}

//Função para desenhar/renderizar o game
function draw() {
  
  for(var i=0; i< cenario.length; i++){
  cenario[i].exibe();
  cenario[i].move();
  }
  
  pontuacao.exibe();
  pontuacao.adicionarPonto();
  
  personagem.exibe();
  personagem.aplicaGravidade();

  
<<<<<<< HEAD
  
  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
    
    if (personagem.estaColidindo(inimigo)){
  somDoJogo.stop();
  //somGameOver.play();
  image(gameOverImage, width/2 -200, height/3);
=======
  if (personagem.estaColidindo(inimigo)){
  somDoJogo.stop();
  somGameOver.play();
  image(gameOverImage, 150, 200, 400, 50)
>>>>>>> be833d5b50a1e0fca60e60a07eb092437381a40a
  noLoop();
  }
  }});
  
  
}

  
