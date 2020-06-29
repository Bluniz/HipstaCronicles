class Inimigo extends Animacao {
   constructor(matriz, imagem, x, variacaoY, largura, altura,                 larguraSprite, alturaSprite, velocidade, delay){
     super(matriz, imagem, x,variacaoY, largura, altura,                 larguraSprite, alturaSprite, velocidade);
     
    this.velocidade = velocidade;
    this.x = width;
   }
  
  move(){
  this.x = this.x - this.velocidade;
    
    if(this.x < -this.largura) this.x = width;
  }
  
  aparece(){
  this.x = width;
  }
}