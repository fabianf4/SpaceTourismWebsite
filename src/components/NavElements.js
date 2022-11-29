import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
    padding: 20px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: absolute;

    font-size: 16px;

    @media (min-width: 377px) {
        font-size: 28px;
    }
`

export const NavMenu = styled.div`
    height: 3.5em;
    width: 3.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    display: none;
    
    @media screen and (max-width: 500px){
        display: flex;
        z-index: 1000;
    } 
`

export const NavIcon = styled.img`
    width: 3em;
    height: 3em;
`

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;


    width: 60vw;
    padding: 80px 30px;

    position: absolute;
    right: 0;
    top: ${props => props.active ? "0" : "-100vh"};
    background: rgba(255, 255, 255, 0.04);
    opacity: 0.80;
    backdrop-filter: blur(40.7742px);

    transition: 0.5s ease-in-out;
    font-size: 1em;

    @media screen and (min-width: 500px){
        font-size: 0.8em;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        top:0;
        right: 0;

        width: 70%;
        height: 100%;
        padding: 0 30px;
    }

    @media screen and (min-width: 769px){
        width: 60%;
    }
`
export const NavItem = styled(NavLink)`
    font-family: var(--font-barlowCondensed);
    font-size: 1em;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color3-font);
    text-decoration: none;

    margin: 16px 0 16px 0;

    & > span {
        font-weight: 700;
        margin-right: 10px;
    }

    @media screen and (min-width: 500px){
        margin: 0px 2px;

        & > span {
            display: none;
        }
    }
`