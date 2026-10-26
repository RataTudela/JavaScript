/*
Clase 26 - Ejercicios: Sets
*/

// 1. Crea un Set vacío llamado mySet1 y otro Set inicializado con 4 valores de distintos tipos de datos.
let mySet1 = new Set(["perrinchi",true,12,BigInt(2213123123)])
let mySet = new Set([])
console.log(mySet1)
// 2. Añade dos elementos nuevos a mySet1 utilizando el método .add().
mySet.add("juanceto")
mySet.add("008")
console.log(mySet)
// 3. Intenta añadir un valor que ya exista dentro del Set y comprueba si se duplica o no por consola.
mySet.add("juanceto")
console.log(mySet)//no se duplica

// 4. Elimina un elemento específico de tu Set usando el método .delete().
mySet.delete("juanceto")
console.log(mySet)
// 5. Usa el valor retornado por .delete() dentro de un condicional (if/else) para mostrar un mensaje si el elemento se borró o no existía.
mySet.add("juanceto")

if(mySet.delete("juanceto")){
    console.log("Elemento Borrado")
}else{
    console.log("Elemento no Existe")
}

// 6. Comprueba si un elemento concreto existe dentro del Set utilizando el método .has() e imprime el resultado.
console.log(mySet.has("008"))

// 7. Imprime por consola la cantidad total de elementos únicos dentro de tu Set usando la propiedad .size.
console.log(mySet.size)
// 8. Convierte tu Set en un Array utilizando Array.from() y guárdalo en una variable llamada myArray.

let myArray = Array.from(mySet)
console.log(myArray)
// 9. Crea un Array que contenga valores repetidos (ej: [1, 2, 2, 3, 4, 4, 5]) y conviértelo a Set para eliminar automáticamente los duplicados.

let newArray = [1, 2, 2, 3, 4, 4, 5];
console.log(newArray)
mySet = new Set(newArray)
console.log(mySet)
// 10. Elimina todos los elementos de un Set usando el método .clear() y verifica por consola que su propiedad .size sea 0.

mySet.clear()
console.log(mySet)