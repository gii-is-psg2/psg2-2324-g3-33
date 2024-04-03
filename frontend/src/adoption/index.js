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

export default function AdoptionList (){
    const [message, setMessage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [alerts, setAlerts] = useState([]);
    const [petAdoptions, setPetAdoptions] = useFetchState([],`/api/v1/adoptions`,jwt,setMessage,setVisible);
    const [petAdoptionList, setPetAdoptionList] = useState([]);
    const [petAdoptionOwnList, setPetAdoptionOwnList] = useState([]);

    useEffect(() => {
      const requestList = petAdoptions.map((adoption) => {
        if(!adoption.adopter && adoption.petOwner.user.id != user.id){
          return (
            <tr key={adoption.id}>
              <td className="text-center">{adoption.petOwner.firstName}</td>
              <td className="text-center">{adoption.pet.name}</td>
              <td className="text-center">{adoption.pet.type.name}</td>
              <td className="text-center">{adoption.pet.birthDate}</td>
              <td className="text-center">{adoption.adopter? adoption.adopter.firstName: 'None'}</td>
              <td className="text-center">{adoption.description}</td>
              <td className="text-center">
                <ButtonGroup> 
                  <Button
                    size="sm"
                    color="primary"
                    aria-label={"adopt-"+adoption.id}
                    tag={Link}
                    to={"/adoption/"+adoption.id}
                  >
                    Adopt
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          );
        }})
      setPetAdoptionList(requestList)
    },[petAdoptions, user])

    useEffect(() => {
      const requestList = petAdoptions.map((adoption) => {
        let owner = adoption.petOwner.user
        if(owner.id == user.id){ 
          return (
          <tr key={adoption.id}>
              <td className="text-center">{adoption.petOwner.firstName}</td>
              <td className="text-center">{adoption.pet.name}</td>
              <td className="text-center">{adoption.pet.type.name}</td>
              <td className="text-center">{adoption.pet.birthDate}</td>
              <td className="text-center">{adoption.adopter? adoption.adopter.firstName: 'None'}</td>
              <td className="text-center">{adoption.description}</td>
              <td className="text-center">
                <ButtonGroup>
                  {adoption.description.length >0 && <Button
                    size="sm"
                    color= "success"
                    aria-label={"acept-"+adoption.id}
                    tag={Link}
                    onClick={() => {aceptAdoption(adoption.pet, adoption.adopter, adoption.id)}}
                  >
                    Acept
                  </Button>}
                  {adoption.description.length >0 && <Button
                    size="sm"
                    color= "warning"
                    aria-label={"acept-"+adoption.id}
                    tag={Link}
                    onClick={() => {notAdopt(adoption.petOwner, adoption.pet, adoption.id)}}
                  >
                    No acept
                  </Button>}
                </ButtonGroup>
              </td>
            </tr>
          );
        }
      })
        setPetAdoptionOwnList(requestList)
    },[petAdoptions, user])

    function notAdopt(petOwner, pet, id){
      let editAdoption = {}
      editAdoption['petOwner'] = petOwner
      editAdoption['pet'] = pet
      editAdoption['adopter'] = null
      editAdoption['description'] = ''
      console.log(editAdoption)
      fetch(`/api/v1/adoptions/${id}`, { 
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(editAdoption),
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/adoption";
        }
      })
      .catch((err) => {
        setMessage(err.message);
      });

    }

    function aceptAdoption(pet, adopter, adoptionId){
      console.log(adoptionId)
      let editPet = {...pet}
      editPet['owner'] = adopter
      fetch(`/api/v1/pets/${pet.id}`, { 
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(editPet),
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/myPets";
        }
      })
      .catch((err) => {
        setMessage(err.message);
      });
      fetch(`/api/v1/adoptions/${adoptionId}`, { 
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      })
    }

  return (
    <div>
      <div className="admin-page-container">
        <h1 className="text-center">Adoptions</h1>
        <Button
          size="sm"
          style={{color: "blue", backgroundColor: "white"}}
          aria-label={"Created-Adoption"}
          tag={Link}
          to={"/adoption/Owner/"+user.id}
          >
            My adoptions
          </Button>
        <div>
          <Table aria-label="Adoptions" className="mt-4">
            <thead>
              <tr>
                <th width="15%" className="text-center">Pet Ower</th>
                <th width="15%" className="text-center">Pet Name</th>
                <th width="15%" className="text-center">Pet Type</th>
                <th width="15%" className="text-center">Pet BirthDate</th>
                <th width="15%" className="text-center">Adopter</th>
                <th width="15%" className="text-center">Description</th>
                <th width="30%" className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>{petAdoptionList}</tbody>
          </Table>
        </div>
        <h1>Adoptions pending confirmation</h1>
        <div>
          <Table aria-label="Adoptions" className="mt-4">
            <thead>
              <tr>
                <th width="15%" className="text-center">Pet Ower</th>
                <th width="15%" className="text-center">Pet Name</th>
                <th width="15%" className="text-center">Pet Type</th>
                <th width="15%" className="text-center">Pet BirthDate</th>
                <th width="15%" className="text-center">Adopter</th>
                <th width="15%" className="text-center">Description</th>
                <th width="30%" className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>{petAdoptionOwnList}</tbody>
          </Table>
        </div>
        <Button
          size="sm"
          color="primary"
          aria-label={"Created-Adoption"}
          tag={Link}
          to={"/adoption/new"}
          >
            Create adoption
          </Button>
      </div>
    </div>
  );
}