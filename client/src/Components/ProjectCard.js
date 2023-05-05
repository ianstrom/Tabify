import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ tab, setProjectToView, user }) {
    const navigate = useNavigate()
    const handleClick = () => {
        if (tab.user_id === user.id) {
            setProjectToView(tab)
            navigate(`/edit_project/${tab.id}`)
        } else {
            setProjectToView(tab)
            navigate(`/project/${tab.id}`)
        }
    }
    return (
        <div onClick={handleClick} class="border rounded-md w-48 sm:max-w-full md:min-w-72 md:max-w-full xl:max-w-full p-2 shadow-lg hover:shadow-md hover:shadow-white/50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
            <div class="text-sm sm:text-base md:text-lg overflow-wrap font-medium mb-1">Artist:</div>
            <div class="text-base sm:text-lg md:text-2xl font-bold mb-2">{tab.artist}</div>
            <div class="text-sm sm:text-base md:text-lg font-medium mb-1">Song:</div>
            <div class="text-base sm:text-lg md:text-2xl font-bold mb-2">{tab.title}</div>
            <div class="text-sm sm:text-base md:text-lg font-medium">Average Rating:</div>
            <div class="text-base sm:text-lg md:text-2xl font-bold">{tab.average_rating}</div>
        </div>

    )
}

export default ProjectCard