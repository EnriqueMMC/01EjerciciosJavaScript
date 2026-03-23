//alert("Hola Mundo");

const nombre = prompt("¿Cuál es tu nombre?"); 

/* A este archivo se hace referencia desde el archivo 01-Introduccion/index.html
   La referencia está en la línea 77
   Se puede poner la referencia en la cabecera o en el body del html
   Es bastante habitual encontrarse la referencia al final del body para que el código de JavaScript empiece a ejecutarse una vez cargado el html
*/

/**
 * En la línea 14 del html tenemos la siguiente etiqueta:
 * <p class="saludo"></p>
 * Es un elemento de párrafo sin contenido que tiene un id
 * El siguiente código hace referencia a ese párrafo
 *  document.querySelector('#saludo') selecciona el elemento con id saludo
 * Accediendo a su propiedad innerHTML le agregamos contenido a la etiqueta
 * 
 *  */

let saludo = "Hola "+ nombre +" Vamos a aprender JavaScript."
document.querySelector('#saludo').innerHTML = saludo;
