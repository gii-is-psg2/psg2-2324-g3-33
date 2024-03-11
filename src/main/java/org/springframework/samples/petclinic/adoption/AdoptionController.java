package org.springframework.samples.petclinic.adoption;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.auth.payload.response.MessageResponse;
import org.springframework.samples.petclinic.pet.Pet;
import org.springframework.samples.petclinic.util.RestPreconditions;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/adoptions")
@Tag(name = "Adoptions", description = "The Adoptions managemet API")
@SecurityRequirement(name = "bearerAuth")
public class AdoptionController {

    private final AdoptionService adoptionService;

    @Autowired
    public AdoptionController(AdoptionService adoptionService){
        this.adoptionService = adoptionService;
    }

    @GetMapping
    public ResponseEntity<List<Adoption>> findAll(){
        return new ResponseEntity<>((List<Adoption>) this.adoptionService.findAll(), HttpStatus.OK);
    }

	@GetMapping("pets")
	public ResponseEntity<List<Pet>> findAllPets(){
		return new ResponseEntity<>((List<Pet>) this.adoptionService.findAllPets(), HttpStatus.OK);
	}

	@GetMapping(value = "{adoptId}")
	public ResponseEntity<Adoption> findById(@PathVariable("adoptId") int adoptId){
		RestPreconditions.checkNotNull(adoptionService.findAdoptById(adoptId), "Adoption", "ID", adoptId);
		return new ResponseEntity<>(this.adoptionService.findAdoptById(adoptId), HttpStatus.OK);

	}

    @PostMapping()
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Adoption> create(@RequestBody @Valid Adoption adopt) throws URISyntaxException {
		Adoption newAdopt = new Adoption();
		BeanUtils.copyProperties(adopt, newAdopt, "id");
		Adoption savedAdopt = this.adoptionService.saveAdopt(newAdopt);

		return new ResponseEntity<>(savedAdopt, HttpStatus.CREATED);
	}

    @PutMapping(value = "{adoptId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Adoption> update(@PathVariable("adoptId") int adoptId, @RequestBody @Valid Adoption adopt) {
		RestPreconditions.checkNotNull(adoptionService.findAdoptById(adoptId), "Adoption", "ID", adoptId);
		return new ResponseEntity<>(this.adoptionService.updateAdopt(adopt, adoptId), HttpStatus.OK);
	}

	@DeleteMapping(value = "{adoptId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<MessageResponse> delete(@PathVariable("adoptId") int id) {
		RestPreconditions.checkNotNull(adoptionService.findAdoptById(id), "Adoption", "ID", id);
		adoptionService.deleteAdopt(id);
		return new ResponseEntity<>(new MessageResponse("Adoption deleted!"), HttpStatus.OK);
	}
    
}
