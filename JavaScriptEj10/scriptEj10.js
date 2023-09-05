// Escribir una función flecha que reciba una palabra y la devuelva al revés.

var palabra = prompt("Ingrese una palabra : ");
var palabraAlReves = "";

console.log("la palabra al revés es : " + alReves(palabra))

function alReves (palabra){
    for (let i = palabra.length; i > 0; i--) {
        palabraAlReves = palabraAlReves + palabra.substring(i,i-1);
    };
    return(palabraAlReves);
}
