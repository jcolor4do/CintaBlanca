// prompt('hola');

// cuando i=
let espacios=''
for (i = 0; i <= 6; i++) {

    for (j = 0; j <= 6; j++) {


        // cuando i=0 y j=1,2,3,4,5,6 >>>>>
        if((i+j) % 2==0){
            espacios+= ' ';
        }else{
            espacios+= '#'
        }
    }
    espacios+='\n'
}
console.log(espacios)

// es: x=x+10 
// es igual a: x+=10