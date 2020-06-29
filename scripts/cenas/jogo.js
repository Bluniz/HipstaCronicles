class Jogo{
  constructor(){
    this.indice = 0;
    this.mapa = fita.mapa;
    
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
  vida =  new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0,30, 110,135,220,270);
  
 const inimigo = new Inimigo(matrizInimigo,imagemInimigo,width -52, 30, 52,52,104,104,10);
  
  const inimigoGrande = new Inimigo(matrizInimigoGrande,   imagemInimigoGrande, width*2, 0, 200,200,400,400,15);
  
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width -52, 200, 100, 75, 200, 150,10);
  
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
  
  vida.draw();
  pontuacao.exibe();
  pontuacao.adicionarPonto();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  const linhaAtual = this.mapa[this.indice];
    
  const inimigo = inimigos[linhaAtual.inimigo];
  const inimigoVisivel = inimigo.x < - inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();
  
  if(inimigoVisivel){
     this.indice++;
    inimigo.aparece();
    if(this.indice > this.mapa.lengh -1){
     this.indice = 0;
    }    
     }
    
    if (personagem.estaColidindo(inimigo)){
  vida.perdeVida();
  personagem.ficaInvencivel();
      
  if(vida.vidas === 0){
    somDoJogo.stop();
    somGameOver.play();
    image(gameOverImage, width/2 -200, height/3);
    noLoop();
      }
  }
  
 
  }
}