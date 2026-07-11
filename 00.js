let texto = "a bb cc ddd eee ffff";

let totalCarac = contarCaracteres(texto);

var vocales = [];
vocalesTolal = vocalesTolal(texto);

let caracRepetidos = conCaracteresRepetidos(texto);

// MAIN

console.log(totalCarac);
console.log(vocalesTolal);

console.log(`--Cantidad de Caracteres en "${texto}"`);
for (const key in caracRepetidos) {
  console.log(`${key}: ${caracRepetidos[key]} `);
}

// Funciones

// Parte I: Esta funcion debe contar la cantidad de caracteres
// En esta ocasion es recibe un texto, se pasa a toLowerCase y elimina todos los textos en blanco
// retorna la total contado

function contarCaracteres(texto) {
  let textoCont = 0;
  textoAux = texto.replaceAll(" ", "");

  for (let i = 0; i < textoAux.length; i++) {
    textoCont++;
  }
  return `--CANTIDAD CARACTERES EN: "${texto}"--\nCon espacios: "${texto.length}"\nSin espacios: "${textoCont}"`;
}

// Parte II: Esta funcion debe contar la cantidad de vocales que tiene el texto ademas quiero que muestre el proceso con un console.log()
function vocalesTolal(texto) {
  textoAux = texto.toLowerCase();

  for (let i = 0; i < textoAux.length; i++) {
    if (textoAux[i] == "a") {
      vocales.push(textoAux[i]);
    } else if (textoAux[i] == "e") {
      vocales.push(textoAux[i]);
    } else if (textoAux[i] == "i") {
      vocales.push(textoAux[i]);
    } else if (textoAux[i] == "o") {
      vocales.push(textoAux[i]);
    } else if (textoAux[i] == "u") {
      vocales.push(textoAux[i]);
    }
  }
  return `--CANTIDAD VOCALES-- en "${texto}"\nTotal: "${vocales.length}"`;
}

// Parte III: Esta funcion debe contar la cantidad de veces que los caracteres se repiten

function conCaracteresRepetidos(texto) {
  let caracRepetidos = {};
  let textoAux = texto.replaceAll(" ", "");

  for (const key of textoAux) {
    caracRepetidos[key] = (caracRepetidos[key] || 0) + 1;
  }
  return caracRepetidos;
}
