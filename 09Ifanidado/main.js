// alert('HOLA');

let edad = 17;
// ASÍ DECLARAMOS LA CONSTANTE: const Y JAMÁS SE PUEDE CAMBIAR EL VALOR!!!!

const nacionalidad = 'mx';
edad = edad + 1;
let residencia = 'cdmx';
let ine = true;


if (edad >= 18) {
    console.log('puedes votar!')
    if (nacionalidad == "mx") {
        console.log('tu nacionalidad es:' + nacionalidad)
        if (residencia == 'cdmx') {
            console.log('Vives en:' + residencia)
            if (ine == true) {
                console.log("¿Tienes ine?" + ine+ "    ¡ACUDE A TU MÓDULO MÁS CERCANO PARA QUE PUEDAS VOTAR!")
                
            } else {
                console.log('No tienes ine y no puedes votar :(')
            }

        } else {
            console.log('debes vivir en cdmx')
        }
    } else {
        console.log('Tu nacionalidad debe ser mx')
    }

} else {
    console.log('debes ser mayor de edad para poder votar')
}
