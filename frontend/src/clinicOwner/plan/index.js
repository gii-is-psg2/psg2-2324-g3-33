import React, { useEffect, useState } from "react";
import { BsDot, BsCarFront, BsFillAirplaneEnginesFill } from "react-icons/bs";
import { FaCheck, FaTimes } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import "../../static/css/pricing/pricingPage.css";
import { fetchWithPricingInterceptor } from "pricing4react";
export default function PricingPlan () {

  const [plan, setPlan] = useState(null);
  const [clinicOwner, setClinicOwner] = useState({});
  const [message, setMessage] = useState(null);  
  const jwt = JSON.parse(window.localStorage.getItem("jwt"));
  
  useEffect(()=>{ setUp();},[]);
  
  async function setUp(){
    const myclinicowner = await (
      await fetchWithPricingInterceptor(`/api/v1/plan`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
    ).json();
    if (myclinicowner.message) setMessage(myclinicowner.message);
    else{
      setPlan(myclinicowner.plan);
      setClinicOwner(myclinicowner);
    } 
  }

  async function changePlan(event, plan) {
    event.preventDefault();

    await fetchWithPricingInterceptor("/api/v1/plan", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plan),
    });
    window.location.href = "/plan";
  }

  
    
    if (message) {
      return <h2 className="text-center">{message}</h2>;
    }

    return (
      <div className="pricing-page-container">
        <div>
          <h1 className="pricing-title">My Plan - {plan}</h1>
        </div>
        <div className="section-pricing">
          <div className="pricing-container">
            <div className="pricing-card text-center" style={{background:  '#A52A2A' }}>
              <div className="title">
                <div className="icon">
                  <ImTruck color="white" />
                </div>
                <h2>BASIC</h2>
                </div>
              <div className="plan-price">
                <h4>9,99</h4>

                <h5>€</h5>
              </div>
              <div className="option">
                <ul>
                <li>
                  <BsDot color="white" /> 2 pets
                </li>
                <li>
                  <BsDot color="white" /> 1 visit per month and pet
                </li>
                <li>
                  <FaTimes color="red" /> Pet Hotel
                </li>
                <li>
                  <FaTimes color="red" /> Adoptions
                </li>
                <li>
                  <FaTimes color="red" /> Online Consultation
                </li>
                <li>
                  <FaTimes color="red" /> Service level agreement (SLA)
                </li>
                </ul>
              </div>
              {plan === "BASIC" ? (
                <button disabled> ACTIVE </button>
                ) : (
                <button onClick={(e) => changePlan(e, "BASIC")}> CHANGE </button>
                )}
            </div>
            {/* END Col one */}
            <div className="pricing-card text-center" style={{background:  '#CD853F' }}>
              <div className="title">
                <div className="icon">
                  <BsCarFront color="white" />
                </div>
                <h2>GOLD</h2>
              </div>
              <div className="plan-price">
                <h4>19,99</h4>

                <h5>€</h5>
              </div>
              <div className="option">
                <ul>
                <li>
                  <BsDot color="white" /> 4 pets
                </li>
                <li>
                  <BsDot color="white" /> 3 visits per month and pet
                </li>
                <li>
                  <FaCheck color="green" /> Pet Hotel
                </li>
                <li>
                  <FaCheck color="green" /> Adoptions
                </li>
                <li>
                  <FaTimes color="red" /> Online Consultation
                </li>
                <li>
                  <FaCheck color="green" /> Service level agreement (SLA)
                </li>
                </ul>
              </div>
              {plan === "GOLD" ? (
                <button disabled> ACTIVE </button>
                ) : (
                <button onClick={(e) => changePlan(e, "GOLD")}> CHANGE </button>
                )}
            
            </div>
            {/* END Col two */}
            <div className="pricing-card text-center" style={{background:  "#8B4513" }}>
              <div
                className="title"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="icon">
                  <BsFillAirplaneEnginesFill color="white" />
                </div>
                <h2>PLATINUM</h2>
              </div>
              <div className="plan-price">
                <h4>29,99</h4>

                <h5>€</h5>
              </div>
              <div className="option">
                <ul>
                <li>
                  <BsDot color="white" /> 7 pets
                </li>
                <li>
                  <BsDot color="white" /> 7 visits per month and pet
                </li>
                <li>
                  <FaCheck color="green" /> Pet Hotel
                </li>
                <li>
                  <FaCheck color="green" /> Adoptions
                </li>
                <li>
                  <FaCheck color="green" /> Online Consultation
                </li>
                <li>
                  <FaCheck color="green" /> Service level agreement (SLA)
                </li>
                </ul>
              </div>
            {plan === "PLATINUM" ? (
                <button disabled> ACTIVE </button>
                ) : (
                <button onClick={(e) => changePlan(e, "PLATINUM")}> CHANGE </button>
                )}
            </div>
            {/* END Col three */}
          </div>
        </div>
      </div>
    );
}