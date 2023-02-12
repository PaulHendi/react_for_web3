import React from "react";
import "./App.css";

function Mint() {
    console.log("Minting page...");
}

function Lottery() {
    console.log("Lottery page...");
}

function CoinFlip() {
    console.log("CoinFlip page...");
}

export default function Header() {
    return (
        <div className="Header">
            <button onClick={() => Mint()}>Mint</button>
            <button onClick={() => Lottery()}>Lottery</button>
            <button onClick={() => CoinFlip()}>CoinFlip</button>
        </div>
    );
}