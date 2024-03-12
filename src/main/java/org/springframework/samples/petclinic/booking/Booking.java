package org.springframework.samples.petclinic.booking;

import java.util.Date;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.samples.petclinic.model.BaseEntity;
import org.springframework.samples.petclinic.owner.Owner;
import org.springframework.samples.petclinic.pet.Pet;
import org.springframework.samples.petclinic.pet.PetHotelRoom;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
@Table(name = "booking")
public class Booking extends BaseEntity {

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date startDate;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date finishDate;

    @Valid
	@OneToOne(optional = false)
    @JoinColumn(name = "pet_id")
	@OnDelete(action = OnDeleteAction.CASCADE)
    private Pet pet;

    @Valid
	@OneToOne(optional = false)
    @JoinColumn(name = "room_id")
	@OnDelete(action = OnDeleteAction.CASCADE)
    private PetHotelRoom room;

    @Valid
	@OneToOne(optional = false)
    @JoinColumn(name = "owner_id")
	@OnDelete(action = OnDeleteAction.CASCADE)
	protected Owner owner;
    
}
