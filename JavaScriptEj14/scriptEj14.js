// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro
// y el número de páginas.

var libro = new Object();
crearLibro();
mostrarLibro();

function crearLibro(){       
    var isbnv = prompt("Ingrese el ISBN : ");
    var titulov = prompt("Ingrese el título del libro : ");
    var autorv = prompt("ingrese el autor del libro : ");
    var paginasv = prompt("Ingrese la cantidad de páginas del libro : ");
    libro = {
        isbn : isbnv,
        titulo : titulov,
        autor : autorv,
        paginas : paginasv
    }
}

function mostrarLibro(){
    //console.log(libro1);
    //console.log(libro2);
    console.log(libro);    
}

// var libro1 = {
//     isbn : "12345",
//     titulo : "El eternauta",
//     autor : "HÉCTOR GERMÁN OESTERHELD ",
//     paginas : 350
// }

// var libro2 = new Object();
// libro2.isbn = "23456";
// libro2.titulo = "1984";
// libro2.autor = "GEORGE ORWELL";
// libro2.paginas = 400;

