var frutas = ['Manzana', 'Banana'];

console.log(frutas.length); 

let numeros=[1,2,3,4];

var arrayU = new Array(3);
var f;
for (f=0;f<arrayU.length;f++) { // ARRAY LENGTH = 3 = FOR = 0, 1 , 3
  var v = prompt('Ingresa los 3 valores a multiplicar:','');
  arrayU[f] = parseInt(v);
}
var total = 1;
for (f=0;f<arrayU.length;f++) {
  total = arrayU[f] * total;
}
// document.write(total);
console.log(total);