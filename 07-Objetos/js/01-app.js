/*
Ejercicio 1:
Crea un objeto llamado "persona" con las propiedades: nombre, edad y profesión. 
Luego, muestra cada propiedad en la consola.

Ejercicio 2:
Añade un método al objeto "persona" que devuelva una presentación en forma de string, 
por ejemplo: "Hola, me llamo Juan, tengo 30 años y soy ingeniero."

Ejercicio 3:
Crea un objeto llamado "coche" con las propiedades: marca, modelo y año. 
Añade un método que calcule cuántos años tiene el coche basado en el año actual.

Ejercicio 4:
Crea un objeto llamado "tienda" que contenga un array de productos. 
Cada producto debe ser un objeto con las propiedades: nombre y precio. 
Añade un método para calcular el precio total de todos los productos.

Ejercicio 5:
Crea un objeto llamado "biblioteca" que contenga un array de libros. 
Cada libro debe tener las propiedades: título, autor y leído (booleano). 
Añade un método que liste los libros leídos.

Ejercicio 6:
Crea un objeto llamado "usuario" con las propiedades: nombre, email y contraseña. 
Añade un método para validar si una contraseña proporcionada coincide con la del usuario.

Ejercicio 7:
Crea un objeto llamado "calculadora" con métodos para sumar, restar, multiplicar y dividir dos números. 
Prueba cada método con diferentes valores.

Ejercicio 8:
Crea un objeto llamado "agenda" que permita agregar, eliminar y buscar contactos. 
Cada contacto debe tener las propiedades: nombre, teléfono y email.

Ejercicio 9:
Crea un objeto llamado "clima" con las propiedades: temperatura, humedad y ciudad. 
Añade un método que devuelva una descripción del clima en formato de string.

*/



/*
Ejercicio 1:
Crea un objeto llamado "persona" con las propiedades: nombre, edad y profesión. 
Luego, muestra cada propiedad en la consola.
*/

// let persona = { nombre: "Enrique", edad: 29, profesion: "informático" };

/*
Ejercicio 2:
Añade un método al objeto "persona" que devuelva una presentación en forma de string, 
por ejemplo: "Hola, me llamo Juan, tengo 30 años y soy ingeniero."
*/

let persona = { nombre: "Enrique", edad: 29, profesion: "informático", 
    presentacion: function(){ 
        console.log("Hola, me llamo " + this.nombre + ", tengo " + this.edad + " y soy " + this.profesion + ".") 
    } 
};

persona.presentacion();

/*
Ejercicio 3:
Crea un objeto llamado "coche" con las propiedades: marca, modelo y año. 
Añade un método que calcule cuántos años tiene el coche basado en el año actual.
*/

let coche = { marca: "seat", modelo: "Ibiza", año: "2006",
    calcularEdad: function() {
        let actualidad = new Date().getFullYear();
        let edad = actualidad - this.año;
        return edad;
    }
};

console.log(coche.calcularEdad());

/*
Ejercicio 4:
Crea un objeto llamado "tienda" que contenga un array de productos. 
Cada producto debe ser un objeto con las propiedades: nombre y precio. 
Añade un método para calcular el precio total de todos los productos.
*/

let tienda = { productos: 
    [
        {
            nombre: "mesa",
            precio: 100.00
        }, 
        {
            nombre: "silla",
            precio: 50.00
        },
        {
            nombre: "lampara",
            precio: 20.00
        }
    ],
    
    totalPrecio: function(){
        let suma = 0;
        this.productos.forEach(producto => {
            suma += producto.precio;
        });
        return suma;
    }

};

console.log(tienda.totalPrecio());

/*
Ejercicio 5:
Crea un objeto llamado "biblioteca" que contenga un array de libros. 
Cada libro debe tener las propiedades: título, autor y leído (booleano). 
Añade un método que liste los libros leídos.
*/

let biblioteca = {
    libros: [
        {
            titulo: "El Hobbit",
            autor: "J.R.R.Tolkien",
            leido: true
        },
        {
            titulo: "Canción de hielo y fuego",
            autor: "George R.R. Martin",
            leido: false
        },
        {
            titulo: "El nombre del Viento",
            autor: "Patrick Rothfuss",
            leido: true
        }
    ],

    librosLeidos: function() {
        this.libros.forEach(libro =>{
            if (libro.leido){
                console.log(libro.titulo);
            }
        })
    }

};

biblioteca.librosLeidos();

/*
Ejercicio 6:
Crea un objeto llamado "usuario" con las propiedades: nombre, email y contraseña. 
Añade un método para validar si una contraseña proporcionada coincide con la del usuario.
*/

let contraseña = "estonoesunacontraseña1234";
let contraseñaFalsa = "AABBCCDD";

let usuario = {
    nombre: "Enrique",
    email: "enriqueMMC@prueba.com",
    contraseña: "estonoesunacontraseña1234",

    validarContrasñea: function(passwd) {
        if(usuario.contraseña === passwd){
            console.log("Contraseña correcta");
        } else {
            console.log("Contraseña incorrecta");
        }
    }
}

usuario.validarContrasñea(contraseña);
usuario.validarContrasñea(contraseñaFalsa);

/*
Ejercicio 7:
Crea un objeto llamado "calculadora" con métodos para sumar, restar, multiplicar y dividir dos números. 
Prueba cada método con diferentes valores.
*/

let calculadora = {
    sumar: function(num1,num2) {
        let suma = num1 + num2;
        if (Number.isFinite(suma)){
            return suma;
        } else {
            console.log("Introduzca un número válido");
        }
    },
    restar: function(num1,num2) {
        let resta = num1 - num2;
        if (Number.isFinite(resta)){
            return resta;
        } else {
            console.log("Introduzca un número válido");
        }
    },
    multiplicar: function(num1,num2) {
        let multiplicacion = num1 * num2;
        if (Number.isFinite(multiplicacion)){
            return multiplicacion;
        } else {
            console.log("Introduzca un número válido");
        }
    },
    dividir: function(num1,num2) {
        let division = num1 / num2;
        if (Number.isFinite(division) && num2 != 0){
            return division;
        } else if (num2 === 0){
            console.log("No se puede dividir entre 0, por favor introduzca un número válido");
        } else {
            console.log("Introduzca un número válido");
        }
    }
}

console.log(calculadora.sumar(1,2));
console.log(calculadora.sumar(2,3));
console.log(calculadora.sumar("a","b"));
console.log(calculadora.restar(3,2));
console.log(calculadora.restar(2,3));
console.log(calculadora.restar("a","b"));
console.log(calculadora.multiplicar(2,3));
console.log(calculadora.multiplicar(10,5));
console.log(calculadora.multiplicar("a","b"));
console.log(calculadora.dividir(10,2));
console.log(calculadora.dividir(10,0));
console.log(calculadora.dividir("a","b"));

/*
Ejercicio 8:
Crea un objeto llamado "agenda" que permita agregar, eliminar y buscar contactos. 
Cada contacto debe tener las propiedades: nombre, teléfono y email.
*/

let agenda = {
    contactos: [],

    agregarContacto: function(nombre,telefono,email) {
        this.contactos.push({nombre, telefono, email});
    },

    eliminarContacto: function(nombre, telefono, email) {
        const indice = this.contactos.findIndex(contacto =>
            contacto.nombre === nombre &&
            contacto.telefono === telefono &&
            contacto.email === email
        );

        if (indice !== -1) {
            const eliminado = this.contactos.splice(indice, 1);
            console.log("El contacto '" + eliminado[0].nombre + "' ha sido eliminado");
        } else {
            console.log("El contacto '" + nombre + "' no existe");
        }
    },

    buscarContacto: function(nombre, telefono, email) {
    const indice = this.contactos.findIndex(contacto =>
        contacto.nombre === nombre &&
        contacto.telefono === telefono &&
        contacto.email === email
    );

        if (indice !== -1) {
            console.log("El contacto está en la posición: " + indice);
        } else {
            console.log("Contacto '" + nombre + "' no encontrado");
        }
    }
}


let miContacto = agenda.agregarContacto("Victor", 678271736, "vacosta@prueba.com");
console.log(miContacto);

agenda.eliminarContacto("Victor", 678271736, "vacosta@prueba.com");
agenda.eliminarContacto("Fictor", 67999271736, "vlangosta@prueba.com");

let miContacto2 = agenda.agregarContacto("Victor", 678271736, "vacosta@prueba.com");
let miContacto3 = agenda.agregarContacto("Enrique", 655271736, "enriqueMMC@prueba.com");
let miContacto4 = agenda.agregarContacto("Julio", 655451736, "julio@prueba.com");

console.log(agenda.contactos);
agenda.buscarContacto("Victor", 678271736, "vacosta@prueba.com");
agenda.buscarContacto("Julio", 655451736, "julio@prueba.com");
agenda.buscarContacto("Fictor", 67999271736, "vlangosta@prueba.com");

/*
Ejercicio 9:
Crea un objeto llamado "clima" con las propiedades: temperatura, humedad y ciudad. 
Añade un método que devuelva una descripción del clima en formato de string.
*/

let clima = {
    temperatura: "30ºC",
    humedad: "23%",
    ciudad: "Granada",

    descripciónClima: function() {
        console.log("En " + this.ciudad + " hace una temperatura de " + this.temperatura + " y una humedad del " + this.humedad);
    }
}

clima.descripciónClima();