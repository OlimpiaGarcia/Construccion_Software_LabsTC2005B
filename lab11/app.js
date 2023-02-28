//framework de desarrollo web: incluye librerias y guias de como trabajar
//npm: instala paquetes, permite instalar dependencias cpn un solo comando
//npm init= cuestionario lab11 crear pacckage.json
//nodemon = npm install --save-dev nodemon
//no enviar node con git ignore
//npm install express = instalar framework express

console.log("Hola desde nodemon")
console.log("Hola desde npm")
//const { request, response } = require('express');
//--------------------------------------------------------


const express = require('express');
const app = express();   //esto crea el servidor

/*middleware paso a paso

app.use((request,response,next) => {})

*/

//Middleware: capas enmedio del software
app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next();  //solo puede haber un next con send
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    //Manda la respuesta
    response.send('¡Hola mundo!'); 
  
});



//esto escucha al servidor
app.listen(3000);