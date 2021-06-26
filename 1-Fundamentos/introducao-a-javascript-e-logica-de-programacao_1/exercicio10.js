let custoProduto = 100;
let custoVenda = 125;
let lucro = (custoVenda - custoProduto*1.2)*1000;

if (custoProduto<0 || custoVenda<0){
    console.log("Erro");
}

else{
    console.log(`Lucro: ${lucro}`);
}