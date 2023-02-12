import React from "react";
import "./App.css";

function ConnectingWallet() {
    console.log("Connecting wallet...");
  }

export default function ConnectWallet() {
    return (
        <div className="connect_wallet">
            <button onClick={() => ConnectingWallet()}>Connect wallet</button>
        </div>        
    );
}