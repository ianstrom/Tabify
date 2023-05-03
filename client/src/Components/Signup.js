import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Signup(){
    return (
        <div>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"></input>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Signup