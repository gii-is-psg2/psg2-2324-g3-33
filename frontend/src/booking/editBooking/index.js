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
  const [rooms, setRooms] = useFetchState([], `/api/v1/bookings/rooms/${user.id}`,jwt,setMessage,setVisible);
  const [dataLoaded, setDataLoaded] = useState(false);
  const bookingUser = owners.find(own => own.user.id == user.id);
  const [pets, setPets] = useFetchState([], `/api/v1/adoptions/pets`,jwt,setMessage,setVisible);
  const owner = pets.find(pet => pet.owner.user.id === user.id)?.owner;
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedPets, setSelectedPets] = useState([]);
  
  const editAdoptionFormRef = useRef(null);

  function handleSubmit({ values }) {
    if (!editAdoptionFormRef.current.validate()) return;
      const roomName = rooms.find(room => room.name === values.room)
      const pet = pets.find(p => p.name === values.pet)
      values['room'] = roomName
      values['pet'] = pet
      values['owner'] = owner
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
        else{
          setMessage("Ya hay una reserva para la misma mascota o la misma habitación");
          setVisible(true);   
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

    const handleChangeRoom = (event) => {
      const roomName = event.target.value;
      const room = rooms.filter(room => room.name === roomName).map(room => room);
      setSelectedRooms(room);
      console.log(room);
    }

    const handleChangePet = (event) => {
      const petName = event.target.value;
      const pet = pets.filter(pet => pet.name === petName).map(pet => pet);
      setSelectedPets(pet);
  
    }



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
              ...bookingEditFormInput,
              {
                tag: 'Room',
                name: 'room',
                type: 'select',
                values: [...rooms.filter(room => (selectedPets.length > 1? selectedPets.type.name === room.allowedType.name: true)).map(room => room.name)],
                defaultValue: '',
                isRequired: true,
                validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
                onchange: handleChangeRoom
              },
              {
                tag: 'Pet',
                name: 'pet',
                type: 'select',
                values: [...pets.filter(pet => pet.owner.user.id === user.id && pet.name && (selectedRooms.length > 1 ? pet.type.name === selectedRooms.allowedType.name : true)).map(pet => pet.name)],
                defaultValue: '',
                isRequired: true,
                validators: [formValidators.notEmptyValidator, formValidators.notNoneTypeValidator],
                onchange: handleChangePet
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