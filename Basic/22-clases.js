
class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//sintaxis

let person = new Person("ratilla",21,"ratonnnS")

console.log(person)
console.log(typeof person)

//Valores por defecto

class DefaultPerson{
    constructor(name = "nombre por defecto", age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson()
console.log(person3)

//ACCESO A PROPIEDADES

console.log(person3.alias)
console.log(person3["alias"])
person3.alias = "ratadev"

console.log(person3.alias)

//funciones en clases

class PersonWithMethod{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk(){
        console.log("la persona camina")
    }
}

let person2 = new PersonWithMethod("rata","pilla","cochinilla")
console.log(person2)
person2.walk()

//Propiedades Privadas

class PrivatePerson{
    #bank //LA PROPIEDAD ES PRIVADA
    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank //PROPIEDAD PRIVADA
    }
    pay(){
        this.#bank //PROPIEDAD PRIVADA
    }
}

let person5 = new PrivatePerson("rATA", 21, "RataDev","rata1234")
// console.log(person5.#bank) //NO PODEMOS ACCEDER

person5.bank = "sdoiasasj" //ESTE BANK NO ES EL MISMO QUE CREAMOS NOSOTROS, SINO QUE CREA UNA NUEVA PERO PUBLICA

console.log(person5)

//GETTER AND SETTER


class GetSetPerson{
    #bank //LA PROPIEDAD ES PRIVADA
    #name
    #age
    #alias
    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank //PROPIEDAD PRIVADA
    }
    get name(){
        return this.#name
    }
    set bank(newBank){ //SIN ESTO NO FUNCONARIA, MAS ABABJO 
        this.#bank = newBank
    }
    get bank(){
        return this.#bank
    }
}

let person6 = new GetSetPerson("rata",2,"loca","RATA1234")
console.log(person6.name) //es de lectura mas no de escritura

person6.bank = "new IBVANDASDAD" //NO FUNCIONARIA ESTOOO

console.log(person6.bank)

//HERENCIA


class Animal{
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Emite un sonido generico.")
    }
}

class Dog extends Animal{

    sound(){
        console.log("Woof!")
    }
    run(){
        console.log(`${this.name} corre`)
    }
}



let perro = new Dog("Koby")
console.log(perro)

perro.run()
perro.sound()

class fish extends Animal{
    constructor(name, branquias){
        super(name)
        this.branquias = branquias
    }
    swim(){
        console.log("El pez nada")
    }
}

let pez = new fish("Juan",true)
console.log(pez)

//Metodos Estaticos

//para ejecutar lógica que pertenece a la clase en general y no a un objeto (instancia) en particular
class MathOperations{ //LLAMAR ESTAS FUNCIONES EN LA CLASE MISMA NO INSTANCIARLAS
    static sum(a,b){
        return a + b
    }
}

console.log(MathOperations.sum(5,10))