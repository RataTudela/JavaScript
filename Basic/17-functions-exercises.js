/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function numero(a = 0, b = 0){
    console.log(a + b)
}

numero(1,2)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function obtenerMayor(array) {
    let mayor = array[0];

    for (let valor of array) {
        if (valor > mayor) {
            mayor = valor;
        }
    }

    return mayor;
}

let numeros = [5, 4, 2, 1, 10];

console.log(obtenerMayor(numeros));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const vocales = (text) =>{
    let cont = 0
for(value of text){
    switch(value){
        case "a":
            cont += 1
            break
        case "e":
            cont += 1
            break
        case "i":
            cont += 1
            break
        case "o":
            cont += 1
            break
        case "u":
            cont += 1
            break
        default:
            cont = "no tiene vocales"
    }
    }
    return cont;
}
console.log(vocales("hola"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function perro(array1, array2){
    for(valor of palabras){
        newPalabras.push(valor.toUpperCase())
    }
    return array2
}
let palabras = new Array("make","myself","from","two","to","one")
let newPalabras = []

perro(palabras,newPalabras)
console.log(newPalabras)
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num) {
  if (num <= 1) return false;       // Menores o iguales a 1 no son primos
  if (num === 2) return true;       // El 2 es el único primo par
  if (num % 2 === 0) return false;  // Descarta el resto de los pares

  // Busca divisores solo entre los números impares hasta la raíz cuadrada
    const limite = Math.sqrt(num);
    for (let i = 3; i <= limite; i += 2) {
        if (num % i === 0) return false; // Si se puede dividir, no es primo
    }

    return true; 
}

console.log(esPrimo(7))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const arr1 = ["hola","turn","perro"]
const arr2 = ["hola", "carajo","perro"]
const arr3 = []

function detect(a, b, c){
        for(valor1 of a){
        for(valor2 of b){
            if(valor1 == valor2){
                c.push(valor1)
            }
        }
    }
}
detect(arr1, arr2, arr3)
console.log(arr3)
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let numbers = [1,2,3,4,5,6,8]

const suma = (numbers) =>{
    let sum = 0
    for(valor of numbers){
        if(valor%2==0){
            sum += valor
        }
    }
    return sum
}

console.log(suma(numbers))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let cuadrado = [1,2,3,4,5,6];
let newCuadrado = [];

function cuadrada(array, array2){
    for(valor of cuadrado){
        valor = valor**2
        newCuadrado.push(valor)
    }
}

cuadrada(cuadrado, newCuadrado)
console.log(newCuadrado)
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function inverse(text){
    let newCadena = ""
    for(valor of text){
        console.log(valor)
        newCadena = valor + newCadena
    }
    return newCadena
}

console.log(inverse("mallllaa"))
// 10. Crea una función que calcule el factorial de un número dado


const factorial = (a) =>{
    b = 1
    for(let i = 1; i <= a; i++){
        b *= i
    }
    return b
}

console.log(factorial(10))
    