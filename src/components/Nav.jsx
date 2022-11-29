import logo from "../assets/shared/logo.svg"
import iconHamburger from "../assets/shared/icon-hamburger.svg"
import iconClose from "../assets/shared/icon-close.svg"
import { useState } from "react"
import { NavLink } from "react-router-dom"

import {
    NavContainer,
    NavItem,
    NavItems,
    NavMenu,
    NavIcon
} from "./NavElements"

export default function Nav() {
    const [menu, setMenu] = useState(false)
    return (
        <NavContainer>
            <NavIcon src={logo} alt="logo" />

            <NavMenu onClick={() => setMenu(!menu)}>
                {!menu ? (
                    <img src={iconHamburger} alt="hamburger" />
                ) : (
                    <img src={iconClose} alt="close" />
                )}
            </NavMenu>

            <NavItems active={menu}>
                <NavItem to="/">
                    <span>01</span>
                    Home
                </NavItem>
                <NavItem to="/destination">
                    <span>02</span>
                    Destination
                </NavItem>
                <NavItem to="/">
                    <span>03</span>
                    Crew
                </NavItem>
                <NavItem to="/">
                    <span>04</span>
                    Technology
                </NavItem>
            </NavItems>
        </NavContainer>
    )
}
