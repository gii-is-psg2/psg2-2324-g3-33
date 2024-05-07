package org.springframework.samples.petclinic.weather;

import org.springframework.samples.petclinic.weather.Weather;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/weather")
public class WeatherController {

    @GetMapping
    public ResponseEntity<Weather> getWeather() {
        Weather weatherData = generateMockWeather();
        return ResponseEntity.ok(weatherData);
    }

    private Weather generateMockWeather() {
        Weather weatherData = new Weather();
        weatherData.setCity("Sevilla");
        weatherData.setTemperature("25");
        weatherData.setClimate("Warm");
        weatherData.setHumidity("30");
        weatherData.setWindSpeed("10");
        return weatherData;
    }
}
