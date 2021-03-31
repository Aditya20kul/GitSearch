import React, { useState, useContext } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavLink,
    NavbarText, Nav, NavItem
} from "reactstrap"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const Header = () => {
    const context = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to="/" className="text-white">GitHub Search App</Link></NavbarBrand>
            <NavbarText class="text-white">{
                context.user?.email ? context.user.email : ""
            }</NavbarText>
            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink onClick={()=>{context.setUser(null)}} tag={Link} to="/" className="text-white">
                                    Logout
                            </NavLink>
                            </NavItem>
                        ) : (
                            <>
                                <NavItem>
                                    <NavLink className="text-white" tag={Link} to="/signin">
                                        Signin
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="text-white" tag={Link} to="/signup">
                                        Signup
                            </NavLink>
                                </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header
