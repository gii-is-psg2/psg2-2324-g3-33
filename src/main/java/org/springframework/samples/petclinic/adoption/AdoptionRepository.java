package org.springframework.samples.petclinic.adoption;

import org.springframework.samples.petclinic.clinic.Clinic;
import org.hibernate.mapping.List;
import org.springframework.data.repository.CrudRepository;

public interface AdoptionRepository extends CrudRepository<Adoption, Integer>{
}
