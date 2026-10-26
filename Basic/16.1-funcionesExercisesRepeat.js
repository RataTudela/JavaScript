// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a=0,b=0){
    console.log(a + b)
}

suma(1,2)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

console.log("Numeros 2")

function mayor(array){
    let mayorN = numeros[0];
    for(valor of array){
        console.log(valor)
        if(valor > mayorN){
            mayorN = valor;
        }
    }
    return mayorN;
}

let numeros = [1,5,2,20,7,12];

let value = mayor(numeros)
console.log("el valor con mayor numero es: ",value)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let strings = "audio";

let contador = 0;
for(value of strings){
    switch(value){
        case "a":
            contador++
            break;
        case "e":
            contador++
            break
        case "i":
            contador++
            break
        case "o":
            contador++
            break
        case "u":
            contador++
            break
        default:
            console.log("no Hay letras/repeticion del bucle")
            break
    }
}
console.log(contador)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function mayus(array, newArray){
    for(valor of array){
        newArray.push(valor.toUpperCase())
    }
    return newArray;
}

let mayúsculas= ["pene","raton"]
let mayusc2 = [];


mayus(mayúsculas,mayusc2);

console.log(mayusc2);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

let a = 2

function esPrimo(a){
    if(a <= 1) return false;
    if(a === 2)return true;
    if(a%2 === 0) return false;

    const limite = Math.sqrt(a)
    for(let i = 3; i <= limite; i++){
        if(a % i === 0){
            return false;
        }     
    }
    return true;
}

console.log(esPrimo(9))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos


function iguales(arr1, arr2, igualdad){
    for(valor1 of arr1){
        for(valor2 of arr2){
            if(valor1 === valor2){
                igualdad.push(valor1)
            }
        }
    }
    console.log(igualdad)

}

const arr1 = ["hola","turn","perro"];
const arr2 = ["hola", "carajo","perro"];
const igualdad = [];

iguales(arr1, arr2, igualdad);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares


function sumPar(pares){
    let sumaPar = 0;
    for(value of pares){
        if(value % 2 == 0){
            sumaPar += value;
        }
    }
    return sumaPar;
}

let pares = [1,2,4,6];

console.log(sumPar(pares))


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado


function cuadrada(array = [], newArray = []){
    for(value of array){
        newArray.push(value**2);
    }
    return newArray;
}

let cuadrado = [1,2,3,4,5,6];
let newCuadrado = [];
console.log(cuadrada(cuadrado, newCuadrado))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function inverse(string){
    let newString = "";
    for(value of string){
        newString = value + newString;
    }
    return newString;
}

console.log(inverse("juan"));

// 10. Crea una función que calcule el factorial de un número dado


function factorial(num){
    let newValor = 1;
    for(let i = 1; i <= num; i++){
        newValor *= i;
    }
    console.log(newValor)
}  

factorial(9)