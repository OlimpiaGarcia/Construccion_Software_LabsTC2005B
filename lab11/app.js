//framework de desarrollo web: incluye librerias y guias de como trabajar
//npm: instala paquetes, permite instalar dependencias cpn un solo comando
//npm init= cuestionario lab11 crear pacckage.json
//nodemon = npm install --save-dev nodemon
//no enviar node con git ignore
//npm install express = instalar framework express

console.log("Hola desde nodemon")
console.log("Hola desde npm")

//--------------------------------------------------------

// Estructura básica de una aplicación con express:

const express = require('express');
const app = express();   //esto crea el servidor

//----------------------------------------------------------
//body parser

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

/*
app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});
*/

//--------------------------------------------------------


/*middleware paso a paso

app.use((request,response,next) => {})

*/

/*
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

*/

/*
//------------------------------------------------------------------
//Para agregar rutas: 

app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});
///------------------------------------------------------------------

*/

app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next();  //solo puede haber un next con send
});

app.use('/home', (request, response, next) => {
    response.send('bienvenido a casa'); 
});

app.use("/pedir", (request, response, next) => 
{

    console.log (request.body);
    console.log (request.body.cafe);

    let html = `

        <!DOCTYPE html>

            <html>

                <head>

                <meta charset="utf-8">

            </head>

            <body>

                <h1>Hot cakes</h1>

                    <form action="/pedir" method="POST">

                    <fieldset>

                        <legend>Escoge tu desayuno:</legend>

                            <div>

                                <input type="checkbox" id="malteada" name="malteada">

                                <label for="malteada">Malteada</label>

                            </div>

                            <div>
                                <input type="checkbox" id="cafe" name="cafe">

                                <label for="cafe">Café</label>

                            </div>

                            <div>

                                <input type="number" id="hot_cakes" name="hot_cakes" value="0" min="0">

                                <label for="hot_cakes"> hot cakes</label>

                            </div>

                        </fieldset>

                        <br>

                        <input type="submit" value="pedir">

                    </form>

                </body>

            </html>

        `;
        response.send(html);

});



app.use((request, response, next) => {
    console.log('Otro middleware!');
    //Manda la respuesta
    response.send('¡Hola mundo!'); 
  
});

//esto escucha al servidor
app.listen(3000);