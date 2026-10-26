//funciones

function myFunc(name){
    console.log(`hola ${name}`)
}


myFunc("perro")


//funciones anonimas, func que no tienen nombre definido, se tienen que definir a una
//variable o constante

const myFunc2 = function(name){
    console.log(`hola ${name}`)
}

myFunc2("perrillo")

//Arrow functions, SINTAXIS SIMPLIFICADA :V

const myFunc3 = (name) =>{console.log(`hola ${name}`)}

myFunc3("GAAADSA")

//parametros

function sum(a, b){
    console.log(a+b)
}

sum(5,10)
sum(5)//da Nan


//SE SOLUCIONA DANDO VALORES POR DEFECTO
function defaultSum(a = 0, b = 0){
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(10,5)

//VALORES DE RETORNO

function multiplicar(a,b){
    return a * b;
}

console.log(multiplicar(5,10))
let resolve = multiplicar(5,10)
console.log(resolve)

//funciones anidadas

function extern(){
    console.log("funciona Externa")
    function intern(){
        console.log("funcion interna")
    }
    intern()
}

extern()
//intern() Error: fuera del scope


//Funciones de orden superior

function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc, "funcion de orden superior")

//forEach

let myArray = [1,2,3,4]

myArray.forEach((a) => console.log(a))