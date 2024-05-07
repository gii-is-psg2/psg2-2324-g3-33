import React from "react";
import { BsDot, BsCarFront, BsFillAirplaneEnginesFill } from "react-icons/bs";
import { FaCheck, FaTimes } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import "../../static/css/pricing/pricingPage.css";

export default function PlanList() {

  const basicMonthlyPrice = "9,99€";
  const goldMonthlyPrice = "19,99€";
  const platinumMonthlyPrice = "29,99€";

  return (
    <div className="pricing-page-container">
      <div>
        <h1 className="pricing-title">Pricing Plans</h1>
      </div>
      <div className="section-pricing">
        <div className="pricing-container">
          <div className="pricing-card text-center" style={{ background: "#A52A2A" }}>
            <div className="title">
              <div className="icon">
                <ImTruck color="white" />
              </div>
              <h2>BASIC</h2>
              </div>
            <div className="plan-price">
              <div>
                <h4>{basicMonthlyPrice}</h4>
                <p>Mensual</p>
              </div>
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
          </div>
          {/* Plan Oro */}
          <div className="pricing-card text-center" style={{ background: "#CD853F" }}>
            <div className="title">
              <div className="icon">
                <BsCarFront color="white" />
              </div>
              <h2>GOLD</h2>
              </div>
            <div className="plan-price">
              <div>
                <h4>{goldMonthlyPrice}</h4>
                <p>Mensual</p>
              </div>
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
          </div>
          {/* Plan Platino */}
          <div className="pricing-card text-center" style={{ background: "#8B4513" }}>
            <div className="title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="icon">
                <BsFillAirplaneEnginesFill color="white" />
              </div>
              <h2>PLATINUM</h2>
            </div>
            <div className="plan-price">
            </div>
            <div className="plan-price">
              <div>
                <h4>{platinumMonthlyPrice}</h4>
                <p>Mensual</p>
              </div>
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
          </div>
          {/* END Col three */}
        </div>
      </div>
    </div>
  );
}