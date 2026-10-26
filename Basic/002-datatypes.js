//TIPOS DE DATOS PRIMITIVOS (BASICOS)

//Cadena de texto (STRING)

let name = "Benjamin"
let alias = "RataTUDELA"
let email = "rata@gmail.com"

//Numeros
let age = 22 //entero
let height = 1.70 //decimal

//Booleans

let verdad = true
let mentira = false

let isStudent = false
let isTeacher = true

// if(verdad = true){
//     console.log(height)
// }else{
//     console.log(mentira)
// }


//Undefined variable que declaramos pero no inicializamos,
//  propiedad que aun no tenga un valor como tal

let undefinedValue
console.log(undefinedValue)

// Null

let nullValue = null
console.log(nullValue)

//Symbol, valores unicos Y INMUTABLE que pueden ser usados
//como identificadores UNICOS, 
// para evitar colisiones entre otras
//propiedades

let mySymbol = Symbol("mysymbol")

//BigInt se utilizamos cuando usamos un numero extremadamente
//grande que no se pueda utilizar un int de 64 bits

let myBigInt = BigInt(3128371289371289372893789217)
console.log(myBigInt)