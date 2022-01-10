import React, { Component } from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'
class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar dark color='info'>
            {/* <div className='container'> */}
              <NavbarBrand href='/'>AskMe</NavbarBrand>
            {/* </div> */}
        </Navbar>
        );
    }
}
export default NavBar;