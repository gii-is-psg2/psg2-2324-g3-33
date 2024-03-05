package org.springframework.samples.petclinic.adoption;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.samples.petclinic.model.BaseEntity;
import org.springframework.samples.petclinic.owner.Owner;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.Valid;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "adoption")
public class Adoption extends BaseEntity{

    private String description;

    @Valid
	@OneToOne(optional = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	protected Owner owner;

    
    
}
