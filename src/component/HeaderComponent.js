import React, { useState } from 'react'
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../dogcat.svg'


function Header() {
    var [state, setState] = useState({ username: "", password: "", remember: false, isNavOpen: false, isModalOpen: false })
    function toggleNav() {
        var currState = state.isNavOpen;
        setState({ ...state, isNavOpen: !currState });
    }
    function toggleModal() {
        var currState = state.isModalOpen;
        setState({ ...state, isModalOpen: !currState });
    }
    function handleLogin(event) {
        toggleModal();
        alert("Username: " + state.username.value + " Password: " + state.password.value
            + " Remember: " + state.remember.checked);
        event.preventDefault();

    }
    return (
        <div>
            <Modal isOpen={state.isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                                innerRef={(input) => state.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                                innerRef={(input) => state.password = input} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={(input) => state.remember = input} />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            <Navbar light expand="md">
                <div className="container">
                    <div>
                        <NavbarBrand className="mr-auto navbar-brand" href="/"><img src={logo} height="40" width="51" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <NavbarToggler className='pull-right' onClick={toggleNav} />
                        <Collapse className='pull-right' isOpen={state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link " to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}
export default Header