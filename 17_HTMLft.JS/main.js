// console.log(document)
let input= document.getElementById('input1');
let txt= document.getElementById('txt1');
let btn= document.getElementById('btn1');
// comprobamos que se traiga los 3 elementos en consola:
// console.log(dato1)
// console.log(dato2)
// console.log(dato3)

// console.log(input.value);

const clickEventBtn=() =>{
    let inputText=input.value
    console.log(inputText)
    // los elementos de tipo input se accede a través ____.innerHTML
    input.innerHTML=inputText;
}

btn.addEventListener('click',clickEventBtn)

// método que tienen tods los elementos html
// recibe dos parametros:
// 1)qué tipo de evento quiere escuchar (ej. click)
// 2)funcion que se ejecuta al momento que pasa el primer parámetro