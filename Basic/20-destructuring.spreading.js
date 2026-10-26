



//Desestructuracion


//Sintaxis arrays
let myArray = [1,2,3,4]

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)//Undefined no hay valor en el indice 4 (posicion 5)

//Sintaxis array con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

//ignorar elementos array

myArray = [1,2,3,4];
console.log("Ignorar Elementos");
let [myValue10 , , , myValue13] = myArray;
console.log(myValue10);
console.log(myValue13);

//SINTAXIS OBJECTS

console.log("Destructuracion de Datos con Objects")
let persona = {
    name : "rata",
    surname : "pillla",
    age : 40
}
let {name, age, surname} = persona; //SI O SI SE TIENE QUE TRAERR LA CLAVE DEL OBJETO
console.log(name);
console.log(age);
console.log(surname);

//Sintaxis objject con valores predeterminados

let {name2, age2,alias2,email = "pochinscli@gmail.com"} = persona;
console.log(name2)//no existe
console.log(age2)//no existe
console.log(alias2)//no existe
console.log(email)


//Sintaxis objects con nuevos nombres de variable

let {name: name3, surname: surname3, age: age3} = persona

console.log(name3)
console.log(surname3)
console.log(age3)

//Objetos anidados

let person3 ={
    name : "rata",
    surname : "pillla",
    age : 40,
    walk: function(){
        console.log("la persona camina")
    },
    job: {
        name: "programador",
        experiencia: 15,
        work: function(){
            console.log(`la $persona trabaja`)
        }
    }
}

let {name: name4, job: {name: jobName}} = person3

console.log(name4)
console.log(jobName)

//Propagacion o Spreading

//Sintaxis arrays

let myArray2 = [...myArray] //COPIA

let myArray3 = [...myArray, 5, 6]

//Copia de arrays
console.log(myArray2)
console.log(myArray3)


//COMBINACION DE ARRAYS

let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)

//Sintaxis objects

let persona4 = {...persona, email: "ratillapilla@gmail.com"}
console.log(persona4)
//copa de objects

let persona5 = {...persona}
console.log(persona5)
