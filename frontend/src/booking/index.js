import React from 'react';
import '../App.css';
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from "reactstrap";
import tokenService from "../services/token.service";
import deleteFromList from "../util/deleteFromList";
import useFetchState from "../util/useFetchState";
const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function BookingList (){
    const [message, setMessage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [alerts, setAlerts] = useState([]);
    const [bookings, setBookings] = useFetchState([],`/api/v1/bookings`,jwt,setMessage,setVisible);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
      const requestList = bookings.map((booking) => {
          return (
          <tr key={booking.id}>
              <td className="text-center">{booking.startDate}</td>
              <td className="text-center">{booking.finishDate}</td>
              <td className="text-center">{booking.pet.name}</td>
              <td className="text-center">{booking.owner.firstName}</td>
              <td className="text-center">{booking.room.name}</td>
              <td className="text-center">
              </td>
            </tr>
          );
      });
      setBookingList(requestList)
    },[bookings, user])

  return (
    <div>
      <div className="admin-page-container">
        <h1 className="text-center">BOOKINGS</h1>
        <div>
          <Table aria-label="bookings" className="mt-4">
            <thead>
              <tr>
                <th width="15%" className="text-center">Start Date</th>
                <th width="15%" className="text-center">Finish Date</th>
                <th width="15%" className="text-center">Pet</th>
                <th width="15%" className="text-center">Owner</th>
                <th width="15%" className="text-center">Room</th>
              </tr>
            </thead>
            <tbody>{bookingList}</tbody>
          </Table>
        </div>
        <Button
          size="sm"
          color="primary"
          aria-label={"Created-Booking"}
          tag={Link}
          to={"/booking/new"}
          >
            Create booking
          </Button>
      </div>
    </div>
  );
}