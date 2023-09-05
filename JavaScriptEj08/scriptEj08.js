// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
// programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
// todos ellos.

var maximo = Number.MIN_VALUE; 
var minimo = Number.MAX_VALUE;
var numero;
var contador = 0;
var suma = 0;

while(numero!==0){
    numero = Number(prompt("Ingrese un número entero : "))
    if (numero==0){
        continue;
    }
    contador++;
    suma = suma + numero;
    if(numero>maximo){
        maximo=numero;
    }
    if(numero<minimo){
        minimo=numero;
    }
}

var mensaje = ` Suma = ${suma}
Máximo = ${maximo}
Minimo = ${minimo}
Ingresos = ${contador}
Promedio = ${(suma/contador)}`;

alert(mensaje);