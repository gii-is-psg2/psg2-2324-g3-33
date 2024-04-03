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

export default function AdoptionOwnerList (){
    const [message, setMessage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [alerts, setAlerts] = useState([]);
    const [petAdoptions, setPetAdoptions] = useFetchState([],`/api/v1/adoptions`,jwt,setMessage,setVisible);
    const [petAdoptionOffersList, setPetAdoptionOffersList] = useState([]);
    const [petAdoptionRequestsList, setPetAdoptionRequestsList] = useState([]);

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
                <Button
                size="sm"
                color= "danger"
                aria-label={"delete-"+adoption.id}
                tag={Link}
                onClick={() => {deleteFromList(
                    `/api/v1/adoptions/${adoption.id}`,
                    adoption,
                    [petAdoptions, setPetAdoptions],
                    [alerts, setAlerts],
                    setMessage,
                    setVisible
                ); window.location.href = "/adoption";}}
                >
                Delete
                </Button>
              </td>
            </tr>
          );
        }
      });
      setPetAdoptionOffersList(requestList)
    },[petAdoptions, user])

    useEffect(() => {
        const requestList = petAdoptions.map((adoption) => {
          if(adoption.adopter? adoption.adopter.user.id === user.id : false){
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
                      aria-label={"edit-"+adoption.id}
                      tag={Link}
                      to={"/adoption/"+adoption.id}
                    >
                      Edit Description
                    </Button>
                    <Button
                      size="sm"
                      color="danger"
                      aria-label={"notAdopt-"+adoption.id}
                      tag={Link}
                      onClick={() => {notAdopt(adoption.petOwner, adoption.pet, adoption.id)}}
                    >
                      Not adopt
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          }
        });
        setPetAdoptionRequestsList(requestList)
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

  return (
    <div>
      <div className="admin-page-container">
        <h1 className="text-center">My adoption offers</h1>
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
            <tbody>{petAdoptionOffersList}</tbody>
          </Table>
        </div>
        <h1 className="text-center">My adoption requests</h1>
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
            <tbody>{petAdoptionRequestsList}</tbody>
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