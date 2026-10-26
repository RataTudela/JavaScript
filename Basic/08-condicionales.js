//if, else if, else


//if (si)
let age = 12;

if (age <= 12){
    console.log("Su edad es menor o igual a 12");
}else{
    console.log("Su edad es mayor o igual a 12");
}

//else (si no)


if (age > 18){
    console.log("Su edad es mayor o igual a 18");
}else{
    console.log("Su edad es menor o igual a 18");
}

//else if (si no, si)

if(age > 12){
    console.log("su edad es mayor a 12");
}else if(age == 12){
    console.log("Su edad es de 12 años");
}else if(age === "12"){
    console.log("su edad es '12' ");
}else{
    console.log("su edad es menor a 12");
}

//OPERADOR ternario se suelen utilizar para operaciones simples :v
const message = age == 12 ? "su edad es de 12 años exactos" : "su edad NO es de 12 años"
console.log(message)

//SWITCH alternativa para anidar if else, util para cuando tenemos muchas condiciones
//que verificar para una unica variable


// if(day == 0){
//     dayName == "LUNES"
// }else if (day == 1){
//     dayName == "MARTES"
// }else if (day == 2){
//     dayName = "MIERCOLES"
// } //SWITCH ES PARA EVITAR ESTE CODIGO TAN EXTENSO Y POCO OPERATIVO

let day = 7;
let dayName

switch (day){
    case 0:
        dayName = "Lunes";
        break
    case 1:
        dayName = "Martes";
        break
    case 2:
        dayName = "Miercoles";
        break
    case 3:
        dayName = "Jueves";
        break
    case 4:
        dayName = "Viernes";
        break
    case 5:
        dayName = "Sabado";
        break
    case 6:
        dayName = "Domingo";
        break
    default:
        dayName = "NUMERO DE DIA INCORRECTO";
}
console.log(dayName)