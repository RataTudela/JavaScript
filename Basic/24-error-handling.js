//Excepcion

// let myObject
// console.log(myObject.email)


//Tratamiento de errores

//try-catch

try{ //EL CODIGO QUE SE VA A EJECUTAR
    console.log(myObject.email) 
    console.log("finaliza la ejecucion sin errores")
}catch{ //EL MENSAJE QUE MUESTRA EN CASO DE ERROR
    console.log("Finaliza la Ejecucion CON ERRORES")
}

//CAPTURA DEL ERROR

try{
    console.log(myObject.email)
}catch(error){ //CATCH ERROR EN ESTE CASO TRAERIA NO EXISTE MYOBJECT
    console.log("se ha producido un error: " + error.message)
}

//finally

try{
    console.log(myObject.email)
}catch(error){
    console.log("se ha producido un error: " + error.message)
}finally{//UN CODIGO QUE SE EJECUTA SI O SI, YA SEA EXISTA EL ERROR O NO
    console.log("Este codigo se ejecuta siempre")
}

//lanzamiento de errores

function sum(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Estaasd operacion solo suma numeros enteros")
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operacion solo suma numeros enteros") //NOS PERMITE 
        //A NOSOTROS TIRAR UN ERROR COMO TAL
    }
    return a + b
}


try{
    console.log(sum(5,10))
    console.log(sum("5",10))
}catch (error){ //AQUI SI IMPRIMIRIA EL ERROR QUE CREAMOS EN LA FUNCION
    console.log("Se ha producido un error: " + error.message)
}

// throw new Error("Se ha producido un error");


//Capturar varios tipos de errores

try{
    // console.log(sum(5.5,10))
    console.log(sum("5","10"))
}catch(error){
    if(error instanceof TypeError){
        console.log("El tipo de error es: "+ error.message)
    }else if(error instanceof Error){
        console.log("El ERROR es: "+ error.message)
    }
}


//Crear excepciones personalizadas


class SumIntegerError extends Error{
    constructor(message, a, b){
        super(message)
        this.a == a;
        this.b == b;
    }
    printNumber(){
        console.log(this.a + ", " + this.b)
    }
}

function sumInteger(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Estaasd operacion solo suma numeros enteros")
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operacion solo suma numeros enteros") //NOS PERMITE 
        //A NOSOTROS TIRAR UN ERROR
    }
    if(a == 0 || b == 0 ){
        throw new SumIntegerError("Se esta intentando sumar 0")
    }
    return a + b
}


try{
    console.log(sumInteger(0 , 1))
}catch(error){
    console.log("Se Genero el error de tipo: " + error.message);
    error.printNumber()
}

