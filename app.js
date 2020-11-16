const colors = require('colors');
const clima = require('./controlador/clima')
const argv = require('yargs').options({
    ciudad:{
        alias: 'c',
        desc: 'Nombre de la ciudad  para obtener el clima',
        demand: true
    }
}).argv;

let ciudad = argv.ciudad;
/*
const temp = clima.getClima(argv.ciudad);
console.log(`El clima ${ciudad} es de ${temp}`)
*/
clima.getClima(ciudad)
.then(respuesta => {
    
    if(respuesta>0 & respuesta<=10){
        console.log(`El clima de ${ciudad} es  de ${respuesta} °C clima frio`.gray);
    }
    if(respuesta>11 & respuesta<14){
        console.log(`El clima de ${ciudad} es de ${respuesta} °C clima templado`.green);
    }
    if(respuesta>=15){
        console.log(`El clima de ${ciudad} es de ${respuesta} °C clima calido`.yellow);
    }
    
 
}).catch(err => {
    console.log(err);
})

//Tarea
//1.- modifica r obtenre erro coerente
//2.- cambiara  a grados centigrados
//3.- mostrar datos con oclores
//      3.1 nublado plomo: soleado: amarillo etc
//4.- subir a  git hub