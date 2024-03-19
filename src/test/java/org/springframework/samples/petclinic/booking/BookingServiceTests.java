package org.springframework.samples.petclinic.booking;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.samples.petclinic.exceptions.ResourceNotFoundException;
import org.springframework.samples.petclinic.util.EntityUtils;

@SpringBootTest
@AutoConfigureTestDatabase
public class BookingServiceTests {

  @Autowired
  protected BookingService bookingService;

  @Test
  void shouldFindBookingById() {
    Booking booking1 = this.bookingService.findBookingById(1);
    assertThat(booking1.getPet().getName()).startsWith("");
    assertEquals("", booking1.getOwner().getFirstName());
  }

  @Test
  void shouldNotFindBookingByIncorrectId() {
    assertThrows(ResourceNotFoundException.class, () -> this.bookingService.findBookingById(100));
  }

  @Test
  void shouldFindAll() {
    Iterable<Booking> bookings = this.bookingService.findAll();

  }

}