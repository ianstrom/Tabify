import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import menu from "./menu.png"

function NavBar({ user, projectToView, setProjectToView }) {
    const [isClicked, setIsClicked] = useState(false)
    const [navigation, setNavigation] = useState("")
    const [navigateClicked, setNavigateClicked] = useState(false)
    const navigate = useNavigate()

    const handleLogOut = () => {
        fetch("https://tabify.onrender.com/logout", {
            method: "POST",
        })
            .then(window.location.reload())
    }

    const handleClick = (e) => {
        setNavigation(e.target.name)
        if (window.location.pathname.includes('/edit_project')) {
            if (sessionStorage.getItem('newTabData')) {
                setNavigateClicked(!navigateClicked)
            } else {
                setIsClicked(!isClicked)
                navigate(`${e.target.name}`)
            }
        } else {
            setIsClicked(!isClicked)
            navigate(`${e.target.name}`)
        }
    }

    const handleNavigateClick = () => {
        setIsClicked(!isClicked)
        setNavigateClicked(!navigateClicked)
        navigate(`${navigation}`)
        sessionStorage.removeItem('newTabData')
    }

    const handleCancelClick = () => {
        setIsClicked(!isClicked)
        setNavigateClicked(!navigateClicked)
    }


    return (
        <>
            {user ? (
                <>
                    {navigateClicked ? (
                        <div className="absolute flex justify-center items-center w-screen h-screen z-50 min-h-screen bg-black bg-opacity-70">
                            <div className="md:flex h-1/8 w-1/4 text-md flex flex-col bg-gray-700 border border-gray-900 p-6 rounded-lg justify-center text-center">
                                <p className="mb-4">You have unsaved changes.</p>
                                <div className="gap-1 flex">
                                    <button onClick={handleCancelClick} className="border border-gray-600 w-1/2 rounded-lg px-4 py-2 bg-gray-800 hover:bg-gray-900 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Cancel</button>
                                    <button onClick={handleNavigateClick} className="border border-gray-600 w-1/2 rounded-lg px-4 py-2 bg-red-600 hover:bg-red-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1" type="submit" >Don't Save</button>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    {isClicked ?
                        <div  className="h-screen flex flex-col items-center bg-navbar transition-colors ease-in-out duration-500">
                            <div className="mt-6 w-10 h-10">
                                {/* <svg onClick={() => setIsClicked(!isClicked)} className="color-white w-10 h-10 transform scale -rotate-90 ease-in-out duration-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" fill="white"></path> </svg> */}
                                <img src={menu} onClick={() => setIsClicked(!isClicked)} className="color-white w-10 h-10 transform hover:scale-110 -rotate-90 ease-in-out duration-500" />
                            </div>
                            <div className="left-0 top-0  h-screen flex flex-col items-center transition-transform ease-in-out duration-500 transform-gpu -translate-x">
                                <button onClick={handleClick} name="/" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-navbarbutton rounded-md shadow-md mx-2 my-2">Home</button>
                                <button onClick={handleClick} name="/create" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-navbarbutton rounded-md shadow-md mx-2 my-2">New Project</button>
                                <button onClick={handleClick} name="/tablature" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-navbarbutton rounded-md shadow-md mx-2 my-2">Search Tabs</button>
                                <button onClick={handleClick} name="/your_projects" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-navbarbutton rounded-md shadow-md mx-2 my-2">Your Projects</button>
                                {user ? (<button onClick={handleLogOut} className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-navbarbutton rounded-md shadow-md mx-2 my-2">Logout</button>) : null}
                            </div>
                        </div>
                        :
                        <div className="flex h-screen flex-col items-center transition-colors ease-in-out duration-500">
                            <div className="mt-6 w-10 h-10">
                                <img src={menu} onClick={() => setIsClicked(!isClicked)} className="color-white w-10 h-10 hover:scale-110 transform ease-in-out duration-500" />
                            </div>
                            <div className="left-0 top-0 h-screen flex flex-col items-center transition-transform ease-in-out duration-500 transform-gpu -translate-x-full">
                                <NavLink to="/" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-navbarbutton rounded-md shadow-md mx-2 my-2">Home</NavLink>
                                <NavLink to="/create" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 transition duration-200 ease-in-out bg-navbarbutton rounded-md shadow-md mx-2 my-2">New Project</NavLink>
                                <NavLink onClick={handleClick} to="/tablature" className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 hover:scale-110 transition duration-200 ease-in-out bg-navbarbutton rounded-md shadow-md mx-2 my-2">Search Tabs</NavLink>
                                <NavLink to="/your_projects" className="whitespace-nowrap text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 transition duration-200 ease-in-out bg-navbarbutton rounded-md shadow-md mx-2 my-2">Your Projects</NavLink>
                                {user ? (<button onClick={handleLogOut} className="text-2xl font-bold text-white hover:text-gray-300 py-2 px-4 rounded-md transition duration-200 ease-in-out bg-navbarbutton shadow-md mx-2 my-2">Logout</button>) : null}
                            </div>
                        </div>
                    }
                </>
            ) : null}
        </>
    )
}



export default NavBar;