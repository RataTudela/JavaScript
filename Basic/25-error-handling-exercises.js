/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try{
    console.log(4/0)
}catch(error){
    console.log("Error" + error.message)
}
// 2. Captura una excepción utilizando try-catch y finally
try{
    console.log(4/0)
}catch(error){
    console.log("Error" + error.message)
}finally{
    console.log("El weillo mas pillo")
}
// 3. Lanza una excepción genérica

// if(5+7==12){
//     throw new Error("Excepcion Generica");
// }

// 4. Crea una excepción personalizada

class excpecionPersonalizada extends Error{
    constructor(message, a, b){
        super(message);
        this.a = a;
        this.b = b;
    }
    perrinchi(){
        console.log("Excpepcion de ERROR")
    }
}

// 5. Lanza una excepción personalizada
    function excepPerso(a,b){
        if(a + b == 2){
            throw new excpecionPersonalizada("ERROR ESTO SUMA 2")
        }
        return a + b
    }

    try{
        console.log(excepPerso(1,1))
    }catch(error){
        console.log("GG IZI: "+ error.message)
    }
// 6. Lanza varias excepciones según una lógica definida
    function variasExceps(a,b){
        if(a + b == 2){
            throw new excpecionPersonalizada("ERROR ESTO SUMA 2")
        }
        if(typeof b !== "number"){
            throw new TypeError("El tipo de dato no es correcto")
        }
        if(b == 0){
            throw new RangeError("Valor de denominado no Puede ser Igual a 0")
        }
        return a / b
    }

try{
    // console.log(variasExceps(1,1))
    // console.log(variasExceps(1,"5"))
    console.log(variasExceps(1,0))
}catch(error){
    if(error instanceof TypeError){
        console.log("Error de Tipo: " +  error.message); 
    }else if(error instanceof RangeError){
        console.log("Error de Rango: " + error.message)
    }
}
// 7. Captura varias excepciones en un mismo try-catch

//YA LO HICE

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["3.14", "42", "no_soy_un_numero", "10.5", undefined, "99.99 texto"];

for (const valor of valores) {
    try {
        const resultado = Number(valor);
        if (isNaN(resultado)) {
        throw new Error(`El valor "${valor}" no se puede transformar a float.`);
        }
        console.log(`Éxito: "${valor}" transformado a ->`, resultado);
    } catch (error) {
        console.log(`Error: "${valor}" -> ${error.message}`);
    }
}
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function validadString(a){
try{
        if(typeof a === "string"){
            throw new Error(`el tipo de ${a} no es valido, es un string`)
        }
        console.log(`felicidades el dato ${a} no es string`)
    }catch(error){
        console.log("error: ", error.message)
    }
}

validadString(2)
validadString("perrinchi")
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10