let num 

const nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

switch(nacionalidade){
    case "brasileira":
         num = "A pessoa é do Brasil"
    break
    case "chilena":
        num = "A pessoa é do Chile"
    break
    case "argentina":
       num = "A pessoa é da Argentina"
    break
    case "uruguaia":
       num = "A pessoa é do Uruguai"
    break
    case "colombiana":
       num = "A pessoa é da Colombia"

}
console.log(num)
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }