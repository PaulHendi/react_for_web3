import React from "react";
import {NavbarContainer,
        LeftContainer,
        RightContainer,
        NavbarInnerContainer,
        NavbarExtendedContainer,
        NavbarLinkCointainer,
        NavbarLink,
        Logo
} from "../styles/Navbar.style.jsx";

import LogoImg from "../assets/melinoe.png";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
        <Logo src={LogoImg} />
         </LeftContainer>
        <RightContainer>
          <NavbarLinkCointainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/mint">Mint</NavbarLink>
            <NavbarLink to="/lottery">Lottery</NavbarLink>
            <NavbarLink to="/coinflip">CoinFlip</NavbarLink>
          </NavbarLinkCointainer>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer>
        
      </NavbarExtendedContainer>

    </NavbarContainer>

  );
}

export default Navbar;