import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavLink, NavItem, Nav, NavbarText, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import tokenService from './services/token.service';
import jwt_decode from "jwt-decode";
import { Feature, On, Default,ErrorFallback, Loading, feature } from "pricing4react";
import useFetchState from './util/useFetchState';
import contrato  from './agreements/Acuerdo-con-el-cliente.pdf';


function AppNavbar() {
    const [roles, setRoles] = useState([]);
    const [username, setUsername] = useState("");
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState(null); 
    const jwt = tokenService.getLocalAccessToken();
    const [collapsed, setCollapsed] = useState(true);
    const [associatedPlan, setAssociatedPlan] = useState("");
    const [vet, setVet] = useFetchState(
        [],
        `/api/v1/vets`,
        jwt,
        setMessage,
        setVisible
    );
    const [owner, setOwner] = useFetchState(
        [],
        `/api/v1/owners`,
        jwt,
        setMessage,
        setVisible
    );

    const toggleNavbar = () => setCollapsed(!collapsed);

    useEffect(() => {
        if (jwt) {
            setRoles(jwt_decode(jwt).authorities);
            setUsername(jwt_decode(jwt).sub);
        }
    }, [jwt])

    useEffect(() => {
        if(vet.length > 0){
            for(let i = 0; i < vet.length; i++){
                if(vet[i].user.username === username){
                    setAssociatedPlan(vet[i].clinic.plan);
                    break;
                }
            }
        }
    }, [vet])

    useEffect(() => {
        if(owner.length > 0){
            for(let i = 0; i < owner.length; i++){
                if(owner[i].user.username === username){
                    setAssociatedPlan(owner[i].clinic.plan);
                    break;
                }
            }
        }  
    }, [owner]) 

    let adminLinks = <></>;
    let ownerLinks = <></>;
    let userLinks = <></>;
    let userLogout = <></>;
    let publicLinks = <></>;
    let plans = <></>;

    roles.forEach((role) => {
        if (role === "ADMIN") {
            adminLinks = (
                <>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/owners">Owners</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/pets">Pets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/vets">Vets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/consultations">Consultations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/clinicOwners">Clinic Owners</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/clinics">Clinics</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/users">Users</NavLink>
                    </NavItem>
                </>
            )
        }
        if (role === "OWNER") {
            ownerLinks = (
                <>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/myPets">My Pets</NavLink>
                    </NavItem>
                    <Feature>
                            <On expression={feature("haveOnlineConsultation")}>
                            <NavItem>
                                <NavLink style={{ color: "white" }} tag={Link} to="/consultations">Consultations</NavLink>
                            </NavItem>
                            </On>
                            <Default>
                                    <p></p>
                            </Default>
                            <Loading>
                                    <p></p>
                            </Loading>
                            <ErrorFallback>
                                    <p></p>
                            </ErrorFallback>
                    </Feature>
                    <Feature>
                            <On expression={feature("haveAdoptions")}>
                            <NavItem>
                                <NavLink style={{ color: "white" }} tag={Link} to="/adoption">Adoption</NavLink>
                            </NavItem>
                             </On>
                            <Default>
                                    <p></p>
                            </Default>
                            <Loading>
                                    <p></p>
                            </Loading>
                            <ErrorFallback>
                                    <p></p>
                            </ErrorFallback>
                    </Feature>
                    
                    <Feature>
                            <On expression={feature("havePetHotel")}>
                            <NavItem>
                                <NavLink style={{ color: "white" }} tag={Link} to="/booking">Booking</NavLink>
                             </NavItem>
                             </On>
                            <Default>
                                    <p></p>
                            </Default>
                            <Loading>
                                    <p></p>
                            </Loading>
                            <ErrorFallback>
                                    <p></p>
                            </ErrorFallback>
                    </Feature>

                </>
                    
            )

            plans = (
                <NavbarText style={{ color: "white" }} className="justify-content-end"> Plan - {associatedPlan}</NavbarText>
            )
        }
        if (role === "VET") { 
            ownerLinks = (
                <>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/consultations">Consultations</NavLink>
                    </NavItem>
                </>
            )

            plans = (
                <NavbarText style={{ color: "white" }} className="justify-content-end"> Plan - {associatedPlan}</NavbarText>
            )
        }

        if (role === "CLINIC_OWNER") {
            ownerLinks = (
                <>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/plan">Plan</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/clinics">Clinics</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/pethotelRooms">PetHotelRooms</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/owners">Owners</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/consultations">Consultations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "white" }} tag={Link} to="/vets">Vets</NavLink>
                    </NavItem>
                </>
            )
        }
    })

    if (!jwt) {
        publicLinks = (
            <>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="agreement" href={contrato} target="_blank">Client Agreement</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="docs" tag={Link} to="/docs">Docs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="plans" tag={Link} to="/plans">Pricing Plans</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="register" tag={Link} to="/register">Register</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="login" tag={Link} to="/login">Login</NavLink>
                </NavItem>
            </>
        )
    } else {
        userLinks = (
            <>
                <NavItem>
                    <NavLink style={{ color: "white" }} tag={Link} to="/dashboard">Dashboard</NavLink>
                </NavItem>
            </>
        )
        userLogout = (
            <>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="agreement" href={contrato} target="_blank">Client Agreement</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="docs" tag={Link} to="/docs">Docs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ color: "white" }} id="plans" tag={Link} to="/plans">Pricing Plans</NavLink>
                </NavItem>
                <NavbarText style={{ color: "white" }} className="justify-content-end">{username}</NavbarText>
                <NavItem className="d-flex">
                    <NavLink style={{ color: "white" }} id="logout" tag={Link} to="/logout">Logout</NavLink>
                </NavItem>
            </>
        )

    }

    return (
        <div>
            <Navbar expand="md" dark color="dark">
                <NavbarBrand href="/">
                    <img alt="logo" src="/logo1-recortado.png" style={{ height: 40, width: 40 }} />
                    PetClinic
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="ms-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="me-auto mb-2 mb-lg-0" navbar>
                        {userLinks}
                        {adminLinks}
                        {ownerLinks}
                    </Nav>
                    <Nav className="ms-auto mb-2 mb-lg-0" navbar>
                        {plans}
                        {publicLinks}
                        {userLogout}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;