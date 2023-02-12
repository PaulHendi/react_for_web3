import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <NavLink to="/">Connect Wallet</NavLink>
            <NavLink to="/nft">Nft</NavLink>
            <NavLink to="/coinflip">Coin Flip</NavLink>
            <NavLink to="/lottery">Lottery</NavLink>
        </div>
    )
}
