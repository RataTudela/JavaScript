// 1. Captura una excepción utilizando try-catch

function div(a,b){
    if(b == 0){
        throw new RangeError("No se puede dividir por 0")
    }
    return a/b;
}

try{
    div(2,0);
}catch(error){
    if(error instanceof RangeError){
        console.log("Error",error.message)
    }
}

// 2. Captura una excepción utilizando try-catch y finally

try{
    console.log(myObject.name);
}catch(error){
    console.log("Error:",error.message);
}finally{
    console.log("Que miras gilipichi");
}

// 3. Lanza una excepción genérica

function div2(a,b){
    if(b == 0){
        throw new RangeError("No se puede dividir por 0");
    }
    if(typeof a != "number" || typeof b != "number"){
        throw new Error("Error: Se a ingresado un valor que no es un numero");
    }
    return a/b;
}

try{
    console.log(div2("2",2));
}catch(error){
    console.log(error.message)
}

// 4. Crea una excepción personalizada
class excpecionPersonalizada extends Error{
    constructor(message){
        super(message)
    }
}
function div3(a,b){
    if(b == 0){
        throw new RangeError("No se puede dividir por 0");
    }
    if(typeof a != "number" || typeof b != "number"){
        throw new excpecionPersonalizada("Excpecion Personalizada: No se puede dividir por 0");
    }
    return a/b;
}



// 5. Lanza una excepción personalizada

class newException extends Error{
    constructor(message, a, b){
        super(message);
        this.a = a;
        this.b = b;
    }
    printValors(){
        console.log("Primer Valor",this.a, "Segundo valor", this.b);
    }
}

function div3(a,b){
    if(b == 0){
        throw new RangeError("No se puede dividir por 0");
    }
    if(typeof a != "number" || typeof b != "number"){
        throw new excpecionPersonalizada("Excpecion Personalizada: no es un valor tipo NUMBER");
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new newException("Excepcion Personalizada, Esto NO es un numero Entero",a,b); //HAY QUE MANDAR LAS VARIABLE TAMBIEN SI NO EN EL "ERROR" de try CATCH TE VA A SALIR UNDEFINED
    }
    return a/b;
}

try{
    console.log(div3(2, 1.2));
}catch(error){
    console.log(error.message);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["3.14", "42", "no_soy_un_numero", "10.5", undefined, "99.99 texto"];

for(valor of valores){
    try{
        const resultado = Number(valor);
        console.log(`Exito ${valor} transformado con exito: ${resultado}`)
        if (isNaN(resultado)) {
            throw new Error(`El valor "${valor}" no se puede transformar a float.`);
        }
    }catch(error){
        console.log(`${valor} El valor no se puede transformar a Int` + error.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class asd123 extends Error{
    constructor(message, a ,b){
        super(message);
        this.a = a;
        this.b = b;
    }
    printValor(){
        console.log("Primer Valor:",this.a,"Segundo Valor:",this.b);
    }
}
function propSpec(a, b){
    if(typeof a !== "number"){
        throw new asd123("Sejoxuigiguigo, prop especifica",a,b);
    }
    return a + b
}

try{
    console.log(propSpec("a",2))
}catch(error){
    console.log(error.message)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

//1

function div3(a,b){
    if(typeof a !== "number" || typeof b != "number") {
        throw new Error("Error el valor no es un numero")
    }
    return a/b;
}

//2 repeat

function repeat(fn,maxRepeat = 10){
    let intentos = 0;
    while(intentos < maxRepeat){
        try {
            return fn(); //Try prueba la funcion ssi no DA ningun Error la retorna pero si da error la manda al CATCH
        } catch (error) {
            intentos ++;
            console.log(`Se realizo el intento ${intentos} de ${maxRepeat}`);
            if(intentos>= maxRepeat){
                throw new Error("Numero maximo de intentos alcanzado");
            }
        }
    }
}

//3 funcion para probar
let contador = 0;
function operacionMath(){
    contador ++
    if (contador < 4) {
        return div3(2, "1"); 
    }
        return div3(1 , 2);
    
}

//trycatch

try {
    console.log("Inicio de la ejecución con reintentos...");
    const resultado = repeat(operacionMath, 10);
    console.log("Resultado final exitoso:", resultado);
} catch (error) {
    console.error("Proceso fallido:", error.message);
}