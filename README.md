# Weather App

Weather Application written in Angular and Tailwind CSS.

## OpenWeatherMap
 
[OpenWeatherMap](https://openweathermap.org/api) API is used to retrieve weather data for a location of our choice.

## Services

 - [GeoCoder API](http://api.openweathermap.org/geo/1.0/direct?): GET request is sent to find the coordinates in altitude and longitude for a desired location.
 - [Weather API](https://api.openweathermap.org/data/2.5/weather?): GET request is sent to retrieve the weather data for the location of our choice.

## Presentation

| Clear Sky Day                                        | Clear Sky Night                                      | 
|------------------------------------------------------|------------------------------------------------------|
| ![ClearSkySunny](./src/assets/cities/LasVegasUS.png) | ![ClearSkyNight](./src/assets/cities/ShanghaiCN.png) |

| Overcast Clouds                                   | Snow Day                                         | 
|---------------------------------------------------|--------------------------------------------------|
| ![OvercastClouds](./src/assets/cities/BonnDE.png) | ![Snow Sunny](./src/assets/cities/DresdenDE.png) |

| Heavy Intensity Rain Day                        | Light Rain Night                                  | 
|-------------------------------------------------|---------------------------------------------------|
| ![RainSunny](./src/assets/cities/AtlantaUS.png) | ![RainNight](./src/assets/cities/KarlsruheDE.png) |
