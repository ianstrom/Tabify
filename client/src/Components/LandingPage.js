import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import UserProjects from "./UserProjects";
import FeaturedTablature from "./FeaturedTablature";

function LandingPage({setUser, user, setProjectToView}){

    const navigate = useNavigate()

    useEffect(() => {
        fetch("/check_session")
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
                navigate("/login")
            }
        })
    }, [])
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Welcome to the Landing Page!</h1>
            <FeaturedTablature user={user} setProjectToView={setProjectToView}/>
            <UserProjects user={user} setProjectToView={setProjectToView}/>
        </div>
    )
}
export default LandingPage