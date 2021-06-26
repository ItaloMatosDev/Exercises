let pecaXadrez = "xxx";

switch (pecaXadrez.toLowerCase()){
    case "peao":
        console.log("diagonal");
        break;
    case "bispo":
        console.log("diagonal");
        break;
    case "torre":
        console.log("vertical e horizontal");
        break;
    case "cavalo":
        console.log("em L");
        break;
    case "rainha":
        console.log("diagonal, vertical e horizontal");
        break;
    default:
        console.log("Invalido");
}