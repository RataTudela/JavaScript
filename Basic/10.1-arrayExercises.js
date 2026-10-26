/*
Clase 25 - Ejercicios: Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// 1. Crea un array vacío llamado myArray1 y otro usando la sintaxis new Array() asignándole 3 posiciones.
let myArray1 = ["perro","gato",1]
let myArraySinta = new Array("waren","sanguijuela","salmon")

console.log(myArray1)
console.log(myArraySinta)
// 2. Inicializa un array llamado frutas con 5 nombres de frutas distintas.
let frutas = ["manzana","pera","naranja","platano","frutilla"]
console.log(frutas)
// 3. Modifica el valor del tercer elemento del array frutas por otra fruta diferente.

frutas[2] = "kiwi"
console.log(frutas)
// 4. Añade dos elementos más a tu array de frutas: uno al final (.push) y uno al principio (.unshift).
frutas.push("sandia")
frutas.unshift("limon")
console.log(frutas)

// 5. Elimina el último elemento con .pop() y el primer elemento con .shift(). Guarda cada uno en una variable e imprímelos por consola.

let variable1 = frutas.pop();
console.log(variable1);
let variable2 = frutas.shift();
console.log(variable2)

// 6. Imprime por consola la longitud total del array utilizando la propiedad .length.

console.log(frutas.length)
// 7. Usa .slice() para extraer los elementos entre las posiciones 1 y 3 en un nuevo array (sin modificar el original).
let newFrutas = frutas.slice(0,2);
console.log(newFrutas)

// 8. Usa .splice() para eliminar 2 elementos a partir del índice 1 de tu array.

console.log(frutas.splice(1,2))
console.log(frutas)
// 9. Usa .splice() para insertar la cadena "Nueva Fruta" en la posición 2 sin borrar ningún elemento existente.
frutas.splice(1,1,"nueva fruta")
console.log(frutas)

// 10. Vacía el array por completo utilizando la propiedad .length.

frutas.length = 0
console.log(frutas)