import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import ProjectCard from "./ProjectCard";


function UserProjects({user, setProjectToView}){
    const projectsToDisplay = user ? user.tabs.map((tab) => {
        return <ProjectCard user={user} tab={tab} setProjectToView={setProjectToView}/>
    }) : null
    return (
        <div className='h-60 w-3/4 flex flex-col items-start border rounded-md'>
            <h1 className="text-6xl mb-4 ml-2 mt-2">Your Projects</h1>
            <div className="m-2">
                {projectsToDisplay}
            </div>
        </div>
    )
}

export default UserProjects