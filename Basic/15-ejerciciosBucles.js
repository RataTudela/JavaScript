/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i = 1; i < 21; i++){
    console.log(`Numeros: ${i}`)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let contador = 0
for(let i = 1; i <= 100; i++){
    contador += i
    console.log(contador)
}
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for(let i = 1; i <= 50; i++){
    if(i % 2 == 0){
        console.log(i)
    }else{
        console.log("impar")
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myArray = ["JUAN","GUILLE","HLA"]
for(valor of myArray){
    console.log(valor)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "cinco"
contador = 0
for(valor of cadena){
    if(valor == "a" || valor == "e" || valor == "i" || valor == "o" || valor == "u"){
        contador += 1
        console.log(contador)
    }
}
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
myArray = [100, 2, 3, 4, 5]
contador = 1
for(valor of myArray){
    contador *= valor
    console.log(contador)
}
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
contador = 0
for(let i = 1; i <= 100; i++){
    contador = 5*i
    console.log(contador)
}
// 8. Usa un bucle para invertir una cadena de texto
cadena = "invertir";
let cadenaInvertida = ""; 
for (valor of cadena) {
    cadenaInvertida = valor + cadenaInvertida; 
    console.log(cadenaInvertida)
}

console.log(cadenaInvertida);
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fib = [0, 1];

for (let i = 2; i < 10; i++) {
    fib.push(fib[i - 1] + fib[i - 2])
}

console.log(fib);
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numeros = [1, 5, 8, 10, 20, 30];
let newNumeros = [];

for (let valor of numeros) {
    if (valor > 10) {
        newNumeros.push(valor);
    }
}

console.log(newNumeros);