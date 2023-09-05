// Escribe un programa JavaScript para calcular el área y el perímetro 
// de un objeto Círculo con la propiedad radio. Nota: Cree dos métodos 
// para calcular el área y el perímetro. El radio del círculo lo 
// proporcionará el usuario.

var radioUsuario = prompt("Ingrese el radio ");

var circulo = {
    radio : radioUsuario,
    area : function(radio) {Math.PI * radio **2},
    perimetro : function(radio){2 * Math.PI * radio},
};

console.log(circulo);





