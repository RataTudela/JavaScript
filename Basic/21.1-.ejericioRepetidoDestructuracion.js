// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array = [1,2,3,4,5];

let [valor1, valor2] = array;
console.log(valor1, valor2);
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

array = [1,2,3,4,5];
let [valor3 = 0, valor4 = 0] = array;
console.log(valor3, valor4)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let objectDes = {
    name: "juan",
    age: 12
}
let {name, age} = objectDes;

console.log(name, age);


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

objectDes = {
    name: "juan",
    age: 12
}
let {name: nombre, age: edad} = objectDes;

console.log(nombre, edad);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
objectDes = {
    name: "juan",
    age: 12,
    anid: {
        valor: "Este es un valor anidado"
    }
}

let {anid: {valor:agregado}} = objectDes;
console.log(agregado);

objectDes2 = {
    name: "juan",
    age: 12,
    anid: {
        valor: "Este es un valor anidado",
        anid2:{
            valor2: "Valor anidado 2"
        }
    }
}

let {anid: {anid2:{valor2:anidado2}}} = objectDes2;
console.log(anidado2);

// 6. Usa propagación para combinar dos arrays en uno nuevo

array = [1,2,3,4,5];
let array2 = [1,2,3,4,5];
let newArray = [...array, ...array2];
console.log(newArray);

// 7. Usa propagación para crear una copia de un array
let myArray4 = [...newArray,5,6,7,8,9,10,11]
console.log(myArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
objectDes = {
    name: "juan",
    age: 12
}

objectDes2 = {
    name: "juan",
    age: 12,
    anid: {
        valor: "Este es un valor anidado",
        anid2:{
            valor2: "Valor anidado 2"
        }
    },
    func: function(){
        console.log("LA OFERTA DEL SUPERMERCADOOOOOOO");
    }
}
let newObject = {...objectDes, ...objectDes2};

console.log(newObject);

objectDes2.func()

// 9. Usa propagación para crear una copia de un objeto
objectDes = {
    name: "juan",
    age: 12
}

let newObject2 = {...objectDes, email : "perrillochico@jauncillicl.ocl"};

console.log(newObject2);

// 10. Combina desestructuración y propagación
const usuario = {
    rut : 9396,
    nombree: "juanceto.d",
    detalles: "roto",
    estado: true
}

let {rut, nombree, ...loQueSobra} = usuario;
console.log(rut);
console.log(nombree);
console.log(loQueSobra);