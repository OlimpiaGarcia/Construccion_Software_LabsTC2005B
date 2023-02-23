console.log("Hola desde node");


//el modulo filesystem sirve para acceder al sistema de archivos de la compu
const filesystem = require ("fs"); //libreria

filesystem.writeFileSync ("hola.txt", "Hola desde node");