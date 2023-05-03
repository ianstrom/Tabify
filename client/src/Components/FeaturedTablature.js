import React, { useEffect } from "react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import {useNavigate} from "react-router-dom";

function FeaturedTablature({user, setProjectToView}){
    const [featuredProjects, setFeaturedProjects] = useState([])

    useEffect(() => {
        fetch('/tabs')
        .then(res => res.json())
        .then(data => {
            setFeaturedProjects(data)
        }
        )
    }, [])

    const featuredProjectsToDisplay = featuredProjects.map((tab) => {
        return <ProjectCard user={user} tab={tab} setProjectToView={setProjectToView} />
    })

    return (
        <div className='h-auto w-3/4 flex flex-col items-start border rounded-md mb-10 mt-10'>
            <h1 className="text-6xl mb-4 ml-2 mt-2">Featured Tablature</h1>
            <div className="m-2 gap-2 flex flex-wrap">
                {featuredProjectsToDisplay}
            </div>
        </div>
    )
}

export default FeaturedTablature