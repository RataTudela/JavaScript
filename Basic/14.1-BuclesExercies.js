// 1. Crea un bucle que imprima los números del 1 al 20

for(let i = 1; i<=20; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

console.log("bucle for 100")

let valor = 0
for(let i = 1; i<= 100; i++){
    valor += i
    console.log(valor)
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let i = 1; i <= 50; i++){
    if(i%2==0){
        console.log(`El Numero: ${i} Es Par`)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["juan","noel","ChicoAlberto"];

for(valor of nombres){
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let vocales = "audio";
let contador = 0
for(valor of vocales){
    switch(valor){
        case "a":
            contador ++
            break
        case "e":
            contador ++
            break
        case "i":
            contador ++
            break
        case "o":
            contador ++
            break
        case "u":
            contador ++
            break
        default:
                console.log("pene")
    }
}
console.log(contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let multi = [5, 2,3,4];
let numeros = 1
for(valor of multi){
    numeros *= valor
}
console.log(numeros)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let i = 0
valor == 0
while(i < 100){
    i++
    valor = i*5
    console.log(valor)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadenaInvertida = ""
let cadena = "cadena"

for(valor of cadena){
    cadenaInvertida = valor + cadenaInvertida;
    console.log(cadenaInvertida);
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fib = [0,1]

for(let i = 2; i < 10; i++){
    fib.push((i-1)+(i-2))
}
console.log(fib)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let number = new Array(5,2,3,6,10,2,32,12);
let newNumbre = [];
for(valor of number){
    console.log(valor)
    if(valor > 10){
        newNumbre.push(valor)
    }
}
console.log(newNumbre)