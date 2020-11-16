const colors = require('colors');
const axios = require('axios');
const apikey = '8678f3617b5d064f7e6c8c545258943d';

const getClima = async(ciudad) => {
    try {
        const ciudadURI = encodeURI(ciudad);
        const respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}`)
        /**Instalar npm install --save kelvin-to-celsius */
        var kelvinToCelsius = require("kelvin-to-celsius")
        return kelvinToCelsius(respuesta.data.main.temp );
       
         
    }catch(err){
        if (err) throw new Error(`No existe ciudad ${ciudad}`.red)
    } 
}



module.exports ={
    getClima
};