class Personagem extends Animacao{
  constructor(matriz, imagem, x, largura, altura,                 larguraSprite, alturaSprite){
     super(matriz, imagem, x, largura, altura,                 larguraSprite, alturaSprite);
    
    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    
    this.counterPulo = 0;
  }
  
  
  pula(){
    
      this.counterPulo++;
      if(this.counterPulo <= 2){
        this.velocidadeDoPulo =  - 33;
        somDoPulo.play();

      }
    
    }
  
  aplicaGravidade(){
   this.y = this.y + this.velocidadeDoPulo
   this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial) {
      this.y = this.yInicial;
      this.counterPulo = 0;
    }
  }
  
  estaColidindo(inimigo){
     const precisao = .69;
     const colisao = collideRectRect(
     this.x,
     this.y,
     this.largura * precisao,
     this.altura * precisao,
     inimigo.x,
     inimigo.y,
     inimigo.largura * precisao,
     inimigo.altura * precisao
     );
    
    return colisao;
  }
  
}