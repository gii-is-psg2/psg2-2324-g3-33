import "../../static/css/auth/authButton.css";
import "../../static/css/auth/authPage.css";
import tokenService from "../../services/token.service";
import getIdFromUrl from "../../util/getIdFromUrl";
import getErrorModal from "../../util/getErrorModal";
import useFetchState from "../../util/useFetchState";
import { bookingEditFormInput } from "./form/bookingEditFormInput";
import FormGenerator from "../../components/formGenerator/formGenerator";
import { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom";
import { formValidators } from "../../validators/formValidators";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function BookingEdit(){
  const id = getIdFromUrl(2);

  const emptyItem = {
    id: "",
    startDate: "",
    finishDate: "",
    pet: [],
    room: [],
    owner: [],
  };
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [booking, setBooking] = useFetchState(
    emptyItem,
    `/api/v1/bookings/${id}`,
    jwt,
    setMessage,
    setVisible,
    id
  );
  const [owners, setOwners] = useFetchState([], `/api/v1/owners`,jwt,setMessage,setVisible);
  const [rooms, setRooms] = useFetchState([], `/api/v1/bookings/rooms`,jwt,setMessage,setVisible);
  const [dataLoaded, setDataLoaded] = useState(false);
  const bookingUser = owners.find(own => own.user.id == user.id)

  const editAdoptionFormRef = useRef(null);

  function handleSubmit({ values }) {
    if (!editAdoptionFormRef.current.validate()) return;
      const roomName = rooms.find(room => room.name === values.romm)
      values['room'] = booking.room
      values['startDate'] = booking.startDate
      values['finishDate'] = booking.finishDate
      values['pet'] = booking.pet
      values['bookingUser'] = bookingUser
      console.log(values)
      fetch(`/api/v1/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(values),
      })
      .then((res) => {
        if (res.status === 201) {
          window.location.href = "/booking";
        }
      })
      .catch((err) => {
        setMessage(err.message);
      });
  }

  useEffect(() => {
    if (booking.id !== "") {
      bookingEditFormInput.forEach((input) => {
        input.defaultValue = booking[input.name];
        setDataLoaded(true);
      });
    } else {
      bookingEditFormInput.forEach((input) => {
        input.defaultValue = "";
      });
    }
  }, [booking]);

  const modal = getErrorModal(setVisible, visible, message);
  return (
    <div className="auth-page-container">
      {<h2>{"Add Booking"}</h2>}
      {modal}
      <div className="auth-form-container">
        {(
          <FormGenerator
            ref={editAdoptionFormRef}
            inputs={[
              {
                tag: 'Room',
                name: 'room',
                type: 'select',
                values: [...rooms.filter(room => room.owner.user.id === user.id && room.name).map(room => room.name)],
                defaultValue: '',
                isRequired: true,
                validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
              }
            ]}
            onSubmit={handleSubmit}
            buttonText="Post"
            buttonClassName="auth-button"
          />
        )}
      </div>
    </div>
  );
}