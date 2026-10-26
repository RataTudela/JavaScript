//set

//declaracion

let mySet = new Set();
let mySet2 = {}; //ESTA NO ES LA FORMA DE DEFINIR UN SET

//inicializacion

mySet = new Set(["BENJA","RATA","PILLO",132])
console.log(mySet)

//METODOS COMUNES

//add y delete
mySet.add("https://facebook.com")
console.log(mySet)


mySet.delete("BENJA") //TENGO QUE PASARLE EL VALOR, DE LO QUE QUIERO BORRAR
console.log(mySet.delete("RATA")) //RETORNA UN BOOLEAN EN ESTE CASO TRUE PORQUE SI BORRO EL ELEMENTO RATA

mySet.add("RATA")
if(mySet.delete("RATA")){
    console.log("Elemento borrado correctamente")
}else{
    console.log("Elemento no se borro o no Existe")
}

//has
console.log(mySet)
console.log(mySet.has("BENJA"))//return true if the set had the word "benja" else return false
console.log(mySet.has("PILLO"))

//CONVERTIR SET A ARRAY

let myArray = Array.from(mySet)
console.log(myArray)

//CONVERTIR ARRAY A SET

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
console.log(mySet)