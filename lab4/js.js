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


alert ("Hola")
let nombre = prompt ("Como te llamas"); // permite agregar tenxto en una ventana emergente
console.log(nombre);

let is_hungry = confirm("tines hambre?");
console.log(is_hungry);


// funciones tradicionales
function numero_alitas() {
    return 12;
}

console.log(numero_alitas());

//arrow function
let cantidad_alitas = () => { return 12 };
console.log(cantidad_alitas());

let boton = document.getElementById("contador de clicks");
boton.innerHTML =  "cuenta clicks";
boton.onclick = () =>  //funcion anonima
{
    let contador_clicks = Number(document.getElementById("clicks").innerHTML);
    contador_clicks++;
    console.log(contador_clicks);
    document.getElementById("clicks").innerHTML = contador_clicks;
}

//arreglo
const arreglo = ["Elemento"]; //es const por que siempre es arrglo, lo que esta dentro no es constante
arreglo.push("otro elemento"); //el tipo de dato en los arreglos es dinamico, puedes meterle lo que quieras y campechanear
console.log(arreglo);           // ya sea numero. o string o cosas asi
arreglo ["dos"] = 2;
arreglo.length = 10;
console.log(arreglo);


//recorrer los valores del arreglo
for (let valor of arreglo)
{
    console.log(valor);
} 

//recorrer los indices del arreglo
for (let elemento in arreglo)
{
    console.log(elemento);
}

//objetos
let objeto = 
{
    atributo_1: "valor 1",
    atributo_2: 2
}

objeto.atributo_3 = arreglo;

console.log(objeto);
console.log(objeto.atributo_1);

for (let atributo in objeto) {
    console.log(atributo);
}

