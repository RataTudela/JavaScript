//MAP COLECCION DE ELEMENTOS, DONDE CADA ELEMENTO NO ES UNICO, 
//CADA ELEMENTO ESTA FORMADO POR UN PAR DE ELEMENTOS
//"KEY" Y "ESTRUCTURA" ES UN DICCIONARIO BASICAMENTE :V

let myMap = new Map()

console.log(myMap)

myMap = new Map([
    ["name","Rata"],
    ["email",20],
    ["age",37]
])

console.log(myMap)

//METODOS Y PROPIEDADES

//set ACTUALIZAR UN ELEMENTO O AGREGARLO

myMap.set("alias","RATATUDELA")
console.log(myMap)


myMap.set("name","Benja")
console.log(myMap)

//get

console.log(myMap.get("name"))

//has

console.log(myMap.has("name"))
console.log(myMap.has("surname"))

//delete
myMap.delete("email")
console.log(myMap)

//clear

// myMap.clear()
// console.log(myMap)

//propiedades

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.size)
console.log(myMap.entries())