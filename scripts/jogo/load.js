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
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somGameOver = loadSound('sons/gameOver.mp3');
}
