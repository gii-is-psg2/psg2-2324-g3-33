package org.springframework.samples.petclinic.pet;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PetHotelRoomService {
    @Autowired
    private PetHotelRoomRepository repository;

    @Transactional(readOnly = true)
    public List<PetHotelRoom> getAll(){
        return (List<PetHotelRoom>) repository.findAll();
    }

    @Transactional(readOnly = true)
    public PetHotelRoom getPetHotelRoomById(int id){
        Optional<PetHotelRoom>opt=repository.findById(id);
        if(!opt.isPresent())return null;
        return opt.get();
    }
    @Transactional
    public void save(PetHotelRoom room){
        repository.save(room);
    }
    @Transactional
    public void deleteById(int id){
        repository.deleteById(id);
    }
    @Transactional(readOnly = true)
    public List<PetHotelRoom> getPetHotelRoomsByClinicOwnerUserId(int clinicOwnerUserId){
        List<PetHotelRoom> rooms=(List<PetHotelRoom>) repository.findAll();
        return rooms.stream().filter(r->r.getClinic().getClinicOwner().getUser().getId()==clinicOwnerUserId).toList();
    }
}
