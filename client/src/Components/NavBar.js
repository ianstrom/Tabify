import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "./menu.png"
import { NewTabDataContext } from "./EditProject";

function NavBar({ user, projectToView, setProjectToView }) {
    const [isClicked, setIsClicked] = useState(false)

    const handleLogOut = () => {
        fetch("/logout", {
            method: "POST",
        })
            .then(window.location.reload())
    }
    const handleReviewClick = () => {
        setIsClicked(!isClicked)
    }

    const handleClick = (e) => {
        console.log(window.location.pathname)
        if (window.location.pathname.includes('/edit_project')) {

        }
        setIsClicked(!isClicked)
        setProjectToView()
    }

    return (
        <>

            {user ? (
                <>
                    {isClicked ?
                        <div className="h-screen flex flex-col items-center bg-gray-600 transition-colors ease-in-out duration-500">
                            <div className="mt-6 w-10 h-10">
                                {/* <svg onClick={() => setIsClicked(!isClicked)} className="color-white w-10 h-10 transform scale -rotate-90 ease-in-out duration-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" fill="white"></path> </svg> */}
                                <img src={menu} onClick={() => setIsClicked(!isClicked)} className="color-white w-10 h-10 transform scale -rotate-90 ease-in-out duration-500" />
                            </div>
                            <div className="left-0 top-0  h-screen flex flex-col items-center transition-transform ease-in-out duration-500 transform-gpu -translate-x">
                                <NavLink onClick={handleClick} to="/" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-gray-700 rounded-md shadow-md mx-2 my-2">Home</NavLink>
                                <NavLink onClick={handleClick} to="/create" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-gray-700 rounded-md shadow-md mx-2 my-2">New Project</NavLink>
                                <NavLink onClick={handleClick} to="/tablature" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-gray-700 rounded-md shadow-md mx-2 my-2">Search Tabs</NavLink>
                                <NavLink onClick={handleClick} to="/your_projects" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-gray-700 rounded-md shadow-md mx-2 my-2">Your Projects</NavLink>
                                {projectToView ? (<NavLink to="/reviews/:id" onClick={handleReviewClick} className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 transition duration-200 ease-in-out bg-gray-700 rounded-md shadow-md mx-2 my-2">Reviews</NavLink>) : null}
                                {user ? (<button onClick={handleLogOut} className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-gray-700 rounded-md shadow-md mx-2 my-2">Logout</button>) : null}
                            </div>
                        </div>
                        :
                        <div className="flex h-screen flex-col items-center transition-colors ease-in-out duration-500">
                            <div className="mt-6 w-10 h-10">
                                <img src={menu} onClick={() => setIsClicked(!isClicked)} className="color-white w-10 h-10 transform ease-in-out duration-500" />
                            </div>
                            <div className="left-0 top-0 h-screen flex flex-col items-center transition-transform ease-in-out duration-500 transform-gpu -translate-x-full">
                                <NavLink to="/" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-gray-700 rounded-md shadow-md mx-2 my-2">Home</NavLink>
                                <NavLink to="/create" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 transition duration-200 ease-in-out bg-gray-700 rounded-md shadow-md mx-2 my-2">New Project</NavLink>
                                <NavLink onClick={handleClick} to="/tablature" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-gray-700 rounded-md shadow-md mx-2 my-2">Search Tabs</NavLink>
                                <NavLink to="/your_projects" className="whitespace-nowrap text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 transition duration-200 ease-in-out bg-gray-700 rounded-md shadow-md mx-2 my-2">Your Projects</NavLink>
                                {projectToView ? (<NavLink to="/reviews/:id" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 transition duration-200 ease-in-out bg-gray-700 rounded-md shadow-md mx-2 my-2">Reviews</NavLink>) : null}
                                {user ? (<button onClick={handleLogOut} className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 rounded-md transition duration-200 ease-in-out bg-gray-700 shadow-md mx-2 my-2">Logout</button>) : null}
                            </div>
                        </div>
                    }
                </>
            ) : null}
        </>
    )
}



export default NavBar;