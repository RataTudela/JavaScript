//Strings


//Concatenacion
let myName = "Benja"
let greetings = "Hola, " + myName + "!"
console.log(greetings)
console.log(typeof greetings)

//Longitud del string
console.log(greetings.length)

//Acceso a Caracteres
console.log(greetings[0]) //H del Hola
console.log(greetings[11])//! de lo ultimo concatenado

//Metodos COMUNES
console.log(greetings.toUpperCase())
console.log(greetings.toLowerCase())
console.log(greetings.indexOf("Benja")) //Me imprime un 6, ya que en ese indice me encuentra
                                       // la palabra "benja" hola, benja!
console.log(greetings.includes("Hola"))//true o false si es q tiene la palabra "true en este caso"
console.log(greetings.slice(0,10))//slice de cortar corta desde el indice 0 hasta el 10
                                //Hola, Benj   
console.log(greetings.replace("Hola","Adios"))//Remplaca 1 palabra por otra

//template literals (plantillas laterales)

let messageEnVariasLineas =  `HOLA MI NOMBRE ES
RATILLA PILLA`
console.log(messageEnVariasLineas)


console.log(`HOLA, ${greetings}`)//para hacer esto usar comillas invertidas
                                //`` altGr + }