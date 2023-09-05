// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
// solicite números al usuario hasta que la suma de los números introducidos supere el
// límite inicial

var limite = 0;
var numero = 0;
var suma = 0;
limite = prompt("Ingrese un número entero positivo como límite : ");
do{
    numero = Number(prompt("Ingrese un número entero : "));
    suma = (suma + numero);
} while(suma<=limite);
alert(suma);
