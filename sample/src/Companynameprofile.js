import React from "react";
import "./App.css";
import infosys from "./images/infosys.jpg";

export default function Companynameprofile(){
    return(

        <div className="container">
        <div className="blue-border">
            <div className="white-border">
                <img src={infosys} className="infosys-icon-size"></img>
                <div className="infosys-font">Infosys Limited</div>

                <table className="input-boxes">
                    <tr>
                        <input type="text" placeholder="Username or Email" className="input-box"></input>
                    </tr>
                    <tr>
                        <input type="password" placeholder="Password" className="input-box"></input>
                    </tr>
                </table>
                <button className="login-button">Login</button>

                <div className="sign-forget-align">
                    <div>Sign Up</div>
                    <div>Forget Password?</div>
                </div>

            <div style={{marginTop:"30px",fontSize:"13px"}}>Copyright<i>&copy;</i>infosyslimited.com</div>


            </div>


        </div>
        </div>
    )
}