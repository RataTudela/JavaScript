/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let persona = {
    name: "perro",
    rata: "waren",
    gato: "qnsos"
}
// 2. Accede y muestra su valor
console.log(typeof persona)
// 3. Agrega una nueva propiedad

persona.type = "ratilla"
persona["gato"] = "puto"
console.log(persona)
// 4. Elimina una de las 3 primeras propiedades
delete persona.gato;
console.log(persona)

// 5. Agrega una función e invócala

persona = {
    name: "perro",
    rata: "waren",
    gato: "qnsos",
    a: function(){
        console.log(`Se invoca la funciona de ${this.name}`)
    }
}
persona.a()
// 6. Itera las propiedades del objeto
for(value in persona){
    console.log(`Las propieadades del objetos son ${value}: ${persona[value]}`)
}
// 7. Crea un objeto anidado
persona2 = {
    name: "perro",
    rata: "waren",
    gato: "qnsos",
    anidado:{
        name: "perro",
        rata: "waren",
        gato: "qnsos"
    }
}
// 8. Accede y muestra el valor de las propiedades anidadas

console.log(persona2.anidado.name)
console.log(persona2.anidado.rata)
console.log(persona2.anidado.gato)

// 9. Comprueba si los dos objetos creados son iguales


persona = {
    name: "2",
    rata: "a",
    gato: "qnsos"
}

persona3 = {
    name: "perro",
    rata: "waren",
    gato: "qnsos"
}

let valor
for(value1 in persona){
    for(value2 in persona3){
        if(value1 != value2){
            valor = false
            break
        }else{
            valor = true
        }
    }
}
console.log(valor)
// 10. Comprueba si dos propiedades diferentes son iguales

console.log(persona.name == persona3.name)