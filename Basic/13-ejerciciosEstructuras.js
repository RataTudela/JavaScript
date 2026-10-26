/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let myArray = new Array("PERRO","GATO","MONO","CERDO","CABALLO")
console.log(myArray)
// 2. Añade dos más. Uno al principio y otro al final
myArray.push("puercovich")
myArray.unshift("cerdovich")
console.log(myArray)
// 3. Elimina el que se encuentra en tercera posición
console.log(myArray.splice(2,1))
// 4. Crea un set que almacene cinco libros
let mySet = new Set(["HARRY","REBELION","1986","METAMORFOSIS","ZAPALLAR"])
console.log(mySet)
// 5. Añade dos más. Uno de ellos repetido
mySet.add("perro")
console.log(mySet)
mySet.add("perro")
console.log(mySet)

// 6. Elimina uno concreto a tu elección
mySet.delete("perro")
console.log(mySet)
// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
    ["Enero",1],
    ["Febrero", 2],
    ["Marzo",3],
    ["Abril", 4],
    [5, "Mayo"],
    ["Junio", 6],
    ["Julio",7],
    ["Agosto", 8],
    ["Septiembre",9],
    ["Octubre",10],
    ["Noviembre", 11],
    ["Diciembre",12]
])//ERA AL REVEZ :V
console.log(myMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
let valor = myMap.has(5) ? myMap.get(5) : "No existe ese valor"
console.log(valor)
// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set(["Verano",4])
console.log(myMap)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let newArray = new Array("PERROVICH","RATOVICH")
let newSet = new Set(newArray) //o puedes traer un elemento en específico
// directamente por su índice o clave usando un Set, ya que es una colección de valores únicos 
// que no está indexada (no tiene posiciones como un Array).


let newMap = new Map()
newMap.set("SET", newSet)
console.log(newMap.get("SET"))