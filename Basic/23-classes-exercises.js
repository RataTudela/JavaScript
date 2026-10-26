/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class props2{
    constructor(prop1, prop2){
        this.prop1 = prop1
        this.prop2 = prop2
    }
}

let objeto = new props2("propiedad1","propiedad2")
console.log(objeto)
// 2. Añade un método a la clase que utilice las propiedades
class props1{
    constructor(prop1, prop2){
        this.prop1 = prop1
        this.prop2 = prop2
    }
    metod(){
        console.log(`esta es la propiedad1: ${this.prop1}
            esta es la propiedad2: ${this.prop2}`)
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let objeto1 = new props1("raton","waton")
console.log(objeto1.prop1, objeto1.prop2)
objeto1.metod()
// 4. Añade un método estático a la primera clase
class props0{
    constructor(prop1, prop2){
        this.prop1 = prop1
        this.prop2 = prop2
    }
    metod(){
        console.log(`esta es la propiedad1: ${this.prop1}
            esta es la propiedad2: ${this.prop2}`)
    }
    static mult(a,b){
        return a * b
    }
    static divisio(a,b){
        return a / b
    }
}

// 5. Haz uso del método estático

console.log(props0.mult(2,3))
console.log(props0.divisio(2,3))

// 6. Crea una clase que haga uso de herencia
class calculadora extends props0{
    
}

console.log(calculadora.mult(1,2))
// 7. Crea una clase que haga uso de getters y setters
class getsySets{
    constructor(prop1, prop2){
        this.prop1 = prop1
        this.prop2 = prop2
    }
    get getProp1(){
        return this.prop1
    }
    set propiedad2(newProp){
        this.prop2 = newProp
    }
}

let probGetSet = new getsySets("u round","so ready or not")
console.log(probGetSet.getProp1)
probGetSet.prop2 = "or ready or right like a radio"
console.log(probGetSet.prop2)
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class GetsySetsPrivate {
    #prop1;
    #prop2;

    constructor(prop1, prop2) {
        this.#prop1 = prop1;
        this.#prop2 = prop2;
    }

    // Getter y Setter para #prop1
    get prop1() {
        return this.#prop1;
    }

    set prop1(newProp) {
        this.#prop1 = newProp;
    }

    // Getter y Setter para #prop2
    get prop2() {
        return this.#prop2;
    }

    set prop2(newProp) {
        this.#prop2 = newProp;
    }
}


// 9. Utiliza los get y set y muestra sus valores

let prop1priv = new GetsySetsPrivate("perrinchi", "ratonloy")
// Modifica #prop1 mediante el setter
prop1priv.prop1 = "asjdpasjdp";
console.log(prop1priv.prop1); // "asjdpasjdp"

// Modifica #prop2 mediante el setter
prop1priv.prop2 = "NUEVO_MALINCHI";
console.log(prop1priv.prop2); // "NUEVO_MALINCHI"

console.log(prop1priv)
// 10. Sobrescribe un método de una clase que utilice herencia 

class animal{
    rugido(){
        console.log("animal ruge")
    }
}

class tigre extends animal{
    rugido(){
        console.log("El animal ya no ruge")
    }
}

let tigre1 = new tigre()
tigre1.rugido()