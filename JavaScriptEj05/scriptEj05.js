//Construir un programa que simule un menú de opciones para realizar las cuatro
//operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
//numéricos enteros. El usuario, además, debe especificar la operación con el primer
//carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
//o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.
var n1 = 20;
var n2 = 10;
var menu = `S - Suma  
R - Resta 
D - División 
M - Multiplicación 
Ingrese el tipo de operación `;
var respuesta = prompt(menu);
switch (respuesta){
    case "S" || "s":
        alert("La suma es : " + (n1 + n2));
        break;
    case "R" || "r":
        alert("La resta es : " + (n1 - n2));
        break;
    case "D" || "d":
        alert("La división es : " + (n1 / n2));
        break;
    case "M" || "m":
        alert("La multiplicación es : " + (n1 * n2));
        break;    
    default:
        alert("Error");
        break;    
}