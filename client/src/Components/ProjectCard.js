import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function ProjectCard({tab, setProjectToView, user}){
    const navigate = useNavigate()

    const handleClick = () => {
        setProjectToView(tab)
        if (tab.user_id === user.id){
            navigate("/edit_project")
        } else {
            navigate("/project")
        }
    }
    return (
        <div onClick={handleClick} className="border rounded-md w-48">
            <div>Artist: {tab.artist}</div>
            <div>Song: {tab.title}</div>
            <div>Average Rating: {tab.average_rating}</div>
        </div>
    )
}

export default ProjectCard