//for

for(let i = 0; i < 5; i++){
    console.log(`hola ${i}`)
}

const numbers = [1, 2, 3, 4 , 5]
for(let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

//while
let i = 0
while(i < 5){
    console.log(`hola ${i}`)
    i++
}

//do while

i = 6
do{ //LO QUE SE EJECUTA SI O SI INCLOS SI LA CONDICION DEL WHILE NO SE CUMPLE
    console.log(`hola ${i}`)
    i++
}while(i < 5)

//for of

let myArray = new Array("perro","gato","ove")
let mySet = new Set(["set1","set2","set3"])
let myMap = new Map([
    ["map1",1],
    ["map2",2],
    ["map3",3],

])

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}

let myString = "Hola, javascript"

for(let valor of myString){
    console.log(valor)
}

//BUENAS PRACTICAS

//TRATAR DE NO PROVOCAR UN BUCLE INFINITO


//BREAK Y CONTINUE

for(let i = 0; i < 10; i++){
    if(i==5){
        continue
    }else if(i == 7){
        break
    }
    console.log(`HOLA ${i}`)
}