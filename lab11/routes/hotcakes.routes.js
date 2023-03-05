// en este archivo esta la logica de la pagina 

const { request, response } = require('express');
const express = require('express');

const hot_cakes = [
    "belgas",
    "avena",
    "japoneses",
    "chocolates",
    "salados",
    "americanos",
    "platanos",
    "minis"
];

const router = express.Router();
router.get("/lista", (request, response, next)=> 
{
    response.render("lista", {hot_cakes: hot_cakes});
})

//app.use("/pedir", (request, response, next) =>  esto funciona para post y get
router.get("/pedir", (request, response, next) => 
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

                    <form action="/lab11/pedir" method="POST">

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

router.post("/pedir", (request, response, next) => 
{
    console.log(request.body);

    
    const texto = request.body.hot_cakes;

    response.send("Pediste " + texto + "  hot cakes")

    const respuesta = "pediste " + texto +" hot cakes "

    ///aqui debe ir lo del txt
    const filesystem = require("fs");
    filesystem.writeFileSync('pediste.txt',respuesta)            
})

router.get("/pedido", (request, response, next) =>
{
    response.sendFile(path.join(__dirname, '..', 'views', 'el-archivo.html'));
});



module.exports = router; //exportar la ruta