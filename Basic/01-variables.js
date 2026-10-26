// 1. CONST (Para valores que NO cambian)
const nombre = "Juan";
const fechaNacimiento = 2000;

// Si intentas cambiarlo, JavaScript da error:
nombre = "Pedro"; // ❌ ERROR: no se puede cambiar una constante


// 2. LET (Para valores que SÍ cambian)
let puntos = 0; // Empiezas con 0 puntos

puntos = 10; // ✅ Funciona perfecto (subiste de nivel)
puntos = 25; // ✅ Vuelve a cambiar sin problema


// 3. VAR (Por qué NO debemos usarlo)
var usuario = "Carlos";
var usuario = "Maria"; // ⚠️ Te permite volver a crear la variable con el mismo nombre sin avisar, lo que causa errores accidentales

