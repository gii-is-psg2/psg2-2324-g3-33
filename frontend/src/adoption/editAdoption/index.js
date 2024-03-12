import "../../static/css/auth/authButton.css";
import "../../static/css/auth/authPage.css";
import tokenService from "../../services/token.service";
import getIdFromUrl from "../../util/getIdFromUrl";
import getErrorModal from "../../util/getErrorModal";
import useFetchState from "../../util/useFetchState";
import { adoptionEditFormInput } from "./form/adoptionEditFormInput";
import FormGenerator from "../../components/formGenerator/formGenerator";
import { useState, useEffect, useRef } from "react";
import { formValidators } from "../../validators/formValidators";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function AdoptionEdit(){
  const id = getIdFromUrl(2);

  const emptyItem = {
    id: "",
    description: "",
    petOwner: [],
    adopter: [],
    pet: [],
  };
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [adoption, setAdoption] = useFetchState(
    emptyItem,
    `/api/v1/adoptions/${id}`,
    jwt,
    setMessage,
    setVisible,
    id
  );
  const [owners, setOwners] = useFetchState([], `/api/v1/owners`,jwt,setMessage,setVisible);
  const [pets, setPets] = useFetchState([], `/api/v1/adoptions/pets`,jwt,setMessage,setVisible);
  const [dataLoaded, setDataLoaded] = useState(false);
  const petOwner = pets.find(pet => pet.owner.user.id === user.id)?.owner;
  const adopter = owners.find(own => own.user.id == user.id)

  const editAdoptionFormRef = useRef(null);

  function handleSubmit({ values }) {
    if (!editAdoptionFormRef.current.validate()) return;

    if (id !== "new") {
      values['petOwner'] = adoption.petOwner
      values['pet'] = adoption.pet
      values['adopter'] = adopter
      fetch(`/api/v1/adoptions/${id}`, { 
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(values),
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/adoption";
        }
      })
      .catch((err) => {
        setMessage(err.message);
      });
    } else {
      const adopterPet = pets.find(pet => pet.name === values.pet)
      values['petOwner'] = petOwner
      values['description'] = ""
      values['pet'] = adopterPet
      console.log(values)
      fetch(`/api/v1/adoptions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(values),
      })
      .then((res) => {
        if (res.status === 201) {
          window.location.href = "/adoption";
        }
      })
      .catch((err) => {
        setMessage(err.message);
      });
    }
  }

  useEffect(() => {
    if (adoption.id !== "") {
      adoptionEditFormInput.forEach((input) => {
        input.defaultValue = adoption[input.name];
        setDataLoaded(true);
      });
    } else {
      adoptionEditFormInput.forEach((input) => {
        input.defaultValue = "";
      });
    }
  }, [adoption]);

  const modal = getErrorModal(setVisible, visible, message);
  return (
    <div className="auth-page-container">
      {<h2>{id !== "new" ? "Edit Adoptions" : "Add Adoptions"}</h2>}
      {modal}
      <div className="auth-form-container">
        {dataLoaded && (
          <FormGenerator
            ref={editAdoptionFormRef}
            inputs={[
              ...adoptionEditFormInput,
            ]}
            onSubmit={handleSubmit}
            buttonText="Send"
            buttonClassName="auth-button"
          />
        )}
        {!dataLoaded && (
          <FormGenerator
            ref={editAdoptionFormRef}
            inputs={[
              {
                tag: 'Pet',
                name: 'pet',
                type: 'select',
                values: [...pets.filter(pet => pet.owner.user.id === user.id && pet.name).map(pet => pet.name)],
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
