import React from "react";
import {NavbarContainer,
        LeftContainer,
        RightContainer,
        NavbarInnerContainer,
        NavbarExtendedContainer,
        NavbarLinkCointainer,
        NavbarLink,
        Logo,
        Name
} from "../styles/Navbar.style.jsx";

import LogoImg from "../assets/ObakeLogo.jpg";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
        <Logo src={LogoImg} />
        <Name>Obake</Name>
         </LeftContainer>
        <RightContainer>
          <NavbarLinkCointainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/mint">Mint</NavbarLink>
            <NavbarLink to="/lottery">Lottery</NavbarLink>
            <NavbarLink to="/coinflip">CoinFlip</NavbarLink>
            <NavbarLink to="/staking">Staking</NavbarLink>
          </NavbarLinkCointainer>
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer>
        
      </NavbarExtendedContainer>

    </NavbarContainer>

  );
}

export default Navbar;
