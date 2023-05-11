import React from "react";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";

function FeaturedTablature({ user, setProjectToView, featuredTabs }) {
    const navigate = useNavigate()
    const featuredProjectsToDisplay = featuredTabs ? featuredTabs.map((tab) => {
        return <ProjectCard key={tab.id} user={user} tab={tab} setProjectToView={setProjectToView} />
    }) : null;

    const handleClick = () => {
        navigate("/tablature")
    }

    return (
        <div style={{ height: 'auto' }} className='h-full max-w-full mx-auto flex flex-col border rounded-md mb-10 mt-10 flex-grow'>
            <h1 onClick={handleClick} className="text-4xl mx-auto md:text-6xl cursor-pointer mb-4 ml-6 mt-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-indigo-700 hover:scale-105">Tablature</h1>
            <div className="m-2 flex flex-wrap justify-center items-center gap-4 md:m-4 max-w-full">
                {featuredProjectsToDisplay}
            </div>
        </div>

    )
}

export default FeaturedTablature