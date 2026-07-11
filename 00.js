let texto = "Hola a";
let totalCarac = 0;

// let textoTotal = texto.length();

var vocales = [];
vocalesTolal = vocalesTolal(texto);

let caracSinEspacios = texto.replaceAll(" ", "");

console.log(caracSinEspacios);

console.log(vocales);
console.log(vocalesTolal);

console.log(texto.length);

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
  return vocales.length;
}

// function contarCaracteres(texto) {
//   texto = texto.trim();
//   contChar = 0;
//
//   for (let i = 0; i < texto.length; i++) {
//     contChar++;
//   }
//   return contChar;
// }
