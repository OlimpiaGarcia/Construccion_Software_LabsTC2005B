//variables , constantes, consola (log, info, warn. error, assert)
// alcance de las variables

var desayuno = "hot cakes"; //se usa para declara variables pero el alcance es muy grande NO USAR

let comida = "alitas"; //se usa parra declarar variables, USAR ESTA

const precio = 120; //es unca constante y se puede modificar en el navegador del codigo NO MODIFICABLE

console.log ("Hola") // mensaje que va a salir en la consola del navegador

console.info("No hay descuentos, el precio es: " + precio) // nos sirve para desplegar info en la consola

console.warn ("no cambies el precio") //despliega advertencia en consola

console.error("No le cambies el preciooooo") //despliega error

console.assert(1==1); //comprobar, booleana. si es falsa= error. verdera, todo cool

//operadores:
// == igual ; checa que sea el mismo valor
//===estrictamente igual ; checa que sea el mismo valor y tipo
// 1 == true : true

for (var i = 1; i <= 10; i++)
{

}
console.log(i);

for (let j = 1; j <= 10; j++) 
{} //j solo vive en estas llaves, fuera de este esta muerta

console.log(j); //j no existe, se murio



