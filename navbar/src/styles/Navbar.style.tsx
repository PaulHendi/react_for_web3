import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #041B15;
    display: flex;
    flex-direction: column;
`

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2%;
`
export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 5%;
`

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;`

export const NavbarLinkCointainer = styled.div`
    display: flex;
`

export const NavbarLink = styled(Link)`
    color : #FFFFFF;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    &:hover {
        color: #22AAA1;
        transform: translate(0,  -2px);
    }
`    

export const Logo = styled.img`
margin: 5px;
max-width:60px;
height:auto;
` 
    
export const NavbarExtendedContainer = styled.div``