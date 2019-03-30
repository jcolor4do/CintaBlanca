// prompt('hola');

//Rangos de números 
let numeroInicio = prompt('Ingresa el número de inicio');
let numeroFinal = prompt('Ingresa el número final');


for (i = numeroInicio; i <= numeroFinal; i++) {
    if (i % 3 == 0 && i % 5 == 0) { console.log(i + " fizzbuzz") }
    else if (i % 3 == 0) { console.log(i + " fizz") }
    else if (i % 5 == 0) { console.log(i + " buzz") }
    else { console.log(i) }
}
//ESTE CÓDIGO IMPRIME:
// cuando numeroInicial=1 y numeroFinal=30
/* 1
2
3 fizz
4
5 buzz
6 fizz
7
8
9 fizz
10 buzz
11
12 fizz
13
14
15 fizzbuzz
16
17
18 fizz
19
20 buzz
21 fizz
22
23
24 fizz
25 buzz
26
27 fizz
28
29
30 fizzbuzz */
