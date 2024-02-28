package org.springframework.samples.petclinic.consultation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class TicketService {
@Autowired
private TicketRepository repository;

@Transactional(readOnly = true)
   public List<Ticket> findAll(){
        return (List<Ticket>) repository.findAll();
   }
}
