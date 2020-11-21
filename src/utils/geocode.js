const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoibml0aGluMTIzNCIsImEiOiJja2hxam01N2EwbDV3MnNyc2lreGY2b28zIn0.e56XbpKFHtSU_isy8mRDeg'

    request({ url, json: true }, (error, { body }) => {
      //  console.log(body.features.length,body.features[0].center[1],body.features[0].center[0])
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: "Location is " +body.features[0].place_name
            })
        }
    })
}

module.exports = geocode