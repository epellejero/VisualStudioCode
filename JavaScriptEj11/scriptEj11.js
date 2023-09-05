// Escribir una función que reciba un String y devuelva la palabra más larga.
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

var frase = prompt("Ingrese una frase : ");
frase = frase + " "
var palabraMasLarga = "";
console.log("La palabra más larga es " + masLarga(frase) + " con " + masLarga(frase).length + " caracteres");

function masLarga (frase){
    let palabra = "";
    let caracter = "";
    for (let i = 0; i < frase.length; i++) {
        caracter = frase.substring(i,i+1);
        if(caracter==" "){
            if(palabra.length > palabraMasLarga.length){
                palabraMasLarga = palabra;           
            }      
            palabra = "";
        }else{
            palabra = palabra + caracter;
        } 
    };
    return palabraMasLarga;
}
