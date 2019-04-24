let palabra = prompt('ingresa una palabra:')
let result = '';

for (i = 0; i < palabra.length; i++) {
    if (i % 2 === 0) {
        result +=(palabra[i].toUpperCase());
    } else {
        result +=(palabra[i].toLowerCase());
    }
}

console.log(result);