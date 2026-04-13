let prova1 =6 
let prova2 = 7 
let prova3 = 8 
let prova4 = 5

let media=(prova1+prova2+prova3+prova4)/4;

if(media >= 7){
  console.log("aprvado com a media:",media)
}else if(media >=5 && media<=6.9){
  console.log("recuperação com media:",media)
}else{
  console.log('reprovado com a media:',media)
}
