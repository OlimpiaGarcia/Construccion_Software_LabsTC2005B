/* 

    1:
    Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados 
    y cubos. Utiliza document.write para producir la salida
    2:
    Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. 
    Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en 
    escribir la respuesta.
    3:
    Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de números negativos en el arreglo, 
    la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
    4:
    Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los promedios de 
    cada uno de los renglones de la matriz.
    5:
    Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.
    6:
    Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses, alguna 
    problemática que hayas identificado en algún ámbito, un problema de programación que hayas resuelto en otro 
    lenguaje, un problema de la ACM, entre otros). El problema debe estar descrito en un documento HTML, y la 
    solución implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto además de su 
    constructor deben tener al menos 2 métodos. Muestra los resultados en el documento HTML.
*/

//
function Tabla()
{
    let numero = window.prompt("Ingresa un numero");
    let tabla

    tabla += "<table><tr><th>Original</th><th>Cuadrado</th><th>Cubo</th></tr>";
    
    let cuadrado
    let cubo
    for (let i = 1; i <= numero; i++)
    {
        cuadrado = ( i* i);
        console.log(cuadrado);
        cubo = (i * i * i);
        console.log(cubo);
        tabla += `<tr><td>${i}</td><td>${cuadrado}</td><td>${cubo}</td></tr>`;
    }
    
    tabla += "</table>";

    document.getElementById("table").innerHTML = tabla;
}

function suma()
{
    let numero_1 = Math.floor(Math.random() * 100 );
    let nuemro_2 = Math.floor(Math.random() * 100 );

    let resultado = numero_1 + nuemro_2;

    inicio = Date.now()
    let respuesta = prompt ("Ingresa la respuesta a la suma de " + numero_1 + "+" + nuemro_2)
    fin = Date.now()

    let tiempo = (fin - inicio) / 1000;

    let sumatoria

    if (respuesta != resultado)
    {
        sumatoria = ("La respuesta es incorrecta."  + "   Tiempo de ejecución: " + " " + tiempo + " segundos")
    }
    else 
    {
        sumatoria = ("La respuesta es correcta. "  + "    Tiempo de ejecución: " + " " + tiempo + " segundos" )
    }

    document.getElementById("sumatoria").innerHTML = sumatoria;
}

function contador()
{
    let entrada = prompt("ingresa la lista de numeros " + [])
    
}


