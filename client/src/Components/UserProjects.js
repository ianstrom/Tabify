import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function UserProjects({ user, userTabs, setProjectToView }) {
    const navigate = useNavigate()
    const projectsToDisplay = userTabs ? userTabs.slice(0, 8).map((tab) => {
        return <ProjectCard key={tab.id} user={user} tab={tab} setProjectToView={setProjectToView} />
    }) : null

    const handleClick = () => {
        navigate('/your_projects')
    }

    return (
        <div style={{ height: 'auto' }} className='h-full max-w-full mx-auto flex flex-col border rounded-md mb-10 flex-grow'>
            <h1 onClick={handleClick} className="text-4xl mx-auto md:text-6xl cursor-pointer mb-4 ml-6 mt-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-indigo-700 hover:scale-105">Your Projects</h1>
            <div className="m-2 flex flex-wrap justify-center items-center gap-4 md:m-4 max-w-full">
                {projectsToDisplay}
            </div>
        </div>
    )
}

export default UserProjects