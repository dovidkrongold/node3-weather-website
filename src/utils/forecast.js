const request = require("request");




const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=8ffe3ddafec45e8a4d54e6751ddb0d57&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(
        "Cannot connect to weather service - check your internet connection",
        undefined
      );
    } else if (body.success === false) {
      callback("Unable to find location.  Try another search.", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} and currently ${body.current.temperature} degrees out.  It feels like ${body.current.feelslike} degrees.  The humidity is ${body.current.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
