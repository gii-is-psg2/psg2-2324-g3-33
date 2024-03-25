package org.springframework.samples.petclinic.adoption;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.exceptions.ResourceNotFoundException;
import org.springframework.samples.petclinic.owner.Owner;
import org.springframework.samples.petclinic.pet.Pet;
import org.springframework.samples.petclinic.pet.PetRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AdoptionService {

    private AdoptionRepository adoptionRepository;
	private PetRepository petRepository;

    @Autowired
    public AdoptionService(AdoptionRepository adoptionRepository, PetRepository petRepository){
        this.adoptionRepository = adoptionRepository;
		this.petRepository = petRepository;
    }

	@Transactional(readOnly = true)
	public Iterable<Pet> findAllPets() throws DataAccessException{
		return this.petRepository.findAll();
	}

    @Transactional(readOnly = true)
    public Iterable<Adoption> findAll() throws DataAccessException{
        return this.adoptionRepository.findAll();
    }

    @Transactional(readOnly = true)
	public Adoption findAdoptById(int id) throws DataAccessException {
		return this.adoptionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Owner", "ID", id));
	}

    @Transactional
	public Adoption saveAdopt(Adoption adoption) throws DataAccessException {
		adoptionRepository.save(adoption);
		return adoption;
	}

    @Transactional
	public Adoption updateAdopt(Adoption adoption, int id) throws DataAccessException {
		Adoption toUpdate = findAdoptById(id);
		BeanUtils.copyProperties(adoption, toUpdate, "id", "user");
		return saveAdopt(toUpdate);
	}

	@Transactional
	public void deleteAdopt(int id) throws DataAccessException {
		Adoption toDelete = findAdoptById(id);
		adoptionRepository.delete(toDelete);
	}
    

}
