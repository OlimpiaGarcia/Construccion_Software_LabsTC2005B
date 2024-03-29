//framework de desarrollo web: incluye librerias y guias de como trabajar
//npm: instala paquetes, permite instalar dependencias cpn un solo comando
//npm init= cuestionario lab11 crear pacckage.json
//nodemon = npm install --save-dev nodemon
//no enviar node con git ignore
//npm install express = instalar framework express

//console.log("Hola desde nodemon")
console.log("Hola desde npm")

//--------------------------------------------------------

// Estructura básica de una aplicación con express:

const express = require('express');
const app = express();   //esto crea el servidor

//-----------------------------------------------------------
//geters y setters
//configura ejs

app.set("view engine", "ejs");
app.set("views", "views");

//todo lo que pongammos con % se eecuta en el servidor
//response render compila el archivo ejs

//---------------------------------------------------------
//carpeta estatica

const path = require("path");

///
app.use(express.static(path.join(__dirname, 'public')));


//----------------------------------------------------------
//body parser

const bodyParser = require('body-parser');
//const { request, response } = require('express');

app.use(bodyParser.urlencoded({extended: false}));

/*
app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});
*/

///---------------------------------------------------------------------------------

//esto es para cifrar

const csrf = require('csurf');
const isAuth = require('./util/is-auth');


//--------------------------------------------------------
//Para preparar el entorno para trabajar con sesiones, agregamos como middleware el manejo de sesiones: 


const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//--------------------------------------------------------------

//usar la encriptacion

const csrfProtection = csrf();
app.use(csrfProtection); 


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
//midleware

app.use((request, response, next) => {
    console.log('Middleware!');
    //Le permite a la petición avanzar hacia el siguiente middleware
    next();  //solo puede haber un next con send
});

app.use('/home', (request, response, next) => {
    response.send('bienvenido a casa'); 
});

const usersRoutes = require('./routes/users.routes');

app.use('/users', usersRoutes);

const hotcakesRutas = require('./routes/hot_cakes.routes');

app.use('/lab18', isAuth, hotcakesRutas);


app.use((request, response, next) => {
    console.log('Otro middleware!');

    response.status(404)

    //Manda la respuesta
    response.send('404 ¡Lo sentimos, ya no hay hot cakes :('); 
  
});

//esto escucha al servidor
app.listen(3000);