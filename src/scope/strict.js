//funciona
pi = 3.141592; //Se asigno solo
console.log(pi);

//no funciona
'use strict';
pi = 3.141592;//ahora ya no sirve
console.log(pi);

//no funciona
function myFunction(){
    'use strict';
    return pi = 3.141592;
}

console.log(myFunction());

//si funciona
function myFunction(){
    return pi = 3.141592;
}

console.log(myFunction());