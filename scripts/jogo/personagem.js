class Personagem {
  constructor(imagem){
  this.imagem = imagem;
  this.matriz = []

     let matrizValorEixoX = 0;
     let matrizValorEixoY = 0;
     let counter = 0;

     for(var i = 0; i < 16; i++){
     
     /*Os valores do eixo Y se repetem até 4 vezes,
     portanto sempre que o contador resetar é incrementado +270 que        em um loop de 16x a cada 4 posições do vetor o valor será            incrementado!Ex: 0-3:0, 4-7:270, 8-11:540, 12-15:810 */ 
     if(counter == 4){
     counter = 0;
     matrizValorEixoY += 270;
     } 

     counter ++;
     //Prevenir que os valores não passem do limite definido.
     if(i>0) matrizValorEixoX += 220;
     if(matrizValorEixoX > 660) matrizValorEixoX = 0;

     this.matriz[i] = [matrizValorEixoX, matrizValorEixoY];
      
    }
  
    this.frameAtual = 0;
  }
  
  exibe(){
    let matrixEixoX = 0;
    let matrixEixoY = 1;
    let personagemPosicao = height -135;
    let personagemLargura = 150;
    let personagemAltura = 140;
    
  image(
    this.imagem,
    0,
    personagemPosicao,
    personagemLargura,
    personagemAltura,
    this.matriz[this.frameAtual][matrixEixoX],
    this.matriz[this.frameAtual][matrixEixoY],
    220,270
       );
  
    this.anima();
  }
  
  
  
  anima(){
  this.frameAtual++;
    
    if(this.frameAtual >= this.matriz.length -1){
       this.frameAtual = 0;       
       }
  }
  
  
  
}