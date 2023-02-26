/*
console.log("Hola desde node");


//el modulo filesystem sirve para acceder al sistema de archivos de la compu
const filesystem = require ("fs"); //libreria

filesystem.writeFileSync ("hola.txt", "Hola desde node");

//write file vs write file sync = accede a diferentes localidades de memoria
*/

const { writeFileSync } = require("fs");
const http = require ("http");
const { text } = require("stream/consumers");

const server = http.createServer( (request, response)  =>
{
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write("<h1> Lab 8</h1>");
    response.write("Olimpia Garcia");

    response.end();
});

server.listen(3000);



// Una función que reciba un arreglo de números y devuelva su promedio.

function array()
{
    const arreglo = [2,4,6,7,2,4];
    let sum = 0
    for( let num of arreglo)
    {
        sum += num;
    }
    result = Math.floor(sum/arreglo.length);
    
    console.log(result);
}

array()
//Una función que reciba un string y escriba el string en un archivo de texto.

function string()
{
    write_text = (text);
    content =  filesys = require("fs");
    filesys.writeFileSync("texto.txt", text)
}

string()
// Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node. 

