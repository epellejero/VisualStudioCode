//Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
//de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
//para calcular el área y el perímetro se utilizan las siguientes fórmulas:
//area = PI * radio2
//perimetro = 2 * PI * radio

var area = 0;
var perimetro = 0;
var radio = prompt("Ingrese el radio ");
// perimetro= Math.PI * Math.exp(radio);
area = Math.PI * radio**2;
perimetro = 2 * Math.PI * radio;
alert("El area es " + area);
alert("El perimetro es " + perimetro); 