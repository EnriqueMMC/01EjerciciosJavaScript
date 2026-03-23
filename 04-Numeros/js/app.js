/*
Ejercicios para practicar con números y sus métodos:

1. Escribe una función que solicite al usuario un número decimal y lo redondee al entero más cercano utilizando `Math.round()`.

2. Escribe una función que reciba un número y devuelva su valor absoluto utilizando `Math.abs()`.

3. Genera un número aleatorio entre 1 y 100 utilizando `Math.random()` y redondea el resultado al número entero más cercano.

4. Escribe una función que convierta un número en formato string a un número decimal utilizando `parseFloat()`.

5. Escribe una función que reciba un número y determine si es un número finito utilizando `Number.isFinite()`.

6. Calcula la raíz cuadrada de un número ingresado por el usuario utilizando `Math.sqrt()`.

7. Escribe una función que convierta un número a notación exponencial con dos decimales utilizando el método `toExponential()`.

8. Escribe una función que reciba un número y lo formatee con dos decimales utilizando `toFixed()`.

9. Calcula el valor máximo y mínimo de un conjunto de números utilizando `Math.max()` y `Math.min()`.

10. Escribe una función que determine si un valor ingresado es un número entero utilizando `Number.isInteger()`.

*/

// Las llamadas a los métodos están comentadas para que no pida todos los prompts de golpe

//Ejercicio 1

function redondeoMasCercano(){
    let numero = prompt("Escribe un número decimal");
    let numeroRedondeado = Math.round(numero);
    console.log("El número entero más cercano es: " + numeroRedondeado);
}

//ahora llamo a la función
//redondeoMasCercano();

//Ejercicio 2

function valorAbsoluto(){
    let numero = prompt("Escribe un número");
    let numeroAbsoluto = Math.abs(numero);
    console.log("El valor absoluto del número es: " + numeroAbsoluto);
}

//valorAbsoluto();

// Ejercicio 3

function numeroAleatorio(){
    let numero = Math.round(Math.random() * 100);
    console.log(numero);
}

numeroAleatorio();

// Ejercicio 4

function stringNumero(){
    let cadena = "1";
    let numero = parseInt(cadena);
    console.log(numero);
}

stringNumero();

// Ejercicio 5

function esFinito(){
    let numero = prompt("Escribe un número");
    console.log(Number.isFinite(numero)); // Devuelve falso, quizás lee el prompt como String
    console.log(isFinite(numero)); // Esta opción si convierte Strings
}

//esFinito();

// Ejercicio 6

function raizCuadrada(){
    let numero = prompt("Escribe un número");
    console.log(Math.sqrt(numero));
}

// raizCuadrada();

// Ejercicio 7

function notacionExponencial() {
    let numero = prompt("Escribe un número");
    numero = parseInt(numero); // lo convertimos a entero ya que el prompt lo lee como cadena
    let notacion = numero.toExponential(2);
    console.log(notacion);
}

//notacionExponencial();

// Ejercicio 8

function dosDecimales() {
    let numero = prompt("Escribe un número");
    numero = parseFloat(numero);

    console.log(numero.toFixed(2));
}

//dosDecimales();

// Ejercicio 9

function minimosMaximos() {
    let array = [1,2,3,4,5,6,7,8,9,10];
    console.log(Math.max(...array));
    console.log(Math.min(...array)); // Duda porque hay que usar "..."
}

//minimosMaximos();

// Ejercicio 10

function esEntero() {
    let numero = prompt("Escribe un número");
    console.log(Number.isInteger(numero)); // No va a devolver true porque es una cadena
}

//esEntero();