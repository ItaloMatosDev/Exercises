let salarioBruto = 3000;
let descontoINSS;
let descontoIR;


if(salarioBruto<=1556.94){
    descontoINSS = 0.08*salarioBruto;
}
else if(salarioBruto>=1556.95 && salarioBruto<=2594.92){
    descontoINSS = 0.08*salarioBruto;
}
else if(salarioBruto>=2594.92 && salarioBruto<=5189.82){
    descontoINSS = 0.11*salarioBruto;
}
else{
    descontoINSS = 570.88;
}

let salarioBase = salarioBruto-descontoINSS;

//calculo do desconto do inss
if(salarioBase<=1903.98){
    descontoIR=0;
}
else if(salarioBase>=1903.99 && salarioBase<=2826.65){
    descontoIR=0.075*(salarioBase) - 142.80;
}

else if(salarioBase>=2826.66 && salarioBase<=3751.05){
    descontoIR = 0.15*salarioBase - 354.80;
}

else if(salarioBase>=3751.06 && salarioBase<=4664.68){
    descontoIR = 0.225*salarioBase - 663.13;
}
else{
    descontoIR = 0.275*salarioBase - 869.36;
}

let salarioLiquido = salarioBase-descontoIR;

console.log(`Salario Liquido: ${salarioLiquido}`);