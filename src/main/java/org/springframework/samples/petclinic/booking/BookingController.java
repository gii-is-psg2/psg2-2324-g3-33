package org.springframework.samples.petclinic.booking;

import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.auth.payload.response.MessageResponse;
import org.springframework.samples.petclinic.clinic.Clinic;
import org.springframework.samples.petclinic.pet.PetHotelRoom;
import org.springframework.samples.petclinic.pet.PetHotelRoomService;
import org.springframework.samples.petclinic.pet.PetType;
import org.springframework.samples.petclinic.user.User;
import org.springframework.samples.petclinic.user.UserService;
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

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/bookings")
@Tag(name = "Bookings", description = "The Bookings managemet API")
@SecurityRequirement(name = "bearerAuth")
public class BookingController {

    private final BookingService bookingService;

	private final UserService userService;

	private final PetHotelRoomService petHotelRoomService;

    @Autowired
    public BookingController(BookingService bookingService, UserService userService, PetHotelRoomService petHotelRoomService){
        this.bookingService = bookingService;
		this.userService = userService;
		this.petHotelRoomService = petHotelRoomService;
    }

    @GetMapping
    public ResponseEntity<List<Booking>> findAll(){
        return new ResponseEntity<>((List<Booking>) this.bookingService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "{bookingId}")
	public ResponseEntity<Booking> findById(@PathVariable("bookingId") int bookingId){
		RestPreconditions.checkNotNull(bookingService.findBookingById(bookingId), "Booking", "ID", bookingId);
		return new ResponseEntity<>(this.bookingService.findBookingById(bookingId), HttpStatus.OK);

	}

    @PostMapping()
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Booking> create(@RequestBody @Valid Booking booking) throws URISyntaxException {
		Booking newBooking = new Booking();
		BeanUtils.copyProperties(booking, newBooking, "id");
		Booking savedBooking = this.bookingService.saveBooking(newBooking);

		return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
	}

    @PutMapping(value = "{bookingId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Booking> update(@PathVariable("bookingId") int bookingId, @RequestBody @Valid Booking booking) {
		RestPreconditions.checkNotNull(bookingService.findBookingById(bookingId), "Booking", "ID", bookingId);
		return new ResponseEntity<>(this.bookingService.updateBooking(booking, bookingId), HttpStatus.OK);
	}

    @DeleteMapping(value = "{bookingId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<MessageResponse> delete(@PathVariable("bookingId") int id) {
		RestPreconditions.checkNotNull(bookingService.findBookingById(id), "Booking", "ID", id);
		bookingService.deleteBooking(id);
		return new ResponseEntity<>(new MessageResponse("Booking deleted!"), HttpStatus.OK);
	}

	@GetMapping(value = "rooms/{userId}")
	public ResponseEntity<List<PetHotelRoom>> findRoomsForOwners(@PathVariable("userId") int userId){
		List<User> owners=(List<User>) userService.findAllByAuthority("OWNER");
        Optional<User> owner=owners.stream().filter(u->u.getId()==userId).findFirst();
		if(!owner.isPresent()) return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
		List<PetHotelRoom> rooms=petHotelRoomService.getAll();
		return new ResponseEntity<>(rooms,HttpStatus.OK);

	}


    
}
