import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ tab, setProjectToView, user }) {
    const navigate = useNavigate()
    const handleClick = () => {
        if (tab?.user_id === user?.id) {
            setProjectToView(tab)
            navigate(`/edit_project/${tab?.id}`)
        } else {
            setProjectToView(tab)
            navigate(`/project/${tab?.id}`)
        }
    }
    return (
        <div onClick={handleClick} class="border flex-col rounded-md mx-auto p-2 shadow-lg hover:shadow-md hover:shadow-white/50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex-grow">
            <div class="text-scale sm:text-scale md:text-scale overflow-wrap font-medium mb-1">Artist:</div>
            <div class="text-scale sm:text-scale md:text-scale font-bold mb-2 truncate">{tab.artist}</div>
            <div class="text-scale sm:text-scale md:text-scale font-medium mb-1">Song:</div>
            <div class="text-scale sm:text-scale md:text-scale font-bold mb-2 truncate">{tab.title}</div>
            <div class="text-scale sm:text-scale md:text-scale font-medium">Average Rating:</div>
            <div class="text-scale sm:text-scale md:text-scale font-bold">{Math.round(tab.average_rating * 4) / 4}</div>
        </div>

    )
}

export default ProjectCard