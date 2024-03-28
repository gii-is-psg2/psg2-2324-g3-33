package org.springframework.samples.petclinic.booking;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.Date;
import java.util.Collection;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.samples.petclinic.exceptions.ResourceNotFoundException;
import org.springframework.samples.petclinic.owner.OwnerService;
import org.springframework.samples.petclinic.pet.PetHotelRoomService;
import org.springframework.samples.petclinic.pet.PetService;
import org.springframework.samples.petclinic.util.EntityUtils;

import jakarta.transaction.Transactional;

@SpringBootTest
@AutoConfigureTestDatabase
class BookingServiceTests {

  @Autowired
  protected BookingService bookingService;

  @Autowired
  protected PetHotelRoomService petHotelRoomService;

  @Autowired
  protected OwnerService ownerService;

  @Autowired
  protected PetService petService;

  @Test
  void shouldFindBookingById() {
    Booking booking1 = this.bookingService.findBookingById(1);
    assertThat(booking1.getPet().getName()).startsWith("");
    assertEquals("George", booking1.getOwner().getFirstName());
  }

  @Test
  void shouldNotFindBookingByIncorrectId() {
    assertThrows(ResourceNotFoundException.class, () -> this.bookingService.findBookingById(100));
  }

  @Test
  void shouldFindAll() {
    Collection<Booking> bookings = (Collection<Booking>) this.bookingService.findAll();
    Booking booking1 = EntityUtils.getById(bookings, Booking.class, 1);
    assertThat(booking1.getPet().getName()).startsWith("");
    assertEquals("George", booking1.getOwner().getFirstName());
    Booking booking2 = EntityUtils.getById(bookings, Booking.class, 2);
    assertThat(booking2.getPet().getName()).startsWith("");
    assertEquals("Jean", booking2.getOwner().getFirstName());
  }

  @Test
  @Transactional
  void shouldInsertBookingIntoDatabaseWithNewId() {
    Collection<Booking> bookings = (Collection<Booking>) this.bookingService.findAll();
    int initial = bookings.size();

    Booking booking = new Booking();
    booking.setStartDate(Date.valueOf("2024-01-01"));
    booking.setFinishDate(Date.valueOf("2024-01-02"));
    booking.setPet(petService.findPetById(2));
    booking.setRoom(petHotelRoomService.getPetHotelRoomById(2));
    booking.setOwner(ownerService.findOwnerById(4));
    this.bookingService.saveBooking(booking);
    assertThat(booking.getId()).isNotEqualTo(0);

    bookings = (Collection<Booking>) this.bookingService.findAll();
    assertThat(bookings.size()).isEqualTo(initial + 1);
  }

  @Test
  @Transactional
  void shouldThrowExceptionInsertingBookingInSameRoomAtSameDate() {
    Booking booking = new Booking();
    booking.setStartDate(Date.valueOf("2024-01-01"));
    booking.setFinishDate(Date.valueOf("2024-01-02"));
    booking.setPet(petService.findPetById(2));
    booking.setRoom(petHotelRoomService.getPetHotelRoomById(2));
    booking.setOwner(ownerService.findOwnerById(4));
    this.bookingService.saveBooking(booking);

    Booking booking2 = new Booking();
    booking2.setStartDate(Date.valueOf("2024-01-01"));
    booking2.setFinishDate(Date.valueOf("2024-01-02"));
    booking2.setPet(petService.findPetById(2));
    booking2.setRoom(petHotelRoomService.getPetHotelRoomById(2));
    booking2.setOwner(ownerService.findOwnerById(4));
    assertThrows(IllegalArgumentException.class, () -> this.bookingService.saveBooking(booking2));
  }

  @Test
  @Transactional
  void shouldUpdateBooking() {
    Booking booking = this.bookingService.findBookingById(1);
    booking.setStartDate(Date.valueOf("2024-01-01"));
    bookingService.saveBooking(booking);

    Booking updatedBooking = bookingService.findBookingById(1);
    assertEquals(booking.getStartDate(), updatedBooking.getStartDate());
  }

  @Test
  @Transactional
  void shouldDeleteBooking() {
    Collection<Booking> bookings = (Collection<Booking>) this.bookingService.findAll();
    int initial = bookings.size();

    Booking booking = this.bookingService.findBookingById(1);
    this.bookingService.deleteBooking(booking.getId());

    bookings = (Collection<Booking>) this.bookingService.findAll();
    assertThat(bookings.size()).isEqualTo(initial - 1);
  }

}