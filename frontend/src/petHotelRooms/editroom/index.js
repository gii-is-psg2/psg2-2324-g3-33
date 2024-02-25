import "../../static/css/auth/authButton.css";
import "../../static/css/auth/authPage.css";
import tokenService from "../../services/token.service";
import getIdFromUrl from "../../util/getIdFromUrl";
import getErrorModal from "../../util/getErrorModal";
import useFetchState from "../../util/useFetchState";
import { petHotelRoomEdit } from "./form/petHotelRoomForm";
import FormGenerator from "../../components/formGenerator/formGenerator";
import { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function EditPetHotelRoom() {
  const id = getIdFromUrl(2);
  const navigator = useNavigate();

  const emptyItem = {
    id: "",
    name: "",
    address: "",
    telephone: "",
    plan: null,
  };
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [petHotelRoom, setPetHotelRoom] = useFetchState(
    emptyItem,
    `/api/v1/clinics/${id}`,
    jwt,
    setMessage,
    setVisible,
    id
  );
  const [dataLoaded, setDataLoaded] = useState(false);

  const editPetHotelRoomFormRef = useRef(null);

  function handleSubmit({ values }) {
    if (!editPetHotelRoomFormRef.current.validate()) return;

    if (id !== "new") {
      fetch(`/api/v1/pethotelrooms/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(values),
      })
      .then((res) => {
        if (res.status === 200) {
          navigator("/pethotelrooms");
        }
      })
      .catch((err) => {
        setMessage(err.message);
      });;
    } else {
      fetch(`/api/v1/pethotelrooms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(values),
      })
      .then((res) => {
        if (res.status === 201) {
          navigator("/pethotelrooms");
        }
      })
      .catch((err) => {
        setMessage(err.message);
      });
    }
  }

  useEffect(() => {
    if (petHotelRoom.id !== "") {
      petHotelRoomEdit.forEach((input) => {
        input.defaultValue = petHotelRoom[input.name];
        setDataLoaded(true);
      });
    } else {
      petHotelRoomEdit.forEach((input) => {
        input.defaultValue = "";
      });
    }
  }, [petHotelRoom]);

  const modal = getErrorModal(setVisible, visible, message);

  return (
    <div className="auth-page-container">
      {<h2>{id !== "new" ? "Edit PetHotelRoom" : "Add PetHotelRoom"}</h2>}
      {modal}
      <div className="auth-form-container">
        {dataLoaded ? (
          <FormGenerator
            ref={petHotelRoomEdit}
            inputs={petHotelRoomEdit}
            onSubmit={handleSubmit}
            buttonText="Edit"
            buttonClassName="auth-button"
          />
        ) : (
          <FormGenerator
          ref={editPetHotelRoomFormRef}
          inputs={petHotelRoomEdit}
          onSubmit={handleSubmit}
          buttonText={id !== "new" ? "Edit" : "Add"}
          buttonClassName="auth-button"
        />
        )}
      </div>
    </div>
  );
}
