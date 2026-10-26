/*
Clase 27 - Ejercicios: Maps
*/

// 1. Crea un Map vacío llamado myMap1 y otro Map inicializado con 3 pares clave-valor (ej: "nombre", "edad", "email").
let myMap2 = new Map([])
let myMap = new Map([
    ["nombre","Juan"],
    ["edad",190],
    ["email","Juanceto02@gmail.com"]
])

console.log(myMap)
// 2. Añade un nuevo elemento al Map usando el método .set() (una nueva clave y su valor).
myMap.set("pillo?",true)
console.log(myMap)

// 3. Modifica el valor de una clave que ya exista dentro del Map utilizando nuevamente .set().
myMap.set("edad",19)
console.log(myMap)

// 4. Obtén y muestra por consola el valor de una clave específica utilizando el método .get().

if(myMap.get("edad") === 19){
    console.log(`Edad es ${myMap.get("edad")}`)
}
// 5. Comprueba si existe una clave concreta dentro del Map con el método .has() e imprime el resultado (boolean).
console.log(myMap.has("edad"))

// 6. Elimina una clave y su valor correspondiente del Map utilizando el método .delete().
console.log(myMap.delete("edad")) //Retorna True
console.log(myMap)

// 7. Imprime por consola la cantidad total de elementos (pares clave-valor) en el Map con la propiedad .size.

console.log(myMap.size)

// 8. Obtén e imprime todas las claves del Map utilizando el método .keys().
console.log(myMap.keys())

// 9. Obtén e imprime todos los valores del Map con .values() y todas las entradas con .entries().

// for(let i = 0; i < myMap; i++){
//     console.log(myMap)
//     valor = myMap.values()
//     console.log(valor)
//     if(valor === "nombre"){
//         console.log("Valor es igual a nombre")
//     }else if(valor === "email"){

//     }
// }

let obtenerValoresMap
for(value of myMap){
    console.log(value)
    obtenerValoresMap == myMap.get(value)
    console.log(obtenerValoresMap)
}

for(let [clave, valor] of myMap){ //Utilizacion de Destructuracion
    console.log(clave)
    console.log(valor)
}

console.log("Deestructuracion de Datos Caso especial MAP solo se puede hacer asi")
let [valor1, valor2] = myMap;
console.log[valor1,valor2]
// 10. Vacía completamente el Map utilizando el método .clear() y comprueba por consola que su propiedad .size sea 0.

myMap.clear()
console.log(myMap)