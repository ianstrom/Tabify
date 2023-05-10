import React, {useState} from "react";
import ProjectCard from "./ProjectCard";

function YourProjects({ user, userTabs, setProjectToView }) {
    const [search, setSearch] = useState("")

    const filteredProjects = userTabs ? userTabs.filter((tab) => tab.title.toLowerCase().includes(search.toLowerCase()) || tab.artist.toLowerCase().includes(search.toLowerCase())) : null

    const projectsToDisplay = filteredProjects ? filteredProjects.map((tab) => {
        return <ProjectCard key={tab.id} user={user} tab={tab} setProjectToView={setProjectToView} />
    }) : null

    return (
        <div className="flex mt-10 w-screen flex-col pl-52 pr-52 justify-center items-center">
            <form className="justify-center">
                <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} class="bg-gray-700 text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-gray-400" />
            </form>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
                {projectsToDisplay}
            </div>
        </div>
    )
}

export default YourProjects;