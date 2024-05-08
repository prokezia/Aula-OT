let palavra;
function palavraAleatoria(){
  let palavras = ["Micróscopio", "Ciência", "Ictio","Átomo", "DNA", "Zoologia", "Evolução"];
  return random(palavras); 
}
function setup() {
  createCanvas(600,600);
  palavra = palavraAleatoria();
}
function inicializaCores(){
  background ("#673AB7");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}
function draw(){
  inicializaCores();
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 0, palavra.length);
  if(quantidade < 1){
    palavra = palavraAleatoria();
  }
  let parcial = palavra.substring(0,quantidade);
  text(parcial,300,200);
}