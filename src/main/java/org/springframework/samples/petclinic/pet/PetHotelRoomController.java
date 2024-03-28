package org.springframework.samples.petclinic.pet;

import java.util.List;
import java.util.Optional;

import org.h2.util.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.clinic.Clinic;
import org.springframework.samples.petclinic.clinic.ClinicService;
import org.springframework.samples.petclinic.owner.Owner;
import org.springframework.samples.petclinic.owner.OwnerService;
import org.springframework.samples.petclinic.user.User;
import org.springframework.samples.petclinic.user.UserService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/pethotelrooms")
@SecurityRequirement(name = "bearerAuth")
public class PetHotelRoomController {
    
    @Autowired
    private PetHotelRoomService petHotelRoomService;
    @Autowired
    private UserService userService;
    @Autowired
    private ClinicService clinicService;
    @Autowired
    private PetService petService;
    @Autowired
    private OwnerService ownerService;

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<PetHotelRoom> getPetHotelRoomById(@PathVariable("id") int id){
        PetHotelRoom room=petHotelRoomService.getPetHotelRoomById(id);
        if(room==null)return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(room,HttpStatus.OK);
    }
    
    @GetMapping("clinicowner/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<PetHotelRoom>> getPetHotelRoomByClinicOwner(@PathVariable("userId") int userId){
        List<User> clinicOwners=(List<User>) userService.findAllByAuthority("CLINIC_OWNER");
        Optional<User> owner=clinicOwners.stream().filter(u->u.getId()==userId).findFirst();
        if(!owner.isPresent()) return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        List<PetHotelRoom> rooms=petHotelRoomService.getPetHotelRoomsByClinicOwnerUserId(owner.get().getId());
        return new ResponseEntity<>(rooms,HttpStatus.OK);
    }
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<PetHotelRoom> updatePetHotelRoom(@PathVariable("id") int id,@RequestBody @Valid String jsoString) throws JsonMappingException, JsonProcessingException{
        PetHotelRoom updatedRoom=petHotelRoomService.getPetHotelRoomById(id);
        if(updatedRoom==null)return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        System.out.println(jsoString);
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(jsoString);
        updatedRoom.setName(jsonNode.get("name").asText());
        PetType type=petService.findPetTypeByName(jsonNode.get("petType").asText());
        updatedRoom.setAllowedType(type);
        Clinic clinic=clinicService.findClinicByName(jsonNode.get("clinic").asText());
        updatedRoom.setClinic(clinic);
        updatedRoom.setSquareMetters(jsonNode.get("squareMetters").asInt());
        petHotelRoomService.save(updatedRoom);
        return new ResponseEntity<>(updatedRoom,HttpStatus.OK);
    }
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<PetHotelRoom> createPetHotelRoom(@RequestBody @Valid String jsoString) throws JsonMappingException, JsonProcessingException{
        PetHotelRoom newRoom=new PetHotelRoom();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(jsoString);
        newRoom.setName(jsonNode.get("name").asText());
        PetType type=petService.findPetTypeByName(jsonNode.get("petType").asText());
        newRoom.setAllowedType(type);
        Clinic clinic=clinicService.findClinicByName(jsonNode.get("clinic").asText());
        newRoom.setClinic(clinic);
        newRoom.setSquareMetters(jsonNode.get("squareMetters").asInt());
        petHotelRoomService.save(newRoom);
        return new ResponseEntity<>(newRoom,HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<PetHotelRoom> updatePetHotelRoom(@PathVariable("id") int id){
        PetHotelRoom room=petHotelRoomService.getPetHotelRoomById(id);
        if(room==null)return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
        petHotelRoomService.deleteById(id);
        return new ResponseEntity<>(room,HttpStatus.OK);
    }
}