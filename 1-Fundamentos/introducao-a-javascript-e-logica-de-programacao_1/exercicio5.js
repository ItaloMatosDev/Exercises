let anguloA = 50;
let anguloB = 60;
let anguloC = 90;

if(anguloA<=0 || anguloB<=0 || anguloC <=0){
    console.log("Angulo invalido");
}
else{
    if((anguloA + anguloB + anguloC)==180){
        console.log("Triangulo valido");
    }
    else{
        console.log("Triangulo invalido");
    }
}