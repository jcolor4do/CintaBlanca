let Turno1 = prompt('escoge: *piedra, *papel, *tijera')
let Turno2 = prompt('escoge: *piedra,  *papel, *tijera')
let piedra = 1;
let papel = 2;
let tijera = 3;
// if (Turno1 == 'piedra' && Turno2 == 'papel' || Turno2=='tijera') {
//     console.log('Ganó el Jugador 1'+ 'Turno1----->'+Turno1 +'Turno2----->'+Turno2)}
if(Turno1=='piedra' && Turno2!='piedra') {
    console.log('Ganó jugador 1'+ 'Turno1----->'+Turno1 +'Turno2----->'+Turno2)}   
else if(Turno2=='piedra'&& Turno1!='piedra'){
    console.log('Ganó jugador 2'+ 'Turno1----->'+Turno1 +'Turno2----->'+Turno2)
}
else if(Turno1=='tijera'&& Turno2=='piedra'){

}else{
    console.log('EMPATE');
}

// } else if (Turno1 == 'piedra' && Turno2 === 'piedra') {
//     console.log('EMPATE')}
//  else if (Turno1 == 'piedra' && Turno2 === 'tijeras') {
//     console.log('Ganó el jugador 1')

    
// } else if (Turno1 == 'papel' && Turno2 == 'papel') {
//     console.log('EMPATE')
// } else if (Turno1 == 'papel' && Turno2 == 'tijera') {
//     console.log('Ganó jugador 2' + Turno2)
// } else if (Turno1 == 2 && Turno2 == 1) {
//     console.log('Ganó Jugador 1 xq escogió piedra')
// }



