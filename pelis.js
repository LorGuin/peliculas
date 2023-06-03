//creamos fs para importar los archivos de pelis.json
const fs = require("fs");
// creanis readfile para que interactue con fs y imprima pelis.json

//fs.readFileSync(__dirname +"/pelis.json") no arranca el programa de esta forma
const peliculas = fs.readFileSync("pelis.json");

//transformamos en json
//devuelve un objeto javascript a la cadena de textos.
function getAll() {
    return JSON.parse(peliculas);
}
//odenamos el array 
/* El método sort() ordena los elementos de un arreglo (array) 
localmente y devuelve el arreglo ordenado*/
function ordenarElarray(texto, peliculas) {
    return peliculas.sort(function (a, b) {
      return a[texto] > b[texto];
    });
  }

//buscador
//la funcion toma peliculas como arreglo y un string llamado texto
//que representa los terminos de busqueda
//la funcion devuelve un nuevo arreglo que contiene solo los objetos de peliculas

  function Buscador(texto, peliculas) {
    return peliculas.filter(function (peli) {
      var tituloMinuscula = peli.title.toLowerCase();
      return tituloMinuscula.includes(texto.toLowerCase());
    });
  }

//filtrar por tag
//La función devuelve un nuevo arreglo que contiene solo los objetos de peliculas
// cuyo arreglo de tags incluye el tag buscado.

function filtrarTag(texto, peliculas) {
  return peliculas.filter(function (peli) {
    return peli.tags.includes(texto);
  });
}


//si la variable texto contiene un objeto JavaScript válido, la función noFormato() 
//devolverá una cadena de texto JSON correspondiente a ese objeto.
//JSON.stringify convierte un objeto JavaScript en una cadena de texto JSON
  function noFormato(texto, peliculas) {
    return JSON.stringify(texto);
  }




const peli = JSON.parse(peliculas);
//console.log(peli);

//procesa el input y retorna un output filtrado/
exports.busqueda = function (criterio) {
    let peliculas = getAll();
    if (criterio.sort) {
      peliculas = ordenarElarray(criterio.sort, peliculas);
    }
    if (criterio.search) {
        peliculas = Buscador(criterio.search, peliculas);
    }
    if (criterio.tag) {
        peliculas = filtrarTag(criterio.tag, peliculas);
    }
    if (criterio.hasOwnProperty("no-format")) {
        peliculas = noFormato(peliculas);
    }
    return peliculas;
  };

  
