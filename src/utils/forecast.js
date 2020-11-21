const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon=' + longitude +'&appid=65d9716e676ace386468e3575332f191&units=metric'
//url='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'=&lon='+longitude+'&appid=bdd731bc0e71f18a2c37dcb767c16849'
    request({ url, json: true }, (error, { body }) => {
        //console.log(body)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
           // console.log(body)
            callback('Unable to find location', undefined)
        } else {
           // console.log(body.weather[0].main)
            callback(undefined,"The temperature is around "+ body.main.temp+"°C. It’s "+body.weather[0].main +" all day today, I’m afraid. The temperature is a bit higher, at around "+ body.main.temp_max +" °C and humidity is "+body.main.humidity+"% ")
        }
    })
}

module.exports = forecast