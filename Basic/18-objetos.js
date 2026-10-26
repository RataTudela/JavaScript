//OBJECTS

let person = {
    name : "rata",
    surname : "pillla",
    age : 40
}

//acceso a propiedades


//notacion punto (mas recomendable)
console.log(person.name)

//notacion de corchetes
console.log(person["name"])


//modificacion

person.name = "Rata MOUREs"
console.log(person.name)

console.log(typeof person.age)
person.age = "20"
console.log(typeof person.age)
console.log(person.age)


//eliminacion de propieadades

delete person.age
console.log(person)

//nueva propiedad


//1
person.email = "ratamoure@rata.com"


//2
person["age"]= 37


console.log(person)

//metodos(funciones)

let person2 ={
    name : "rata",
    surname : "pillla",
    age : 40,
    walk: function(){
        console.log("la persona camina")
    }
}

person2.walk()

//Anidaciond de objects

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

console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

//igualdad de objects


person = {
    name : "rata",
    surname : "pillla",
    age : 40
}


let person4 = {
    name : "rata",
    surname : "pillla",
    age : 40
}

console.log(person)
console.log(person4)

console.log(person === person4)//false
console.log(person.name === person4.name)//true

//Iteracion

for(let value in person4){ //IN EN VEZ DE OF PARA ITERAR OBJETOS 
    console.log(value + ": " + person4[value])
}


//llamar atributos de un objeto dentro del mismo objeto

let person5 ={
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
            console.log(`el ${this.name} tiene ${this.experiencia} de experiencia`)
        }
    }
}

console.log(person5.job)

person5.job.work()


//funciones como objetos

function Person(name, age){ //deberia ser una clase
    this.name = name
    this.age = age
}

let personaa = new Person("RATA", 37)
console.log(personaa)