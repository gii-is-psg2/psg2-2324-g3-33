package org.springframework.samples.petclinic.weather;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Weather {
    private String city;
    private String temperature;
    private String climate;
    private String humidity;
    private String windSpeed;


}
