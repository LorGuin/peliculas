//usamos requiere para interactuar con la carpeta pelis.js
const peli = require("./pelis.js");



function parsearArgumentos(argumentos) {
    let filtro = {};
    argumentos.forEach((item, indice) => {
      if (item.startsWith("--")) {
        const itemSinGuion = item.slice(2);
        filtro[itemSinGuion] = argumentos[indice + 1];
      }
    });
    return filtro;
}

    function main() {
        let argumentos = process.argv.slice(2);
        let argumentoParseado = parsearArgumentos(argumentos);
        let resultadoFinal = peli.busqueda(argumentoParseado);
        console.table(resultadoFinal);
      }
      
      main();
