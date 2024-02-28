package org.springframework.samples.petclinic.pet;

import org.springframework.samples.petclinic.clinic.Clinic;
import org.springframework.samples.petclinic.model.NamedEntity;
import org.springframework.samples.petclinic.owner.Owner;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class PetHotelRoom extends NamedEntity{

    @ManyToOne
    @NotNull
    private PetType allowedType;

    @ManyToOne
    @JoinColumn(name = "associated_clinic", referencedColumnName = "id")
    private Clinic clinic;

    @NotNull
    private int squareMetters;
}
