
//Função para criar/configurar o game
function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  frameRate(40);
  cenas = {
   jogo,
   telaInicial
  };
  
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

//Função que captura eventos do mouse/teclado
function keyPressed(){
  jogo.keyPressed(key);
}

//Função para desenhar/renderizar o game
function draw() {
   cenas[cenaAtual].draw()
}

  
