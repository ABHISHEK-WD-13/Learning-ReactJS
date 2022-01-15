import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../dogcat.svg'
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);

    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (

            <div>
                <Navbar light expand="md">
                    <div className="container">
                        <div>
                            <NavbarBrand className="mr-auto navbar-brand" href="/"><img src={logo} height="40" width="51" alt='Ristorante Con Fusion' /></NavbarBrand>
                            <NavbarToggler className='pull-right' onClick={this.toggleNav} />
                            <Collapse className='pull-right' isOpen={this.state.isNavOpen} navbar>
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
                            </Collapse>
                        </div>
                    </div>
                </Navbar>
            </div>
        );
    }
}
export default Header