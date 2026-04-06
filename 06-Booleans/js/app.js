/*
Ejercicios para practicar con Booleanos:

1. Declara dos variables booleanas `isSunny` e `isWeekend`. Escribe una condición que imprima "Vamos a la playa" si ambas son verdaderas.

2. Crea una función `isAdult` que reciba un número como edad y devuelva `true` si la edad es mayor o igual a 18, y `false` en caso contrario.

3. Declara una variable `hasLicense` y otra `isSober`. Escribe una condición que imprima "Puedes conducir" si ambas son verdaderas.

4. Escribe una función `isEligibleToVote` que reciba dos parámetros: `age` y `isCitizen`. Devuelve `true` si la persona tiene al menos 18 años y es ciudadana.

5. Declara una variable `isRaining`. Escribe una condición que imprima "Lleva paraguas" si es verdadera, y "No necesitas paraguas" si es falsa.

6. Crea una función `isEven` que reciba un número y devuelva `true` si el número es par, y `false` si es impar.

7. Declara dos variables booleanas `hasJob` y `hasSavings`. Escribe una condición que imprima "Estás listo para comprar una casa" si al menos una de ellas es verdadera.

8. Escribe una función `canEnterClub` que reciba dos parámetros: `age` y `hasInvitation`. Devuelve `true` si la edad es mayor o igual a 21 o si tiene invitación.

9. Declara una variable `isOnline` y otra `isAvailable`. Escribe una condición que imprima "Puedes chatear" si ambas son verdaderas.

10. Crea una función `isLeapYear` que reciba un año como parámetro y devuelva `true` si el año es bisiesto, y `false` en caso contrario.
*/

// Ejercicio 1

function tiempoPlaya(isSunny,isWeekend) {
    if(isSunny === true && isWeekend === true) {
        console.log("Vamos a la playa");
    }
}


// Ejercicio 2
function isAdult(edad){
    let esAdulto = false;
    if(edad >= 18 && edad < 150) {
        console.log("Es mayor de edad");
        esAdulto = true;
        return esAdulto;
    } else if(!Number.isFinite(edad)){
        console.log("Introduzca un numero");
    } else if(edad < 0 || edad > 150){
        console.log("Introduzca una edad adecuada");
    } else {
        console.log("No es mayor de edad")
        esAdulto = false;
        return esAdulto;
    }
}

// console.log(isAdult(18));
// console.log(isAdult(54));
// console.log(isAdult(3));
// console.log(isAdult("a"));
// console.log(isAdult(-10));
// console.log(isAdult(10000));


// Ejercicio 3
function puedeConducir(hasLicense, isSober) {
    if(hasLicense == true && isSober == true) {
        return "Puedes Conducir";
    } else {
        return "No puedes conducir";
    }
}

// console.log(puedeConducir(true, true));
// console.log(puedeConducir(true, false));
// console.log(puedeConducir(false, true));
// console.log(puedeConducir(false, false));
// console.log(puedeConducir("a", "b"));
// console.log(puedeConducir(1, 2));


// Ejercicio 4
function puedeVotar(age, isCitizen){
    let puede = false;
    if(age >= 18 && age < 150 && isCitizen == true) {
        puede = true;
        return puede;
    } else if(!Number.isFinite(age)){
        console.log("Introduzca un numero");
    } else if(age < 0 || age > 150){
        console.log("Introduzca una edad adecuada");
    } else {
        puede = false;
        return puede;
    }
}

// console.log(puedeVotar(18,true));
// console.log(puedeVotar(54,true));
// console.log(puedeVotar(18,false));
// console.log(puedeVotar(3,true));
// console.log(puedeVotar(3,false));
// console.log(puedeVotar(154,true));
// console.log(puedeVotar(-154,true));
// console.log(puedeVotar("a",true));


// Ejercicio 5
function llueve(isRaining){
    if(isRaining === true){
        return "Lleva paraguas";
    } else if(isRaining === false){
        return "No necesitas paraguas";
    } else if(Number.isFinite(isRaining)){
        return "Dato incorrecto";
    } else {
        return "Dato incorrecto";
    }
}

// console.log(llueve(true));
// console.log(llueve(false));
// console.log(llueve(0));
// console.log(llueve("A"));


// Ejercicio 6
function isEven(num) {
    if(!Number.isFinite(num)){
        return "Introduzca un número"
    } else if(num % 2 === 0){
        return true; 
    } else if(!num % 2 === 0){
        return false;
    }
}

// console.log(isEven(2));
// console.log(isEven(28));
// console.log(isEven(3));
// console.log(isEven(3.1416));
// console.log(isEven("a"));
// console.log(isEven(false)); // Por alguna razon da true


// Ejercicio 7
function puedeComprar(hasJob, hasSavings){
    if(Number.isFinite(hasJob) || Number.isFinite(hasSavings)){
        return "Datos incorrectos"
    }
    else if(hasJob === true || hasSavings === true){
        return "Estás listo para comprar una casa";
    } else if(hasJob === false && hasSavings === false){
        return "No estás listo para comprar una casa";
    } else {
        return "Datos Incorrectos"
    }
}

// console.log(puedeComprar(true, true));
// console.log(puedeComprar(true, false));
// console.log(puedeComprar(false, true));
// console.log(puedeComprar(false, false));
// console.log(puedeComprar(1, false));
// console.log(puedeComprar(false, 0));
// console.log(puedeComprar("a", "b"));


// Ejercicio 8
// Escribe una función `canEnterClub` que reciba dos parámetros: `age` y `hasInvitation`. Devuelve `true` 
// si la edad es mayor o igual a 21 o si tiene invitación.
function canEnterClub(age, hasInvitation){
    if(!Number.isFinite(age) || Number.isFinite(hasInvitation)) {
        return "Datos incorrectos";
    }else if(age < 0 || age >150) {
        return "Introduzca una edad correcta"
    } else if (age >= 21 || hasInvitation === true){
        return true;
    } else if(age < 21 && hasInvitation === false){
        return false;
    } else {
        return "Datos incorrectos";
    }
}

// console.log(canEnterClub(21,true));
// console.log(canEnterClub(42,true));
// console.log(canEnterClub(42,false));
// console.log(canEnterClub(20,false));
// console.log(canEnterClub(21,false));
// console.log(canEnterClub(-21,false));
// console.log(canEnterClub(212121212,false));
// console.log(canEnterClub(21,2));
// console.log(canEnterClub("a","b"));


// Ejercicio 9
// Declara una variable `isOnline` y otra `isAvailable`. Escribe una condición que imprima "Puedes chatear" si ambas son verdaderas.
function puedesChatear(isOnline, isAvailable){
    if(Number.isFinite(isOnline) || Number.isFinite(isAvailable)){
        return "Datos incorrectos"
    }
    else if(isOnline === true && isAvailable === true){
        return "Puedes chatear";
    } else if(isOnline === false || isAvailable === false){
        return "No está disponible";
    } else {
        return "Datos Incorrectos"
    }
}

// console.log(puedesChatear(true,true));
// console.log(puedesChatear(true,false));
// console.log(puedesChatear(false,true));
// console.log(puedesChatear(false,false));
// console.log(puedesChatear(1,0));
// console.log(puedesChatear("a","b"));


// Ejercicio 10
// Crea una función `isLeapYear` que reciba un año como parámetro y devuelva `true` si el año es bisiesto, y `false` en caso contrario.
function isLeapYear(year){
    if (!Number.isFinite(year)){
        return "Por favor, introduzca un número"
    } else if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true;
    } else if(year % 4 !== 0 && year % 400 !== 0 || year % 100 === 0){
        return false;
    } 
}

console.log(isLeapYear(4));
console.log(isLeapYear(100));
console.log(isLeapYear(400));
console.log(isLeapYear(333));
console.log(isLeapYear(1));
console.log(isLeapYear(0));
console.log(isLeapYear(-1000));
console.log(isLeapYear("a"));
console.log(isLeapYear(false));