// 1. Crea un objeto con 3 propiedades

let person = {
    name: "juan",
    surname: "raton",
    age: 112
}


// 2. Accede y muestra su valor

console.log(typeof person)

// 3. Agrega una nueva propiedad

person.juan = "ratilla";
console.log(person);

// 4. Elimina una de las 3 primeras propiedades

delete person.juan;
console.log(person);

// 5. Agrega una función e invócala

person = {
    name: "juan",
    surname: "raton",
    age: 112,
    func : function(){
        console.log(this.name);
    }
}


person.func()

// 6. Itera las propiedades del objeto

for(value in person){
    console.log(`La llave ${value} tiene el valor de: `,person[value])
}

// 7. Crea un objeto anidado


person = {
    name: "juan",
    surname: "raton",
    age: 112,
    anidado: {
        objeto: "anidado"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(person.anidado.objeto)

// 9. Comprueba si los dos objetos creados son iguales



const func = (persona, persona3)=>{
    for(value1 in persona){
        for(value2 in persona3){
            if(value1 != value2){
                return false;
                break;
            }else{
                return true;
            }
        }
    }
}

persona = {
    name: "2",
    rata: "a",
    gato: "qnsos"
}

let persona3 = {
    name: "perro",
    rata: "waren",
    gato: "qnsos"
}

console.log(func(persona, persona3))

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(persona.name === persona3.name);