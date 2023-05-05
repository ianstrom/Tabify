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
        <div className='h-auto mx-auto flex flex-col border rounded-md mb-10 mt-10 flex-grow'>
            <h1 onClick={handleClick} className="text-4xl rounded-md mx-auto cursor-pointer md:text-6xl mb-4 ml-6 mt-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-indigo-700 hover:scale-105 ">Your Projects</h1>
            <div className="m-2 max-w-full items-center md:m-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {projectsToDisplay}
            </div>
        </div>
    )
}

export default UserProjects