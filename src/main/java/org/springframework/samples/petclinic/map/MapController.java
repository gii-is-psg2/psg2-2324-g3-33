package org.springframework.samples.petclinic.map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/map")
public class MapController {

    @GetMapping
    public ResponseEntity<Map> getMap() {
        Map mapData = generateMockMap();
        return ResponseEntity.ok(mapData);
    }

    private Map generateMockMap() {
        Map mapData = new Map();
        mapData.setStreet("Av. Reina Mercedes, s/n");
        mapData.setCity("Seville");
        mapData.setPostalCode(41012);
        mapData.setRegion("Andalusia");
        mapData.setCountry("Spain");
        return mapData;
    }
}
