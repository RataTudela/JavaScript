/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3] //MYARRAY = 3
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]//CAMBIA EL VALOR TOTAL DEL ARREY DE 3 A 1,2,3,4
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true] //ARRAY PUEDE TENER DISTINTOS TIPOS DE VALORES
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais" //CAMBIAR UN ELEMENTO EN ESPECIFICO EN ESTE CASO EL DE LA
//POSICION 2 OSEASE 0= BRAIS, MOURE= 1 Y FINALMENTE EL QUE SE CAMBIO MOUREDEV = 2
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop
console.log("PUSH Y POP")
console.log(myArray)

myArray.push("Brais") //AGREGA EL ELEMENTO A LA ULTIMIA POSICION DE LA LISTA
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)
myArray.push("ultimoellemento")

console.log(myArray)

console.log("POP");
console.log(myArray.pop()) // Elimina el último y lo devuelve, en este caso
//ultimoellemento
myArray.pop()

console.log(myArray)

// shift y unshift
console.log("Shift");

myArray = ["primero","segundo","tercero"]
console.log(myArray.shift()); //ELIMINA AL DE PRIMERA POSICION y lo devuelve
//en este caso "primero"
console.log(myArray); //lista ahora solo es segundo y tercero

console.log("unshift")
myArray.unshift("Brais", "mouredev"); //AGREGA ELEMENTOS EN LA primera posicion
console.log(myArray);

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

console.log("slice")
myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3) //corta una seccion de una lista en este caso
//de la posicion 1 hasta la 3 osease de la posicion moure hasta el 37 y lo devuelve
//ojo no la borra la lista sigue intacta con todos sus elementos
//simplemente trae(get) no los borra
console.log(myArray)
console.log(myNewArray)

// splice
console.log("splice")
myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray.splice(1, 3) //ahora si que borra los elementos de la posicion
//1 hasta el 3 desde moure hasta el 37 directamente los borra
console.log(myArray)

myArray.splice(1, 2, "Nueva entrada") //1. 1 (Índice de inicio): Indica la posición
//  donde comenzará el cambio. el índice 1 corresponde al segundo elemento del array.
// 2. 2 (Cantidad a eliminar): Indica cuántos elementos
// se van a borrar a partir del índice de inicio.
// En este caso, se eliminarán dos elementos (el del índice 1 y el del índice 2).
// 3. "Nueva entrada" (Elemento a insertar): Es el nuevo valor que se va a 
// colocar exactamente en la posición donde se inició la operación (índice 1).

console.log(myArray)