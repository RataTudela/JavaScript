/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
    let suma = (5+5)
    console.log(suma)
    let Multiplicación = (5*5)
    console.log(Multiplicación)
    let DIVISION = (5/5)
    console.log(DIVISION)
    let Resta = (5-5)
    console.log(Resta)
    let MODULO = (10%4)
    console.log(MODULO)
    let Exponente = (10**5)
    console.log(Exponente)
    
    //incremento
    let a = 1

    a++
    console.log(a)

    //decremento
    a--
    console.log(a)
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
    suma += 1
    console.log(suma)
    Resta -= 1
    console.log(Resta)
    Multiplicación *= 1
    console.log(Multiplicación)
    DIVISION /= 1
    console.log(DIVISION)
    MODULO %= 1
    console.log(MODULO)
    Exponente **= 2
    console.log(Exponente)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
    a = 5
    let b = 10
    console.log(a == b/2)
    console.log(b>a)
    console.log(a<b)
    console.log(a === 5)
    console.log(b == "10")
    console.log(0 == false)
    console.log(0 == "")
    console.log(a != 10)
    console.log(!(false))
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a == b*2)
    console.log(b<a)
    console.log(a>b)
    console.log(a === 10)
    console.log(a === "5")
    console.log(0 == true)
    console.log(0 == "1")
    console.log(a != 5)
    console.log(!(true))
// 5. Utiliza el operador lógico and
    console.log(5 < 10 && 10<15)
// 6. Utiliza el operador lógico or
    console.log(5 > 10 || 10 > 5)

// 7. Combina ambos operadores lógicos
    console.log(100 < 1000 || 1000 > 100 && 500 > 100)
// 8. Añade alguna negación
    console.log(100 < 1000 || 1000 > 100 && 500 != 100)
// 9. Utiliza el operador ternario
    let ratilla
    ratilla = (21>12) ? "PERRO" : "GATO"
    console.log(ratilla)
// 10. Combina operadores aritméticos, de comparáción y lógicas
    console.log(100 < 1000 || 1000 > 100 && 500 > 100)



const ternario = (10>5) ? "pene" : "gay"
console.log(ternario)
