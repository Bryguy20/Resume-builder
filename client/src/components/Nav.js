import React, { useState} from 'react';
import{ Form, Button, Alert } from 'react-bootstrap';
import { Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";

const NavBar = () => {
    return (
        <nav>
            <header>
                <NavBar bg="light" variant="dark" expand="lg"></NavBar>
                    <NavbarBrand href="/" className="font-weight-bold">Resume BUILDER!</NavbarBrand>
            </header>
        </nav>
    )
};

export default NavBar;