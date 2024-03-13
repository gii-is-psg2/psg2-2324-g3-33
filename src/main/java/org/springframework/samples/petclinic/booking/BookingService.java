package org.springframework.samples.petclinic.booking;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.exceptions.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BookingService {

    private BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository){
        this.bookingRepository = bookingRepository;
    }

    @Transactional(readOnly = true)
    public Iterable<Booking> findAll() throws DataAccessException{
        return this.bookingRepository.findAll();
    }

    @Transactional(readOnly = true)
	public Booking findBookingById(int id) throws DataAccessException {
		return this.bookingRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Owner", "ID", id));
	}

    @Transactional
	public Booking saveBooking(Booking booking) throws DataAccessException {
		bookingRepository.save(booking);
		return booking;
	}

    @Transactional
	public Booking updateBooking(Booking booking, int id) throws DataAccessException {
		Booking toUpdate = findBookingById(id);
		BeanUtils.copyProperties(booking, toUpdate, "id", "user");
		return saveBooking(toUpdate);
	}

    @Transactional
	public void deleteBooking(int id) throws DataAccessException {
		Booking toDelete = findBookingById(id);
		bookingRepository.delete(toDelete);
	}
    
}