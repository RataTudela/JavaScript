/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
console.log("Hola" + "Mundo")
// 2. Muestra la longitud de una cadena de texto
let length1 = "hola perros"
console.log(length1.length)
// 3. Muestra el primer y último carácter de un string
console.log(length1[0] + length1[10])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(length1.toUpperCase() + " " + length1.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let cadena = `hola ratillas
gordillas pillas`
console.log(cadena)
// 6. Interpola el valor de una variable en un string
console.log(`interpolando variable ${cadena}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadena.replace(" ","-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena.includes("hola"))
// 9. Comprueba si dos strings son iguales
console.log(cadena == length1)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(cadena.length == length1.length)




//INTENTAR EL MANEJO DE STRINGS

let burro = "123penedeburro123";

console.log(burro.slice(3,14)) //CORTAR DEBERIA DEVOLVER PENEDEBURRO


let inc = "hola perros"

console.log(inc[0])//Imprime H

console.log(inc.includes("hola")) //DEVUELVE TRUE OR FALSE SI CONTIENE X ELEMENTO

console.log(inc.indexOf("perros"))//en que posicion se encuentra la palabra perros

console.log(inc.replace("perros","burros"))//Reemplaza la palabra perros por burros

console.log(inc.toLowerCase())
console.log(inc.toUpperCase())


