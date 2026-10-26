/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = [1,2,3,4]

let [valor1, valor2] = myArray
console.log(valor1)
console.log(valor2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [valor3, valor4 = 5] = myArray
console.log(valor3)
console.log(valor4)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let objeto = {
    name: "perrinchi",
    locate: "pochinscli",
    weillo: "mallaas"
}

let {name, age} = objeto
console.log(name)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name: perro1, locate: locate2} = objeto
console.log(perro1)
console.log(locate2)
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let objeto2 = {
    name: "perrinchi",
    locate: "pochinscli",
    weillo: "mallaas",
    tipo: {
        name: "fuego",
        func: () =>{
        console.log("salgo pa la calle fino y elegante")
        }
    }
}

let {tipo: {name: anidadoName}, tipo: {func: funcion}} = objeto2
console.log(anidadoName)
console.log(funcion)


// 6. Usa propagación para combinar dos arrays en uno nuevo
myArray = [1,2,3,4]
let myArray2 = [5,6,7,8]
let myArray3 = [...myArray, ...myArray2]
console.log(myArray3)
// 7. Usa propagación para crear una copia de un array
let myArray4 = [...myArray,5,6,7,8,9,10,11]
console.log(myArray4)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let objeto3 = {...objeto, ...objeto2}
console.log(objeto3)
// 9. Usa propagación para crear una copia de un objeto
let objeto4 = {...objeto, email: "perrochico@chico.com", job: {tipo: "trabajo"}}
console.log(objeto4)
// 10. Combina desestructuración y propagación
const usuario = {
    id: 101,
    nombre: "Ana Martínez",
    rol: "Administrador",
    pais: "Chile",
    activo: true
};

const { nombre, rol, ...detallesAdicionales } = usuario;
console.log(nombre);              
console.log(rol);                 
console.log(detallesAdicionales)
