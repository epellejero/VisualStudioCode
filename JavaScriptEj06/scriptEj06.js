// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.

var numero = 0;
numero = prompt("Ingrese un número entero ");
if(numero==0){
    alert("El número ingresado no es par ni impar");
} else {
    if (numero%2 == 0){
    alert("El número ingresado es par");
    } else {
        alert("el número ingresado es impar");
    } 
}
