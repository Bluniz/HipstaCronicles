class Jogo{
  constructor(){
    this.inimigoAtual = 0;
    
  }
  
  setup(){
   
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
  
 const inimigo = new Inimigo(matrizInimigo,imagemInimigo,width -52, 30, 52,52,104,104,10, 100);
  
  const inimigoGrande = new Inimigo(matrizInimigoGrande,   imagemInimigoGrande, width*2, 0, 200,200,400,400,15, 100);
  
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width -52, 200, 100, 75, 200, 150,10, 100);
  
  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);
  

    somDoJogo.loop();

  }
  
  keyPressed(key){
       if(key ==='ArrowUp' ) personagem.pula();
  }
  
  draw(){
     for(var i=0; i< cenario.length; i++){
  cenario[i].exibe();
  cenario[i].move();
  }
  
  pontuacao.exibe();
  pontuacao.adicionarPonto();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  const inimigo = inimigos[this.inimigoAtual];
  const inimigoVisivel = inimigo.x < - inimigo.largura;

    inimigo.exibe();
    inimigo.move();
  
  if(inimigoVisivel){
     this.inimigoAtual++;
    if(inimigoAtual > 2){
     this.inimigoAtual = 0;
    }
    
    inimigo.velocidade = parseInt(random(10,30));
     }
    
    if (personagem.estaColidindo(inimigo)){
  somDoJogo.stop();
  somGameOver.play();
  image(gameOverImage, width/2 -200, height/3)
  noLoop();
  }
  
 
  }
}