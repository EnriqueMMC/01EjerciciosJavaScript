/*
Ejercicios para practicar con operadores en JavaScript:

1. Crea un programa que solicite dos números al usuario y muestre:
    - La suma de ambos.
    - La resta del primero menos el segundo.
    - El producto de ambos. 
    - El cociente del primero dividido por el segundo.
*/

function operarNumeros() {
    let num1 = prompt("Introduzca un número");
    num1 = parseInt(num1);
    let num2 = prompt("Introduzca otro número");
    num2 = parseInt(num2);

    suma = num1 + num2;
    resta = num1 - num2;
    multiplicacion = num1 * num2;
    division = num1 / num2;

    console.log ("Suma: " + suma);
    console.log ("Resta: " + resta);
    console.log ("Multiplicación: " + multiplicacion);
    console.log ("División: " + division);
}

//operarNumeros();

//2. Escribe un programa que determine si un número ingresado por el usuario es par o impar utilizando el operador módulo (%).

function parImpar() {
    let numero = prompt("Introduzca un número");
    numero = parseInt(numero);
    if(numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

//parImpar();

//3. Declara dos variables con valores numéricos y utiliza operadores de comparación (>, <, >=, <=, ===, !==) para verificar diferentes condiciones. 
// Muestra los resultados en la consola.

function comparaciones() {
    let num1 = Math.round(Math.random() * 10);
    let num2 = Math.round(Math.random() * 10);
    console.log(num1);
    console.log(num2);

    if(num1 === num2) {
        console.log("Ambos números son iguales")
    } else if(num1!==num2) {
        console.log("Los números son distintos")
        if(num1 > num2) {
        console.log("El primero es mayor que el segundo")
        } else if(num1 < num2) {
        console.log("El segundo es mayor que el primero")
        }
    }
    
}

//comparaciones();


//4. Crea un programa que solicite al usuario su edad y determine si es mayor de edad (18 años o más) utilizando un operador lógico.

function mayorEdad() {
    let edad = prompt("Introduzca su edad: ");
    edad = parseInt(edad);

    if(edad >= 18){
        console.log("Es mayor de edad");
    } else {
        console.log("No es mayor de edad");
    }
}

//mayorEdad();

//5. Declara tres variables booleanas y utiliza operadores lógicos (&&, ||, !) para evaluar diferentes combinaciones. Muestra los resultados en la consola.

function operadoresLogicos() {
    let primero = true;
    let segundo = false;
    let tercero = true;

    if(primero === true || segundo === true){
        console.log("El primero y/o el segundo son true");
        if(primero && segundo){
            console.log("Los dos son true")
        } else if(primero && !segundo){
            console.log("Solo el primero es true");
        }
    }
}

//operadoresLogicos();

//6. Escribe un programa que calcule el área de un triángulo. Solicita al usuario la base y la altura, y utiliza el operador de multiplicación (*) y 
// división (/).

function areaTriangulo() {
    let b = prompt("Escriba la base del triángulo: ");
    let h = prompt("Escriba la altura del triángulo: ");
    let pi = Math.pi;
    console.log(pi);
}

areaTriangulo();

//7. Declara una variable con un número inicial y utiliza operadores de incremento (++) y decremento (--) para modificar su valor. Muestra el resultado después de cada operación.

//8. Crea un programa que convierta una cantidad de minutos ingresada por el usuario en segundos utilizando el operador de multiplicación (*).

//9. Escribe un programa que determine si un número ingresado por el usuario es divisible entre 3 y 5 utilizando operadores lógicos y el operador módulo (%).

//10. Declara una variable con un valor numérico y utiliza el operador ternario para determinar si el número es positivo, negativo o cero. Muestra el resultado en la consola.


