// 1. Crea una clase que reciba dos propiedades
class Persona{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let persona1 = new Persona("Juan",12);
console.log(persona1);

// 2. Añade un método a la clase que utilice las propiedades
class Persona1{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    nombre(){
        console.log("El nombre de la Persona es: ",this.name);
    }
}

persona1 = new Persona1("juan",12);

// 3. Muestra los valores de las propiedades e invoca a la función
persona1.nombre()
console.log("nombre:",persona1.name,"// Edad:", persona1.age)

// 4. Añade un método estático a la primera clase

class MathOperations{
    static sum(a,b){
        return a+b;
    }
}

class ClassPersona2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    nombre(){
        console.log("El nombre de la Persona es: ",this.name);
    }
    static Ratilla(persona){
        for (let valor in persona) {
            console.log("Los Valores de",valor,"Son:", persona[valor]);
        }
    }
}
// 5. Haz uso del método estático

console.log(MathOperations.sum(5,1));
let persona3 = new ClassPersona2("juan",12);
ClassPersona2.Ratilla(persona3); //no tiene mucho sentido pero para probar :v, PERSONA2 ES LA CLASE OJOOOO TIRA ERROR

// 6. Crea una clase que haga uso de herencia
class PersonaHereditary{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class NewPersona extends PersonaHereditary{
    constructor(nueva){
        super (nueva);//para usar un NUEVO ATRIBUTO que no estaba en la clase heredada
        this.nueva = nueva;//OBLIGATORIO DECLARARLO AQUI PARA PODER UTILIZARLO EN FUNCIONES DENTRO DE LA MISMA CLASE
    }   
    static mensaje(){
        console.log("Esta es una nueva persona");
    }
    mensajeNoStatic(){
        console.log("Este no es un mensaje STatic de", this.nueva);
    }
}

NewPersona.mensaje();
let personHereda = new NewPersona("Raton",12,true);
// personHereda.mensaje()//Must call super constructor in derived class before 
// accessing 'this' or returning from derived constructor, USAMOS PROPIEDAD STATIC DEBEMOS DECLARAR DIRECTAMENTE DESDE
//LA CLASE

personHereda.mensajeNoStatic()
// 7. Crea una clase que haga uso de getters y setters

class getysett{
    #name
    #dios
    constructor(name, dios){
        this.#name = name;
        this.#dios = dios;
    }

    get name(){
        return this.#name;
    }
    get dios(){
        return this.#dios;
    }

    set name(newName){
        this.#name = newName;
    }
}

let gettersysetters = new getysett("Juan","NORDICO");

console.log(gettersysetters.name)

gettersysetters.name = "raton";
console.log(gettersysetters.name);

// 8. Modifica la clase con getters y setters para que use propiedades privadas

//ya lo hice asi :v

// 9. Utiliza los get y set y muestra sus valores

//ya lo hice :v

// 10. Sobrescribe un método de una clase que utilice herencia 



class PersonaHereditary2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    metodo(){
        console.log("DAME DANE DAME YO DAME NANO YO ANTA GA SUKI DESU SUKI SUKI DESU")
    }
}

class newPerson extends PersonaHereditary2{
    metodo(){
        console.log("NO")
    }
    a(){
        console.log("a")
    }
}

let per = new newPerson("hitori","san nen");
per.metodo()
per.a()
