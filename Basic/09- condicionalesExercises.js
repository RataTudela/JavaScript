/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
    let nombre = "Benjamin";
    if(nombre == ("benjamin").replace("b","B")){
        console.log(nombre)
    }
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "ratatudela"
let contraseña = "123456"
if(usuario == "ratatudela" && contraseña == "123456"){
    console.log("Acceso Concedido")
}else{
    console.log("ACCESO RESTRINGIDO")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 2

if(numero > 0){
    console.log("numero es positivo")
}else if(numero < 0){
    console.log("numero es negativo")
}else if(numero == 0){
    console.log("numero es igual a 0")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 12

if(edad >= 18){
    console.log("Puede votar")
}else{
    console.log(`No puede votar le faltan ${18 - edad} años para votar`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

edad
let estado = edad >= 18 ? "adulto" : "menor";
console.log(estado)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 2;
let diaMes
switch(mes){
    case 0:
        diaMes = "Enero"
        break
    case 1:
        diaMes = "Febrero"
        break
    case 2:
        diaMes = "Marzo"
        break
    case 3:
        diaMes = "Abril"
        break
    case 4:
        diaMes = "Mayo"
        break
    case 5:
        diaMes = "Junio"
        break
    case 6:
        diaMes = "Julio"
        break
    case 7:
        diaMes = "Agosto"
        break
    case 8:
        diaMes = "Septiembre"
        break
    case 9:
        diaMes = "Octubre"
        break
    case 10:
        diaMes = "Noviembre"
        break
    case 11:
        diaMes = "Diciembre"
        break
    default:
        diaMes = "NUMERO INCORRECTO"
}
console.log(diaMes)
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let diasMes
switch(diaMes){
    case "Enero":
        diasMes = 30
        break
    case  "Febrero":
        diasMes = 28;
        break
    case "Marzo":
        diasMes =  30;
        break
    case "Abril":
        diasMes =  30;
        break
    case "Mayo":
        diasMes =  30;
        break
    case "Junio":
        diasMes =  30;
        break
    case "Julio":
        diasMes =  30;
        break
    case "Agosto":
        diasMes =  30;
        break
    case "Septiembre":
        diasMes =  30;
        break
    case "Octubre":
        diasMes =  30;
        break
    case "Noviembre":
        diasMes =  30;
        break
    case "Diciembre":
        diasMes =  30;
        break
    default:
        diaMes = "NUMERO INCORRECTO"
}
console.log(diasMes)
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let lengua = "ingles"
let saludo
switch(lengua){
    case "ingles":
        saludo =  "Good Morning, Sir"
        break
    case "japanese":
        saludo = "Okairi";
        break
    case "french":
        saludo =  "Bonjour, meu sir!";
        break
    case "español":
        saludo =  "Buenos dias";
        break
    default:
        console.log("GOODBYE")
}
console.log(saludo)
// 9. Usa un switch para hacer de nuevo el ejercicio 6

//ya lo habia hecho con switch :v


// 10. Usa un switch para hacer de nuevo el ejercicio 7

//ya lo habia hecho con switch :v
